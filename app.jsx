/* global React, ReactDOM */
const { useState, useEffect } = React;

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const revealIfVisible = (el) => {
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      if (r.top < vh && r.bottom > 0) el.classList.add("in");
    };
    els.forEach(revealIfVisible);
    const fallback = setTimeout(() => {
      document.querySelectorAll(".reveal:not(.in)").forEach((el) => el.classList.add("in"));
    }, 1200);
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) {e.target.classList.add("in");io.unobserve(e.target);}
      }),
      { threshold: 0.08, rootMargin: "0px 0px -20px 0px" }
    );
    els.forEach((el) => {if (!el.classList.contains("in")) io.observe(el);});
    return () => {io.disconnect();clearTimeout(fallback);};
  }, []);
}

function Nav() {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <a href="#top" className="brand">
          <span className="brand-mark">H</span>
          <span>Holland Sun</span>
        </a>
        <div className="nav-links">
          <a href="#freecropper">Side Project</a>
          <a href="#vibe">Vibe Coding Course</a>
          <a href="#content">Content Support</a>
          <a href="#experience">Working Background</a>
        </div>
        <a href="#contact" className="nav-cta">Get in touch →</a>
      </div>
    </nav>);

}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap">
        <div className="hero-grid">
          {/* LEFT — identity */}
          <div className="hero-left">
            <div className="reveal hero-eyebrow">
              <span className="hero-kicker">
                <span className="dot"></span>
                Applying — Product Support, Anthropic Singapore
              </span>
            </div>

            <h1 className="hero-headline reveal d1">
              I ship,<br />
              <span className="accent">I support</span>,<br />
              I teach.
            </h1>

            <p className="hero-blurb reveal d2">
              I'm <strong>Haoran (Holland) Sun</strong> — an AI PM in Singapore. I build AI products, run a 6,000-follower channel teaching people how to vibe-code with Claude, and personally answer every support message. I'd like to do exactly this, full-time, at Anthropic.
            </p>

            <div className="hero-cta reveal d3">
              <a href="mailto:hollandsun7@gmail.com" className="btn btn-primary">
                <span>Email me</span>
                <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 11l8-8M3.5 3h7.5v7.5" /></svg>
              </a>
              <a href="#freecropper" className="btn btn-ghost">See what I ship</a>
              <a href="https://github.com/heloraai" target="_blank" rel="noreferrer" className="btn btn-ghost">GitHub</a>
            </div>
          </div>

          {/* RIGHT — index card with portrait avatar */}
          <aside className="hero-card reveal d2">
            <div className="hero-card-head">
              <img className="hero-card-avatar" src="public/holland-portrait.jpg" alt="" />
              <span className="hero-card-num">Holland</span>
              <span className="hero-card-label">At a glance</span>
            </div>
            <dl className="hero-card-list">
              <div>
                <dt>Based</dt>
                <dd>Singapore <span className="muted">· NUS '26</span></dd>
              </div>
              <div>
                <dt>BEFORE</dt>
                <dd>AI PM @ <span className="accent-soft">ByteDance · Byteplus</span></dd>
              </div>
              <div>
                <dt>Building</dt>
                <dd>Freecropper <span className="muted">— 2.1K live users in 3 weeks</span></dd>
              </div>
              <div>
                <dt>Teaching</dt>
                <dd>Vibe-coding with Claude <span className="muted">— 6K followers</span></dd>
              </div>
              <div>
                <dt>Available</dt>
                <dd className="hero-card-avail">May 2nd <span className="accent">2026</span></dd>
              </div>
            </dl>
            <div className="hero-card-foot">
              <span className="dot dot-pulse"></span>
              <span>Currently shipping &amp; supporting</span>
            </div>
          </aside>
        </div>

        {/* bottom marquee strip */}
        <div className="hero-strip reveal d3">
          <span className="hero-strip-item"><em>Ship</em> — Freecropper, live in 30+ countries</span>
          <span className="hero-strip-sep">/</span>
          <span className="hero-strip-item"><em>Support</em> — every Douyin DM, personally</span>
          <span className="hero-strip-sep">/</span>
          <span className="hero-strip-item"><em>Teach</em> — 0→1 vibe-coding, free, in Mandarin</span>
        </div>
      </div>
    </section>);

}

