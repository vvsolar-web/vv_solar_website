import { useEffect, useMemo, useState } from "react";
import {
  Sun, Phone, MessageCircle, ShieldCheck, Award, Zap, BatteryCharging,
  Home as HomeIcon, Building2, Wrench, ArrowRight, CheckCircle2, Star,
  ClipboardList, FileCheck2, Sparkles, Menu, X, MapPin, Mail
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import logo from "@/assets/vv-solar-logo.png";
import hero from "@/assets/hero-solar.jpg";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";

const PHONE = "+919063800858";
const WHATSAPP = "https://wa.me/919063800858";

const NAV = [
  { label: "Services", href: "#services" },
  { label: "Savings", href: "#calculator" },
  { label: "Pricing", href: "#pricing" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

/* ───────────────────────── NAV ───────────────────────── */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/85 backdrop-blur-xl border-b border-border/60 shadow-card" : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-16 sm:h-20 items-center justify-between">
        <a href="#top" className="group flex items-center gap-3">
  <div className="relative">
    <div className="absolute inset-0 rounded-full bg-gradient-gold opacity-40 blur-md group-hover:opacity-70 transition-opacity" />
    <div className="relative rounded-full bg-background/40 ring-1 ring-primary/40 p-1 backdrop-blur-sm">
      <img src={logo} alt="VV Solar Solutions logo" className="h-9 w-9 sm:h-11 sm:w-11 object-contain" />
    </div>
  </div>
  <div className="leading-tight">
    <div className="font-display text-base sm:text-lg font-bold tracking-tight uppercase text-gradient-gold">
      VV Solar Solutions
    </div>
    <div className="text-[8px] sm:text-[10px] uppercase tracking-[0.16em] text-primary/90 font-semibold -mt-0.5">
      Unit of Techno Sync Soft Solutions Pvt Ltd
    </div>
  </div>
</a>
        <nav className="hidden md:flex items-center gap-8">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
              {n.label}
            </a>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <Button asChild variant="gold" size="sm">
            <a href={`tel:${PHONE}`}><Phone className="mr-2 h-4 w-4" />Call Now</a>
          </Button>
        </div>
        <button
          className="md:hidden p-2 text-foreground"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border/60 bg-background/95 backdrop-blur-xl">
          <div className="container-x py-4 flex flex-col gap-2">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="py-3 text-base font-medium border-b border-border/40 last:border-0"
              >
                {n.label}
              </a>
            ))}
            <Button asChild variant="gold" className="mt-3">
              <a href={`tel:${PHONE}`}><Phone className="mr-2 h-4 w-4" />Call Now</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

/* ───────────────────────── HERO ───────────────────────── */
function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] flex items-center overflow-hidden">
      <img src={hero} alt="Premium rooftop solar installation at golden hour" className="absolute inset-0 h-full w-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 bg-gradient-glow" />
      <div className="container-x relative z-10 pt-28 pb-20 sm:pt-32">
        <div className="max-w-3xl animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs sm:text-sm">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            <span className="text-muted-foreground">MNRE & TGREDCO Empanelled Vendor</span>
          </div>
          <h1 className="mt-6 font-display text-4xl sm:text-6xl lg:text-7xl font-bold leading-[1.05]">
            Power your home with <span className="text-gradient-gold">smart solar.</span>
          </h1>
          <p className="mt-6 text-base sm:text-lg lg:text-xl text-muted-foreground max-w-xl">
            Premium rooftop solar installations across Telangana. Save up to <span className="text-foreground font-semibold">80% on electricity bills</span> and claim central government subsidy up to <span className="text-primary font-semibold">₹78,000</span>.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Button asChild variant="gold" size="xl" className="animate-pulse-gold">
              <a href={`tel:${PHONE}`}><Phone className="mr-2 h-5 w-5" />Call Now</a>
            </Button>
            <Button asChild variant="outlineGold" size="xl">
              <a href={WHATSAPP} target="_blank" rel="noreferrer"><MessageCircle className="mr-2 h-5 w-5" />WhatsApp Quote</a>
            </Button>
          </div>
          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-muted-foreground">
            <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Free Site Survey</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> 25-Year Panel Warranty</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Loan up to 90%</div>
          </div>
        </div>
      </div>
      {/* fade to next section */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-background" />
    </section>
  );
}

