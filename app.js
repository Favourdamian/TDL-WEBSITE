/**
 * THE DAMIAN LABEL (TDL) - LAGOS, NIGERIA
 * Luxury Wig Revamping, Wigging, Hair Ventilation & Nails Studio
 * Ago Palace Way, Lagos • 0810-002-4096
 */

const SALON_INFO = {
  name: "THE DAMIAN LABEL",
  shortName: "TDL",
  tagline: "Luxury Wig Revamping, Wigging & Nails Studio 💅✨",
  phone: "0810-002-4096",
  phoneFormatted: "+234 810 002 4096",
  whatsappUrl: "https://wa.me/2348100024096",
  email: "bookings@thedamianlabel.com",
  instagram: "@thedamianlabel",
  address: "Ago Palace Way, Lagos, Nigeria",
  depositAmount: 5000,
  currency: "₦"
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
    badgeType: "badge-popular",
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
    badgeType: "badge-hot",
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
    badgeType: "badge-vip",
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
    badgeType: "badge-popular",
    description: "Professional wand curls, mermaid crimps, bob trimming, or Hollywood volume waves on your clean wig.",
    image: "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?auto=format&fit=crop&w=700&q=80"
  },

  // 2. WIGGING & GLUELESS
  {
    id: "wigging-glueless",
    category: "wigging",
    name: "Glueless Wig Customization (Ready-to-Wear)",
    price: 20000,
    duration: "48 hrs turnaround",
    badge: "No Glue Needed",
    badgeType: "badge-vip",
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
    badgeType: "badge-popular",
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
    badgeType: "badge-hot",
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
    badgeType: "badge-popular",
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
    badgeType: "badge-popular",
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
    badgeType: "badge-vip",
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
    badgeType: "badge-popular",
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
    badgeType: "badge-vip",
    description: "Deluxe Wig Revamp with Bouncy Curls OR Silk Press + Sculpted Acrylic Full Set with nail art. Look like royalty!",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=700&q=80"
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

const STYLISTS = [
  {
    id: "stylist-any",
    name: "First Available Specialist",
    title: "Fastest Service Turnaround",
    rating: "5.0",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
    specialty: "Matched with our available expert technician"
  },
  {
    id: "stylist-damian",
    name: "Damian",
    title: "Lead Wig Revamp & Styling Specialist",
    rating: "4.99",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80",
    specialty: "Wig Revamping, Bouncy Curls, Glueless Melts"
  },
  {
    id: "stylist-chioma",
    name: "Chioma",
    title: "Senior Nail Artist & Acrylic Sculptor",
    rating: "4.98",
    avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=300&q=80",
    specialty: "XXL Acrylics, 3D Flower Charms, Gel Polish"
  },
  {
    id: "stylist-amara",
    name: "Amara",
    title: "Hair Ventilation & Wigging Expert",
    rating: "4.97",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80",
    specialty: "Lace Repair, Balding Closures, Machine Wigging"
  }
];

function formatNaira(num) {
  return "₦" + Number(num).toLocaleString();
}

console.log("The Damian Label (TDL) Loaded successfully.");
