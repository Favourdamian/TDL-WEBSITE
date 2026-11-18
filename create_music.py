import math
import struct
import wave
import random

SAMPLE_RATE = 44100
BPM = 114
BEAT_DUR = 60.0 / BPM
BAR_DUR = BEAT_DUR * 4
NUM_BARS = 16
TOTAL_DUR = BAR_DUR * NUM_BARS
TOTAL_SAMPLES = int(SAMPLE_RATE * TOTAL_DUR)

print(f"Generating {NUM_BARS} bars at {BPM} BPM ({TOTAL_DUR:.2f} seconds)...")

left_channel = [0.0] * TOTAL_SAMPLES
right_channel = [0.0] * TOTAL_SAMPLES

def midi_to_freq(m):
    return 440.0 * (2.0 ** ((m - 69) / 12.0))

# Chords: Fmaj7 -> G6 -> Em7 -> Am7 (luxurious pop / salon vibe)
CHORDS = [
    [53, 57, 60, 64], # Fmaj7
    [55, 59, 62, 67], # G
    [52, 55, 59, 62], # Em7
    [57, 60, 64, 67], # Am7
] * 4

BASS_NOTES = [41, 43, 40, 45] * 4 # F2, G2, E2, A2

def add_tone(start_time, dur, freq, amp, pan=0.5, wave_type='rhodes'):
    start_sample = int(start_time * SAMPLE_RATE)
    num_samples = int(dur * SAMPLE_RATE)
    
    for i in range(num_samples):
        idx = start_sample + i
        if idx >= TOTAL_SAMPLES:
            break
        t = i / SAMPLE_RATE
        
        if wave_type == 'rhodes':
            attack = 0.008
            decay = dur * 0.95
            env = (t / attack) if t < attack else math.exp(-3.2 * (t - attack) / decay)
            s = 0.65 * math.sin(2 * math.pi * freq * t)
            s += 0.22 * math.sin(2 * math.pi * freq * 2 * t) * math.exp(-3.5 * t)
            s += 0.10 * math.sin(2 * math.pi * freq * 3 * t) * math.exp(-5 * t)
            s += 0.08 * math.sin(2 * math.pi * freq * 4 * t) * math.exp(-7 * t)
        elif wave_type == 'bass':
            attack = 0.006
            env = (t / attack) if t < attack else math.exp(-2.0 * t / dur)
            s = 0.85 * math.sin(2 * math.pi * freq * t)
            s += 0.35 * math.sin(2 * math.pi * freq * 2 * t)
            s += 0.10 * math.sin(2 * math.pi * freq * 3 * t)
            s = math.tanh(1.3 * s)
        elif wave_type == 'sparkle':
            attack = 0.004
            env = (t / attack) if t < attack else math.exp(-4.0 * t / dur)
            s = 0.70 * math.sin(2 * math.pi * freq * t)
            s += 0.35 * math.sin(2 * math.pi * freq * 2 * t)
            s += 0.15 * math.sin(2 * math.pi * freq * 4 * t)
        else:
            env = math.sin(math.pi * t / dur)
            s = math.sin(2 * math.pi * freq * t)
            
        val = s * env * amp
        left_channel[idx] += val * (1.0 - pan)
        right_channel[idx] += val * pan

def add_kick(start_time, amp=0.72):
    start_sample = int(start_time * SAMPLE_RATE)
    dur = 0.32
    num_samples = int(dur * SAMPLE_RATE)
    for i in range(num_samples):
        idx = start_sample + i
        if idx >= TOTAL_SAMPLES: break
        t = i / SAMPLE_RATE
        f = 46.0 + 105.0 * math.exp(-30.0 * t)
        env = math.exp(-11.0 * t)
        val = math.sin(2 * math.pi * f * t) * env * amp
        val = math.tanh(val * 1.3) * 0.75
        left_channel[idx] += val * 0.5
        right_channel[idx] += val * 0.5

def add_snare(start_time, amp=0.42):
    start_sample = int(start_time * SAMPLE_RATE)
    dur = 0.22
    num_samples = int(dur * SAMPLE_RATE)
    random.seed(int(start_time * 1000) % 999999)
    for i in range(num_samples):
        idx = start_sample + i
        if idx >= TOTAL_SAMPLES: break
        t = i / SAMPLE_RATE
        tone = math.sin(2 * math.pi * 185.0 * t) * math.exp(-24.0 * t) * 0.45
        noise = (random.random() * 2.0 - 1.0) * math.exp(-17.0 * t) * 0.55
        val = (tone + noise) * amp
        left_channel[idx] += val * 0.48
        right_channel[idx] += val * 0.52

def add_hihat(start_time, amp=0.18, pan=0.5):
    start_sample = int(start_time * SAMPLE_RATE)
    dur = 0.07
    num_samples = int(dur * SAMPLE_RATE)
    random.seed(int(start_time * 2000) % 999999)
    for i in range(num_samples):
        idx = start_sample + i
        if idx >= TOTAL_SAMPLES: break
        t = i / SAMPLE_RATE
        noise = (random.random() * 2.0 - 1.0) * math.exp(-42.0 * t)
        val = noise * amp
        left_channel[idx] += val * (1.0 - pan)
        right_channel[idx] += val * pan