/* ───────────────────────── TRUST ───────────────────────── */
const TRUST = [
  { icon: ShieldCheck, value: "25 Year", label: "Performance Warranty" },
  { icon: Award, value: "Premium", label: "Quality Components" },
  { icon: FileCheck, value: "100%", label: "Subsidy Support" },
  { icon: Clock, value: "On-Time", label: "Installation Guarantee" },
];
function TrustBar() {
  return (
    <section className="relative -mt-10 z-20">
      <div className="container-x">
        <div className="glass rounded-2xl px-4 sm:px-8 py-6 grid grid-cols-2 md:grid-cols-4 gap-6 shadow-elevated">
          {TRUST.map(({ icon: Icon, value, label }) => (
            <div key={label} className="flex items-center gap-3 sm:gap-4">
              <div className="h-11 w-11 rounded-xl bg-primary/15 text-primary flex items-center justify-center shrink-0">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <div className="font-display text-lg sm:text-xl font-bold">{value}</div>
                <div className="text-xs sm:text-sm text-muted-foreground">{label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── SERVICES ───────────────────────── */
const SERVICES = [
  { icon: HomeIcon, title: "Residential Solar", desc: "Rooftop on-grid systems for homes — 1KW to 10KW with central subsidy support." },
  { icon: Building2, title: "Commercial Solar", desc: "Reduce operational costs with custom industrial & commercial solar plants." },
  { icon: BatteryCharging, title: "Hybrid & Off-Grid", desc: "Battery-backed solar systems for uninterrupted power, day or night." },
  { icon: Wrench, title: "Maintenance & AMC", desc: "Cleaning, monitoring and annual maintenance to keep generation peak-performing." },
];
function Services() {
  return (
    <section id="services" className="section-pad relative">
      <div className="container-x">
        <SectionHeader eyebrow="What we do" title={<>End-to-end <span className="text-gradient-gold">solar solutions.</span></>} />
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group relative rounded-2xl border border-border bg-gradient-surface p-6 sm:p-7 shadow-card hover:shadow-gold transition-all duration-500 hover:-translate-y-1"
            >
              <div className="h-12 w-12 rounded-xl bg-primary/15 text-primary flex items-center justify-center mb-5 group-hover:bg-gradient-gold group-hover:text-primary-foreground transition-colors">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── CALCULATOR ───────────────────────── */
function Calculator() {
  const [bill, setBill] = useState<string>("3000");
  const monthly = useMemo(() => {
    const n = Number(bill) || 0;
    return Math.round(n * 0.8);
  }, [bill]);
  const yearly = monthly * 12;
  const lifetime = monthly * 12 * 25;

  return (
    <section id="calculator" className="section-pad relative">
      <div className="container-x">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <SectionHeader align="left" eyebrow="Savings calculator" title={<>See how much <span className="text-gradient-gold">you'll save.</span></>} />
            <p className="mt-5 text-muted-foreground max-w-lg">
              Enter your average monthly electricity bill. Our customers typically save up to 80% with a properly-sized rooftop solar system.
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              {["Net metering — sell excess units to grid", "Subsidy support up to ₹78,000", "Loan available up to 90% of cost"].map((t) => (
                <li key={t} className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-primary mt-0.5" /> {t}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl bg-gradient-surface border border-border shadow-elevated p-6 sm:p-8">
            <Label htmlFor="bill" className="text-sm text-muted-foreground">Average monthly bill (₹)</Label>
            <Input
              id="bill" type="number" min={0} value={bill}
              onChange={(e) => setBill(e.target.value)}
              className="mt-2 h-14 text-2xl font-display font-bold bg-background/40 border-border focus-visible:ring-primary"
              placeholder="e.g. 3000"
            />
            <div className="mt-6 grid grid-cols-3 gap-3">
              <Stat label="Monthly" value={`₹${monthly.toLocaleString("en-IN")}`} />
              <Stat label="Yearly" value={`₹${yearly.toLocaleString("en-IN")}`} highlight />
              <Stat label="25-Year" value={`₹${lifetime.toLocaleString("en-IN")}`} />
            </div>
            <Button asChild variant="gold" size="lg" className="w-full mt-6">
              <a href={WHATSAPP} target="_blank" rel="noreferrer">
                Get personalised quote <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
function Stat({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div className={`rounded-xl p-3 sm:p-4 text-center border ${highlight ? "border-primary/50 bg-primary/10" : "border-border bg-background/30"}`}>
      <div className="text-[10px] sm:text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
      <div className={`mt-1 font-display font-bold text-sm sm:text-lg ${highlight ? "text-primary" : ""}`}>{value}</div>
    </div>
  );
}

/* ───────────────────────── PRICING ───────────────────────── */
const PRICING = [
  { kw: "2 KW", cost: 144000, subsidy: 60000, net: 84000, space: 200, units: 240 },
  { kw: "3 KW", cost: 216400, subsidy: 78000, net: 138400, space: 300, units: 360, popular: true },
  { kw: "4 KW", cost: 259600, subsidy: 78000, net: 181600, space: 400, units: 480 },
  { kw: "5 KW", cost: 324500, subsidy: 78000, net: 246500, space: 500, units: 600 },
  { kw: "6 KW", cost: 389400, subsidy: 78000, net: 311400, space: 600, units: 720 },
  { kw: "7 KW", cost: 454300, subsidy: 78000, net: 376300, space: 700, units: 840 },
  { kw: "8 KW", cost: 519200, subsidy: 78000, net: 441200, space: 800, units: 960 },
  { kw: "9 KW", cost: 584100, subsidy: 78000, net: 506100, space: 900, units: 1080 },
  { kw: "10 KW", cost: 649000, subsidy: 78000, net: 571000, space: 1000, units: 1200 },
];
const fmt = (n: number) => `₹${n.toLocaleString("en-IN")}`;
function Pricing() {
  return (
    <section id="pricing" className="section-pad relative bg-gradient-surface">
      <div className="container-x">
        <SectionHeader eyebrow="Solar packages" title={<>Transparent pricing, <span className="text-gradient-gold">subsidy included.</span></>} subtitle="Authorised empanelled vendor under Central Government (MNRE) and TGREDCO. Subsidy applied directly." />

        {/* Mobile cards */}
        <div className="mt-12 grid gap-4 lg:hidden">
          {PRICING.map((p) => (
            <div key={p.kw} className={`rounded-2xl p-5 border ${p.popular ? "border-primary/60 bg-primary/5 ring-gold-soft" : "border-border bg-background/40"}`}>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-display text-2xl font-bold">{p.kw}</div>
                  <div className="text-xs text-muted-foreground">{p.space} sqft • {p.units} units/mo</div>
                </div>
                {p.popular && <span className="text-[10px] uppercase tracking-wider bg-gradient-gold text-primary-foreground font-bold px-2.5 py-1 rounded-full">Popular</span>}
              </div>
              <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                <div><div className="text-[10px] uppercase text-muted-foreground">Cost</div><div className="text-sm font-semibold">{fmt(p.cost)}</div></div>
                <div><div className="text-[10px] uppercase text-muted-foreground">Subsidy</div><div className="text-sm font-semibold text-primary">−{fmt(p.subsidy)}</div></div>
                <div><div className="text-[10px] uppercase text-muted-foreground">Pay</div><div className="text-sm font-bold">{fmt(p.net)}</div></div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop table */}
        <div className="mt-12 hidden lg:block rounded-2xl overflow-hidden border border-border shadow-elevated">
          <table className="w-full text-sm">
            <thead className="bg-background/60 backdrop-blur">
              <tr className="text-left">
                {["Capacity", "Project Cost", "Subsidy", "Net Payable", "Space (sqft)", "Units / Month"].map((h) => (
                  <th key={h} className="px-6 py-4 font-display font-semibold text-foreground/90">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {PRICING.map((p, i) => (
                <tr
                  key={p.kw}
                  className={`border-t border-border/60 transition-colors hover:bg-primary/5 ${
                    p.popular ? "bg-primary/10" : i % 2 ? "bg-background/30" : ""
                  }`}
                >
                  <td className="px-6 py-4 font-display font-bold text-base">
                    {p.kw} {p.popular && <span className="ml-2 text-[10px] uppercase tracking-wider bg-gradient-gold text-primary-foreground font-bold px-2 py-0.5 rounded-full align-middle">Popular</span>}
                  </td>
                  <td className="px-6 py-4 text-muted-foreground">{fmt(p.cost)}</td>
                  <td className="px-6 py-4 text-primary font-semibold">−{fmt(p.subsidy)}</td>
                  <td className="px-6 py-4 font-bold">{fmt(p.net)}</td>
                  <td className="px-6 py-4 text-muted-foreground">{p.space}</td>
                  <td className="px-6 py-4 text-muted-foreground">{p.units}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-6 text-xs text-muted-foreground text-center max-w-3xl mx-auto">
          * Project cost is for 3-feet height GI module mounting structure with 25 meters of cable. Additional height & cable charged extra. Solar panels: 25-year warranty • Inverter: 10-year warranty.
        </p>
      </div>
    </section>
  );
}

/* ───────────────────────── PROCESS ───────────────────────── */
const STEPS = [
  { icon: Phone, title: "Free consultation", desc: "Call us or share your bill — we'll guide you on the right system size." },
  { icon: ClipboardList, title: "Site survey", desc: "Our engineers visit, measure your roof and design a custom layout." },
  { icon: FileCheck2, title: "Subsidy & approvals", desc: "We handle DISCOM paperwork, net metering and subsidy claims end-to-end." },
  { icon: Sun, title: "Install & activate", desc: "Premium panels installed, commissioned and connected to the grid." },
];
function Process() {
  return (
    <section id="process" className="section-pad">
      <div className="container-x">
        <SectionHeader eyebrow="How it works" title={<>From enquiry to <span className="text-gradient-gold">power-on.</span></>} />
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {STEPS.map(({ icon: Icon, title, desc }, i) => (
            <div key={title} className="relative rounded-2xl border border-border bg-gradient-surface p-6 shadow-card">
              <div className="absolute -top-4 left-6 h-8 w-8 rounded-full bg-gradient-gold text-primary-foreground font-display font-bold flex items-center justify-center text-sm shadow-gold">
                {i + 1}
              </div>
              <Icon className="h-7 w-7 text-primary mt-2" />
              <h3 className="mt-4 font-display text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── GALLERY ───────────────────────── */
const IMAGES = [
  { src: g1, alt: "VV Solar technicians installing solar panels on a residential rooftop" },
  { src: g3, alt: "Commercial solar plant on industrial rooftop" },
  { src: g2, alt: "Close-up of monocrystalline solar panels" },
  { src: g4, alt: "Happy family in front of their solar-powered home" },
];
function Gallery() {
  return (
    <section className="section-pad bg-gradient-surface">
      <div className="container-x">
        <SectionHeader eyebrow="Our installations" title={<>Real homes, <span className="text-gradient-gold">real savings.</span></>} />
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {IMAGES.map((img, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-2xl border border-border shadow-card group ${
                i === 0 ? "col-span-2 row-span-2 aspect-square lg:aspect-auto lg:row-span-2" : "aspect-square"
              }`}
            >
              <img src={img.src} alt={img.alt} loading="lazy" width={1280} height={960} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── TESTIMONIALS ───────────────────────── */
const REVIEWS = [
  { quote: "Excellent service and savings! Our bill dropped from ₹4,200 to ₹600 per month. Installation was clean and on time.", name: "Ravi Kumar", role: "Homeowner, Hyderabad" },
  { quote: "Professional team and quick installation. The subsidy paperwork was handled completely by VV Solar — zero hassle.", name: "Lakshmi Reddy", role: "Homeowner, Secunderabad" },
  { quote: "Highly recommended. We installed a 10KW system on our factory and ROI is tracking faster than projected.", name: "Mahesh Rao", role: "Business Owner, Medchal" },
];
function Testimonials() {
  return (
    <section className="section-pad">
      <div className="container-x">
        <SectionHeader eyebrow="Why Customers Choose Us" title={<>Trusted solar solutions for <span className="text-gradient-gold">modern energy needs</span> at homes & businesses.</>} />
        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {REVIEWS.map((r) => (
            <figure key={r.name} className="rounded-2xl border border-border bg-gradient-surface p-7 shadow-card flex flex-col">
              <div className="flex gap-1 text-primary">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
              </div>
              <blockquote className="mt-4 text-foreground/90 leading-relaxed flex-1">"{r.quote}"</blockquote>
              <figcaption className="mt-6 pt-5 border-t border-border/60">
                <div className="font-display font-semibold">{r.name}</div>
                <div className="text-xs text-muted-foreground">{r.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── CONTACT ───────────────────────── */
function Contact() {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Thank you! We'll call you within 24 hours.");
    (e.target as HTMLFormElement).reset();
  };
  return (
    <section id="contact" className="section-pad bg-gradient-surface">
      <div className="container-x">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <SectionHeader align="left" eyebrow="Get in touch" title={<>Free site survey, <span className="text-gradient-gold">zero obligation.</span></>} />
            <p className="mt-5 text-muted-foreground max-w-md">Talk to a solar expert today. We'll assess your roof and electricity needs and share a personalised proposal within 48 hours.</p>
            <div className="mt-8 space-y-5">
              <ContactRow icon={Phone} label="Call us" value="+91 90638 00858" href={`tel:${PHONE}`} />
              <ContactRow icon={MessageCircle} label="WhatsApp" value="Chat with us instantly" href={WHATSAPP} />
              <ContactRow icon={Mail} label="Email" value="info@vvsolarsolutions.in" href="mailto:info@vvsolarsolutions.in" />
              <ContactRow icon={MapPin} label="Office" value="H.No 1-3-7/315, Chendrabella Vistas, RP Nilayam, Old Alwal, Medchal–Malkajgiri, Telangana 500010" />
            </div>
          </div>
          <form onSubmit={onSubmit} className="rounded-3xl bg-background/40 border border-border shadow-elevated p-6 sm:p-8 space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" required placeholder="Your full name" className="mt-1.5 bg-background/40 border-border focus-visible:ring-primary" />
              </div>
              <div>
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" required type="tel" placeholder="+91" className="mt-1.5 bg-background/40 border-border focus-visible:ring-primary" />
              </div>
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="you@example.com" className="mt-1.5 bg-background/40 border-border focus-visible:ring-primary" />
            </div>
            <div>
              <Label htmlFor="msg">How can we help?</Label>
              <Textarea id="msg" rows={4} placeholder="Tell us about your monthly bill and roof type…" className="mt-1.5 bg-background/40 border-border focus-visible:ring-primary" />
            </div>
            <Button type="submit" variant="gold" size="lg" className="w-full">
              Request free site survey <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <p className="text-xs text-muted-foreground text-center">We respect your privacy. No spam, ever.</p>
          </form>
        </div>
      </div>
    </section>
  );
}
function ContactRow({ icon: Icon, label, value, href }: { icon: any; label: string; value: string; href?: string }) {
  const Tag = (href ? "a" : "div") as any;
  return (
    <Tag href={href} target={href?.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="flex items-start gap-4 group">
      <div className="h-11 w-11 rounded-xl bg-primary/15 text-primary flex items-center justify-center shrink-0 group-hover:bg-gradient-gold group-hover:text-primary-foreground transition-colors">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <div className="text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
        <div className="font-medium text-foreground/90 mt-0.5">{value}</div>
      </div>
    </Tag>
  );
}

/* ───────────────────────── FOOTER ───────────────────────── */
function Footer() {
  return (
    <footer className="border-t border-border/60 py-12">
      <div className="container-x grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-3">
            <img src={logo} alt="VV Solar" className="h-10 w-10 object-contain" />
            <div>
              <div className="font-display font-bold">VV Solar Solutions</div>
              <div className="text-xs text-muted-foreground">Unit of Techno Sync Soft Solutions Pvt Ltd</div>
            </div>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">Crafting a sustainable planet, inspired by the sun.</p>
        </div>
        <FooterCol title="Company" links={[["About", "#"], ["Services", "#services"], ["Pricing", "#pricing"]]} />
        <FooterCol title="Resources" links={[["Subsidy info", "#pricing"], ["Process", "#process"], ["Contact", "#contact"]]} />
        <div>
          <div className="font-display font-semibold mb-3">Authorised by</div>
          <p className="text-sm text-muted-foreground">MNRE • TGREDCO Empanelled Vendor</p>
          <div className="mt-4 flex gap-3">
            <Button asChild variant="gold" size="sm"><a href={`tel:${PHONE}`}><Phone className="mr-2 h-4 w-4" />Call</a></Button>
            <Button asChild variant="outlineGold" size="sm"><a href={WHATSAPP} target="_blank" rel="noreferrer"><MessageCircle className="mr-2 h-4 w-4" />WhatsApp</a></Button>
          </div>
        </div>
      </div>
      <div className="container-x mt-10 pt-6 border-t border-border/40 text-xs text-muted-foreground flex flex-col sm:flex-row justify-between gap-3">
        <div>© {new Date().getFullYear()} VV Solar Solutions. All rights reserved.</div>
        <div>Hyderabad • Telangana, India</div>
      </div>
    </footer>
  );
}
function FooterCol({ title, links }: { title: string; links: [string, string][] }) {
  return (
    <div>
      <div className="font-display font-semibold mb-3">{title}</div>
      <ul className="space-y-2 text-sm">
        {links.map(([l, h]) => (
          <li key={l}><a href={h} className="text-muted-foreground hover:text-primary transition-colors">{l}</a></li>
        ))}
      </ul>
    </div>
  );
}

/* ───────────────────────── FLOATING CTAs ───────────────────────── */
function FloatingCTAs() {
  return (
    <>
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-20 right-4 sm:bottom-6 sm:right-6 z-40 h-14 w-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-elevated hover:scale-110 transition-transform animate-float"
      >
        <MessageCircle className="h-7 w-7" />
      </a>
      {/* Sticky call bar (mobile only) */}
      <div className="md:hidden fixed bottom-0 inset-x-0 z-40 border-t border-border/60 bg-background/95 backdrop-blur-xl px-4 py-3 flex gap-2 safe-bottom">
        <Button asChild variant="gold" className="flex-1"><a href={`tel:${PHONE}`}><Phone className="mr-2 h-4 w-4" />Call Now</a></Button>
        <Button asChild variant="outlineGold" className="flex-1"><a href={WHATSAPP} target="_blank" rel="noreferrer"><MessageCircle className="mr-2 h-4 w-4" />WhatsApp</a></Button>
      </div>
    </>
  );
}

/* ───────────────────────── HELPERS ───────────────────────── */
function SectionHeader({
  eyebrow, title, subtitle, align = "center",
}: { eyebrow: string; title: React.ReactNode; subtitle?: string; align?: "left" | "center" }) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 text-primary px-3 py-1 text-xs font-semibold uppercase tracking-wider">
        <Sun className="h-3.5 w-3.5" /> {eyebrow}
      </div>
      <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">{title}</h2>
      {subtitle && <p className="mt-4 text-muted-foreground">{subtitle}</p>}
    </div>
  );
}

/* ───────────────────────── PAGE ───────────────────────── */
const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden pb-20 md:pb-0">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <Calculator />
        <Pricing />
        <Process />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingCTAs />
    </div>
  );
};

export default Index;
