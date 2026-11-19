const { useState, useEffect, useMemo, useRef } = React;

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
  workingDays: [1, 2, 3, 4, 5, 6], // Mon - Sat open by default
  blockedDates: [], // Array of "YYYY-MM-DD" dates blocked by owner
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
  },
  {
    id: "revamp-styling-curls",
    category: "revamp",
    name: "Wig Revamp + Bouncy Hollywood Pin Curls",
    price: 18000,
    duration: "48 hrs turnaround",
    badge: "Most Requested",
    badgeType: "bg-amber-100 text-amber-800 border border-amber-300",
    description: "Full revamp treatment plus bouncy barrel pin curls set and held with silk clips. Long-lasting bounce and mirror shine.",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "revamp-bone-straight",
    category: "revamp",
    name: "Wig Revamp + Bone Straight Silk Press",
    price: 16000,
    duration: "48 hrs turnaround",
    badge: "Glass Finish",
    badgeType: "bg-fuchsia-100 text-fuchsia-800 border border-fuchsia-300",
    description: "Restores stiff or tangled hair to featherweight, mirror-finish bone straight texture with heat protection and zero weigh-down.",
    image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=700&q=80"
  },
  {
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
  },
  {
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
  },
  {
    id: "nail-gel-overlay",
    category: "nails",
    name: "Gel Nails & BIAB Strength Overlay",
    price: 12000,
    duration: "60 mins",
    badge: "Clean Girl",
    badgeType: "bg-emerald-100 text-emerald-800 border border-emerald-300",
    description: "Builder in a bottle strengthening layer over natural nails. Prevents breakage and includes long-lasting glossy gel polish.",
    image: "https://images.unsplash.com/photo-1607779097040-26e80aa78e66?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "nail-french-chrome",
    category: "nails",
    name: "Glazed French Chrome / 3D Floral Art Acrylics",
    price: 22000,
    duration: "105 mins",
    badge: "Trending Art",
    badgeType: "bg-fuchsia-100 text-fuchsia-800 border border-fuchsia-300",
    description: "Showstopping 3D flower charms, glazed chrome powder, or animal print French tips exactly like our flier!",
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=700&q=80"
  },
  {
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
  },
  {
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
  }
];

const ADDONS = [
  { id: "addon-3d-art", name: "3D Floral Art & Crystals (2 nails)", price: 3000, appliesTo: "nails" },
  { id: "addon-chrome", name: "Glazed Donut / Chrome Finish", price: 2500, appliesTo: "nails" },
  { id: "addon-french", name: "French Tips / Animal Print Tips", price: 2500, appliesTo: "nails" },
  { id: "addon-extra-length", name: "XXL Extra Length Acrylics", price: 3000, appliesTo: "nails" },
  { id: "addon-dye-black", name: "Jet Black Wig Coloring / Dyeing", price: 8000, appliesTo: "revamp" },
  { id: "addon-bleach-knots", name: "Lace Knots Bleaching & Tinting", price: 5000, appliesTo: "wigging" },
  { id: "addon-express", name: "Express 24-Hour Revamp Rush Fee", price: 6000, appliesTo: "revamp" }
];



const PROMO_CODES = {
  "TDL10": { type: "percent", value: 10, name: "10% TDL Babe Perk" },
  "LAGOSBABE": { type: "percent", value: 15, name: "15% Lagos Girlies Special" },
  "REVAMP5K": { type: "fixed", value: 5000, name: "₦5,000 Off Discount" },
  "SLAY2K": { type: "fixed", value: 2000, name: "₦2,000 Slay Wheel Prize" },
  "VIP3K": { type: "fixed", value: 3000, name: "₦3,000 VIP Lucky Voucher" },
  "GLUELESS15": { type: "percent", value: 15, name: "15% Glueless Spin Winner" },
  "FREEGEL": { type: "fixed", value: 2000, name: "Free Gel Polish & Cuticle Care" },
  "SILKDROPS": { type: "fixed", value: 1500, name: "Free Silk Steam Drops" }
};

const WHEEL_PRIZES = [
  { code: "SLAY2K", label: "₦2,000 OFF", desc: "₦2,000 Off Any Revamp Service", color: "#e11d48", text: "#ffffff" },
  { code: "FREEGEL", label: "FREE GEL NAILS", desc: "Free Luxury Gel Topcoat & Care", color: "#ec4899", text: "#ffffff" },
  { code: "GLUELESS15", label: "15% OFF", desc: "15% Off Glueless Customization", color: "#8b5cf6", text: "#ffffff" },
  { code: "VIP3K", label: "₦3,000 VIP", desc: "₦3,000 Off VIP Slay Bundles", color: "#f59e0b", text: "#ffffff" },
  { code: "SILKDROPS", label: "SILK STEAM", desc: "Free Silk Steam Infusion Treatment", color: "#10b981", text: "#ffffff" },
  { code: "LAGOSBABE", label: "15% LAGOS", desc: "15% Lagos Girlies Special Perk", color: "#f43f5e", text: "#ffffff" }
];

const TRANSFORMATIONS = [
  {
    id: "revamp",
    title: "Bone Straight Steam Wash & Revamp",
    tag: "Tangled ➡️ Glass Hair",
    beforeImage: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=800&q=80",
    beforeDesc: "Frizzy, heat-damaged, matte, dry synthetic/human hair with heavy tangles.",
    afterDesc: "Deep steam treated, bone-straight silk press with ultra-mirror shine & fluid movement.",
    price: 10000,
    serviceId: "revamp-1"
  },
  {
    id: "ventilation",
    title: "HD Frontal Ventilation & Knot Bleaching",
    tag: "Bald Patches ➡️ Seamless Hairline",
    beforeImage: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=800&q=80",
    beforeDesc: "Shedded lace, harsh black knots, over-plucked bald frontal gaps.",
    afterDesc: "Strand-by-strand needle ventilation, bleached invisible knots & customized scalp melt.",
    price: 18000,
    serviceId: "vent-1"
  },
  {
    id: "nails",
    title: "Luxury Acrylic Full Set & Gel Polish",
    tag: "Bare Nails ➡️ Stiletto French Ombre",
    beforeImage: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=800&q=80",
    beforeDesc: "Short, chipped, bare natural nails without structure.",
    afterDesc: "Crisp almond/stiletto acrylic extensions with blush ombre, 3D charms & glossy topcoat.",
    price: 15000,
    serviceId: "nail-1"
  }
];

const SOCIAL_PROOF_EVENTS = [
  { client: "Chioma", area: "Ago Palace Way", service: "Bone Straight Revamp & Steam", time: "2m ago", icon: "✨" },
  { client: "Amina", area: "Surulere, Lagos", service: "Acrylic Full Set with Chrome", time: "7m ago", icon: "💅" },
  { client: "Blessing", area: "Festac Town", service: "Glueless Wigging & Scalp Melt", time: "14m ago", icon: "👑" },
  { client: "Zainab", area: "Lekki Phase 1", service: "Frontal Ventilation & Bleach Knots", time: "22m ago", icon: "🪡" },
  { client: "Kemi", area: "Ikeja", service: "VIP Luxury Slay Combo", time: "35m ago", icon: "💖" }
];

function formatNaira(amount) {
  return "₦" + Number(amount || 0).toLocaleString();
}

function formatReadableDate(dateStr) {
  if (!dateStr) return "";
  const parts = dateStr.split("-");
  const d = new Date(parts[0], parts[1] - 1, parts[2]);
  return d.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" });
}

function getFormattedFutureDate(offsetDays = 0) {
  const d = new Date();
  d.setDate(d.getDate() + offsetDays);
  return d.toISOString().split("T")[0];
}

// ==========================================
// 2. MAIN REACT APPLICATION COMPONENT
// ==========================================

