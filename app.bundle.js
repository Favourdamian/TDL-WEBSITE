// Pre-compiled Pure React 18 Application Bundle
// Zero-runtime-Babel dependency - Instant execution
(function() {
const {
  useState,
  useEffect,
  useMemo,
  useRef
} = React;

// ==========================================
// 1. BRAND DATA - THE DAMIAN LABEL (LAGOS, NIGERIA)
// ==========================================

const SALON_INFO = {
  name: "THE DAMIAN LABEL",
  shortName: "TDL",
  tagline: "Luxury Wig Revamping, Wigging & Nails Studio 💅✨",
  phone: "0810-002-4096",
  phoneFormatted: "+234 810 002 4096",
  whatsappUrl: "https://wa.me/2348100024096",
  email: "bookings@thedamianlabel.com",
  instagram: "@the_damian_label",
  instagramUrl: "https://www.instagram.com/the_damian_label?gwpx=MWQxM2plZmd5b2hlaw%3D%3D&utm_source=qr",
  tiktok: "@thedamianslabel",
  tiktokUrl: "https://www.tiktok.com/@thedamianslabel?_r=1&_t=ZS-9BVWxK7YJnt",
  address: "Ago Palace Way, Lagos, Nigeria",
  depositAmount: 5000,
  currency: "₦"
};
const DEFAULT_BANK_DETAILS = {
  bankName: "Moniepoint MFB",
  accountName: "THE DAMIAN LABEL",
  accountNumber: "8100024096"
};
const DEFAULT_AVAILABILITY = {
  // 0: Sun, 1: Mon, 2: Tue, 3: Wed, 4: Thu, 5: Fri, 6: Sat
  workingDays: [1, 2, 3, 4, 5, 6],
  // Mon - Sat open by default
  blockedDates: [],
  // Array of "YYYY-MM-DD" dates blocked by owner
  acceptingOrders: true,
  customNotice: "Studio open Monday - Saturday. Ago Palace Way, Lagos."
};
const SERVICES = [
// 1. HAIR REVAMPING
{
  id: "revamp-deluxe",
  category: "revamp",
  name: "Luxury Deluxe Wig Revamping & Treatment",
  price: 15000,
  duration: "48 hrs turnaround",
  badge: "Bestseller",
  badgeType: "bg-rose-100 text-rose-700 border border-rose-300",
  description: "Deep clarifying wash, intensive steam hydration spa, detangling, deep conditioning mask, silicone oil treatment, and silk press restoration.",
  image: "https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=700&q=80"
}, {
  id: "revamp-styling-curls",
  category: "revamp",
  name: "Wig Revamp + Bouncy Hollywood Pin Curls",
  price: 18000,
  duration: "48 hrs turnaround",
  badge: "Most Requested",
  badgeType: "bg-amber-100 text-amber-800 border border-amber-300",
  description: "Full revamp treatment plus bouncy barrel pin curls set and held with silk clips. Long-lasting bounce and mirror shine.",
  image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=700&q=80"
}, {
  id: "revamp-bone-straight",
  category: "revamp",
  name: "Wig Revamp + Bone Straight Silk Press",
  price: 16000,
  duration: "48 hrs turnaround",
  badge: "Glass Finish",
  badgeType: "bg-fuchsia-100 text-fuchsia-800 border border-fuchsia-300",
  description: "Restores stiff or tangled hair to featherweight, mirror-finish bone straight texture with heat protection and zero weigh-down.",
  image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=700&q=80"
}, {
  id: "hair-styling-only",
  category: "revamp",
  name: "Hair Styling (Curls, Crimps or Blunt Cut Bob)",
  price: 10000,
  duration: "Same day / 24 hrs",
  badge: "Quick Slay",
  badgeType: "bg-rose-100 text-rose-700 border border-rose-300",
  description: "Professional wand curls, mermaid crimps, bob trimming, or Hollywood volume waves on your already clean wig.",
  image: "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?auto=format&fit=crop&w=700&q=80"
},
// 2. WIGGING & GLUELESS CUSTOMIZATION
{
  id: "wigging-glueless",
  category: "wigging",
  name: "Glueless Wig Customization (Ready-to-Wear)",
  price: 20000,
  duration: "48 hrs turnaround",
  badge: "No Glue Needed",
  badgeType: "bg-emerald-100 text-emerald-800 border border-emerald-300",
  description: "Bleached knots, custom plucked natural hairline, elastic band attachment, and styled straight or curled. Wear and go!",
  image: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=700&q=80"
}, {
  id: "wigging-construction",
  category: "wigging",
  name: "Custom Machine Wig Making (Wigging from Bundles)",
  price: 18000,
  duration: "3 - 4 days",
  badge: "Flawless Fit",
  badgeType: "bg-fuchsia-100 text-fuchsia-800 border border-fuchsia-300",
  description: "Precision machine construction using your bundles and closure/frontal. Customized to your exact head measurement with adjustable straps.",
  image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=700&q=80"
},
// 3. HAIR VENTILATION & LACE REPAIR
{
  id: "ventilation-closure",
  category: "ventilation",
  name: "Hair Ventilation & Lace Repair (Closure / Frontal)",
  price: 22000,
  duration: "3 - 5 days",
  badge: "Save Your Wig",
  badgeType: "bg-amber-100 text-amber-800 border border-amber-300",
  description: "Fix balding closures, bald spots, and torn lace. We ventilate fresh human hair strand-by-strand into your lace so your wig looks brand new.",
  image: "https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=700&q=80"
},
// 4. NAILS (ACRYLICS & GEL)
{
  id: "nail-acrylic-full",
  category: "nails",
  name: "Sculpted Acrylics Full Set (Square / Coffin / Stiletto)",
  price: 18000,
  duration: "90 mins",
  badge: "Hot Girl Claws",
  badgeType: "bg-rose-100 text-rose-700 border border-rose-300",
  description: "Crisp shaping, durable non-lifting acrylic application, high-gloss gel top coat, and nourishing cuticle oil.",
  image: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=700&q=80"
}, {
  id: "nail-gel-overlay",
  category: "nails",
  name: "Gel Nails & BIAB Strength Overlay",
  price: 12000,
  duration: "60 mins",
  badge: "Clean Girl",
  badgeType: "bg-emerald-100 text-emerald-800 border border-emerald-300",
  description: "Builder in a bottle strengthening layer over natural nails. Prevents breakage and includes long-lasting glossy gel polish.",
  image: "https://images.unsplash.com/photo-1607779097040-26e80aa78e66?auto=format&fit=crop&w=700&q=80"
}, {
  id: "nail-french-chrome",
  category: "nails",
  name: "Glazed French Chrome / 3D Floral Art Acrylics",
  price: 22000,
  duration: "105 mins",
  badge: "Trending Art",
  badgeType: "bg-fuchsia-100 text-fuchsia-800 border border-fuchsia-300",
  description: "Showstopping 3D flower charms, glazed chrome powder, or animal print French tips exactly like our flier!",
  image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=700&q=80"
}, {
  id: "nail-pedi-deluxe",
  category: "nails",
  name: "Deluxe Pedicure & Foot Spa Treatment",
  price: 14000,
  duration: "60 mins",
  badge: "Pamper Session",
  badgeType: "bg-rose-100 text-rose-700 border border-rose-300",
  description: "Exfoliating foot scrub, dead skin buffing, soothing foot massage, hot towel wrap, and neat gel polish on toes.",
  image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=700&q=80"
},
// 5. VIP SLAY COMBOS
{
  id: "combo-tdl-glowup",
  category: "combos",
  name: "👑 The TDL Ultimate Glow-Up Bundle",
  price: 32000,
  originalPrice: 37000,
  duration: "Wig + Nails Session",
  badge: "Save ₦5,000",
  badgeType: "bg-fuchsia-100 text-fuchsia-800 border border-fuchsia-300",
  description: "Deluxe Wig Revamp with Bouncy Curls OR Silk Press + Sculpted Acrylic Full Set with nail art. Look like royalty!",
  image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=700&q=80"
}, {
  id: "combo-glueless-nails",
  category: "combos",
  name: "✨ Glueless Wig Customization + Gel Nails Combo",
  price: 28000,
  originalPrice: 32000,
  duration: "Wig + Nails Session",
  badge: "Save ₦4,000",
  badgeType: "bg-rose-100 text-rose-700 border border-rose-300",
  description: "Ready-to-wear glueless customization (bleached knots, plucked hairline & band) + BIAB Gel Manicure.",
  image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=700&q=80"
}];
const ADDONS = [{
  id: "addon-3d-art",
  name: "3D Floral Art & Crystals (2 nails)",
  price: 3000,
  appliesTo: "nails"
}, {
  id: "addon-chrome",
  name: "Glazed Donut / Chrome Finish",
  price: 2500,
  appliesTo: "nails"
}, {
  id: "addon-french",
  name: "French Tips / Animal Print Tips",
  price: 2500,
  appliesTo: "nails"
}, {
  id: "addon-extra-length",
  name: "XXL Extra Length Acrylics",
  price: 3000,
  appliesTo: "nails"
}, {
  id: "addon-dye-black",
  name: "Jet Black Wig Coloring / Dyeing",
  price: 8000,
  appliesTo: "revamp"
}, {
  id: "addon-bleach-knots",
  name: "Lace Knots Bleaching & Tinting",
  price: 5000,
  appliesTo: "wigging"
}, {
  id: "addon-express",
  name: "Express 24-Hour Revamp Rush Fee",
  price: 6000,
  appliesTo: "revamp"
}];
const PROMO_CODES = {
  "TDL10": {
    type: "percent",
    value: 10,
    name: "10% TDL Babe Perk"
  },
  "LAGOSBABE": {
    type: "percent",
    value: 15,
    name: "15% Lagos Girlies Special"
  },
  "REVAMP5K": {
    type: "fixed",
    value: 5000,
    name: "₦5,000 Off Discount"
  },
  "SLAY2K": {
    type: "fixed",
    value: 2000,
    name: "₦2,000 Slay Wheel Prize"
  },
  "VIP3K": {
    type: "fixed",
    value: 3000,
    name: "₦3,000 VIP Lucky Voucher"
  },
  "GLUELESS15": {
    type: "percent",
    value: 15,
    name: "15% Glueless Spin Winner"
  },
  "FREEGEL": {
    type: "fixed",
    value: 2000,
    name: "Free Gel Polish & Cuticle Care"
  },
  "SILKDROPS": {
    type: "fixed",
    value: 1500,
    name: "Free Silk Steam Drops"
  }
};
const WHEEL_PRIZES = [{
  code: "SLAY2K",
  label: "₦2,000 OFF",
  desc: "₦2,000 Off Any Revamp Service",
  color: "#e11d48",
  text: "#ffffff"
}, {
  code: "FREEGEL",
  label: "FREE GEL NAILS",
  desc: "Free Luxury Gel Topcoat & Care",
  color: "#ec4899",
  text: "#ffffff"
}, {
  code: "GLUELESS15",
  label: "15% OFF",
  desc: "15% Off Glueless Customization",
  color: "#8b5cf6",
  text: "#ffffff"
}, {
  code: "VIP3K",
  label: "₦3,000 VIP",
  desc: "₦3,000 Off VIP Slay Bundles",
  color: "#f59e0b",
  text: "#ffffff"
}, {
  code: "SILKDROPS",
  label: "SILK STEAM",
  desc: "Free Silk Steam Infusion Treatment",
  color: "#10b981",
  text: "#ffffff"
}, {
  code: "LAGOSBABE",
  label: "15% LAGOS",
  desc: "15% Lagos Girlies Special Perk",
  color: "#f43f5e",
  text: "#ffffff"
}];
const TRANSFORMATIONS = [{
  id: "revamp",
  title: "Bone Straight Steam Wash & Revamp",
  tag: "Tangled ➡️ Glass Hair",
  beforeImage: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
  afterImage: "https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=800&q=80",
  beforeDesc: "Frizzy, heat-damaged, matte, dry synthetic/human hair with heavy tangles.",
  afterDesc: "Deep steam treated, bone-straight silk press with ultra-mirror shine & fluid movement.",
  price: 10000,
  serviceId: "revamp-1"
}, {
  id: "ventilation",
  title: "HD Frontal Ventilation & Knot Bleaching",
  tag: "Bald Patches ➡️ Seamless Hairline",
  beforeImage: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=800&q=80",
  afterImage: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=800&q=80",
  beforeDesc: "Shedded lace, harsh black knots, over-plucked bald frontal gaps.",
  afterDesc: "Strand-by-strand needle ventilation, bleached invisible knots & customized scalp melt.",
  price: 18000,
  serviceId: "vent-1"
}, {
  id: "nails",
  title: "Luxury Acrylic Full Set & Gel Polish",
  tag: "Bare Nails ➡️ Stiletto French Ombre",
  beforeImage: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=800&q=80",
  afterImage: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=800&q=80",
  beforeDesc: "Short, chipped, bare natural nails without structure.",
  afterDesc: "Crisp almond/stiletto acrylic extensions with blush ombre, 3D charms & glossy topcoat.",
  price: 15000,
  serviceId: "nail-1"
}];
const SOCIAL_PROOF_EVENTS = [{
  client: "Chioma",
  area: "Ago Palace Way",
  service: "Bone Straight Revamp & Steam",
  time: "2m ago",
  icon: "✨"
}, {
  client: "Amina",
  area: "Surulere, Lagos",
  service: "Acrylic Full Set with Chrome",
  time: "7m ago",
  icon: "💅"
}, {
  client: "Blessing",
  area: "Festac Town",
  service: "Glueless Wigging & Scalp Melt",
  time: "14m ago",
  icon: "👑"
}, {
  client: "Zainab",
  area: "Lekki Phase 1",
  service: "Frontal Ventilation & Bleach Knots",
  time: "22m ago",
  icon: "🪡"
}, {
  client: "Kemi",
  area: "Ikeja",
  service: "VIP Luxury Slay Combo",
  time: "35m ago",
  icon: "💖"
}];
function formatNaira(amount) {
  return "₦" + Number(amount || 0).toLocaleString();
}
function formatReadableDate(dateStr) {
  if (!dateStr) return "";
  const parts = dateStr.split("-");
  const d = new Date(parts[0], parts[1] - 1, parts[2]);
  return d.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric"
  });
}
function getFormattedFutureDate(offsetDays = 0) {
  const d = new Date();
  d.setDate(d.getDate() + offsetDays);
  return d.toISOString().split("T")[0];
}

// ==========================================
// 2. MAIN REACT APPLICATION COMPONENT
// ==========================================

