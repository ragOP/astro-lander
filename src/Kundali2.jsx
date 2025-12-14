import React, { useMemo, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

/**
 * PREMIUM MOBILE-FIRST LANDER (New Theme)
 * Theme: "Editorial Minimal Luxury" (Ivory / Charcoal / Soft Gold)
 * ✅ Relevant internet images (Unsplash)
 * ✅ Much better mobile layout (tight, thumb-friendly, high contrast)
 * ✅ Sticky header + scroll progress
 * ✅ Smooth premium animations (Framer Motion)
 *
 * Install:
 *   npm i framer-motion
 */

const ease = [0.16, 1, 0.3, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 18, filter: "blur(8px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)" },
};

const pop = {
  hidden: { opacity: 0, scale: 0.98, y: 14 },
  show: { opacity: 1, scale: 1, y: 0 },
};

export default function PremiumHoroscopeLander() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 22, mass: 0.3 });

  // Mobile CTA bar show/hide (simple, always shown on mobile)
  const [openFAQ, setOpenFAQ] = useState(null);

  // Relevant free images (Unsplash). These are placeholders so you can SEE it now.
  // Swap anytime with your own later.
  const IMAGES = useMemo(
    () => ({
      hero:
        "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=1800&q=80", // stars/space
      astroHands:
        "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1800&q=80", // night + stars
      zodiac:
        "https://images.unsplash.com/photo-1520975916090-3105956dac38?auto=format&fit=crop&w=1800&q=80", // silhouette/sky
      journal:
        "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1800&q=80", // notebook
      calm:
        "https://images.unsplash.com/photo-1520975682039-a4b66b6461b4?auto=format&fit=crop&w=1800&q=80", // moody calm portrait-ish
    }),
    []
  );

  const heroY = useTransform(scrollYProgress, [0, 0.25], [0, 70]);

  return (
    <div className="wrap">
      {/* top progress */}
      <motion.div className="topProgress" style={{ scaleX: progress }} />

      {/* header */}
      <header className="header">
        <div className="headerInner">
          <a className="brand" href="#top" aria-label="Go to top">
            <span className="mark" />
            <span className="brandText">
              <span className="brandTop">2-Year Report</span>
              <span className="brandSub">Private on WhatsApp</span>
            </span>
          </a>

          <a className="headerCta" href="#form">
            Reveal Timing
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="hero">
        <motion.div className="heroMedia" style={{ y: heroY }}>
          <img className="heroImg" src={IMAGES.hero} alt="Night sky" />
          <div className="heroShade" />
          <div className="heroGrain" />
        </motion.div>

        <div className="heroInner">
          <motion.div
            className="heroCard"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.85, ease }}
          >
            <div className="eyebrow">
              <span className="dot" />
              PERSONALISED • 24 MONTHS • DECISION CLARITY
            </div>

            <h1 className="h1">
              What if the next <span className="gold">2 years</span> change your life…
              <br />
              and you walk into them <span className="ink">blind?</span>
            </h1>

            <p className="sub">
              Your kundali already knows which months bring breakthroughs, heartbreaks, losses, opportunities, and tests.
              <br />
              <b>Do you?</b>
            </p>

            <div className="ctaRow">
              <a className="ctaPrimary" href="#form">
                Reveal My Next 24 Months
                <span className="shine" />
              </a>
              <a className="ctaGhost" href="#inside">
                See What’s Inside
              </a>
            </div>

            <div className="trustRow">
              <div className="trustPill">WhatsApp Summary</div>
              <div className="trustPill">20–35 Page PDF</div>
              <div className="trustPill">Timing Windows</div>
              <div className="trustPill">100k+ Reports</div>
            </div>

            <div className="micro">
              Astrology is guidance, not fixed fate. You choose actions — we give timing.
            </div>
          </motion.div>

          <motion.div
            className="heroSide"
            variants={pop}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.85, delay: 0.15, ease }}
          >
            <div className="sideFrame">
              <img src={IMAGES.astroHands} alt="Stars" />
              <div className="sideShade" />
              <div className="sideText">
                <div className="sideTitle">Month-by-Month Timeline</div>
                <div className="sideSub">24 months • your exact windows</div>
              </div>
            </div>

            <div className="sideMini">
              <div className="mini">
                <div className="miniK">Danger months</div>
                <div className="miniV">Flagged</div>
              </div>
              <div className="mini">
                <div className="miniK">Breakthrough windows</div>
                <div className="miniV">Mapped</div>
              </div>
              <div className="mini">
                <div className="miniK">Love turning points</div>
                <div className="miniV">Timed</div>
              </div>
              <div className="mini">
                <div className="miniK">Money phases</div>
                <div className="miniV">Planned</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* mobile bottom hint */}
        <div className="scrollHint">Scroll for the truth ↓</div>
      </section>

      {/* PROBLEM */}
      <section id="problem" className="section">
        <SectionHead
          title="Are these fears quietly controlling your life?"
          desc="It’s not overthinking. It’s your intuition asking for timing."
        />

        <div className="fearList">
          {[
            "Staying stuck in the same job or relationship because the timing never feels right.",
            "Missing the ONE opportunity written in your chart.",
            "Repeating the same pattern in love, money, or career.",
            "Waiting for someone who may never be meant for you.",
            "Making big moves in months that secretly fight you.",
            "A tough phase arriving and you being unprepared.",
          ].map((t, i) => (
            <motion.div
              key={i}
              className="fearItem"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
              transition={{ duration: 0.65, delay: i * 0.05, ease }}
            >
              <div className="fearIndex">{String(i + 1).padStart(2, "0")}</div>
              <div className="fearText">{t}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="pullQuote"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
        >
          <div className="pqTitle">Your life isn’t stuck.</div>
          <div className="pqText">
            Your <b>timing</b> is.
          </div>
        </motion.div>

        <div className="center">
          <a className="ctaPrimary" href="#form">
            Fix My Timing Now <span className="shine" />
          </a>
        </div>
      </section>

      {/* INSIDE */}
      <section id="inside" className="section sectionAlt">
        <SectionHead
          title="What this report reveals"
          desc="Every phase has a window. Every blessing has timing. Every downfall has a warning."
        />

        <div className="insideGrid">
          <MediaCard img={IMAGES.zodiac} badge="24-Month Roadmap" title="Month-by-Month Timeline" sub="When to act • when to wait" />
          <InfoCard
            icon="❤"
            title="Love, Breakups & Marriage"
            points={[
              "New relationship timing",
              "Breakup danger months",
              "Marriage/commitment windows",
              "Healing cycles",
              "“Will they come back?” phases",
            ]}
          />
          <InfoCard
            icon="💼"
            title="Career, Money & Success"
            points={[
              "Job change timing",
              "Promotion windows",
              "Business growth months",
              "Financial breakthroughs",
              "Months to avoid major risks",
            ]}
          />
          <InfoCard
            icon="🧿"
            title="Karmic Patterns"
            points={[
              "Why you repeat the same mistake",
              "Where you self-sabotage",
              "What destiny is teaching you",
              "The one thing you’re ignoring",
            ]}
          />
          <MediaCard img={IMAGES.journal} badge="No Copy-Paste" title="Personalised PDF" sub="20–35 pages, made for you" />
          <InfoCard
            icon="🔑"
            title="Remedies (Simple, No Drama)"
            points={[
              "For career delays",
              "For love blocks",
              "For emotional instability",
              "For health dips",
              "For bad luck cycles",
            ]}
          />
        </div>

        <div className="center">
          <a className="ctaPrimary" href="#preview">
            Show Me The Preview <span className="shine" />
          </a>
        </div>
      </section>

      {/* DARK TRUTH */}
      <section className="section sectionDark">
        <div className="truthWrap">
          <motion.div
            className="truthText"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease }}
          >
            <div className="truthEyebrow">THE DARK TRUTH</div>
            <h2 className="h2">
              Most people don’t fail because they’re weak.
              <br />
              They fail because they move at the <span className="gold">wrong time.</span>
            </h2>

            <ul className="truthList">
              <li>Fighting for love in a period meant for separation</li>
              <li>Starting a business in a period meant for rest</li>
              <li>Waiting for marriage in a phase meant for career</li>
              <li>Quitting a job in a month meant for success</li>
            </ul>

            <div className="truthLine">
              When timing aligns — even a small move changes everything.
            </div>

            <a className="ctaPrimary" href="#form">
              Unlock My Timing <span className="shine" />
            </a>
          </motion.div>

          <motion.div
            className="truthMedia"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease, delay: 0.05 }}
          >
            <img src={IMAGES.calm} alt="Calm moody image" />
            <div className="truthShade" />
            <div className="truthBadge">EXACT MONTH WINDOWS</div>
          </motion.div>
        </div>
      </section>

      {/* PREVIEW */}
      <section id="preview" className="section">
        <SectionHead
          title="A preview of what you’ll discover"
          desc="This is the clarity that stops bad decisions before they happen."
        />

        <div className="previewGrid">
          {[
            "The 3 most dangerous months of your next 2 years",
            "The exact window where your love life turns",
            "The month you must NOT take big decisions",
            "The month where destiny gives you a second chance",
            "Your most powerful career month",
            "Your luckiest 40 days",
            "Your health vulnerability periods",
            "Your karmic lesson for the next 2 years",
          ].map((t, i) => (
            <motion.div
              key={i}
              className="previewItem"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.04, ease }}
            >
              <span className="spark">✦</span>
              <span className="previewText">{t}</span>
            </motion.div>
          ))}
        </div>

        <div className="center">
          <a className="ctaPrimary" href="#form">
            Get My 2-Year Report <span className="shine" />
          </a>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section sectionAlt">
        <SectionHead title="Real people. Real clarity." desc="Short, sharp feedback — the kind that converts." />
        <div className="quotes">
          {[
            "“My breakup month was exactly shown.”",
            "“Got the job offer in the same timing they wrote.”",
            "“Stopped a bad decision because of their warning.”",
            "“Better than any astrologer I’ve visited.”",
          ].map((q, i) => (
            <motion.div
              key={i}
              className="quote"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: i * 0.05, ease }}
            >
              {q}
            </motion.div>
          ))}
        </div>
      </section>

      {/* FORM */}
      <section id="form" className="section sectionDark">
        <SectionHead
          title="Start your personalised report"
          desc="Share your birth details. Receive WhatsApp summary + PDF within 24–48 hours."
          light
        />

        <div className="formWrap">
          <motion.div
            className="formMedia"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
          >
            <img src={IMAGES.journal} alt="Notebook" />
            <div className="formShade" />
            <div className="formNote">
              <div className="fnTitle">Private on WhatsApp</div>
              <div className="fnSub">No spam • no data stored</div>
            </div>
          </motion.div>

          <motion.form
            className="form"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
            onSubmit={(e) => {
              e.preventDefault();
              // hook your API here later (kept clean for now)
              // you can read values with FormData:
              // const fd = new FormData(e.currentTarget);
            }}
          >
            <div className="row">
              <div className="field">
                <label>Full Name</label>
                <input placeholder="Your name" required />
              </div>
              <div className="field">
                <label>WhatsApp</label>
                <input placeholder="+91…" inputMode="tel" required />
              </div>
            </div>

            <div className="row">
              <div className="field">
                <label>Date of Birth</label>
                <input placeholder="DD/MM/YYYY" required />
              </div>
              <div className="field">
                <label>Birth Time</label>
                <input placeholder="HH:MM (if known)" />
              </div>
            </div>

            <div className="row">
              <div className="field">
                <label>Birth Place</label>
                <input placeholder="City, State" required />
              </div>
              <div className="field">
                <label>Email</label>
                <input placeholder="you@email.com" type="email" required />
              </div>
            </div>

            <div className="field">
              <label>Main Concern</label>
              <textarea placeholder="Love / career / money… (1–2 lines)" rows={4} required />
            </div>

            <button className="ctaPrimary full" type="submit">
              Submit & Reveal My Timing <span className="shine" />
            </button>

            <div className="fine">
              Disclaimer: Astrology is guidance, not fixed fate. You control your actions. We provide timing & clarity.
            </div>
          </motion.form>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <SectionHead title="FAQ" desc="Quick answers to reduce doubt." />
        <div className="faq">
          {[
            { q: "Is this really personalised?", a: "Yes — created from your birth details and current concerns. No templates." },
            { q: "How accurate is it?", a: "We provide timing windows and guidance — you still control decisions and outcomes." },
            { q: "What if I don’t know birth time?", a: "You can still proceed. We’ll adjust the analysis accordingly." },
            { q: "When will I receive it?", a: "WhatsApp summary + PDF within 24–48 hours." },
            { q: "Do you store data?", a: "No. Details are used only to prepare your report." },
          ].map((item, i) => {
            const open = openFAQ === i;
            return (
              <div key={i} className="faqItem">
                <button className="faqQ" onClick={() => setOpenFAQ(open ? null : i)} type="button">
                  <span>{item.q}</span>
                  <span className={open ? "chev open" : "chev"}>⌄</span>
                </button>
                <motion.div
                  className="faqA"
                  initial={false}
                  animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
                  transition={{ duration: 0.35, ease }}
                >
                  <div className="faqAText">{item.a}</div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Sticky mobile CTA bar */}
      <div className="mobileBar">
        <a className="mobileBarBtn" href="#form">
          Reveal My 24 Months
        </a>
      </div>

      <style>{styles}</style>
    </div>
  );
}

/* ----------------- SMALL UI PIECES ----------------- */

function SectionHead({ title, desc, light }) {
  return (
    <div className={light ? "sh shLight" : "sh"}>
      <motion.h2
        className="h2"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease }}
      >
        {title}
      </motion.h2>
      <motion.p
        className="desc"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.05, ease }}
      >
        {desc}
      </motion.p>
    </div>
  );
}