// Error Boundary class so crashes don't freeze on the loading screen
class AppErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorMsg: "" };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, errorMsg: error && error.message ? error.message : String(error) };
  }
  componentDidCatch(error, info) {
    console.error("TDL App Error:", error, info);
  }
  render() {
    if (this.state.hasError) {
      return React.createElement("div", {
        style: { minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", background: "#faf5f5", padding: "24px", textAlign: "center" }
      },
        React.createElement("div", { style: { width: 56, height: 56, background: "linear-gradient(135deg,#fb7185,#e11d48)", borderRadius: 16, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, fontWeight: 900, color: "#fff", marginBottom: 16, margin: "0 auto 16px" } }, "TDL"),
        React.createElement("h2", { style: { fontSize: 20, fontWeight: 900, color: "#18181b", marginBottom: 8 } }, "THE DAMIAN LABEL"),
        React.createElement("p", { style: { color: "#e11d48", fontSize: 13, fontWeight: 700, marginBottom: 16 } }, "Something went wrong loading the studio."),
        React.createElement("button", {
          onClick: function() { window.location.reload(); },
          style: { background: "linear-gradient(135deg,#e11d48,#f43f5e)", color: "#fff", border: "none", borderRadius: 50, padding: "10px 28px", fontWeight: 900, fontSize: 13, cursor: "pointer" }
        }, "Reload Studio 💅")
      );
    }
    return this.props.children;
  }
}

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
    try { const stored = localStorage.getItem("tdl_owner_notifications"); return stored ? JSON.parse(stored) : { soundAlerts: true, desktopAlerts: true }; } catch(e) { return { soundAlerts: true, desktopAlerts: true }; }
  });

  // Style Quiz State
  const [quizState, setQuizState] = useState({ wigCondition: null, styleGoal: null, nailGoal: null });
  const [quizResult, setQuizResult] = useState(null);

  // Admin & Storage
  const [adminBookings, setAdminBookings] = useState([]);
  const [emailSettings, setEmailSettings] = useState({ enabled: false, serviceId: "", templateId: "", publicKey: "" });
  
  // Studio Availability & Working Days Management (Owner Controlled)
  const [availability, setAvailability] = useState(() => {
    try { const stored = localStorage.getItem("tdl_availability"); return stored ? JSON.parse(stored) : DEFAULT_AVAILABILITY; } catch(e) { return DEFAULT_AVAILABILITY; }
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
    try { if (typeof window !== "undefined") { return localStorage.getItem("tdl_music_track") || "studio-music.wav"; } } catch(e) {}
    return "studio-music.wav";
  });
  const [musicTrackTitle, setMusicTrackTitle] = useState(() => {
    try { if (typeof window !== "undefined") { return localStorage.getItem("tdl_music_title") || "TDL Luxury Slay Beats ✨"; } } catch(e) {}
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

      const notes = [
        { freq: 698.46, delay: 0.00, dur: 0.45 }, // F5
        { freq: 880.00, delay: 0.08, dur: 0.50 }, // A5
        { freq: 1046.50, delay: 0.16, dur: 0.55 }, // C6
        { freq: 1318.51, delay: 0.24, dur: 0.60 }, // E6
        { freq: 1567.98, delay: 0.32, dur: 0.70 }, // G6
        { freq: 2093.00, delay: 0.40, dur: 0.95 }  // C7 (sparkling crystal fairy bell)
      ];

      notes.forEach(({ freq, delay, dur }) => {
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

  const triggerBrowserNotification = (booking) => {
    try {
      if (typeof window !== "undefined" && "Notification" in window && Notification.permission === "granted") {
        new Notification("New Appointment Submitted! 💅✨", {
          body: `${booking.clientName} booked ${booking.serviceName} (${booking.date} @ ${booking.time}). Amount: ₦${booking.amountPaidOnline || booking.depositPaid || 0}`,
          icon: "flier.jpg"
        });
      }
    } catch (e) {}
  };

  const tryDispatchEmailReceipt = (booking) => {
    try {
      if (typeof window !== "undefined" && window.emailjs && emailSettings && emailSettings.enabled && emailSettings.publicKey) {
        window.emailjs.send(
          emailSettings.serviceId,
          emailSettings.templateId,
          {
            to_name: booking.clientName,
            to_email: booking.clientEmail,
            service_name: booking.serviceName,
            booking_id: booking.id,
            booking_date: booking.date,
            booking_time: booking.time,
            amount_paid: booking.amountPaidOnline,
            phone: booking.clientPhone
          },
          emailSettings.publicKey
        );
      }
    } catch (e) {}
  };

  const showToast = (message, type = "info") => {
    const id = Date.now() + Math.random();
    setToasts(prev => [...prev, { id, message, type }]);
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

  const handleMusicVolumeChange = (newVol) => {
    setMusicVolume(newVol);
    if (musicAudioRef.current) {
      musicAudioRef.current.volume = newVol;
    }
  };

  const handleCustomMusicUpload = (e) => {
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
      playPromise
        .then(() => {
          setIsPlayingMusic(true);
        })
        .catch(() => {
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
            window.addEventListener(ev, startMusicOnGesture, { once: true, passive: true });
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

    window.addEventListener("click", handleFirstGesture, { once: true, passive: true });
    window.addEventListener("touchstart", handleFirstGesture, { once: true, passive: true });
    window.addEventListener("scroll", handleFirstGesture, { once: true, passive: true });

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

    const handleMouseMove = (e) => spawnSparkle(e.clientX, e.clientY);
    const handleTouchMove = (e) => {
      if (e.touches && e.touches[0]) {
        spawnSparkle(e.touches[0].clientX, e.touches[0].clientY);
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });

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
    window.addEventListener("scroll", handleScroll, { passive: true });
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
    bookingSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const stored = localStorage.getItem("tdl_appointments");
    if (stored) {
      setAdminBookings(JSON.parse(stored));
    } else {
      const sample = [
        {
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
        }
      ];
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

  const persistBookings = (newBookings) => {
    setAdminBookings(newBookings);
    localStorage.setItem("tdl_appointments", JSON.stringify(newBookings));
  };

  const updateAvailability = (newAvail) => {
    setAvailability(newAvail);
    localStorage.setItem("tdl_availability", JSON.stringify(newAvail));
    showToast("Studio availability updated! 📅", "success");
  };

  const toggleWorkingDay = (dayIndex) => {
    const exists = availability.workingDays.includes(dayIndex);
    const updatedDays = exists 
      ? availability.workingDays.filter(d => d !== dayIndex)
      : [...availability.workingDays, dayIndex].sort();
    updateAvailability({ ...availability, workingDays: updatedDays });
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

  const handleRemoveBlockedDate = (dateStr) => {
    const updated = {
      ...availability,
      blockedDates: availability.blockedDates.filter(d => d !== dateStr)
    };
    updateAvailability(updated);
  };

  const handleOpenPrintReceipt = (booking) => {
    setReceiptToPrint(booking);
  };

  const handleTriggerBrowserPrint = () => {
    window.print();
  };

  const handleVerifyPayment = (bookingId) => {
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

  const handleDeclineBooking = (bookingId) => {
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
        discount = (subtotal * appliedPromo.value) / 100;
      } else if (appliedPromo.type === "fixed") {
        discount = Math.min(appliedPromo.value, subtotal);
      }
    }

    const finalTotal = Math.max(0, subtotal - discount);
    const deposit = Math.min(SALON_INFO.depositAmount, finalTotal);
    const dueAtSalon = finalTotal - deposit;
    const amountToPayNow = paymentOption === "deposit" ? deposit : finalTotal;

    return { servicePrice, addonsPrice, subtotal, discount, finalTotal, deposit, dueAtSalon, amountToPayNow };
  }, [selectedService, selectedAddons, appliedPromo, paymentOption]);

  const handleSelectService = (service) => {
    setSelectedService(service);
    setSelectedAddons([]);
    setStep(1);
    bookingSectionRef.current?.scrollIntoView({ behavior: "smooth" });
    showToast(`Selected "${service.name}" ✨`, "success");
  };

  const handleToggleAddon = (addon) => {
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

  const copyToClipboard = (text) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedAccount(true);
      showToast(`Copied ${text} to clipboard! 📋`, "success");
      setTimeout(() => setCopiedAccount(false), 2500);
    }
  };

  const triggerConfetti = () => {
    if (typeof window.confetti === "function") {
      window.confetti({ particleCount: 90, spread: 80, origin: { y: 0.6, x: 0.2 }, colors: ["#f43f5e", "#fb7185", "#ffd1dc", "#d4af37"] });
      window.confetti({ particleCount: 90, spread: 80, origin: { y: 0.6, x: 0.8 }, colors: ["#f43f5e", "#fb7185", "#ffd1dc", "#d4af37"] });
    }
  };

  // COMPLETE BOOKING & PROCESS PAYMENT
  const handleInitiatePayment = (e) => {
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
            amount: amountToPay * 100, // Paystack amount is in kobo
            currency: "NGN",
            ref: "TDL-PSTK-" + Math.floor((Math.random() * 10000000) + 1),
            metadata: {
              custom_fields: [
                { display_name: "Customer Name", variable_name: "customer_name", value: clientInfo.name },
                { display_name: "Service", variable_name: "service", value: selectedService.name },
                { display_name: "Phone", variable_name: "phone", value: clientInfo.phone }
              ]
            },
            callback: function(response) {
              setIsProcessingPayment(false);
              finalizeConfirmedBooking(baseBooking, "Paid Online (Paystack Verified - Awaiting Owner Confirmation)", response.reference, amountToPay, "Pending Verification");
            },
            onClose: function() {
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
      status: initialStatus, // Stays "Pending Verification" until owner confirms credit alert!
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
    setClientInfo({ name: "", email: "", phone: "", instagram: "", deliveryMode: "Drop-off at Studio (Ago Palace Way)", notes: "" });
    setTermsAccepted(false);
    setSelectedAddons([]);
    setAppliedPromo(null);
    setStep(1);
  };

  const handleAddToGoogleCalendar = (b) => {
    const booking = b || confirmedBooking;
    if (!booking) return;
    const title = encodeURIComponent(`The Damian Label: ${booking.serviceName}`);
    const details = encodeURIComponent(`Appointment at The Damian Label.\nRef: #${booking.id}\nLocation: ${SALON_INFO.address}\nPhone: ${SALON_INFO.phone}`);
    const location = encodeURIComponent(SALON_INFO.address);
    const dClean = booking.date.replace(/-/g, "");
    const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dClean}T100000Z/${dClean}T120000Z&details=${details}&location=${location}`;
    window.open(url, "_blank");
  };

  const handleDownloadICS = (b) => {
    const booking = b || confirmedBooking;
    if (!booking) return;
    const dClean = booking.date.replace(/-/g, "");
    const icsContent = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//The Damian Label//Lagos Studio//EN",
      "BEGIN:VEVENT",
      `SUMMARY:The Damian Label: ${booking.serviceName}`,
      `DESCRIPTION:Appointment at The Damian Label (#${booking.id})`,
      `LOCATION:${SALON_INFO.address}`,
      `DTSTART:${dClean}T100000Z`,
      `DTEND:${dClean}T120000Z`,
      "STATUS:CONFIRMED",
      "END:VEVENT",
      "END:VCALENDAR"
    ].join("\r\n");

    const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute("download", `TDL-Booking-${booking.id}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast("Downloaded .ICS Calendar file! 🗓️", "success");
  };

  const handleQuizAnswer = (qKey, val) => {
    const updated = { ...quizState, [qKey]: val };
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
    const monthLabel = targetDate.toLocaleString("en-US", { month: "long", year: "numeric" });
    const firstDayIndex = targetDate.getDay();
    const totalDays = new Date(year, month + 1, 0).getDate();
    const todayStr = getFormattedFutureDate(0);

    const days = [];
    for (let i = 0; i < firstDayIndex; i++) {
      days.push({ blank: true, key: `b-${i}` });
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
    return { monthLabel, days };
  }, [calendarOffset, selectedDate, availability]);

  const timeSlots = ["09:30 AM", "11:00 AM", "12:30 PM", "02:00 PM", "03:30 PM", "05:00 PM"];

  return (
    <div className="min-h-screen flex flex-col justify-between overflow-x-hidden w-full max-w-full">
      {/* UNIFIED STICKY HEADER - FULLY VISIBLE & PINNED ON SCROLL */}
      <div className="sticky top-0 z-50 w-full bg-white shadow-md transition-all">
        {/* 1. TOP ANNOUNCEMENT TICKER */}
        <aside className="gradient-babe text-white py-1.5 px-3 sm:px-4 text-[11px] sm:text-xs font-bold tracking-wide shadow-xs">
          <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 whitespace-nowrap overflow-hidden text-ellipsis text-center">
            <span className="inline-block animate-pulse">✨</span>
            <span>THE DAMIAN LABEL: Ago Palace Way, Lagos • Luxury Wig Revamping, Wigging &amp; Nails</span>
            <span className="hidden md:inline">• Code: <span className="underline decoration-wavy font-black">LAGOSBABE</span> (15% OFF)</span>
            <span className="hidden lg:inline">• 0810-002-4096</span>
            <span className="inline-block">💅</span>
          </div>
        </aside>

        {/* 2. NAVIGATION BAR */}
        <header className="glass-nav relative z-30">
          <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-2 sm:gap-4">
            
            {/* Brand Logo */}
            <a href="#" className="flex items-center gap-2 flex-shrink-0 group">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl gradient-babe flex items-center justify-center text-white font-black text-xs sm:text-sm shadow-md group-hover:rotate-6 transition-transform flex-shrink-0">
                TDL
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-base sm:text-xl font-black tracking-wider text-zinc-900 font-serif-lux whitespace-nowrap block">
                  THE DAMIAN LABEL
                </span>
                <span className="hidden sm:inline-block px-2 py-0.5 rounded-full bg-rose-100 text-rose-700 text-[10px] font-bold uppercase tracking-wider whitespace-nowrap">
                  Lagos
                </span>
              </div>
            </a>

            {/* Desktop Nav Links - Only on ultra-wide screens so it NEVER crowds or cuts off CTA buttons */}
            <nav className="hidden 2xl:flex items-center gap-6 text-xs sm:text-sm font-semibold text-zinc-700 whitespace-nowrap flex-shrink-0">
              <a href="#services" className="hover:text-rose-600 transition">Services &amp; Pricing</a>
              <a href="#transformations" className="hover:text-rose-600 transition">Before &amp; After ✨</a>
              <a href="#booking" className="hover:text-rose-600 transition">Book Online</a>
              <a href="#flier-section" className="hover:text-rose-600 transition">Our Flier</a>
              <a href="#quiz" className="hover:text-rose-600 transition">Style Quiz</a>
              <a href="#reviews" className="hover:text-rose-600 transition">Reviews</a>
            </nav>

            {/* Right Action Controls - 100% Fully Visible & Never Cut Off */}
            <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0 whitespace-nowrap">
              {/* Instagram Link */}
              <a 
                href={SALON_INFO.instagramUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 sm:w-9 sm:h-9 2xl:w-auto 2xl:px-3 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-amber-500 hover:opacity-90 text-white text-xs font-bold shadow-xs transition flex items-center justify-center gap-1 flex-shrink-0"
                title="Follow @the_damian_label on Instagram">
                <span>📸</span>
                <span className="hidden 2xl:inline">Instagram</span>
              </a>

              {/* TikTok Link */}
              <a 
                href={SALON_INFO.tiktokUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 sm:w-9 sm:h-9 2xl:w-auto 2xl:px-3 rounded-full bg-zinc-950 hover:bg-black text-white text-xs font-bold shadow-xs transition flex items-center justify-center gap-1 flex-shrink-0"
                title="Follow @thedamianslabel on TikTok">
                <span>🎵</span>
                <span className="hidden 2xl:inline">TikTok</span>
              </a>

              {/* WhatsApp */}
              <a 
                href="https://wa.me/2348100024096" 
                target="_blank" 
                className="w-8 h-8 sm:w-9 sm:h-9 2xl:w-auto 2xl:px-3 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-bold shadow-xs transition flex items-center justify-center gap-1 flex-shrink-0"
                title="Chat on WhatsApp (0810-002-4096)">
                <span>💬</span>
                <span className="hidden 2xl:inline">WhatsApp</span>
              </a>

              {/* Cute Girly Chime Button */}
              <button 
                type="button"
                onClick={() => { playCuteGirlySound(); showToast("Playing cute girly fairy chime! 💖✨", "success"); }} 
                className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-pink-100 hover:bg-pink-200 text-pink-700 hover:scale-110 transition border border-pink-300 flex items-center justify-center text-xs sm:text-sm flex-shrink-0 cursor-pointer shadow-xs animate-bounce" 
                title="Play Cute Girly Chime ✨">
                💖
              </button>

              {/* Studio Music Play/Pause Toggle */}
              <button 
                type="button"
                onClick={toggleMusicPlay} 
                style={{
                  background: isPlayingMusic 
                    ? 'linear-gradient(135deg, #e11d48 0%, #f43f5e 100%)' 
                    : '#ffffff',
                  border: isPlayingMusic ? '1.5px solid #be123c' : '1px solid #fecdd3',
                  boxShadow: isPlayingMusic ? '0 0 12px rgba(225, 29, 72, 0.45)' : 'none',
                  color: isPlayingMusic ? '#ffffff' : '#e11d48'
                }}
                className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-full transition flex items-center justify-center text-xs sm:text-sm flex-shrink-0 cursor-pointer shadow-xs hover:scale-110 active:scale-95" 
                title={isPlayingMusic ? "Studio Music Playing (Click to Pause ⏸️)" : "Play Studio Music 🎵"}>
                <span>{isPlayingMusic ? "🎵" : "🔈"}</span>
                {isPlayingMusic && (
                  <span className="absolute -top-1 -right-1 w-2 h-2 bg-emerald-400 rounded-full animate-ping"></span>
                )}
              </button>

              {/* Owner Portal */}
              <button 
                type="button"
                onClick={() => { setIsAdminOpen(true); setUnreadCount(0); }} 
                className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-zinc-100 hover:bg-rose-100 text-zinc-700 hover:text-rose-600 transition border border-zinc-200 flex items-center justify-center text-xs sm:text-sm flex-shrink-0 cursor-pointer" 
                title="Owner Portal (Private)">
                👑
                {unreadCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-rose-600 text-white rounded-full text-[9px] font-black flex items-center justify-center animate-pulse shadow">
                    {unreadCount}
                  </span>
                )}
              </button>

              {/* Book Appointment - 100% FULL VIBRANT HOT PINK SOLID COLOR (NEVER CUT OFF) */}
              <button 
                type="button"
                onClick={() => { 
                  playCuteGirlySound(); 
                  bookingSectionRef.current?.scrollIntoView({ behavior: "smooth" }); 
                }}
                style={{
                  backgroundColor: '#e11d48',
                  background: 'linear-gradient(135deg, #e11d48 0%, #f43f5e 50%, #be123c 100%)',
                  color: '#ffffff',
                  boxShadow: '0 4px 20px rgba(225, 29, 72, 0.55), 0 0 15px rgba(244, 63, 94, 0.4)',
                  border: '1.5px solid rgba(255, 255, 255, 0.7)',
                  minWidth: '130px'
                }}
                className="btn-book-slay-full inline-flex items-center justify-center gap-1.5 px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-white text-xs sm:text-sm font-black whitespace-nowrap cursor-pointer shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all transform flex-shrink-0 ml-1">
                <span style={{ color: '#ffffff', fontWeight: 900, textShadow: '0 1px 2px rgba(0, 0, 0, 0.35)' }}>
                  Book Slay ✨
                </span>
              </button>
            </div>

          </div>
        </header>
      </div>

      {/* 3. HERO SECTION */}
      <section className="relative pt-10 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 text-center lg:text-left space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-rose-200 text-xs font-bold text-rose-600 shadow-sm">
                <span>📍 Ago Palace Way, Lagos, Nigeria</span>
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
                <span>0810-002-4096</span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-zinc-900 leading-[1.08] font-serif-lux">
                Give Your Wigs &amp; Nails The <span className="gradient-pink-text">Luxury Slay</span> They Deserve.
              </h1>

              <p className="text-base sm:text-lg text-zinc-600 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
                Welcome to <strong>THE DAMIAN LABEL</strong>. We specialize in bringing tired wigs back to life with deep steam revamping, flawless glueless customization, strand-by-strand hair ventilation, and crisp acrylic nail sets for our Lagos babes.
              </p>

              {/* Service Badges */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1 text-xs font-bold">
                <span className="px-3 py-1 rounded-full bg-rose-100 text-rose-700">✨ Hair Revamping</span>
                <span className="px-3 py-1 rounded-full bg-purple-100 text-purple-700">👑 Wigging</span>
                <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-800">🪡 Hair Ventilation</span>
                <span className="px-3 py-1 rounded-full bg-pink-100 text-pink-700">💅 Acrylics &amp; Gel Nails</span>
                <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-700">✨ Glueless Wigs</span>
              </div>

              {/* Official Social Links in Hero */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1 text-xs font-bold">
                <a 
                  href={SALON_INFO.instagramUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-purple-100 via-pink-100 to-amber-100 text-pink-800 border border-pink-200 hover:scale-105 transition shadow-xs">
                  <span>📸</span>
                  <span>Instagram: <span className="underline font-black">@the_damian_label</span></span>
                </a>
                <a 
                  href={SALON_INFO.tiktokUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-100 text-zinc-900 border border-zinc-300 hover:scale-105 transition shadow-xs">
                  <span>🎵</span>
                  <span>TikTok: <span className="underline font-black">@thedamianslabel</span></span>
                </a>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                <button 
                  type="button"
                  onClick={() => { playCuteGirlySound(); triggerConfetti(); bookingSectionRef.current?.scrollIntoView({ behavior: "smooth" }); }}
                  style={{
                    backgroundColor: '#e11d48',
                    background: 'linear-gradient(135deg, #e11d48 0%, #f43f5e 50%, #be123c 100%)',
                    color: '#ffffff',
                    boxShadow: '0 6px 25px rgba(225, 29, 72, 0.5)',
                    border: '1.5px solid rgba(255, 255, 255, 0.7)'
                  }}
                  className="btn-book-slay-full w-full sm:w-auto px-8 py-4 rounded-full text-white text-base font-black shadow-xl hover:shadow-2xl transition transform hover:-translate-y-1 flex items-center justify-center gap-2 cursor-pointer">
                  <span style={{ color: '#ffffff', fontWeight: 900 }}>Book Appointment Online ✨</span>
                </button>
                <a 
                  href="https://wa.me/2348100024096?text=Hello%20The%20Damian%20Label,%20I%20want%20to%20book%20a%20wig%20revamp%20and%20nails%20appointment!" 
                  target="_blank"
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-emerald-600 border border-emerald-300 text-base font-bold shadow-sm hover:bg-emerald-50 transition flex items-center justify-center gap-2">
                  <span>💬 Chat on WhatsApp</span>
                </a>
              </div>

              <div className="pt-6 border-t border-rose-100 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-zinc-600">
                <div className="flex items-center gap-2">
                  <span className="text-amber-400 text-base">★★★★★</span>
                  <span className="font-bold text-zinc-800">Top Rated in Ago Palace Way</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span>💌</span>
                  <span className="font-semibold text-zinc-800">Instant Email Receipts</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span>📦</span>
                  <span className="font-semibold text-zinc-800">Drop-off &amp; Dispatch Delivery</span>
                </div>
              </div>
            </div>

            {/* Right Flyer & Visual Display */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md">
                {/* Cute Floating Girly Badges */}
                <div className="absolute -top-3 -right-2 z-10 glass-panel px-3.5 py-1.5 rounded-full shadow-lg border border-pink-200 flex items-center gap-1.5 animate-float-girly text-xs font-black text-rose-600">
                  <span>💖</span>
                  <span>Luxury Studio Slay ✨</span>
                </div>
                <div className="absolute -top-3 -left-2 z-10 glass-panel px-3 py-1.5 rounded-full shadow-lg border border-pink-200 flex items-center gap-1.5 animate-bounce text-xs font-black text-pink-700">
                  <span>💅</span>
                  <span>Lagos Studio</span>
                </div>

                <div className="rounded-[36px] overflow-hidden shadow-2xl border-4 border-white bg-white p-2">
                  <img src="flier.jpg" alt="The Damian Label Official Flier" className="w-full h-auto rounded-[30px] object-cover" />
                </div>
                <div className="absolute -bottom-3 left-2 sm:-left-3 glass-panel p-3 sm:p-4 rounded-2xl sm:rounded-3xl shadow-xl flex items-center gap-2.5 sm:gap-3 border border-white max-w-[90%]">
                  <span className="text-xl sm:text-2xl flex-shrink-0">📍</span>
                  <div>
                    <p className="text-xs font-bold text-zinc-900 truncate">Ago Palace Way, Lagos</p>
                    <p className="text-[11px] text-rose-500 font-semibold truncate">Call / WhatsApp: 0810-002-4096</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. SERVICES & PRICING MENU (NAIRA) */}
      <section id="services" className="py-20 bg-white border-t border-rose-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold text-rose-500 uppercase tracking-widest block mb-1">Our Official Price List</span>
            <h2 className="text-3xl sm:text-5xl font-black text-zinc-900 font-serif-lux">Wig Revamping, Wigging & Nails</h2>
            <p className="text-sm text-zinc-600 mt-2">Transparent pricing in Nigerian Naira (₦). Book online or drop off your wigs at our Ago Palace Way studio.</p>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-12 flex-wrap">
            {[
              { id: "all", label: "All Services" },
              { id: "revamp", label: "✨ Hair Revamping & Styling" },
              { id: "wigging", label: "👑 Wigging & Glueless" },
              { id: "ventilation", label: "🪡 Hair Ventilation" },
              { id: "nails", label: "💅 Nails (Acrylics & Gel)" },
              { id: "combos", label: "💖 VIP Slay Bundles" }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => { playCuteBubblePop(); setActiveCategory(tab.id); }}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold shadow-sm transition hover:scale-105 active:scale-95 ${
                  activeCategory === tab.id ? 'gradient-babe text-white shadow-md' : 'bg-rose-50/70 text-zinc-700 hover:border-rose-300 border border-zinc-200'
                }`}>
                {tab.label}
              </button>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedServices.map(service => (
              <div key={service.id} className="service-card glass-panel rounded-3xl overflow-hidden flex flex-col justify-between border border-rose-100 hover:border-rose-300">
                <div className="relative h-56 overflow-hidden">
                  <img src={service.image} alt={service.name} className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
                  <div className="absolute top-3 left-3">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${service.badgeType}`}>
                      {service.badge}
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-zinc-700 flex items-center gap-1 shadow-sm">
                    <span>⏱️ {service.duration}</span>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-bold text-zinc-900 leading-snug">{service.name}</h3>
                      <div className="text-right flex-shrink-0 ml-2">
                        {service.originalPrice && (
                          <span className="text-xs text-zinc-400 line-through block">{formatNaira(service.originalPrice)}</span>
                        )}
                        <span className="text-2xl font-black text-rose-600">{formatNaira(service.price)}</span>
                      </div>
                    </div>
                    <p className="text-xs text-zinc-600 line-clamp-3 mb-4 leading-relaxed">{service.description}</p>
                  </div>

                  <div className="pt-4 border-t border-rose-100 flex items-center justify-between">
                    <span className="text-xs font-semibold text-rose-500 uppercase tracking-wider">Deposit: {formatNaira(SALON_INFO.depositAmount)}</span>
                    <button 
                      onClick={() => { playCuteBubblePop(); handleSelectService(service); }}
                      className="px-5 py-2.5 rounded-full gradient-babe text-white text-xs font-bold shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 hover:scale-105 active:scale-95 flex items-center gap-1.5 cursor-pointer">
                      <span>Book This</span>
                      <span>✨</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4B. INTERACTIVE BEFORE & AFTER SLAY TRANSFORMATION STUDIO */}
      <section id="transformations" className="py-20 bg-gradient-to-b from-white via-rose-50/40 to-white border-t border-rose-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-100 text-rose-700 text-xs font-bold mb-3 shadow-xs">
              <span>✨ Real Lagos Transformations</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-zinc-900 font-serif-lux">
              Interactive Slay Studio <span className="gradient-pink-text">Before &amp; After</span>
            </h2>
            <p className="text-sm text-zinc-600 mt-2">
              Slide left and right to reveal the difference professional steam revamping, needle ventilation, and acrylic nail sculpting makes!
            </p>
          </div>

          {/* Transformation Tab Selectors */}
          <div className="flex items-center justify-center gap-2 sm:gap-4 mb-8 flex-wrap">
            {TRANSFORMATIONS.map(item => (
              <button
                key={item.id}
                type="button"
                onClick={() => { playCuteBubblePop(); setTransformationTab(item.id); setSliderPosition(50); }}
                className={`px-4 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  transformationTab === item.id 
                    ? "bg-rose-600 text-white shadow-lg scale-105" 
                    : "bg-white text-zinc-700 border border-zinc-200 hover:border-rose-300"
                }`}>
                {item.title}
              </button>
            ))}
          </div>

          {/* Active Transformation Card */}
          {(() => {
            const activeTrans = TRANSFORMATIONS.find(t => t.id === transformationTab) || TRANSFORMATIONS[0];
            return (
              <div className="glass-panel p-4 sm:p-8 rounded-[36px] shadow-2xl border border-rose-100 max-w-4xl mx-auto">
                {/* Before & After Interactive Image Comparison */}
                <div 
                  className="relative h-72 sm:h-96 w-full rounded-2xl sm:rounded-3xl overflow-hidden select-none touch-none shadow-inner bg-zinc-900 cursor-ew-resize group"
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const pos = Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100));
                    setSliderPosition(pos);
                  }}
                  onTouchMove={(e) => {
                    if (e.touches && e.touches[0]) {
                      const rect = e.currentTarget.getBoundingClientRect();
                      const pos = Math.max(0, Math.min(100, ((e.touches[0].clientX - rect.left) / rect.width) * 100));
                      setSliderPosition(pos);
                    }
                  }}>
                  {/* After Image (Full Background) */}
                  <img 
                    src={activeTrans.afterImage} 
                    alt="After Transformation" 
                    className="absolute inset-0 w-full h-full object-cover" 
                  />
                  <div className="absolute top-4 right-4 z-10 px-3 py-1.5 rounded-full bg-emerald-500/90 backdrop-blur-md text-white text-xs font-black shadow-md flex items-center gap-1.5">
                    <span>✨</span>
                    <span>AFTER TDL SLAY</span>
                  </div>

                  {/* Before Image (Clipped Left Layer) */}
                  <div 
                    className="absolute inset-0 overflow-hidden" 
                    style={{ width: `${sliderPosition}%` }}>
                    <img 
                      src={activeTrans.beforeImage} 
                      alt="Before Transformation" 
                      className="absolute inset-0 w-full h-full object-cover max-w-none" 
                      style={{ width: '100%', minWidth: '100%' }}
                    />
                    <div className="absolute top-4 left-4 z-10 px-3 py-1.5 rounded-full bg-rose-600/90 backdrop-blur-md text-white text-xs font-black shadow-md flex items-center gap-1.5">
                      <span>⚠️</span>
                      <span>BEFORE SLAY</span>
                    </div>
                  </div>

                  {/* Divider Line & Drag Handle */}
                  <div 
                    className="absolute top-0 bottom-0 z-20 w-1 bg-white shadow-2xl flex items-center justify-center pointer-events-none" 
                    style={{ left: `${sliderPosition}%` }}>
                    <div className="w-9 h-9 rounded-full bg-rose-600 border-2 border-white text-white flex items-center justify-center shadow-2xl text-xs font-black animate-pulse">
                      ↔️
                    </div>
                  </div>
                </div>

                {/* Slider Hint */}
                <div className="flex items-center justify-between text-xs text-zinc-500 mt-3 px-2">
                  <span className="font-bold text-rose-600">◀️ Drag to see Before</span>
                  <span className="italic text-[11px] hidden sm:inline">Move cursor / finger across image</span>
                  <span className="font-bold text-emerald-600">Drag to see After ▶️</span>
                </div>

                {/* Details & Instant Book Button */}
                <div className="mt-6 pt-6 border-t border-rose-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="space-y-1 text-center sm:text-left">
                    <div className="flex items-center justify-center sm:justify-start gap-2">
                      <h3 className="text-xl font-black text-zinc-900">{activeTrans.title}</h3>
                      <span className="px-2.5 py-0.5 rounded-full bg-rose-100 text-rose-700 font-bold text-xs">
                        {activeTrans.tag}
                      </span>
                    </div>
                    <p className="text-xs text-zinc-600 max-w-md">
                      <strong>Results:</strong> {activeTrans.afterDesc}
                    </p>
                  </div>

                  <div className="flex items-center gap-4 flex-shrink-0">
                    <div className="text-right">
                      <span className="text-[10px] text-zinc-400 uppercase font-bold block">Starting at</span>
                      <span className="text-2xl font-black text-rose-600">{formatNaira(activeTrans.price)}</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        playCuteGirlySound();
                        triggerConfetti();
                        const matching = SERVICES.find(s => s.id === activeTrans.serviceId) || SERVICES[0];
                        handleSelectService(matching);
                        bookingSectionRef.current?.scrollIntoView({ behavior: "smooth" });
                        showToast(`Selected: ${activeTrans.title}! ✨`, "success");
                      }}
                      style={{
                        backgroundColor: '#e11d48',
                        background: 'linear-gradient(135deg, #e11d48 0%, #f43f5e 50%, #be123c 100%)',
                        color: '#ffffff'
                      }}
                      className="px-6 py-3 rounded-full text-white text-xs sm:text-sm font-black shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all cursor-pointer flex items-center gap-2">
                      <span>Book This Transformation</span>
                      <span>✨</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })()}

        </div>
      </section>

      {/* 5. INTERACTIVE STYLE QUIZ */}
      <section id="quiz" className="py-16 bg-gradient-to-b from-rose-50/70 to-pink-50/40 border-y border-rose-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="glass-panel p-8 sm:p-12 rounded-[36px] shadow-xl border border-white">
            <div className="text-center max-w-xl mx-auto mb-8">
              <span className="text-xs font-black text-rose-500 uppercase tracking-widest block mb-1">Find Your Slay Match</span>
              <h3 className="text-2xl sm:text-4xl font-black text-zinc-900 font-serif-lux">Wig & Nails Diagnostic Quiz</h3>
              <p className="text-xs sm:text-sm text-zinc-600 mt-2">Tell us what your wig needs and our Lagos team will recommend the exact service.</p>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-xs font-bold text-zinc-800 uppercase tracking-wider mb-2">1. What is the current condition of your wig?</label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {[
                    { id: "tangled", label: "Tangled, stiff or needs deep wash & shine" },
                    { id: "balding", label: "Balding closure/frontal (needs hair re-ventilating)" },
                    { id: "new", label: "Fresh bundles needing machine wigging / glueless" }
                  ].map(opt => (
                    <button
                      key={opt.id}
                      onClick={() => handleQuizAnswer("wigCondition", opt.id)}
                      className={`p-3 text-xs font-semibold rounded-2xl border transition text-left ${
                        quizState.wigCondition === opt.id ? 'border-rose-500 bg-rose-50 ring-2 ring-rose-400 font-bold' : 'bg-white border-zinc-200 hover:border-rose-300'
                      }`}>
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-800 uppercase tracking-wider mb-2">2. What is your desired wig finish?</label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {[
                    { id: "curls", label: "Bouncy Hollywood Pin Curls" },
                    { id: "straight", label: "Mirror Glass Bone Straight Silk Press" },
                    { id: "glueless", label: "Glueless Ready-to-Wear (Wear & Go)" }
                  ].map(opt => (
                    <button
                      key={opt.id}
                      onClick={() => handleQuizAnswer("styleGoal", opt.id)}
                      className={`p-3 text-xs font-semibold rounded-2xl border transition text-left ${
                        quizState.styleGoal === opt.id ? 'border-rose-500 bg-rose-50 ring-2 ring-rose-400 font-bold' : 'bg-white border-zinc-200 hover:border-rose-300'
                      }`}>
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-800 uppercase tracking-wider mb-2">3. Do you want your nails done too?</label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {[
                    { id: "yes-acrylic", label: "Yes, XXL Acrylics with 3D Charms & Crystals" },
                    { id: "yes-gel", label: "Yes, Clean BIAB Gel Overlay / French Tips" },
                    { id: "hair-only", label: "Just the Wig Revamp for now" }
                  ].map(opt => (
                    <button
                      key={opt.id}
                      onClick={() => handleQuizAnswer("nailGoal", opt.id)}
                      className={`p-3 text-xs font-semibold rounded-2xl border transition text-left ${
                        quizState.nailGoal === opt.id ? 'border-rose-500 bg-rose-50 ring-2 ring-rose-400 font-bold' : 'bg-white border-zinc-200 hover:border-rose-300'
                      }`}>
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {quizResult && (
              <div className="p-6 rounded-3xl bg-gradient-to-r from-rose-50 to-pink-50 border-2 border-rose-300 mt-6 animate-fade-in">
                <span className="px-3 py-1 rounded-full bg-rose-500 text-white font-bold text-xs uppercase tracking-wider">Your TDL Recommended Slay</span>
                <h4 className="text-xl font-bold text-zinc-900 mt-2">{quizResult.title}</h4>
                <p className="text-sm text-zinc-600 mt-1 mb-4">{quizResult.description}</p>
                <button 
                  onClick={() => {
                    const match = SERVICES.find(s => s.id === quizResult.serviceId) || SERVICES[0];
                    handleSelectService(match);
                  }}
                  className="px-6 py-3 rounded-full gradient-babe text-white font-bold text-sm shadow-md hover:shadow-lg transition">
                  Book This Service Now ✨
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 6. MAIN APPOINTMENT BOOKING ENGINE */}
      <section id="booking" ref={bookingSectionRef} className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-black text-rose-500 uppercase tracking-widest block mb-1">Book Your Slay Session</span>
            <h2 className="text-3xl sm:text-5xl font-black text-zinc-900 font-serif-lux">Reserve Your Appointment</h2>
            <p className="text-sm text-zinc-600 mt-2">Ago Palace Way, Lagos. Select your service, pick your date &amp; drop-off time, and complete your reservation.</p>
          </div>

          {/* Progress Indicators */}
          <div className="max-w-2xl mx-auto mb-10">
            <div className="flex items-center justify-between relative">
              <div className="absolute left-6 right-6 top-1/2 -translate-y-1/2 h-0.5 bg-zinc-200 -z-0"></div>
              {[
                { s: 1, label: "Service" },
                { s: 2, label: "Date & Time" },
                { s: 3, label: "Pay & Confirm" }
              ].map(item => (
                <div key={item.s} className="flex flex-col items-center relative z-10">
                  <div className={`w-8 h-8 rounded-full font-bold flex items-center justify-center text-xs shadow-md transition ${
                    step === item.s ? 'gradient-babe text-white ring-4 ring-rose-200' :
                    step > item.s ? 'bg-emerald-500 text-white' : 'bg-zinc-200 text-zinc-500'
                  }`}>
                    {step > item.s ? '✓' : item.s}
                  </div>
                  <span className="text-[11px] font-bold text-zinc-700 mt-1">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Step Panels */}
            <div className="lg:col-span-8 glass-panel p-6 sm:p-10 rounded-[36px] shadow-xl border border-white">
              
              {/* STEP 1: SERVICE & ADDONS */}
              {step === 1 && (
                <div className="space-y-6">
                  <div className="flex justify-between items-center pb-4 border-b border-rose-100">
                    <div>
                      <h3 className="text-xl font-bold text-zinc-900">Step 1: Choose Service & Extra Customizations</h3>
                      <p className="text-xs text-zinc-500">Pick from wig revamp, wigging, ventilation, or nails.</p>
                    </div>
                    <a href="#services" className="text-xs text-rose-600 font-bold hover:underline">Change Service Menu ↑</a>
                  </div>

                  {selectedService && (
                    <div className="p-4 rounded-2xl bg-rose-50/70 border border-rose-200 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <img src={selectedService.image} className="w-12 h-12 rounded-xl object-cover" />
                        <div>
                          <p className="text-[10px] text-rose-500 font-bold uppercase tracking-wider">{selectedService.category}</p>
                          <h4 className="text-sm font-bold text-zinc-900">{selectedService.name}</h4>
                          <span className="text-xs text-zinc-500">⏱️ {selectedService.duration}</span>
                        </div>
                      </div>
                      <span className="text-xl font-black text-rose-600">{formatNaira(selectedService.price)}</span>
                    </div>
                  )}

                  <div className="space-y-3">
                    <h4 className="text-xs font-bold text-zinc-700 uppercase tracking-wider">Optional Slay Add-ons</h4>
                    <div className="space-y-2">
                      {ADDONS.map(addon => {
                        const isChecked = selectedAddons.some(a => a.id === addon.id);
                        return (
                          <label key={addon.id} className={`flex items-center justify-between p-3 rounded-2xl border transition cursor-pointer ${
                            isChecked ? 'border-rose-400 bg-rose-50/80 shadow-sm' : 'border-zinc-200 bg-white hover:border-rose-200'
                          }`}>
                            <div className="flex items-center gap-3">
                              <input 
                                type="checkbox" 
                                checked={isChecked} 
                                onChange={() => handleToggleAddon(addon)} 
                                className="w-4 h-4 text-rose-500 rounded border-zinc-300 focus:ring-rose-400" 
                              />
                              <span className="text-sm font-medium text-zinc-800">{addon.name}</span>
                            </div>
                            <span className="text-sm font-bold text-rose-600">+{formatNaira(addon.price)}</span>
                          </label>
                        );
                      })}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-rose-100 flex justify-end">
                    <button 
                      onClick={() => setStep(2)}
                      className="px-8 py-3.5 rounded-full gradient-babe text-white text-sm font-bold shadow-md hover:shadow-lg transition">
                      Next: Pick Date &amp; Time →
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2: DATE & TIME */}
              {step === 2 && (
                <div className="space-y-6">
                  <div className="flex justify-between items-center pb-4 border-b border-rose-100">
                    <div>
                      <h3 className="text-xl font-bold text-zinc-900">Step 2: Select Date &amp; Drop-Off Time</h3>
                      <p className="text-xs text-zinc-500">{availability.customNotice || "Studio open Mon - Sat at Ago Palace Way, Lagos."}</p>
                    </div>
                    <button onClick={() => setStep(1)} className="text-xs text-zinc-500 hover:text-zinc-800 font-bold">← Back</button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                    <div className="md:col-span-7 bg-white p-5 rounded-3xl border border-rose-100 shadow-sm">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="font-bold text-zinc-900 text-sm font-serif-lux">{calendarDays.monthLabel}</h4>
                        <div className="flex items-center gap-1">
                          <button onClick={() => setCalendarOffset(Math.max(0, calendarOffset - 1))} className="w-8 h-8 rounded-full border border-zinc-200 flex items-center justify-center text-xs">‹</button>
                          <button onClick={() => setCalendarOffset(Math.min(3, calendarOffset + 1))} className="w-8 h-8 rounded-full border border-zinc-200 flex items-center justify-center text-xs">›</button>
                        </div>
                      </div>

                      <div className="grid grid-cols-7 text-center text-[10px] font-bold text-zinc-400 uppercase mb-2">
                        <span>Sun</span><span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span>
                      </div>

                      <div className="grid grid-cols-7 gap-1">
                        {calendarDays.days.map(d => d.blank ? (
                          <div key={d.key} className="h-10"></div>
                        ) : (
                          <button
                            key={d.key}
                            disabled={d.isDisabled}
                            onClick={() => setSelectedDate(d.dateStr)}
                            className={`h-11 rounded-2xl flex flex-col items-center justify-center text-sm font-semibold calendar-day ${
                              d.isDisabled ? 'disabled text-zinc-300' : 'text-zinc-800 cursor-pointer'
                            } ${d.isSelected ? 'selected' : ''}`}>
                            <span>{d.dayNum}</span>
                            {d.isDayClosed ? (
                              <span className="text-[9px] text-zinc-300 font-normal">Closed</span>
                            ) : d.isDateBlocked ? (
                              <span className="text-[9px] text-rose-400 font-semibold">Booked</span>
                            ) : null}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="md:col-span-5 space-y-3">
                      <h4 className="text-xs font-bold text-zinc-700 uppercase tracking-wider">Available Times</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {timeSlots.map(time => {
                          const isSelected = selectedTime === time;
                          return (
                            <button
                              key={time}
                              onClick={() => setSelectedTime(time)}
                              className={`time-slot py-3 px-3 rounded-2xl border text-xs font-bold transition text-center ${
                                isSelected ? 'selected' : 'border-zinc-200 bg-white text-zinc-800'
                              }`}>
                              <div>{time}</div>
                              <span className="text-[10px] opacity-75 font-normal">Available</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-rose-100 flex justify-between items-center">
                    <button onClick={() => setStep(1)} className="px-6 py-3 rounded-full bg-zinc-100 text-zinc-700 text-sm font-bold">← Back</button>
                    <button onClick={() => setStep(3)} className="px-8 py-3.5 rounded-full gradient-babe text-white text-sm font-bold shadow-md">Next: Pay & Confirm →</button>
                  </div>
                </div>
              )}

              {/* STEP 3: CLIENT INFO & ONLINE PAYMENT */}
              {step === 3 && (
                <div className="space-y-6">
                  <div className="flex justify-between items-center pb-4 border-b border-rose-100">
                    <div>
                      <h3 className="text-xl font-bold text-zinc-900">Step 3: Details & Secure Online Payment</h3>
                      <p className="text-xs text-zinc-500">Pay deposit or full amount online to immediately secure your slot.</p>
                    </div>
                    <button onClick={() => setStep(2)} className="text-xs text-zinc-500 hover:text-zinc-800 font-bold">← Back</button>
                  </div>

                  <form onSubmit={handleInitiatePayment} className="space-y-5">
                    {/* Customer Info */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-zinc-700 uppercase mb-1">Full Name *</label>
                        <input 
                          type="text" 
                          required 
                          value={clientInfo.name} 
                          onChange={(e) => setClientInfo({ ...clientInfo, name: e.target.value })}
                          placeholder="e.g. Chioma Okafor" 
                          className="w-full px-4 py-3 rounded-2xl border border-zinc-200 text-sm bg-white" 
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-zinc-700 uppercase mb-1">Email (For Payment Receipt) *</label>
                        <input 
                          type="email" 
                          required 
                          value={clientInfo.email} 
                          onChange={(e) => setClientInfo({ ...clientInfo, email: e.target.value })}
                          placeholder="chioma@example.com" 
                          className="w-full px-4 py-3 rounded-2xl border border-zinc-200 text-sm bg-white" 
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-zinc-700 uppercase mb-1">Phone / WhatsApp Number *</label>
                        <input 
                          type="tel" 
                          required 
                          value={clientInfo.phone} 
                          onChange={(e) => setClientInfo({ ...clientInfo, phone: e.target.value })}
                          placeholder="e.g. 0810-002-4096" 
                          className="w-full px-4 py-3 rounded-2xl border border-zinc-200 text-sm bg-white" 
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-zinc-700 uppercase mb-1">Instagram Handle (Optional)</label>
                        <input 
                          type="text" 
                          value={clientInfo.instagram} 
                          onChange={(e) => setClientInfo({ ...clientInfo, instagram: e.target.value })}
                          placeholder="@yourhandle (so we can tag your slay!)" 
                          className="w-full px-4 py-3 rounded-2xl border border-zinc-200 text-sm bg-white" 
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-zinc-700 uppercase mb-1">Wig Hand-off / Delivery Preference</label>
                      <select 
                        value={clientInfo.deliveryMode} 
                        onChange={(e) => setClientInfo({ ...clientInfo, deliveryMode: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl border border-zinc-200 text-sm bg-white">
                        <option value="Drop-off at Studio (Ago Palace Way)">Drop-off in person at Ago Palace Way Studio</option>
                        <option value="Dispatch Rider Delivery">Sending via Dispatch Rider (Gokada / Chowdeck / Kwik)</option>
                        <option value="Studio Appointment (Nails & Wig Fitting)">Studio Appointment (Nails & Wig Fitting on site)</option>
                      </select>
                    </div>

                    {/* PAYMENT AMOUNT SELECTOR */}
                    <div className="p-4 rounded-3xl bg-rose-50/60 border border-rose-200 space-y-3">
                      <span className="text-xs font-black text-rose-600 uppercase tracking-wider block">1. Select Payment Option</span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <label className={`p-4 rounded-2xl border-2 cursor-pointer transition flex items-center justify-between ${
                          paymentOption === "deposit" ? 'border-rose-500 bg-white shadow-sm' : 'border-zinc-200 bg-white/70'
                        }`}>
                          <div className="flex items-center gap-3">
                            <input 
                              type="radio" 
                              name="paymentOption" 
                              checked={paymentOption === "deposit"} 
                              onChange={() => setPaymentOption("deposit")} 
                              className="text-rose-500 focus:ring-rose-400" 
                            />
                            <div>
                              <p className="text-xs font-bold text-zinc-900">Lock Slot Deposit</p>
                              <p className="text-[11px] text-zinc-500">Balance paid at pickup</p>
                            </div>
                          </div>
                          <span className="text-base font-black text-rose-600">{formatNaira(totals.deposit)}</span>
                        </label>

                        <label className={`p-4 rounded-2xl border-2 cursor-pointer transition flex items-center justify-between ${
                          paymentOption === "full" ? 'border-rose-500 bg-white shadow-sm' : 'border-zinc-200 bg-white/70'
                        }`}>
                          <div className="flex items-center gap-3">
                            <input 
                              type="radio" 
                              name="paymentOption" 
                              checked={paymentOption === "full"} 
                              onChange={() => setPaymentOption("full")} 
                              className="text-rose-500 focus:ring-rose-400" 
                            />
                            <div>
                              <p className="text-xs font-bold text-zinc-900">Pay Full Amount</p>
                              <p className="text-[11px] text-zinc-500">Zero balance due later</p>
                            </div>
                          </div>
                          <span className="text-base font-black text-rose-600">{formatNaira(totals.finalTotal)}</span>
                        </label>
                      </div>
                    </div>

                    {/* PAYMENT METHOD SELECTOR */}
                    <div className="p-4 rounded-3xl bg-white border border-zinc-200 space-y-3">
                      <span className="text-xs font-black text-zinc-700 uppercase tracking-wider block">2. Choose Payment Method</span>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {/* Option A: Paystack Online */}
                        <div 
                          onClick={() => setPaymentMethod("paystack")}
                          className={`p-4 rounded-2xl border-2 cursor-pointer transition ${
                            paymentMethod === "paystack" ? 'border-emerald-500 bg-emerald-50/50 shadow-sm' : 'border-zinc-200 hover:border-zinc-300'
                          }`}>
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                              <span className="text-xl">💳</span>
                              <span className="font-bold text-zinc-900 text-sm">Pay Online (Paystack)</span>
                            </div>
                            <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">Instant</span>
                          </div>
                          <p className="text-xs text-zinc-500">Pay instantly with Nigerian Debit Cards (Mastercard, Visa, Verve), Bank Transfer, or USSD.</p>
                        </div>

                        {/* Option B: Direct Bank Transfer */}
                        <div 
                          onClick={() => setPaymentMethod("bank_transfer")}
                          className={`p-4 rounded-2xl border-2 cursor-pointer transition ${
                            paymentMethod === "bank_transfer" ? 'border-rose-500 bg-rose-50/50 shadow-sm' : 'border-zinc-200 hover:border-zinc-300'
                          }`}>
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                              <span className="text-xl">🏦</span>
                              <span className="font-bold text-zinc-900 text-sm">Direct Bank Transfer</span>
                            </div>
                            <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-full bg-rose-100 text-rose-800">Studio Bank</span>
                          </div>
                          <p className="text-xs text-zinc-500">Transfer directly to our Moniepoint studio account and share proof via WhatsApp.</p>
                        </div>
                      </div>

                      {/* Studio Bank Details preview if Direct Transfer is selected */}
                      {paymentMethod === "bank_transfer" && (
                        <div className="mt-3 p-4 rounded-2xl bg-zinc-50 border border-zinc-200 text-xs space-y-2 animate-fade-in">
                          <p className="font-bold text-zinc-800">Studio Account Details:</p>
                          <div className="flex justify-between items-center bg-white p-2.5 rounded-xl border border-zinc-200">
                            <div>
                              <p className="text-[11px] text-zinc-500">Bank: <strong>{bankDetails.bankName}</strong></p>
                              <p className="text-[11px] text-zinc-500">Account Name: <strong>{bankDetails.accountName}</strong></p>
                              <p className="text-sm font-black text-rose-600 font-mono tracking-wider">{bankDetails.accountNumber}</p>
                            </div>
                            <button 
                              type="button" 
                              onClick={() => copyToClipboard(bankDetails.accountNumber)} 
                              className="px-3 py-1.5 rounded-lg bg-rose-50 hover:bg-rose-100 text-rose-600 font-bold text-xs transition border border-rose-200">
                              {copiedAccount ? "Copied! ✓" : "Copy Account"}
                            </button>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Promo Code */}
                    <div>
                      <label className="block text-xs font-bold text-zinc-700 uppercase mb-1">VIP Promo Code</label>
                      <div className="flex gap-2">
                        <input 
                          type="text" 
                          value={promoInput} 
                          onChange={(e) => setPromoInput(e.target.value)}
                          placeholder="e.g. LAGOSBABE or TDL10" 
                          className="flex-1 px-4 py-2.5 rounded-2xl border border-zinc-200 text-sm uppercase bg-white font-mono" 
                        />
                        <button type="button" onClick={handleApplyPromo} className="px-5 py-2.5 rounded-2xl bg-zinc-900 text-white text-xs font-bold">Apply</button>
                      </div>
                    </div>

                    <label className="flex items-start gap-3 cursor-pointer text-xs text-zinc-600">
                      <input type="checkbox" checked={termsAccepted} onChange={(e) => setTermsAccepted(e.target.checked)} className="mt-1" />
                      <span>I understand that online payment of <strong>{formatNaira(totals.amountToPayNow)}</strong> confirms and locks my slot with The Damian Label.</span>
                    </label>

                    <div className="pt-6 border-t border-rose-100 flex justify-between items-center">
                      <button type="button" onClick={() => setStep(2)} className="px-6 py-3 rounded-full bg-zinc-100 text-sm font-bold">← Back</button>
                      <button 
                        type="submit" 
                        disabled={isProcessingPayment}
                        className={`px-10 py-4 rounded-full text-white text-base font-black shadow-xl hover:shadow-2xl transition flex items-center gap-2 ${
                          paymentMethod === "paystack" ? 'bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-700 hover:to-teal-800' : 'gradient-babe'
                        }`}>
                        {isProcessingPayment ? (
                          <span>Connecting Paystack...</span>
                        ) : paymentMethod === "paystack" ? (
                          <>
                            <span>Pay {formatNaira(totals.amountToPayNow)} Online via Paystack</span>
                            <span>🔒</span>
                          </>
                        ) : (
                          <>
                            <span>Complete & Confirm Bank Transfer ({formatNaira(totals.amountToPayNow)})</span>
                            <span>🏦</span>
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              )}

            </div>

            {/* Order Summary Sidebar */}
            <div className="lg:col-span-4 sticky top-28">
              <div className="glass-panel p-6 rounded-[32px] shadow-lg border border-white">
                <h3 className="text-base font-bold text-zinc-900 border-b border-rose-100 pb-3 mb-4 flex items-center justify-between">
                  <span>Booking Summary</span>
                  <span className="text-xs bg-rose-100 text-rose-700 px-2 py-0.5 rounded-full font-semibold">Step {step} of 3</span>
                </h3>

                {selectedService && (
                  <div className="flex items-center gap-3 mb-4">
                    <img src={selectedService.image} className="w-14 h-14 rounded-2xl object-cover" />
                    <div className="flex-1 min-w-0">
                      <p className="text-[10px] font-bold text-rose-500 uppercase">{selectedService.category}</p>
                      <h4 className="text-sm font-bold text-zinc-900 truncate">{selectedService.name}</h4>
                      <span className="text-xs text-zinc-500">⏱️ {selectedService.duration}</span>
                    </div>
                    <span className="text-sm font-bold text-zinc-900">{formatNaira(selectedService.price)}</span>
                  </div>
                )}

                {selectedAddons.length > 0 && (
                  <div className="space-y-1.5 mb-4 pt-3 border-t border-rose-50">
                    <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider block">Add-ons:</span>
                    {selectedAddons.map(a => (
                      <div key={a.id} className="flex justify-between text-xs text-zinc-600">
                        <span className="truncate mr-2">+ {a.name}</span>
                        <span className="font-semibold text-zinc-800">+{formatNaira(a.price)}</span>
                      </div>
                    ))}
                  </div>
                )}

                {selectedDate && selectedTime && (
                  <div className="py-2.5 px-3 rounded-2xl bg-rose-50/50 border border-rose-100 flex items-center justify-between text-xs mb-4">
                    <span className="text-zinc-500 font-medium">Date & Time:</span>
                    <span className="font-bold text-rose-600">{formatReadableDate(selectedDate)} @ {selectedTime}</span>
                  </div>
                )}

                <div className="space-y-2 pt-3 border-t border-rose-100 text-xs">
                  <div className="flex justify-between text-zinc-600">
                    <span>Subtotal</span>
                    <span className="font-semibold text-zinc-800">{formatNaira(totals.subtotal)}</span>
                  </div>

                  {totals.discount > 0 && (
                    <div className="flex justify-between text-emerald-600 font-medium">
                      <span>Discount ({appliedPromo.name})</span>
                      <span>-{formatNaira(totals.discount)}</span>
                    </div>
                  )}

                  <div className="flex justify-between text-sm font-black text-zinc-900 pt-2 border-t border-rose-100">
                    <span>Total Service Value</span>
                    <span className="text-rose-600 font-extrabold text-base">{formatNaira(totals.finalTotal)}</span>
                  </div>

                  <div className="p-3 bg-emerald-50 rounded-2xl border border-emerald-200 mt-3 text-xs">
                    <div className="flex justify-between font-black text-emerald-900 mb-1">
                      <span>Amount Due Today:</span>
                      <span className="text-emerald-700 text-sm">{formatNaira(totals.amountToPayNow)}</span>
                    </div>
                    {paymentOption === "deposit" && (
                      <div className="flex justify-between text-[11px] text-zinc-600 pt-1 border-t border-emerald-200">
                        <span>Balance due upon delivery:</span>
                        <span className="font-bold text-zinc-800">{formatNaira(totals.dueAtSalon)}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. OFFICIAL FLIER SHOWCASE */}
      <section id="flier-section" className="py-20 bg-white border-t border-rose-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-black text-rose-500 uppercase tracking-widest block mb-1">Our Official Flier & Lookbook</span>
            <h2 className="text-3xl sm:text-5xl font-black text-zinc-900 font-serif-lux">The Damian Label Showcase</h2>
            <p className="text-sm text-zinc-600 mt-2">Ago Palace Way, Lagos. Hair Revamping, Wigging, Hair Ventilation, Glueless Wigs & Acrylic Nails.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 text-center">
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-rose-200 inline-block max-w-sm">
                <img src="flier.jpg" alt="TDL Official Flier" className="w-full h-auto" />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div className="p-6 rounded-3xl bg-rose-50/70 border border-rose-200 space-y-3">
                <h3 className="text-xl font-bold text-zinc-900 font-serif-lux">📍 Studio Details:</h3>
                <p className="text-sm text-zinc-700"><strong>Location:</strong> Ago Palace Way, Lagos, Nigeria</p>
                <p className="text-sm text-zinc-700"><strong>Call / WhatsApp:</strong> <a href="tel:08100024096" className="text-rose-600 font-bold underline">0810-002-4096</a></p>
                <p className="text-sm text-zinc-700"><strong>Opening Hours:</strong> Monday – Saturday: 9:00 AM – 6:30 PM (Sundays Closed)</p>
              </div>

              <div className="grid grid-cols-2 gap-4 text-xs">
                <div className="p-4 rounded-2xl bg-white border border-zinc-200 shadow-sm">
                  <span className="text-xl mb-1 block">✨</span>
                  <h4 className="font-bold text-zinc-900">Hair Revamping</h4>
                  <p className="text-zinc-500">Restores shine, silkiness, and bounce to dry or tangled wigs.</p>
                </div>
                <div className="p-4 rounded-2xl bg-white border border-zinc-200 shadow-sm">
                  <span className="text-xl mb-1 block">🪡</span>
                  <h4 className="font-bold text-zinc-900">Hair Ventilation</h4>
                  <p className="text-zinc-500">Reconstructs balding closures and frontals strand-by-strand.</p>
                </div>
                <div className="p-4 rounded-2xl bg-white border border-zinc-200 shadow-sm">
                  <span className="text-xl mb-1 block">👑</span>
                  <h4 className="font-bold text-zinc-900">Glueless Wigs</h4>
                  <p className="text-zinc-500">Bleached knots, plucked natural hairline, and elastic bands.</p>
                </div>
                <div className="p-4 rounded-2xl bg-white border border-zinc-200 shadow-sm">
                  <span className="text-xl mb-1 block">💅</span>
                  <h4 className="font-bold text-zinc-900">Nails (Acrylics & Gel)</h4>
                  <p className="text-zinc-500">Sculpted full sets, French chrome, 3D crystals and floral art.</p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a 
                  href="https://wa.me/2348100024096" 
                  target="_blank" 
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs shadow-md transition">
                  <span>💬</span>
                  <span>WhatsApp (0810-002-4096)</span>
                </a>
                <a 
                  href={SALON_INFO.instagramUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-amber-500 text-white font-bold text-xs shadow-md hover:opacity-90 transition">
                  <span>📸</span>
                  <span>Follow @the_damian_label on Instagram</span>
                </a>
                <a 
                  href={SALON_INFO.tiktokUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-zinc-950 text-white font-bold text-xs shadow-md hover:bg-black transition">
                  <span>🎵</span>
                  <span>Follow @thedamianslabel on TikTok</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. REVIEWS FROM LAGOS BABES */}
      <section id="reviews" className="py-20 bg-rose-50/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-black text-rose-500 uppercase tracking-widest block mb-1">Client Love Notes</span>
            <h2 className="text-3xl sm:text-5xl font-black text-zinc-900 font-serif-lux">What Lagos Babes Are Saying</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                text: "Damian revived my 4-year-old bone straight wig that I almost threw away! The silk press and silicon treatment brought back mirror shine. Best revamp studio on Ago Palace Way!",
                name: "Amaka Eze",
                badge: "Deluxe Revamp • Ago Palace",
                init: "A"
              },
              {
                text: "The glueless wig customization is 10/10. Bleached knots look completely invisible on my skin. Plus my acrylic nails lasted 4 weeks without a single crack. Definitely coming back!",
                name: "Tiwa Savage-Fan",
                badge: "Glueless Wig + Acrylics",
                init: "T"
              },
              {
                text: "My frontal was completely balding in the center. Amara ventilated fresh human hair and you can't even tell it was ever damaged. Saved me buying a new ₦150,000 frontal!",
                name: "Blessing Okon",
                badge: "Hair Ventilation Specialist",
                init: "B"
              }
            ].map((rev, i) => (
              <div key={i} className="p-8 rounded-[32px] bg-white border border-rose-100 shadow-sm">
                <div className="text-amber-400 text-sm mb-3">★★★★★</div>
                <p className="text-sm text-zinc-700 italic leading-relaxed mb-6">"{rev.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full gradient-babe text-white font-bold flex items-center justify-center text-sm">
                    {rev.init}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-zinc-900">{rev.name}</p>
                    <p className="text-[11px] text-rose-500 font-medium">{rev.badge}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. VIP NEWSLETTER */}
      <section className="py-16 gradient-dark-lux text-white text-center space-y-6">
        <div className="max-w-4xl mx-auto px-4">
          <span className="px-4 py-1.5 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/30 text-xs font-bold uppercase tracking-wider inline-block">
            TDL VIP Babes Club
          </span>
          <h2 className="text-3xl sm:text-5xl font-black font-serif-lux">Join The Damian Label VIP Club</h2>
          <p className="text-sm text-zinc-300 max-w-lg mx-auto">
            Get exclusive promo drops, birthday revamp discounts, priority booking during festive periods, and 15% off your next session.
          </p>

          <form 
            onSubmit={(e) => {
              e.preventDefault();
              if (newsletterEmail) {
                showToast("Welcome to TDL VIP Club! Use code LAGOSBABE for 15% off! 💖", "success");
                setNewsletterEmail("");
              }
            }} 
            className="max-w-md mx-auto flex gap-2 pt-2">
            <input 
              type="email" 
              required 
              value={newsletterEmail} 
              onChange={(e) => setNewsletterEmail(e.target.value)}
              placeholder="Enter your email address, babe..." 
              className="flex-1 px-5 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-zinc-400 focus:outline-none focus:border-rose-400 text-sm" 
            />
            <button type="submit" className="px-7 py-3 rounded-full gradient-babe text-white font-bold text-sm shadow-lg hover:shadow-xl transition">
              Join ✨
            </button>
          </form>
        </div>
      </section>

      {/* 10. FOOTER */}
      <footer className="bg-zinc-950 text-zinc-400 py-12 border-t border-zinc-900 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl gradient-babe flex items-center justify-center text-white font-black text-sm">TDL</div>
            <div>
              <span className="text-sm font-black text-white font-serif-lux">THE DAMIAN LABEL</span>
              <p className="text-[11px] text-zinc-500">Ago Palace Way, Lagos, Nigeria • Phone: 0810-002-4096</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6">
            <a href="#services" className="hover:text-white transition">Services & Pricing</a>
            <a href="#booking" className="hover:text-white transition">Book Appointment</a>
            <a href="https://wa.me/2348100024096" target="_blank" className="hover:text-emerald-400 font-bold transition flex items-center gap-1">
              <span>💬</span> WhatsApp: 0810-002-4096
            </a>
            <a href={SALON_INFO.instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 font-bold transition flex items-center gap-1">
              <span>📸</span> Instagram (@the_damian_label)
            </a>
            <a href={SALON_INFO.tiktokUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white font-bold transition flex items-center gap-1">
              <span>🎵</span> TikTok (@thedamianslabel)
            </a>
            <button onClick={() => setIsAdminOpen(true)} className="text-rose-400 hover:text-rose-300 font-bold flex items-center gap-1">
              <span>👑</span> Owner Portal (Private)
            </button>
          </div>

          <p className="text-zinc-600">
            © {new Date().getFullYear()} The Damian Label. All rights reserved.
          </p>
        </div>
      </footer>

      {/* 11. CONFIRMATION SUCCESS MODAL WITH PAYMENT DETAILS */}
      {isConfirmationOpen && confirmedBooking && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 modal-backdrop">
          <div className="bg-white rounded-[36px] max-w-lg w-full p-8 shadow-2xl relative text-center">
            {confirmedBooking.status === "Pending Verification" ? (
              <>
                <div className="w-16 h-16 mx-auto rounded-full bg-amber-100 text-amber-800 flex items-center justify-center text-3xl shadow-lg mb-4 animate-pulse">⏳</div>
                <span className="inline-block px-3.5 py-1 bg-amber-100 text-amber-900 border border-amber-300 rounded-full text-xs font-bold mb-2">
                  ⚠️ Payment Submitted — Pending Studio Credit Alert Verification
                </span>
                <h3 className="text-2xl font-black text-zinc-900 font-serif-lux mb-1">Slot Held! Verifying Credit Alert</h3>
                <p className="text-xs text-zinc-600 mb-4">Reference ID: <strong className="text-rose-600">#{confirmedBooking.id}</strong></p>
                
                <div className="p-3 bg-amber-50 rounded-2xl border border-amber-200 text-xs text-amber-900 mb-4 text-left leading-relaxed">
                  <strong>Notice:</strong> Your appointment slot is provisionally held. <strong>The Damian Label</strong> verifies all incoming bank credit alerts before officially confirming and locking the calendar schedule. Please share your debit alert or Paystack receipt on WhatsApp for instant confirmation.
                </div>
              </>
            ) : (
              <>
                <div className="w-16 h-16 mx-auto rounded-full gradient-babe flex items-center justify-center text-3xl shadow-xl mb-4 animate-bounce">✨</div>
                <span className="inline-block px-3.5 py-1 bg-emerald-100 text-emerald-800 border border-emerald-300 rounded-full text-xs font-bold mb-2">
                  ✅ Payment Verified &amp; Schedule Locked!
                </span>
                <h3 className="text-2xl font-black text-zinc-900 font-serif-lux mb-1">Your Booking is Confirmed!</h3>
                <p className="text-xs text-zinc-600 mb-4">Reference ID: <strong className="text-rose-600">#{confirmedBooking.id}</strong></p>
              </>
            )}

            <div className="bg-rose-50/70 p-4 rounded-2xl border border-rose-200 text-xs text-left space-y-2 mb-4">
              <div className="flex justify-between"><span>Service:</span><b>{confirmedBooking.serviceName}</b></div>
              <div className="flex justify-between"><span>Studio:</span><b>{SALON_INFO.name} (Ago Palace Way)</b></div>
              <div className="flex justify-between"><span>Date & Time:</span><b className="text-rose-600">{formatReadableDate(confirmedBooking.date)} @ {confirmedBooking.time}</b></div>
              <div className="flex justify-between"><span>Delivery Method:</span><b className="text-zinc-800">{confirmedBooking.deliveryMode}</b></div>
              
              <div className="pt-2 border-t border-rose-200 flex justify-between font-bold">
                <span>Verification Status:</span>
                <span className={`px-2 py-0.5 rounded-full text-[11px] ${
                  confirmedBooking.status === "Pending Verification" 
                    ? "text-amber-800 bg-amber-100 border border-amber-300" 
                    : "text-emerald-700 bg-emerald-100"
                }`}>
                  {confirmedBooking.status === "Pending Verification" 
                    ? "⏳ Awaiting Studio Credit Alert" 
                    : "✅ Verified & Locked ✓"}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Amount Paid:</span>
                <b className="text-emerald-600 text-sm">{formatNaira(confirmedBooking.amountPaidOnline)}</b>
              </div>
              {confirmedBooking.dueAtSalon > 0 && (
                <div className="flex justify-between text-amber-800 font-bold">
                  <span>Balance due at delivery:</span>
                  <span>{formatNaira(confirmedBooking.dueAtSalon)}</span>
                </div>
              )}
              {confirmedBooking.paymentReference && (
                <div className="flex justify-between text-[11px] text-zinc-500 font-mono">
                  <span>Payment Ref:</span>
                  <span>{confirmedBooking.paymentReference}</span>
                </div>
              )}
            </div>

            <div className="grid grid-cols-2 gap-2 mb-3">
              <button 
                onClick={() => handleOpenPrintReceipt(confirmedBooking)} 
                className="py-2.5 px-3 rounded-xl border text-xs font-bold bg-white text-zinc-800 hover:border-rose-300 flex items-center justify-center gap-1 shadow-xs">
                <span>🖨️</span>
                <span>Print Receipt</span>
              </button>
              <button onClick={() => handleAddToGoogleCalendar(confirmedBooking)} className="py-2.5 px-3 rounded-xl border text-xs font-bold bg-white text-zinc-800 hover:border-rose-300 flex items-center justify-center gap-1">
                <span>📅</span>
                <span>Google Calendar</span>
              </button>
            </div>

            <a 
              href={`https://wa.me/2348100024096?text=Hello%20The%20Damian%20Label,%20I%20have%20submitted%20payment%20for%20Booking%20%23${confirmedBooking.id}%20(${encodeURIComponent(confirmedBooking.serviceName)}).%20Amount:%20${encodeURIComponent(formatNaira(confirmedBooking.amountPaidOnline))}.%20Please%20find%20my%20credit%20alert%20/%20debit%20proof%20attached%20to%20confirm%20my%20schedule!`} 
              target="_blank" 
              className="w-full mb-2 py-3 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs shadow-md flex items-center justify-center gap-2">
              <span>💬</span>
              <span>Send Payment Proof / Alert on WhatsApp (0810-002-4096)</span>
            </a>

            <button onClick={() => setIsConfirmationOpen(false)} className="w-full py-2.5 rounded-2xl bg-zinc-100 hover:bg-zinc-200 text-zinc-700 font-bold text-xs">
              Back to Website
            </button>
          </div>
        </div>
      )}

      {/* 12. PAYSTACK CHECKOUT POPUP (DEMO / SIMULATION MODAL) */}
      {isPaystackSimModalOpen && pendingPaymentBooking && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 modal-backdrop animate-fade-in">
          <div className="bg-white rounded-[32px] max-w-md w-full p-6 shadow-2xl border border-emerald-300 relative text-left">
            
            {/* Paystack Header */}
            <div className="flex items-center justify-between pb-4 border-b border-zinc-100 mb-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center text-white font-black text-xs">
                  P
                </div>
                <div>
                  <h4 className="text-sm font-black text-zinc-900">Paystack Checkout</h4>
                  <p className="text-[10px] text-zinc-400">Secured by Paystack Payments (Nigeria)</p>
                </div>
              </div>
              <button 
                onClick={() => setIsPaystackSimModalOpen(false)} 
                className="w-7 h-7 rounded-full bg-zinc-100 text-zinc-600 flex items-center justify-center text-xs font-bold">
                ✕
              </button>
            </div>

            {/* Transaction Info */}
            <div className="bg-emerald-50/70 p-4 rounded-2xl border border-emerald-200 mb-4 text-xs">
              <div className="flex justify-between text-zinc-600 mb-1">
                <span>Paying To:</span>
                <strong className="text-zinc-900">THE DAMIAN LABEL</strong>
              </div>
              <div className="flex justify-between text-zinc-600 mb-1">
                <span>Customer Email:</span>
                <span>{pendingPaymentBooking.clientEmail}</span>
              </div>
              <div className="flex justify-between text-base font-black text-emerald-800 pt-2 border-t border-emerald-200">
                <span>Amount:</span>
                <span>{formatNaira(totals.amountToPayNow)}</span>
              </div>
            </div>

            {/* Payment Channels */}
            <p className="text-xs font-bold text-zinc-700 mb-2">Simulate Nigerian Payment Method:</p>
            <div className="space-y-2 mb-6">
              <button
                type="button"
                onClick={() => {
                  const ref = "PSTK-CARD-" + Math.floor(100000 + Math.random() * 900000);
                  finalizeConfirmedBooking(pendingPaymentBooking, "Debit Card (Pending Credit Alert)", ref, totals.amountToPayNow, "Pending Verification");
                }}
                className="w-full p-3.5 rounded-xl border border-zinc-200 hover:border-emerald-500 bg-white hover:bg-emerald-50/50 text-left transition flex items-center justify-between text-xs font-bold text-zinc-800">
                <div className="flex items-center gap-2">
                  <span>💳</span>
                  <span>Pay with Nigerian Debit Card (Verve / Mastercard / Visa)</span>
                </div>
                <span className="text-emerald-600">→</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  const ref = "PSTK-TXF-" + Math.floor(100000 + Math.random() * 900000);
                  finalizeConfirmedBooking(pendingPaymentBooking, "Bank Transfer (Pending Credit Alert)", ref, totals.amountToPayNow, "Pending Verification");
                }}
                className="w-full p-3.5 rounded-xl border border-zinc-200 hover:border-emerald-500 bg-white hover:bg-emerald-50/50 text-left transition flex items-center justify-between text-xs font-bold text-zinc-800">
                <div className="flex items-center gap-2">
                  <span>🏦</span>
                  <span>Pay with Instant Bank Transfer (Virtual Account)</span>
                </div>
                <span className="text-emerald-600">→</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  const ref = "PSTK-USSD-" + Math.floor(100000 + Math.random() * 900000);
                  finalizeConfirmedBooking(pendingPaymentBooking, "USSD (Pending Credit Alert)", ref, totals.amountToPayNow, "Pending Verification");
                }}
                className="w-full p-3.5 rounded-xl border border-zinc-200 hover:border-emerald-500 bg-white hover:bg-emerald-50/50 text-left transition flex items-center justify-between text-xs font-bold text-zinc-800">
                <div className="flex items-center gap-2">
                  <span>📱</span>
                  <span>Pay with USSD (*737#, *919#, etc.)</span>
                </div>
                <span className="text-emerald-600">→</span>
              </button>
            </div>

            <p className="text-[11px] text-zinc-400 text-center">
              💡 <em>Studio Owner: To route real customer funds directly to your Nigerian bank, paste your Paystack Public Key in the Owner Portal!</em>
            </p>
          </div>
        </div>
      )}

      {/* 13. OWNER ADMIN PORTAL MODAL WITH PAYSTACK & BANK SETTINGS */}
      {isAdminOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 modal-backdrop">
          <div className="bg-white rounded-[36px] max-w-4xl w-full p-8 shadow-2xl relative max-h-[85vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="text-xl font-bold font-serif-lux">The Damian Label - Owner Portal</h3>
                <p className="text-xs text-zinc-500">Ago Palace Way, Lagos • Live Appointments & Payment Management</p>
              </div>
              <button onClick={() => setIsAdminOpen(false)} className="text-sm font-bold text-zinc-500">✕</button>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
              <div className="p-4 bg-rose-50 rounded-2xl border border-rose-100">
                <span className="text-xs text-zinc-500">Total Bookings</span>
                <p className="text-xl font-black text-zinc-900">{adminBookings.length}</p>
              </div>
              <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-100">
                <span className="text-xs text-emerald-700">Online Paid</span>
                <p className="text-xl font-black text-emerald-700">{adminBookings.filter(b => b.paymentStatus && b.paymentStatus.includes("Paid")).length}</p>
              </div>
              <div className="p-4 bg-amber-50 rounded-2xl border border-amber-100">
                <span className="text-xs text-amber-700">Funds Collected (₦)</span>
                <p className="text-xl font-black text-amber-700">{formatNaira(adminBookings.reduce((sum, b) => sum + (b.amountPaidOnline || b.depositPaid || 0), 0))}</p>
              </div>
              <div className="p-4 bg-zinc-50 rounded-2xl border border-zinc-200">
                <span className="text-xs text-zinc-500">Projected Revenue</span>
                <p className="text-xl font-black text-rose-600">{formatNaira(adminBookings.reduce((sum, b) => sum + (b.finalTotal || 0), 0))}</p>
              </div>
            </div>

            {/* ADMIN SUB-TABS */}
            <div className="flex border-b border-zinc-200 mb-6 gap-2 overflow-x-auto pb-2">
              <button
                type="button"
                onClick={() => setAdminTab("bookings")}
                className={`px-4 py-2.5 rounded-xl font-bold text-xs flex items-center gap-2 whitespace-nowrap transition ${
                  adminTab === "bookings" 
                    ? "bg-rose-600 text-white shadow-sm" 
                    : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200"
                }`}>
                <span>📋</span>
                <span>Orders &amp; Payment Verification</span>
                {adminBookings.filter(b => b.status === "Pending Verification").length > 0 && (
                  <span className="bg-amber-400 text-zinc-950 px-2 py-0.5 rounded-full text-[10px] font-black animate-pulse">
                    {adminBookings.filter(b => b.status === "Pending Verification").length} PENDING
                  </span>
                )}
              </button>

              <button
                type="button"
                onClick={() => setAdminTab("availability")}
                className={`px-4 py-2.5 rounded-xl font-bold text-xs flex items-center gap-2 whitespace-nowrap transition ${
                  adminTab === "availability" 
                    ? "bg-rose-600 text-white shadow-sm" 
                    : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200"
                }`}>
                <span>📅</span>
                <span>Working Days &amp; Availability (Private)</span>
              </button>

              <button
                type="button"
                onClick={() => setAdminTab("payments")}
                className={`px-4 py-2.5 rounded-xl font-bold text-xs flex items-center gap-2 whitespace-nowrap transition ${
                  adminTab === "payments" 
                    ? "bg-rose-600 text-white shadow-sm" 
                    : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200"
                }`}>
                <span>💳</span>
                <span>Bank &amp; Paystack Keys</span>
              </button>

              <button
                type="button"
                onClick={() => setAdminTab("alerts")}
                className={`px-4 py-2.5 rounded-xl font-bold text-xs flex items-center gap-2 whitespace-nowrap transition ${
                  adminTab === "alerts" 
                    ? "bg-rose-600 text-white shadow-sm" 
                    : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200"
                }`}>
                <span>🔔</span>
                <span>Sound &amp; Alerts</span>
              </button>
            </div>

            {/* TAB 1: BOOKINGS & PAYMENT VERIFICATION */}
            {adminTab === "bookings" && (
              <div className="space-y-4">
                {/* Filter Pills */}
                <div className="flex items-center justify-between flex-wrap gap-2 pb-2 border-b border-zinc-100">
                  <div className="flex gap-2">
                    {[
                      { id: "all", label: `All Orders (${adminBookings.length})` },
                      { id: "pending", label: `⚠️ Awaiting Credit Check (${adminBookings.filter(b => b.status === "Pending Verification").length})` },
                      { id: "confirmed", label: `✅ Confirmed (${adminBookings.filter(b => b.status === "Confirmed").length})` }
                    ].map(f => (
                      <button
                        key={f.id}
                        type="button"
                        onClick={() => setAdminBookingsFilter(f.id)}
                        className={`px-3 py-1.5 rounded-full text-xs font-bold transition ${
                          adminBookingsFilter === f.id
                            ? "bg-zinc-900 text-white shadow-xs"
                            : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"
                        }`}>
                        {f.label}
                      </button>
                    ))}
                  </div>

                  <p className="text-[11px] text-zinc-400">
                    💡 <em>Tap "I Have Seen The Money" once funds hit your account to confirm the client schedule!</em>
                  </p>
                </div>

                {/* Orders List */}
                <div className="space-y-3">
                  {adminBookings
                    .filter(b => {
                      if (adminBookingsFilter === "pending") return b.status === "Pending Verification";
                      if (adminBookingsFilter === "confirmed") return b.status === "Confirmed";
                      return true;
                    })
                    .map(b => {
                      const isPending = b.status === "Pending Verification";
                      const isConfirmed = b.status === "Confirmed";
                      const isDeclined = b.status === "Declined";

                      return (
                        <div 
                          key={b.id} 
                          className={`p-4 rounded-2xl border transition shadow-xs ${
                            isPending 
                              ? "bg-amber-50/60 border-amber-300" 
                              : isConfirmed 
                              ? "bg-white border-emerald-200" 
                              : "bg-zinc-50 border-zinc-200"
                          }`}>
                          
                          {/* Order Top Meta */}
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-zinc-200/70 gap-2 text-xs">
                            <div className="flex items-center gap-2 flex-wrap">
                              <span className="font-mono font-black text-rose-600 text-sm">#{b.id}</span>
                              <span className="font-bold text-zinc-900 text-sm">{b.clientName}</span>
                              <span className="text-zinc-500">📞 {b.clientPhone}</span>
                              {b.clientInstagram && b.clientInstagram !== "None" && (
                                <span className="text-pink-600 font-semibold bg-pink-50 px-2 py-0.5 rounded-full text-[10px]">
                                  {b.clientInstagram}
                                </span>
                              )}
                            </div>
                            
                            <div className="flex items-center gap-2">
                              <span className={`px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ${
                                isPending 
                                  ? "bg-amber-200 text-amber-900 border border-amber-300 animate-pulse" 
                                  : isConfirmed 
                                  ? "bg-emerald-100 text-emerald-800 border border-emerald-300" 
                                  : "bg-rose-100 text-rose-800"
                              }`}>
                                {isPending ? "⏳ Pending Studio Credit Alert" : isConfirmed ? "✅ Confirmed & Locked ✓" : "❌ Declined"}
                              </span>
                            </div>
                          </div>

                          {/* Order Service & Pricing Details */}
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 py-3 text-xs">
                            <div>
                              <p className="font-bold text-zinc-900">{b.serviceName}</p>
                              {b.addons && b.addons.length > 0 && (
                                <p className="text-[11px] text-zinc-500">Addons: {b.addons.join(", ")}</p>
                              )}
                              <p className="text-zinc-600 mt-1">
                                📅 <strong>{b.date}</strong> @ <strong className="text-rose-600">{b.time}</strong>
                              </p>
                              <p className="text-[11px] text-zinc-500">📦 Mode: {b.deliveryMode}</p>
                            </div>

                            <div className="space-y-1 sm:text-right">
                              <div className="flex sm:justify-end gap-2 text-zinc-600">
                                <span>Total Service Value:</span>
                                <strong className="text-zinc-900">{formatNaira(b.finalTotal)}</strong>
                              </div>
                              <div className="flex sm:justify-end gap-2 text-emerald-700 font-bold">
                                <span>Amount Paid Online:</span>
                                <span>{formatNaira(b.amountPaidOnline || b.depositPaid || 0)}</span>
                              </div>
                              {b.dueAtSalon > 0 && (
                                <div className="flex sm:justify-end gap-2 text-amber-800 font-semibold text-[11px]">
                                  <span>Balance Due at Pickup:</span>
                                  <span>{formatNaira(b.dueAtSalon)}</span>
                                </div>
                              )}
                              {b.paymentReference && (
                                <p className="font-mono text-[10px] text-zinc-500">Ref: {b.paymentReference}</p>
                              )}
                            </div>
                          </div>

                          {/* Action Area based on Verification State */}
                          {isPending && (
                            <div className="mt-2 pt-3 border-t border-amber-200/80 flex flex-wrap items-center justify-between gap-3">
                              <div className="text-xs text-amber-900">
                                <strong>⚠️ Action Required:</strong> Verify that <strong>{formatNaira(b.amountPaidOnline || b.depositPaid || 0)}</strong> was credited into your account.
                              </div>

                              <div className="flex flex-wrap items-center gap-2">
                                <button
                                  type="button"
                                  onClick={() => handleVerifyPayment(b.id)}
                                  className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition flex items-center gap-1.5">
                                  <span>✅</span>
                                  <span>I Have Seen The Money (Confirm Schedule)</span>
                                </button>

                                <button
                                  type="button"
                                  onClick={() => handleOpenPrintReceipt(b)}
                                  className="px-3 py-2 rounded-xl bg-white hover:bg-zinc-100 text-zinc-800 font-bold text-xs border border-zinc-300 shadow-xs flex items-center gap-1 transition">
                                  <span>🖨️</span>
                                  <span>Print Receipt</span>
                                </button>

                                <a
                                  href={`https://wa.me/234${b.clientPhone.replace(/^0|\D/g, '')}?text=Hello%20${encodeURIComponent(b.clientName)},%20this%20is%20The%20Damian%20Label%20regarding%20your%20appointment%20%23${b.id}.%20Please%20send%20us%20your%20debit%20or%20transfer%20receipt%20so%20we%20can%20lock%20your%20schedule.`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="px-3 py-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-bold text-xs border border-emerald-300 flex items-center gap-1 transition">
                                  <span>💬</span>
                                  <span>Chat Client</span>
                                </a>

                                <button
                                  type="button"
                                  onClick={() => handleDeclineBooking(b.id)}
                                  className="px-3 py-2 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-700 font-bold text-xs border border-rose-300 flex items-center gap-1 transition">
                                  <span>❌</span>
                                  <span>Decline</span>
                                </button>
                              </div>
                            </div>
                          )}

                          {isConfirmed && (
                            <div className="mt-2 pt-3 border-t border-emerald-200 flex flex-wrap items-center justify-between gap-2 text-xs">
                              <span className="text-emerald-800 font-semibold flex items-center gap-1">
                                <span>✓</span>
                                <span>Money Verified &amp; Schedule Locked</span>
                                {b.verifiedAt && <span className="text-[10px] text-zinc-500">({new Date(b.verifiedAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })})</span>}
                              </span>

                              <div className="flex items-center gap-2">
                                <button
                                  type="button"
                                  onClick={() => handleOpenPrintReceipt(b)}
                                  className="px-3 py-1.5 rounded-xl bg-white hover:bg-zinc-100 text-zinc-800 font-bold text-xs border border-zinc-300 shadow-xs flex items-center gap-1 transition">
                                  <span>🖨️</span>
                                  <span>Print Official Receipt</span>
                                </button>

                                <a
                                  href={`https://wa.me/234${b.clientPhone.replace(/^0|\D/g, '')}?text=Hello%20${encodeURIComponent(b.clientName)}!%20Your%20payment%20for%20appointment%20%23${b.id}%20at%20The%20Damian%20Label%20has%20been%20verified%20and%20your%20schedule%20is%20officially%20CONFIRMED%20for%20${b.date}%20at%20${b.time}.%20See%20you%20soon%20at%20Ago%20Palace%20Way!`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-xs flex items-center gap-1 transition">
                                  <span>💬</span>
                                  <span>WhatsApp Receipt</span>
                                </a>
                              </div>
                            </div>
                          )}

                          {isDeclined && (
                            <div className="mt-2 pt-2 border-t border-zinc-200 flex items-center justify-between text-xs text-rose-700">
                              <span>❌ Declined / Payment Not Seen</span>
                              <button
                                type="button"
                                onClick={() => handleVerifyPayment(b.id)}
                                className="font-bold underline text-xs">
                                Re-verify Payment
                              </button>
                            </div>
                          )}

                        </div>
                      );
                    })}
                </div>
              </div>
            )}

            {/* TAB 2: WORKING DAYS & AVAILABILITY MANAGEMENT (PRIVATE - OWNER ONLY) */}
            {adminTab === "availability" && (
              <div className="space-y-6">
                <div className="p-4 rounded-2xl bg-rose-50/80 border border-rose-200">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xl">🔒</span>
                    <h4 className="font-bold text-zinc-900 text-sm">Private Studio Working Days &amp; Blackout Dates</h4>
                  </div>
                  <p className="text-xs text-zinc-600 leading-relaxed">
                    <strong>Only you can see this section.</strong> Toggle the days of the week you accept bookings and block off specific dates (holidays, rest days, market trips). Any change immediately updates your client-facing booking calendar.
                  </p>
                </div>

                {/* Master Booking Toggle */}
                <div className="p-4 rounded-2xl bg-white border border-zinc-200 flex items-center justify-between">
                  <div>
                    <h5 className="font-bold text-zinc-900 text-xs">Studio Online Booking Switch</h5>
                    <p className="text-[11px] text-zinc-500">Temporarily pause new online orders whenever you want.</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => updateAvailability({ ...availability, acceptingOrders: !availability.acceptingOrders })}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition shadow-xs ${
                      availability.acceptingOrders !== false ? "bg-emerald-600 text-white" : "bg-rose-600 text-white"
                    }`}>
                    {availability.acceptingOrders !== false ? "🟢 Taking Online Bookings" : "🔴 Bookings Paused"}
                  </button>
                </div>

                {/* Weekly Working Days */}
                <div className="p-5 rounded-2xl bg-white border border-zinc-200 space-y-3">
                  <div>
                    <h5 className="font-bold text-zinc-900 text-xs uppercase tracking-wider">Weekly Available Days</h5>
                    <p className="text-[11px] text-zinc-500">Tap a day to toggle OPEN or CLOSED. Closed days cannot be booked by clients.</p>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
                    {[
                      { day: 0, label: "Sunday", short: "Sun" },
                      { day: 1, label: "Monday", short: "Mon" },
                      { day: 2, label: "Tuesday", short: "Tue" },
                      { day: 3, label: "Wednesday", short: "Wed" },
                      { day: 4, label: "Thursday", short: "Thu" },
                      { day: 5, label: "Friday", short: "Fri" },
                      { day: 6, label: "Saturday", short: "Sat" }
                    ].map(item => {
                      const isOpen = availability.workingDays.includes(item.day);
                      return (
                        <button
                          key={item.day}
                          type="button"
                          onClick={() => toggleWorkingDay(item.day)}
                          className={`p-3 rounded-2xl border text-center transition flex flex-col items-center justify-center gap-1 cursor-pointer ${
                            isOpen 
                              ? "bg-emerald-50 border-emerald-400 text-emerald-900 shadow-xs" 
                              : "bg-zinc-100 border-zinc-200 text-zinc-400 opacity-70"
                          }`}>
                          <span className="font-bold text-xs">{item.label}</span>
                          <span className={`text-[10px] font-black px-2 py-0.5 rounded-full ${
                            isOpen ? "bg-emerald-200 text-emerald-800" : "bg-zinc-200 text-zinc-600"
                          }`}>
                            {isOpen ? "OPEN ✓" : "CLOSED ✕"}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Block Specific Dates */}
                <div className="p-5 rounded-2xl bg-white border border-zinc-200 space-y-4">
                  <div>
                    <h5 className="font-bold text-zinc-900 text-xs uppercase tracking-wider">Block Specific Dates (Blackout Calendar)</h5>
                    <p className="text-[11px] text-zinc-500">Pick any date you want to mark as Booked / Closed on the calendar.</p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2">
                    <input
                      type="date"
                      min={getFormattedFutureDate(0)}
                      value={newBlockedDateInput}
                      onChange={(e) => setNewBlockedDateInput(e.target.value)}
                      className="px-4 py-2 rounded-xl border border-zinc-300 text-xs bg-white text-zinc-800"
                    />
                    <button
                      type="button"
                      onClick={handleAddBlockedDate}
                      className="px-5 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs transition shadow-xs flex items-center justify-center gap-1">
                      <span>🚫</span>
                      <span>Block This Date</span>
                    </button>
                  </div>

                  {availability.blockedDates && availability.blockedDates.length > 0 ? (
                    <div className="space-y-2 pt-2 border-t border-zinc-100">
                      <span className="text-[11px] font-bold text-zinc-600 uppercase">Currently Blocked Dates:</span>
                      <div className="flex flex-wrap gap-2">
                        {availability.blockedDates.map(dateStr => (
                          <div key={dateStr} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-rose-100 border border-rose-300 text-rose-800 text-xs font-bold">
                            <span>🚫 {formatReadableDate(dateStr)} ({dateStr})</span>
                            <button
                              type="button"
                              onClick={() => handleRemoveBlockedDate(dateStr)}
                              className="w-5 h-5 rounded-full bg-rose-200 hover:bg-rose-300 text-rose-900 flex items-center justify-center text-xs ml-1"
                              title="Unblock date">
                              ✕
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <p className="text-xs text-zinc-400 italic">No specific dates currently blocked.</p>
                  )}
                </div>

                {/* Custom Notice Banner */}
                <div className="p-5 rounded-2xl bg-white border border-zinc-200 space-y-2">
                  <h5 className="font-bold text-zinc-900 text-xs uppercase tracking-wider">Client Notice Banner Above Calendar</h5>
                  <input
                    type="text"
                    value={availability.customNotice || ""}
                    onChange={(e) => updateAvailability({ ...availability, customNotice: e.target.value })}
                    placeholder="e.g. Studio open Monday - Saturday at Ago Palace Way, Lagos."
                    className="w-full px-4 py-2.5 rounded-xl border border-zinc-300 text-xs bg-white"
                  />
                  <p className="text-[10px] text-zinc-400">This notice appears directly above the booking calendar in Step 2.</p>
                </div>
              </div>
            )}

            {/* TAB 3: PAYSTACK & BANK SETTINGS */}
            {adminTab === "payments" && (
              <div className="p-5 rounded-2xl bg-emerald-50/60 border border-emerald-200 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-xl">💳</span>
                  <h4 className="font-bold text-zinc-900 text-sm">Paystack &amp; Studio Bank Account Configuration</h4>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div>
                    <label className="block font-bold text-zinc-700 mb-1">Paystack Public Key</label>
                    <input 
                      type="text" 
                      value={paystackKey} 
                      onChange={(e) => {
                        setPaystackKey(e.target.value);
                        localStorage.setItem("tdl_paystack_key", e.target.value);
                      }} 
                      placeholder="pk_live_xxxx or pk_test_xxxx" 
                      className="w-full px-3 py-2 rounded-xl border border-zinc-200 bg-white font-mono text-[11px]" 
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-zinc-700 mb-1">Bank Name</label>
                    <input 
                      type="text" 
                      value={bankDetails.bankName} 
                      onChange={(e) => {
                        const updated = { ...bankDetails, bankName: e.target.value };
                        setBankDetails(updated);
                        localStorage.setItem("tdl_bank_details", JSON.stringify(updated));
                      }} 
                      className="w-full px-3 py-2 rounded-xl border border-zinc-200 bg-white text-xs" 
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-zinc-700 mb-1">Studio Account Number</label>
                    <input 
                      type="text" 
                      value={bankDetails.accountNumber} 
                      onChange={(e) => {
                        const updated = { ...bankDetails, accountNumber: e.target.value };
                        setBankDetails(updated);
                        localStorage.setItem("tdl_bank_details", JSON.stringify(updated));
                      }} 
                      className="w-full px-3 py-2 rounded-xl border border-zinc-200 bg-white text-xs font-mono font-bold" 
                    />
                  </div>
                </div>
                <p className="text-[11px] text-zinc-500">
                  Enter your Paystack Public Key from your <a href="https://dashboard.paystack.com" target="_blank" className="text-emerald-700 font-bold underline">Paystack Dashboard</a> to receive card and bank payments straight into your Nigerian account!
                </p>
              </div>
            )}

            {/* TAB 4: ALERTS & SOUND */}
            {adminTab === "alerts" && (
              <div className="p-5 rounded-2xl bg-white border border-zinc-200 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-xl">🔔</span>
                  <h4 className="font-bold text-zinc-900 text-sm">Notifications &amp; Audio Alerts</h4>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-zinc-50 border border-zinc-200 text-xs">
                  <div>
                    <p className="font-bold text-zinc-900">Audio Chime on Booking / Payment</p>
                    <p className="text-zinc-500">Plays an instant chime sound whenever an appointment is submitted.</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      const updated = { ...ownerNotificationSettings, soundAlerts: !ownerNotificationSettings.soundAlerts };
                      setOwnerNotificationSettings(updated);
                      localStorage.setItem("tdl_owner_notifications", JSON.stringify(updated));
                    }}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                      ownerNotificationSettings.soundAlerts ? "bg-emerald-600 text-white" : "bg-zinc-200 text-zinc-700"
                    }`}>
                    {ownerNotificationSettings.soundAlerts ? "Enabled 🔔" : "Muted 🔕"}
                  </button>
                </div>

                <div className="p-3 rounded-xl bg-zinc-50 border border-zinc-200 text-xs flex items-center justify-between">
                  <div>
                    <p className="font-bold text-zinc-900">Desktop Browser Notification</p>
                    <p className="text-zinc-500">Receive popup notification on your phone or PC when a booking arrives.</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      if ("Notification" in window) {
                        Notification.requestPermission().then(permission => {
                          showToast(`Notification permission: ${permission}`, "info");
                        });
                      }
                    }}
                    className="px-4 py-2 rounded-xl bg-zinc-900 text-white text-xs font-bold hover:bg-zinc-800">
                    Enable Desktop Push
                  </button>
                </div>
              </div>
            )}

          </div>
        </div>
      )}

      {/* 14. DEDICATED PRINTABLE RECEIPT MODAL */}
      {receiptToPrint && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 modal-backdrop overflow-y-auto">
          <div id="printable-receipt-modal" className="bg-white rounded-[32px] max-w-xl w-full p-8 shadow-2xl relative text-left border border-zinc-200 my-8">
            {/* Top Controls (Hidden on Print) */}
            <div className="flex justify-between items-center pb-4 mb-4 border-b border-zinc-200 no-print">
              <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Official Studio Receipt</span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleTriggerBrowserPrint}
                  className="px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs shadow flex items-center gap-1.5 transition">
                  <span>🖨️</span>
                  <span>Print Now / Save PDF</span>
                </button>
                <button
                  type="button"
                  onClick={() => setReceiptToPrint(null)}
                  className="w-8 h-8 rounded-full bg-zinc-100 text-zinc-600 flex items-center justify-center font-bold text-xs hover:bg-zinc-200">
                  ✕
                </button>
              </div>
            </div>

            {/* Receipt Content */}
            <div className="space-y-5 text-zinc-800">
              {/* Header */}
              <div className="flex justify-between items-start border-b-2 border-zinc-900 pb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-8 h-8 rounded-lg gradient-babe text-white font-black flex items-center justify-center text-xs">TDL</div>
                    <h2 className="text-xl font-black text-zinc-900 font-serif-lux tracking-wide">THE DAMIAN LABEL</h2>
                  </div>
                  <p className="text-xs text-zinc-600 font-medium">Luxury Wig Revamping, Wigging, Ventilation &amp; Nails</p>
                  <p className="text-[11px] text-zinc-500">📍 Ago Palace Way, Lagos, Nigeria • 📞 0810-002-4096</p>
                  <p className="text-[11px] text-zinc-500">📸 IG: @the_damian_label • 🎵 TikTok: @thedamianslabel</p>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 block">Receipt / Booking ID</span>
                  <span className="text-lg font-mono font-black text-rose-600">#{receiptToPrint.id}</span>
                  <p className="text-[10px] text-zinc-400 mt-1">{new Date(receiptToPrint.createdAt || Date.now()).toLocaleDateString("en-NG", { dateStyle: "medium" })}</p>
                </div>
              </div>

              {/* Watermark Status Stamp */}
              <div className="py-2 text-center">
                {receiptToPrint.status === "Confirmed" ? (
                  <div className="inline-block px-5 py-2 rounded-xl watermark-stamp-verified font-black text-xs uppercase tracking-widest bg-emerald-50">
                    ✓ OFFICIAL RECEIPT — PAYMENT VERIFIED &amp; SCHEDULE CONFIRMED
                  </div>
                ) : (
                  <div className="inline-block px-5 py-2 rounded-xl watermark-stamp-pending font-black text-xs uppercase tracking-widest bg-amber-50">
                    ⏳ PROVISIONAL RECEIPT — AWAITING STUDIO BANK CREDIT CHECK
                  </div>
                )}
              </div>

              {/* Client & Booking Schedule Info */}
              <div className="grid grid-cols-2 gap-4 bg-zinc-50 p-4 rounded-2xl border border-zinc-200 text-xs">
                <div>
                  <span className="text-[10px] uppercase font-bold text-zinc-400 block mb-1">Billed To (Client):</span>
                  <p className="font-bold text-zinc-900 text-sm">{receiptToPrint.clientName}</p>
                  <p className="text-zinc-600">{receiptToPrint.clientPhone}</p>
                  <p className="text-zinc-500">{receiptToPrint.clientEmail}</p>
                  {receiptToPrint.clientInstagram && receiptToPrint.clientInstagram !== "None" && (
                    <p className="text-pink-600 font-semibold">{receiptToPrint.clientInstagram}</p>
                  )}
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-zinc-400 block mb-1">Appointment Schedule:</span>
                  <p className="font-bold text-rose-600 text-sm">{formatReadableDate(receiptToPrint.date)}</p>
                  <p className="font-semibold text-zinc-800">Time: {receiptToPrint.time}</p>
                  <p className="text-zinc-600">Mode: {receiptToPrint.deliveryMode}</p>
                </div>
              </div>

              {/* Items Table */}
              <div className="border border-zinc-200 rounded-2xl overflow-hidden text-xs">
                <table className="w-full text-left">
                  <thead className="bg-zinc-100 text-zinc-700 text-[11px] font-bold uppercase">
                    <tr>
                      <th className="p-3">Description</th>
                      <th className="p-3 text-right">Amount</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-200">
                    <tr>
                      <td className="p-3 font-semibold text-zinc-900">
                        {receiptToPrint.serviceName}
                        <span className="block text-[10px] text-zinc-500 font-normal">Primary Salon Service</span>
                      </td>
                      <td className="p-3 text-right font-bold text-zinc-900">{formatNaira(receiptToPrint.servicePrice)}</td>
                    </tr>
                    {receiptToPrint.addons && receiptToPrint.addons.length > 0 && (
                      <tr>
                        <td className="p-3 text-zinc-700">
                          <span className="font-semibold">Custom Add-ons:</span>
                          <ul className="list-disc list-inside text-[11px] text-zinc-500 mt-0.5">
                            {receiptToPrint.addons.map((a, idx) => (
                              <li key={idx}>{a}</li>
                            ))}
                          </ul>
                        </td>
                        <td className="p-3 text-right font-semibold text-zinc-800">+{formatNaira(receiptToPrint.addonsTotal || 0)}</td>
                      </tr>
                    )}
                    {receiptToPrint.discountTotal > 0 && (
                      <tr className="bg-emerald-50/50">
                        <td className="p-3 font-semibold text-emerald-800">VIP Promo Discount</td>
                        <td className="p-3 text-right font-bold text-emerald-700">-{formatNaira(receiptToPrint.discountTotal)}</td>
                      </tr>
                    )}
                  </tbody>
                  <tfoot className="bg-zinc-50 font-bold border-t-2 border-zinc-200">
                    <tr>
                      <td className="p-3 text-zinc-900">Total Value:</td>
                      <td className="p-3 text-right text-base font-black text-zinc-900">{formatNaira(receiptToPrint.finalTotal)}</td>
                    </tr>
                    <tr className="text-emerald-700">
                      <td className="p-3">Amount Paid Online:</td>
                      <td className="p-3 text-right font-black text-sm">{formatNaira(receiptToPrint.amountPaidOnline || receiptToPrint.depositPaid || 0)}</td>
                    </tr>
                    {receiptToPrint.dueAtSalon > 0 && (
                      <tr className="text-amber-800">
                        <td className="p-3">Balance Due at Studio / Delivery:</td>
                        <td className="p-3 text-right font-black text-sm">{formatNaira(receiptToPrint.dueAtSalon)}</td>
                      </tr>
                    )}
                  </tfoot>
                </table>
              </div>

              {/* Payment & Verification Footer */}
              <div className="bg-rose-50/60 p-4 rounded-2xl border border-rose-200 text-xs space-y-1">
                <div className="flex justify-between">
                  <span className="text-zinc-600">Payment Channel:</span>
                  <strong className="text-zinc-900">{receiptToPrint.paymentMethod === 'bank_transfer' ? 'Direct Nigerian Bank Transfer' : 'Paystack Online (Card/Transfer/USSD)'}</strong>
                </div>
                {receiptToPrint.paymentReference && (
                  <div className="flex justify-between font-mono">
                    <span className="text-zinc-600">Transaction Reference:</span>
                    <strong className="text-rose-600">{receiptToPrint.paymentReference}</strong>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-zinc-600">Studio Phone / WhatsApp:</span>
                  <strong className="text-emerald-700">0810-002-4096</strong>
                </div>
              </div>

              {/* Studio Policy Note */}
              <div className="text-[10px] text-zinc-400 text-center border-t border-zinc-200 pt-3">
                <p>Thank you for choosing <strong>The Damian Label</strong>! Ago Palace Way, Lagos, Nigeria.</p>
                <p>Follow us on Instagram <strong>@the_damian_label</strong> &amp; TikTok <strong>@thedamianslabel</strong> to get your slay featured!</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 14. TOAST NOTIFICATIONS */}
      <div className="fixed top-6 right-6 z-50 space-y-2">
        {toasts.map(t => (
          <div key={t.id} className="px-4 py-2 rounded-xl bg-white shadow-xl border border-rose-200 text-xs font-bold text-zinc-800 flex items-center gap-2">
            <span>{t.type === "success" ? "💖" : t.type === "warning" ? "⚠️" : "✨"}</span>
            <span>{t.message}</span>
          </div>
        ))}
      </div>

      {/* 15. LUXURY STUDIO MUSIC PLAYER WIDGET */}
      <div 
        style={{
          background: 'rgba(255, 255, 255, 0.96)',
          backdropFilter: 'blur(16px)',
          border: '1.5px solid rgba(251, 113, 133, 0.45)',
          boxShadow: '0 12px 35px rgba(225, 29, 72, 0.22), 0 2px 10px rgba(0, 0, 0, 0.05)',
        }}
        className={`fixed bottom-5 left-4 sm:left-6 z-40 transition-all duration-300 rounded-3xl ${
          isMusicMinimized ? 'p-2 sm:p-2.5' : 'p-3 sm:p-3.5 max-w-[320px] sm:max-w-sm w-[calc(100vw-32px)] sm:w-auto'
        }`}>
        {isMusicMinimized ? (
          <div className="flex items-center gap-2">
            <button 
              type="button"
              onClick={toggleMusicPlay}
              style={{ background: '#e11d48' }}
              className="w-9 h-9 rounded-full text-white flex items-center justify-center text-xs shadow-md hover:scale-110 active:scale-95 transition cursor-pointer">
              {isPlayingMusic ? "⏸️" : "▶️"}
            </button>
            <button 
              type="button"
              onClick={() => setIsMusicMinimized(false)}
              className="text-xs font-bold text-rose-600 hover:text-rose-700 flex items-center gap-1 px-2 py-1 cursor-pointer">
              <span>🎵</span>
              <span className="hidden sm:inline">TDL Music</span>
              <span>➕</span>
            </button>
          </div>
        ) : (
          <div className="space-y-2">
            <div className="flex items-center justify-between gap-2.5">
              <div className="flex items-center gap-2.5 overflow-hidden">
                {/* Play/Pause Button */}
                <button 
                  type="button"
                  onClick={toggleMusicPlay}
                  style={{
                    background: isPlayingMusic 
                      ? 'linear-gradient(135deg, #e11d48 0%, #f43f5e 100%)' 
                      : 'linear-gradient(135deg, #18181b 0%, #27272a 100%)',
                    boxShadow: '0 4px 15px rgba(225, 29, 72, 0.35)'
                  }}
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full text-white flex items-center justify-center text-xs sm:text-sm shadow-md hover:scale-105 active:scale-95 transition cursor-pointer flex-shrink-0">
                  {isPlayingMusic ? "⏸️" : "▶️"}
                </button>

                {/* Animated Equalizer Visualizer */}
                <div className="flex items-end gap-1 h-5 px-1 flex-shrink-0">
                  <span className={`w-1 bg-rose-500 rounded-full ${isPlayingMusic ? 'eq-bar-1' : 'h-1.5'}`}></span>
                  <span className={`w-1 bg-pink-500 rounded-full ${isPlayingMusic ? 'eq-bar-2' : 'h-2.5'}`}></span>
                  <span className={`w-1 bg-rose-600 rounded-full ${isPlayingMusic ? 'eq-bar-3' : 'h-1'}`}></span>
                  <span className={`w-1 bg-amber-400 rounded-full ${isPlayingMusic ? 'eq-bar-4' : 'h-2'}`}></span>
                </div>

                {/* Track Details */}
                <div className="overflow-hidden min-w-0">
                  <p className="text-[10px] font-black uppercase tracking-wider text-rose-500 flex items-center gap-1">
                    <span>{isPlayingMusic ? "Now Playing" : "Paused"}</span>
                    <span>✨</span>
                  </p>
                  <p className="text-xs font-black text-zinc-900 truncate">
                    {musicTrackTitle}
                  </p>
                </div>
              </div>

              {/* Minimize Button */}
              <button 
                type="button"
                onClick={() => setIsMusicMinimized(true)}
                className="text-zinc-400 hover:text-zinc-700 text-xs px-1.5 py-0.5 rounded cursor-pointer"
                title="Minimize player">
                ✕
              </button>
            </div>

            {/* Controls: Volume & Custom Song Uploader */}
            <div className="flex items-center justify-between gap-2 pt-1 border-t border-rose-100 text-xs">
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] text-zinc-500">{musicVolume === 0 ? "🔇" : "🔊"}</span>
                <input 
                  type="range" 
                  min="0" 
                  max="1" 
                  step="0.05"
                  value={musicVolume}
                  onChange={(e) => handleMusicVolumeChange(parseFloat(e.target.value))}
                  className="w-14 sm:w-18 accent-rose-500 h-1 bg-rose-100 rounded-lg cursor-pointer" 
                  title="Music Volume"
                />
              </div>

              <div className="flex items-center gap-1.5">
                <input 
                  type="file" 
                  ref={musicFileInputRef}
                  onChange={handleCustomMusicUpload}
                  accept="audio/*" 
                  className="hidden" 
                />
                <button 
                  type="button"
                  onClick={() => musicFileInputRef.current?.click()}
                  className="px-2 py-0.5 rounded-full bg-rose-50 hover:bg-rose-100 text-rose-700 text-[10px] font-bold border border-rose-200 transition cursor-pointer flex items-center gap-1"
                  title="Play any MP3/WAV from your phone or computer">
                  <span>📁</span>
                  <span>Put My Song</span>
                </button>
                {musicTrack !== "studio-music.wav" && (
                  <button 
                    type="button"
                    onClick={handleResetToDefaultMusic}
                    className="text-[10px] text-zinc-400 hover:text-zinc-600 underline cursor-pointer"
                    title="Reset to default TDL sound">
                    Reset
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* 16. FLOATING LUCKY SLAY WHEEL TRIGGER BUTTON */}
      <button 
        type="button"
        onClick={() => { playCuteBubblePop(); setIsSpinWheelOpen(true); }}
        style={{
          background: 'linear-gradient(135deg, #be123c 0%, #e11d48 50%, #f43f5e 100%)',
          boxShadow: '0 8px 25px rgba(225, 29, 72, 0.45)',
          color: '#ffffff',
          border: '1.5px solid rgba(255, 255, 255, 0.7)'
        }}
        className="fixed bottom-6 right-6 z-40 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-full flex items-center gap-2 cursor-pointer hover:scale-105 active:scale-95 transition-all shadow-xl font-black text-xs tracking-wide">
        <span className="text-base animate-bounce">🎡</span>
        <span className="hidden sm:inline">Spin for Discount</span>
        <span>✨</span>
      </button>

      {/* 18. LUCKY SLAY FORTUNE WHEEL MODAL */}
      {isSpinWheelOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 overflow-y-auto">
          <div className="glass-panel p-6 sm:p-8 rounded-[36px] max-w-md w-full border border-pink-200 shadow-2xl relative text-center">
            
            {/* Close Button */}
            <button 
              type="button" 
              onClick={() => setIsSpinWheelOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-600 font-black text-sm flex items-center justify-center cursor-pointer">
              ✕
            </button>

            <span className="text-[11px] font-black uppercase tracking-widest text-rose-500 block mb-1">
              ✨ Lagos Babe Lucky Wheel
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-zinc-900 font-serif-lux mb-2">
              Spin &amp; Win Slay Perks! 🎡
            </h3>
            <p className="text-xs text-zinc-600 mb-6">
              Spin our luxury wheel to unlock instant discounts, free gel nails, or revamp vouchers for your booking!
            </p>

            {/* Visual Spinning Wheel */}
            <div className="relative w-64 h-64 mx-auto mb-6 flex items-center justify-center">
              {/* Top Pointer Arrow */}
              <div className="absolute -top-3 z-30 flex flex-col items-center">
                <div className="w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[20px] border-t-rose-600 filter drop-shadow-md animate-bounce"></div>
              </div>

              {/* Rotating Wheel Container */}
              <div 
                className="w-64 h-64 rounded-full border-4 border-white shadow-2xl overflow-hidden relative"
                style={{
                  transform: `rotate(${wheelRotation}deg)`,
                  transition: isSpinning ? "transform 3.8s cubic-bezier(0.15, 0.9, 0.25, 1)" : "none",
                  boxShadow: "0 0 30px rgba(225, 29, 72, 0.35)"
                }}>
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  {WHEEL_PRIZES.map((prize, idx) => {
                    const startAngle = idx * 60;
                    const endAngle = (idx + 1) * 60;
                    const x1 = 50 + 50 * Math.cos((Math.PI * (startAngle - 90)) / 180);
                    const y1 = 50 + 50 * Math.sin((Math.PI * (startAngle - 90)) / 180);
                    const x2 = 50 + 50 * Math.cos((Math.PI * (endAngle - 90)) / 180);
                    const y2 = 50 + 50 * Math.sin((Math.PI * (endAngle - 90)) / 180);
                    const path = `M 50 50 L ${x1} ${y1} A 50 50 0 0 1 ${x2} ${y2} Z`;
                    
                    const midAngle = startAngle + 30;
                    const textX = 50 + 32 * Math.cos((Math.PI * (midAngle - 90)) / 180);
                    const textY = 50 + 32 * Math.sin((Math.PI * (midAngle - 90)) / 180);

                    return (
                      <g key={prize.code}>
                        <path d={path} fill={prize.color} stroke="#ffffff" strokeWidth="1.5" />
                        <text
                          x={textX}
                          y={textY}
                          fill="#ffffff"
                          fontSize="5.5"
                          fontWeight="900"
                          textAnchor="middle"
                          dominantBaseline="central"
                          transform={`rotate(${midAngle + 90}, ${textX}, ${textY})`}>
                          {prize.label}
                        </text>
                      </g>
                    );
                  })}
                </svg>

                {/* Center Hub */}
                <div className="absolute inset-0 m-auto w-12 h-12 rounded-full bg-white border-2 border-rose-300 shadow-lg flex items-center justify-center font-black text-rose-600 text-xs">
                  TDL
                </div>
              </div>
            </div>

            {/* Action / Result */}
            {wonWheelPrize ? (
              <div className="space-y-3 bg-rose-50/80 p-4 rounded-2xl border border-rose-200">
                <span className="text-2xl animate-bounce block">🎉</span>
                <h4 className="text-lg font-black text-rose-600 font-serif-lux">
                  YOU WON: {wonWheelPrize.label}!
                </h4>
                <p className="text-xs text-zinc-600 font-medium">
                  {wonWheelPrize.desc} • Promo Code: <strong className="font-mono text-zinc-900 bg-white px-2 py-0.5 rounded border border-rose-200">{wonWheelPrize.code}</strong>
                </p>
                <button
                  type="button"
                  onClick={handleApplyWheelPrize}
                  style={{ backgroundColor: '#e11d48' }}
                  className="w-full py-3 rounded-full text-white font-black text-xs sm:text-sm shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition cursor-pointer">
                  Claim &amp; Apply Discount to Booking 💖
                </button>
              </div>
            ) : (
              <button
                type="button"
                disabled={isSpinning}
                onClick={handleSpinWheel}
                style={{
                  backgroundColor: '#e11d48',
                  background: 'linear-gradient(135deg, #e11d48 0%, #f43f5e 50%, #be123c 100%)',
                  color: '#ffffff',
                  boxShadow: '0 6px 20px rgba(225, 29, 72, 0.45)'
                }}
                className="w-full py-3.5 rounded-full text-white font-black text-sm uppercase tracking-wider shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition cursor-pointer disabled:opacity-50">
                {isSpinning ? "Spinning Lucky Wheel... 🎡" : "SPIN THE SLAY WHEEL! 🎡✨"}
              </button>
            )}

          </div>
        </div>
      )}

      {/* 19. LIVE LAGOS SOCIAL PROOF ACTIVITY TICKER */}
      {isSocialProofVisible && (
        <div 
          onClick={() => bookingSectionRef.current?.scrollIntoView({ behavior: "smooth" })}
          style={{
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(12px)',
            border: '1.5px solid rgba(251, 113, 133, 0.4)',
            boxShadow: '0 8px 25px rgba(0, 0, 0, 0.08)'
          }}
          className="fixed bottom-5 left-1/2 transform -translate-x-1/2 z-30 hidden lg:flex items-center gap-2.5 px-4 py-2 rounded-full text-xs transition-all shadow-lg cursor-pointer hover:scale-105">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
          <span className="text-sm">{SOCIAL_PROOF_EVENTS[socialProofIndex].icon}</span>
          <span className="text-zinc-700 font-medium">
            <strong className="text-zinc-900 font-bold">{SOCIAL_PROOF_EVENTS[socialProofIndex].client}</strong> from {SOCIAL_PROOF_EVENTS[socialProofIndex].area} booked <span className="text-rose-600 font-bold">{SOCIAL_PROOF_EVENTS[socialProofIndex].service}</span>
          </span>
          <span className="text-[10px] text-zinc-400 font-mono">({SOCIAL_PROOF_EVENTS[socialProofIndex].time})</span>
          <button 
            type="button"
            onClick={(e) => { e.stopPropagation(); setIsSocialProofVisible(false); }}
            className="text-zinc-400 hover:text-zinc-700 ml-1 text-xs cursor-pointer">
            ✕
          </button>
        </div>
      )}

      {/* 20. MOBILE STICKY QUICK-BOOKING BAR */}
      {showMobileStickyBar && (
        <div 
          style={{
            background: 'rgba(255, 255, 255, 0.97)',
            backdropFilter: 'blur(16px)',
            boxShadow: '0 -4px 20px rgba(0, 0, 0, 0.08)'
          }}
          className="fixed bottom-0 left-0 right-0 z-40 md:hidden border-t border-rose-200 px-4 py-2 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl gradient-babe text-white font-black text-xs flex items-center justify-center shadow-xs">
              TDL
            </div>
            <div>
              <p className="text-xs font-black text-zinc-900 leading-tight">The Damian Label</p>
              <p className="text-[10px] text-rose-500 font-bold">Ago Palace Way, Lagos</p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => {
              playCuteGirlySound();
              bookingSectionRef.current?.scrollIntoView({ behavior: "smooth" });
            }}
            style={{
              backgroundColor: '#e11d48',
              background: 'linear-gradient(135deg, #e11d48 0%, #f43f5e 100%)',
              color: '#ffffff',
              boxShadow: '0 4px 14px rgba(225, 29, 72, 0.4)'
            }}
            className="px-5 py-2 rounded-full text-white font-black text-xs shadow-md active:scale-95 cursor-pointer">
            Book Slay ✨
          </button>
        </div>
      )}
    </div>
  );
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = App;
}

// Render with error boundary wrapper
if (typeof ReactDOM !== 'undefined' && document.getElementById('root')) {
  const WrappedApp = function() {
    return React.createElement(AppErrorBoundary, null, React.createElement(App));
  };
  window.__TDL_APP_MOUNTED__ = true;
}
