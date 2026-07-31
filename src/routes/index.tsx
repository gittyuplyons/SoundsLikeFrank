import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Heart, Cake, PartyPopper, Send, UtensilsCrossed, Briefcase, HeartHandshake, Users, Phone } from "lucide-react";
import InstagramFeed from "../components/InstagramFeed";
import GigSaladBadge from "../components/GigSaladBadge";

export const Route = createFileRoute("/")({
  component: HomePage,
});

const PHONE = "(781) 424-6760";
const PHONE_HREF = "tel:+17814246760";

const NAV = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Video", href: "#video" },
  { label: "Photos", href: "#photos" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const SERVICES = [
  { title: "Weddings", desc: "Set a romantic, timeless tone with live Sinatra classics for your ceremony, cocktail hour, or reception.", icon: Heart },
  { title: "Birthdays & Anniversaries", desc: "Celebrate the milestones with the songs that shaped a lifetime of memories.", icon: Cake },
  { title: "Retirement Parties", desc: "A warm, classy send-off filled with the standards everyone loves to sing along to.", icon: PartyPopper },
  { title: "Singing Telegrams", desc: "Surprise someone special with a personal, unforgettable serenade delivered in style.", icon: Send },
  { title: "Restaurants & Private Parties", desc: "Bring supper-club elegance to your venue or living room with an intimate live set.", icon: UtensilsCrossed },
  { title: "Corporate Events", desc: "Add a touch of Vegas class to galas, fundraisers, and company celebrations.", icon: Briefcase },
  { title: "Senior Living & Assisted Living", desc: "Beloved, familiar music that lifts spirits at senior communities and residences.", icon: HeartHandshake },
  { title: "Community Events", desc: "Heartfelt performances that bring people together at any gathering, large or small.", icon: Users },
];

const VIDEOS = [
  { id: "nNHNa_pkSKc", title: "Live Performance \u2014 \"New York, New York\"" },
  { id: "_36XdfEd1xs", title: "MATV Host Interview" },
  { id: "HXLNAukgryc", title: "Live Performance \u2014 \"Tell Her You Love Her\"" },
  { id: "VfTg01XPU7s", title: "Live Performance \u2014 \"That's Life\"" },
];

const PHOTOS = [
  { url: "https://i.imgur.com/v5wRDVs.jpeg", alt: "George Lyons performing on stage", cls: "md:col-span-2 md:row-span-2" },
  { url: "https://i.imgur.com/VmrKE6x.jpeg", alt: "George Lyons in performance" },
  { url: "/images/george-luis-tiant-2010.jpg", alt: "George Lyons with Boston Red Sox legend Luis Tiant in 2010" },
  { url: "https://i.imgur.com/0rKwGhC.jpeg", alt: "George Lyons live at an event" },
  { url: "/images/george-with-guest.jpg", alt: "George Lyons posing with a guest at an event" },
  { url: "https://i.imgur.com/te2yrr9.jpeg", alt: "George Lyons on stage" },
  { url: "https://i.imgur.com/wRZU5Pw.jpeg", alt: "George Lyons entertaining a crowd" },
  { url: "/images/george-dwight-evans.jpg", alt: "George Lyons with Boston Red Sox legend Dwight Evans" },
  { url: "https://i.imgur.com/lMx88Sb.png", alt: "George Lyons in tuxedo, close up" },
  { url: "https://i.imgur.com/rb3HeZX.jpeg", alt: "George Lyons performing live" },
  { url: "https://cdn.shipper.now/image/teams/cmry1uaf50001la048vt6tpn7/1784863403873-vqq9c6rhiip-IMG_3846.jpg", alt: "George Lyons performing live at a private event" },
  { url: "https://cdn.shipper.now/image/teams/cmry1uaf50001la048vt6tpn7/1784864632620-hqufl6rzvp8-502e991a4e14e.jpg", alt: "George Lyons performing on stage" },
];

// Real testimonials sourced from George's verified GigSalad / The Bash review pages.
const REVIEWS = [
  {
    text: "What do you get for your mom who is turning 92 and is in a nursing home? George was the answer! He showed up right on time, impeccably dressed, and the music was excellent. My mom and her nursing home friends were so happy \u2014 we even had a sing along. Hold the date for mom's 93rd next year!",
    name: "Teresa M.",
    event: "92nd Birthday, Nursing Home",
    source: "GigSalad",
  },
  {
    text: "George was absolutely phenomenal at our event! From the moment he started singing, he transported everyone back to the golden era of the Rat Pack. His voice captured that smooth, classic sound perfectly, and his stage presence had all the charm you'd expect from those iconic Vegas nights.",
    name: "Beth C.",
    event: "Corporate Function, Hyannis MA",
    source: "The Bash",
  },
  {
    text: "Without George, the memories and experience just wouldn't have been the same. We highly recommend George for any Sinatra, Dean Martin or Sammy Davis Jr. celebration.",
    name: "Verified Client",
    event: "Private Event",
    source: "GigSalad",
  },
];

const FAQS = [
  { q: "What kind of music does George perform?", a: "George sings live in the voices and styles of Frank Sinatra, Dean Martin, Tony Bennett, Sammy Davis Jr., Neil Diamond, Elvis, Bobby Darin, Engelbert and more \u2014 or an all-Sinatra set if you prefer. He knows hundreds of songs from the 50s through the 90s across many genres." },
  { q: "Where does George perform?", a: "George is based near Boston, Massachusetts and performs throughout New England, including greater Boston (MA), Manchester (NH) and Providence (RI). He is happy to travel for the right event." },
  { q: "Is the act self-contained?", a: "Yes. The act includes a professional sound system, wireless microphone and tuxedo. George can perform with live accompaniment or backing tracks, and offers full DJ capability for longer events across many genres." },
  { q: "What types of events do you play?", a: "Weddings, birthdays, anniversaries, retirement parties, singing telegrams, restaurants, private parties, corporate events, fundraisers, senior communities, assisted living and nursing facilities, and community events." },
  { q: "How do I check availability and pricing?", a: "Use the booking form below or call George directly. Share your date, location and event type and George will follow up with availability and a personalized quote." },
];

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && setVisible(true),
      { threshold: 0.15 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

function Section({ children, id, className = "" }: { children: React.ReactNode; id?: string; className?: string }) {
  const { ref, visible } = useReveal();
  return (
    <section id={id} className={`scroll-mt-20 ${className}`}>
      <div
        ref={ref}
        className={`transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      >
        {children}
      </div>
    </section>
  );
}

function GoldRule() {
  return (
    <div className="mx-auto mb-6 flex items-center justify-center gap-3">
      <span className="h-px w-10 bg-gold/60" />
      <span className="text-gold">&#9670;</span>
      <span className="h-px w-10 bg-gold/60" />
    </div>
  );
}

function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", eventType: "", date: "", location: "", details: "" });
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const headline = "Bring the Timeless Sound of Sinatra to Your Next Event";
  const words = headline.split(" ");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitError("");

    try {
      const response = await fetch("https://formspree.io/f/mvzeyvrp", {
        method: "POST",
        body: new FormData(e.currentTarget),
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        const message = data?.errors
          ?.map((error: { message?: string }) => error.message)
          .filter(Boolean)
          .join(" ");

        throw new Error(message || "We couldn't send your inquiry. Please try again.");
      }

      setSent(true);
      setForm({ name: "", email: "", phone: "", eventType: "", date: "", location: "", details: "" });
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : "We couldn't send your inquiry. Please try again.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  const close = () => setMenuOpen(false);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased">
      {/* NAV */}
      <header className="fixed inset-x-0 top-0 z-50">
        <nav className="mx-auto mt-3 flex max-w-6xl items-center justify-between rounded-full border border-white/10 bg-black/50 px-5 py-3 backdrop-blur-md md:px-7">
          <a href="#top" className="flex items-baseline gap-1.5" onClick={close}>
            <span className="font-display text-2xl font-bold tracking-tight text-gold">George</span>
            <span className="font-display text-2xl font-light tracking-widest text-white/90">Lyons</span>
          </a>
          <div className="hidden items-center gap-6 lg:flex">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} className="text-sm font-medium text-white/75 transition-colors hover:text-gold">
                {n.label}
              </a>
            ))}
            <a href={PHONE_HREF} className="rounded-full bg-gold px-5 py-2 text-sm font-semibold text-black shadow transition-all hover:scale-105 hover:shadow-lg">
              Call Now
            </a>
          </div>
          <button
            className="text-white/90 lg:hidden"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {menuOpen ? <><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></> : <><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></>}
            </svg>
          </button>
        </nav>
        {menuOpen && (
          <div className="mx-auto mt-2 max-w-6xl rounded-2xl border border-white/10 bg-zinc-950 p-4 shadow-2xl lg:hidden">
            <div className="flex flex-col">
              {NAV.map((n) => (
                <a key={n.href} href={n.href} onClick={close} className="rounded-lg px-4 py-3 text-white/85 transition-colors hover:bg-white/5 hover:text-gold">
                  {n.label}
                </a>
              ))}
              <a href={PHONE_HREF} onClick={close} className="mt-2 rounded-full bg-gold px-4 py-3 text-center font-semibold text-black">
                Call {PHONE}
              </a>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="top" className="relative overflow-hidden">
        {/* Mobile: movie-poster layout - single relative container, title pulled up over torso */}
        <div className="md:hidden">
          <div className="relative h-[500px] w-full overflow-hidden bg-gradient-to-br from-black via-zinc-900 to-black">
            <img src="https://i.imgur.com/fKASxf0.jpeg" alt="George Lyons performing live" className="absolute inset-0 h-full w-full object-cover object-top" />
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />
          </div>
          <div className="relative -mt-32 bg-transparent px-6">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-gold"
              style={{ textShadow: "0 2px 12px rgba(0,0,0,0.85)" }}
            >
              New England&apos;s Premier Sinatra &amp; Rat Pack Crooner
            </motion.p>
            <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-white" style={{ textShadow: "0 2px 16px rgba(0,0,0,0.85)" }}>
              {words.map((w, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ delay: 0.2 + i * 0.06, duration: 0.55 }}
                  className="mr-[0.28em] inline-block"
                >
                  {w === "Sinatra" ? <em className="not-italic text-gold">{w}</em> : w}
                </motion.span>
              ))}
            </h1>
          </div>
          <div className="bg-black px-6 pb-12 pt-6">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="text-base font-medium text-white/85"
            >
              Live vocals, timeless class, and genuine showmanship. George Lyons brings the golden era of Sinatra, Dean Martin, and the Rat Pack to weddings and events across New England.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="mt-7 flex flex-col gap-3"
            >
              <a href="#contact" className="rounded-full bg-gold px-8 py-4 text-center font-semibold text-black shadow-lg transition-all hover:scale-105 hover:shadow-xl">
                Check Availability
              </a>
              <a href="#video" className="rounded-full border border-white/40 px-8 py-4 text-center font-semibold text-white backdrop-blur-sm transition-all hover:scale-105 hover:border-gold hover:text-gold">
                &#9658;&nbsp; Watch George Perform
              </a>
            </motion.div>
          </div>
        </div>

        {/* Desktop: image background with left-aligned text overlay */}
        <div className="relative hidden min-h-screen items-center md:flex">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-900 to-black" />
          <img src="https://i.imgur.com/fKASxf0.jpeg" alt="George Lyons performing live" className="absolute inset-0 h-full w-full object-cover object-[85%_center]" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />

          <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pt-24">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-gold"
            >
              New England&apos;s Premier Sinatra &amp; Rat Pack Crooner
            </motion.p>
            <h1 className="max-w-3xl font-display text-5xl font-bold leading-[1.05] tracking-tight text-white md:text-7xl" style={{ textShadow: "0 2px 24px rgba(0,0,0,0.6)" }}>
              {words.map((w, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ delay: 0.2 + i * 0.06, duration: 0.55 }}
                  className="mr-[0.28em] inline-block"
                >
                  {w === "Sinatra" ? <em className="not-italic text-gold">{w}</em> : w}
                </motion.span>
              ))}
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="mt-6 max-w-xl text-lg font-medium text-white/85 md:text-xl"
              style={{ textShadow: "0 1px 8px rgba(0,0,0,0.55)" }}
            >
              Live vocals, timeless class, and genuine showmanship. George Lyons brings the golden era of Sinatra, Dean Martin, and the Rat Pack to weddings and events across New England.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="mt-9 flex flex-col gap-3 sm:flex-row"
            >
              <a href="#contact" className="rounded-full bg-gold px-8 py-4 text-center font-semibold text-black shadow-lg transition-all hover:scale-105 hover:shadow-xl">
                Check Availability
              </a>
              <a href="#video" className="rounded-full border border-white/40 px-8 py-4 text-center font-semibold text-white backdrop-blur-sm transition-all hover:scale-105 hover:border-gold hover:text-gold">
                &#9658;&nbsp; Watch George Perform
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <Section id="about" className="bg-background py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2">
          <div className="overflow-hidden rounded-2xl shadow-xl">
            <img src="https://i.imgur.com/FoEykza.jpeg" alt="George Lyons, Sinatra tribute crooner" className="aspect-[3/4] w-full object-cover" />
          </div>
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-primary">About George</p>
            <h2 className="font-display text-4xl font-bold leading-tight md:text-5xl">A Crooner Who Brings the Room to Life</h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted-foreground">
              <p>
                Born in Malden, Massachusetts, George Lyons is a New England native who has spent more than 40 years entertaining audiences of all ages. A charismatic, classy crooner, he sings <span className="text-foreground font-medium">live</span> in the voices of the great entertainers &mdash; Frank Sinatra, Dean Martin, Tony Bennett, Sammy Davis Jr., Neil Diamond, Elvis, Bobby Darin and more.
              </p>
              <p>
                From The Colonnade to The Park Plaza, George has serenaded some of the most elegant venues in Greater Boston. His act is fully self-contained &mdash; sound system, wireless mic, tuxedo and hundreds of songs &mdash; with warm humor and genuine audience rapport that leave people wanting to book him again.
              </p>
              <p>
                Whether it&apos;s a function hall, a theater, a backyard, a restaurant or a family room, George delivers a vibrant, Las Vegas / Atlantic City quality performance that makes any event a time to remember.
              </p>
            </div>
            <a href="#contact" className="mt-8 inline-block rounded-full bg-foreground px-7 py-3 font-semibold text-background transition-all hover:scale-105">
              Book George Today
            </a>
          </div>
        </div>
      </Section>

      {/* SERVICES */}
      <Section id="services" className="bg-card py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-14 text-center">
            <GoldRule />
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-primary">Event Services</p>
            <h2 className="font-display text-4xl font-bold md:text-5xl">Perfect for Any Occasion</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              No event or venue is too small or too big. Here are just a few of the celebrations George brings to life across New England.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((s) => (
              <div key={s.title} className="group rounded-2xl border border-border bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-lg">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 text-gold">
                  <s.icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <h3 className="font-display text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* VIDEO */}
      <Section id="video" className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-14 text-center">
            <GoldRule />
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-primary">Watch George Perform</p>
            <h2 className="font-display text-4xl font-bold md:text-5xl">See &amp; Hear the Show</h2>
          </div>
          <div className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-2 text-lg">
            {VIDEOS.map((v) => (
              <div key={v.id}>
                <div className="overflow-hidden rounded-2xl border border-border shadow-md">
                  <div className="aspect-video">
                    <iframe
                      className="h-full w-full"
                      src={`https://www.youtube-nocookie.com/embed/${v.id}`}
                      title={v.title}
                      loading="lazy"
                      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
                <p className="mt-3 text-center font-display text-lg">{v.title}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* PHOTOS */}
      <Section id="photos" className="bg-card py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-14 text-center">
            <GoldRule />
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-primary">Photo Gallery</p>
            <h2 className="font-display text-4xl font-bold md:text-5xl">Moments From the Stage</h2>
          </div>
          <div className="grid auto-rows-[180px] grid-cols-2 gap-4 md:auto-rows-[220px] md:grid-cols-3">
            {PHOTOS.map((p, i) => {
              const posCls = "object-top";
              return (
                <div key={i} className={`overflow-hidden rounded-xl shadow-md ${p.cls ?? ""}`}>
                  <img src={p.url} alt={p.alt} loading="lazy" className={`h-full w-full object-cover transition-transform duration-500 hover:scale-105 ${posCls}`} />
                </div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* INSTAGRAM */}
      <Section id="instagram" className="relative bg-zinc-950 py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(212,175,55,0.12),transparent_60%)]" />
        <div className="relative mx-auto max-w-6xl px-6 text-lg">
          <div className="mb-14 text-center">
            <GoldRule />
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-gold">Social &bull; @soundslikefrank</p>
            <h2 className="font-display text-4xl font-bold text-white md:text-5xl">Follow the Feed</h2>
            <p className="mt-4 text-white/70">Behind-the-scenes moments and live clips, straight from Instagram.</p>
          </div>
          <InstagramFeed />
          <div className="mt-10 flex justify-center">
            <a
              href="https://www.instagram.com/soundslikefrank/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 rounded-full border border-gold px-8 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-gold hover:text-black"
            >
              <svg className="h-5 w-5 transition-colors group-hover:text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="3.5" />
                <circle cx="17" cy="7" r="0.6" fill="currentColor" stroke="none" />
              </svg>
              Follow on Instagram
            </a>
          </div>
        </div>
      </Section>

      {/* REVIEWS */}
      <Section id="reviews" className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-14 text-center">
            <GoldRule />
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-primary">Testimonials</p>
            <h2 className="font-display text-4xl font-bold md:text-5xl">What Clients Say</h2>
            <p className="mt-4 text-muted-foreground">Rated 5.0 across 40+ verified bookings.</p>
            <div className="mt-6 flex justify-center">
              <GigSaladBadge />
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {REVIEWS.map((r, i) => (
              <figure key={i} className="flex flex-col rounded-2xl border border-border bg-card p-7 shadow-sm">
                <div className="mb-3 text-gold">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                <blockquote className="flex-1 text-[15px] leading-relaxed text-muted-foreground">&ldquo;{r.text}&rdquo;</blockquote>
                <figcaption className="mt-5 border-t border-border pt-4 text-base">
                  <p className="font-semibold">{r.name}</p>
                  <p className="text-sm text-muted-foreground">{r.event} &bull; via {r.source}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section id="faq" className="bg-card py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6">
          <div className="mb-12 text-center">
            <GoldRule />
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-primary">FAQ</p>
            <h2 className="font-display text-4xl font-bold md:text-5xl">Good to Know</h2>
          </div>
          <div className="divide-y divide-border rounded-2xl border border-border bg-background text-lg">
            {FAQS.map((f, i) => (
              <details key={i} className="group px-6 py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between font-display text-lg font-semibold">
                  {f.q}
                  <span className="ml-4 text-gold transition-transform duration-300 group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 leading-relaxed text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </Section>

      {/* CONTACT */}
      <Section id="contact" className="bg-background py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-primary">Contact &amp; Booking</p>
            <h2 className="font-display text-4xl font-bold md:text-5xl">Let&apos;s Make Your Event Unforgettable</h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Ready to bring timeless class to your celebration? Share a few details and George will follow up with availability and a personalized quote.
            </p>
            <div className="mt-8 space-y-4 text-lg">
              <a href={PHONE_HREF} className="flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-colors hover:border-gold">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold/15 text-gold"><Phone className="h-5 w-5" strokeWidth={2} /></span>
                <span>
                  <span className="block text-sm text-muted-foreground">Call or text</span>
                  <span className="font-semibold">{PHONE}</span>
                </span>
              </a>
              <div className="flex items-center gap-4 rounded-xl border border-border bg-card p-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold/15 text-gold">&#9873;</span>
                <span>
                  <span className="block text-sm text-muted-foreground">Service area</span>
                  <span className="font-semibold">Greater Boston and All of New England</span>
                </span>
              </div>
            </div>
            <div className="mt-6 flex gap-3">
              <a href="https://www.gigsalad.com/soundslikefrank" target="_blank" rel="noopener noreferrer" className="rounded-full border border-border px-5 py-2 text-sm font-medium transition-colors hover:border-gold hover:text-gold">GigSalad</a>
              <a href="https://www.thebash.com/singer/george-lyons" target="_blank" rel="noopener noreferrer" className="rounded-full border border-border px-5 py-2 text-sm font-medium transition-colors hover:border-gold hover:text-gold">The Bash</a>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-7 shadow-lg">
            {sent ? (
              <div className="flex h-full min-h-[400px] flex-col items-center justify-center text-center text-lg">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gold/15 text-3xl text-gold">&#10003;</div>
                <h3 className="font-display text-2xl font-bold">Thank You!</h3>
                <p className="mt-2 max-w-sm text-muted-foreground">
                  Your inquiry has been received. George will be in touch soon. For anything urgent, call {PHONE}.
                </p>
                <button onClick={() => setSent(false)} className="mt-6 text-sm font-medium text-gold hover:underline">Send another inquiry</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input type="hidden" name="_subject" value="New Sounds Like Frank booking inquiry" />
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Name" required>
                    <input required name="name" autoComplete="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputCls} placeholder="Your name" />
                  </Field>
                  <Field label="Phone" required>
                    <input required type="tel" name="phone" autoComplete="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className={inputCls} placeholder="(555) 555-5555" />
                  </Field>
                </div>
                <Field label="Email" required>
                  <input required type="email" name="email" autoComplete="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputCls} placeholder="you@email.com" />
                </Field>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Event type">
                    <select name="event_type" value={form.eventType} onChange={(e) => setForm({ ...form, eventType: e.target.value })} className={inputCls}>
                      <option value="">Select&hellip;</option>
                      {["Wedding", "Birthday", "Anniversary", "Retirement Party", "Singing Telegram", "Restaurant", "Private Party", "Corporate Event", "Senior / Assisted Living", "Community Event", "Other"].map((o) => (
                        <option key={o} value={o}>{o}</option>
                      ))}
                    </select>
                  </Field>
                  <Field label="Event date">
                    <input type="date" name="event_date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} className={inputCls} />
                  </Field>
                </div>
                <Field label="Location">
                  <input name="location" value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} className={inputCls} placeholder="City, State or venue" />
                </Field>
                <Field label="Details">
                  <textarea rows={4} name="details" value={form.details} onChange={(e) => setForm({ ...form, details: e.target.value })} className={inputCls} placeholder="Tell us about your event..." />
                </Field>
                {submitError && (
                  <p role="alert" className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
                    {submitError} If the problem continues, call or text {PHONE}.
                  </p>
                )}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full rounded-full bg-gold py-4 font-semibold text-black shadow transition-all hover:scale-[1.02] hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100"
                >
                  {submitting ? "Sending..." : "Request Availability & Quote"}
                </button>
              </form>
            )}
          </div>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-black py-12 text-white/70">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <div className="flex items-baseline justify-center gap-1.5">
            <span className="font-display text-2xl font-bold tracking-tight text-gold">George</span>
            <span className="font-display text-2xl font-light tracking-widest text-white/90">Lyons</span>
          </div>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed">
            Sinatra impersonator &amp; Rat Pack singer serving New England &mdash; Boston, Massachusetts, New Hampshire and Rhode Island and More! Wedding singer, singing telegrams, and senior living entertainment.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} className="transition-colors hover:text-gold">{n.label}</a>
            ))}
          </div>
          <p className="mt-8 text-xs text-white/40">
            &copy; {new Date().getFullYear()} George Lyons. All rights reserved. This is an independent tribute artist and is not affiliated with, endorsed by, or associated with Frank Sinatra or any celebrity estate.
          </p>
        </div>
      </footer>

      {/* CLICK-TO-CALL MOBILE */}
      <a
        href={PHONE_HREF}
        className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-gold px-5 py-3 font-semibold text-black shadow-xl transition-transform hover:scale-105 lg:hidden"
      >
        <Phone className="h-5 w-5 text-black" strokeWidth={2} fill="none" /> Call George
      </a>
    </div>
  );
}

const inputCls =
  "w-full rounded-lg border border-input bg-background px-4 py-2.5 text-foreground outline-none transition-colors focus:border-gold focus:ring-1 focus:ring-gold";

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium">
        {label} {required && <span className="text-gold">*</span>}
      </span>
      {children}
    </label>
  );
}