function InfoCard({ icon, title, points }) {
  return (
    <motion.div
      className="infoCard"
      variants={pop}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      transition={{ duration: 0.75, ease }}
    >
      <div className="infoTop">
        <div className="infoIcon">{icon}</div>
        <div className="infoTitle">{title}</div>
      </div>
      <ul className="infoList">
        {points.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>
    </motion.div>
  );
}

function MediaCard({ img, badge, title, sub }) {
  return (
    <motion.div
      className="mediaCard"
      variants={pop}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      transition={{ duration: 0.75, ease }}
    >
      <img src={img} alt="" />
      <div className="mediaShade" />
      <div className="mediaBadge">{badge}</div>
      <div className="mediaText">
        <div className="mediaTitle">{title}</div>
        <div className="mediaSub">{sub}</div>
      </div>
    </motion.div>
  );
}

/* ----------------- STYLES ----------------- */

const styles = `
:root{
  --ivory:#F7F3EA;
  --paper:#FFFDF7;
  --ink:#141312;
  --ink2:#1C1A18;
  --muted:#58534D;
  --muted2:#736E67;
  --line:rgba(20,19,18,.14);
  --softLine:rgba(20,19,18,.09);
  --gold:#B08D2A;
  --gold2:#D0B15A;
  --shadow: 0 18px 55px rgba(10,10,10,.12);
  --shadow2: 0 12px 38px rgba(10,10,10,.10);
  --r16:16px;
  --r22:22px;
  --r28:28px;
}

*{box-sizing:border-box}
html,body{height:100%}
body{
  margin:0;
  font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial;
  background:
    radial-gradient(1200px 700px at 50% -10%, rgba(176,141,42,.16), transparent 62%),
    radial-gradient(900px 600px at 15% 10%, rgba(0,0,0,.06), transparent 60%),
    linear-gradient(180deg, var(--ivory), #F2EBDD);
  color: var(--ink);
  overflow-x:hidden;
}
.wrap{min-height:100vh}

/* progress */
.topProgress{
  position:fixed;
  top:0; left:0;
  height:3px;
  width:100%;
  z-index:9999;
  transform-origin:left;
  background: linear-gradient(90deg, var(--gold), var(--gold2), #8b7a52);
}

/* header */
.header{
  position:sticky;
  top:0;
  z-index:50;
  backdrop-filter: blur(10px);
  background: rgba(255,253,247,.76);
  border-bottom: 1px solid var(--softLine);
}
.headerInner{
  max-width: 1100px;
  margin:0 auto;
  padding: 12px 14px;
  display:flex;
  align-items:center;
  gap:10px;
}
.brand{
  display:flex;
  align-items:center;
  gap:10px;
  text-decoration:none;
  color:inherit;
}
.mark{
  width:34px;height:34px;border-radius:14px;
  background:
    radial-gradient(12px 12px at 30% 30%, rgba(255,255,255,.85), transparent 60%),
    linear-gradient(135deg, var(--gold2), var(--gold));
  box-shadow: 0 10px 26px rgba(0,0,0,.10);
  border: 1px solid rgba(20,19,18,.10);
}
.brandText{display:flex; flex-direction:column; line-height:1.05}
.brandTop{font-weight:950; letter-spacing:.2px}
.brandSub{font-size:12px; color: var(--muted2); margin-top:2px}
.headerCta{
  margin-left:auto;
  text-decoration:none;
  font-weight:950;
  font-size:13px;
  color: var(--paper);
  background: var(--ink);
  padding: 10px 12px;
  border-radius: 999px;
  box-shadow: 0 14px 34px rgba(0,0,0,.18);
}
.headerCta:active{transform:translateY(1px)}

/* hero */
.hero{
  position:relative;
  z-index:1;
  max-width:1100px;
  margin: 0 auto;
  padding: 14px 14px 10px;
}
.heroMedia{
  position:absolute;
  inset: 12px 14px auto 14px;
  height: 420px;
  border-radius: var(--r28);
  overflow:hidden;
  box-shadow: var(--shadow);
  border: 1px solid var(--softLine);
}
.heroImg{
  width:100%;
  height:100%;
  object-fit:cover;
  filter: saturate(1.05) contrast(1.05);
  transform: scale(1.02);
}
.heroShade{
  position:absolute; inset:0;
  background:
    radial-gradient(520px 260px at 20% 20%, rgba(176,141,42,.22), transparent 60%),
    linear-gradient(180deg, rgba(20,19,18,.18), rgba(20,19,18,.45), rgba(247,243,234,.96));
}
.heroGrain{
  position:absolute; inset:0;
  opacity:.18;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='140' height='140' filter='url(%23n)' opacity='.22'/%3E%3C/svg%3E");
  mix-blend-mode: overlay;
  pointer-events:none;
}
.heroInner{
  position:relative;
  padding-top: 255px; /* pulls content into view over media */
  display:grid;
  grid-template-columns: 1fr;
  gap: 12px;
}
.heroCard{
  background: rgba(255,253,247,.78);
  border: 1px solid var(--softLine);
  border-radius: var(--r22);
  box-shadow: var(--shadow2);
  padding: 14px 14px;
}
.eyebrow{
  display:flex;
  align-items:center;
  gap:8px;
  font-size:11px;
  letter-spacing:.22em;
  text-transform:uppercase;
  color: var(--muted2);
}
.dot{
  width:8px;height:8px;border-radius:999px;
  background: linear-gradient(90deg, var(--gold), var(--gold2));
  box-shadow: 0 0 0 5px rgba(176,141,42,.10);
}
.h1{
  margin: 10px 0 0;
  font-size: 30px;
  line-height: 1.08;
  letter-spacing: -.4px;
  font-weight: 980;
}
.gold{color: var(--gold)}
.ink{color: var(--ink2)}
.sub{
  margin: 10px 0 0;
  color: var(--muted);
  font-size: 14.6px;
  line-height: 1.6;
}
.sub b{color: var(--ink)}
.ctaRow{
  display:flex;
  flex-direction:column;
  gap:10px;
  margin-top: 14px;
}
.ctaPrimary{
  position:relative;
  display:inline-flex;
  align-items:center;
  justify-content:center;
  gap:10px;
  width:100%;
  text-decoration:none;
  color: var(--paper);
  background: var(--ink);
  border-radius: 999px;
  padding: 14px 14px;
  font-weight: 980;
  font-size: 14.5px;
  box-shadow: 0 16px 40px rgba(0,0,0,.18);
  overflow:hidden;
}
.ctaPrimary:active{transform:translateY(1px)}
.shine{
  position:absolute;
  inset:-60px -80px;
  background: radial-gradient(180px 70px at 20% 50%, rgba(255,255,255,.55), transparent 60%);
  opacity:.28;
  filter: blur(8px);
  animation: shine 3.6s ease-in-out infinite;
  pointer-events:none;
}
@keyframes shine{
  0%,100%{transform: translate3d(-30px,0,0)}
  50%{transform: translate3d(50px,-10px,0)}
}
.ctaGhost{
  width:100%;
  text-decoration:none;
  color: var(--ink);
  background: rgba(255,253,247,.85);
  border: 1px solid var(--line);
  border-radius: 999px;
  padding: 13px 14px;
  font-weight: 900;
  text-align:center;
}
.trustRow{
  margin-top: 12px;
  display:flex;
  flex-wrap:wrap;
  gap:8px;
}
.trustPill{
  padding: 8px 10px;
  border-radius: 999px;
  background: rgba(176,141,42,.10);
  border: 1px solid rgba(176,141,42,.20);
  color: var(--ink);
  font-size: 12px;
  font-weight: 800;
}
.micro{
  margin-top: 10px;
  color: var(--muted2);
  font-size: 12.5px;
  line-height: 1.45;
}
.heroSide{display:none}
.scrollHint{
  margin-top: 10px;
  text-align:center;
  color: var(--muted2);
  font-size: 12px;
}

/* sections */
.section{
  max-width:1100px;
  margin:0 auto;
  padding: 58px 14px;
}
.sectionAlt{
  background: rgba(255,253,247,.55);
  border-top: 1px solid var(--softLine);
  border-bottom: 1px solid var(--softLine);
}
.sectionDark{
  background: linear-gradient(180deg, #151311, #0f0e0d);
  color: var(--paper);
  border-top: 1px solid rgba(255,255,255,.08);
  border-bottom: 1px solid rgba(255,255,255,.08);
}
.sh{margin-bottom: 14px}
.shLight .h2{color: var(--paper)}
.shLight .desc{color: rgba(255,255,255,.68)}
.h2{
  margin:0;
  font-size: 24px;
  line-height: 1.15;
  letter-spacing: -.35px;
  font-weight: 980;
}
.desc{
  margin: 10px 0 0;
  color: var(--muted);
  font-size: 14.4px;
  line-height: 1.6;
  max-width: 70ch;
}

/* fear list */
.fearList{
  display:flex;
  flex-direction:column;
  gap:10px;
  margin-top: 14px;
}
.fearItem{
  background: rgba(255,253,247,.80);
  border: 1px solid var(--softLine);
  border-radius: var(--r16);
  padding: 12px 12px;
  display:flex;
  gap:10px;
  box-shadow: 0 10px 26px rgba(0,0,0,.06);
}
.fearIndex{
  width: 36px;
  height: 36px;
  border-radius: 14px;
  background: rgba(176,141,42,.14);
  border: 1px solid rgba(176,141,42,.22);
  color: var(--ink);
  display:flex;
  align-items:center;
  justify-content:center;
  font-weight: 980;
  font-size: 12px;
  flex: 0 0 auto;
}
.fearText{
  color: var(--ink);
  font-size: 14.2px;
  line-height: 1.55;
}
.pullQuote{
  margin-top: 14px;
  border-radius: var(--r22);
  border: 1px solid rgba(176,141,42,.22);
  background: rgba(176,141,42,.10);
  padding: 14px 14px;
}
.pqTitle{font-weight: 980; letter-spacing:.2px}
.pqText{margin-top:6px; font-size: 18px; font-weight: 980}
.pqText b{color: var(--gold)}
.center{margin-top: 14px; display:flex; justify-content:center}

/* inside grid */
.insideGrid{
  display:grid;
  grid-template-columns: 1fr;
  gap: 10px;
  margin-top: 14px;
}
.infoCard{
  background: rgba(255,253,247,.85);
  border: 1px solid var(--softLine);
  border-radius: var(--r22);
  padding: 14px 14px;
  box-shadow: 0 12px 34px rgba(0,0,0,.06);
}
.infoTop{display:flex; gap:10px; align-items:flex-start}
.infoIcon{
  width: 38px; height: 38px;
  border-radius: 16px;
  background: rgba(176,141,42,.14);
  border: 1px solid rgba(176,141,42,.22);
  display:flex; align-items:center; justify-content:center;
  font-size: 16px;
}
.infoTitle{font-weight: 980; letter-spacing:-.2px}
.infoList{
  margin: 10px 0 0;
  padding-left: 18px;
  color: var(--muted);
  font-size: 13.8px;
  line-height: 1.6;
}
.infoList li{margin: 6px 0}

.mediaCard{
  position:relative;
  overflow:hidden;
  border-radius: var(--r22);
  border: 1px solid var(--softLine);
  box-shadow: 0 14px 40px rgba(0,0,0,.08);
  height: 220px;
  background: #000;
}
.mediaCard img{
  width:100%;
  height:100%;
  object-fit:cover;
  filter: saturate(1.05) contrast(1.05);
  opacity:.92;
}
.mediaShade{
  position:absolute; inset:0;
  background: linear-gradient(180deg, rgba(0,0,0,.05), rgba(0,0,0,.55));
}
.mediaBadge{
  position:absolute;
  left:12px; top:12px;
  padding: 8px 10px;
  border-radius: 999px;
  background: rgba(255,253,247,.86);
  border: 1px solid rgba(255,255,255,.25);
  color: var(--ink);
  font-weight: 980;
  font-size: 12px;
}
.mediaText{
  position:absolute;
  left:12px; right:12px; bottom:12px;
  color: var(--paper);
}
.mediaTitle{font-weight: 980; font-size: 16px}
.mediaSub{margin-top:4px; color: rgba(255,255,255,.78); font-size: 12.8px}

/* truth */
.truthWrap{
  display:grid;
  grid-template-columns: 1fr;
  gap: 12px;
}
.truthEyebrow{
  font-size:11px;
  letter-spacing:.22em;
  text-transform:uppercase;
  color: rgba(208,177,90,.85);
}
.truthList{
  margin: 12px 0 0;
  padding-left: 18px;
  color: rgba(255,255,255,.78);
  line-height: 1.6;
}
.truthList li{margin: 7px 0}
.truthLine{
  margin-top: 12px;
  color: rgba(255,255,255,.88);
  font-weight: 900;
}
.truthMedia{
  position:relative;
  overflow:hidden;
  border-radius: var(--r22);
  border: 1px solid rgba(255,255,255,.10);
  height: 260px;
}
.truthMedia img{
  width:100%; height:100%;
  object-fit:cover;
  filter:saturate(1.05) contrast(1.05);
  opacity:.9;
}
.truthShade{
  position:absolute; inset:0;
  background: linear-gradient(180deg, rgba(0,0,0,.10), rgba(0,0,0,.72));
}
.truthBadge{
  position:absolute; left:12px; bottom:12px;
  background: rgba(255,253,247,.86);
  color: var(--ink);
  font-weight: 980;
  font-size: 12px;
  border-radius: 999px;
  padding: 8px 10px;
  border: 1px solid rgba(255,255,255,.20);
}

/* preview */
.previewGrid{
  margin-top: 14px;
  display:grid;
  grid-template-columns: 1fr;
  gap: 10px;
}
.previewItem{
  background: rgba(255,253,247,.85);
  border: 1px solid var(--softLine);
  border-radius: var(--r16);
  padding: 12px 12px;
  display:flex;
  gap:10px;
  box-shadow: 0 10px 26px rgba(0,0,0,.06);
}
.spark{
  width: 28px; height: 28px;
  border-radius: 12px;
  background: rgba(176,141,42,.14);
  border: 1px solid rgba(176,141,42,.22);
  display:flex; align-items:center; justify-content:center;
  color: var(--gold);
  flex: 0 0 auto;
}
.previewText{color: var(--ink); font-size: 14.2px; line-height: 1.55}

/* quotes */
.quotes{
  margin-top: 14px;
  display:grid;
  grid-template-columns: 1fr;
  gap: 10px;
}
.quote{
  background: rgba(255,253,247,.85);
  border: 1px solid var(--softLine);
  border-radius: var(--r22);
  padding: 14px 14px;
  box-shadow: 0 12px 34px rgba(0,0,0,.06);
  font-weight: 900;
  color: var(--ink);
}

/* form */
.formWrap{
  margin-top: 14px;
  display:grid;
  grid-template-columns: 1fr;
  gap: 12px;
}
.formMedia{
  position:relative;
  overflow:hidden;
  border-radius: var(--r22);
  border: 1px solid rgba(255,255,255,.10);
  height: 220px;
}
.formMedia img{width:100%; height:100%; object-fit:cover; opacity:.92}
.formShade{
  position:absolute; inset:0;
  background: linear-gradient(180deg, rgba(0,0,0,.05), rgba(0,0,0,.78));
}
.formNote{
  position:absolute; left:12px; bottom:12px; right:12px;
  color: var(--paper);
}
.fnTitle{font-weight: 980; font-size: 16px}
.fnSub{margin-top:4px; color: rgba(255,255,255,.75); font-size: 12.8px}

.form{
  background: rgba(255,253,247,.10);
  border: 1px solid rgba(255,255,255,.10);
  border-radius: var(--r22);
  padding: 14px 14px;
}
.row{
  display:grid;
  grid-template-columns: 1fr;
  gap: 10px;
}
.field{margin-top: 10px}
label{
  display:block;
  font-size: 11px;
  letter-spacing:.22em;
  text-transform:uppercase;
  color: rgba(255,255,255,.72);
  margin-bottom: 8px;
}
input, textarea{
  width:100%;
  border-radius: 14px;
  border: 1px solid rgba(255,255,255,.14);
  background: rgba(0,0,0,.35);
  color: var(--paper);
  padding: 12px 12px;
  outline:none;
  font-size: 14.5px;
}
input::placeholder, textarea::placeholder{color: rgba(255,255,255,.55)}
input:focus, textarea:focus{
  border-color: rgba(208,177,90,.55);
  box-shadow: 0 0 0 6px rgba(208,177,90,.12);
}
.full{width:100%}
.fine{
  margin-top: 10px;
  color: rgba(255,255,255,.65);
  font-size: 12.5px;
  line-height: 1.55;
}

/* FAQ */
.faq{margin-top: 14px; display:flex; flex-direction:column; gap:10px}
.faqItem{
  border: 1px solid var(--softLine);
  border-radius: var(--r22);
  background: rgba(255,253,247,.85);
  overflow:hidden;
  box-shadow: 0 12px 34px rgba(0,0,0,.06);
}
.faqQ{
  width:100%;
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding: 14px 14px;
  background: transparent;
  border: 0;
  font-weight: 980;
  color: var(--ink);
  cursor:pointer;
}
.chev{transition: transform .25s ease}
.chev.open{transform: rotate(180deg)}
.faqA{overflow:hidden}
.faqAText{
  padding: 0 14px 14px 14px;
  color: var(--muted);
  font-size: 14px;
  line-height: 1.6;
}

/* mobile sticky CTA bar */
.mobileBar{
  position:fixed;
  left:0; right:0; bottom:0;
  padding: 10px 12px 12px;
  z-index:60;
  background: linear-gradient(180deg, rgba(247,243,234,0), rgba(247,243,234,.92));
  backdrop-filter: blur(8px);
}
.mobileBarBtn{
  display:block;
  text-align:center;
  text-decoration:none;
  font-weight: 980;
  color: var(--paper);
  background: var(--ink);
  padding: 14px 14px;
  border-radius: 999px;
  box-shadow: 0 16px 40px rgba(0,0,0,.18);
}

/* desktop upgrades */
@media(min-width: 980px){
  .heroMedia{height: 520px}
  .heroInner{
    grid-template-columns: 1.1fr .9fr;
    gap: 14px;
    padding-top: 300px;
  }
  .heroSide{display:block}
  .sideFrame{
    position:relative;
    height: 240px;
    border-radius: var(--r22);
    overflow:hidden;
    border: 1px solid var(--softLine);
    box-shadow: var(--shadow2);
  }
  .sideFrame img{width:100%; height:100%; object-fit:cover; opacity:.92}
  .sideShade{
    position:absolute; inset:0;
    background: linear-gradient(180deg, rgba(0,0,0,.10), rgba(0,0,0,.72));
  }
  .sideText{
    position:absolute; left:12px; bottom:12px; right:12px;
    color: var(--paper);
  }
  .sideTitle{font-weight: 980; font-size: 16px}
  .sideSub{margin-top:4px; color: rgba(255,255,255,.78); font-size: 12.8px}

  .sideMini{
    margin-top: 10px;
    display:grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }
  .mini{
    border-radius: var(--r22);
    border: 1px solid var(--softLine);
    background: rgba(255,253,247,.78);
    padding: 12px 12px;
    box-shadow: 0 12px 34px rgba(0,0,0,.06);
  }
  .miniK{color: var(--muted2); font-size: 12px}
  .miniV{margin-top:4px; font-weight: 980; letter-spacing:-.2px}

  .h1{font-size: 48px}
  .h2{font-size: 34px}
  .ctaRow{flex-direction: row}
  .ctaGhost{max-width: 260px}
  .ctaPrimary{max-width: 420px}

  .fearList{display:grid; grid-template-columns: 1fr 1fr; gap: 12px}
  .insideGrid{grid-template-columns: 1fr 1fr; gap: 12px}
  .truthWrap{grid-template-columns: 1.1fr .9fr; gap: 14px}
  .previewGrid{grid-template-columns: 1fr 1fr; gap: 12px}
  .quotes{grid-template-columns: 1fr 1fr; gap: 12px}
  .formWrap{grid-template-columns: .9fr 1.1fr; gap: 14px}
  .row{grid-template-columns: 1fr 1fr}
  .mobileBar{display:none}
}
`;

