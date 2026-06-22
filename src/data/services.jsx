import {
  Truck, Ship, Plane, Warehouse, FileCheck2, Boxes,
  ShieldCheck, Wallet, Clock, MapPin, Headset, PackageCheck,
} from 'lucide-react'

/**
 * Single source of truth for every service. Drives both the home-page grid
 * and the data-driven /services/:slug template. House style: say what the
 * customer actually gets, in plain words, and admit the trade-offs. No
 * superlatives we can't back up.
 */
export const SERVICES = [
  {
    slug: 'road',
    icon: <Truck />,
    name: 'Road Freight',
    short: 'Full loads and part loads across Europe, on tracked trucks with a pickup slot we keep.',
    tagline: 'Road freight, without the back-and-forth',
    intro:
      'A pallet or a full trailer, city run or cross-border haul. You get a fixed all-in price, a named driver, and a pickup window we actually keep — not a four-hour “sometime today”.',
    priceFrom: '€120',
    benefits: [
      { icon: <Wallet />, title: 'The price is the price', desc: 'We quote all-in. No fuel surcharge that turns up later, no waiting-time you never agreed to.' },
      { icon: <MapPin />, title: 'You can see the truck', desc: 'Live GPS on every load, and a link you can hand straight to your own customer.' },
      { icon: <ShieldCheck />, title: 'Covered door to door', desc: 'Full-value cover from the moment we lift it to the moment it’s signed for.' },
    ],
    steps: [
      'Tell us the pickup, the drop, and what’s on the pallet',
      'Pick a vehicle size against a fixed, all-in price',
      'A vetted driver collects inside the agreed window',
      'Track it to the door and get a signed proof of delivery',
    ],
    specs: [
      ['Mini truck', 'Up to 750 kg', 'City & last-mile'],
      ['Tempo / LCV', 'Up to 2.5 t', 'Regional loads'],
      ['Box truck', 'Up to 9 t', 'Intercity full loads'],
      ['Artic / trailer', '9–25 t', 'Long-haul bulk'],
    ],
    specHead: ['Vehicle', 'Capacity', 'Best for'],
  },
  {
    slug: 'ocean',
    icon: <Ship />,
    name: 'Ocean Freight',
    short: 'FCL and LCL through the ports we run, with customs and haulage on both ends.',
    tagline: 'Sea freight, paperwork included',
    intro:
      'Full containers and shared containers across our core lanes. We book the space, consolidate if you’re sharing, and clear customs both ends — so the box keeps moving while you get on with your day.',
    priceFrom: '€480',
    benefits: [
      { icon: <Wallet />, title: 'Routed to your priority', desc: 'Tell us whether it’s price or the date that matters — and we’ll say so when the cheap option isn’t worth the extra week.' },
      { icon: <FileCheck2 />, title: 'Customs, handled', desc: 'Our brokers file the entries so containers clear instead of sitting on demurrage.' },
      { icon: <PackageCheck />, title: 'Both ends covered', desc: 'First and last-mile haulage on either side, if you’d rather one company held the whole chain.' },
    ],
    steps: [
      'Send the cargo details and the destination port',
      'Choose FCL or LCL against a clear all-in quote',
      'We book the space, collect, and file the entries',
      'Track each milestone through to final delivery',
    ],
    specs: [
      ['LCL (shared)', 'Per CBM', 'Smaller shipments'],
      ['20ft FCL', '~28 CBM', 'Up to ~10 pallets'],
      ['40ft FCL', '~58 CBM', 'Up to ~21 pallets'],
      ['40ft high-cube', '~68 CBM', 'High-volume cargo'],
    ],
    specHead: ['Container', 'Capacity', 'Best for'],
  },
  {
    slug: 'air',
    icon: <Plane />,
    name: 'Air Freight',
    short: 'Express and standard air for the shipments that genuinely can’t wait.',
    tagline: 'Air freight, for when the date is the point',
    intro:
      'When something has to land tomorrow, we book the next viable flight, screen it, and clear it on arrival. We’ll also tell you honestly when sea-air or a later flight saves real money for a day’s difference.',
    priceFrom: '€3.20 / kg',
    benefits: [
      { icon: <Clock />, title: 'Next flight out', desc: 'Express options leave within hours of collection — screened, documented and ready.' },
      { icon: <ShieldCheck />, title: 'Handled with care', desc: 'Temperature control and screened handling for pharma, perishables and the fragile stuff.' },
      { icon: <MapPin />, title: 'Updates without asking', desc: 'Status at every checkpoint, pushed to you — tarmac to doorstep.' },
    ],
    steps: [
      'Send the dimensions, weight and the deadline',
      'Pick express or standard with an instant quote',
      'We collect, screen, and book the flight',
      'Track in real time through to delivery',
    ],
    specs: [
      ['Express', '24–48 hrs', 'Urgent & perishable'],
      ['Standard', '3–5 days', 'Balanced cost & speed'],
      ['Economy', '5–8 days', 'Non-urgent freight'],
      ['Charter', 'On request', 'Oversized / full plane'],
    ],
    specHead: ['Service', 'Transit', 'Best for'],
  },
  {
    slug: 'warehousing',
    icon: <Warehouse />,
    name: 'Warehousing',
    short: 'Bonded and climate storage with stock counts you can trust, plus pick-pack when you need it.',
    tagline: 'Storage that tells you the truth about your stock',
    intro:
      'Bonded, ambient or climate-controlled space with inventory you can actually reconcile, plus pick-pack and fulfilment when you’re ready. Pay for the space you use, scale it for the peak, hand it back when it’s quiet.',
    priceFrom: '€8 / pallet',
    benefits: [
      { icon: <Boxes />, title: 'Stock you can trust', desc: 'Every SKU scanned in and out, counts that reconcile, one dashboard to read it from.' },
      { icon: <ShieldCheck />, title: 'Secure and covered', desc: 'Monitored around the clock, climate-controlled where it matters, fully insured.' },
      { icon: <Wallet />, title: 'Pay for what you fill', desc: 'Space flexes with your season — no paying for empty racking in February.' },
    ],
    steps: [
      'Send your stock to the nearest Meridian hub',
      'We receive, scan and shelve every item',
      'Orders are picked, packed and dispatched',
      'Watch the counts move in real time',
    ],
    specs: [
      ['Ambient', 'Standard goods', 'General storage'],
      ['Climate-controlled', '2–8°C / frozen', 'Food & pharma'],
      ['Bonded', 'Pre-clearance', 'Import/export hold'],
      ['Fulfilment', 'Pick & pack', 'E-commerce orders'],
    ],
    specHead: ['Zone', 'Conditions', 'Best for'],
  },
  {
    slug: 'customs',
    icon: <FileCheck2 />,
    name: 'Customs Clearance',
    short: 'Licensed brokers on your entries — classification, duties and the awkward edge cases.',
    tagline: 'Customs that clears, not customs that sits',
    intro:
      'Licensed brokers handle your declarations, duty and compliance so cargo clears instead of racking up demurrage. One team across every lane, and a straight answer when a classification is genuinely a judgment call.',
    priceFrom: '€45',
    benefits: [
      { icon: <FileCheck2 />, title: 'Filed right, first time', desc: 'We prepare and lodge every declaration accurately and on time — the boring superpower.' },
      { icon: <ShieldCheck />, title: 'Compliant, lane by lane', desc: 'Current on the rules across the ports we file at, so your shipment isn’t the test case.' },
      { icon: <Clock />, title: 'Out faster', desc: 'Pre-clearance and digital filing cut the wait at the border.' },
    ],
    steps: [
      'Send the commercial invoice and cargo details',
      'We classify the goods and work out the duty',
      'We lodge the entry and pay duty on your behalf',
      'Cargo is released and carries on its way',
    ],
    specs: [
      ['Import clearance', 'Inbound', 'Receiving goods'],
      ['Export clearance', 'Outbound', 'Sending goods'],
      ['Duty management', 'Tariffs & taxes', 'Cost control'],
      ['Compliance review', 'Documentation', 'Reducing risk'],
    ],
    specHead: ['Service', 'Scope', 'Best for'],
  },
  {
    slug: 'supply-chain',
    icon: <Boxes />,
    name: 'Supply Chain',
    short: 'One desk across road, sea and air when you’d rather manage outcomes than bookings.',
    tagline: 'Your whole chain, one phone number',
    intro:
      'When you’re running enough volume that juggling forwarders is its own job, we take the lot. One coordinator, one dashboard across every mode, and a planning rhythm — so you manage outcomes instead of chasing containers.',
    priceFrom: 'Let’s talk',
    benefits: [
      { icon: <Boxes />, title: 'One view of everything', desc: 'Every shipment, mode and document in one place — and a weekly read-out that’s actually worth reading.' },
      { icon: <Headset />, title: 'A coordinator who knows you', desc: 'A named team that learns your products, your seasons and your customers’ quirks.' },
      { icon: <MapPin />, title: 'Problems surfaced early', desc: 'Alerts and analytics across the chain, so you hear about the delay while you can still do something.' },
    ],
    steps: [
      'We map your current flows and where they hurt',
      'We design a plan across road, sea and air',
      'Onboard onto one dashboard with live tracking',
      'Review and tune it with your named team',
    ],
    specs: [
      ['Visibility', 'All modes', 'A control tower'],
      ['Demand planning', 'Forecasting', 'Fewer stockouts'],
      ['Multi-modal', 'Road/sea/air', 'Cost & speed mix'],
      ['Analytics', 'Reporting', 'Continuous savings'],
    ],
    specHead: ['Capability', 'Scope', 'Outcome'],
  },
]

export const getService = (slug) => SERVICES.find((s) => s.slug === slug)

/** Questions we get on the phone, answered the way we'd answer them. */
export const COMMON_FAQS = [
  {
    q: 'How fast do I get a price?',
    a: 'Send the pickup, destination and cargo details on any service page or the contact form. A real coordinator replies the same day — usually within the hour in working hours, by the next morning if you catch us overnight. No obligation.',
  },
  {
    q: 'Is my cargo insured?',
    a: 'Yes — full-value cover, door to door, on every booking. For high-value or unusual goods we’ll arrange specific cover and tell you what it costs before you commit, not after.',
  },
  {
    q: 'Can I track it?',
    a: 'Always. Every booking has a live link and milestone alerts, and you can share that link with your own customer without them needing a login.',
  },
  {
    q: 'What if the plan changes?',
    a: 'Plans change — that’s freight. Call or email the desk and we’ll reschedule or reroute. You’ll reach someone who already knows your shipment, not a ticket queue.',
  },
]
