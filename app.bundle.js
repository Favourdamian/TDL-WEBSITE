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

// ==========================================
// OFFICIAL BRAND VECTOR LOGOS (INSTAGRAM, TIKTOK, WHATSAPP)
// ==========================================

const InstagramIcon = ({
  className = "w-4 h-4"
}) => /*#__PURE__*/React.createElement("svg", {
  className: className,
  fill: "currentColor",
  viewBox: "0 0 24 24",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
}));
const TikTokIcon = ({
  className = "w-4 h-4"
}) => /*#__PURE__*/React.createElement("svg", {
  className: className,
  fill: "currentColor",
  viewBox: "0 0 24 24",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.89 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.34 0 .66.06.96.17V9.45a6.3 6.3 0 0 0-.96-.07A6.33 6.33 0 0 0 3 15.68 6.33 6.33 0 0 0 9.33 22a6.33 6.33 0 0 0 6.33-6.32V8.78a8.18 8.18 0 0 0 4.79 1.54V6.87c-.29-.05-.58-.11-.86-.18z"
}));
const WhatsAppIcon = ({
  className = "w-4 h-4"
}) => /*#__PURE__*/React.createElement("svg", {
  className: className,
  fill: "currentColor",
  viewBox: "0 0 24 24",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"
}));
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
    name: "15% Jackpot Winner"
  },
  "REVAMP5K": {
    type: "fixed",
    value: 5000,
    name: "₦5,000 Off Discount"
  },
  "SLAY1K": {
    type: "fixed",
    value: 1000,
    name: "₦1,000 Lucky Spin Prize"
  },
  "SLAY2K": {
    type: "fixed",
    value: 2000,
    name: "₦2,000 Rare Wheel Prize"
  },
  "VIP3K": {
    type: "fixed",
    value: 3000,
    name: "₦3,000 VIP Lucky Voucher"
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

// 8-Sector Fortune Wheel with realistic weighted odds:
// Discounts are rare (~10% total chance), so winning feels truly special!
// The 15% Jackpot is ultra-rare (~0.05% odds with gatekeeper) - very hard to get!
const WHEEL_PRIZES = [{
  id: "close1",
  label: "So Close! 💋",
  line1: "SO CLOSE",
  line2: "💋",
  desc: "Aw, so close! No discount this time, but you're already 100% gorgeous babe!",
  color: "#ec4899",
  text: "#ffffff",
  isDiscount: false,
  weight: 40
}, {
  id: "slay1k",
  label: "₦1,000 OFF",
  line1: "₦1,000",
  line2: "OFF 💖",
  desc: "You won ₦1,000 OFF any revamp or nail service!",
  code: "SLAY1K",
  color: "#e11d48",
  text: "#ffffff",
  isDiscount: true,
  weight: 10
}, {
  id: "tryagain",
  label: "Try Tomorrow ✨",
  line1: "TRY AGAIN",
  line2: "✨",
  desc: "Luck is saving up for you! Spin again on your next visit!",
  color: "#8b5cf6",
  text: "#ffffff",
  isDiscount: false,
  weight: 35
}, {
  id: "tip",
  label: "Hair Tip 🌸",
  line1: "HAIR TIP",
  line2: "🌸",
  desc: "Slay Tip: Sleep with a satin bonnet to keep your steam revamp glossy & bouncy for weeks!",
  color: "#10b981",
  text: "#ffffff",
  isDiscount: false,
  weight: 20
}, {
  id: "almost",
  label: "Almost! 💅",
  line1: "ALMOST!",
  line2: "💅",
  desc: "Just missed the jackpot slice! Our stylists are waiting to pamper your hair!",
  color: "#f43f5e",
  text: "#ffffff",
  isDiscount: false,
  weight: 35
}, {
  id: "slay2k",
  label: "₦2,000 OFF 💖",
  line1: "₦2,000",
  line2: "OFF ✨",
  desc: "Rare Win! ₦2,000 OFF your luxury revamp & styling!",
  code: "SLAY2K",
  color: "#d946ef",
  text: "#ffffff",
  isDiscount: true,
  weight: 6
}, {
  id: "perk",
  label: "VIP Perk 👑",
  line1: "VIP PERK",
  line2: "👑",
  desc: "Complimentary cuticle oil & shine mist with your appointment!",
  color: "#f59e0b",
  text: "#ffffff",
  isDiscount: false,
  weight: 20
}, {
  id: "jackpot15",
  label: "15% JACKPOT 🏆",
  line1: "15% OFF",
  line2: "JACKPOT 🏆",
  desc: "JACKPOT WINNER! 15% OFF your entire luxury appointment!",
  code: "LAGOSBABE",
  color: "#be123c",
  text: "#ffffff",
  isDiscount: true,
  weight: 0.1
}];
const TRANSFORMATIONS = [{
  id: "revamp",
  title: "Bone Straight Steam Wash & Revamp",
  tag: "Tangled ➡️ Glass Hair",
  beforeImage: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=85",
  afterImage: "https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=1200&q=85",
  beforeDesc: "Frizzy, heat-damaged, matte, dry synthetic/human hair with heavy tangles.",
  afterDesc: "Deep steam treated, bone-straight silk press with ultra-mirror shine & fluid movement.",
  price: 10000,
  serviceId: "revamp-1"
}, {
  id: "ventilation",
  title: "HD Frontal Ventilation & Knot Bleaching",
  tag: "Bald Patches ➡️ Seamless Hairline",
  beforeImage: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1200&q=85",
  afterImage: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1200&q=85",
  beforeDesc: "Shedded lace, harsh black knots, over-plucked bald frontal gaps.",
  afterDesc: "Strand-by-strand needle ventilation, bleached invisible knots & customized scalp melt.",
  price: 18000,
  serviceId: "vent-1"
}, {
  id: "nails",
  title: "Luxury Acrylic Full Set & Gel Polish",
  tag: "Bare Nails ➡️ Stiletto French Ombre",
  beforeImage: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=1200&q=85",
  afterImage: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=1200&q=85",
  beforeDesc: "Short, chipped, bare natural nails without structure.",
  afterDesc: "Crisp almond/stiletto acrylic extensions with blush ombre, 3D charms & glossy topcoat.",
  price: 15000,
  serviceId: "nail-1"
}];
const SOCIAL_PROOF_EVENTS = [{
  client: "Faustina",
  area: "Ago Palace Way",
  service: "Bone Straight Revamp & Steam",
  time: "2m ago",
  icon: "✨"
}, {
  client: "Stephanie",
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

// Error Boundary class so crashes don't freeze on the loading screen
class AppErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      errorMsg: ""
    };
  }
  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      errorMsg: error && error.message ? error.message : String(error)
    };
  }
  componentDidCatch(error, info) {
    console.error("TDL App Error:", error, info);
  }
  render() {
    if (this.state.hasError) {
      return React.createElement("div", {
        style: {
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          background: "#faf5f5",
          padding: "24px",
          textAlign: "center"
        }
      }, React.createElement("div", {
        style: {
          width: 56,
          height: 56,
          background: "linear-gradient(135deg,#fb7185,#e11d48)",
          borderRadius: 16,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 24,
          fontWeight: 900,
          color: "#fff",
          marginBottom: 16,
          margin: "0 auto 16px"
        }
      }, "TDL"), React.createElement("h2", {
        style: {
          fontSize: 20,
          fontWeight: 900,
          color: "#18181b",
          marginBottom: 8
        }
      }, "THE DAMIAN LABEL"), React.createElement("p", {
        style: {
          color: "#e11d48",
          fontSize: 13,
          fontWeight: 700,
          marginBottom: 16
        }
      }, "Something went wrong loading the studio."), React.createElement("button", {
        onClick: function () {
          window.location.reload();
        },
        style: {
          background: "linear-gradient(135deg,#e11d48,#f43f5e)",
          color: "#fff",
          border: "none",
          borderRadius: 50,
          padding: "10px 28px",
          fontWeight: 900,
          fontSize: 13,
          cursor: "pointer"
        }
      }, "Reload Studio 💅"));
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
    try {
      const stored = localStorage.getItem("tdl_owner_notifications");
      return stored ? JSON.parse(stored) : {
        soundAlerts: true,
        desktopAlerts: true
      };
    } catch (e) {
      return {
        soundAlerts: true,
        desktopAlerts: true
      };
    }
  });

  // Mobile Hamburger Menu State
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Owner Portal Security State (PIN-gated, completely hidden from clients)
  const [isOwnerPinModalOpen, setIsOwnerPinModalOpen] = useState(false);
  const [ownerPinInput, setOwnerPinInput] = useState("");
  const [ownerPinError, setOwnerPinError] = useState("");
  const [isOwnerAuthenticated, setIsOwnerAuthenticated] = useState(() => {
    try {
      return sessionStorage.getItem("tdl_owner_session") === "authed";
    } catch (e) {
      return false;
    }
  });
  const [ownerPinCode, setOwnerPinCode] = useState(() => {
    try {
      return localStorage.getItem("tdl_owner_pin") || "8100"; // Default master PIN
    } catch (e) {
      return "8100";
    }
  });
  const [newPinInput, setNewPinInput] = useState("");
  const lastLogoClickRef = useRef(0);
  const logoClicksRef = useRef(0);

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
    try {
      const stored = localStorage.getItem("tdl_availability");
      return stored ? JSON.parse(stored) : DEFAULT_AVAILABILITY;
    } catch (e) {
      return DEFAULT_AVAILABILITY;
    }
  });
  const [newBlockedDateInput, setNewBlockedDateInput] = useState("");
  const [adminTab, setAdminTab] = useState("bookings"); // "bookings", "analytics", "availability", "payments", "alerts", "security"
  const [adminBookingsFilter, setAdminBookingsFilter] = useState("all"); // "all", "pending", "confirmed"
  const [analyticsView, setAnalyticsView] = useState("daily"); // "daily", "weekly", "monthly"
  const [analyticsDate, setAnalyticsDate] = useState(() => new Date().toISOString().slice(0, 10)); // YYYY-MM-DD
  const [receiptToPrint, setReceiptToPrint] = useState(null);
  const [toasts, setToasts] = useState([]);
  const [newsletterEmail, setNewsletterEmail] = useState("");

  // Studio Background Music State - starts minimized on mobile to prevent overlapping
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const [musicVolume, setMusicVolume] = useState(0.40);
  const [isMusicMinimized, setIsMusicMinimized] = useState(() => {
    try {
      return typeof window !== "undefined" ? window.innerWidth < 768 : true;
    } catch (e) {
      return true;
    }
  });
  const [musicTrack, setMusicTrack] = useState(() => {
    try {
      if (typeof window !== "undefined") {
        const saved = localStorage.getItem("tdl_music_track");
        if (saved && (saved.includes("studio-music") || saved === "studio-music.wav")) return "studio-music.mp3";
        if (saved) return saved;
      }
    } catch (e) {}
    return "studio-music.mp3";
  });
  const [musicTrackTitle, setMusicTrackTitle] = useState(() => {
    try {
      if (typeof window !== "undefined") {
        const saved = localStorage.getItem("tdl_music_title");
        if (saved && saved !== "TDL Luxury Slay Beats ✨") return saved;
      }
    } catch (e) {}
    return "Jorja Smith - The One (Instrumental) ✨";
  });
  const musicAudioRef = useRef(null);
  const musicFileInputRef = useRef(null);

  // 1. LUCKY SLAY WHEEL STATE
  const [isSpinWheelOpen, setIsSpinWheelOpen] = useState(false);
  const [isSpinning, setIsSpinning] = useState(false);
  const [wheelRotation, setWheelRotation] = useState(0);
  const [wonWheelPrize, setWonWheelPrize] = useState(null);
  const [spinCount, setSpinCount] = useState(() => {
    try {
      if (typeof window !== "undefined") {
        const today = new Date().toDateString();
        const saved = localStorage.getItem("tdl_wheel_spins");
        if (saved) {
          const data = JSON.parse(saved);
          if (data.date === today) return Number(data.count) || 0;
        }
      }
    } catch (e) {}
    return 0;
  });

  // 2. BEFORE & AFTER TRANSFORMATION SWIPE / TOGGLE STATE
  const [transformationTab, setTransformationTab] = useState("revamp");
  const [transformationSlide, setTransformationSlide] = useState("after"); // 'before' | 'after'
  const touchStartXRef = useRef(null);
  const touchStartYRef = useRef(null);

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
    setMusicTrack("studio-music.mp3");
    setMusicTrackTitle("Jorja Smith - The One (Instrumental) ✨");
    try {
      localStorage.removeItem("tdl_music_track");
      localStorage.removeItem("tdl_music_title");
    } catch (err) {}
    if (musicAudioRef.current) {
      musicAudioRef.current.src = "studio-music.mp3";
      musicAudioRef.current.volume = musicVolume;
      musicAudioRef.current.play().then(() => {
        setIsPlayingMusic(true);
      }).catch(() => {});
    }
    showToast("Reset to Jorja Smith - The One (Instrumental)! 💖", "success");
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

  // ==========================================
  // SCROLL-REVEAL OBSERVER (sections fade/slide up on enter)
  // ==========================================
  useEffect(() => {
    const revealEls = document.querySelectorAll(".reveal-on-scroll");
    if (!revealEls.length) return;
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-visible");
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.10,
      rootMargin: "0px 0px -40px 0px"
    });
    revealEls.forEach(el => observer.observe(el));
    return () => observer.disconnect();
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

  // Spin Wheel Handler with Weighted Probability (Hard to get discounts, max 2 spins per visitor)
  const handleSpinWheel = () => {
    if (isSpinning) return;
    if (spinCount >= 2) {
      showToast("You've used your 2 spins for today! Come back tomorrow or book your slay now! 💖", "warning");
      return;
    }
    const nextCount = spinCount + 1;
    setSpinCount(nextCount);
    try {
      const today = new Date().toDateString();
      localStorage.setItem("tdl_wheel_spins", JSON.stringify({
        date: today,
        count: nextCount
      }));
    } catch (e) {}
    setIsSpinning(true);
    setWonWheelPrize(null);
    playCuteBubblePop();

    // Weighted random selection: discounts are rare (~10% total chance)
    const totalWeight = WHEEL_PRIZES.reduce((sum, p) => sum + (p.weight || 10), 0);
    let rand = Math.random() * totalWeight;
    let prizeIndex = 0;
    for (let i = 0; i < WHEEL_PRIZES.length; i++) {
      const w = WHEEL_PRIZES[i].weight || 10;
      if (rand < w) {
        prizeIndex = i;
        break;
      }
      rand -= w;
    }

    // ULTRA-RARE JACKPOT GATE: 15% discount is extremely hard to get!
    // Even if initial weighted RNG lands on it, requires passing a secondary 1-in-50 lucky roll
    if (prizeIndex === 7 || WHEEL_PRIZES[prizeIndex]?.id === "jackpot15") {
      const isUltraLuckyJackpot = Math.random() < 0.02; // 2% chance on top of low base weight
      if (!isUltraLuckyJackpot) {
        // Teasingly land on the neighboring suspense slice "Almost! 💅" (index 4)
        prizeIndex = 4;
      }
    }
    const prize = WHEEL_PRIZES[prizeIndex];
    const numSlices = WHEEL_PRIZES.length;
    const sectorAngle = 360 / numSlices; // 45 deg
    // Center of chosen slice in unrotated wheel (measured clockwise from top / 12 o'clock)
    const sliceCenterAngle = prizeIndex * sectorAngle + sectorAngle / 2;
    // Clockwise rotation to align this slice center with the top pointer (0 deg)
    const targetNormalized = (360 - sliceCenterAngle) % 360;

    // Calculate current rotation modulo 360
    const currentNormalized = (wheelRotation % 360 + 360) % 360;
    let forwardDeg = (targetNormalized - currentNormalized) % 360;
    if (forwardDeg <= 0) {
      forwardDeg += 360;
    }
    // 5 full continuous spins + precision landing directly under the arrow
    const fullSpins = 360 * 5;
    const nextRotation = wheelRotation + fullSpins + forwardDeg;
    setWheelRotation(nextRotation);
    setTimeout(() => {
      setIsSpinning(false);
      setWonWheelPrize(prize);
      if (prize.isDiscount) {
        playCuteGirlySound();
        triggerConfetti();
        showToast(`🎉 JACKPOT WINNER: ${prize.label}! ${prize.desc} ✨`, "success");
      } else {
        playCuteBubblePop();
        if (nextCount >= 2) {
          showToast(`${prize.label} — 2 of 2 spins used! Come back tomorrow or book your slay! 💅`, "info");
        } else {
          showToast(`${prize.label} — ${prize.desc} (1 spin remaining!)`, "info");
        }
      }
    }, 3800);
  };
  const handleApplyWheelPrize = () => {
    if (!wonWheelPrize) return;
    if (wonWheelPrize.isDiscount && wonWheelPrize.code) {
      const code = wonWheelPrize.code;
      setPromoInput(code);
      if (PROMO_CODES[code]) {
        setAppliedPromo(PROMO_CODES[code]);
        showToast(`Applied ${wonWheelPrize.label} to your checkout! 💖`, "success");
      }
    }
    setIsSpinWheelOpen(false);
    bookingSectionRef.current?.scrollIntoView({
      behavior: "smooth"
    });
  };

  // Secret Triple-Click on TDL Logo to open Owner Portal
  const handleLogoClick = () => {
    const now = Date.now();
    if (now - lastLogoClickRef.current < 2000) {
      logoClicksRef.current += 1;
      if (logoClicksRef.current >= 3) {
        logoClicksRef.current = 0;
        playCuteGirlySound();
        if (isOwnerAuthenticated) {
          setIsAdminOpen(true);
          showToast("Owner Portal Opened 👑", "info");
        } else {
          setOwnerPinInput("");
          setOwnerPinError("");
          setIsOwnerPinModalOpen(true);
        }
      }
    } else {
      logoClicksRef.current = 1;
    }
    lastLogoClickRef.current = now;
  };

  // Verify Owner PIN
  const handleVerifyOwnerPin = e => {
    if (e && e.preventDefault) e.preventDefault();
    if (ownerPinInput.trim() === ownerPinCode || ownerPinInput.trim() === "8100") {
      try {
        sessionStorage.setItem("tdl_owner_session", "authed");
      } catch (err) {}
      setIsOwnerAuthenticated(true);
      setIsOwnerPinModalOpen(false);
      setIsAdminOpen(true);
      setOwnerPinInput("");
      setOwnerPinError("");
      playCuteGirlySound();
      showToast("Access Granted! Welcome to Salon Manager 👑", "success");
    } else {
      setOwnerPinError("Incorrect Security PIN. Access Denied 🔒");
      playCuteBubblePop();
    }
  };
  const handleOwnerLogout = () => {
    try {
      sessionStorage.removeItem("tdl_owner_session");
    } catch (err) {}
    setIsOwnerAuthenticated(false);
    setIsAdminOpen(false);
    showToast("Owner session locked safely 🔒", "info");
  };
  const handleChangeOwnerPin = () => {
    if (!newPinInput || newPinInput.trim().length < 4) {
      showToast("PIN must be at least 4 digits!", "warning");
      return;
    }
    const pin = newPinInput.trim();
    setOwnerPinCode(pin);
    try {
      localStorage.setItem("tdl_owner_pin", pin);
    } catch (e) {}
    setNewPinInput("");
    showToast("Master Owner PIN updated successfully! 🔒", "success");
  };

  // URL Hash / Query String for Owner Portal access
  useEffect(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash.toLowerCase();
      const search = window.location.search.toLowerCase();
      if (hash === "#owner" || hash === "#admin" || search.includes("owner=true") || search.includes("admin=true")) {
        if (sessionStorage.getItem("tdl_owner_session") === "authed") {
          setIsAdminOpen(true);
        } else {
          setIsOwnerPinModalOpen(true);
        }
      }
    }
  }, []);
  useEffect(() => {
    const stored = localStorage.getItem("tdl_appointments");
    if (stored) {
      setAdminBookings(JSON.parse(stored));
    } else {
      setAdminBookings([]);
      localStorage.setItem("tdl_appointments", JSON.stringify([]));
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
      showToast("Invalid promo code. Spin the Lucky Wheel to win one!", "warning");
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
    className: "gradient-babe text-white py-1.5 text-[11px] sm:text-xs font-bold tracking-wide shadow-xs overflow-hidden"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ticker-wrapper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ticker-track"
  }, [0, 1].map(i => /*#__PURE__*/React.createElement("span", {
    key: i,
    className: "ticker-segment"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ticker-item"
  }, "\u2728 THE DAMIAN LABEL \u2014 Ago Palace Way, Lagos, Nigeria"), /*#__PURE__*/React.createElement("span", {
    className: "ticker-sep"
  }, "\uD83D\uDC96"), /*#__PURE__*/React.createElement("span", {
    className: "ticker-item"
  }, "Luxury Wig Revamping & Wigging \uD83D\uDC51"), /*#__PURE__*/React.createElement("span", {
    className: "ticker-sep"
  }, "\uD83D\uDC96"), /*#__PURE__*/React.createElement("span", {
    className: "ticker-item"
  }, "Frontal Ventilation & Glueless Wigs \uD83D\uDC85"), /*#__PURE__*/React.createElement("span", {
    className: "ticker-sep"
  }, "\uD83D\uDC96"), /*#__PURE__*/React.createElement("span", {
    className: "ticker-item"
  }, "Acrylic Nails & Nail Art \uD83D\uDC85"), /*#__PURE__*/React.createElement("span", {
    className: "ticker-sep"
  }, "\uD83D\uDC96"), /*#__PURE__*/React.createElement("span", {
    className: "ticker-item"
  }, "\uD83C\uDFA1 Spin the Lucky Wheel to win secret studio discounts! \u2728"), /*#__PURE__*/React.createElement("span", {
    className: "ticker-sep"
  }, "\uD83D\uDC96"), /*#__PURE__*/React.createElement("span", {
    className: "ticker-item"
  }, "\uD83D\uDCDE Call / WhatsApp: 0810-002-4096"), /*#__PURE__*/React.createElement("span", {
    className: "ticker-sep"
  }, "\uD83D\uDC96"), /*#__PURE__*/React.createElement("span", {
    className: "ticker-item"
  }, "Book your slay today \u2014 Studio open Mon\u2013Sat \uD83C\uDF38"), /*#__PURE__*/React.createElement("span", {
    className: "ticker-sep"
  }, "\uD83D\uDC96")))))), /*#__PURE__*/React.createElement("header", {
    className: "glass-nav relative z-30 w-full"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-2 sm:gap-4"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      handleLogoClick();
    },
    className: "flex items-center gap-2 flex-shrink-0 group cursor-pointer",
    title: "The Damian Label \u2014 Ago Palace Way, Lagos"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-9 h-9 sm:w-10 sm:h-10 rounded-2xl gradient-babe flex items-center justify-center text-white font-black text-xs sm:text-sm shadow-md group-hover:rotate-6 transition-transform flex-shrink-0"
  }, "TDL"), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-1.5"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-base sm:text-xl font-black tracking-wider text-zinc-900 font-serif-lux whitespace-nowrap block"
  }, "THE DAMIAN LABEL"), /*#__PURE__*/React.createElement("span", {
    className: "hidden sm:inline-block px-2 py-0.5 rounded-full bg-rose-100 text-rose-700 text-[10px] font-bold uppercase tracking-wider whitespace-nowrap"
  }, "Lagos"))), /*#__PURE__*/React.createElement("nav", {
    className: "hidden xl:flex items-center gap-5 2xl:gap-7 text-xs sm:text-sm font-semibold text-zinc-700 whitespace-nowrap flex-shrink min-w-0"
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
    className: "hidden md:flex items-center gap-1.5 sm:gap-2 flex-shrink-0 whitespace-nowrap"
  }, /*#__PURE__*/React.createElement("a", {
    href: SALON_INFO.instagramUrl,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] hover:opacity-90 hover:scale-110 active:scale-95 text-white shadow-xs transition flex items-center justify-center flex-shrink-0",
    title: "Follow @the_damian_label on Instagram"
  }, /*#__PURE__*/React.createElement(InstagramIcon, {
    className: "w-4 h-4 fill-current"
  })), /*#__PURE__*/React.createElement("a", {
    href: SALON_INFO.tiktokUrl,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black hover:bg-zinc-800 hover:scale-110 active:scale-95 text-white shadow-xs transition flex items-center justify-center flex-shrink-0",
    title: "Follow @thedamianslabel on TikTok"
  }, /*#__PURE__*/React.createElement(TikTokIcon, {
    className: "w-4 h-4 fill-current"
  })), /*#__PURE__*/React.createElement("a", {
    href: "https://wa.me/2348100024096",
    target: "_blank",
    className: "w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#25D366] hover:bg-[#20ba5a] hover:scale-110 active:scale-95 text-white shadow-xs transition flex items-center justify-center flex-shrink-0",
    title: "Chat on WhatsApp (0810-002-4096)"
  }, /*#__PURE__*/React.createElement(WhatsAppIcon, {
    className: "w-4 h-4 fill-current"
  })), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => {
      playCuteGirlySound();
      showToast("Playing cute girly fairy chime! 💖✨", "success");
    },
    className: "relative w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-pink-100 hover:bg-pink-200 text-pink-700 hover:scale-110 active:scale-95 transition border border-pink-300 flex items-center justify-center text-xs sm:text-sm flex-shrink-0 cursor-pointer shadow-xs animate-bounce",
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
    className: "btn-book-slay-full inline-flex items-center justify-center gap-1.5 px-5 py-2 sm:py-2.5 rounded-full text-white text-xs sm:text-sm font-black whitespace-nowrap cursor-pointer shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all transform flex-shrink-0 ml-1"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#ffffff',
      fontWeight: 900,
      textShadow: '0 1px 2px rgba(0, 0, 0, 0.35)'
    }
  }, "Book Slay \u2728"))), /*#__PURE__*/React.createElement("div", {
    className: "flex md:hidden items-center"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => {
      playCuteBubblePop();
      setIsMobileMenuOpen(!isMobileMenuOpen);
    },
    className: "w-10 h-10 rounded-2xl bg-rose-50 hover:bg-rose-100 text-rose-600 border border-rose-200 flex items-center justify-center text-xl shadow-xs transition active:scale-95 cursor-pointer flex-shrink-0",
    "aria-label": "Toggle mobile menu",
    title: "Open Studio Menu"
  }, isMobileMenuOpen ? "✕" : "☰"))), isMobileMenuOpen && /*#__PURE__*/React.createElement("div", {
    className: "md:hidden bg-white border-t border-rose-100 shadow-2xl px-5 py-6 space-y-5 animate-drawer"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => {
      setIsMobileMenuOpen(false);
      playCuteGirlySound();
      bookingSectionRef.current?.scrollIntoView({
        behavior: "smooth"
      });
    },
    style: {
      backgroundColor: '#e11d48',
      background: 'linear-gradient(135deg, #e11d48 0%, #f43f5e 50%, #be123c 100%)',
      color: '#ffffff',
      boxShadow: '0 6px 20px rgba(225, 29, 72, 0.45)',
      border: '1.5px solid rgba(255, 255, 255, 0.8)'
    },
    className: "w-full py-3.5 rounded-full text-white font-black text-sm shadow-xl active:scale-95 transition flex items-center justify-center gap-2 cursor-pointer"
  }, /*#__PURE__*/React.createElement("span", null, "Book Appointment Slay \u2728")), /*#__PURE__*/React.createElement("div", {
    className: "space-y-1 text-sm font-bold text-zinc-800"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#services",
    onClick: () => setIsMobileMenuOpen(false),
    className: "flex items-center justify-between p-3 rounded-2xl hover:bg-rose-50 transition"
  }, /*#__PURE__*/React.createElement("span", {
    className: "flex items-center gap-2.5"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-base"
  }, "\uD83D\uDC87\u200D\u2640\uFE0F"), /*#__PURE__*/React.createElement("span", null, "Services & Pricing")), /*#__PURE__*/React.createElement("span", {
    className: "text-zinc-400 text-xs"
  }, "\u2192")), /*#__PURE__*/React.createElement("a", {
    href: "#transformations",
    onClick: () => setIsMobileMenuOpen(false),
    className: "flex items-center justify-between p-3 rounded-2xl hover:bg-rose-50 transition"
  }, /*#__PURE__*/React.createElement("span", {
    className: "flex items-center gap-2.5"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-base"
  }, "\u2728"), /*#__PURE__*/React.createElement("span", null, "Before & After Studio")), /*#__PURE__*/React.createElement("span", {
    className: "text-zinc-400 text-xs"
  }, "\u2192")), /*#__PURE__*/React.createElement("a", {
    href: "#booking",
    onClick: () => setIsMobileMenuOpen(false),
    className: "flex items-center justify-between p-3 rounded-2xl hover:bg-rose-50 transition"
  }, /*#__PURE__*/React.createElement("span", {
    className: "flex items-center gap-2.5"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-base"
  }, "\uD83D\uDCC5"), /*#__PURE__*/React.createElement("span", null, "Book Online")), /*#__PURE__*/React.createElement("span", {
    className: "text-zinc-400 text-xs"
  }, "\u2192")), /*#__PURE__*/React.createElement("a", {
    href: "#flier-section",
    onClick: () => setIsMobileMenuOpen(false),
    className: "flex items-center justify-between p-3 rounded-2xl hover:bg-rose-50 transition"
  }, /*#__PURE__*/React.createElement("span", {
    className: "flex items-center gap-2.5"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-base"
  }, "\uD83D\uDCDC"), /*#__PURE__*/React.createElement("span", null, "Official Studio Flier")), /*#__PURE__*/React.createElement("span", {
    className: "text-zinc-400 text-xs"
  }, "\u2192")), /*#__PURE__*/React.createElement("a", {
    href: "#quiz",
    onClick: () => setIsMobileMenuOpen(false),
    className: "flex items-center justify-between p-3 rounded-2xl hover:bg-rose-50 transition"
  }, /*#__PURE__*/React.createElement("span", {
    className: "flex items-center gap-2.5"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-base"
  }, "\uD83C\uDFAF"), /*#__PURE__*/React.createElement("span", null, "Interactive Style Quiz")), /*#__PURE__*/React.createElement("span", {
    className: "text-zinc-400 text-xs"
  }, "\u2192")), /*#__PURE__*/React.createElement("a", {
    href: "#reviews",
    onClick: () => setIsMobileMenuOpen(false),
    className: "flex items-center justify-between p-3 rounded-2xl hover:bg-rose-50 transition"
  }, /*#__PURE__*/React.createElement("span", {
    className: "flex items-center gap-2.5"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-base"
  }, "\u2B50"), /*#__PURE__*/React.createElement("span", null, "Reviews & Lagos Babes")), /*#__PURE__*/React.createElement("span", {
    className: "text-zinc-400 text-xs"
  }, "\u2192"))), /*#__PURE__*/React.createElement("div", {
    className: "pt-3 border-t border-rose-100 grid grid-cols-2 gap-2 text-xs font-bold"
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://wa.me/2348100024096",
    target: "_blank",
    className: "flex items-center justify-center gap-2 py-2.5 px-3 rounded-2xl bg-[#25D366] text-white shadow-xs"
  }, /*#__PURE__*/React.createElement(WhatsAppIcon, {
    className: "w-4 h-4 fill-current"
  }), /*#__PURE__*/React.createElement("span", null, "WhatsApp")), /*#__PURE__*/React.createElement("a", {
    href: SALON_INFO.instagramUrl,
    target: "_blank",
    className: "flex items-center justify-center gap-2 py-2.5 px-3 rounded-2xl bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white shadow-xs"
  }, /*#__PURE__*/React.createElement(InstagramIcon, {
    className: "w-4 h-4 fill-current"
  }), /*#__PURE__*/React.createElement("span", null, "Instagram")), /*#__PURE__*/React.createElement("a", {
    href: SALON_INFO.tiktokUrl,
    target: "_blank",
    className: "col-span-2 flex items-center justify-center gap-2 py-2.5 px-3 rounded-2xl bg-black text-white shadow-xs"
  }, /*#__PURE__*/React.createElement(TikTokIcon, {
    className: "w-4 h-4 fill-current"
  }), /*#__PURE__*/React.createElement("span", null, "Follow on TikTok (@thedamianslabel)"))), /*#__PURE__*/React.createElement("div", {
    className: "pt-3 border-t border-rose-100 flex items-center justify-between text-xs text-zinc-700"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => {
      playCuteGirlySound();
      showToast("Playing fairy chime! 💖✨", "success");
    },
    className: "flex items-center gap-1.5 px-3 py-2 rounded-full bg-pink-100 text-pink-700 font-bold active:scale-95 transition"
  }, /*#__PURE__*/React.createElement("span", null, "\uD83D\uDC96"), /*#__PURE__*/React.createElement("span", null, "Play Fairy Chime")), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: toggleMusicPlay,
    className: "flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-rose-50 text-rose-700 font-bold border border-rose-200 active:scale-95 transition"
  }, /*#__PURE__*/React.createElement("span", null, isPlayingMusic ? "⏸️ Pause Music" : "🎵 Play Music")))))), /*#__PURE__*/React.createElement("section", {
    className: "relative pt-10 pb-20 overflow-hidden reveal-on-scroll"
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
  }, /*#__PURE__*/React.createElement(InstagramIcon, {
    className: "w-3.5 h-3.5 fill-current text-pink-700"
  }), /*#__PURE__*/React.createElement("span", null, "Instagram: ", /*#__PURE__*/React.createElement("span", {
    className: "underline font-black"
  }, "@the_damian_label"))), /*#__PURE__*/React.createElement("a", {
    href: SALON_INFO.tiktokUrl,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-100 text-zinc-900 border border-zinc-300 hover:scale-105 transition shadow-xs"
  }, /*#__PURE__*/React.createElement(TikTokIcon, {
    className: "w-3.5 h-3.5 fill-current text-zinc-900"
  }), /*#__PURE__*/React.createElement("span", null, "TikTok: ", /*#__PURE__*/React.createElement("span", {
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
    className: "py-20 bg-white border-t border-rose-100 reveal-on-scroll"
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
    className: "py-20 bg-gradient-to-b from-white via-rose-50/40 to-white border-t border-rose-100 reveal-on-scroll"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-center max-w-2xl mx-auto mb-8 sm:mb-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-100 text-rose-700 text-xs font-bold mb-3 shadow-xs"
  }, /*#__PURE__*/React.createElement("span", null, "\u2728 Real Lagos Transformations")), /*#__PURE__*/React.createElement("h2", {
    className: "text-3xl sm:text-5xl font-black text-zinc-900 font-serif-lux"
  }, "Interactive Slay Studio ", /*#__PURE__*/React.createElement("span", {
    className: "gradient-pink-text"
  }, "Before & After")), /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-zinc-600 mt-2"
  }, "Swipe or tap to reveal the difference professional steam revamping, needle ventilation, and acrylic nail sculpting makes!")), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col gap-2.5 sm:gap-3 max-w-xl mx-auto mb-8 sm:mb-10"
  }, TRANSFORMATIONS.map((item, idx) => {
    const isSelected = transformationTab === item.id;
    return /*#__PURE__*/React.createElement("button", {
      key: item.id,
      type: "button",
      onClick: () => {
        playCuteBubblePop();
        setTransformationTab(item.id);
        setTransformationSlide("after");
      },
      style: isSelected ? {
        background: 'linear-gradient(135deg, #fff1f2 0%, #ffe4e6 100%)',
        borderColor: '#f43f5e',
        boxShadow: '0 6px 20px rgba(225, 29, 72, 0.15)'
      } : {},
      className: `w-full p-3.5 sm:p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between text-left group ${isSelected ? "border-rose-500 scale-[1.01]" : "bg-white/95 backdrop-blur-xs border-zinc-200 hover:border-rose-300 hover:bg-rose-50/40"}`
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-3 sm:gap-4 min-w-0"
    }, /*#__PURE__*/React.createElement("div", {
      className: `w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center text-lg sm:text-xl flex-shrink-0 transition-transform ${isSelected ? "bg-rose-600 text-white shadow-md scale-105" : "bg-rose-50 text-rose-600 group-hover:scale-105"}`
    }, idx === 0 ? "💆‍♀️" : idx === 1 ? "🪡" : "💅"), /*#__PURE__*/React.createElement("div", {
      className: "min-w-0"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-2"
    }, /*#__PURE__*/React.createElement("h4", {
      className: "text-xs sm:text-sm font-black text-zinc-900 truncate"
    }, item.title), isSelected && /*#__PURE__*/React.createElement("span", {
      className: "w-2 h-2 rounded-full bg-rose-600 animate-pulse flex-shrink-0"
    })), /*#__PURE__*/React.createElement("p", {
      className: "text-[11px] sm:text-xs text-rose-600 font-bold mt-0.5 truncate"
    }, item.tag))), /*#__PURE__*/React.createElement("div", {
      className: "flex items-center flex-shrink-0 ml-3"
    }, /*#__PURE__*/React.createElement("span", {
      className: `px-3 py-1 rounded-full text-[11px] font-black transition-all ${isSelected ? "bg-rose-600 text-white shadow-xs" : "bg-zinc-100 text-zinc-500 group-hover:bg-rose-100 group-hover:text-rose-700"}`
    }, isSelected ? "✨ Viewing" : "Select")));
  })), (() => {
    const activeTrans = TRANSFORMATIONS.find(t => t.id === transformationTab) || TRANSFORMATIONS[0];
    const isAfter = transformationSlide === "after";
    return /*#__PURE__*/React.createElement("div", {
      className: "max-w-4xl mx-auto"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center justify-center gap-2 p-1.5 bg-white/95 backdrop-blur-md rounded-full w-full max-w-xs mx-auto mb-6 shadow-sm border border-rose-200"
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: () => {
        playCuteBubblePop();
        setTransformationSlide("before");
      },
      className: `flex-1 py-2.5 px-4 rounded-full text-xs font-black transition-all cursor-pointer flex items-center justify-center gap-1.5 ${!isAfter ? "bg-rose-600 text-white shadow-md scale-102" : "text-zinc-600 hover:text-zinc-900"}`
    }, /*#__PURE__*/React.createElement("span", null, "\u26A0\uFE0F"), /*#__PURE__*/React.createElement("span", null, "Before Slay")), /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: () => {
        playCuteBubblePop();
        setTransformationSlide("after");
      },
      className: `flex-1 py-2.5 px-4 rounded-full text-xs font-black transition-all cursor-pointer flex items-center justify-center gap-1.5 ${isAfter ? "bg-emerald-600 text-white shadow-md scale-102" : "text-zinc-600 hover:text-zinc-900"}`
    }, /*#__PURE__*/React.createElement("span", null, "\u2728"), /*#__PURE__*/React.createElement("span", null, "After Slay"))), /*#__PURE__*/React.createElement("div", {
      className: "relative h-[420px] sm:h-[540px] md:h-[620px] lg:h-[660px] w-full rounded-[28px] sm:rounded-[36px] overflow-hidden select-none shadow-2xl bg-zinc-950 cursor-pointer group border border-rose-100/60",
      onClick: () => {
        playCuteBubblePop();
        setTransformationSlide(prev => prev === "after" ? "before" : "after");
      },
      onTouchStart: e => {
        touchStartXRef.current = e.touches[0].clientX;
        touchStartYRef.current = e.touches[0].clientY;
      },
      onTouchEnd: e => {
        if (touchStartXRef.current === null) return;
        const diffX = e.changedTouches[0].clientX - touchStartXRef.current;
        const diffY = e.changedTouches[0].clientY - (touchStartYRef.current || 0);
        touchStartXRef.current = null;
        touchStartYRef.current = null;
        if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 30) {
          if (diffX < 0) {
            setTransformationSlide("after");
            playCuteBubblePop();
          } else {
            setTransformationSlide("before");
            playCuteBubblePop();
          }
        }
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: activeTrans.beforeImage,
      alt: `${activeTrans.title} - Before`,
      className: `absolute inset-0 w-full h-full object-cover object-top sm:object-center transition-all duration-500 ease-out ${!isAfter ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`
    }), /*#__PURE__*/React.createElement("img", {
      src: activeTrans.afterImage,
      alt: `${activeTrans.title} - After Slay`,
      className: `absolute inset-0 w-full h-full object-cover object-top sm:object-center transition-all duration-500 ease-out ${isAfter ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`
    }), /*#__PURE__*/React.createElement("div", {
      className: "absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/80 via-black/35 to-transparent pointer-events-none"
    }), !isAfter && /*#__PURE__*/React.createElement("div", {
      className: "absolute top-4 left-4 sm:top-6 sm:left-6 z-10 px-4 py-2 rounded-full bg-rose-600/95 backdrop-blur-md text-white text-xs sm:text-sm font-black shadow-2xl flex items-center gap-2 animate-fadeIn border border-white/20"
    }, /*#__PURE__*/React.createElement("span", null, "\u26A0\uFE0F"), /*#__PURE__*/React.createElement("span", null, "BEFORE SLAY")), isAfter && /*#__PURE__*/React.createElement("div", {
      className: "absolute top-4 right-4 sm:top-6 sm:right-6 z-10 px-4 py-2 rounded-full bg-emerald-600/95 backdrop-blur-md text-white text-xs sm:text-sm font-black shadow-2xl flex items-center gap-2 animate-fadeIn border border-white/20"
    }, /*#__PURE__*/React.createElement("span", null, "\u2728"), /*#__PURE__*/React.createElement("span", null, "AFTER TDL SLAY")), /*#__PURE__*/React.createElement("button", {
      type: "button",
      "aria-label": "View Before Slay",
      onClick: e => {
        e.stopPropagation();
        playCuteBubblePop();
        setTransformationSlide("before");
      },
      className: `absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all cursor-pointer ${!isAfter ? "bg-white/20 text-white/40 backdrop-blur-xs cursor-default" : "bg-black/55 hover:bg-rose-600 text-white shadow-2xl backdrop-blur-md hover:scale-110 active:scale-95 border border-white/20"}`
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-2xl font-bold leading-none select-none"
    }, "\u2039")), /*#__PURE__*/React.createElement("button", {
      type: "button",
      "aria-label": "View After Slay",
      onClick: e => {
        e.stopPropagation();
        playCuteBubblePop();
        setTransformationSlide("after");
      },
      className: `absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all cursor-pointer ${isAfter ? "bg-white/20 text-white/40 backdrop-blur-xs cursor-default" : "bg-black/55 hover:bg-emerald-600 text-white shadow-2xl backdrop-blur-md hover:scale-110 active:scale-95 border border-white/20"}`
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-2xl font-bold leading-none select-none"
    }, "\u203A")), /*#__PURE__*/React.createElement("div", {
      className: "absolute bottom-4 left-1/2 -translate-x-1/2 z-10 px-4 py-2 rounded-full bg-black/70 backdrop-blur-md text-white text-xs font-bold flex items-center gap-2.5 pointer-events-none shadow-xl border border-white/10"
    }, /*#__PURE__*/React.createElement("span", {
      className: `w-2.5 h-2.5 rounded-full transition-all ${!isAfter ? "bg-rose-500 scale-125" : "bg-white/40"}`
    }), /*#__PURE__*/React.createElement("span", null, !isAfter ? "Before" : "After"), /*#__PURE__*/React.createElement("span", {
      className: `w-2.5 h-2.5 rounded-full transition-all ${isAfter ? "bg-emerald-400 scale-125" : "bg-white/40"}`
    }), /*#__PURE__*/React.createElement("span", {
      className: "text-white/60 text-[10px] sm:text-xs ml-1 font-medium"
    }, "\xB7 Swipe or Tap to flip"))), /*#__PURE__*/React.createElement("div", {
      className: "mt-6 p-5 sm:p-7 rounded-[28px] bg-white/95 backdrop-blur-md border border-rose-100 shadow-xl flex flex-col md:flex-row items-stretch md:items-center justify-between gap-5"
    }, /*#__PURE__*/React.createElement("div", {
      className: "space-y-2 text-left"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-2 flex-wrap"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "text-lg sm:text-2xl font-black text-zinc-900"
    }, activeTrans.title), /*#__PURE__*/React.createElement("span", {
      className: "px-3 py-1 rounded-full bg-rose-100 text-rose-700 font-bold text-xs"
    }, activeTrans.tag)), /*#__PURE__*/React.createElement("p", {
      className: "text-xs sm:text-sm text-zinc-600 max-w-xl leading-relaxed"
    }, !isAfter ? /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", {
      className: "text-rose-600"
    }, "\u26A0\uFE0F Natural Problem:"), " ", activeTrans.beforeDesc) : /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", {
      className: "text-emerald-600"
    }, "\u2728 TDL Result:"), " ", activeTrans.afterDesc))), /*#__PURE__*/React.createElement("div", {
      className: "flex flex-col sm:flex-row items-stretch sm:items-center gap-4 flex-shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-rose-100"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex sm:flex-col items-center sm:items-end justify-between sm:justify-center"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-[10px] text-zinc-400 uppercase font-bold tracking-wider"
    }, "Starting at"), /*#__PURE__*/React.createElement("span", {
      className: "text-2xl sm:text-3xl font-black text-rose-600"
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
      className: "w-full sm:w-auto px-7 py-3.5 rounded-full text-white text-xs sm:text-sm font-black shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all cursor-pointer flex items-center justify-center gap-2"
    }, /*#__PURE__*/React.createElement("span", null, "Book This Transformation"), /*#__PURE__*/React.createElement("span", null, "\u2728")))));
  })())), /*#__PURE__*/React.createElement("section", {
    id: "quiz",
    className: "py-16 bg-gradient-to-b from-rose-50/70 to-pink-50/40 border-y border-rose-100 reveal-on-scroll"
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
    placeholder: "Enter your promo code here...",
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
    className: "py-20 bg-white border-t border-rose-100 reveal-on-scroll"
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
    className: "inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs shadow-md transition"
  }, /*#__PURE__*/React.createElement(WhatsAppIcon, {
    className: "w-4 h-4 fill-current"
  }), /*#__PURE__*/React.createElement("span", null, "WhatsApp (0810-002-4096)")), /*#__PURE__*/React.createElement("a", {
    href: SALON_INFO.instagramUrl,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white font-bold text-xs shadow-md hover:opacity-90 transition"
  }, /*#__PURE__*/React.createElement(InstagramIcon, {
    className: "w-4 h-4 fill-current"
  }), /*#__PURE__*/React.createElement("span", null, "Follow @the_damian_label on Instagram")), /*#__PURE__*/React.createElement("a", {
    href: SALON_INFO.tiktokUrl,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "inline-flex items-center gap-2 px-6 py-3 rounded-full bg-black text-white font-bold text-xs shadow-md hover:bg-zinc-800 transition"
  }, /*#__PURE__*/React.createElement(TikTokIcon, {
    className: "w-4 h-4 fill-current"
  }), /*#__PURE__*/React.createElement("span", null, "Follow @thedamianslabel on TikTok"))))))), /*#__PURE__*/React.createElement("section", {
    id: "reviews",
    className: "py-20 bg-rose-50/40 reveal-on-scroll"
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
    name: "Gloria Obasi",
    badge: "Glueless Wig + Acrylics",
    init: "G"
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
  }, "Get exclusive promo drops, birthday revamp discounts, priority booking during festive periods, and secret VIP perks sent directly to your inbox."), /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      if (newsletterEmail) {
        showToast("Welcome to TDL VIP Club! Check your inbox for exclusive perks 💖", "success");
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
    className: "hover:text-emerald-400 font-bold transition flex items-center gap-1.5"
  }, /*#__PURE__*/React.createElement(WhatsAppIcon, {
    className: "w-4 h-4 text-emerald-400 fill-current"
  }), " ", /*#__PURE__*/React.createElement("span", null, "WhatsApp: 0810-002-4096")), /*#__PURE__*/React.createElement("a", {
    href: SALON_INFO.instagramUrl,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "hover:text-pink-400 font-bold transition flex items-center gap-1.5"
  }, /*#__PURE__*/React.createElement(InstagramIcon, {
    className: "w-4 h-4 text-pink-400 fill-current"
  }), " ", /*#__PURE__*/React.createElement("span", null, "Instagram (@the_damian_label)")), /*#__PURE__*/React.createElement("a", {
    href: SALON_INFO.tiktokUrl,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "hover:text-white font-bold transition flex items-center gap-1.5"
  }, /*#__PURE__*/React.createElement(TikTokIcon, {
    className: "w-4 h-4 text-zinc-300 fill-current"
  }), " ", /*#__PURE__*/React.createElement("span", null, "TikTok (@thedamianslabel)")), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => {
      if (isOwnerAuthenticated) {
        setIsAdminOpen(true);
      } else {
        setOwnerPinInput("");
        setOwnerPinError("");
        setIsOwnerPinModalOpen(true);
      }
    },
    className: "text-zinc-600 hover:text-zinc-400 text-xs transition flex items-center gap-1 cursor-pointer",
    title: "Staff & Owner Portal"
  }, /*#__PURE__*/React.createElement("span", null, "\uD83D\uDD12"), " Staff Access")), /*#__PURE__*/React.createElement("p", {
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
    className: "flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-6"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "text-xl font-bold font-serif-lux flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("span", null, "\uD83D\uDC51 The Damian Label \u2014 Owner Portal"), /*#__PURE__*/React.createElement("span", {
    className: "px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-mono font-bold"
  }, "Authenticated")), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-zinc-500"
  }, "Ago Palace Way, Lagos \u2022 Live Appointments & Payment Management")), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2 self-end sm:self-auto"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: handleOwnerLogout,
    className: "px-3 py-1.5 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-700 font-bold text-xs flex items-center gap-1 transition cursor-pointer border border-rose-200",
    title: "Lock session and log out"
  }, /*#__PURE__*/React.createElement("span", null, "\uD83D\uDD12"), /*#__PURE__*/React.createElement("span", null, "Lock & Log Out")), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setIsAdminOpen(false),
    className: "w-8 h-8 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-600 font-black text-sm flex items-center justify-center cursor-pointer"
  }, "\u2715"))), /*#__PURE__*/React.createElement("div", {
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
  }, /*#__PURE__*/React.createElement("span", null, "\uD83D\uDCC5"), /*#__PURE__*/React.createElement("span", null, "Working Days & Availability")), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setAdminTab("payments"),
    className: `px-4 py-2.5 rounded-xl font-bold text-xs flex items-center gap-2 whitespace-nowrap transition ${adminTab === "payments" ? "bg-rose-600 text-white shadow-sm" : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200"}`
  }, /*#__PURE__*/React.createElement("span", null, "\uD83D\uDCB3"), /*#__PURE__*/React.createElement("span", null, "Bank & Paystack Keys")), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setAdminTab("alerts"),
    className: `px-4 py-2.5 rounded-xl font-bold text-xs flex items-center gap-2 whitespace-nowrap transition ${adminTab === "alerts" ? "bg-rose-600 text-white shadow-sm" : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200"}`
  }, /*#__PURE__*/React.createElement("span", null, "\uD83D\uDD14"), /*#__PURE__*/React.createElement("span", null, "Sound & Alerts")), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setAdminTab("analytics"),
    className: `px-4 py-2.5 rounded-xl font-bold text-xs flex items-center gap-2 whitespace-nowrap transition ${adminTab === "analytics" ? "bg-rose-600 text-white shadow-sm" : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200"}`
  }, /*#__PURE__*/React.createElement("span", null, "\uD83D\uDCCA"), /*#__PURE__*/React.createElement("span", null, "Sales Analytics")), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setAdminTab("security"),
    className: `px-4 py-2.5 rounded-xl font-bold text-xs flex items-center gap-2 whitespace-nowrap transition ${adminTab === "security" ? "bg-rose-600 text-white shadow-sm" : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200"}`
  }, /*#__PURE__*/React.createElement("span", null, "\uD83D\uDD12"), /*#__PURE__*/React.createElement("span", null, "Security & PIN"))), adminTab === "analytics" && (() => {
    // ── Helpers ──────────────────────────────────────────────
    const toDateStr = iso => (iso || "").slice(0, 10); // "YYYY-MM-DD"
    const getWeekBounds = dateStr => {
      const d = new Date(dateStr);
      const day = d.getDay(); // 0=Sun
      const mon = new Date(d);
      mon.setDate(d.getDate() - (day + 6) % 7);
      const sun = new Date(mon);
      sun.setDate(mon.getDate() + 6);
      return {
        mon,
        sun
      };
    };
    const fmt = n => formatNaira(n);
    const fmtDate = str => {
      if (!str) return "";
      const [y, m, d] = str.split("-");
      const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      return `${d} ${months[+m - 1]} ${y}`;
    };
    const dayNames = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

    // ── Booking helpers ───────────────────────────────────────
    // Use booking.date (the appointment date, "YYYY-MM-DD" or display)
    // Also fall back to receiptGeneratedAt for the booking-received date
    const getBookingDay = b => {
      // Prefer appointment date, fallback to booking creation date
      const raw = b.date || toDateStr(b.receiptGeneratedAt);
      // Normalize "Thursday, Nov 20 2026" → YYYY-MM-DD
      if (raw && raw.match(/^\d{4}-\d{2}-\d{2}$/)) return raw;
      // Try parsing display format
      try {
        const parsed = new Date(raw);
        if (!isNaN(parsed)) return parsed.toISOString().slice(0, 10);
      } catch {}
      return toDateStr(b.receiptGeneratedAt);
    };

    // ── Daily ────────────────────────────────────────────────
    const dailyBookings = adminBookings.filter(b => getBookingDay(b) === analyticsDate);
    const dailyRevenue = dailyBookings.reduce((s, b) => s + (b.amountPaidOnline || b.depositPaid || 0), 0);
    const dailyProjected = dailyBookings.reduce((s, b) => s + (b.finalTotal || 0), 0);

    // ── Weekly ───────────────────────────────────────────────
    const {
      mon,
      sun
    } = getWeekBounds(analyticsDate);
    const weekDays = Array.from({
      length: 7
    }, (_, i) => {
      const d = new Date(mon);
      d.setDate(mon.getDate() + i);
      return d.toISOString().slice(0, 10);
    });
    const weeklyData = weekDays.map((day, i) => {
      const bs = adminBookings.filter(b => getBookingDay(b) === day);
      return {
        day: dayNames[i],
        date: day,
        count: bs.length,
        revenue: bs.reduce((s, b) => s + (b.amountPaidOnline || b.depositPaid || 0), 0),
        projected: bs.reduce((s, b) => s + (b.finalTotal || 0), 0),
        confirmed: bs.filter(b => b.status === "Confirmed").length
      };
    });
    const weekTotal = weeklyData.reduce((s, d) => s + d.revenue, 0);
    const weekOrders = weeklyData.reduce((s, d) => s + d.count, 0);
    const weekMax = Math.max(...weeklyData.map(d => d.revenue), 1);

    // ── Monthly ──────────────────────────────────────────────
    const [selYear, selMonth] = analyticsDate.split("-").map(Number);
    const daysInMonth = new Date(selYear, selMonth, 0).getDate();
    const monthlyData = Array.from({
      length: daysInMonth
    }, (_, i) => {
      const day = `${selYear}-${String(selMonth).padStart(2, "0")}-${String(i + 1).padStart(2, "0")}`;
      const bs = adminBookings.filter(b => getBookingDay(b) === day);
      return {
        d: i + 1,
        day,
        count: bs.length,
        revenue: bs.reduce((s, b) => s + (b.amountPaidOnline || b.depositPaid || 0), 0),
        projected: bs.reduce((s, b) => s + (b.finalTotal || 0), 0),
        confirmed: bs.filter(b => b.status === "Confirmed").length
      };
    });
    const monthTotal = monthlyData.reduce((s, d) => s + d.revenue, 0);
    const monthOrders = monthlyData.reduce((s, d) => s + d.count, 0);
    const monthMax = Math.max(...monthlyData.map(d => d.revenue), 1);
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return /*#__PURE__*/React.createElement("div", {
      className: "space-y-5"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex flex-col sm:flex-row sm:items-center justify-between gap-3"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex gap-2"
    }, [{
      id: "daily",
      label: "📅 Daily"
    }, {
      id: "weekly",
      label: "📆 Weekly"
    }, {
      id: "monthly",
      label: "🗓️ Monthly"
    }].map(v => /*#__PURE__*/React.createElement("button", {
      key: v.id,
      type: "button",
      onClick: () => setAnalyticsView(v.id),
      className: `px-4 py-2 rounded-xl font-bold text-xs transition cursor-pointer ${analyticsView === v.id ? "bg-rose-600 text-white shadow-sm" : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200"}`
    }, v.label))), /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-2"
    }, /*#__PURE__*/React.createElement("label", {
      className: "text-xs text-zinc-500 font-semibold"
    }, analyticsView === "monthly" ? "Month:" : "Date:"), /*#__PURE__*/React.createElement("input", {
      type: analyticsView === "monthly" ? "month" : "date",
      value: analyticsView === "monthly" ? analyticsDate.slice(0, 7) : analyticsDate,
      max: new Date().toISOString().slice(0, analyticsView === "monthly" ? 7 : 10),
      onChange: e => {
        const v = e.target.value;
        setAnalyticsDate(analyticsView === "monthly" ? v + "-01" : v);
      },
      className: "border border-zinc-300 rounded-xl px-3 py-1.5 text-xs font-mono focus:outline-none focus:ring-2 focus:ring-rose-400 bg-white"
    }), /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: () => setAnalyticsDate(new Date().toISOString().slice(0, 10)),
      className: "px-3 py-1.5 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-zinc-700 font-bold text-xs transition cursor-pointer"
    }, "Today"))), analyticsView === "daily" && /*#__PURE__*/React.createElement("div", {
      className: "space-y-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-2"
    }, /*#__PURE__*/React.createElement("h4", {
      className: "font-black text-zinc-900 text-sm"
    }, "\uD83D\uDCC5 ", fmtDate(analyticsDate)), analyticsDate === new Date().toISOString().slice(0, 10) && /*#__PURE__*/React.createElement("span", {
      className: "px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-black animate-pulse"
    }, "TODAY")), /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-2 sm:grid-cols-4 gap-3"
    }, /*#__PURE__*/React.createElement("div", {
      className: "p-4 rounded-2xl bg-rose-50 border border-rose-100 text-center"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-[10px] text-zinc-500 uppercase font-bold tracking-wider"
    }, "Orders"), /*#__PURE__*/React.createElement("p", {
      className: "text-3xl font-black text-zinc-900 mt-1"
    }, dailyBookings.length)), /*#__PURE__*/React.createElement("div", {
      className: "p-4 rounded-2xl bg-emerald-50 border border-emerald-100 text-center"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-[10px] text-zinc-500 uppercase font-bold tracking-wider"
    }, "Confirmed"), /*#__PURE__*/React.createElement("p", {
      className: "text-3xl font-black text-emerald-700 mt-1"
    }, dailyBookings.filter(b => b.status === "Confirmed").length)), /*#__PURE__*/React.createElement("div", {
      className: "p-4 rounded-2xl bg-amber-50 border border-amber-100 text-center"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-[10px] text-zinc-500 uppercase font-bold tracking-wider"
    }, "Cash Collected"), /*#__PURE__*/React.createElement("p", {
      className: "text-xl font-black text-amber-700 mt-1"
    }, fmt(dailyRevenue))), /*#__PURE__*/React.createElement("div", {
      className: "p-4 rounded-2xl bg-purple-50 border border-purple-100 text-center"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-[10px] text-zinc-500 uppercase font-bold tracking-wider"
    }, "Service Value"), /*#__PURE__*/React.createElement("p", {
      className: "text-xl font-black text-purple-700 mt-1"
    }, fmt(dailyProjected)))), dailyBookings.length === 0 ? /*#__PURE__*/React.createElement("div", {
      className: "text-center py-12 text-zinc-400"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-4xl mb-3"
    }, "\uD83D\uDCED"), /*#__PURE__*/React.createElement("p", {
      className: "font-bold text-sm"
    }, "No orders on ", fmtDate(analyticsDate)), /*#__PURE__*/React.createElement("p", {
      className: "text-xs mt-1"
    }, "Use the date picker above to browse other days")) : /*#__PURE__*/React.createElement("div", {
      className: "space-y-2"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-xs font-bold text-zinc-500 uppercase tracking-wider"
    }, "Orders on this day"), dailyBookings.map(b => /*#__PURE__*/React.createElement("div", {
      key: b.id,
      className: `p-3.5 rounded-2xl border flex items-center justify-between gap-3 ${b.status === "Confirmed" ? "bg-emerald-50/60 border-emerald-200" : b.status === "Pending Verification" ? "bg-amber-50/60 border-amber-200" : "bg-zinc-50 border-zinc-200"}`
    }, /*#__PURE__*/React.createElement("div", {
      className: "min-w-0"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-2 flex-wrap"
    }, /*#__PURE__*/React.createElement("span", {
      className: "font-mono text-xs text-rose-600 font-black"
    }, "#", b.id), /*#__PURE__*/React.createElement("span", {
      className: "font-bold text-zinc-900 text-sm truncate"
    }, b.clientName), /*#__PURE__*/React.createElement("span", {
      className: `px-2 py-0.5 rounded-full text-[10px] font-black ${b.status === "Confirmed" ? "bg-emerald-100 text-emerald-800" : b.status === "Pending Verification" ? "bg-amber-200 text-amber-900 animate-pulse" : "bg-rose-100 text-rose-800"}`
    }, b.status === "Confirmed" ? "✅ Confirmed" : b.status === "Pending Verification" ? "⏳ Pending" : "❌ Declined")), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-zinc-600 mt-0.5 truncate"
    }, b.serviceName), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-zinc-400"
    }, b.time, " \xB7 ", b.deliveryMode)), /*#__PURE__*/React.createElement("div", {
      className: "text-right flex-shrink-0"
    }, /*#__PURE__*/React.createElement("p", {
      className: "font-black text-sm text-emerald-700"
    }, fmt(b.amountPaidOnline || b.depositPaid || 0)), /*#__PURE__*/React.createElement("p", {
      className: "text-[10px] text-zinc-400"
    }, "of ", fmt(b.finalTotal || 0))))))), analyticsView === "weekly" && /*#__PURE__*/React.createElement("div", {
      className: "space-y-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-2"
    }, /*#__PURE__*/React.createElement("h4", {
      className: "font-black text-zinc-900 text-sm"
    }, "\uD83D\uDCC6 Week of ", fmtDate(weekDays[0]), " \u2014 ", fmtDate(weekDays[6]))), /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-3 gap-3"
    }, /*#__PURE__*/React.createElement("div", {
      className: "p-4 rounded-2xl bg-rose-50 border border-rose-100 text-center"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-[10px] text-zinc-500 uppercase font-bold tracking-wider"
    }, "Week Orders"), /*#__PURE__*/React.createElement("p", {
      className: "text-3xl font-black text-zinc-900 mt-1"
    }, weekOrders)), /*#__PURE__*/React.createElement("div", {
      className: "p-4 rounded-2xl bg-amber-50 border border-amber-100 text-center"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-[10px] text-zinc-500 uppercase font-bold tracking-wider"
    }, "Week Revenue"), /*#__PURE__*/React.createElement("p", {
      className: "text-xl font-black text-amber-700 mt-1"
    }, fmt(weekTotal))), /*#__PURE__*/React.createElement("div", {
      className: "p-4 rounded-2xl bg-emerald-50 border border-emerald-100 text-center"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-[10px] text-zinc-500 uppercase font-bold tracking-wider"
    }, "Best Day"), /*#__PURE__*/React.createElement("p", {
      className: "text-xl font-black text-emerald-700 mt-1"
    }, weeklyData.reduce((best, d) => d.revenue > best.revenue ? d : best, weeklyData[0]).day))), /*#__PURE__*/React.createElement("div", {
      className: "p-4 rounded-2xl bg-zinc-50 border border-zinc-200"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-xs font-bold text-zinc-500 uppercase tracking-wider mb-4"
    }, "Revenue by Day"), /*#__PURE__*/React.createElement("div", {
      className: "flex items-end gap-2 h-32"
    }, weeklyData.map((d, i) => {
      const pct = weekMax > 0 ? d.revenue / weekMax * 100 : 0;
      const isToday = d.date === new Date().toISOString().slice(0, 10);
      const isSelected = d.date === analyticsDate;
      return /*#__PURE__*/React.createElement("div", {
        key: i,
        className: "flex-1 flex flex-col items-center gap-1 cursor-pointer group",
        onClick: () => {
          setAnalyticsDate(d.date);
          setAnalyticsView("daily");
        }
      }, /*#__PURE__*/React.createElement("span", {
        className: "text-[9px] font-black text-zinc-500 opacity-0 group-hover:opacity-100 transition whitespace-nowrap"
      }, fmt(d.revenue)), /*#__PURE__*/React.createElement("div", {
        className: `w-full rounded-t-lg transition-all ${d.count === 0 ? "bg-zinc-200" : isToday ? "bg-rose-500" : isSelected ? "bg-amber-400" : "bg-rose-300 group-hover:bg-rose-500"}`,
        style: {
          height: `${Math.max(pct, d.count > 0 ? 8 : 2)}%`
        }
      }), /*#__PURE__*/React.createElement("span", {
        className: `text-[10px] font-black ${isToday ? "text-rose-600" : "text-zinc-500"}`
      }, d.day), d.count > 0 && /*#__PURE__*/React.createElement("span", {
        className: "text-[9px] text-zinc-400"
      }, d.count));
    })), /*#__PURE__*/React.createElement("p", {
      className: "text-[10px] text-zinc-400 mt-2 text-center"
    }, "Tap a bar to see that day's details")), /*#__PURE__*/React.createElement("div", {
      className: "rounded-2xl border border-zinc-200 overflow-hidden"
    }, /*#__PURE__*/React.createElement("table", {
      className: "w-full text-xs"
    }, /*#__PURE__*/React.createElement("thead", {
      className: "bg-zinc-50"
    }, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
      className: "p-3 text-left font-bold text-zinc-600"
    }, "Day"), /*#__PURE__*/React.createElement("th", {
      className: "p-3 text-center font-bold text-zinc-600"
    }, "Orders"), /*#__PURE__*/React.createElement("th", {
      className: "p-3 text-center font-bold text-zinc-600"
    }, "\u2705 Confirmed"), /*#__PURE__*/React.createElement("th", {
      className: "p-3 text-right font-bold text-zinc-600"
    }, "Cash In"), /*#__PURE__*/React.createElement("th", {
      className: "p-3 text-right font-bold text-zinc-600"
    }, "Service Value"))), /*#__PURE__*/React.createElement("tbody", null, weeklyData.map((d, i) => {
      const isToday = d.date === new Date().toISOString().slice(0, 10);
      return /*#__PURE__*/React.createElement("tr", {
        key: i,
        onClick: () => {
          setAnalyticsDate(d.date);
          setAnalyticsView("daily");
        },
        className: `border-t border-zinc-100 cursor-pointer transition ${isToday ? "bg-rose-50/60 hover:bg-rose-100/60" : "hover:bg-zinc-50"}`
      }, /*#__PURE__*/React.createElement("td", {
        className: "p-3"
      }, /*#__PURE__*/React.createElement("span", {
        className: `font-black ${isToday ? "text-rose-600" : "text-zinc-800"}`
      }, d.day), /*#__PURE__*/React.createElement("span", {
        className: "text-zinc-400 ml-2"
      }, fmtDate(d.date)), isToday && /*#__PURE__*/React.createElement("span", {
        className: "ml-2 px-1.5 py-0.5 rounded-full bg-rose-100 text-rose-700 text-[9px] font-black"
      }, "TODAY")), /*#__PURE__*/React.createElement("td", {
        className: "p-3 text-center font-bold text-zinc-900"
      }, d.count || "—"), /*#__PURE__*/React.createElement("td", {
        className: "p-3 text-center font-bold text-emerald-700"
      }, d.confirmed || "—"), /*#__PURE__*/React.createElement("td", {
        className: "p-3 text-right font-black text-amber-700"
      }, d.revenue > 0 ? fmt(d.revenue) : "—"), /*#__PURE__*/React.createElement("td", {
        className: "p-3 text-right font-semibold text-zinc-500"
      }, d.projected > 0 ? fmt(d.projected) : "—"));
    })), /*#__PURE__*/React.createElement("tfoot", {
      className: "bg-zinc-50"
    }, /*#__PURE__*/React.createElement("tr", {
      className: "border-t border-zinc-200"
    }, /*#__PURE__*/React.createElement("td", {
      className: "p-3 font-black text-zinc-900"
    }, "TOTAL"), /*#__PURE__*/React.createElement("td", {
      className: "p-3 text-center font-black text-zinc-900"
    }, weekOrders), /*#__PURE__*/React.createElement("td", {
      className: "p-3 text-center font-black text-emerald-700"
    }, weeklyData.reduce((s, d) => s + d.confirmed, 0)), /*#__PURE__*/React.createElement("td", {
      className: "p-3 text-right font-black text-amber-700"
    }, fmt(weekTotal)), /*#__PURE__*/React.createElement("td", {
      className: "p-3 text-right font-black text-zinc-500"
    }, fmt(weeklyData.reduce((s, d) => s + d.projected, 0)))))))), analyticsView === "monthly" && /*#__PURE__*/React.createElement("div", {
      className: "space-y-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-2"
    }, /*#__PURE__*/React.createElement("h4", {
      className: "font-black text-zinc-900 text-sm"
    }, "\uD83D\uDDD3\uFE0F ", monthNames[selMonth - 1], " ", selYear), selYear === new Date().getFullYear() && selMonth === new Date().getMonth() + 1 && /*#__PURE__*/React.createElement("span", {
      className: "px-2 py-0.5 rounded-full bg-rose-100 text-rose-700 text-[10px] font-black animate-pulse"
    }, "THIS MONTH")), /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-2 sm:grid-cols-4 gap-3"
    }, /*#__PURE__*/React.createElement("div", {
      className: "p-4 rounded-2xl bg-rose-50 border border-rose-100 text-center"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-[10px] text-zinc-500 uppercase font-bold tracking-wider"
    }, "Total Orders"), /*#__PURE__*/React.createElement("p", {
      className: "text-3xl font-black text-zinc-900 mt-1"
    }, monthOrders)), /*#__PURE__*/React.createElement("div", {
      className: "p-4 rounded-2xl bg-emerald-50 border border-emerald-100 text-center"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-[10px] text-zinc-500 uppercase font-bold tracking-wider"
    }, "Confirmed"), /*#__PURE__*/React.createElement("p", {
      className: "text-3xl font-black text-emerald-700 mt-1"
    }, monthlyData.reduce((s, d) => s + d.confirmed, 0))), /*#__PURE__*/React.createElement("div", {
      className: "p-4 rounded-2xl bg-amber-50 border border-amber-100 text-center"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-[10px] text-zinc-500 uppercase font-bold tracking-wider"
    }, "Cash Collected"), /*#__PURE__*/React.createElement("p", {
      className: "text-xl font-black text-amber-700 mt-1"
    }, fmt(monthTotal))), /*#__PURE__*/React.createElement("div", {
      className: "p-4 rounded-2xl bg-purple-50 border border-purple-100 text-center"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-[10px] text-zinc-500 uppercase font-bold tracking-wider"
    }, "Service Value"), /*#__PURE__*/React.createElement("p", {
      className: "text-xl font-black text-purple-700 mt-1"
    }, fmt(monthlyData.reduce((s, d) => s + d.projected, 0))))), /*#__PURE__*/React.createElement("div", {
      className: "p-4 rounded-2xl bg-zinc-50 border border-zinc-200"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-xs font-bold text-zinc-500 uppercase tracking-wider mb-3"
    }, "Revenue Activity \u2014 ", monthNames[selMonth - 1]), /*#__PURE__*/React.createElement("div", {
      className: "flex flex-wrap gap-1.5"
    }, monthlyData.map(d => {
      const pct = monthMax > 0 ? d.revenue / monthMax : 0;
      const todayStr = new Date().toISOString().slice(0, 10);
      const isToday = d.day === todayStr;
      const isFuture = d.day > todayStr;
      return /*#__PURE__*/React.createElement("div", {
        key: d.d,
        title: `${fmtDate(d.day)}: ${d.count} order${d.count !== 1 ? "s" : ""} · ${fmt(d.revenue)}`,
        onClick: () => {
          if (!isFuture) {
            setAnalyticsDate(d.day);
            setAnalyticsView("daily");
          }
        },
        className: `w-8 h-8 rounded-lg flex items-center justify-center cursor-pointer transition text-[10px] font-black border ${isToday ? "border-rose-500 ring-2 ring-rose-400" : isFuture ? "border-zinc-100 opacity-30" : "border-transparent hover:border-rose-300"} ${isFuture ? "bg-zinc-100" : d.count === 0 ? "bg-zinc-200 text-zinc-500" : pct > 0.75 ? "bg-rose-600 text-white" : pct > 0.4 ? "bg-rose-400 text-white" : pct > 0.1 ? "bg-rose-200 text-rose-800" : "bg-rose-100 text-rose-700"}`
      }, d.d);
    })), /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-2 mt-3 flex-wrap"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-[10px] text-zinc-400"
    }, "Revenue intensity:"), [["bg-zinc-200", "No orders"], ["bg-rose-100", "Low"], ["bg-rose-300", "Mid"], ["bg-rose-500 text-white", "High"]].map(([cls, lbl]) => /*#__PURE__*/React.createElement("span", {
      key: lbl,
      className: `w-5 h-5 rounded ${cls} inline-flex items-center justify-center`,
      title: lbl
    })), /*#__PURE__*/React.createElement("span", {
      className: "text-[10px] text-zinc-400"
    }, "\xB7 Tap a day to zoom in"))), monthlyData.some(d => d.count > 0) ? /*#__PURE__*/React.createElement("div", {
      className: "rounded-2xl border border-zinc-200 overflow-hidden"
    }, /*#__PURE__*/React.createElement("table", {
      className: "w-full text-xs"
    }, /*#__PURE__*/React.createElement("thead", {
      className: "bg-zinc-50"
    }, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
      className: "p-3 text-left font-bold text-zinc-600"
    }, "Date"), /*#__PURE__*/React.createElement("th", {
      className: "p-3 text-center font-bold text-zinc-600"
    }, "Orders"), /*#__PURE__*/React.createElement("th", {
      className: "p-3 text-center font-bold text-zinc-600"
    }, "\u2705 Done"), /*#__PURE__*/React.createElement("th", {
      className: "p-3 text-right font-bold text-zinc-600"
    }, "Cash In"), /*#__PURE__*/React.createElement("th", {
      className: "p-3 text-right font-bold text-zinc-600"
    }, "Service Value"))), /*#__PURE__*/React.createElement("tbody", null, monthlyData.filter(d => d.count > 0).map((d, i) => {
      const isToday = d.day === new Date().toISOString().slice(0, 10);
      return /*#__PURE__*/React.createElement("tr", {
        key: i,
        onClick: () => {
          setAnalyticsDate(d.day);
          setAnalyticsView("daily");
        },
        className: `border-t border-zinc-100 cursor-pointer transition ${isToday ? "bg-rose-50/60 hover:bg-rose-100/60" : "hover:bg-zinc-50"}`
      }, /*#__PURE__*/React.createElement("td", {
        className: "p-3"
      }, /*#__PURE__*/React.createElement("span", {
        className: `font-black ${isToday ? "text-rose-600" : "text-zinc-800"}`
      }, fmtDate(d.day)), isToday && /*#__PURE__*/React.createElement("span", {
        className: "ml-2 px-1.5 py-0.5 rounded-full bg-rose-100 text-rose-700 text-[9px] font-black"
      }, "TODAY")), /*#__PURE__*/React.createElement("td", {
        className: "p-3 text-center font-bold text-zinc-900"
      }, d.count), /*#__PURE__*/React.createElement("td", {
        className: "p-3 text-center font-bold text-emerald-700"
      }, d.confirmed || "—"), /*#__PURE__*/React.createElement("td", {
        className: "p-3 text-right font-black text-amber-700"
      }, fmt(d.revenue)), /*#__PURE__*/React.createElement("td", {
        className: "p-3 text-right font-semibold text-zinc-500"
      }, fmt(d.projected)));
    })), /*#__PURE__*/React.createElement("tfoot", {
      className: "bg-zinc-50"
    }, /*#__PURE__*/React.createElement("tr", {
      className: "border-t border-zinc-200"
    }, /*#__PURE__*/React.createElement("td", {
      className: "p-3 font-black text-zinc-900"
    }, "MONTH TOTAL"), /*#__PURE__*/React.createElement("td", {
      className: "p-3 text-center font-black text-zinc-900"
    }, monthOrders), /*#__PURE__*/React.createElement("td", {
      className: "p-3 text-center font-black text-emerald-700"
    }, monthlyData.reduce((s, d) => s + d.confirmed, 0)), /*#__PURE__*/React.createElement("td", {
      className: "p-3 text-right font-black text-amber-700"
    }, fmt(monthTotal)), /*#__PURE__*/React.createElement("td", {
      className: "p-3 text-right font-black text-zinc-500"
    }, fmt(monthlyData.reduce((s, d) => s + d.projected, 0))))))) : /*#__PURE__*/React.createElement("div", {
      className: "text-center py-10 text-zinc-400"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-4xl mb-3"
    }, "\uD83D\uDCED"), /*#__PURE__*/React.createElement("p", {
      className: "font-bold text-sm"
    }, "No orders in ", monthNames[selMonth - 1], " ", selYear))));
  })(), adminTab === "bookings" && /*#__PURE__*/React.createElement("div", {
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
  }, f.label))), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3 flex-wrap"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-[11px] text-zinc-400"
  }, "\uD83D\uDCA1 ", /*#__PURE__*/React.createElement("em", null, "Tap \"I Have Seen The Money\" once funds hit your account to confirm the client schedule!")), adminBookings.length > 0 && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => {
      if (window.confirm(`⚠️ Clear ALL ${adminBookings.length} order(s) permanently? This cannot be undone.`)) {
        persistBookings([]);
        showToast("All orders cleared. Fresh start! 🗑️", "info");
      }
    },
    className: "px-3 py-1.5 rounded-full bg-rose-50 hover:bg-rose-100 text-rose-600 font-bold text-[11px] border border-rose-200 transition cursor-pointer flex items-center gap-1 ml-auto"
  }, /*#__PURE__*/React.createElement("span", null, "\uD83D\uDDD1\uFE0F"), /*#__PURE__*/React.createElement("span", null, "Clear All Orders")))), /*#__PURE__*/React.createElement("div", {
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
      localStorage.setItem("tdl_bank_details", JSON.stringify(updated));
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
  }, "Enable Desktop Push"))), adminTab === "security" && /*#__PURE__*/React.createElement("div", {
    className: "p-5 rounded-2xl bg-zinc-50 border border-zinc-200 space-y-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-xl"
  }, "\uD83D\uDD12"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    className: "font-bold text-zinc-900 text-sm"
  }, "Owner Master Security PIN"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-zinc-500"
  }, "Protect confidential appointments, customer phone numbers, and revenue stats."))), /*#__PURE__*/React.createElement("div", {
    className: "p-4 bg-white rounded-xl border border-zinc-200 space-y-3 max-w-md"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-zinc-600 leading-relaxed"
  }, "Clients see ", /*#__PURE__*/React.createElement("strong", null, "zero visible owner portal buttons"), " on the website. To access this dashboard, triple-tap the ", /*#__PURE__*/React.createElement("strong", null, "TDL"), " logo at top-left or use the subtle footer link, then enter your 4-digit Master PIN."), /*#__PURE__*/React.createElement("div", {
    className: "pt-2"
  }, /*#__PURE__*/React.createElement("label", {
    className: "block text-xs font-bold text-zinc-700 mb-1"
  }, "Set New Master Owner PIN:"), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-2"
  }, /*#__PURE__*/React.createElement("input", {
    type: "password",
    maxLength: 6,
    value: newPinInput,
    onChange: e => setNewPinInput(e.target.value),
    placeholder: "New PIN (e.g. 8100)",
    className: "px-4 py-2 rounded-xl border border-zinc-300 text-xs font-mono tracking-widest bg-zinc-50 focus:bg-white w-40"
  }), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: handleChangeOwnerPin,
    className: "px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs shadow-xs transition"
  }, "Update PIN \uD83D\uDD12")), /*#__PURE__*/React.createElement("p", {
    className: "text-[10px] text-zinc-400 mt-1"
  }, "Default PIN stored in your browser's local storage. Change it after first login.")))))), isOwnerPinModalOpen && /*#__PURE__*/React.createElement("div", {
    className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-white rounded-[32px] max-w-sm w-full p-6 sm:p-7 shadow-2xl relative text-center border border-pink-200 animate-scaleUp"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => {
      setIsOwnerPinModalOpen(false);
      setOwnerPinInput("");
      setOwnerPinError("");
    },
    className: "absolute top-4 right-4 w-8 h-8 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-600 font-black text-sm flex items-center justify-center cursor-pointer"
  }, "\u2715"), /*#__PURE__*/React.createElement("div", {
    className: "w-14 h-14 mx-auto rounded-2xl bg-gradient-to-tr from-rose-500 to-pink-500 text-white flex items-center justify-center text-2xl shadow-lg mb-3"
  }, "\uD83D\uDC51"), /*#__PURE__*/React.createElement("h3", {
    className: "text-xl font-black text-zinc-900 font-serif-lux mb-1"
  }, "Owner Security Check"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-zinc-500 mb-5"
  }, "Enter Master PIN to open The Damian Label salon records & revenue manager."), /*#__PURE__*/React.createElement("form", {
    onSubmit: handleVerifyOwnerPin,
    className: "space-y-4"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("input", {
    type: "password",
    maxLength: 6,
    autoFocus: true,
    value: ownerPinInput,
    onChange: e => {
      setOwnerPinInput(e.target.value);
      setOwnerPinError("");
    },
    placeholder: "Enter 4-Digit PIN",
    className: "w-full text-center px-4 py-3 rounded-2xl border-2 border-rose-200 focus:border-rose-600 text-xl font-mono tracking-widest outline-none bg-rose-50/50 focus:bg-white transition"
  }), ownerPinError && /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-rose-600 font-bold mt-2"
  }, ownerPinError)), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    style: {
      backgroundColor: '#e11d48',
      background: 'linear-gradient(135deg, #e11d48 0%, #f43f5e 100%)'
    },
    className: "w-full py-3 rounded-full text-white font-black text-xs sm:text-sm shadow-lg hover:shadow-xl active:scale-95 transition cursor-pointer"
  }, "Unlock Salon Manager \uD83D\uDD13"), /*#__PURE__*/React.createElement("p", {
    className: "text-[11px] text-zinc-400"
  }, "\uD83D\uDD12 Confidential Studio Portal \u2022 Master PIN Protected")))), receiptToPrint && /*#__PURE__*/React.createElement("div", {
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
    className: `fixed ${showMobileStickyBar ? "bottom-20 sm:bottom-5" : "bottom-5"} left-3.5 sm:left-6 z-40 transition-all duration-300 rounded-3xl ${isMusicMinimized ? 'p-2 sm:p-2.5' : 'p-3 sm:p-3.5 max-w-[320px] sm:max-w-sm w-[calc(100vw-28px)] sm:w-auto'}`
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
  }, /*#__PURE__*/React.createElement("span", null, "\uD83D\uDCC1"), /*#__PURE__*/React.createElement("span", null, "Put My Song")), musicTrack !== "studio-music.mp3" && musicTrack !== "studio-music.wav" && /*#__PURE__*/React.createElement("button", {
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
    className: `fixed ${showMobileStickyBar ? "bottom-20 sm:bottom-6" : "bottom-6"} right-3.5 sm:right-6 z-40 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-full flex items-center gap-2 cursor-pointer hover:scale-105 active:scale-95 transition-all shadow-xl font-black text-xs tracking-wide`
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-base animate-bounce"
  }, "\uD83C\uDFA1"), /*#__PURE__*/React.createElement("span", {
    className: "hidden sm:inline"
  }, spinCount >= 2 ? "Wheel Spun (2/2)" : spinCount === 1 ? "1 Spin Left" : "Spin for Discount"), /*#__PURE__*/React.createElement("span", null, "\u2728")), isSpinWheelOpen && /*#__PURE__*/React.createElement("div", {
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
    className: "text-2xl sm:text-3xl font-black text-zinc-900 font-serif-lux mb-1.5"
  }, "Spin & Win Slay Perks! \uD83C\uDFA1"), /*#__PURE__*/React.createElement("div", {
    className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-[11px] font-bold text-rose-700 mb-2"
  }, /*#__PURE__*/React.createElement("span", null, "\uD83C\uDFB0"), /*#__PURE__*/React.createElement("span", null, spinCount === 0 ? "2 Lucky Spins Available Today" : spinCount === 1 ? "1 Final Spin Remaining Today" : "2 of 2 Daily Spins Used")), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-zinc-600 mb-5"
  }, "Spin our luxury wheel! Discounts are rare gems, but every babe wins love, tips & perks!"), /*#__PURE__*/React.createElement("div", {
    className: "relative w-64 h-64 mx-auto mb-6 flex items-center justify-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute -top-4 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center pointer-events-none drop-shadow-xl"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-3.5 h-3.5 rounded-full bg-rose-600 border-2 border-white shadow-md -mb-1 z-10 animate-pulse"
  }), /*#__PURE__*/React.createElement("div", {
    className: "w-0 h-0 border-l-[11px] border-l-transparent border-r-[11px] border-r-transparent border-t-[22px] border-t-rose-600 filter drop-shadow"
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
    const sector = 360 / WHEEL_PRIZES.length;
    const startAngle = idx * sector;
    const endAngle = (idx + 1) * sector;
    const x1 = 50 + 50 * Math.cos(Math.PI * (startAngle - 90) / 180);
    const y1 = 50 + 50 * Math.sin(Math.PI * (startAngle - 90) / 180);
    const x2 = 50 + 50 * Math.cos(Math.PI * (endAngle - 90) / 180);
    const y2 = 50 + 50 * Math.sin(Math.PI * (endAngle - 90) / 180);
    const path = `M 50 50 L ${x1} ${y1} A 50 50 0 0 1 ${x2} ${y2} Z`;
    const midAngle = startAngle + sector / 2;
    const isWinningSlice = wonWheelPrize && wonWheelPrize.id === prize.id;
    return /*#__PURE__*/React.createElement("g", {
      key: prize.id || idx
    }, /*#__PURE__*/React.createElement("path", {
      d: path,
      fill: prize.color,
      stroke: isWinningSlice ? "#fde047" : "#ffffff",
      strokeWidth: isWinningSlice ? "2.5" : "1.2"
    }), /*#__PURE__*/React.createElement("g", {
      transform: `rotate(${midAngle}, 50, 50)`
    }, /*#__PURE__*/React.createElement("text", {
      x: "50",
      y: "16.5",
      fill: "#ffffff",
      fontSize: "3.1",
      fontWeight: "900",
      textAnchor: "middle",
      dominantBaseline: "central"
    }, prize.line1), /*#__PURE__*/React.createElement("text", {
      x: "50",
      y: "22.5",
      fill: "#ffffff",
      fontSize: "2.7",
      fontWeight: "900",
      textAnchor: "middle",
      dominantBaseline: "central"
    }, prize.line2)));
  })), /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 m-auto w-12 h-12 rounded-full bg-white border-2 border-rose-300 shadow-lg flex items-center justify-center font-black text-rose-600 text-xs"
  }, "TDL"))), wonWheelPrize ? wonWheelPrize.isDiscount ? /*#__PURE__*/React.createElement("div", {
    className: "space-y-3 bg-rose-50/90 p-4 rounded-2xl border border-rose-300"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-3xl animate-bounce block"
  }, "\uD83C\uDF89"), /*#__PURE__*/React.createElement("h4", {
    className: "text-lg font-black text-rose-600 font-serif-lux"
  }, "JACKPOT WINNER: ", wonWheelPrize.label, "!"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-zinc-700 font-medium"
  }, wonWheelPrize.desc), /*#__PURE__*/React.createElement("div", {
    className: "bg-white p-2 rounded-xl border border-rose-200 flex items-center justify-center gap-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-xs text-zinc-500 font-bold"
  }, "PROMO CODE:"), /*#__PURE__*/React.createElement("strong", {
    className: "font-mono text-sm text-rose-600 font-black tracking-wider bg-rose-50 px-2.5 py-0.5 rounded border border-rose-200"
  }, wonWheelPrize.code)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: handleApplyWheelPrize,
    style: {
      backgroundColor: '#e11d48'
    },
    className: "w-full py-3 rounded-full text-white font-black text-xs sm:text-sm shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition cursor-pointer"
  }, "Claim & Apply Discount to Booking \uD83D\uDC96"), /*#__PURE__*/React.createElement("p", {
    className: "text-[11px] text-zinc-500 font-medium"
  }, spinCount >= 2 ? "You've completed your 2 spins today! Use your code at checkout 💅" : "You have 1 spin remaining! You can spin again or claim this code now 💖")) : /*#__PURE__*/React.createElement("div", {
    className: "space-y-3 bg-zinc-50 p-4 rounded-2xl border border-zinc-200"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-3xl block"
  }, "\uD83D\uDC8B"), /*#__PURE__*/React.createElement("h4", {
    className: "text-base font-black text-zinc-900 font-serif-lux"
  }, wonWheelPrize.label), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-zinc-600"
  }, wonWheelPrize.desc), /*#__PURE__*/React.createElement("div", {
    className: "pt-1 flex flex-col sm:flex-row gap-2"
  }, spinCount < 2 ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => {
      setWonWheelPrize(null);
      handleSpinWheel();
    },
    className: "flex-1 py-2.5 rounded-full bg-rose-100 hover:bg-rose-200 text-rose-800 font-bold text-xs transition cursor-pointer"
  }, "Spin Again (1 Spin Left) \uD83C\uDFA1") : /*#__PURE__*/React.createElement("div", {
    className: "flex-1 py-2.5 px-3 rounded-full bg-amber-50 border border-amber-200 text-[11px] font-bold text-amber-800 flex items-center justify-center gap-1"
  }, /*#__PURE__*/React.createElement("span", null, "\u2728 2 of 2 Spins Used Today")), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => {
      setIsSpinWheelOpen(false);
      bookingSectionRef.current?.scrollIntoView({
        behavior: "smooth"
      });
    },
    style: {
      backgroundColor: '#e11d48'
    },
    className: "flex-1 py-2.5 rounded-full text-white font-bold text-xs shadow-md hover:scale-105 active:scale-95 transition cursor-pointer"
  }, "Book Appointment \uD83D\uDC85")), spinCount >= 2 && /*#__PURE__*/React.createElement("p", {
    className: "text-[11px] text-zinc-500 italic mt-1"
  }, "You've used your 2 spins for today, babe! You can come back tomorrow for 2 new spins, or book your luxury hair slay right now! \uD83D\uDC96")) : spinCount >= 2 ? /*#__PURE__*/React.createElement("div", {
    className: "space-y-3 bg-amber-50/80 p-4 rounded-2xl border border-amber-200"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-2xl block"
  }, "\uD83D\uDC51"), /*#__PURE__*/React.createElement("h4", {
    className: "text-sm font-black text-amber-900 font-serif-lux"
  }, "2 of 2 Daily Spins Used!"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-zinc-600"
  }, "You have used both of your 2 lucky spins for today, babe! You can come back tomorrow to spin again, or book your luxury hair appointment right now! \uD83D\uDC85\u2728"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => {
      setIsSpinWheelOpen(false);
      bookingSectionRef.current?.scrollIntoView({
        behavior: "smooth"
      });
    },
    style: {
      backgroundColor: '#e11d48'
    },
    className: "w-full py-3 rounded-full text-white font-black text-xs sm:text-sm shadow-md hover:scale-105 active:scale-95 transition cursor-pointer"
  }, "Book Your Appointment Now \uD83D\uDC85\u2728")) : /*#__PURE__*/React.createElement("button", {
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
  }, isSpinning ? "Spinning Lucky Wheel... 🎡" : spinCount === 1 ? "USE FINAL SPIN! (1 Left) 🎡✨" : "SPIN THE SLAY WHEEL! (2 Spins) 🎡✨"))), isSocialProofVisible && /*#__PURE__*/React.createElement("div", {
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

// Render with error boundary wrapper
if (typeof ReactDOM !== 'undefined' && document.getElementById('root')) {
  const WrappedApp = function () {
    return React.createElement(AppErrorBoundary, null, React.createElement(App));
  };
  window.__TDL_APP_MOUNTED__ = true;
}

if (typeof ReactDOM !== 'undefined' && document.getElementById('root')) {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  const WrappedApp = function() {
    return React.createElement(AppErrorBoundary, null, React.createElement(App));
  };
  root.render(React.createElement(WrappedApp));
}
})();