function App() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState(SERVICES[0]);
  const [selectedAddons, setSelectedAddons] = useState([]);
  const [selectedDate, setSelectedDate] = useState(getFormattedFutureDate(1));
  const [selectedTime, setSelectedTime] = useState("11:00 AM");
  const [calendarOffset, setCalendarOffset] = useState(0);

  // Client Details
  const [clientInfo, setClientInfo] = useState({
    name: "",
    email: "",
    phone: "",
    instagram: "",
    deliveryMode: "Drop-off at Studio (Ago Palace Way)",
    notes: ""
  });
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [promoInput, setPromoInput] = useState("");
  const [appliedPromo, setAppliedPromo] = useState(null);

  // ONLINE PAYMENT STATE
  const [paymentOption, setPaymentOption] = useState("deposit"); // "deposit" (₦5,000) or "full"
  const [paymentMethod, setPaymentMethod] = useState("paystack"); // "paystack" (Debit Card / Transfer / USSD) or "bank_transfer"
  const [paystackKey, setPaystackKey] = useState("");
  const [bankDetails, setBankDetails] = useState(DEFAULT_BANK_DETAILS);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const [isPaystackSimModalOpen, setIsPaystackSimModalOpen] = useState(false);
  const [pendingPaymentBooking, setPendingPaymentBooking] = useState(null);
  const [copiedAccount, setCopiedAccount] = useState(false);

  // Modals & Confirmation
  const [confirmedBooking, setConfirmedBooking] = useState(null);
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);
  const [latestNotification, setLatestNotification] = useState(null);
  const [ownerNotificationSettings, setOwnerNotificationSettings] = useState(() => {
    const stored = localStorage.getItem("tdl_owner_notifications");
    return stored ? JSON.parse(stored) : {
      soundAlerts: true,
      desktopAlerts: true
    };
  });

  // Style Quiz State
  const [quizState, setQuizState] = useState({
    wigCondition: null,
    styleGoal: null,
    nailGoal: null
  });
  const [quizResult, setQuizResult] = useState(null);

  // Admin & Storage
  const [adminBookings, setAdminBookings] = useState([]);
  const [emailSettings, setEmailSettings] = useState({
    enabled: false,
    serviceId: "",
    templateId: "",
    publicKey: ""
  });

  // Studio Availability & Working Days Management (Owner Controlled)
  const [availability, setAvailability] = useState(() => {
    const stored = localStorage.getItem("tdl_availability");
    return stored ? JSON.parse(stored) : DEFAULT_AVAILABILITY;
  });
  const [newBlockedDateInput, setNewBlockedDateInput] = useState("");
  const [adminTab, setAdminTab] = useState("bookings"); // "bookings", "availability", "payments", "alerts"
  const [adminBookingsFilter, setAdminBookingsFilter] = useState("all"); // "all", "pending", "confirmed"
  const [receiptToPrint, setReceiptToPrint] = useState(null);
  const [toasts, setToasts] = useState([]);
  const [newsletterEmail, setNewsletterEmail] = useState("");

  // Studio Background Music State
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const [musicVolume, setMusicVolume] = useState(0.40);
  const [isMusicMinimized, setIsMusicMinimized] = useState(false);
  const [musicTrack, setMusicTrack] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("tdl_music_track") || "studio-music.wav";
    }
    return "studio-music.wav";
  });
  const [musicTrackTitle, setMusicTrackTitle] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("tdl_music_title") || "TDL Luxury Slay Beats ✨";
    }
    return "TDL Luxury Slay Beats ✨";
  });
  const musicAudioRef = useRef(null);
  const musicFileInputRef = useRef(null);

  // 1. LUCKY SLAY WHEEL STATE
  const [isSpinWheelOpen, setIsSpinWheelOpen] = useState(false);
  const [isSpinning, setIsSpinning] = useState(false);
  const [wheelRotation, setWheelRotation] = useState(0);
  const [wonWheelPrize, setWonWheelPrize] = useState(null);

  // 2. BEFORE & AFTER TRANSFORMATION SLIDER STATE
  const [transformationTab, setTransformationTab] = useState("revamp");
  const [sliderPosition, setSliderPosition] = useState(50); // 0 to 100%

  // 3. LIVE SOCIAL PROOF TICKER
  const [socialProofIndex, setSocialProofIndex] = useState(0);
  const [isSocialProofVisible, setIsSocialProofVisible] = useState(true);

  // 4. MOBILE STICKY BOOKING BAR
  const [showMobileStickyBar, setShowMobileStickyBar] = useState(false);
  const bookingSectionRef = useRef(null);

  // ==========================================
  // GIRLY SOUND ENGINE (CUTE FAIRY CHIMES & BUBBLE POPS)
  // ==========================================
  const playCuteGirlySound = () => {
    // 1. Play HTML5 Audio file cute-chime.wav
    try {
      if (typeof window !== "undefined") {
        const audio = new Audio("cute-chime.wav");
        audio.volume = 0.55;
        const p = audio.play();
        if (p && p.catch) p.catch(() => {});
      }
    } catch (e) {}

    // 2. Play Web Audio Synthesizer glissando layer
    try {
      if (typeof window === "undefined") return;
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      if (ctx.state === "suspended") {
        ctx.resume();
      }
      const notes = [{
        freq: 698.46,
        delay: 0.00,
        dur: 0.45
      },
      // F5
      {
        freq: 880.00,
        delay: 0.08,
        dur: 0.50
      },
      // A5
      {
        freq: 1046.50,
        delay: 0.16,
        dur: 0.55
      },
      // C6
      {
        freq: 1318.51,
        delay: 0.24,
        dur: 0.60
      },
      // E6
      {
        freq: 1567.98,
        delay: 0.32,
        dur: 0.70
      },
      // G6
      {
        freq: 2093.00,
        delay: 0.40,
        dur: 0.95
      } // C7 (sparkling crystal fairy bell)
      ];
      notes.forEach(({
        freq,
        delay,
        dur
      }) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, ctx.currentTime + delay);
        if (freq > 1500) {
          osc.frequency.linearRampToValueAtTime(freq + 18, ctx.currentTime + delay + dur);
        }
        const noteStart = ctx.currentTime + delay;
        gain.gain.setValueAtTime(0.001, noteStart);
        gain.gain.exponentialRampToValueAtTime(0.28, noteStart + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.0001, noteStart + dur);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(noteStart);
        osc.stop(noteStart + dur);
      });
    } catch (e) {
      console.warn("Girly audio chime error:", e);
    }
  };
  const playCuteBubblePop = () => {
    try {
      if (typeof window === "undefined") return;
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      if (ctx.state === "suspended") ctx.resume();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(880, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(440, ctx.currentTime + 0.09);
      gain.gain.setValueAtTime(0.25, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.09);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.09);
    } catch (e) {}
  };
  const playNotificationChime = () => {
    playCuteGirlySound();
  };
  const triggerBrowserNotification = booking => {
    try {
      if (typeof window !== "undefined" && "Notification" in window && Notification.permission === "granted") {
        new Notification("New Appointment Submitted! 💅✨", {
          body: `${booking.clientName} booked ${booking.serviceName} (${booking.date} @ ${booking.time}). Amount: ₦${booking.amountPaidOnline || booking.depositPaid || 0}`,
          icon: "flier.jpg"
        });
      }
    } catch (e) {}
  };
  const tryDispatchEmailReceipt = booking => {
    try {
      if (typeof window !== "undefined" && window.emailjs && emailSettings && emailSettings.enabled && emailSettings.publicKey) {
        window.emailjs.send(emailSettings.serviceId, emailSettings.templateId, {
          to_name: booking.clientName,
          to_email: booking.clientEmail,
          service_name: booking.serviceName,
          booking_id: booking.id,
          booking_date: booking.date,
          booking_time: booking.time,
          amount_paid: booking.amountPaidOnline,
          phone: booking.clientPhone
        }, emailSettings.publicKey);
      }
    } catch (e) {}
  };
  const showToast = (message, type = "info") => {
    const id = Date.now() + Math.random();
    setToasts(prev => [...prev, {
      id,
      message,
      type
    }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 4000);
  };

  // ==========================================
  // BACKGROUND MUSIC PLAYBACK ENGINE
  // ==========================================
  const toggleMusicPlay = () => {
    playCuteBubblePop();
    const audio = musicAudioRef.current;
    if (!audio) return;
    if (isPlayingMusic) {
      audio.pause();
      setIsPlayingMusic(false);
      showToast("Music paused ⏸️", "info");
    } else {
      audio.volume = musicVolume;
      audio.play().then(() => {
        setIsPlayingMusic(true);
        showToast("Playing Studio Slay Music! 🎵✨", "success");
      }).catch(e => {
        console.warn("Audio play blocked:", e);
      });
    }
  };
  const handleMusicVolumeChange = newVol => {
    setMusicVolume(newVol);
    if (musicAudioRef.current) {
      musicAudioRef.current.volume = newVol;
    }
  };
  const handleCustomMusicUpload = e => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      const fileUrl = URL.createObjectURL(file);
      const title = file.name.replace(/\.[^/.]+$/, "");
      setMusicTrack(fileUrl);
      setMusicTrackTitle(title);
      try {
        localStorage.setItem("tdl_music_track", fileUrl);
        localStorage.setItem("tdl_music_title", title);
      } catch (err) {}
      if (musicAudioRef.current) {
        musicAudioRef.current.src = fileUrl;
        musicAudioRef.current.volume = musicVolume;
        musicAudioRef.current.play().then(() => {
          setIsPlayingMusic(true);
        }).catch(() => {});
      }
      showToast(`Loaded song: ${title}! 🎶✨`, "success");
    }
  };
  const handleResetToDefaultMusic = () => {
    setMusicTrack("studio-music.wav");
    setMusicTrackTitle("TDL Luxury Slay Beats ✨");
    try {
      localStorage.removeItem("tdl_music_track");
      localStorage.removeItem("tdl_music_title");
    } catch (err) {}
    if (musicAudioRef.current) {
      musicAudioRef.current.src = "studio-music.wav";
      musicAudioRef.current.volume = musicVolume;
      musicAudioRef.current.play().then(() => {
        setIsPlayingMusic(true);
      }).catch(() => {});
    }
    showToast("Reset to official TDL soundtrack! 💖", "success");
  };

  // ==========================================
  // INTERACTIVE SPARKLE CURSOR TRAIL & SOUND ON OPEN
  // ==========================================
  useEffect(() => {
    // 1. Play cute girly sound on initial open
    // 1. Initialize and play Background Music
    let audio = musicAudioRef.current;
    if (!audio) {
      audio = new Audio(musicTrack);
      musicAudioRef.current = audio;
    } else {
      audio.src = musicTrack;
    }
    audio.loop = true;
    audio.volume = musicVolume;
    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise.then(() => {
        setIsPlayingMusic(true);
      }).catch(() => {
        // Autoplay blocked by browser policy: unlock on first gesture
        const startMusicOnGesture = () => {
          if (audio && audio.paused) {
            audio.play().then(() => {
              setIsPlayingMusic(true);
            }).catch(() => {});
          }
          ['click', 'touchstart', 'scroll', 'pointerdown'].forEach(ev => {
            window.removeEventListener(ev, startMusicOnGesture);
          });
        };
        ['click', 'touchstart', 'scroll', 'pointerdown'].forEach(ev => {
          window.addEventListener(ev, startMusicOnGesture, {
            once: true,
            passive: true
          });
        });
      });
    }

    // 2. Play cute chime sound on initial open
    playCuteGirlySound();

    // 2. Browser autoplay gesture fallback (plays on first tap/click/scroll)
    let playedGestureSound = false;
    const handleFirstGesture = () => {
      if (!playedGestureSound) {
        playedGestureSound = true;
        playCuteGirlySound();
      }
      window.removeEventListener("click", handleFirstGesture);
      window.removeEventListener("touchstart", handleFirstGesture);
      window.removeEventListener("scroll", handleFirstGesture);
    };
    window.addEventListener("click", handleFirstGesture, {
      once: true,
      passive: true
    });
    window.addEventListener("touchstart", handleFirstGesture, {
      once: true,
      passive: true
    });
    window.addEventListener("scroll", handleFirstGesture, {
      once: true,
      passive: true
    });

    // 3. Interactive Sparkle Cursor Trail
    let lastSparkleTime = 0;
    const spawnSparkle = (x, y) => {
      const now = Date.now();
      if (now - lastSparkleTime < 50) return;
      lastSparkleTime = now;
      const icons = ["✨", "💖", "💅", "🌸", "⭐", "💋", "👑"];
      const icon = icons[Math.floor(Math.random() * icons.length)];
      const el = document.createElement("span");
      el.className = "sparkle-particle";
      el.innerText = icon;
      el.style.left = `${x}px`;
      el.style.top = `${y}px`;
      el.style.fontSize = `${Math.floor(Math.random() * 10 + 14)}px`;
      document.body.appendChild(el);
      setTimeout(() => {
        el.remove();
      }, 850);
    };
    const handleMouseMove = e => spawnSparkle(e.clientX, e.clientY);
    const handleTouchMove = e => {
      if (e.touches && e.touches[0]) {
        spawnSparkle(e.touches[0].clientX, e.touches[0].clientY);
      }
    };
    window.addEventListener("mousemove", handleMouseMove, {
      passive: true
    });
    window.addEventListener("touchmove", handleTouchMove, {
      passive: true
    });
    return () => {
      window.removeEventListener("click", handleFirstGesture);
      window.removeEventListener("touchstart", handleFirstGesture);
      window.removeEventListener("scroll", handleFirstGesture);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  // Social proof rotating timer
  useEffect(() => {
    const timer = setInterval(() => {
      setSocialProofIndex(prev => (prev + 1) % SOCIAL_PROOF_EVENTS.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  // Mobile sticky booking bar scroll listener
  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        setShowMobileStickyBar(window.scrollY > 320);
      }
    };
    window.addEventListener("scroll", handleScroll, {
      passive: true
    });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Spin Wheel Handler
  const handleSpinWheel = () => {
    if (isSpinning) return;
    setIsSpinning(true);
    setWonWheelPrize(null);
    playCuteBubblePop();
    const prizeIndex = Math.floor(Math.random() * WHEEL_PRIZES.length);
    const prize = WHEEL_PRIZES[prizeIndex];
    const sectorAngle = 360 / WHEEL_PRIZES.length;
    const extraSpins = 360 * 6;
    const targetAngle = extraSpins + (360 - (prizeIndex * sectorAngle + sectorAngle / 2));
    const nextRotation = wheelRotation + targetAngle;
    setWheelRotation(nextRotation);
    setTimeout(() => {
      setIsSpinning(false);
      setWonWheelPrize(prize);
      playCuteGirlySound();
      triggerConfetti();
      showToast(`🎉 You Won: ${prize.label}! ${prize.desc} ✨`, "success");
    }, 3800);
  };
  const handleApplyWheelPrize = () => {
    if (!wonWheelPrize) return;
    const code = wonWheelPrize.code;
    setPromoInput(code);
    if (PROMO_CODES[code]) {
      setAppliedPromo(PROMO_CODES[code]);
      showToast(`Applied ${wonWheelPrize.label} to your checkout! 💖`, "success");
    }
    setIsSpinWheelOpen(false);
    bookingSectionRef.current?.scrollIntoView({
      behavior: "smooth"
    });
  };
  useEffect(() => {
    const stored = localStorage.getItem("tdl_appointments");
    if (stored) {
      setAdminBookings(JSON.parse(stored));
    } else {
      const sample = [{
        id: "TDL-84102",
        createdAt: new Date().toISOString(),
        clientName: "Tolani Adebayo",
        clientEmail: "tolani@example.com",
        clientPhone: "0812-345-6789",
        clientInstagram: "@tolani_glam",
        deliveryMode: "Drop-off at Studio (Ago Palace Way)",
        serviceName: "👑 The TDL Ultimate Glow-Up Bundle",
        servicePrice: 32000,
        addons: ["3D Floral Art & Crystals (2 nails)"],
        addonsTotal: 3000,
        discountTotal: 5000,
        finalTotal: 30000,
        depositPaid: 5000,
        dueAtSalon: 25000,
        paymentStatus: "Paid Online (Paystack)",
        paymentReference: "TDL-PSTK-992144",
        amountPaidOnline: 5000,
        stylistName: "TDL Studio",
        date: getFormattedFutureDate(1),
        time: "11:30 AM",
        status: "Confirmed",
        notes: "Wig needs extra bounce, and almond shaped nails."
      }];
      setAdminBookings(sample);
      localStorage.setItem("tdl_appointments", JSON.stringify(sample));
    }
    const emailConf = localStorage.getItem("tdl_emailjs");
    if (emailConf) setEmailSettings(JSON.parse(emailConf));
    const storedKey = localStorage.getItem("tdl_paystack_key");
    if (storedKey) setPaystackKey(storedKey);
    const storedBank = localStorage.getItem("tdl_bank_details");
    if (storedBank) setBankDetails(JSON.parse(storedBank));
    const storedAvail = localStorage.getItem("tdl_availability");
    if (storedAvail) setAvailability(JSON.parse(storedAvail));
  }, []);
  const persistBookings = newBookings => {
    setAdminBookings(newBookings);
    localStorage.setItem("tdl_appointments", JSON.stringify(newBookings));
  };
  const updateAvailability = newAvail => {
    setAvailability(newAvail);
    localStorage.setItem("tdl_availability", JSON.stringify(newAvail));
    showToast("Studio availability updated! 📅", "success");
  };
  const toggleWorkingDay = dayIndex => {
    const exists = availability.workingDays.includes(dayIndex);
    const updatedDays = exists ? availability.workingDays.filter(d => d !== dayIndex) : [...availability.workingDays, dayIndex].sort();
    updateAvailability({
      ...availability,
      workingDays: updatedDays
    });
  };
  const handleAddBlockedDate = () => {
    if (!newBlockedDateInput) return;
    if (availability.blockedDates.includes(newBlockedDateInput)) {
      showToast("Date is already blocked!", "info");
      return;
    }
    const updated = {
      ...availability,
      blockedDates: [...availability.blockedDates, newBlockedDateInput].sort()
    };
    updateAvailability(updated);
    setNewBlockedDateInput("");
  };
  const handleRemoveBlockedDate = dateStr => {
    const updated = {
      ...availability,
      blockedDates: availability.blockedDates.filter(d => d !== dateStr)
    };
    updateAvailability(updated);
  };
  const handleOpenPrintReceipt = booking => {
    setReceiptToPrint(booking);
  };
  const handleTriggerBrowserPrint = () => {
    window.print();
  };
  const handleVerifyPayment = bookingId => {
    const updated = adminBookings.map(b => {
      if (b.id === bookingId) {
        return {
          ...b,
          status: "Confirmed",
          paymentStatus: "Verified & Money Received (Schedule Locked)",
          verifiedAt: new Date().toISOString()
        };
      }
      return b;
    });
    persistBookings(updated);
    playNotificationChime();
    showToast(`Payment verified for #${bookingId}! Schedule confirmed! 💖`, "success");
    if (confirmedBooking && confirmedBooking.id === bookingId) {
      setConfirmedBooking(prev => ({
        ...prev,
        status: "Confirmed",
        paymentStatus: "Verified & Money Received (Schedule Locked)",
        verifiedAt: new Date().toISOString()
      }));
    }
    if (receiptToPrint && receiptToPrint.id === bookingId) {
      setReceiptToPrint(prev => ({
        ...prev,
        status: "Confirmed",
        paymentStatus: "Verified & Money Received (Schedule Locked)",
        verifiedAt: new Date().toISOString()
      }));
    }
  };
  const handleDeclineBooking = bookingId => {
    const updated = adminBookings.map(b => {
      if (b.id === bookingId) {
        return {
          ...b,
          status: "Declined",
          paymentStatus: "Payment Not Received (Schedule Cancelled)",
          declinedAt: new Date().toISOString()
        };
      }
      return b;
    });
    persistBookings(updated);
    showToast(`Order #${bookingId} marked as declined/cancelled.`, "info");
    if (confirmedBooking && confirmedBooking.id === bookingId) {
      setConfirmedBooking(prev => ({
        ...prev,
        status: "Declined",
        paymentStatus: "Payment Not Received (Schedule Cancelled)",
        declinedAt: new Date().toISOString()
      }));
    }
    if (receiptToPrint && receiptToPrint.id === bookingId) {
      setReceiptToPrint(prev => ({
        ...prev,
        status: "Declined",
        paymentStatus: "Payment Not Received (Schedule Cancelled)",
        declinedAt: new Date().toISOString()
      }));
    }
  };
  const totals = useMemo(() => {
    const servicePrice = selectedService ? selectedService.price : 0;
    const addonsPrice = selectedAddons.reduce((sum, a) => sum + a.price, 0);
    const subtotal = servicePrice + addonsPrice;
    let discount = 0;
    if (appliedPromo) {
      if (appliedPromo.type === "percent") {
        discount = subtotal * appliedPromo.value / 100;
      } else if (appliedPromo.type === "fixed") {
        discount = Math.min(appliedPromo.value, subtotal);
      }
    }
    const finalTotal = Math.max(0, subtotal - discount);
    const deposit = Math.min(SALON_INFO.depositAmount, finalTotal);
    const dueAtSalon = finalTotal - deposit;
    const amountToPayNow = paymentOption === "deposit" ? deposit : finalTotal;
    return {
      servicePrice,
      addonsPrice,
      subtotal,
      discount,
      finalTotal,
      deposit,
      dueAtSalon,
      amountToPayNow
    };
  }, [selectedService, selectedAddons, appliedPromo, paymentOption]);
  const handleSelectService = service => {
    setSelectedService(service);
    setSelectedAddons([]);
    setStep(1);
    bookingSectionRef.current?.scrollIntoView({
      behavior: "smooth"
    });
    showToast(`Selected "${service.name}" ✨`, "success");
  };
  const handleToggleAddon = addon => {
    if (selectedAddons.some(a => a.id === addon.id)) {
      setSelectedAddons(selectedAddons.filter(a => a.id !== addon.id));
    } else {
      setSelectedAddons([...selectedAddons, addon]);
    }
  };
  const handleApplyPromo = () => {
    const code = promoInput.trim().toUpperCase();
    if (!code) {
      showToast("Enter a promo code, babe!", "info");
      return;
    }
    if (PROMO_CODES[code]) {
      setAppliedPromo(PROMO_CODES[code]);
      showToast(`Promo Applied! ${PROMO_CODES[code].name} 🎉`, "success");
    } else {
      showToast("Invalid code. Try TDL10, LAGOSBABE or REVAMP5K!", "warning");
    }
  };
  const copyToClipboard = text => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedAccount(true);
      showToast(`Copied ${text} to clipboard! 📋`, "success");
      setTimeout(() => setCopiedAccount(false), 2500);
    }
  };
  const triggerConfetti = () => {
    if (typeof window.confetti === "function") {
      window.confetti({
        particleCount: 90,
        spread: 80,
        origin: {
          y: 0.6,
          x: 0.2
        },
        colors: ["#f43f5e", "#fb7185", "#ffd1dc", "#d4af37"]
      });
      window.confetti({
        particleCount: 90,
        spread: 80,
        origin: {
          y: 0.6,
          x: 0.8
        },
        colors: ["#f43f5e", "#fb7185", "#ffd1dc", "#d4af37"]
      });
    }
  };

  // COMPLETE BOOKING & PROCESS PAYMENT
  const handleInitiatePayment = e => {
    e.preventDefault();
    if (!clientInfo.name || !clientInfo.email || !clientInfo.phone) {
      showToast("Please enter your name, email, and phone number!", "warning");
      return;
    }
    if (!termsAccepted) {
      showToast("Please accept the terms to proceed.", "warning");
      return;
    }
    const bookingId = "TDL-" + Math.floor(10000 + Math.random() * 90000);
    const amountToPay = totals.amountToPayNow;
    const baseBooking = {
      id: bookingId,
      createdAt: new Date().toISOString(),
      clientName: clientInfo.name,
      clientEmail: clientInfo.email,
      clientPhone: clientInfo.phone,
      clientInstagram: clientInfo.instagram || "None",
      deliveryMode: clientInfo.deliveryMode,
      serviceName: selectedService.name,
      servicePrice: selectedService.price,
      addons: selectedAddons.map(a => a.name),
      addonsTotal: totals.addonsPrice,
      discountTotal: totals.discount,
      finalTotal: totals.finalTotal,
      depositPaid: paymentOption === "deposit" ? totals.deposit : totals.finalTotal,
      dueAtSalon: paymentOption === "deposit" ? totals.dueAtSalon : 0,
      paymentOption,
      paymentMethod,
      stylistName: "TDL Studio",
      date: selectedDate,
      time: selectedTime,
      notes: clientInfo.notes || "None"
    };

    // Case 1: PAYSTACK ONLINE
    if (paymentMethod === "paystack") {
      // Check if real Paystack Pop is available and key is configured
      if (typeof window.PaystackPop !== "undefined" && paystackKey && paystackKey.startsWith("pk_")) {
        try {
          setIsProcessingPayment(true);
          const handler = window.PaystackPop.setup({
            key: paystackKey,
            email: clientInfo.email,
            amount: amountToPay * 100,
            // Paystack amount is in kobo
            currency: "NGN",
            ref: "TDL-PSTK-" + Math.floor(Math.random() * 10000000 + 1),
            metadata: {
              custom_fields: [{
                display_name: "Customer Name",
                variable_name: "customer_name",
                value: clientInfo.name
              }, {
                display_name: "Service",
                variable_name: "service",
                value: selectedService.name
              }, {
                display_name: "Phone",
                variable_name: "phone",
                value: clientInfo.phone
              }]
            },
            callback: function (response) {
              setIsProcessingPayment(false);
              finalizeConfirmedBooking(baseBooking, "Paid Online (Paystack Verified - Awaiting Owner Confirmation)", response.reference, amountToPay, "Pending Verification");
            },
            onClose: function () {
              setIsProcessingPayment(false);
              showToast("Paystack payment window closed.", "info");
            }
          });
          handler.openIframe();
          return;
        } catch (err) {
          console.warn("Paystack launch error:", err);
          setIsProcessingPayment(false);
        }
      }

      // If live Paystack key is not yet set or in demo mode, launch the interactive Nigerian Paystack checkout modal!
      setPendingPaymentBooking(baseBooking);
      setIsPaystackSimModalOpen(true);
      return;
    }

    // Case 2: DIRECT NIGERIAN BANK TRANSFER
    if (paymentMethod === "bank_transfer") {
      const transferRef = "TDL-TXF-" + Math.floor(100000 + Math.random() * 900000);
      finalizeConfirmedBooking(baseBooking, "Direct Bank Transfer (Awaiting Studio Credit Alert)", transferRef, amountToPay, "Pending Verification");
    }
  };
  const finalizeConfirmedBooking = (bookingData, paymentStatus, paymentReference, amountPaid, initialStatus = "Pending Verification") => {
    const completedBooking = {
      ...bookingData,
      paymentStatus,
      paymentReference,
      amountPaidOnline: amountPaid,
      status: initialStatus,
      // Stays "Pending Verification" until owner confirms credit alert!
      receiptGenerated: true,
      receiptGeneratedAt: new Date().toISOString()
    };
    const updated = [completedBooking, ...adminBookings];
    persistBookings(updated);
    setConfirmedBooking(completedBooking);
    setIsConfirmationOpen(true);
    setIsPaystackSimModalOpen(false);
    triggerConfetti();

    // 1. Play sound chime so owner hears it immediately
    if (ownerNotificationSettings.soundAlerts) {
      playNotificationChime();
    }

    // 2. Trigger desktop notification
    triggerBrowserNotification(completedBooking);

    // 3. Mark in owner activity feed & unread counter
    setLatestNotification(completedBooking);
    setUnreadCount(prev => prev + 1);

    // 4. Dispatch Email
    tryDispatchEmailReceipt(completedBooking);
    showToast(`Order #${completedBooking.id} submitted! Awaiting studio credit alert verification ⏳`, "info");

    // Reset Form
    setClientInfo({
      name: "",
      email: "",
      phone: "",
      instagram: "",
      deliveryMode: "Drop-off at Studio (Ago Palace Way)",
      notes: ""
    });
    setTermsAccepted(false);
    setSelectedAddons([]);
    setAppliedPromo(null);
    setStep(1);
  };
  const handleAddToGoogleCalendar = b => {
    const booking = b || confirmedBooking;
    if (!booking) return;
    const title = encodeURIComponent(`The Damian Label: ${booking.serviceName}`);
    const details = encodeURIComponent(`Appointment at The Damian Label.\nRef: #${booking.id}\nLocation: ${SALON_INFO.address}\nPhone: ${SALON_INFO.phone}`);
    const location = encodeURIComponent(SALON_INFO.address);
    const dClean = booking.date.replace(/-/g, "");
    const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dClean}T100000Z/${dClean}T120000Z&details=${details}&location=${location}`;
    window.open(url, "_blank");
  };
  const handleDownloadICS = b => {
    const booking = b || confirmedBooking;
    if (!booking) return;
    const dClean = booking.date.replace(/-/g, "");
    const icsContent = ["BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//The Damian Label//Lagos Studio//EN", "BEGIN:VEVENT", `SUMMARY:The Damian Label: ${booking.serviceName}`, `DESCRIPTION:Appointment at The Damian Label (#${booking.id})`, `LOCATION:${SALON_INFO.address}`, `DTSTART:${dClean}T100000Z`, `DTEND:${dClean}T120000Z`, "STATUS:CONFIRMED", "END:VEVENT", "END:VCALENDAR"].join("\r\n");
    const blob = new Blob([icsContent], {
      type: "text/calendar;charset=utf-8"
    });
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute("download", `TDL-Booking-${booking.id}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast("Downloaded .ICS Calendar file! 🗓️", "success");
  };
  const handleQuizAnswer = (qKey, val) => {
    const updated = {
      ...quizState,
      [qKey]: val
    };
    setQuizState(updated);
    if (updated.wigCondition && updated.styleGoal && updated.nailGoal) {
      if (updated.wigCondition === "balding") {
        setQuizResult({
          serviceId: "ventilation-closure",
          title: "Hair Ventilation & Lace Reconstruction",
          description: "Don't throw that expensive wig away! Our ventilation technique restores your balding closure/frontal to brand-new density."
        });
      } else if (updated.styleGoal === "glueless") {
        setQuizResult({
          serviceId: "wigging-glueless",
          title: "Glueless Ready-to-Wear Customization",
          description: "Zero mess, zero glue! Bleached knots, snatched hairline, and an adjustable band for effortless 2-second installs."
        });
      } else {
        setQuizResult({
          serviceId: "combo-tdl-glowup",
          title: "👑 The TDL Ultimate Glow-Up Bundle",
          description: "Our signature package: Deluxe Wig Revamping with bouncy pin curls plus a sculpted acrylic full set!"
        });
      }
    }
  };
  const displayedServices = useMemo(() => {
    if (activeCategory === "all") return SERVICES;
    return SERVICES.filter(s => s.category === activeCategory);
  }, [activeCategory]);
  const calendarDays = useMemo(() => {
    const now = new Date();
    const targetDate = new Date(now.getFullYear(), now.getMonth() + calendarOffset, 1);
    const year = targetDate.getFullYear();
    const month = targetDate.getMonth();
    const monthLabel = targetDate.toLocaleString("en-US", {
      month: "long",
      year: "numeric"
    });
    const firstDayIndex = targetDate.getDay();
    const totalDays = new Date(year, month + 1, 0).getDate();
    const todayStr = getFormattedFutureDate(0);
    const days = [];
    for (let i = 0; i < firstDayIndex; i++) {
      days.push({
        blank: true,
        key: `b-${i}`
      });
    }
    for (let d = 1; d <= totalDays; d++) {
      const dateStr = `${year}-${String(month + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
      const dayDate = new Date(year, month, d);
      const dayOfWeek = dayDate.getDay();
      const isPast = dateStr < todayStr;
      const isDayClosed = !availability.workingDays.includes(dayOfWeek);
      const isDateBlocked = availability.blockedDates.includes(dateStr);
      const isDisabled = isPast || isDayClosed || isDateBlocked;
      days.push({
        blank: false,
        dayNum: d,
        dateStr,
        dayOfWeek,
        isDayClosed,
        isDateBlocked,
        isDisabled,
        isSelected: selectedDate === dateStr,
        key: dateStr
      });
    }
    return {
      monthLabel,
      days
    };
  }, [calendarOffset, selectedDate, availability]);
  const timeSlots = ["09:30 AM", "11:00 AM", "12:30 PM", "02:00 PM", "03:30 PM", "05:00 PM"];
  return /*#__PURE__*/React.createElement("div", {
    className: "min-h-screen flex flex-col justify-between overflow-x-hidden w-full max-w-full"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sticky top-0 z-50 w-full bg-white shadow-md transition-all"
  }, /*#__PURE__*/React.createElement("aside", {
    className: "gradient-babe text-white py-1.5 px-3 sm:px-4 text-[11px] sm:text-xs font-bold tracking-wide shadow-xs"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-7xl mx-auto flex items-center justify-center gap-2 whitespace-nowrap overflow-hidden text-ellipsis text-center"
  }, /*#__PURE__*/React.createElement("span", {
    className: "inline-block animate-pulse"
  }, "\u2728"), /*#__PURE__*/React.createElement("span", null, "THE DAMIAN LABEL: Ago Palace Way, Lagos \u2022 Luxury Wig Revamping, Wigging & Nails"), /*#__PURE__*/React.createElement("span", {
    className: "hidden md:inline"
  }, "\u2022 Code: ", /*#__PURE__*/React.createElement("span", {
    className: "underline decoration-wavy font-black"
  }, "LAGOSBABE"), " (15% OFF)"), /*#__PURE__*/React.createElement("span", {
    className: "hidden lg:inline"
  }, "\u2022 0810-002-4096"), /*#__PURE__*/React.createElement("span", {
    className: "inline-block"
  }, "\uD83D\uDC85"))), /*#__PURE__*/React.createElement("header", {
    className: "glass-nav relative z-30 w-full overflow-visible"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-full max-w-[1600px] mx-auto px-3 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-2 sm:gap-4 overflow-visible"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "flex items-center gap-2 flex-shrink-0 group"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-9 h-9 sm:w-10 sm:h-10 rounded-2xl gradient-babe flex items-center justify-center text-white font-black text-xs sm:text-sm shadow-md group-hover:rotate-6 transition-transform flex-shrink-0"
  }, "TDL"), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-1.5"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-base sm:text-xl font-black tracking-wider text-zinc-900 font-serif-lux whitespace-nowrap block"
  }, "THE DAMIAN LABEL"), /*#__PURE__*/React.createElement("span", {
    className: "hidden sm:inline-block px-2 py-0.5 rounded-full bg-rose-100 text-rose-700 text-[10px] font-bold uppercase tracking-wider whitespace-nowrap"
  }, "Lagos"))), /*#__PURE__*/React.createElement("nav", {
    className: "hidden xl:flex items-center gap-4 2xl:gap-6 text-xs sm:text-sm font-semibold text-zinc-700 whitespace-nowrap flex-shrink min-w-0"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#services",
    className: "hover:text-rose-600 transition"
  }, "Services & Pricing"), /*#__PURE__*/React.createElement("a", {
    href: "#transformations",
    className: "hover:text-rose-600 transition"
  }, "Before & After \u2728"), /*#__PURE__*/React.createElement("a", {
    href: "#booking",
    className: "hover:text-rose-600 transition"
  }, "Book Online"), /*#__PURE__*/React.createElement("a", {
    href: "#flier-section",
    className: "hover:text-rose-600 transition"
  }, "Our Flier"), /*#__PURE__*/React.createElement("a", {
    href: "#quiz",
    className: "hover:text-rose-600 transition"
  }, "Style Quiz"), /*#__PURE__*/React.createElement("a", {
    href: "#reviews",
    className: "hover:text-rose-600 transition"
  }, "Reviews")), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-1.5 sm:gap-2 flex-shrink-0 whitespace-nowrap pr-1 sm:pr-2"
  }, /*#__PURE__*/React.createElement("a", {
    href: SALON_INFO.instagramUrl,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "hidden sm:flex w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-amber-500 hover:opacity-90 hover:scale-105 active:scale-95 text-white text-xs font-bold shadow-xs transition items-center justify-center flex-shrink-0",
    title: "Follow @the_damian_label on Instagram"
  }, /*#__PURE__*/React.createElement("span", null, "\uD83D\uDCF8")), /*#__PURE__*/React.createElement("a", {
    href: SALON_INFO.tiktokUrl,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "hidden sm:flex w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-zinc-950 hover:bg-black hover:scale-105 active:scale-95 text-white text-xs font-bold shadow-xs transition items-center justify-center flex-shrink-0",
    title: "Follow @thedamianslabel on TikTok"
  }, /*#__PURE__*/React.createElement("span", null, "\uD83C\uDFB5")), /*#__PURE__*/React.createElement("a", {
    href: "https://wa.me/2348100024096",
    target: "_blank",
    className: "w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-emerald-500 hover:bg-emerald-600 hover:scale-105 active:scale-95 text-white text-xs font-bold shadow-xs transition flex items-center justify-center flex-shrink-0",
    title: "Chat on WhatsApp (0810-002-4096)"
  }, /*#__PURE__*/React.createElement("span", null, "\uD83D\uDCAC")), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => {
      playCuteGirlySound();
      showToast("Playing cute girly fairy chime! 💖✨", "success");
    },
    className: "hidden sm:flex relative w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-pink-100 hover:bg-pink-200 text-pink-700 hover:scale-110 active:scale-95 transition border border-pink-300 items-center justify-center text-xs sm:text-sm flex-shrink-0 cursor-pointer shadow-xs animate-bounce",
    title: "Play Cute Girly Chime \u2728"
  }, "\uD83D\uDC96"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: toggleMusicPlay,
    style: {
      background: isPlayingMusic ? 'linear-gradient(135deg, #e11d48 0%, #f43f5e 100%)' : '#ffffff',
      border: isPlayingMusic ? '1.5px solid #be123c' : '1px solid #fecdd3',
      boxShadow: isPlayingMusic ? '0 0 12px rgba(225, 29, 72, 0.45)' : 'none',
      color: isPlayingMusic ? '#ffffff' : '#e11d48'
    },
    className: "relative w-8 h-8 sm:w-9 sm:h-9 rounded-full transition flex items-center justify-center text-xs sm:text-sm flex-shrink-0 cursor-pointer shadow-xs hover:scale-110 active:scale-95",
    title: isPlayingMusic ? "Studio Music Playing (Click to Pause ⏸️)" : "Play Studio Music 🎵"
  }, /*#__PURE__*/React.createElement("span", null, isPlayingMusic ? "🎵" : "🔈"), isPlayingMusic && /*#__PURE__*/React.createElement("span", {
    className: "absolute -top-1 -right-1 w-2 h-2 bg-emerald-400 rounded-full animate-ping"
  })), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => {
      setIsAdminOpen(true);
      setUnreadCount(0);
    },
    className: "hidden sm:flex relative w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-zinc-100 hover:bg-rose-100 text-zinc-700 hover:text-rose-600 transition border border-zinc-200 items-center justify-center text-xs sm:text-sm flex-shrink-0 cursor-pointer",
    title: "Owner Portal (Private)"
  }, "\uD83D\uDC51", unreadCount > 0 && /*#__PURE__*/React.createElement("span", {
    className: "absolute -top-1 -right-1 w-4 h-4 bg-rose-600 text-white rounded-full text-[9px] font-black flex items-center justify-center animate-pulse shadow"
  }, unreadCount)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => {
      playCuteGirlySound();
      bookingSectionRef.current?.scrollIntoView({
        behavior: "smooth"
      });
    },
    style: {
      backgroundColor: '#e11d48',
      background: 'linear-gradient(135deg, #e11d48 0%, #f43f5e 50%, #be123c 100%)',
      color: '#ffffff',
      boxShadow: '0 4px 20px rgba(225, 29, 72, 0.55), 0 0 15px rgba(244, 63, 94, 0.4)',
      border: '1.5px solid rgba(255, 255, 255, 0.8)',
      whiteSpace: 'nowrap'
    },
    className: "btn-book-slay-full inline-flex items-center justify-center gap-1.5 px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-white text-xs sm:text-sm font-black whitespace-nowrap cursor-pointer shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all transform flex-shrink-0 ml-1 sm:ml-2"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#ffffff',
      fontWeight: 900,
      textShadow: '0 1px 2px rgba(0, 0, 0, 0.35)'
    }
  }, "Book Slay \u2728")))))), /*#__PURE__*/React.createElement("section", {
    className: "relative pt-10 pb-20 overflow-hidden"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-7 text-center lg:text-left space-y-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-rose-200 text-xs font-bold text-rose-600 shadow-sm"
  }, /*#__PURE__*/React.createElement("span", null, "\uD83D\uDCCD Ago Palace Way, Lagos, Nigeria"), /*#__PURE__*/React.createElement("span", {
    className: "w-1.5 h-1.5 rounded-full bg-rose-500"
  }), /*#__PURE__*/React.createElement("span", null, "0810-002-4096")), /*#__PURE__*/React.createElement("h1", {
    className: "text-4xl sm:text-6xl lg:text-7xl font-black text-zinc-900 leading-[1.08] font-serif-lux"
  }, "Give Your Wigs & Nails The ", /*#__PURE__*/React.createElement("span", {
    className: "gradient-pink-text"
  }, "Luxury Slay"), " They Deserve."), /*#__PURE__*/React.createElement("p", {
    className: "text-base sm:text-lg text-zinc-600 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal"
  }, "Welcome to ", /*#__PURE__*/React.createElement("strong", null, "THE DAMIAN LABEL"), ". We specialize in bringing tired wigs back to life with deep steam revamping, flawless glueless customization, strand-by-strand hair ventilation, and crisp acrylic nail sets for our Lagos babes."), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1 text-xs font-bold"
  }, /*#__PURE__*/React.createElement("span", {
    className: "px-3 py-1 rounded-full bg-rose-100 text-rose-700"
  }, "\u2728 Hair Revamping"), /*#__PURE__*/React.createElement("span", {
    className: "px-3 py-1 rounded-full bg-purple-100 text-purple-700"
  }, "\uD83D\uDC51 Wigging"), /*#__PURE__*/React.createElement("span", {
    className: "px-3 py-1 rounded-full bg-amber-100 text-amber-800"
  }, "\uD83E\uDEA1 Hair Ventilation"), /*#__PURE__*/React.createElement("span", {
    className: "px-3 py-1 rounded-full bg-pink-100 text-pink-700"
  }, "\uD83D\uDC85 Acrylics & Gel Nails"), /*#__PURE__*/React.createElement("span", {
    className: "px-3 py-1 rounded-full bg-emerald-100 text-emerald-700"
  }, "\u2728 Glueless Wigs")), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1 text-xs font-bold"
  }, /*#__PURE__*/React.createElement("a", {
    href: SALON_INFO.instagramUrl,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-purple-100 via-pink-100 to-amber-100 text-pink-800 border border-pink-200 hover:scale-105 transition shadow-xs"
  }, /*#__PURE__*/React.createElement("span", null, "\uD83D\uDCF8"), /*#__PURE__*/React.createElement("span", null, "Instagram: ", /*#__PURE__*/React.createElement("span", {
    className: "underline font-black"
  }, "@the_damian_label"))), /*#__PURE__*/React.createElement("a", {
    href: SALON_INFO.tiktokUrl,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-100 text-zinc-900 border border-zinc-300 hover:scale-105 transition shadow-xs"
  }, /*#__PURE__*/React.createElement("span", null, "\uD83C\uDFB5"), /*#__PURE__*/React.createElement("span", null, "TikTok: ", /*#__PURE__*/React.createElement("span", {
    className: "underline font-black"
  }, "@thedamianslabel")))), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => {
      playCuteGirlySound();
      triggerConfetti();
      bookingSectionRef.current?.scrollIntoView({
        behavior: "smooth"
      });
    },
    style: {
      backgroundColor: '#e11d48',
      background: 'linear-gradient(135deg, #e11d48 0%, #f43f5e 50%, #be123c 100%)',
      color: '#ffffff',
      boxShadow: '0 6px 25px rgba(225, 29, 72, 0.5)',
      border: '1.5px solid rgba(255, 255, 255, 0.7)'
    },
    className: "btn-book-slay-full w-full sm:w-auto px-8 py-4 rounded-full text-white text-base font-black shadow-xl hover:shadow-2xl transition transform hover:-translate-y-1 flex items-center justify-center gap-2 cursor-pointer"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#ffffff',
      fontWeight: 900
    }
  }, "Book Appointment Online \u2728")), /*#__PURE__*/React.createElement("a", {
    href: "https://wa.me/2348100024096?text=Hello%20The%20Damian%20Label,%20I%20want%20to%20book%20a%20wig%20revamp%20and%20nails%20appointment!",
    target: "_blank",
    className: "w-full sm:w-auto px-8 py-4 rounded-full bg-white text-emerald-600 border border-emerald-300 text-base font-bold shadow-sm hover:bg-emerald-50 transition flex items-center justify-center gap-2"
  }, /*#__PURE__*/React.createElement("span", null, "\uD83D\uDCAC Chat on WhatsApp"))), /*#__PURE__*/React.createElement("div", {
    className: "pt-6 border-t border-rose-100 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-zinc-600"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-amber-400 text-base"
  }, "\u2605\u2605\u2605\u2605\u2605"), /*#__PURE__*/React.createElement("span", {
    className: "font-bold text-zinc-800"
  }, "Top Rated in Ago Palace Way")), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-1.5"
  }, /*#__PURE__*/React.createElement("span", null, "\uD83D\uDC8C"), /*#__PURE__*/React.createElement("span", {
    className: "font-semibold text-zinc-800"
  }, "Instant Email Receipts")), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-1.5"
  }, /*#__PURE__*/React.createElement("span", null, "\uD83D\uDCE6"), /*#__PURE__*/React.createElement("span", {
    className: "font-semibold text-zinc-800"
  }, "Drop-off & Dispatch Delivery")))), /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-5 relative"
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative mx-auto max-w-md"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute -top-3 -right-2 z-10 glass-panel px-3.5 py-1.5 rounded-full shadow-lg border border-pink-200 flex items-center gap-1.5 animate-float-girly text-xs font-black text-rose-600"
  }, /*#__PURE__*/React.createElement("span", null, "\uD83D\uDC96"), /*#__PURE__*/React.createElement("span", null, "Luxury Studio Slay \u2728")), /*#__PURE__*/React.createElement("div", {
    className: "absolute -top-3 -left-2 z-10 glass-panel px-3 py-1.5 rounded-full shadow-lg border border-pink-200 flex items-center gap-1.5 animate-bounce text-xs font-black text-pink-700"
  }, /*#__PURE__*/React.createElement("span", null, "\uD83D\uDC85"), /*#__PURE__*/React.createElement("span", null, "Lagos Studio")), /*#__PURE__*/React.createElement("div", {
    className: "rounded-[36px] overflow-hidden shadow-2xl border-4 border-white bg-white p-2"
  }, /*#__PURE__*/React.createElement("img", {
    src: "flier.jpg",
    alt: "The Damian Label Official Flier",
    className: "w-full h-auto rounded-[30px] object-cover"
  })), /*#__PURE__*/React.createElement("div", {
    className: "absolute -bottom-3 left-2 sm:-left-3 glass-panel p-3 sm:p-4 rounded-2xl sm:rounded-3xl shadow-xl flex items-center gap-2.5 sm:gap-3 border border-white max-w-[90%]"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-xl sm:text-2xl flex-shrink-0"
  }, "\uD83D\uDCCD"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "text-xs font-bold text-zinc-900 truncate"
  }, "Ago Palace Way, Lagos"), /*#__PURE__*/React.createElement("p", {
    className: "text-[11px] text-rose-500 font-semibold truncate"
  }, "Call / WhatsApp: 0810-002-4096")))))))), /*#__PURE__*/React.createElement("section", {
    id: "services",
    className: "py-20 bg-white border-t border-rose-100"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-center max-w-2xl mx-auto mb-10"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-bold text-rose-500 uppercase tracking-widest block mb-1"
  }, "Our Official Price List"), /*#__PURE__*/React.createElement("h2", {
    className: "text-3xl sm:text-5xl font-black text-zinc-900 font-serif-lux"
  }, "Wig Revamping, Wigging & Nails"), /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-zinc-600 mt-2"
  }, "Transparent pricing in Nigerian Naira (\u20A6). Book online or drop off your wigs at our Ago Palace Way studio.")), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-center gap-2 sm:gap-3 mb-12 flex-wrap"
  }, [{
    id: "all",
    label: "All Services"
  }, {
    id: "revamp",
    label: "✨ Hair Revamping & Styling"
  }, {
    id: "wigging",
    label: "👑 Wigging & Glueless"
  }, {
    id: "ventilation",
    label: "🪡 Hair Ventilation"
  }, {
    id: "nails",
    label: "💅 Nails (Acrylics & Gel)"
  }, {
    id: "combos",
    label: "💖 VIP Slay Bundles"
  }].map(tab => /*#__PURE__*/React.createElement("button", {
    key: tab.id,
    onClick: () => {
      playCuteBubblePop();
      setActiveCategory(tab.id);
    },
    className: `px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold shadow-sm transition hover:scale-105 active:scale-95 ${activeCategory === tab.id ? 'gradient-babe text-white shadow-md' : 'bg-rose-50/70 text-zinc-700 hover:border-rose-300 border border-zinc-200'}`
  }, tab.label))), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
  }, displayedServices.map(service => /*#__PURE__*/React.createElement("div", {
    key: service.id,
    className: "service-card glass-panel rounded-3xl overflow-hidden flex flex-col justify-between border border-rose-100 hover:border-rose-300"
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative h-56 overflow-hidden"
  }, /*#__PURE__*/React.createElement("img", {
    src: service.image,
    alt: service.name,
    className: "w-full h-full object-cover transition-transform duration-700 hover:scale-105"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute top-3 left-3"
  }, /*#__PURE__*/React.createElement("span", {
    className: `inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${service.badgeType}`
  }, service.badge)), /*#__PURE__*/React.createElement("div", {
    className: "absolute bottom-3 right-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-zinc-700 flex items-center gap-1 shadow-sm"
  }, /*#__PURE__*/React.createElement("span", null, "\u23F1\uFE0F ", service.duration))), /*#__PURE__*/React.createElement("div", {
    className: "p-6 flex-1 flex flex-col justify-between"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between items-start mb-2"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "text-lg font-bold text-zinc-900 leading-snug"
  }, service.name), /*#__PURE__*/React.createElement("div", {
    className: "text-right flex-shrink-0 ml-2"
  }, service.originalPrice && /*#__PURE__*/React.createElement("span", {
    className: "text-xs text-zinc-400 line-through block"
  }, formatNaira(service.originalPrice)), /*#__PURE__*/React.createElement("span", {
    className: "text-2xl font-black text-rose-600"
  }, formatNaira(service.price)))), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-zinc-600 line-clamp-3 mb-4 leading-relaxed"
  }, service.description)), /*#__PURE__*/React.createElement("div", {
    className: "pt-4 border-t border-rose-100 flex items-center justify-between"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-semibold text-rose-500 uppercase tracking-wider"
  }, "Deposit: ", formatNaira(SALON_INFO.depositAmount)), /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      playCuteBubblePop();
      handleSelectService(service);
    },
    className: "px-5 py-2.5 rounded-full gradient-babe text-white text-xs font-bold shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 hover:scale-105 active:scale-95 flex items-center gap-1.5 cursor-pointer"
  }, /*#__PURE__*/React.createElement("span", null, "Book This"), /*#__PURE__*/React.createElement("span", null, "\u2728"))))))))), /*#__PURE__*/React.createElement("section", {
    id: "transformations",
    className: "py-20 bg-gradient-to-b from-white via-rose-50/40 to-white border-t border-rose-100"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-center max-w-2xl mx-auto mb-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-100 text-rose-700 text-xs font-bold mb-3 shadow-xs"
  }, /*#__PURE__*/React.createElement("span", null, "\u2728 Real Lagos Transformations")), /*#__PURE__*/React.createElement("h2", {
    className: "text-3xl sm:text-5xl font-black text-zinc-900 font-serif-lux"
  }, "Interactive Slay Studio ", /*#__PURE__*/React.createElement("span", {
    className: "gradient-pink-text"
  }, "Before & After")), /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-zinc-600 mt-2"
  }, "Slide left and right to reveal the difference professional steam revamping, needle ventilation, and acrylic nail sculpting makes!")), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-center gap-2 sm:gap-4 mb-8 flex-wrap"
  }, TRANSFORMATIONS.map(item => /*#__PURE__*/React.createElement("button", {
    key: item.id,
    type: "button",
    onClick: () => {
      playCuteBubblePop();
      setTransformationTab(item.id);
      setSliderPosition(50);
    },
    className: `px-4 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${transformationTab === item.id ? "bg-rose-600 text-white shadow-lg scale-105" : "bg-white text-zinc-700 border border-zinc-200 hover:border-rose-300"}`
  }, item.title))), (() => {
    const activeTrans = TRANSFORMATIONS.find(t => t.id === transformationTab) || TRANSFORMATIONS[0];
    return /*#__PURE__*/React.createElement("div", {
      className: "glass-panel p-4 sm:p-8 rounded-[36px] shadow-2xl border border-rose-100 max-w-4xl mx-auto"
    }, /*#__PURE__*/React.createElement("div", {
      className: "relative h-72 sm:h-96 w-full rounded-2xl sm:rounded-3xl overflow-hidden select-none touch-none shadow-inner bg-zinc-900 cursor-ew-resize group",
      onMouseMove: e => {
        const rect = e.currentTarget.getBoundingClientRect();
        const pos = Math.max(0, Math.min(100, (e.clientX - rect.left) / rect.width * 100));
        setSliderPosition(pos);
      },
      onTouchMove: e => {
        if (e.touches && e.touches[0]) {
          const rect = e.currentTarget.getBoundingClientRect();
          const pos = Math.max(0, Math.min(100, (e.touches[0].clientX - rect.left) / rect.width * 100));
          setSliderPosition(pos);
        }
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: activeTrans.afterImage,
      alt: "After Transformation",
      className: "absolute inset-0 w-full h-full object-cover"
    }), /*#__PURE__*/React.createElement("div", {
      className: "absolute top-4 right-4 z-10 px-3 py-1.5 rounded-full bg-emerald-500/90 backdrop-blur-md text-white text-xs font-black shadow-md flex items-center gap-1.5"
    }, /*#__PURE__*/React.createElement("span", null, "\u2728"), /*#__PURE__*/React.createElement("span", null, "AFTER TDL SLAY")), /*#__PURE__*/React.createElement("div", {
      className: "absolute inset-0 overflow-hidden",
      style: {
        width: `${sliderPosition}%`
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: activeTrans.beforeImage,
      alt: "Before Transformation",
      className: "absolute inset-0 w-full h-full object-cover max-w-none",
      style: {
        width: '100%',
        minWidth: '100%'
      }
    }), /*#__PURE__*/React.createElement("div", {
      className: "absolute top-4 left-4 z-10 px-3 py-1.5 rounded-full bg-rose-600/90 backdrop-blur-md text-white text-xs font-black shadow-md flex items-center gap-1.5"
    }, /*#__PURE__*/React.createElement("span", null, "\u26A0\uFE0F"), /*#__PURE__*/React.createElement("span", null, "BEFORE SLAY"))), /*#__PURE__*/React.createElement("div", {
      className: "absolute top-0 bottom-0 z-20 w-1 bg-white shadow-2xl flex items-center justify-center pointer-events-none",
      style: {
        left: `${sliderPosition}%`
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "w-9 h-9 rounded-full bg-rose-600 border-2 border-white text-white flex items-center justify-center shadow-2xl text-xs font-black animate-pulse"
    }, "\u2194\uFE0F"))), /*#__PURE__*/React.createElement("div", {
      className: "flex items-center justify-between text-xs text-zinc-500 mt-3 px-2"
    }, /*#__PURE__*/React.createElement("span", {
      className: "font-bold text-rose-600"
    }, "\u25C0\uFE0F Drag to see Before"), /*#__PURE__*/React.createElement("span", {
      className: "italic text-[11px] hidden sm:inline"
    }, "Move cursor / finger across image"), /*#__PURE__*/React.createElement("span", {
      className: "font-bold text-emerald-600"
    }, "Drag to see After \u25B6\uFE0F")), /*#__PURE__*/React.createElement("div", {
      className: "mt-6 pt-6 border-t border-rose-100 flex flex-col sm:flex-row items-center justify-between gap-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "space-y-1 text-center sm:text-left"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center justify-center sm:justify-start gap-2"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "text-xl font-black text-zinc-900"
    }, activeTrans.title), /*#__PURE__*/React.createElement("span", {
      className: "px-2.5 py-0.5 rounded-full bg-rose-100 text-rose-700 font-bold text-xs"
    }, activeTrans.tag)), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-zinc-600 max-w-md"
    }, /*#__PURE__*/React.createElement("strong", null, "Results:"), " ", activeTrans.afterDesc)), /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-4 flex-shrink-0"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-right"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-[10px] text-zinc-400 uppercase font-bold block"
    }, "Starting at"), /*#__PURE__*/React.createElement("span", {
      className: "text-2xl font-black text-rose-600"
    }, formatNaira(activeTrans.price))), /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: () => {
        playCuteGirlySound();
        triggerConfetti();
        const matching = SERVICES.find(s => s.id === activeTrans.serviceId) || SERVICES[0];
        handleSelectService(matching);
        bookingSectionRef.current?.scrollIntoView({
          behavior: "smooth"
        });
        showToast(`Selected: ${activeTrans.title}! ✨`, "success");
      },
      style: {
        backgroundColor: '#e11d48',
        background: 'linear-gradient(135deg, #e11d48 0%, #f43f5e 50%, #be123c 100%)',
        color: '#ffffff'
      },
      className: "px-6 py-3 rounded-full text-white text-xs sm:text-sm font-black shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all cursor-pointer flex items-center gap-2"
    }, /*#__PURE__*/React.createElement("span", null, "Book This Transformation"), /*#__PURE__*/React.createElement("span", null, "\u2728")))));
  })())), /*#__PURE__*/React.createElement("section", {
    id: "quiz",
    className: "py-16 bg-gradient-to-b from-rose-50/70 to-pink-50/40 border-y border-rose-100"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-4xl mx-auto px-4 sm:px-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "glass-panel p-8 sm:p-12 rounded-[36px] shadow-xl border border-white"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-center max-w-xl mx-auto mb-8"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-black text-rose-500 uppercase tracking-widest block mb-1"
  }, "Find Your Slay Match"), /*#__PURE__*/React.createElement("h3", {
    className: "text-2xl sm:text-4xl font-black text-zinc-900 font-serif-lux"
  }, "Wig & Nails Diagnostic Quiz"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs sm:text-sm text-zinc-600 mt-2"
  }, "Tell us what your wig needs and our Lagos team will recommend the exact service.")), /*#__PURE__*/React.createElement("div", {
    className: "space-y-6"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-xs font-bold text-zinc-800 uppercase tracking-wider mb-2"
  }, "1. What is the current condition of your wig?"), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 sm:grid-cols-3 gap-2.5"
  }, [{
    id: "tangled",
    label: "Tangled, stiff or needs deep wash & shine"
  }, {
    id: "balding",
    label: "Balding closure/frontal (needs hair re-ventilating)"
  }, {
    id: "new",
    label: "Fresh bundles needing machine wigging / glueless"
  }].map(opt => /*#__PURE__*/React.createElement("button", {
    key: opt.id,
    onClick: () => handleQuizAnswer("wigCondition", opt.id),
    className: `p-3 text-xs font-semibold rounded-2xl border transition text-left ${quizState.wigCondition === opt.id ? 'border-rose-500 bg-rose-50 ring-2 ring-rose-400 font-bold' : 'bg-white border-zinc-200 hover:border-rose-300'}`
  }, opt.label)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-xs font-bold text-zinc-800 uppercase tracking-wider mb-2"
  }, "2. What is your desired wig finish?"), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 sm:grid-cols-3 gap-2.5"
  }, [{
    id: "curls",
    label: "Bouncy Hollywood Pin Curls"
  }, {
    id: "straight",
    label: "Mirror Glass Bone Straight Silk Press"
  }, {
    id: "glueless",
    label: "Glueless Ready-to-Wear (Wear & Go)"
  }].map(opt => /*#__PURE__*/React.createElement("button", {
    key: opt.id,
    onClick: () => handleQuizAnswer("styleGoal", opt.id),
    className: `p-3 text-xs font-semibold rounded-2xl border transition text-left ${quizState.styleGoal === opt.id ? 'border-rose-500 bg-rose-50 ring-2 ring-rose-400 font-bold' : 'bg-white border-zinc-200 hover:border-rose-300'}`
  }, opt.label)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-xs font-bold text-zinc-800 uppercase tracking-wider mb-2"
  }, "3. Do you want your nails done too?"), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 sm:grid-cols-3 gap-2.5"
  }, [{
    id: "yes-acrylic",
    label: "Yes, XXL Acrylics with 3D Charms & Crystals"
  }, {
    id: "yes-gel",
    label: "Yes, Clean BIAB Gel Overlay / French Tips"
  }, {
    id: "hair-only",
    label: "Just the Wig Revamp for now"
  }].map(opt => /*#__PURE__*/React.createElement("button", {
    key: opt.id,
    onClick: () => handleQuizAnswer("nailGoal", opt.id),
    className: `p-3 text-xs font-semibold rounded-2xl border transition text-left ${quizState.nailGoal === opt.id ? 'border-rose-500 bg-rose-50 ring-2 ring-rose-400 font-bold' : 'bg-white border-zinc-200 hover:border-rose-300'}`
  }, opt.label))))), quizResult && /*#__PURE__*/React.createElement("div", {
    className: "p-6 rounded-3xl bg-gradient-to-r from-rose-50 to-pink-50 border-2 border-rose-300 mt-6 animate-fade-in"
  }, /*#__PURE__*/React.createElement("span", {
    className: "px-3 py-1 rounded-full bg-rose-500 text-white font-bold text-xs uppercase tracking-wider"
  }, "Your TDL Recommended Slay"), /*#__PURE__*/React.createElement("h4", {
    className: "text-xl font-bold text-zinc-900 mt-2"
  }, quizResult.title), /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-zinc-600 mt-1 mb-4"
  }, quizResult.description), /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      const match = SERVICES.find(s => s.id === quizResult.serviceId) || SERVICES[0];
      handleSelectService(match);
    },
    className: "px-6 py-3 rounded-full gradient-babe text-white font-bold text-sm shadow-md hover:shadow-lg transition"
  }, "Book This Service Now \u2728"))))), /*#__PURE__*/React.createElement("section", {
    id: "booking",
    ref: bookingSectionRef,
    className: "py-20 relative"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-center max-w-2xl mx-auto mb-12"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-black text-rose-500 uppercase tracking-widest block mb-1"
  }, "Book Your Slay Session"), /*#__PURE__*/React.createElement("h2", {
    className: "text-3xl sm:text-5xl font-black text-zinc-900 font-serif-lux"
  }, "Reserve Your Appointment"), /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-zinc-600 mt-2"
  }, "Ago Palace Way, Lagos. Select your service, pick your date & drop-off time, and complete your reservation.")), /*#__PURE__*/React.createElement("div", {
    className: "max-w-2xl mx-auto mb-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between relative"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute left-6 right-6 top-1/2 -translate-y-1/2 h-0.5 bg-zinc-200 -z-0"
  }), [{
    s: 1,
    label: "Service"
  }, {
    s: 2,
    label: "Date & Time"
  }, {
    s: 3,
    label: "Pay & Confirm"
  }].map(item => /*#__PURE__*/React.createElement("div", {
    key: item.s,
    className: "flex flex-col items-center relative z-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: `w-8 h-8 rounded-full font-bold flex items-center justify-center text-xs shadow-md transition ${step === item.s ? 'gradient-babe text-white ring-4 ring-rose-200' : step > item.s ? 'bg-emerald-500 text-white' : 'bg-zinc-200 text-zinc-500'}`
  }, step > item.s ? '✓' : item.s), /*#__PURE__*/React.createElement("span", {
    className: "text-[11px] font-bold text-zinc-700 mt-1"
  }, item.label))))), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-8 glass-panel p-6 sm:p-10 rounded-[36px] shadow-xl border border-white"
  }, step === 1 && /*#__PURE__*/React.createElement("div", {
    className: "space-y-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between items-center pb-4 border-b border-rose-100"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "text-xl font-bold text-zinc-900"
  }, "Step 1: Choose Service & Extra Customizations"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-zinc-500"
  }, "Pick from wig revamp, wigging, ventilation, or nails.")), /*#__PURE__*/React.createElement("a", {
    href: "#services",
    className: "text-xs text-rose-600 font-bold hover:underline"
  }, "Change Service Menu \u2191")), selectedService && /*#__PURE__*/React.createElement("div", {
    className: "p-4 rounded-2xl bg-rose-50/70 border border-rose-200 flex items-center justify-between"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3"
  }, /*#__PURE__*/React.createElement("img", {
    src: selectedService.image,
    className: "w-12 h-12 rounded-xl object-cover"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "text-[10px] text-rose-500 font-bold uppercase tracking-wider"
  }, selectedService.category), /*#__PURE__*/React.createElement("h4", {
    className: "text-sm font-bold text-zinc-900"
  }, selectedService.name), /*#__PURE__*/React.createElement("span", {
    className: "text-xs text-zinc-500"
  }, "\u23F1\uFE0F ", selectedService.duration))), /*#__PURE__*/React.createElement("span", {
    className: "text-xl font-black text-rose-600"
  }, formatNaira(selectedService.price))), /*#__PURE__*/React.createElement("div", {
    className: "space-y-3"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "text-xs font-bold text-zinc-700 uppercase tracking-wider"
  }, "Optional Slay Add-ons"), /*#__PURE__*/React.createElement("div", {
    className: "space-y-2"
  }, ADDONS.map(addon => {
    const isChecked = selectedAddons.some(a => a.id === addon.id);
    return /*#__PURE__*/React.createElement("label", {
      key: addon.id,
      className: `flex items-center justify-between p-3 rounded-2xl border transition cursor-pointer ${isChecked ? 'border-rose-400 bg-rose-50/80 shadow-sm' : 'border-zinc-200 bg-white hover:border-rose-200'}`
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-3"
    }, /*#__PURE__*/React.createElement("input", {
      type: "checkbox",
      checked: isChecked,
      onChange: () => handleToggleAddon(addon),
      className: "w-4 h-4 text-rose-500 rounded border-zinc-300 focus:ring-rose-400"
    }), /*#__PURE__*/React.createElement("span", {
      className: "text-sm font-medium text-zinc-800"
    }, addon.name)), /*#__PURE__*/React.createElement("span", {
      className: "text-sm font-bold text-rose-600"
    }, "+", formatNaira(addon.price)));
  }))), /*#__PURE__*/React.createElement("div", {
    className: "pt-6 border-t border-rose-100 flex justify-end"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setStep(2),
    className: "px-8 py-3.5 rounded-full gradient-babe text-white text-sm font-bold shadow-md hover:shadow-lg transition"
  }, "Next: Pick Date & Time \u2192"))), step === 2 && /*#__PURE__*/React.createElement("div", {
    className: "space-y-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between items-center pb-4 border-b border-rose-100"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "text-xl font-bold text-zinc-900"
  }, "Step 2: Select Date & Drop-Off Time"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-zinc-500"
  }, availability.customNotice || "Studio open Mon - Sat at Ago Palace Way, Lagos.")), /*#__PURE__*/React.createElement("button", {
    onClick: () => setStep(1),
    className: "text-xs text-zinc-500 hover:text-zinc-800 font-bold"
  }, "\u2190 Back")), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-12 gap-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "md:col-span-7 bg-white p-5 rounded-3xl border border-rose-100 shadow-sm"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between mb-4"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "font-bold text-zinc-900 text-sm font-serif-lux"
  }, calendarDays.monthLabel), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-1"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setCalendarOffset(Math.max(0, calendarOffset - 1)),
    className: "w-8 h-8 rounded-full border border-zinc-200 flex items-center justify-center text-xs"
  }, "\u2039"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setCalendarOffset(Math.min(3, calendarOffset + 1)),
    className: "w-8 h-8 rounded-full border border-zinc-200 flex items-center justify-center text-xs"
  }, "\u203A"))), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-7 text-center text-[10px] font-bold text-zinc-400 uppercase mb-2"
  }, /*#__PURE__*/React.createElement("span", null, "Sun"), /*#__PURE__*/React.createElement("span", null, "Mon"), /*#__PURE__*/React.createElement("span", null, "Tue"), /*#__PURE__*/React.createElement("span", null, "Wed"), /*#__PURE__*/React.createElement("span", null, "Thu"), /*#__PURE__*/React.createElement("span", null, "Fri"), /*#__PURE__*/React.createElement("span", null, "Sat")), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-7 gap-1"
  }, calendarDays.days.map(d => d.blank ? /*#__PURE__*/React.createElement("div", {
    key: d.key,
    className: "h-10"
  }) : /*#__PURE__*/React.createElement("button", {
    key: d.key,
    disabled: d.isDisabled,
    onClick: () => setSelectedDate(d.dateStr),
    className: `h-11 rounded-2xl flex flex-col items-center justify-center text-sm font-semibold calendar-day ${d.isDisabled ? 'disabled text-zinc-300' : 'text-zinc-800 cursor-pointer'} ${d.isSelected ? 'selected' : ''}`
  }, /*#__PURE__*/React.createElement("span", null, d.dayNum), d.isDayClosed ? /*#__PURE__*/React.createElement("span", {
    className: "text-[9px] text-zinc-300 font-normal"
  }, "Closed") : d.isDateBlocked ? /*#__PURE__*/React.createElement("span", {
    className: "text-[9px] text-rose-400 font-semibold"
  }, "Booked") : null)))), /*#__PURE__*/React.createElement("div", {
    className: "md:col-span-5 space-y-3"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "text-xs font-bold text-zinc-700 uppercase tracking-wider"
  }, "Available Times"), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 gap-2"
  }, timeSlots.map(time => {
    const isSelected = selectedTime === time;
    return /*#__PURE__*/React.createElement("button", {
      key: time,
      onClick: () => setSelectedTime(time),
      className: `time-slot py-3 px-3 rounded-2xl border text-xs font-bold transition text-center ${isSelected ? 'selected' : 'border-zinc-200 bg-white text-zinc-800'}`
    }, /*#__PURE__*/React.createElement("div", null, time), /*#__PURE__*/React.createElement("span", {
      className: "text-[10px] opacity-75 font-normal"
    }, "Available"));
  })))), /*#__PURE__*/React.createElement("div", {
    className: "pt-6 border-t border-rose-100 flex justify-between items-center"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setStep(1),
    className: "px-6 py-3 rounded-full bg-zinc-100 text-zinc-700 text-sm font-bold"
  }, "\u2190 Back"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setStep(3),
    className: "px-8 py-3.5 rounded-full gradient-babe text-white text-sm font-bold shadow-md"
  }, "Next: Pay & Confirm \u2192"))), step === 3 && /*#__PURE__*/React.createElement("div", {
    className: "space-y-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between items-center pb-4 border-b border-rose-100"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "text-xl font-bold text-zinc-900"
  }, "Step 3: Details & Secure Online Payment"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-zinc-500"
  }, "Pay deposit or full amount online to immediately secure your slot.")), /*#__PURE__*/React.createElement("button", {
    onClick: () => setStep(2),
    className: "text-xs text-zinc-500 hover:text-zinc-800 font-bold"
  }, "\u2190 Back")), /*#__PURE__*/React.createElement("form", {
    onSubmit: handleInitiatePayment,
    className: "space-y-5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 sm:grid-cols-2 gap-4"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-xs font-bold text-zinc-700 uppercase mb-1"
  }, "Full Name *"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    required: true,
    value: clientInfo.name,
    onChange: e => setClientInfo({
      ...clientInfo,
      name: e.target.value
    }),
    placeholder: "e.g. Chioma Okafor",
    className: "w-full px-4 py-3 rounded-2xl border border-zinc-200 text-sm bg-white"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-xs font-bold text-zinc-700 uppercase mb-1"
  }, "Email (For Payment Receipt) *"), /*#__PURE__*/React.createElement("input", {
    type: "email",
    required: true,
    value: clientInfo.email,
    onChange: e => setClientInfo({
      ...clientInfo,
      email: e.target.value
    }),
    placeholder: "chioma@example.com",
    className: "w-full px-4 py-3 rounded-2xl border border-zinc-200 text-sm bg-white"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 sm:grid-cols-2 gap-4"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-xs font-bold text-zinc-700 uppercase mb-1"
  }, "Phone / WhatsApp Number *"), /*#__PURE__*/React.createElement("input", {
    type: "tel",
    required: true,
    value: clientInfo.phone,
    onChange: e => setClientInfo({
      ...clientInfo,
      phone: e.target.value
    }),
    placeholder: "e.g. 0810-002-4096",
    className: "w-full px-4 py-3 rounded-2xl border border-zinc-200 text-sm bg-white"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-xs font-bold text-zinc-700 uppercase mb-1"
  }, "Instagram Handle (Optional)"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: clientInfo.instagram,
    onChange: e => setClientInfo({
      ...clientInfo,
      instagram: e.target.value
    }),
    placeholder: "@yourhandle (so we can tag your slay!)",
    className: "w-full px-4 py-3 rounded-2xl border border-zinc-200 text-sm bg-white"
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-xs font-bold text-zinc-700 uppercase mb-1"
  }, "Wig Hand-off / Delivery Preference"), /*#__PURE__*/React.createElement("select", {
    value: clientInfo.deliveryMode,
    onChange: e => setClientInfo({
      ...clientInfo,
      deliveryMode: e.target.value
    }),
    className: "w-full px-4 py-3 rounded-2xl border border-zinc-200 text-sm bg-white"
  }, /*#__PURE__*/React.createElement("option", {
    value: "Drop-off at Studio (Ago Palace Way)"
  }, "Drop-off in person at Ago Palace Way Studio"), /*#__PURE__*/React.createElement("option", {
    value: "Dispatch Rider Delivery"
  }, "Sending via Dispatch Rider (Gokada / Chowdeck / Kwik)"), /*#__PURE__*/React.createElement("option", {
    value: "Studio Appointment (Nails & Wig Fitting)"
  }, "Studio Appointment (Nails & Wig Fitting on site)"))), /*#__PURE__*/React.createElement("div", {
    className: "p-4 rounded-3xl bg-rose-50/60 border border-rose-200 space-y-3"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-black text-rose-600 uppercase tracking-wider block"
  }, "1. Select Payment Option"), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 sm:grid-cols-2 gap-3"
  }, /*#__PURE__*/React.createElement("label", {
    className: `p-4 rounded-2xl border-2 cursor-pointer transition flex items-center justify-between ${paymentOption === "deposit" ? 'border-rose-500 bg-white shadow-sm' : 'border-zinc-200 bg-white/70'}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3"
  }, /*#__PURE__*/React.createElement("input", {
    type: "radio",
    name: "paymentOption",
    checked: paymentOption === "deposit",
    onChange: () => setPaymentOption("deposit"),
    className: "text-rose-500 focus:ring-rose-400"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "text-xs font-bold text-zinc-900"
  }, "Lock Slot Deposit"), /*#__PURE__*/React.createElement("p", {
    className: "text-[11px] text-zinc-500"
  }, "Balance paid at pickup"))), /*#__PURE__*/React.createElement("span", {
    className: "text-base font-black text-rose-600"
  }, formatNaira(totals.deposit))), /*#__PURE__*/React.createElement("label", {
    className: `p-4 rounded-2xl border-2 cursor-pointer transition flex items-center justify-between ${paymentOption === "full" ? 'border-rose-500 bg-white shadow-sm' : 'border-zinc-200 bg-white/70'}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3"
  }, /*#__PURE__*/React.createElement("input", {
    type: "radio",
    name: "paymentOption",
    checked: paymentOption === "full",
    onChange: () => setPaymentOption("full"),
    className: "text-rose-500 focus:ring-rose-400"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "text-xs font-bold text-zinc-900"
  }, "Pay Full Amount"), /*#__PURE__*/React.createElement("p", {
    className: "text-[11px] text-zinc-500"
  }, "Zero balance due later"))), /*#__PURE__*/React.createElement("span", {
    className: "text-base font-black text-rose-600"
  }, formatNaira(totals.finalTotal))))), /*#__PURE__*/React.createElement("div", {
    className: "p-4 rounded-3xl bg-white border border-zinc-200 space-y-3"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-black text-zinc-700 uppercase tracking-wider block"
  }, "2. Choose Payment Method"), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 sm:grid-cols-2 gap-3"
  }, /*#__PURE__*/React.createElement("div", {
    onClick: () => setPaymentMethod("paystack"),
    className: `p-4 rounded-2xl border-2 cursor-pointer transition ${paymentMethod === "paystack" ? 'border-emerald-500 bg-emerald-50/50 shadow-sm' : 'border-zinc-200 hover:border-zinc-300'}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between mb-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-xl"
  }, "\uD83D\uDCB3"), /*#__PURE__*/React.createElement("span", {
    className: "font-bold text-zinc-900 text-sm"
  }, "Pay Online (Paystack)")), /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] font-black uppercase px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800"
  }, "Instant")), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-zinc-500"
  }, "Pay instantly with Nigerian Debit Cards (Mastercard, Visa, Verve), Bank Transfer, or USSD.")), /*#__PURE__*/React.createElement("div", {
    onClick: () => setPaymentMethod("bank_transfer"),
    className: `p-4 rounded-2xl border-2 cursor-pointer transition ${paymentMethod === "bank_transfer" ? 'border-rose-500 bg-rose-50/50 shadow-sm' : 'border-zinc-200 hover:border-zinc-300'}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between mb-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-xl"
  }, "\uD83C\uDFE6"), /*#__PURE__*/React.createElement("span", {
    className: "font-bold text-zinc-900 text-sm"
  }, "Direct Bank Transfer")), /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] font-black uppercase px-2 py-0.5 rounded-full bg-rose-100 text-rose-800"
  }, "Studio Bank")), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-zinc-500"
  }, "Transfer directly to our Moniepoint studio account and share proof via WhatsApp."))), paymentMethod === "bank_transfer" && /*#__PURE__*/React.createElement("div", {
    className: "mt-3 p-4 rounded-2xl bg-zinc-50 border border-zinc-200 text-xs space-y-2 animate-fade-in"
  }, /*#__PURE__*/React.createElement("p", {
    className: "font-bold text-zinc-800"
  }, "Studio Account Details:"), /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between items-center bg-white p-2.5 rounded-xl border border-zinc-200"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "text-[11px] text-zinc-500"
  }, "Bank: ", /*#__PURE__*/React.createElement("strong", null, bankDetails.bankName)), /*#__PURE__*/React.createElement("p", {
    className: "text-[11px] text-zinc-500"
  }, "Account Name: ", /*#__PURE__*/React.createElement("strong", null, bankDetails.accountName)), /*#__PURE__*/React.createElement("p", {
    className: "text-sm font-black text-rose-600 font-mono tracking-wider"
  }, bankDetails.accountNumber)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => copyToClipboard(bankDetails.accountNumber),
    className: "px-3 py-1.5 rounded-lg bg-rose-50 hover:bg-rose-100 text-rose-600 font-bold text-xs transition border border-rose-200"
  }, copiedAccount ? "Copied! ✓" : "Copy Account")))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-xs font-bold text-zinc-700 uppercase mb-1"
  }, "VIP Promo Code"), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-2"
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: promoInput,
    onChange: e => setPromoInput(e.target.value),
    placeholder: "e.g. LAGOSBABE or TDL10",
    className: "flex-1 px-4 py-2.5 rounded-2xl border border-zinc-200 text-sm uppercase bg-white font-mono"
  }), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: handleApplyPromo,
    className: "px-5 py-2.5 rounded-2xl bg-zinc-900 text-white text-xs font-bold"
  }, "Apply"))), /*#__PURE__*/React.createElement("label", {
    className: "flex items-start gap-3 cursor-pointer text-xs text-zinc-600"
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: termsAccepted,
    onChange: e => setTermsAccepted(e.target.checked),
    className: "mt-1"
  }), /*#__PURE__*/React.createElement("span", null, "I understand that online payment of ", /*#__PURE__*/React.createElement("strong", null, formatNaira(totals.amountToPayNow)), " confirms and locks my slot with The Damian Label.")), /*#__PURE__*/React.createElement("div", {
    className: "pt-6 border-t border-rose-100 flex justify-between items-center"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setStep(2),
    className: "px-6 py-3 rounded-full bg-zinc-100 text-sm font-bold"
  }, "\u2190 Back"), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    disabled: isProcessingPayment,
    className: `px-10 py-4 rounded-full text-white text-base font-black shadow-xl hover:shadow-2xl transition flex items-center gap-2 ${paymentMethod === "paystack" ? 'bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-700 hover:to-teal-800' : 'gradient-babe'}`
  }, isProcessingPayment ? /*#__PURE__*/React.createElement("span", null, "Connecting Paystack...") : paymentMethod === "paystack" ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", null, "Pay ", formatNaira(totals.amountToPayNow), " Online via Paystack"), /*#__PURE__*/React.createElement("span", null, "\uD83D\uDD12")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", null, "Complete & Confirm Bank Transfer (", formatNaira(totals.amountToPayNow), ")"), /*#__PURE__*/React.createElement("span", null, "\uD83C\uDFE6"))))))), /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-4 sticky top-28"
  }, /*#__PURE__*/React.createElement("div", {
    className: "glass-panel p-6 rounded-[32px] shadow-lg border border-white"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "text-base font-bold text-zinc-900 border-b border-rose-100 pb-3 mb-4 flex items-center justify-between"
  }, /*#__PURE__*/React.createElement("span", null, "Booking Summary"), /*#__PURE__*/React.createElement("span", {
    className: "text-xs bg-rose-100 text-rose-700 px-2 py-0.5 rounded-full font-semibold"
  }, "Step ", step, " of 3")), selectedService && /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3 mb-4"
  }, /*#__PURE__*/React.createElement("img", {
    src: selectedService.image,
    className: "w-14 h-14 rounded-2xl object-cover"
  }), /*#__PURE__*/React.createElement("div", {
    className: "flex-1 min-w-0"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-[10px] font-bold text-rose-500 uppercase"
  }, selectedService.category), /*#__PURE__*/React.createElement("h4", {
    className: "text-sm font-bold text-zinc-900 truncate"
  }, selectedService.name), /*#__PURE__*/React.createElement("span", {
    className: "text-xs text-zinc-500"
  }, "\u23F1\uFE0F ", selectedService.duration)), /*#__PURE__*/React.createElement("span", {
    className: "text-sm font-bold text-zinc-900"
  }, formatNaira(selectedService.price))), selectedAddons.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "space-y-1.5 mb-4 pt-3 border-t border-rose-50"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-[11px] font-bold text-zinc-400 uppercase tracking-wider block"
  }, "Add-ons:"), selectedAddons.map(a => /*#__PURE__*/React.createElement("div", {
    key: a.id,
    className: "flex justify-between text-xs text-zinc-600"
  }, /*#__PURE__*/React.createElement("span", {
    className: "truncate mr-2"
  }, "+ ", a.name), /*#__PURE__*/React.createElement("span", {
    className: "font-semibold text-zinc-800"
  }, "+", formatNaira(a.price))))), selectedDate && selectedTime && /*#__PURE__*/React.createElement("div", {
    className: "py-2.5 px-3 rounded-2xl bg-rose-50/50 border border-rose-100 flex items-center justify-between text-xs mb-4"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-zinc-500 font-medium"
  }, "Date & Time:"), /*#__PURE__*/React.createElement("span", {
    className: "font-bold text-rose-600"
  }, formatReadableDate(selectedDate), " @ ", selectedTime)), /*#__PURE__*/React.createElement("div", {
    className: "space-y-2 pt-3 border-t border-rose-100 text-xs"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between text-zinc-600"
  }, /*#__PURE__*/React.createElement("span", null, "Subtotal"), /*#__PURE__*/React.createElement("span", {
    className: "font-semibold text-zinc-800"
  }, formatNaira(totals.subtotal))), totals.discount > 0 && /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between text-emerald-600 font-medium"
  }, /*#__PURE__*/React.createElement("span", null, "Discount (", appliedPromo.name, ")"), /*#__PURE__*/React.createElement("span", null, "-", formatNaira(totals.discount))), /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between text-sm font-black text-zinc-900 pt-2 border-t border-rose-100"
  }, /*#__PURE__*/React.createElement("span", null, "Total Service Value"), /*#__PURE__*/React.createElement("span", {
    className: "text-rose-600 font-extrabold text-base"
  }, formatNaira(totals.finalTotal))), /*#__PURE__*/React.createElement("div", {
    className: "p-3 bg-emerald-50 rounded-2xl border border-emerald-200 mt-3 text-xs"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between font-black text-emerald-900 mb-1"
  }, /*#__PURE__*/React.createElement("span", null, "Amount Due Today:"), /*#__PURE__*/React.createElement("span", {
    className: "text-emerald-700 text-sm"
  }, formatNaira(totals.amountToPayNow))), paymentOption === "deposit" && /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between text-[11px] text-zinc-600 pt-1 border-t border-emerald-200"
  }, /*#__PURE__*/React.createElement("span", null, "Balance due upon delivery:"), /*#__PURE__*/React.createElement("span", {
    className: "font-bold text-zinc-800"
  }, formatNaira(totals.dueAtSalon)))))))))), /*#__PURE__*/React.createElement("section", {
    id: "flier-section",
    className: "py-20 bg-white border-t border-rose-100"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-center max-w-2xl mx-auto mb-12"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-black text-rose-500 uppercase tracking-widest block mb-1"
  }, "Our Official Flier & Lookbook"), /*#__PURE__*/React.createElement("h2", {
    className: "text-3xl sm:text-5xl font-black text-zinc-900 font-serif-lux"
  }, "The Damian Label Showcase"), /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-zinc-600 mt-2"
  }, "Ago Palace Way, Lagos. Hair Revamping, Wigging, Hair Ventilation, Glueless Wigs & Acrylic Nails.")), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-5 text-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rounded-3xl overflow-hidden shadow-2xl border-4 border-rose-200 inline-block max-w-sm"
  }, /*#__PURE__*/React.createElement("img", {
    src: "flier.jpg",
    alt: "TDL Official Flier",
    className: "w-full h-auto"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-7 space-y-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "p-6 rounded-3xl bg-rose-50/70 border border-rose-200 space-y-3"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "text-xl font-bold text-zinc-900 font-serif-lux"
  }, "\uD83D\uDCCD Studio Details:"), /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-zinc-700"
  }, /*#__PURE__*/React.createElement("strong", null, "Location:"), " Ago Palace Way, Lagos, Nigeria"), /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-zinc-700"
  }, /*#__PURE__*/React.createElement("strong", null, "Call / WhatsApp:"), " ", /*#__PURE__*/React.createElement("a", {
    href: "tel:08100024096",
    className: "text-rose-600 font-bold underline"
  }, "0810-002-4096")), /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-zinc-700"
  }, /*#__PURE__*/React.createElement("strong", null, "Opening Hours:"), " Monday \u2013 Saturday: 9:00 AM \u2013 6:30 PM (Sundays Closed)")), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 gap-4 text-xs"
  }, /*#__PURE__*/React.createElement("div", {
    className: "p-4 rounded-2xl bg-white border border-zinc-200 shadow-sm"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-xl mb-1 block"
  }, "\u2728"), /*#__PURE__*/React.createElement("h4", {
    className: "font-bold text-zinc-900"
  }, "Hair Revamping"), /*#__PURE__*/React.createElement("p", {
    className: "text-zinc-500"
  }, "Restores shine, silkiness, and bounce to dry or tangled wigs.")), /*#__PURE__*/React.createElement("div", {
    className: "p-4 rounded-2xl bg-white border border-zinc-200 shadow-sm"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-xl mb-1 block"
  }, "\uD83E\uDEA1"), /*#__PURE__*/React.createElement("h4", {
    className: "font-bold text-zinc-900"
  }, "Hair Ventilation"), /*#__PURE__*/React.createElement("p", {
    className: "text-zinc-500"
  }, "Reconstructs balding closures and frontals strand-by-strand.")), /*#__PURE__*/React.createElement("div", {
    className: "p-4 rounded-2xl bg-white border border-zinc-200 shadow-sm"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-xl mb-1 block"
  }, "\uD83D\uDC51"), /*#__PURE__*/React.createElement("h4", {
    className: "font-bold text-zinc-900"
  }, "Glueless Wigs"), /*#__PURE__*/React.createElement("p", {
    className: "text-zinc-500"
  }, "Bleached knots, plucked natural hairline, and elastic bands.")), /*#__PURE__*/React.createElement("div", {
    className: "p-4 rounded-2xl bg-white border border-zinc-200 shadow-sm"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-xl mb-1 block"
  }, "\uD83D\uDC85"), /*#__PURE__*/React.createElement("h4", {
    className: "font-bold text-zinc-900"
  }, "Nails (Acrylics & Gel)"), /*#__PURE__*/React.createElement("p", {
    className: "text-zinc-500"
  }, "Sculpted full sets, French chrome, 3D crystals and floral art."))), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap items-center gap-3 pt-2"
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://wa.me/2348100024096",
    target: "_blank",
    className: "inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs shadow-md transition"
  }, /*#__PURE__*/React.createElement("span", null, "\uD83D\uDCAC"), /*#__PURE__*/React.createElement("span", null, "WhatsApp (0810-002-4096)")), /*#__PURE__*/React.createElement("a", {
    href: SALON_INFO.instagramUrl,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-amber-500 text-white font-bold text-xs shadow-md hover:opacity-90 transition"
  }, /*#__PURE__*/React.createElement("span", null, "\uD83D\uDCF8"), /*#__PURE__*/React.createElement("span", null, "Follow @the_damian_label on Instagram")), /*#__PURE__*/React.createElement("a", {
    href: SALON_INFO.tiktokUrl,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "inline-flex items-center gap-2 px-6 py-3 rounded-full bg-zinc-950 text-white font-bold text-xs shadow-md hover:bg-black transition"
  }, /*#__PURE__*/React.createElement("span", null, "\uD83C\uDFB5"), /*#__PURE__*/React.createElement("span", null, "Follow @thedamianslabel on TikTok"))))))), /*#__PURE__*/React.createElement("section", {
    id: "reviews",
    className: "py-20 bg-rose-50/40"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-center max-w-2xl mx-auto mb-14"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-black text-rose-500 uppercase tracking-widest block mb-1"
  }, "Client Love Notes"), /*#__PURE__*/React.createElement("h2", {
    className: "text-3xl sm:text-5xl font-black text-zinc-900 font-serif-lux"
  }, "What Lagos Babes Are Saying")), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-3 gap-8"
  }, [{
    text: "Damian revived my 4-year-old bone straight wig that I almost threw away! The silk press and silicon treatment brought back mirror shine. Best revamp studio on Ago Palace Way!",
    name: "Amaka Eze",
    badge: "Deluxe Revamp • Ago Palace",
    init: "A"
  }, {
    text: "The glueless wig customization is 10/10. Bleached knots look completely invisible on my skin. Plus my acrylic nails lasted 4 weeks without a single crack. Definitely coming back!",
    name: "Tiwa Savage-Fan",
    badge: "Glueless Wig + Acrylics",
    init: "T"
  }, {
    text: "My frontal was completely balding in the center. Amara ventilated fresh human hair and you can't even tell it was ever damaged. Saved me buying a new ₦150,000 frontal!",
    name: "Blessing Okon",
    badge: "Hair Ventilation Specialist",
    init: "B"
  }].map((rev, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "p-8 rounded-[32px] bg-white border border-rose-100 shadow-sm"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-amber-400 text-sm mb-3"
  }, "\u2605\u2605\u2605\u2605\u2605"), /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-zinc-700 italic leading-relaxed mb-6"
  }, "\"", rev.text, "\""), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-10 h-10 rounded-full gradient-babe text-white font-bold flex items-center justify-center text-sm"
  }, rev.init), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "text-xs font-bold text-zinc-900"
  }, rev.name), /*#__PURE__*/React.createElement("p", {
    className: "text-[11px] text-rose-500 font-medium"
  }, rev.badge)))))))), /*#__PURE__*/React.createElement("section", {
    className: "py-16 gradient-dark-lux text-white text-center space-y-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-4xl mx-auto px-4"
  }, /*#__PURE__*/React.createElement("span", {
    className: "px-4 py-1.5 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/30 text-xs font-bold uppercase tracking-wider inline-block"
  }, "TDL VIP Babes Club"), /*#__PURE__*/React.createElement("h2", {
    className: "text-3xl sm:text-5xl font-black font-serif-lux"
  }, "Join The Damian Label VIP Club"), /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-zinc-300 max-w-lg mx-auto"
  }, "Get exclusive promo drops, birthday revamp discounts, priority booking during festive periods, and 15% off your next session."), /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      if (newsletterEmail) {
        showToast("Welcome to TDL VIP Club! Use code LAGOSBABE for 15% off! 💖", "success");
        setNewsletterEmail("");
      }
    },
    className: "max-w-md mx-auto flex gap-2 pt-2"
  }, /*#__PURE__*/React.createElement("input", {
    type: "email",
    required: true,
    value: newsletterEmail,
    onChange: e => setNewsletterEmail(e.target.value),
    placeholder: "Enter your email address, babe...",
    className: "flex-1 px-5 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-zinc-400 focus:outline-none focus:border-rose-400 text-sm"
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "px-7 py-3 rounded-full gradient-babe text-white font-bold text-sm shadow-lg hover:shadow-xl transition"
  }, "Join \u2728")))), /*#__PURE__*/React.createElement("footer", {
    className: "bg-zinc-950 text-zinc-400 py-12 border-t border-zinc-900 text-xs"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-10 h-10 rounded-xl gradient-babe flex items-center justify-center text-white font-black text-sm"
  }, "TDL"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "text-sm font-black text-white font-serif-lux"
  }, "THE DAMIAN LABEL"), /*#__PURE__*/React.createElement("p", {
    className: "text-[11px] text-zinc-500"
  }, "Ago Palace Way, Lagos, Nigeria \u2022 Phone: 0810-002-4096"))), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap items-center justify-center gap-6"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#services",
    className: "hover:text-white transition"
  }, "Services & Pricing"), /*#__PURE__*/React.createElement("a", {
    href: "#booking",
    className: "hover:text-white transition"
  }, "Book Appointment"), /*#__PURE__*/React.createElement("a", {
    href: "https://wa.me/2348100024096",
    target: "_blank",
    className: "hover:text-emerald-400 font-bold transition flex items-center gap-1"
  }, /*#__PURE__*/React.createElement("span", null, "\uD83D\uDCAC"), " WhatsApp: 0810-002-4096"), /*#__PURE__*/React.createElement("a", {
    href: SALON_INFO.instagramUrl,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "hover:text-pink-400 font-bold transition flex items-center gap-1"
  }, /*#__PURE__*/React.createElement("span", null, "\uD83D\uDCF8"), " Instagram (@the_damian_label)"), /*#__PURE__*/React.createElement("a", {
    href: SALON_INFO.tiktokUrl,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "hover:text-white font-bold transition flex items-center gap-1"
  }, /*#__PURE__*/React.createElement("span", null, "\uD83C\uDFB5"), " TikTok (@thedamianslabel)"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setIsAdminOpen(true),
    className: "text-rose-400 hover:text-rose-300 font-bold flex items-center gap-1"
  }, /*#__PURE__*/React.createElement("span", null, "\uD83D\uDC51"), " Owner Portal (Private)")), /*#__PURE__*/React.createElement("p", {
    className: "text-zinc-600"
  }, "\xA9 ", new Date().getFullYear(), " The Damian Label. All rights reserved."))), isConfirmationOpen && confirmedBooking && /*#__PURE__*/React.createElement("div", {
    className: "fixed inset-0 z-50 flex items-center justify-center p-4 modal-backdrop"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-white rounded-[36px] max-w-lg w-full p-8 shadow-2xl relative text-center"
  }, confirmedBooking.status === "Pending Verification" ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "w-16 h-16 mx-auto rounded-full bg-amber-100 text-amber-800 flex items-center justify-center text-3xl shadow-lg mb-4 animate-pulse"
  }, "\u23F3"), /*#__PURE__*/React.createElement("span", {
    className: "inline-block px-3.5 py-1 bg-amber-100 text-amber-900 border border-amber-300 rounded-full text-xs font-bold mb-2"
  }, "\u26A0\uFE0F Payment Submitted \u2014 Pending Studio Credit Alert Verification"), /*#__PURE__*/React.createElement("h3", {
    className: "text-2xl font-black text-zinc-900 font-serif-lux mb-1"
  }, "Slot Held! Verifying Credit Alert"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-zinc-600 mb-4"
  }, "Reference ID: ", /*#__PURE__*/React.createElement("strong", {
    className: "text-rose-600"
  }, "#", confirmedBooking.id)), /*#__PURE__*/React.createElement("div", {
    className: "p-3 bg-amber-50 rounded-2xl border border-amber-200 text-xs text-amber-900 mb-4 text-left leading-relaxed"
  }, /*#__PURE__*/React.createElement("strong", null, "Notice:"), " Your appointment slot is provisionally held. ", /*#__PURE__*/React.createElement("strong", null, "The Damian Label"), " verifies all incoming bank credit alerts before officially confirming and locking the calendar schedule. Please share your debit alert or Paystack receipt on WhatsApp for instant confirmation.")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "w-16 h-16 mx-auto rounded-full gradient-babe flex items-center justify-center text-3xl shadow-xl mb-4 animate-bounce"
  }, "\u2728"), /*#__PURE__*/React.createElement("span", {
    className: "inline-block px-3.5 py-1 bg-emerald-100 text-emerald-800 border border-emerald-300 rounded-full text-xs font-bold mb-2"
  }, "\u2705 Payment Verified & Schedule Locked!"), /*#__PURE__*/React.createElement("h3", {
    className: "text-2xl font-black text-zinc-900 font-serif-lux mb-1"
  }, "Your Booking is Confirmed!"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-zinc-600 mb-4"
  }, "Reference ID: ", /*#__PURE__*/React.createElement("strong", {
    className: "text-rose-600"
  }, "#", confirmedBooking.id))), /*#__PURE__*/React.createElement("div", {
    className: "bg-rose-50/70 p-4 rounded-2xl border border-rose-200 text-xs text-left space-y-2 mb-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between"
  }, /*#__PURE__*/React.createElement("span", null, "Service:"), /*#__PURE__*/React.createElement("b", null, confirmedBooking.serviceName)), /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between"
  }, /*#__PURE__*/React.createElement("span", null, "Studio:"), /*#__PURE__*/React.createElement("b", null, SALON_INFO.name, " (Ago Palace Way)")), /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between"
  }, /*#__PURE__*/React.createElement("span", null, "Date & Time:"), /*#__PURE__*/React.createElement("b", {
    className: "text-rose-600"
  }, formatReadableDate(confirmedBooking.date), " @ ", confirmedBooking.time)), /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between"
  }, /*#__PURE__*/React.createElement("span", null, "Delivery Method:"), /*#__PURE__*/React.createElement("b", {
    className: "text-zinc-800"
  }, confirmedBooking.deliveryMode)), /*#__PURE__*/React.createElement("div", {
    className: "pt-2 border-t border-rose-200 flex justify-between font-bold"
  }, /*#__PURE__*/React.createElement("span", null, "Verification Status:"), /*#__PURE__*/React.createElement("span", {
    className: `px-2 py-0.5 rounded-full text-[11px] ${confirmedBooking.status === "Pending Verification" ? "text-amber-800 bg-amber-100 border border-amber-300" : "text-emerald-700 bg-emerald-100"}`
  }, confirmedBooking.status === "Pending Verification" ? "⏳ Awaiting Studio Credit Alert" : "✅ Verified & Locked ✓")), /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between"
  }, /*#__PURE__*/React.createElement("span", null, "Amount Paid:"), /*#__PURE__*/React.createElement("b", {
    className: "text-emerald-600 text-sm"
  }, formatNaira(confirmedBooking.amountPaidOnline))), confirmedBooking.dueAtSalon > 0 && /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between text-amber-800 font-bold"
  }, /*#__PURE__*/React.createElement("span", null, "Balance due at delivery:"), /*#__PURE__*/React.createElement("span", null, formatNaira(confirmedBooking.dueAtSalon))), confirmedBooking.paymentReference && /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between text-[11px] text-zinc-500 font-mono"
  }, /*#__PURE__*/React.createElement("span", null, "Payment Ref:"), /*#__PURE__*/React.createElement("span", null, confirmedBooking.paymentReference))), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 gap-2 mb-3"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => handleOpenPrintReceipt(confirmedBooking),
    className: "py-2.5 px-3 rounded-xl border text-xs font-bold bg-white text-zinc-800 hover:border-rose-300 flex items-center justify-center gap-1 shadow-xs"
  }, /*#__PURE__*/React.createElement("span", null, "\uD83D\uDDA8\uFE0F"), /*#__PURE__*/React.createElement("span", null, "Print Receipt")), /*#__PURE__*/React.createElement("button", {
    onClick: () => handleAddToGoogleCalendar(confirmedBooking),
    className: "py-2.5 px-3 rounded-xl border text-xs font-bold bg-white text-zinc-800 hover:border-rose-300 flex items-center justify-center gap-1"
  }, /*#__PURE__*/React.createElement("span", null, "\uD83D\uDCC5"), /*#__PURE__*/React.createElement("span", null, "Google Calendar"))), /*#__PURE__*/React.createElement("a", {
    href: `https://wa.me/2348100024096?text=Hello%20The%20Damian%20Label,%20I%20have%20submitted%20payment%20for%20Booking%20%23${confirmedBooking.id}%20(${encodeURIComponent(confirmedBooking.serviceName)}).%20Amount:%20${encodeURIComponent(formatNaira(confirmedBooking.amountPaidOnline))}.%20Please%20find%20my%20credit%20alert%20/%20debit%20proof%20attached%20to%20confirm%20my%20schedule!`,
    target: "_blank",
    className: "w-full mb-2 py-3 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs shadow-md flex items-center justify-center gap-2"
  }, /*#__PURE__*/React.createElement("span", null, "\uD83D\uDCAC"), /*#__PURE__*/React.createElement("span", null, "Send Payment Proof / Alert on WhatsApp (0810-002-4096)")), /*#__PURE__*/React.createElement("button", {
    onClick: () => setIsConfirmationOpen(false),
    className: "w-full py-2.5 rounded-2xl bg-zinc-100 hover:bg-zinc-200 text-zinc-700 font-bold text-xs"
  }, "Back to Website"))), isPaystackSimModalOpen && pendingPaymentBooking && /*#__PURE__*/React.createElement("div", {
    className: "fixed inset-0 z-50 flex items-center justify-center p-4 modal-backdrop animate-fade-in"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-white rounded-[32px] max-w-md w-full p-6 shadow-2xl border border-emerald-300 relative text-left"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between pb-4 border-b border-zinc-100 mb-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center text-white font-black text-xs"
  }, "P"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    className: "text-sm font-black text-zinc-900"
  }, "Paystack Checkout"), /*#__PURE__*/React.createElement("p", {
    className: "text-[10px] text-zinc-400"
  }, "Secured by Paystack Payments (Nigeria)"))), /*#__PURE__*/React.createElement("button", {
    onClick: () => setIsPaystackSimModalOpen(false),
    className: "w-7 h-7 rounded-full bg-zinc-100 text-zinc-600 flex items-center justify-center text-xs font-bold"
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    className: "bg-emerald-50/70 p-4 rounded-2xl border border-emerald-200 mb-4 text-xs"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between text-zinc-600 mb-1"
  }, /*#__PURE__*/React.createElement("span", null, "Paying To:"), /*#__PURE__*/React.createElement("strong", {
    className: "text-zinc-900"
  }, "THE DAMIAN LABEL")), /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between text-zinc-600 mb-1"
  }, /*#__PURE__*/React.createElement("span", null, "Customer Email:"), /*#__PURE__*/React.createElement("span", null, pendingPaymentBooking.clientEmail)), /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between text-base font-black text-emerald-800 pt-2 border-t border-emerald-200"
  }, /*#__PURE__*/React.createElement("span", null, "Amount:"), /*#__PURE__*/React.createElement("span", null, formatNaira(totals.amountToPayNow)))), /*#__PURE__*/React.createElement("p", {
    className: "text-xs font-bold text-zinc-700 mb-2"
  }, "Simulate Nigerian Payment Method:"), /*#__PURE__*/React.createElement("div", {
    className: "space-y-2 mb-6"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => {
      const ref = "PSTK-CARD-" + Math.floor(100000 + Math.random() * 900000);
      finalizeConfirmedBooking(pendingPaymentBooking, "Debit Card (Pending Credit Alert)", ref, totals.amountToPayNow, "Pending Verification");
    },
    className: "w-full p-3.5 rounded-xl border border-zinc-200 hover:border-emerald-500 bg-white hover:bg-emerald-50/50 text-left transition flex items-center justify-between text-xs font-bold text-zinc-800"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("span", null, "\uD83D\uDCB3"), /*#__PURE__*/React.createElement("span", null, "Pay with Nigerian Debit Card (Verve / Mastercard / Visa)")), /*#__PURE__*/React.createElement("span", {
    className: "text-emerald-600"
  }, "\u2192")), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => {
      const ref = "PSTK-TXF-" + Math.floor(100000 + Math.random() * 900000);
      finalizeConfirmedBooking(pendingPaymentBooking, "Bank Transfer (Pending Credit Alert)", ref, totals.amountToPayNow, "Pending Verification");
    },
    className: "w-full p-3.5 rounded-xl border border-zinc-200 hover:border-emerald-500 bg-white hover:bg-emerald-50/50 text-left transition flex items-center justify-between text-xs font-bold text-zinc-800"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("span", null, "\uD83C\uDFE6"), /*#__PURE__*/React.createElement("span", null, "Pay with Instant Bank Transfer (Virtual Account)")), /*#__PURE__*/React.createElement("span", {
    className: "text-emerald-600"
  }, "\u2192")), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => {
      const ref = "PSTK-USSD-" + Math.floor(100000 + Math.random() * 900000);
      finalizeConfirmedBooking(pendingPaymentBooking, "USSD (Pending Credit Alert)", ref, totals.amountToPayNow, "Pending Verification");
    },
    className: "w-full p-3.5 rounded-xl border border-zinc-200 hover:border-emerald-500 bg-white hover:bg-emerald-50/50 text-left transition flex items-center justify-between text-xs font-bold text-zinc-800"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("span", null, "\uD83D\uDCF1"), /*#__PURE__*/React.createElement("span", null, "Pay with USSD (*737#, *919#, etc.)")), /*#__PURE__*/React.createElement("span", {
    className: "text-emerald-600"
  }, "\u2192"))), /*#__PURE__*/React.createElement("p", {
    className: "text-[11px] text-zinc-400 text-center"
  }, "\uD83D\uDCA1 ", /*#__PURE__*/React.createElement("em", null, "Studio Owner: To route real customer funds directly to your Nigerian bank, paste your Paystack Public Key in the Owner Portal!")))), isAdminOpen && /*#__PURE__*/React.createElement("div", {
    className: "fixed inset-0 z-50 flex items-center justify-center p-4 modal-backdrop"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-white rounded-[36px] max-w-4xl w-full p-8 shadow-2xl relative max-h-[85vh] overflow-y-auto"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between items-center mb-6"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "text-xl font-bold font-serif-lux"
  }, "The Damian Label - Owner Portal"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-zinc-500"
  }, "Ago Palace Way, Lagos \u2022 Live Appointments & Payment Management")), /*#__PURE__*/React.createElement("button", {
    onClick: () => setIsAdminOpen(false),
    className: "text-sm font-bold text-zinc-500"
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "p-4 bg-rose-50 rounded-2xl border border-rose-100"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-xs text-zinc-500"
  }, "Total Bookings"), /*#__PURE__*/React.createElement("p", {
    className: "text-xl font-black text-zinc-900"
  }, adminBookings.length)), /*#__PURE__*/React.createElement("div", {
    className: "p-4 bg-emerald-50 rounded-2xl border border-emerald-100"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-xs text-emerald-700"
  }, "Online Paid"), /*#__PURE__*/React.createElement("p", {
    className: "text-xl font-black text-emerald-700"
  }, adminBookings.filter(b => b.paymentStatus && b.paymentStatus.includes("Paid")).length)), /*#__PURE__*/React.createElement("div", {
    className: "p-4 bg-amber-50 rounded-2xl border border-amber-100"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-xs text-amber-700"
  }, "Funds Collected (\u20A6)"), /*#__PURE__*/React.createElement("p", {
    className: "text-xl font-black text-amber-700"
  }, formatNaira(adminBookings.reduce((sum, b) => sum + (b.amountPaidOnline || b.depositPaid || 0), 0)))), /*#__PURE__*/React.createElement("div", {
    className: "p-4 bg-zinc-50 rounded-2xl border border-zinc-200"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-xs text-zinc-500"
  }, "Projected Revenue"), /*#__PURE__*/React.createElement("p", {
    className: "text-xl font-black text-rose-600"
  }, formatNaira(adminBookings.reduce((sum, b) => sum + (b.finalTotal || 0), 0))))), /*#__PURE__*/React.createElement("div", {
    className: "flex border-b border-zinc-200 mb-6 gap-2 overflow-x-auto pb-2"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setAdminTab("bookings"),
    className: `px-4 py-2.5 rounded-xl font-bold text-xs flex items-center gap-2 whitespace-nowrap transition ${adminTab === "bookings" ? "bg-rose-600 text-white shadow-sm" : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200"}`
  }, /*#__PURE__*/React.createElement("span", null, "\uD83D\uDCCB"), /*#__PURE__*/React.createElement("span", null, "Orders & Payment Verification"), adminBookings.filter(b => b.status === "Pending Verification").length > 0 && /*#__PURE__*/React.createElement("span", {
    className: "bg-amber-400 text-zinc-950 px-2 py-0.5 rounded-full text-[10px] font-black animate-pulse"
  }, adminBookings.filter(b => b.status === "Pending Verification").length, " PENDING")), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setAdminTab("availability"),
    className: `px-4 py-2.5 rounded-xl font-bold text-xs flex items-center gap-2 whitespace-nowrap transition ${adminTab === "availability" ? "bg-rose-600 text-white shadow-sm" : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200"}`
  }, /*#__PURE__*/React.createElement("span", null, "\uD83D\uDCC5"), /*#__PURE__*/React.createElement("span", null, "Working Days & Availability (Private)")), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setAdminTab("payments"),
    className: `px-4 py-2.5 rounded-xl font-bold text-xs flex items-center gap-2 whitespace-nowrap transition ${adminTab === "payments" ? "bg-rose-600 text-white shadow-sm" : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200"}`
  }, /*#__PURE__*/React.createElement("span", null, "\uD83D\uDCB3"), /*#__PURE__*/React.createElement("span", null, "Bank & Paystack Keys")), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setAdminTab("alerts"),
    className: `px-4 py-2.5 rounded-xl font-bold text-xs flex items-center gap-2 whitespace-nowrap transition ${adminTab === "alerts" ? "bg-rose-600 text-white shadow-sm" : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200"}`
  }, /*#__PURE__*/React.createElement("span", null, "\uD83D\uDD14"), /*#__PURE__*/React.createElement("span", null, "Sound & Alerts"))), adminTab === "bookings" && /*#__PURE__*/React.createElement("div", {
    className: "space-y-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between flex-wrap gap-2 pb-2 border-b border-zinc-100"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex gap-2"
  }, [{
    id: "all",
    label: `All Orders (${adminBookings.length})`
  }, {
    id: "pending",
    label: `⚠️ Awaiting Credit Check (${adminBookings.filter(b => b.status === "Pending Verification").length})`
  }, {
    id: "confirmed",
    label: `✅ Confirmed (${adminBookings.filter(b => b.status === "Confirmed").length})`
  }].map(f => /*#__PURE__*/React.createElement("button", {
    key: f.id,
    type: "button",
    onClick: () => setAdminBookingsFilter(f.id),
    className: `px-3 py-1.5 rounded-full text-xs font-bold transition ${adminBookingsFilter === f.id ? "bg-zinc-900 text-white shadow-xs" : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"}`
  }, f.label))), /*#__PURE__*/React.createElement("p", {
    className: "text-[11px] text-zinc-400"
  }, "\uD83D\uDCA1 ", /*#__PURE__*/React.createElement("em", null, "Tap \"I Have Seen The Money\" once funds hit your account to confirm the client schedule!"))), /*#__PURE__*/React.createElement("div", {
    className: "space-y-3"
  }, adminBookings.filter(b => {
    if (adminBookingsFilter === "pending") return b.status === "Pending Verification";
    if (adminBookingsFilter === "confirmed") return b.status === "Confirmed";
    return true;
  }).map(b => {
    const isPending = b.status === "Pending Verification";
    const isConfirmed = b.status === "Confirmed";
    const isDeclined = b.status === "Declined";
    return /*#__PURE__*/React.createElement("div", {
      key: b.id,
      className: `p-4 rounded-2xl border transition shadow-xs ${isPending ? "bg-amber-50/60 border-amber-300" : isConfirmed ? "bg-white border-emerald-200" : "bg-zinc-50 border-zinc-200"}`
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-zinc-200/70 gap-2 text-xs"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-2 flex-wrap"
    }, /*#__PURE__*/React.createElement("span", {
      className: "font-mono font-black text-rose-600 text-sm"
    }, "#", b.id), /*#__PURE__*/React.createElement("span", {
      className: "font-bold text-zinc-900 text-sm"
    }, b.clientName), /*#__PURE__*/React.createElement("span", {
      className: "text-zinc-500"
    }, "\uD83D\uDCDE ", b.clientPhone), b.clientInstagram && b.clientInstagram !== "None" && /*#__PURE__*/React.createElement("span", {
      className: "text-pink-600 font-semibold bg-pink-50 px-2 py-0.5 rounded-full text-[10px]"
    }, b.clientInstagram)), /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-2"
    }, /*#__PURE__*/React.createElement("span", {
      className: `px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ${isPending ? "bg-amber-200 text-amber-900 border border-amber-300 animate-pulse" : isConfirmed ? "bg-emerald-100 text-emerald-800 border border-emerald-300" : "bg-rose-100 text-rose-800"}`
    }, isPending ? "⏳ Pending Studio Credit Alert" : isConfirmed ? "✅ Confirmed & Locked ✓" : "❌ Declined"))), /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-1 md:grid-cols-2 gap-3 py-3 text-xs"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
      className: "font-bold text-zinc-900"
    }, b.serviceName), b.addons && b.addons.length > 0 && /*#__PURE__*/React.createElement("p", {
      className: "text-[11px] text-zinc-500"
    }, "Addons: ", b.addons.join(", ")), /*#__PURE__*/React.createElement("p", {
      className: "text-zinc-600 mt-1"
    }, "\uD83D\uDCC5 ", /*#__PURE__*/React.createElement("strong", null, b.date), " @ ", /*#__PURE__*/React.createElement("strong", {
      className: "text-rose-600"
    }, b.time)), /*#__PURE__*/React.createElement("p", {
      className: "text-[11px] text-zinc-500"
    }, "\uD83D\uDCE6 Mode: ", b.deliveryMode)), /*#__PURE__*/React.createElement("div", {
      className: "space-y-1 sm:text-right"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex sm:justify-end gap-2 text-zinc-600"
    }, /*#__PURE__*/React.createElement("span", null, "Total Service Value:"), /*#__PURE__*/React.createElement("strong", {
      className: "text-zinc-900"
    }, formatNaira(b.finalTotal))), /*#__PURE__*/React.createElement("div", {
      className: "flex sm:justify-end gap-2 text-emerald-700 font-bold"
    }, /*#__PURE__*/React.createElement("span", null, "Amount Paid Online:"), /*#__PURE__*/React.createElement("span", null, formatNaira(b.amountPaidOnline || b.depositPaid || 0))), b.dueAtSalon > 0 && /*#__PURE__*/React.createElement("div", {
      className: "flex sm:justify-end gap-2 text-amber-800 font-semibold text-[11px]"
    }, /*#__PURE__*/React.createElement("span", null, "Balance Due at Pickup:"), /*#__PURE__*/React.createElement("span", null, formatNaira(b.dueAtSalon))), b.paymentReference && /*#__PURE__*/React.createElement("p", {
      className: "font-mono text-[10px] text-zinc-500"
    }, "Ref: ", b.paymentReference))), isPending && /*#__PURE__*/React.createElement("div", {
      className: "mt-2 pt-3 border-t border-amber-200/80 flex flex-wrap items-center justify-between gap-3"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-xs text-amber-900"
    }, /*#__PURE__*/React.createElement("strong", null, "\u26A0\uFE0F Action Required:"), " Verify that ", /*#__PURE__*/React.createElement("strong", null, formatNaira(b.amountPaidOnline || b.depositPaid || 0)), " was credited into your account."), /*#__PURE__*/React.createElement("div", {
      className: "flex flex-wrap items-center gap-2"
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: () => handleVerifyPayment(b.id),
      className: "px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition flex items-center gap-1.5"
    }, /*#__PURE__*/React.createElement("span", null, "\u2705"), /*#__PURE__*/React.createElement("span", null, "I Have Seen The Money (Confirm Schedule)")), /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: () => handleOpenPrintReceipt(b),
      className: "px-3 py-2 rounded-xl bg-white hover:bg-zinc-100 text-zinc-800 font-bold text-xs border border-zinc-300 shadow-xs flex items-center gap-1 transition"
    }, /*#__PURE__*/React.createElement("span", null, "\uD83D\uDDA8\uFE0F"), /*#__PURE__*/React.createElement("span", null, "Print Receipt")), /*#__PURE__*/React.createElement("a", {
      href: `https://wa.me/234${b.clientPhone.replace(/^0|\D/g, '')}?text=Hello%20${encodeURIComponent(b.clientName)},%20this%20is%20The%20Damian%20Label%20regarding%20your%20appointment%20%23${b.id}.%20Please%20send%20us%20your%20debit%20or%20transfer%20receipt%20so%20we%20can%20lock%20your%20schedule.`,
      target: "_blank",
      rel: "noopener noreferrer",
      className: "px-3 py-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-bold text-xs border border-emerald-300 flex items-center gap-1 transition"
    }, /*#__PURE__*/React.createElement("span", null, "\uD83D\uDCAC"), /*#__PURE__*/React.createElement("span", null, "Chat Client")), /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: () => handleDeclineBooking(b.id),
      className: "px-3 py-2 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-700 font-bold text-xs border border-rose-300 flex items-center gap-1 transition"
    }, /*#__PURE__*/React.createElement("span", null, "\u274C"), /*#__PURE__*/React.createElement("span", null, "Decline")))), isConfirmed && /*#__PURE__*/React.createElement("div", {
      className: "mt-2 pt-3 border-t border-emerald-200 flex flex-wrap items-center justify-between gap-2 text-xs"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-emerald-800 font-semibold flex items-center gap-1"
    }, /*#__PURE__*/React.createElement("span", null, "\u2713"), /*#__PURE__*/React.createElement("span", null, "Money Verified & Schedule Locked"), b.verifiedAt && /*#__PURE__*/React.createElement("span", {
      className: "text-[10px] text-zinc-500"
    }, "(", new Date(b.verifiedAt).toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit'
    }), ")")), /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-2"
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: () => handleOpenPrintReceipt(b),
      className: "px-3 py-1.5 rounded-xl bg-white hover:bg-zinc-100 text-zinc-800 font-bold text-xs border border-zinc-300 shadow-xs flex items-center gap-1 transition"
    }, /*#__PURE__*/React.createElement("span", null, "\uD83D\uDDA8\uFE0F"), /*#__PURE__*/React.createElement("span", null, "Print Official Receipt")), /*#__PURE__*/React.createElement("a", {
      href: `https://wa.me/234${b.clientPhone.replace(/^0|\D/g, '')}?text=Hello%20${encodeURIComponent(b.clientName)}!%20Your%20payment%20for%20appointment%20%23${b.id}%20at%20The%20Damian%20Label%20has%20been%20verified%20and%20your%20schedule%20is%20officially%20CONFIRMED%20for%20${b.date}%20at%20${b.time}.%20See%20you%20soon%20at%20Ago%20Palace%20Way!`,
      target: "_blank",
      rel: "noopener noreferrer",
      className: "px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-xs flex items-center gap-1 transition"
    }, /*#__PURE__*/React.createElement("span", null, "\uD83D\uDCAC"), /*#__PURE__*/React.createElement("span", null, "WhatsApp Receipt")))), isDeclined && /*#__PURE__*/React.createElement("div", {
      className: "mt-2 pt-2 border-t border-zinc-200 flex items-center justify-between text-xs text-rose-700"
    }, /*#__PURE__*/React.createElement("span", null, "\u274C Declined / Payment Not Seen"), /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: () => handleVerifyPayment(b.id),
      className: "font-bold underline text-xs"
    }, "Re-verify Payment")));
  }))), adminTab === "availability" && /*#__PURE__*/React.createElement("div", {
    className: "space-y-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "p-4 rounded-2xl bg-rose-50/80 border border-rose-200"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2 mb-1"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-xl"
  }, "\uD83D\uDD12"), /*#__PURE__*/React.createElement("h4", {
    className: "font-bold text-zinc-900 text-sm"
  }, "Private Studio Working Days & Blackout Dates")), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-zinc-600 leading-relaxed"
  }, /*#__PURE__*/React.createElement("strong", null, "Only you can see this section."), " Toggle the days of the week you accept bookings and block off specific dates (holidays, rest days, market trips). Any change immediately updates your client-facing booking calendar.")), /*#__PURE__*/React.createElement("div", {
    className: "p-4 rounded-2xl bg-white border border-zinc-200 flex items-center justify-between"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h5", {
    className: "font-bold text-zinc-900 text-xs"
  }, "Studio Online Booking Switch"), /*#__PURE__*/React.createElement("p", {
    className: "text-[11px] text-zinc-500"
  }, "Temporarily pause new online orders whenever you want.")), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => updateAvailability({
      ...availability,
      acceptingOrders: !availability.acceptingOrders
    }),
    className: `px-4 py-2 rounded-xl text-xs font-bold transition shadow-xs ${availability.acceptingOrders !== false ? "bg-emerald-600 text-white" : "bg-rose-600 text-white"}`
  }, availability.acceptingOrders !== false ? "🟢 Taking Online Bookings" : "🔴 Bookings Paused")), /*#__PURE__*/React.createElement("div", {
    className: "p-5 rounded-2xl bg-white border border-zinc-200 space-y-3"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h5", {
    className: "font-bold text-zinc-900 text-xs uppercase tracking-wider"
  }, "Weekly Available Days"), /*#__PURE__*/React.createElement("p", {
    className: "text-[11px] text-zinc-500"
  }, "Tap a day to toggle OPEN or CLOSED. Closed days cannot be booked by clients.")), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2"
  }, [{
    day: 0,
    label: "Sunday",
    short: "Sun"
  }, {
    day: 1,
    label: "Monday",
    short: "Mon"
  }, {
    day: 2,
    label: "Tuesday",
    short: "Tue"
  }, {
    day: 3,
    label: "Wednesday",
    short: "Wed"
  }, {
    day: 4,
    label: "Thursday",
    short: "Thu"
  }, {
    day: 5,
    label: "Friday",
    short: "Fri"
  }, {
    day: 6,
    label: "Saturday",
    short: "Sat"
  }].map(item => {
    const isOpen = availability.workingDays.includes(item.day);
    return /*#__PURE__*/React.createElement("button", {
      key: item.day,
      type: "button",
      onClick: () => toggleWorkingDay(item.day),
      className: `p-3 rounded-2xl border text-center transition flex flex-col items-center justify-center gap-1 cursor-pointer ${isOpen ? "bg-emerald-50 border-emerald-400 text-emerald-900 shadow-xs" : "bg-zinc-100 border-zinc-200 text-zinc-400 opacity-70"}`
    }, /*#__PURE__*/React.createElement("span", {
      className: "font-bold text-xs"
    }, item.label), /*#__PURE__*/React.createElement("span", {
      className: `text-[10px] font-black px-2 py-0.5 rounded-full ${isOpen ? "bg-emerald-200 text-emerald-800" : "bg-zinc-200 text-zinc-600"}`
    }, isOpen ? "OPEN ✓" : "CLOSED ✕"));
  }))), /*#__PURE__*/React.createElement("div", {
    className: "p-5 rounded-2xl bg-white border border-zinc-200 space-y-4"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h5", {
    className: "font-bold text-zinc-900 text-xs uppercase tracking-wider"
  }, "Block Specific Dates (Blackout Calendar)"), /*#__PURE__*/React.createElement("p", {
    className: "text-[11px] text-zinc-500"
  }, "Pick any date you want to mark as Booked / Closed on the calendar.")), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col sm:flex-row gap-2"
  }, /*#__PURE__*/React.createElement("input", {
    type: "date",
    min: getFormattedFutureDate(0),
    value: newBlockedDateInput,
    onChange: e => setNewBlockedDateInput(e.target.value),
    className: "px-4 py-2 rounded-xl border border-zinc-300 text-xs bg-white text-zinc-800"
  }), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: handleAddBlockedDate,
    className: "px-5 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs transition shadow-xs flex items-center justify-center gap-1"
  }, /*#__PURE__*/React.createElement("span", null, "\uD83D\uDEAB"), /*#__PURE__*/React.createElement("span", null, "Block This Date"))), availability.blockedDates && availability.blockedDates.length > 0 ? /*#__PURE__*/React.createElement("div", {
    className: "space-y-2 pt-2 border-t border-zinc-100"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-[11px] font-bold text-zinc-600 uppercase"
  }, "Currently Blocked Dates:"), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-2"
  }, availability.blockedDates.map(dateStr => /*#__PURE__*/React.createElement("div", {
    key: dateStr,
    className: "inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-rose-100 border border-rose-300 text-rose-800 text-xs font-bold"
  }, /*#__PURE__*/React.createElement("span", null, "\uD83D\uDEAB ", formatReadableDate(dateStr), " (", dateStr, ")"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => handleRemoveBlockedDate(dateStr),
    className: "w-5 h-5 rounded-full bg-rose-200 hover:bg-rose-300 text-rose-900 flex items-center justify-center text-xs ml-1",
    title: "Unblock date"
  }, "\u2715"))))) : /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-zinc-400 italic"
  }, "No specific dates currently blocked.")), /*#__PURE__*/React.createElement("div", {
    className: "p-5 rounded-2xl bg-white border border-zinc-200 space-y-2"
  }, /*#__PURE__*/React.createElement("h5", {
    className: "font-bold text-zinc-900 text-xs uppercase tracking-wider"
  }, "Client Notice Banner Above Calendar"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: availability.customNotice || "",
    onChange: e => updateAvailability({
      ...availability,
      customNotice: e.target.value
    }),
    placeholder: "e.g. Studio open Monday - Saturday at Ago Palace Way, Lagos.",
    className: "w-full px-4 py-2.5 rounded-xl border border-zinc-300 text-xs bg-white"
  }), /*#__PURE__*/React.createElement("p", {
    className: "text-[10px] text-zinc-400"
  }, "This notice appears directly above the booking calendar in Step 2."))), adminTab === "payments" && /*#__PURE__*/React.createElement("div", {
    className: "p-5 rounded-2xl bg-emerald-50/60 border border-emerald-200 space-y-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-xl"
  }, "\uD83D\uDCB3"), /*#__PURE__*/React.createElement("h4", {
    className: "font-bold text-zinc-900 text-sm"
  }, "Paystack & Studio Bank Account Configuration")), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block font-bold text-zinc-700 mb-1"
  }, "Paystack Public Key"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: paystackKey,
    onChange: e => {
      setPaystackKey(e.target.value);
      localStorage.setItem("tdl_paystack_key", e.target.value);
    },
    placeholder: "pk_live_xxxx or pk_test_xxxx",
    className: "w-full px-3 py-2 rounded-xl border border-zinc-200 bg-white font-mono text-[11px]"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block font-bold text-zinc-700 mb-1"
  }, "Bank Name"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: bankDetails.bankName,
    onChange: e => {
      const updated = {
        ...bankDetails,
        bankName: e.target.value
      };
      setBankDetails(updated);
      localStorage.setItem("tdl_bank_d\etails", JSON.stringify(updated));
    },
    className: "w-full px-3 py-2 rounded-xl border border-zinc-200 bg-white text-xs"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block font-bold text-zinc-700 mb-1"
  }, "Studio Account Number"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: bankDetails.accountNumber,
    onChange: e => {
      const updated = {
        ...bankDetails,
        accountNumber: e.target.value
      };
      setBankDetails(updated);
      localStorage.setItem("tdl_bank_details", JSON.stringify(updated));
    },
    className: "w-full px-3 py-2 rounded-xl border border-zinc-200 bg-white text-xs font-mono font-bold"
  }))), /*#__PURE__*/React.createElement("p", {
    className: "text-[11px] text-zinc-500"
  }, "Enter your Paystack Public Key from your ", /*#__PURE__*/React.createElement("a", {
    href: "https://dashboard.paystack.com",
    target: "_blank",
    className: "text-emerald-700 font-bold underline"
  }, "Paystack Dashboard"), " to receive card and bank payments straight into your Nigerian account!")), adminTab === "alerts" && /*#__PURE__*/React.createElement("div", {
    className: "p-5 rounded-2xl bg-white border border-zinc-200 space-y-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-xl"
  }, "\uD83D\uDD14"), /*#__PURE__*/React.createElement("h4", {
    className: "font-bold text-zinc-900 text-sm"
  }, "Notifications & Audio Alerts")), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between p-3 rounded-xl bg-zinc-50 border border-zinc-200 text-xs"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "font-bold text-zinc-900"
  }, "Audio Chime on Booking / Payment"), /*#__PURE__*/React.createElement("p", {
    className: "text-zinc-500"
  }, "Plays an instant chime sound whenever an appointment is submitted.")), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => {
      const updated = {
        ...ownerNotificationSettings,
        soundAlerts: !ownerNotificationSettings.soundAlerts
      };
      setOwnerNotificationSettings(updated);
      localStorage.setItem("tdl_owner_notifications", JSON.stringify(updated));
    },
    className: `px-4 py-2 rounded-xl text-xs font-bold transition ${ownerNotificationSettings.soundAlerts ? "bg-emerald-600 text-white" : "bg-zinc-200 text-zinc-700"}`
  }, ownerNotificationSettings.soundAlerts ? "Enabled 🔔" : "Muted 🔕")), /*#__PURE__*/React.createElement("div", {
    className: "p-3 rounded-xl bg-zinc-50 border border-zinc-200 text-xs flex items-center justify-between"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "font-bold text-zinc-900"
  }, "Desktop Browser Notification"), /*#__PURE__*/React.createElement("p", {
    className: "text-zinc-500"
  }, "Receive popup notification on your phone or PC when a booking arrives.")), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => {
      if ("Notification" in window) {
        Notification.requestPermission().then(permission => {
          showToast(`Notification permission: ${permission}`, "info");
        });
      }
    },
    className: "px-4 py-2 rounded-xl bg-zinc-900 text-white text-xs font-bold hover:bg-zinc-800"
  }, "Enable Desktop Push"))))), receiptToPrint && /*#__PURE__*/React.createElement("div", {
    className: "fixed inset-0 z-50 flex items-center justify-center p-4 modal-backdrop overflow-y-auto"
  }, /*#__PURE__*/React.createElement("div", {
    id: "printable-receipt-modal",
    className: "bg-white rounded-[32px] max-w-xl w-full p-8 shadow-2xl relative text-left border border-zinc-200 my-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between items-center pb-4 mb-4 border-b border-zinc-200 no-print"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-bold text-zinc-500 uppercase tracking-wider"
  }, "Official Studio Receipt"), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: handleTriggerBrowserPrint,
    className: "px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs shadow flex items-center gap-1.5 transition"
  }, /*#__PURE__*/React.createElement("span", null, "\uD83D\uDDA8\uFE0F"), /*#__PURE__*/React.createElement("span", null, "Print Now / Save PDF")), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setReceiptToPrint(null),
    className: "w-8 h-8 rounded-full bg-zinc-100 text-zinc-600 flex items-center justify-center font-bold text-xs hover:bg-zinc-200"
  }, "\u2715"))), /*#__PURE__*/React.createElement("div", {
    className: "space-y-5 text-zinc-800"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between items-start border-b-2 border-zinc-900 pb-4"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2 mb-1"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-8 h-8 rounded-lg gradient-babe text-white font-black flex items-center justify-center text-xs"
  }, "TDL"), /*#__PURE__*/React.createElement("h2", {
    className: "text-xl font-black text-zinc-900 font-serif-lux tracking-wide"
  }, "THE DAMIAN LABEL")), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-zinc-600 font-medium"
  }, "Luxury Wig Revamping, Wigging, Ventilation & Nails"), /*#__PURE__*/React.createElement("p", {
    className: "text-[11px] text-zinc-500"
  }, "\uD83D\uDCCD Ago Palace Way, Lagos, Nigeria \u2022 \uD83D\uDCDE 0810-002-4096"), /*#__PURE__*/React.createElement("p", {
    className: "text-[11px] text-zinc-500"
  }, "\uD83D\uDCF8 IG: @the_damian_label \u2022 \uD83C\uDFB5 TikTok: @thedamianslabel")), /*#__PURE__*/React.createElement("div", {
    className: "text-right"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] font-bold uppercase tracking-widest text-zinc-400 block"
  }, "Receipt / Booking ID"), /*#__PURE__*/React.createElement("span", {
    className: "text-lg font-mono font-black text-rose-600"
  }, "#", receiptToPrint.id), /*#__PURE__*/React.createElement("p", {
    className: "text-[10px] text-zinc-400 mt-1"
  }, new Date(receiptToPrint.createdAt || Date.now()).toLocaleDateString("en-NG", {
    dateStyle: "medium"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "py-2 text-center"
  }, receiptToPrint.status === "Confirmed" ? /*#__PURE__*/React.createElement("div", {
    className: "inline-block px-5 py-2 rounded-xl watermark-stamp-verified font-black text-xs uppercase tracking-widest bg-emerald-50"
  }, "\u2713 OFFICIAL RECEIPT \u2014 PAYMENT VERIFIED & SCHEDULE CONFIRMED") : /*#__PURE__*/React.createElement("div", {
    className: "inline-block px-5 py-2 rounded-xl watermark-stamp-pending font-black text-xs uppercase tracking-widest bg-amber-50"
  }, "\u23F3 PROVISIONAL RECEIPT \u2014 AWAITING STUDIO BANK CREDIT CHECK")), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 gap-4 bg-zinc-50 p-4 rounded-2xl border border-zinc-200 text-xs"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] uppercase font-bold text-zinc-400 block mb-1"
  }, "Billed To (Client):"), /*#__PURE__*/React.createElement("p", {
    className: "font-bold text-zinc-900 text-sm"
  }, receiptToPrint.clientName), /*#__PURE__*/React.createElement("p", {
    className: "text-zinc-600"
  }, receiptToPrint.clientPhone), /*#__PURE__*/React.createElement("p", {
    className: "text-zinc-500"
  }, receiptToPrint.clientEmail), receiptToPrint.clientInstagram && receiptToPrint.clientInstagram !== "None" && /*#__PURE__*/React.createElement("p", {
    className: "text-pink-600 font-semibold"
  }, receiptToPrint.clientInstagram)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] uppercase font-bold text-zinc-400 block mb-1"
  }, "Appointment Schedule:"), /*#__PURE__*/React.createElement("p", {
    className: "font-bold text-rose-600 text-sm"
  }, formatReadableDate(receiptToPrint.date)), /*#__PURE__*/React.createElement("p", {
    className: "font-semibold text-zinc-800"
  }, "Time: ", receiptToPrint.time), /*#__PURE__*/React.createElement("p", {
    className: "text-zinc-600"
  }, "Mode: ", receiptToPrint.deliveryMode))), /*#__PURE__*/React.createElement("div", {
    className: "border border-zinc-200 rounded-2xl overflow-hidden text-xs"
  }, /*#__PURE__*/React.createElement("table", {
    className: "w-full text-left"
  }, /*#__PURE__*/React.createElement("thead", {
    className: "bg-zinc-100 text-zinc-700 text-[11px] font-bold uppercase"
  }, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    className: "p-3"
  }, "Description"), /*#__PURE__*/React.createElement("th", {
    className: "p-3 text-right"
  }, "Amount"))), /*#__PURE__*/React.createElement("tbody", {
    className: "divide-y divide-zinc-200"
  }, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: "p-3 font-semibold text-zinc-900"
  }, receiptToPrint.serviceName, /*#__PURE__*/React.createElement("span", {
    className: "block text-[10px] text-zinc-500 font-normal"
  }, "Primary Salon Service")), /*#__PURE__*/React.createElement("td", {
    className: "p-3 text-right font-bold text-zinc-900"
  }, formatNaira(receiptToPrint.servicePrice))), receiptToPrint.addons && receiptToPrint.addons.length > 0 && /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: "p-3 text-zinc-700"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-semibold"
  }, "Custom Add-ons:"), /*#__PURE__*/React.createElement("ul", {
    className: "list-disc list-inside text-[11px] text-zinc-500 mt-0.5"
  }, receiptToPrint.addons.map((a, idx) => /*#__PURE__*/React.createElement("li", {
    key: idx
  }, a)))), /*#__PURE__*/React.createElement("td", {
    className: "p-3 text-right font-semibold text-zinc-800"
  }, "+", formatNaira(receiptToPrint.addonsTotal || 0))), receiptToPrint.discountTotal > 0 && /*#__PURE__*/React.createElement("tr", {
    className: "bg-emerald-50/50"
  }, /*#__PURE__*/React.createElement("td", {
    className: "p-3 font-semibold text-emerald-800"
  }, "VIP Promo Discount"), /*#__PURE__*/React.createElement("td", {
    className: "p-3 text-right font-bold text-emerald-700"
  }, "-", formatNaira(receiptToPrint.discountTotal)))), /*#__PURE__*/React.createElement("tfoot", {
    className: "bg-zinc-50 font-bold border-t-2 border-zinc-200"
  }, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: "p-3 text-zinc-900"
  }, "Total Value:"), /*#__PURE__*/React.createElement("td", {
    className: "p-3 text-right text-base font-black text-zinc-900"
  }, formatNaira(receiptToPrint.finalTotal))), /*#__PURE__*/React.createElement("tr", {
    className: "text-emerald-700"
  }, /*#__PURE__*/React.createElement("td", {
    className: "p-3"
  }, "Amount Paid Online:"), /*#__PURE__*/React.createElement("td", {
    className: "p-3 text-right font-black text-sm"
  }, formatNaira(receiptToPrint.amountPaidOnline || receiptToPrint.depositPaid || 0))), receiptToPrint.dueAtSalon > 0 && /*#__PURE__*/React.createElement("tr", {
    className: "text-amber-800"
  }, /*#__PURE__*/React.createElement("td", {
    className: "p-3"
  }, "Balance Due at Studio / Delivery:"), /*#__PURE__*/React.createElement("td", {
    className: "p-3 text-right font-black text-sm"
  }, formatNaira(receiptToPrint.dueAtSalon)))))), /*#__PURE__*/React.createElement("div", {
    className: "bg-rose-50/60 p-4 rounded-2xl border border-rose-200 text-xs space-y-1"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-zinc-600"
  }, "Payment Channel:"), /*#__PURE__*/React.createElement("strong", {
    className: "text-zinc-900"
  }, receiptToPrint.paymentMethod === 'bank_transfer' ? 'Direct Nigerian Bank Transfer' : 'Paystack Online (Card/Transfer/USSD)')), receiptToPrint.paymentReference && /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between font-mono"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-zinc-600"
  }, "Transaction Reference:"), /*#__PURE__*/React.createElement("strong", {
    className: "text-rose-600"
  }, receiptToPrint.paymentReference)), /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-zinc-600"
  }, "Studio Phone / WhatsApp:"), /*#__PURE__*/React.createElement("strong", {
    className: "text-emerald-700"
  }, "0810-002-4096"))), /*#__PURE__*/React.createElement("div", {
    className: "text-[10px] text-zinc-400 text-center border-t border-zinc-200 pt-3"
  }, /*#__PURE__*/React.createElement("p", null, "Thank you for choosing ", /*#__PURE__*/React.createElement("strong", null, "The Damian Label"), "! Ago Palace Way, Lagos, Nigeria."), /*#__PURE__*/React.createElement("p", null, "Follow us on Instagram ", /*#__PURE__*/React.createElement("strong", null, "@the_damian_label"), " & TikTok ", /*#__PURE__*/React.createElement("strong", null, "@thedamianslabel"), " to get your slay featured!"))))), /*#__PURE__*/React.createElement("div", {
    className: "fixed top-6 right-6 z-50 space-y-2"
  }, toasts.map(t => /*#__PURE__*/React.createElement("div", {
    key: t.id,
    className: "px-4 py-2 rounded-xl bg-white shadow-xl border border-rose-200 text-xs font-bold text-zinc-800 flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("span", null, t.type === "success" ? "💖" : t.type === "warning" ? "⚠️" : "✨"), /*#__PURE__*/React.createElement("span", null, t.message)))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'rgba(255, 255, 255, 0.96)',
      backdropFilter: 'blur(16px)',
      border: '1.5px solid rgba(251, 113, 133, 0.45)',
      boxShadow: '0 12px 35px rgba(225, 29, 72, 0.22), 0 2px 10px rgba(0, 0, 0, 0.05)'
    },
    className: `fixed bottom-5 left-4 sm:left-6 z-40 transition-all duration-300 rounded-3xl ${isMusicMinimized ? 'p-2 sm:p-2.5' : 'p-3 sm:p-3.5 max-w-[320px] sm:max-w-sm w-[calc(100vw-32px)] sm:w-auto'}`
  }, isMusicMinimized ? /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: toggleMusicPlay,
    style: {
      background: '#e11d48'
    },
    className: "w-9 h-9 rounded-full text-white flex items-center justify-center text-xs shadow-md hover:scale-110 active:scale-95 transition cursor-pointer"
  }, isPlayingMusic ? "⏸️" : "▶️"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setIsMusicMinimized(false),
    className: "text-xs font-bold text-rose-600 hover:text-rose-700 flex items-center gap-1 px-2 py-1 cursor-pointer"
  }, /*#__PURE__*/React.createElement("span", null, "\uD83C\uDFB5"), /*#__PURE__*/React.createElement("span", {
    className: "hidden sm:inline"
  }, "TDL Music"), /*#__PURE__*/React.createElement("span", null, "\u2795"))) : /*#__PURE__*/React.createElement("div", {
    className: "space-y-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between gap-2.5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2.5 overflow-hidden"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: toggleMusicPlay,
    style: {
      background: isPlayingMusic ? 'linear-gradient(135deg, #e11d48 0%, #f43f5e 100%)' : 'linear-gradient(135deg, #18181b 0%, #27272a 100%)',
      boxShadow: '0 4px 15px rgba(225, 29, 72, 0.35)'
    },
    className: "w-9 h-9 sm:w-10 sm:h-10 rounded-full text-white flex items-center justify-center text-xs sm:text-sm shadow-md hover:scale-105 active:scale-95 transition cursor-pointer flex-shrink-0"
  }, isPlayingMusic ? "⏸️" : "▶️"), /*#__PURE__*/React.createElement("div", {
    className: "flex items-end gap-1 h-5 px-1 flex-shrink-0"
  }, /*#__PURE__*/React.createElement("span", {
    className: `w-1 bg-rose-500 rounded-full ${isPlayingMusic ? 'eq-bar-1' : 'h-1.5'}`
  }), /*#__PURE__*/React.createElement("span", {
    className: `w-1 bg-pink-500 rounded-full ${isPlayingMusic ? 'eq-bar-2' : 'h-2.5'}`
  }), /*#__PURE__*/React.createElement("span", {
    className: `w-1 bg-rose-600 rounded-full ${isPlayingMusic ? 'eq-bar-3' : 'h-1'}`
  }), /*#__PURE__*/React.createElement("span", {
    className: `w-1 bg-amber-400 rounded-full ${isPlayingMusic ? 'eq-bar-4' : 'h-2'}`
  })), /*#__PURE__*/React.createElement("div", {
    className: "overflow-hidden min-w-0"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-[10px] font-black uppercase tracking-wider text-rose-500 flex items-center gap-1"
  }, /*#__PURE__*/React.createElement("span", null, isPlayingMusic ? "Now Playing" : "Paused"), /*#__PURE__*/React.createElement("span", null, "\u2728")), /*#__PURE__*/React.createElement("p", {
    className: "text-xs font-black text-zinc-900 truncate"
  }, musicTrackTitle))), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setIsMusicMinimized(true),
    className: "text-zinc-400 hover:text-zinc-700 text-xs px-1.5 py-0.5 rounded cursor-pointer",
    title: "Minimize player"
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between gap-2 pt-1 border-t border-rose-100 text-xs"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-1.5"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] text-zinc-500"
  }, musicVolume === 0 ? "🔇" : "🔊"), /*#__PURE__*/React.createElement("input", {
    type: "range",
    min: "0",
    max: "1",
    step: "0.05",
    value: musicVolume,
    onChange: e => handleMusicVolumeChange(parseFloat(e.target.value)),
    className: "w-14 sm:w-18 accent-rose-500 h-1 bg-rose-100 rounded-lg cursor-pointer",
    title: "Music Volume"
  })), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-1.5"
  }, /*#__PURE__*/React.createElement("input", {
    type: "file",
    ref: musicFileInputRef,
    onChange: handleCustomMusicUpload,
    accept: "audio/*",
    className: "hidden"
  }), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => musicFileInputRef.current?.click(),
    className: "px-2 py-0.5 rounded-full bg-rose-50 hover:bg-rose-100 text-rose-700 text-[10px] font-bold border border-rose-200 transition cursor-pointer flex items-center gap-1",
    title: "Play any MP3/WAV from your phone or computer"
  }, /*#__PURE__*/React.createElement("span", null, "\uD83D\uDCC1"), /*#__PURE__*/React.createElement("span", null, "Put My Song")), musicTrack !== "studio-music.wav" && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: handleResetToDefaultMusic,
    className: "text-[10px] text-zinc-400 hover:text-zinc-600 underline cursor-pointer",
    title: "Reset to default TDL sound"
  }, "Reset"))))), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => {
      playCuteBubblePop();
      setIsSpinWheelOpen(true);
    },
    style: {
      background: 'linear-gradient(135deg, #be123c 0%, #e11d48 50%, #f43f5e 100%)',
      boxShadow: '0 8px 25px rgba(225, 29, 72, 0.45)',
      color: '#ffffff',
      border: '1.5px solid rgba(255, 255, 255, 0.7)'
    },
    className: "fixed bottom-6 right-6 z-40 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-full flex items-center gap-2 cursor-pointer hover:scale-105 active:scale-95 transition-all shadow-xl font-black text-xs tracking-wide"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-base animate-bounce"
  }, "\uD83C\uDFA1"), /*#__PURE__*/React.createElement("span", {
    className: "hidden sm:inline"
  }, "Spin for Discount"), /*#__PURE__*/React.createElement("span", null, "\u2728")), isSpinWheelOpen && /*#__PURE__*/React.createElement("div", {
    className: "fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 overflow-y-auto"
  }, /*#__PURE__*/React.createElement("div", {
    className: "glass-panel p-6 sm:p-8 rounded-[36px] max-w-md w-full border border-pink-200 shadow-2xl relative text-center"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setIsSpinWheelOpen(false),
    className: "absolute top-4 right-4 w-8 h-8 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-600 font-black text-sm flex items-center justify-center cursor-pointer"
  }, "\u2715"), /*#__PURE__*/React.createElement("span", {
    className: "text-[11px] font-black uppercase tracking-widest text-rose-500 block mb-1"
  }, "\u2728 Lagos Babe Lucky Wheel"), /*#__PURE__*/React.createElement("h3", {
    className: "text-2xl sm:text-3xl font-black text-zinc-900 font-serif-lux mb-2"
  }, "Spin & Win Slay Perks! \uD83C\uDFA1"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-zinc-600 mb-6"
  }, "Spin our luxury wheel to unlock instant discounts, free gel nails, or revamp vouchers for your booking!"), /*#__PURE__*/React.createElement("div", {
    className: "relative w-64 h-64 mx-auto mb-6 flex items-center justify-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute -top-3 z-30 flex flex-col items-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[20px] border-t-rose-600 filter drop-shadow-md animate-bounce"
  })), /*#__PURE__*/React.createElement("div", {
    className: "w-64 h-64 rounded-full border-4 border-white shadow-2xl overflow-hidden relative",
    style: {
      transform: `rotate(${wheelRotation}deg)`,
      transition: isSpinning ? "transform 3.8s cubic-bezier(0.15, 0.9, 0.25, 1)" : "none",
      boxShadow: "0 0 30px rgba(225, 29, 72, 0.35)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 100 100",
    className: "w-full h-full"
  }, WHEEL_PRIZES.map((prize, idx) => {
    const startAngle = idx * 60;
    const endAngle = (idx + 1) * 60;
    const x1 = 50 + 50 * Math.cos(Math.PI * (startAngle - 90) / 180);
    const y1 = 50 + 50 * Math.sin(Math.PI * (startAngle - 90) / 180);
    const x2 = 50 + 50 * Math.cos(Math.PI * (endAngle - 90) / 180);
    const y2 = 50 + 50 * Math.sin(Math.PI * (endAngle - 90) / 180);
    const path = `M 50 50 L ${x1} ${y1} A 50 50 0 0 1 ${x2} ${y2} Z`;
    const midAngle = startAngle + 30;
    const textX = 50 + 32 * Math.cos(Math.PI * (midAngle - 90) / 180);
    const textY = 50 + 32 * Math.sin(Math.PI * (midAngle - 90) / 180);
    return /*#__PURE__*/React.createElement("g", {
      key: prize.code
    }, /*#__PURE__*/React.createElement("path", {
      d: path,
      fill: prize.color,
      stroke: "#ffffff",
      strokeWidth: "1.5"
    }), /*#__PURE__*/React.createElement("text", {
      x: textX,
      y: textY,
      fill: "#ffffff",
      fontSize: "5.5",
      fontWeight: "900",
      textAnchor: "middle",
      dominantBaseline: "central",
      transform: `rotate(${midAngle + 90}, ${textX}, ${textY})`
    }, prize.label));
  })), /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 m-auto w-12 h-12 rounded-full bg-white border-2 border-rose-300 shadow-lg flex items-center justify-center font-black text-rose-600 text-xs"
  }, "TDL"))), wonWheelPrize ? /*#__PURE__*/React.createElement("div", {
    className: "space-y-3 bg-rose-50/80 p-4 rounded-2xl border border-rose-200"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-2xl animate-bounce block"
  }, "\uD83C\uDF89"), /*#__PURE__*/React.createElement("h4", {
    className: "text-lg font-black text-rose-600 font-serif-lux"
  }, "YOU WON: ", wonWheelPrize.label, "!"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-zinc-600 font-medium"
  }, wonWheelPrize.desc, " \u2022 Promo Code: ", /*#__PURE__*/React.createElement("strong", {
    className: "font-mono text-zinc-900 bg-white px-2 py-0.5 rounded border border-rose-200"
  }, wonWheelPrize.code)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: handleApplyWheelPrize,
    style: {
      backgroundColor: '#e11d48'
    },
    className: "w-full py-3 rounded-full text-white font-black text-xs sm:text-sm shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition cursor-pointer"
  }, "Claim & Apply Discount to Booking \uD83D\uDC96")) : /*#__PURE__*/React.createElement("button", {
    type: "button",
    disabled: isSpinning,
    onClick: handleSpinWheel,
    style: {
      backgroundColor: '#e11d48',
      background: 'linear-gradient(135deg, #e11d48 0%, #f43f5e 50%, #be123c 100%)',
      color: '#ffffff',
      boxShadow: '0 6px 20px rgba(225, 29, 72, 0.45)'
    },
    className: "w-full py-3.5 rounded-full text-white font-black text-sm uppercase tracking-wider shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition cursor-pointer disabled:opacity-50"
  }, isSpinning ? "Spinning Lucky Wheel... 🎡" : "SPIN THE SLAY WHEEL! 🎡✨"))), isSocialProofVisible && /*#__PURE__*/React.createElement("div", {
    onClick: () => bookingSectionRef.current?.scrollIntoView({
      behavior: "smooth"
    }),
    style: {
      background: 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(12px)',
      border: '1.5px solid rgba(251, 113, 133, 0.4)',
      boxShadow: '0 8px 25px rgba(0, 0, 0, 0.08)'
    },
    className: "fixed bottom-5 left-1/2 transform -translate-x-1/2 z-30 hidden lg:flex items-center gap-2.5 px-4 py-2 rounded-full text-xs transition-all shadow-lg cursor-pointer hover:scale-105"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-2 h-2 rounded-full bg-emerald-500 animate-ping"
  }), /*#__PURE__*/React.createElement("span", {
    className: "text-sm"
  }, SOCIAL_PROOF_EVENTS[socialProofIndex].icon), /*#__PURE__*/React.createElement("span", {
    className: "text-zinc-700 font-medium"
  }, /*#__PURE__*/React.createElement("strong", {
    className: "text-zinc-900 font-bold"
  }, SOCIAL_PROOF_EVENTS[socialProofIndex].client), " from ", SOCIAL_PROOF_EVENTS[socialProofIndex].area, " booked ", /*#__PURE__*/React.createElement("span", {
    className: "text-rose-600 font-bold"
  }, SOCIAL_PROOF_EVENTS[socialProofIndex].service)), /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] text-zinc-400 font-mono"
  }, "(", SOCIAL_PROOF_EVENTS[socialProofIndex].time, ")"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: e => {
      e.stopPropagation();
      setIsSocialProofVisible(false);
    },
    className: "text-zinc-400 hover:text-zinc-700 ml-1 text-xs cursor-pointer"
  }, "\u2715")), showMobileStickyBar && /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'rgba(255, 255, 255, 0.97)',
      backdropFilter: 'blur(16px)',
      boxShadow: '0 -4px 20px rgba(0, 0, 0, 0.08)'
    },
    className: "fixed bottom-0 left-0 right-0 z-40 md:hidden border-t border-rose-200 px-4 py-2 flex items-center justify-between transition-all"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-8 h-8 rounded-xl gradient-babe text-white font-black text-xs flex items-center justify-center shadow-xs"
  }, "TDL"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "text-xs font-black text-zinc-900 leading-tight"
  }, "The Damian Label"), /*#__PURE__*/React.createElement("p", {
    className: "text-[10px] text-rose-500 font-bold"
  }, "Ago Palace Way, Lagos"))), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => {
      playCuteGirlySound();
      bookingSectionRef.current?.scrollIntoView({
        behavior: "smooth"
      });
    },
    style: {
      backgroundColor: '#e11d48',
      background: 'linear-gradient(135deg, #e11d48 0%, #f43f5e 100%)',
      color: '#ffffff',
      boxShadow: '0 4px 14px rgba(225, 29, 72, 0.4)'
    },
    className: "px-5 py-2 rounded-full text-white font-black text-xs shadow-md active:scale-95 cursor-pointer"
  }, "Book Slay \u2728")));
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = App;
}

if (typeof ReactDOM !== 'undefined' && document.getElementById('root')) {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(React.createElement(App));
}
})();