# 1. DRUMS (Kick, Snare, Hi-hats)
for bar in range(NUM_BARS):
    bar_start = bar * BAR_DUR
    add_kick(bar_start, 0.7)
    add_kick(bar_start + BEAT_DUR * 1.5, 0.45)
    add_kick(bar_start + BEAT_DUR * 2.0, 0.65)
    if bar >= 4:
        add_kick(bar_start + BEAT_DUR * 3.25, 0.42)

    # Snare on 2 and 4
    add_snare(bar_start + BEAT_DUR * 1.0, 0.45)
    add_snare(bar_start + BEAT_DUR * 3.0, 0.50)

    # 16th note crisp hi-hats
    for step in range(16):
        t_step = bar_start + step * (BEAT_DUR / 4.0)
        pan = 0.35 if (step % 2 == 0) else 0.65
        velocity = 0.22 if (step % 4 == 2) else 0.12 if (step % 2 == 1) else 0.16
        add_hihat(t_step, velocity, pan)

# 2. BASSLINE
for bar in range(NUM_BARS):
    bar_start = bar * BAR_DUR
    root = BASS_NOTES[bar]
    freq = midi_to_freq(root)
    add_tone(bar_start, BEAT_DUR * 0.7, freq, 0.55, 0.5, 'bass')
    add_tone(bar_start + BEAT_DUR * 1.5, BEAT_DUR * 0.5, freq, 0.45, 0.5, 'bass')
    add_tone(bar_start + BEAT_DUR * 2.5, BEAT_DUR * 0.8, freq + (2 if bar % 2 == 1 else 0), 0.52, 0.5, 'bass')
    add_tone(bar_start + BEAT_DUR * 3.5, BEAT_DUR * 0.4, midi_to_freq(root + 7), 0.42, 0.5, 'bass')

# 3. LUSH RHODES CHORDS
for bar in range(NUM_BARS):
    bar_start = bar * BAR_DUR
    chord = CHORDS[bar]
    
    # Strum 1
    for i, note in enumerate(chord):
        freq = midi_to_freq(note)
        pan = 0.25 + (i / float(len(chord))) * 0.5
        add_tone(bar_start + i * 0.012, BEAT_DUR * 1.4, freq, 0.18, pan, 'rhodes')
        
    # Strum 2
    for i, note in enumerate(chord):
        freq = midi_to_freq(note)
        pan = 0.75 - (i / float(len(chord))) * 0.5
        add_tone(bar_start + BEAT_DUR * 2.5 + i * 0.01, BEAT_DUR * 1.3, freq, 0.16, pan, 'rhodes')

# 4. CUTE GIRLY SPARKLE LEAD MELODY
melody_patterns = [
    # Bars 0-3
    [(0.0, 72, 0.35), (0.5, 76, 0.35), (1.0, 77, 0.4), (2.0, 76, 0.35), (2.75, 72, 0.4)],
    [(0.0, 74, 0.35), (1.0, 76, 0.35), (2.0, 79, 0.45), (3.0, 76, 0.35)],
    [(0.0, 71, 0.35), (0.75, 74, 0.35), (1.5, 76, 0.4), (2.5, 74, 0.35)],
    [(0.0, 69, 0.4), (1.0, 72, 0.35), (2.0, 76, 0.45), (3.0, 79, 0.5)],
    # Bars 4-7 (Octave higher slay variation)
    [(0.0, 84, 0.45), (0.75, 81, 0.4), (1.5, 77, 0.45), (2.5, 79, 0.4), (3.0, 81, 0.45)],
    [(0.0, 83, 0.4), (1.0, 79, 0.4), (2.0, 81, 0.45), (3.0, 76, 0.4)],
    [(0.0, 76, 0.4), (1.0, 79, 0.45), (2.0, 83, 0.5), (3.0, 81, 0.45)],
    [(0.0, 81, 0.45), (1.0, 77, 0.4), (2.0, 76, 0.4), (2.75, 74, 0.35), (3.5, 72, 0.45)],
] * 2

for b_idx in range(NUM_BARS):
    b_start = b_idx * BAR_DUR
    notes = melody_patterns[b_idx]
    for beat_off, midi_note, note_amp in notes:
        t = b_start + beat_off * BEAT_DUR
        f = midi_to_freq(midi_note)
        add_tone(t, BEAT_DUR * 0.9, f, note_amp * 0.26, 0.6, 'sparkle')
        add_tone(t + 0.16, BEAT_DUR * 0.7, f, note_amp * 0.09, 0.25, 'sparkle')

max_peak = 0.0001
for i in range(TOTAL_SAMPLES):
    max_peak = max(max_peak, abs(left_channel[i]), abs(right_channel[i]))

print(f"Peak level: {max_peak:.3f}, normalizing to 0.88...")
scale = 0.88 / max_peak

out_path = "studio-music.wav"
wav_file = wave.open(out_path, "w")
wav_file.setnchannels(2)
wav_file.setsampwidth(2)
wav_file.setframerate(SAMPLE_RATE)

frames = bytearray()
for i in range(TOTAL_SAMPLES):
    l_val = int(left_channel[i] * scale * 32767.0)
    l_val = max(-32767, min(32767, l_val))
    r_val = int(right_channel[i] * scale * 32767.0)
    r_val = max(-32767, min(32767, r_val))
    frames.extend(struct.pack("<hh", l_val, r_val))

wav_file.writeframes(frames)
wav_file.close()

print(f"SUCCESS: Generated {out_path} ({len(frames)} bytes, {TOTAL_DUR:.2f}s loop)")