function Numbers() {
  const data = [
  { v: "2.1K", l: "Live users on Freecropper" },
  { v: "6,000+", l: "Followers in 3 months", red: true },
  { v: "30+", l: "Countries reached" },
  { v: "47→92%", l: "Recall I shipped at ByteDance" }];

  return (
    <section className="numbers reveal">
      <div className="numbers-grid">
        {data.map((n, i) =>
        <div key={i} className="num">
            <div className="num-v">{n.red ? <span className="accent">{n.v}</span> : n.v}</div>
            <div className="num-l">{n.l}</div>
          </div>
        )}
      </div>
    </section>);

}

/* ───── Reusable detailed project section ───── */
function ProjectSection({ p, reverse }) {
  return (
    <section className={"proj-section" + (reverse ? " reverse" : "")} id={p.id}>
      <div className="wrap">
        <div className="proj-grid">
          <div className="proj-text reveal">
            <div className="s-label">{p.label}</div>
            <h2 className="proj-title">
              {p.title}<span className="accent">.</span>
            </h2>
            <p className="proj-lead">{p.lead}</p>

            <div className="proj-stats">
              {p.stats.map((s, i) =>
              <div key={i} className="proj-stat">
                  <div className="proj-stat-v">{s.v}</div>
                  <div className="proj-stat-l">{s.l}</div>
                </div>
              )}
            </div>

            <div className="proj-bullets">
              <h4>What I built</h4>
              <ul>
                {p.bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </div>

            <div className="proj-relevance">
              <h4>Why this maps to Product Support</h4>
              <p>{p.relevance}</p>
            </div>

            <div className="proj-links">
              {p.links.map((l, i) =>
              <a key={i} href={l.href} target="_blank" rel="noreferrer" className={i === 0 ? "proj-link primary" : "proj-link"}>
                  {l.label}
                  <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 9l6-6M3.5 3h5.5v5.5" /></svg>
                </a>
              )}
            </div>
          </div>

          <div className="proj-visual reveal d1">{p.visual}</div>
        </div>
      </div>
    </section>);

}

/* ───── Visual mocks ───── */
function FreecropperViz() {
  return (
    <div className="vz vz-frame">
      <div className="vz-stamp">Live · 2.1K MAU</div>
      <img src="public/freecropper-analytics.jpg" alt="Freecropper Google Analytics — 2.1K users, +20% growth" />
    </div>);

}

function VibeViz() {
  return (
    <div className="vz vz-vibe">
      <div className="vz-vibe-head">
        <div className="dots"><span></span><span></span><span></span></div>
        <span className="vz-vibe-url">holland-vibe-coding-course.vercel.app</span>
      </div>
      <div className="vz-vibe-body">
        <div className="vz-vibe-side">
          <div className="vz-vibe-chap active">01 · Setup</div>
          <div className="vz-vibe-chap">02 · First prompt</div>
          <div className="vz-vibe-chap">03 · Claude Code</div>
          <div className="vz-vibe-chap">04 · Deploy</div>
          <div className="vz-vibe-chap">05 · Ship it</div>
        </div>
        <div className="vz-vibe-main">
          <span className="vz-vibe-tag">Lesson 01</span>
          <h3>Your first AI app, in 30 minutes.</h3>
          <p>No prior code required. By the end of this lesson, you'll have a working app deployed to a real URL.</p>
          <div className="vz-vibe-pill">▶ Start lesson</div>
        </div>
      </div>
    </div>);

}

function ContentViz() {
  const cards = [
  { p: "Douyin", t: "Claude Code 7天上线全栈项目", v: "12.4K", g: "linear-gradient(135deg, #2A0E0B, #D2392B)" },
  { p: "小红书", t: "0→1 Vibe Coding 完整教程", v: "5.4K", g: "linear-gradient(135deg, #3A1410, #E84B3C)" },
  { p: "Douyin", t: "RAG vs Fine-tune 怎么选", v: "8.1K", g: "linear-gradient(135deg, #1A1614, #6B1E15)" },
  { p: "小红书", t: "Google AI Studio 实战", v: "3.2K", g: "linear-gradient(135deg, #2D0B07, #C8362A)" }];

  return (
    <div className="vz vz-content">
      <div className="vz-content-grid">
        {cards.map((c, i) =>
        <div key={i} className="vz-vid" style={{ background: c.g }}>
            <div className="vz-vid-shade"></div>
            <span className="vz-vid-tag">{c.p}</span>
            <div className="vz-vid-bottom">
              <div className="vz-vid-title">{c.t}</div>
              <div className="vz-vid-views">▶ {c.v}</div>
            </div>
          </div>
        )}
      </div>
    </div>);

}

/* ───── Project data ───── */
const FREECROPPER = {
  id: "freecropper",
  label: "Project 01 · Side project · Live",
  title: "Freecropper",
  lead: "A free online video cropper, built end-to-end in 7 days with Claude Code. Open-sourced. SEO-distributed. I run support myself.",
  stats: [
  { v: "2.1K", l: "Active users / mo" },
  { v: "+1037%", l: "Export growth" },
  { v: "30+", l: "Countries" }],

  bullets: [
  "Full-stack solo build with Claude Code: Next.js front-end, FFmpeg pipeline, R2 storage, custom domain.",
  "Hand-integrated every API and auth flow — no boilerplate frameworks doing the work for me.",
  "SEO-distributed via Reddit threads, X posts, and search-intent landing pages → 400+ users in two weeks.",
  "Wrote and answered every support email and Reddit DM myself; recurring questions became in-app hints.",
  "Open-sourced the codebase on GitHub so other builders can fork it."],

  relevance: "This is Product Support in miniature. I'm engineer, PM, and responder — every confused user becomes a fix, a doc, or a UX change. That's the same loop a Product Support Specialist runs at Anthropic, just at a different scale.",
  links: [
  { label: "Visit freecropper.com", href: "https://freecropper.com/" },
  { label: "GitHub @heloraai", href: "https://github.com/heloraai" }],

  visual: <FreecropperViz />
};

const VIBE = {
  id: "vibe",
  label: "Project 02 · Education · Community",
  title: "Holland's Vibe Coding course",
  lead: "A 0→1 course teaching beginners how to ship AI products made by Claude design. Co-built with the community I support — every lesson started as a real question in the group.",
  stats: [
  { v: "$20", l: "Per learner" },
  { v: "Claude", l: "Design + Code" },
  { v: "0 → 1", l: "Beginner path" }],

  bullets: [
  "Acted as the always-on technical responder in the community — answered setup, API, and deploy blockers in real time.",
  "Tracked every recurring question and turned the top 20 into a permanent self-serve curriculum.",
  "Built the entire course site in Claude Design — a real-world demo of the same toolchain I'd be supporting at Anthropic.",
  "Plain-language docs, runnable examples, beginner-first sequencing. No prior coding required.",
  "Co-authored lessons with members so the curriculum reflects what beginners actually struggle with."],

  relevance: "Anthropic's Product Support team identifies and closes gaps in technical knowledge — externally for users, internally for the team. I've already been doing exactly this for a community of AI beginners, and I have the patience and writing chops to do it well.",
  links: [
  { label: "View the course", href: "https://holland-vibe-coding-course.vercel.app/" }],

  visual: <VibeViz />
};

const CONTENT = {
  id: "content",
  label: "Project 03 · Content · Bilingual",
  title: "AI, in public",
  lead: "Teaching real-world AI shipping on Douyin and Rednote — in plain Mandarin, to non-engineers. 6,000 followers in three months, with comments and DMs feeding directly back into Freecropper and the course.",
  stats: [
  { v: "6,000+", l: "Followers in 3 mo" },
  { v: "2", l: "Platforms · Bilingual" },
  { v: "Daily", l: "Replies to questions" }],

  bullets: [
  "Hands-on walkthroughs: Claude Code + Google AI Studio for one-week MVPs.",
  "Translation work: surfacing English-language AI tooling concepts to Mandarin audiences clearly.",
  "Comments and DMs become continuous user research — feeding back into Freecropper, the course, and how I write docs.",
  "Bilingual output: every concept goes out in Mandarin and English on different channels.",
  "Topic mix: 'how to ship', 'why your prompt fails', 'RAG vs fine-tune', 'when to call in a real engineer'."],

  relevance: "Product Support is technical writing under deadline pressure. Doing this for 6k strangers — in two languages, on two platforms, every week — is the best training I could ask for.",
  links: [
  { label: "Douyin (抖音)", href: "https://v.douyin.com/RS1kbXyOfP8/" },
  { label: "Xiaohongshu (小红书)", href: "https://xhslink.com/m/A8TmofDuIaj" }],

  visual: <ContentViz />
};

function Approach() {
  const cells = [
  { n: "01", h: "Front-line ownership", p: "Every Freecropper ticket is mine. Same loop a great support team runs." },
  { n: "02", h: "Closing knowledge gaps", p: "Recurring questions become docs, courses, in-app hints." },
  { n: "03", h: "Bad cases as data", p: "Test sets, eval SOPs, A/B testing. Shipped 47→92% at ByteDance." },
  { n: "04", h: "Bilingual technical writing", p: "English ↔ Mandarin, every day, on two platforms." }];

  return (
    <section className="section approach" id="approach">
      <div className="wrap">
        <div className="reveal">
          <div className="s-label">How I'd do this role</div>
          <h2 className="s-title">
            The four muscles<br />
            I bring on <span className="accent">day one</span>.
          </h2>
        </div>
        <div className="approach-grid reveal d1">
          {cells.map((c) =>
          <div key={c.n} className="app-cell">
              <div className="app-cell-num">{c.n}</div>
              <div className="app-cell-h">{c.h}</div>
              <div className="app-cell-p">{c.p}</div>
            </div>
          )}
        </div>
      </div>
    </section>);

}

function Resume() {
  const rows = [
  { p: "2025.08 → 2026.01", co: "ByteDance · Byteplus", role: "AI PM — AI Search & recommendation", tag: "47 → 92% recall" },
  { p: "2025.04 → 08", co: "Rokid", role: "AI PM — AI Glasses assistant", tag: "≥95% intent · 4s latency" },
  { p: "2024.10 → 25.01", co: "Pensees · Mikomiko", role: "AI PM — Overseas AIGC community", tag: "+28% creator MAU" },
  { p: "2024 → 2025", co: "NUS", role: "Engineering Design & Innovation, GPA 4.5", tag: "Top 10%" }];

  return (
    <section className="section resume" id="experience">
      <div className="wrap">
        <div className="reveal">
          <div className="s-label">Background</div>
          <h2 className="s-title">Three AI PM roles. One throughline: <span className="accent">users.</span></h2>
        </div>
        <div className="resume-rows reveal d1">
          {rows.map((r, i) =>
          <div key={i} className="r-row">
              <div className="r-period">{r.p}</div>
              <div>
                <div className="r-co">{r.co}</div>
                <div className="r-role">{r.role}</div>
              </div>
              <div className="r-tag">{r.tag}</div>
            </div>
          )}
        </div>
      </div>
    </section>);

}

function Contact() {
  const items = [
  { l: "LinkedIn", v: "Holland Sun", href: "https://www.linkedin.com/in/haoran-sun-104311213/" },
  { l: "GitHub", v: "@heloraai", href: "https://github.com/heloraai" },
  { l: "小红书", v: "AI tutorials", href: "https://xhslink.com/m/A8TmofDuIaj" },
  { l: "Email", v: "haoransun2023@163.com", href: "mailto:haoransun2023@163.com" }];

  return (
    <section className="contact" id="contact">
      <div className="wrap">
        <h2 className="contact-h reveal">
          Let's talk <span className="accent">support.</span>
        </h2>
        <div className="contact-row reveal d1">
          {items.map((it, i) =>
          <a key={i} href={it.href} target="_blank" rel="noreferrer" className="c-cell">
              <span className="c-cell-l">{it.l}</span>
              <span className="c-cell-v">{it.v}</span>
            </a>
          )}
        </div>
      </div>
    </section>);

}

function Footer() {
  return (
    <footer className="foot">
      <div className="foot-inner">
        <span>© 2026 Holland Sun</span>
        <span><span className="accent">●</span> Built for the Anthropic application</span>
      </div>
    </footer>);

}

function App() {
  useReveal();
  return (
    <React.Fragment>
      <Nav />
      <Hero />
      <ProjectSection p={FREECROPPER} />
      <Numbers />
      <ProjectSection p={VIBE} reverse />
      <ProjectSection p={CONTENT} />
      <Approach />
      <Resume />
      <Contact />
      <Footer />
    </React.Fragment>);

}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);