import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Bed, Wifi, Shirt, Trees, Bus, Check, Phone, Mail, MapPin,
  ShieldCheck, Home, Tv, Sparkles, Menu, X, Send,
} from "lucide-react";
import logoDark from "@/assets/logo-dark.png";
import logoWhite from "@/assets/logo-white.png";
import heroHome from "@/assets/house-exterior.jpeg";
import aboutCommunity from "@/assets/about-community.jpeg";
import galTeam from "@/assets/team-photo.jpeg";
import galCare from "@/assets/care-support.jpeg";
import galKitchen from "@/assets/kitchen.jpeg";
import galLiving from "@/assets/living-room.jpeg";
import galHomecare from "@/assets/homecare.jpeg";
// import { EkgLine } from "@/components/EkgLine";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Advantaged Medical Solutions   Housing & Homecare | Spring TX" },
      { name: "description", content: "Safe, supportive & affordable shared housing for veterans and independent adults in Spring, Texas. Move-in ready, all utilities paid, drug-free environment." },
      { property: "og:title", content: "Advantaged Medical Solutions   Housing & Homecare" },
      { property: "og:description", content: "Safe, supportive housing for veterans and independent adults in Spring, Texas." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800&family=Inter:wght@300;400;500;600;700&display=swap" },
    ],
  }),
  component: Index,
});

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.2, 0.8, 0.2, 1] as const } },
};

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Programs", href: "#programs" },
    { label: "Gallery", href: "#gallery" },
    { label: "Goals", href: "#goals" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className={`fixed inset-x-0 top-0 z-50 bg-white transition-all duration-300 ${scrolled ? "shadow-soft" : ""}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
        <a href="#home" className="flex items-center gap-3">
          <img src={logoDark} alt="Advantaged Medical Solutions logo" className="h-7 w-auto md:h-10" />
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-charcoal transition-colors hover:text-primary">
              {l.label}
            </a>
          ))}
          <a href="#contact" className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground shadow-soft transition hover:bg-primary/90">
            Apply Now
          </a>
        </nav>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X className="h-6 w-6 text-charcoal" /> : <Menu className="h-6 w-6 text-charcoal" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border bg-white md:hidden">
          <div className="flex flex-col px-4 py-4">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-3 text-sm font-medium text-charcoal hover:text-primary">
                {l.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="mt-2 rounded-full bg-primary px-5 py-3 text-center text-sm font-semibold text-primary-foreground">
              Apply Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative flex min-h-[100svh] items-center overflow-hidden">
      <img src={heroHome} alt="Welcoming home at golden hour" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-32 pb-24 text-center md:pt-40">
        <motion.h1
          initial="hidden" animate="visible" variants={fadeUp}
          className="mt-6 font-display text-4xl font-bold leading-tight text-white sm:text-5xl md:text-7xl"
        >
          Safe, Supportive &<br />
          <span className="text-accent">Affordable Housing</span>
        </motion.h1>
        <motion.p
          initial="hidden" animate="visible" variants={fadeUp}
          transition={{ delay: 0.15 }}
          className="mx-auto mt-6 max-w-2xl text-base text-white/90 md:text-lg"
        >
          For Veterans & Independent Adults.
          Move-in ready homes with all utilities included.
        </motion.p>
        <motion.div
          initial="hidden" animate="visible" variants={fadeUp}
          transition={{ delay: 0.3 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground shadow-elegant transition hover:bg-primary/90">
            Apply Now
          </a>
          <a href="#about" className="inline-flex items-center justify-center rounded-full border-2 border-white/80 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white hover:text-charcoal">
            Learn More
          </a>
        </motion.div>
        <motion.div
          initial="hidden" animate="visible" variants={fadeUp}
          transition={{ delay: 0.45 }}
          className="mt-6 inline-block rounded-full bg-accent/20 border border-accent px-7 py-2 text-sm font-bold tracking-wider text-accent uppercase"
        >
          We Are Income Based 
        </motion.div>
      </div>
      
      {/* <div className="absolute inset-x-0 bottom-0 z-10"> */}
        {/* <EkgLine className="h-16 w-full text-accent" color="currentColor" /> */}
      {/* </div> */}
    </section>
  );
}

function Divider() {
  return (
    <div className="mx-auto my-2 max-w-3xl px-6 text-primary/60">
      {/* <EkgLine className="mx-auto h-8 w-full" /> */}
    </div>
  );
}

function SectionHeading({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <motion.div
      initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUp}
      className="mx-auto max-w-3xl text-center"
    >
      <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">{eyebrow}</span>
      <h2 className="mt-3 font-display text-3xl font-bold text-charcoal md:text-5xl">{title}</h2>
      {sub && <p className="mt-4 text-base text-muted-foreground md:text-lg">{sub}</p>}
    </motion.div>
  );
}

function About() {
  const stats = [
    { label: "Family-Owned Agency", icon: Home },
    { label: "Founded by Medical Professionals", icon: Sparkles },
    { label: "Safe & Inclusive Environment", icon: ShieldCheck },
    { label: "IDD-Focused Care", icon: Check },
  ];
  return (
    <section id="about" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Who We Are</span>
            <h2 className="mt-3 font-display text-3xl font-bold text-charcoal md:text-5xl">
              A safe, clean & inclusive environment.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              AMS Housing & Homecare is a privately-operated and locally owned agency in Houston, Texas, fully capable of meeting the changing needs of individuals with intellectual and developmental disabilities.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              As a family-owned organization founded by two medical professionals, our goal is to provide individuals with disabilities a safe, clean, and inclusive environment. We take pride in providing quality residential services to the developmentally disabled population.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              We are committed to working with individuals with diagnoses ranging from medically fragile, mild to profound intellectual disabilities, varied mood and personality disorders, autism, dual-diagnosed individuals, and those with linkage to the juvenile and adult justice system as well as state hospitals.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 shadow-soft">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-semibold text-charcoal">{s.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="relative">
            <div className="absolute -left-4 -top-4 h-full w-full rounded-2xl border-2 border-primary/30" aria-hidden />
            <img
              src={aboutCommunity}
              alt="Individuals with disabilities enjoying time together"
              className="relative h-full w-full rounded-2xl object-cover shadow-elegant"
              loading="lazy"
              width={1280}
              height={1024}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const provides = [
    "Nursing / LPN Services",
    "Personal / Private Room",
    "Personal / Private Bathroom",
    "Dining Area",
    "Protective Care and Watchful Oversight",
    "Supervision of Personal Care",
    "Supervision of Medication and Nutrition",
    "Assistance with Grooming and Personal Hygiene",
    "Living Room and Visitor's Area",
    "Telephone and Internet Connection / Wi-Fi",
    "3 Balanced Meals and 2 Nutritious Snacks per day",
    "Emergency and Non-Emergency Transportation",
    "Life Skills Training, Recreational, Cultural Activities and Hobbies",
    "Laundry Facilities",
    "24 Hour Lodging",
  ];

  return (
    <section id="services" className="relative bg-secondary/40 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading eyebrow="What We Offer" title="Our Services" />

        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="mx-auto mt-8 max-w-4xl rounded-2xl border border-border bg-card p-8 shadow-soft"
        >
          <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
            AMS Housing &amp; Homecare Community Access Services are designed to help participants acquire, retain or improve self-help, socialization and adaptive skills. Services for those individuals that would like, or need, more independence services are designed to meet the individual's independent needs.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            These services can include a wide variety of community-based activities, with one-on-one staff and services provided to groups of individuals. These services allow individuals with disabilities more access to participate in the activities of their choice, in their own community    with the ability to live a more independent and productive life.
          </p>
        </motion.div>

        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="mx-auto mt-12 max-w-4xl"
        >
          <h3 className="font-display text-2xl font-bold text-primary mb-6">We Provide:</h3>
          <div className="grid gap-3 sm:grid-cols-2">
            {provides.map((item, i) => (
              <motion.div
                key={item}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                transition={{ delay: i * 0.04 }}
                className="flex items-center gap-3 rounded-xl border border-border bg-card px-5 py-3.5 shadow-soft"
              >
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Check className="h-4 w-4" strokeWidth={3} />
                </div>
                <span className="text-sm font-medium text-charcoal">{item}</span>
              </motion.div>
            ))}
          </div>
          <motion.p
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="mt-8 text-center text-sm font-medium text-muted-foreground"
          >
            Would you like a tour of one of our residential settings?{" "}
            <a href="#contact" className="font-semibold text-primary hover:underline">
              Call 832-301-8241 to set up an appointment today!
            </a>
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

function WaiverPrograms() {
  const hcsServices = [
    "Residential Services – Group Home",
    "Host Home / Companion Care",
    "Respite Services",
    "Day Habilitation",
    "Employment Services",
    "Nursing Services",
    "Dental Services",
    "Behavioral Support",
    "Supported Home Living (Transportation)",
    "Social Work",
    "Occupational Therapy",
    "Physical Therapy",
    "Speech Therapy",
    "Dietary Services",
    "Audiology Services",
    "Cognitive Rehabilitation Services",
    "Accessible Minor Home Modifications",
    "Adaptive Aids",
    "Transition Assistance Services",
  ];

  const txhmlServices = [
    "Day Habilitation",
    "Respite Services",
    "Employment Services",
    "Nursing Services",
    "Dental Services",
    "Behavioral Support",
    "Community Support (Transportation)",
    "Occupational Therapy",
    "Physical Therapy",
    "Speech Therapy",
    "Audiology Services",
    "Dietary Services",
    "Minor Home Modifications",
    "Adaptive Aid",
  ];

  return (
    <section id="programs" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Waiver Programs"
          title="Programs We Serve"
          sub="We are proud to support individuals through Texas HCS and TXHmL Medicaid waiver programs."
        />
        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {/* HCS Card */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={fadeUp}
            className="rounded-2xl border-2 border-primary/20 bg-card shadow-elegant overflow-hidden"
          >
            <div className="bg-primary px-8 py-5">
              <h3 className="font-display text-2xl font-bold text-primary-foreground">HCS</h3>
              <p className="mt-1 text-sm text-primary-foreground/80">Home and Community-based Services</p>
            </div>
            <ul className="divide-y divide-border">
              {hcsServices.map((service, i) => (
                <motion.li
                  key={service}
                  initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                  transition={{ delay: i * 0.03 }}
                  className="flex items-center gap-3 px-8 py-3.5"
                >
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check className="h-3.5 w-3.5" strokeWidth={3} />
                  </div>
                  <span className="text-sm font-medium text-charcoal">{service}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* TXHmL Card */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={fadeUp}
            transition={{ delay: 0.1 }}
            className="rounded-2xl border-2 border-accent/30 bg-card shadow-elegant overflow-hidden"
          >
            <div className="bg-accent px-8 py-5">
              <h3 className="font-display text-2xl font-bold text-charcoal">TXHmL</h3>
              <p className="mt-1 text-sm text-charcoal/70">Texas Home and Living Waiver</p>
            </div>
            <ul className="divide-y divide-border">
              {txhmlServices.map((service, i) => (
                <motion.li
                  key={service}
                  initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                  transition={{ delay: i * 0.03 }}
                  className="flex items-center gap-3 px-8 py-3.5"
                >
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/20 text-charcoal">
                    <Check className="h-3.5 w-3.5" strokeWidth={3} />
                  </div>
                  <span className="text-sm font-medium text-charcoal">{service}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.p
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="mt-10 text-center text-sm text-muted-foreground"
        >
          Have waiver services?{" "}
          <a href="#contact" className="font-semibold text-primary hover:underline">
            Contact us today
          </a>{" "}
          to establish services with AMS Housing &amp; Homecare.
        </motion.p>
      </div>
    </section>
  );
}

function Eligibility() {
  const items = [
    "Independent Adults (Age 62+)",
    "Veterans (At Risk of Homelessness)",
    "Domestic & Re-entry Situations",
    // "Physical & Mental Disabilities",
    "Males & Females Welcome",
    "SSI, SSDI, VA & Private Pay",
  ];
  return (
    <section className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading eyebrow="Who We Accept" title="Welcoming a community that thrives together." />
        <div className="mt-14 grid gap-4 sm:grid-cols-2">
          {items.map((item, i) => (
            <motion.div
              key={item}
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              transition={{ delay: i * 0.05 }}
              className="flex items-center gap-4 rounded-xl border border-border bg-card p-5 shadow-soft"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Check className="h-5 w-5" strokeWidth={3} />
              </div>
              <span className="text-base font-medium text-charcoal">{item}</span>
            </motion.div>
          ))}
        </div>
        <motion.p
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="mt-8 text-center text-sm font-medium text-muted-foreground"
        >
          We accept <span className="text-primary font-semibold">SSI</span>, <span className="text-primary font-semibold">SSDI</span>, <span className="text-primary font-semibold">Private Pay</span>, and <span className="text-primary font-semibold">VA Benefits</span>.
        </motion.p>
      </div>
    </section>
  );
}

function Gallery() {
  const photos = [
    { src: galHomecare, label: "Homecare Services", sub: "Compassionate one-on-one care in a warm, supportive environment.", className: "lg:row-span-2 lg:col-span-1" },
    { src: galKitchen, label: "Modern Kitchen", sub: "Fully equipped for meal preparation and storage.", className: "" },
    { src: galLiving, label: "Living Room", sub: "Spacious common areas for relaxation and socializing.", className: "lg:col-span-1" },
    { src: galCare, label: "Personal Care Support", sub: "Dedicated staff providing daily living assistance.", className: "" },
    { src: galTeam, label: "Our Team", sub: "Proudly serving the community alongside Texas Health and Human Services.", className: "" },
  ];
  return (
    <section id="gallery" className="bg-secondary/40 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading eyebrow="Photo Gallery" title="Step inside our home." sub="Clean, comfortable, and thoughtfully maintained spaces ready to welcome you." />
        <div className="mt-14 grid gap-5 lg:grid-cols-3 lg:auto-rows-[280px]">
          {photos.map((p, i) => (
            <motion.div
              key={p.label}
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              transition={{ delay: i * 0.1 }}
              className={`gallery-card group relative overflow-hidden rounded-2xl shadow-elegant ${p.className}`}
            >
              <img src={p.src} alt={p.label} loading="lazy" className="gallery-img h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent opacity-90" />
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="font-display text-2xl font-bold text-white">{p.label}</h3>
                <p className="mt-1 text-sm text-white/80">{p.sub}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AmenitiesBanner() {
  const items = [
    "Fully Furnished Rooms",
    "All Utilities Included",
    "High-Speed WiFi",
    "Laundry Services",
    "On-Site Oversight",
    "Drug-Free & Safe",
  ];
  return (
    <section className="relative overflow-hidden bg-primary py-16 text-primary-foreground">
      <div className="absolute inset-0 opacity-20">
        {/* <EkgLine className="h-full w-full text-accent" /> */}
      </div>
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
          {items.map((it) => (
            <div key={it} className="flex flex-col items-center text-center">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full border border-accent/50 text-accent">
                <Check className="h-5 w-5" strokeWidth={3} />
              </div>
              <span className="text-sm font-semibold leading-snug">{it}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function OurGoals() {
  const goals = [
    {
      icon: Sparkles,
      title: "Foster Learning & Self-Sufficiency",
      desc: "We strive to create an environment that fosters learning and self-sufficiency for every individual in our care.",
    },
    {
      icon: Home,
      title: "Maximum Independence",
      desc: "Our ultimate goal is to support adults with developmental disabilities in their pursuit of developing life skills, interests, and maximum independence.",
    },
    {
      icon: ShieldCheck,
      title: "Knowledgeable & Caring Staff",
      desc: "Our knowledgeable staff have taken into consideration all concerns in the process of developing and designing care services which we now offer to our individuals.",
    },
  ];

  return (
    <section id="goals" className="bg-primary py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Our Mission</span>
          <h2 className="mt-3 font-display text-3xl font-bold text-white md:text-5xl">Our Goals</h2>
          <p className="mt-4 text-base text-white/80 md:text-lg">
            Everything we do is driven by a commitment to dignity, growth, and independence.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {goals.map((g, i) => (
            <motion.div
              key={g.title}
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl border border-white/20 bg-white/10 p-8 backdrop-blur"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-accent text-charcoal">
                <g.icon className="h-7 w-7" />
              </div>
              <h3 className="font-display text-xl font-bold text-white">{g.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/75">{g.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading eyebrow="Get In Touch" title="Contact Us" sub="If you have waiver services and would like to establish services with AMS Housing & Homecare, please contact our administrative staff below." />
        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          <motion.form
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            onSubmit={(e) => { e.preventDefault(); alert("Thank you! We'll be in touch shortly."); }}
            className="rounded-2xl border border-border bg-card p-8 shadow-soft"
          >
            <div className="space-y-5">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-semibold text-charcoal">Full Name</label>
                <input id="name" required maxLength={100} className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20" />
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-charcoal">Phone</label>
                  <input id="phone" type="tel" required maxLength={20} className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20" />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-semibold text-charcoal">Email</label>
                  <input id="email" type="email" required maxLength={255} className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20" />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-semibold text-charcoal">Message</label>
                <textarea id="message" rows={5} maxLength={1000} className="w-full resize-none rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20" />
              </div>
              <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-elegant transition hover:bg-primary/90">
                <Send className="h-4 w-4" /> Send Message
              </button>
            </div>
          </motion.form>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="space-y-6">
            <div className="rounded-2xl bg-charcoal p-8 text-white shadow-elegant space-y-6">

              {/* Rajaul King */}
              <div className="rounded-xl bg-white/10 p-5">
                <p className="text-xs uppercase tracking-wider text-white/60 mb-1">Director of Operations</p>
                <p className="font-display text-lg font-bold text-accent">Rajaul King</p>
                <a href="tel:8323018241" className="group mt-3 flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/30 text-accent transition group-hover:bg-primary">
                    <Phone className="h-4 w-4" />
                  </div>
                  <span className="text-base font-semibold">832-301-8241</span>
                </a>
              </div>

              {/* Latoika King */}
              <div className="rounded-xl bg-white/10 p-5">
                <p className="text-xs uppercase tracking-wider text-white/60 mb-1">Assistant Director of Operations</p>
                <p className="font-display text-lg font-bold text-accent">Latoika King</p>
                <a href="tel:2488954326" className="group mt-3 flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/30 text-accent transition group-hover:bg-primary">
                    <Phone className="h-4 w-4" />
                  </div>
                  <span className="text-base font-semibold">248-895-4326</span>
                </a>
              </div>

              {/* Email */}
              <a href="mailto:AMSverifies@gmail.com" className="group flex items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/30 text-accent transition group-hover:bg-primary">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-white/60">Email</div>
                  <div className="text-base font-semibold break-all">AMSverifies@gmail.com</div>
                </div>
              </a>

              {/* Website */}
              <a href="https://www.advantagedmedicalsolutions.com" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/30 text-accent transition group-hover:bg-primary">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-white/60">Website</div>
                  <div className="text-base font-semibold">www.advantagedmedicalsolutions.com</div>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/30 text-accent">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-white/60">Location</div>
                  <div className="text-base font-semibold">Houston, Texas</div>
                </div>
              </div>

            </div>
            <div className="overflow-hidden rounded-2xl border border-border shadow-soft">
              <iframe
                title="Houston, Texas"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d644898.2022644485!2d-96.12073098076652!3d29.83564862936281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640b8b4488d8501%3A0xca0d02def365053b!2sHouston%2C%20TX%2C%20USA!5e1!3m2!1sen!2s!4v1778518054296!5m2!1sen!2s"
                className="h-64 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-charcoal text-white/80">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-10 px-6 py-14 md:flex-row">
        <div className="flex items-center gap-3">
          <img src={logoWhite} alt="Advantaged Medical Solutions" className="h-10 w-auto" />
        </div>
        <nav className="flex flex-wrap justify-center gap-6 text-sm font-medium">
          {["Home", "About", "Services", "Programs", "Gallery", "Goals", "Contact"].map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="transition hover:text-accent">{l}</a>
          ))}
        </nav>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-center text-sm md:flex-row md:text-left">
          <p className="font-display italic text-accent">Empowering lives, one step at a time.</p>
          <p className="text-white/50">
            Powered By <a href="https://axistechgroup.com/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">AxisTechGroup</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Divider />
        <Services />
        <WaiverPrograms />
        <Eligibility />
        <Divider />
        <Gallery />
        <AmenitiesBanner />
        <OurGoals />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

