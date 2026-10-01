import { resume } from "./data";
import { styles } from "./styles";
import { pillarGlyph, topology } from "./topology";

const esc = (value: string): string =>
  value.replace(
    /[&<>"']/g,
    (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c] as string
  );

const ICON = {
  mail: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M3 6.5h18v11H3z"/><path d="m3.5 7 8.5 6 8.5-6"/></svg>`,
  arrow: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h13M13 7l5 5-5 5"/></svg>`
};

function renderCapabilities(): string {
  return Object.entries(resume.skills)
    .map(
      ([key, s], i) => `<article class="pillar" data-reveal style="--d:${i * 110}ms">
      <div class="pillar__icon">${pillarGlyph(key)}</div>
      <h3 class="pillar__t">${esc(s.title)}</h3>
      <p class="pillar__d">${esc(s.description)}</p>
    </article>`
    )
    .join("\n      ");
}

function renderBanks(groups: { title: string; items: string[] }[]): string {
  return groups
    .map(
      (g, i) => `<div class="bank" data-reveal style="--d:${i * 80}ms">
        <h3 class="bank__t"><b>${String(i + 1).padStart(2, "0")}</b> ${esc(g.title)}</h3>
        <ul class="bank__list">
          ${g.items.map((item) => `<li class="chip">${esc(item)}</li>`).join("\n          ")}
        </ul>
      </div>`
    )
    .join("\n      ");
}

function renderRoles(): string {
  const track = resume.experience
    .map(
      (job, i) => `<article class="role" data-reveal style="--d:${i * 70}ms">
        <div class="role__when">${esc(job.dates)}</div>
        <span class="role__node" aria-hidden="true"></span>
        <div>
          <h3 class="role__co">${esc(job.company)}</h3>
          <p class="role__ti">${esc(job.title)}</p>
          <ul class="role__list">
            ${job.bullets.map((b) => `<li>${esc(b)}</li>`).join("\n            ")}
          </ul>
        </div>
      </article>`
    )
    .join("\n      ");

  return `<div class="tl"><div class="tl__rail" aria-hidden="true"></div>
      ${track}
    </div>`;
}

const platformCount = (): number =>
  [...resume.technical, ...resume.moreSkills].reduce((total, group) => total + group.items.length, 0);

const proofPoints = (): typeof resume.highlights => [
  ...resume.highlights,
  { value: String(platformCount()), label: "Platforms", note: "the full stack" }
];

const yearsInPractice = (): number => {
  const starts = resume.experience
    .map((job) => Number(job.dates.match(/^\d{4}/)?.[0]))
    .filter((y) => Number.isFinite(y));
  return new Date().getFullYear() - Math.min(...starts);
};

function renderPage(): string {
  const { contact, pitch, profile, education } = resume;
  const [first, last] = contact.name.split(" ");

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${esc(contact.name)} — ${esc(contact.title)}</title>
<meta name="description" content="${esc(pitch.promise)} ${esc(profile)}">
<meta name="theme-color" content="#04060D">
<meta property="og:title" content="${esc(contact.name)} — ${esc(contact.title)}">
<meta property="og:description" content="${esc(pitch.pitch)}">
<meta property="og:type" content="profile">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600&family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;500&display=swap">
<link rel="stylesheet" href="data:text/css,${encodeURIComponent(styles)}">
<noscript><style>[data-reveal]{opacity:1;transform:none}</style></noscript>
</head>
<body>
<div class="grid-bg" aria-hidden="true"></div>
<div class="fluid" aria-hidden="true"></div>
<div class="grain" aria-hidden="true"></div>

<div class="shell">
  <nav class="nav" aria-label="Primary">
    <div class="wrap nav__in">
      <a class="nav__mark" href="#top">${esc(first)}<b>.</b>${esc(last)}</a>
      <div class="nav__links">
        <a href="#capabilities">Capabilities</a>
        <a href="#stack">Stack</a>
        <a href="#track-record">Track record</a>
      </div>
      <a class="nav__cta" href="mailto:${esc(contact.email)}">Hire me</a>
    </div>
  </nav>

  <header class="wrap hero" id="top">
    <div class="hero__grid">
      <div>
        <p class="eyebrow" data-reveal style="--d:60ms">${esc(pitch.eyebrow)}</p>
        <h1 class="hero__name" data-reveal style="--d:160ms"><span>${esc(first)}</span><span>${esc(last)}</span></h1>
        <p class="hero__role" data-reveal style="--d:280ms"><span>${esc(contact.title)}</span><span>Master of robots</span></p>
        <p class="hero__pitch" data-reveal style="--d:360ms">${esc(pitch.pitch)}</p>
        <div class="hero__actions" data-reveal style="--d:440ms">
          <a class="btn btn--solid" href="mailto:${esc(contact.email)}">${ICON.mail}${esc(pitch.ctaPrimary)}</a>
          <a class="btn btn--ghost" href="${esc(pitch.ctaSecondaryHref)}">${esc(pitch.ctaSecondary)}${ICON.arrow}</a>
        </div>
      </div>
      <div data-reveal style="--d:520ms">${topology()}</div>
    </div>
  </header>

  <section class="proof" aria-label="Proof points">
    <div class="wrap">
      <div class="proof__grid">
        ${proofPoints()
          .map(
            (h) => `<div class="proof__cell">
          <p class="proof__v">${esc(h.value)}</p>
          <p class="proof__l">${esc(h.label)}</p>
          <p class="proof__n">${esc(h.note)}</p>
        </div>`
          )
          .join("\n        ")}
      </div>
    </div>
  </section>

  <section class="sect wrap" id="capabilities">
    <p class="eyebrow" data-reveal>How I work</p>
    <h2 class="h2" data-reveal style="--d:80ms">Design it. Build it. <em>Automate the rest.</em></h2>
    <p class="lede" data-reveal style="--d:160ms">Three disciplines, one person who owns the whole path. No handoffs, no gap between the design and the thing that runs it.</p>
    <div class="pillars">
      ${renderCapabilities()}
    </div>
  </section>

  <section class="sect wrap" id="stack" style="padding-top:0">
    <p class="eyebrow" data-reveal>The instruments</p>
    <h2 class="h2" data-reveal style="--d:80ms">Deep in the stack, <em>fluent in the wiring.</em></h2>
    <div class="stack">
      ${renderBanks([...resume.technical, ...resume.moreSkills])}
    </div>
  </section>

  <section class="sect wrap" id="track-record" style="padding-top:0">
    <p class="eyebrow" data-reveal>Track record</p>
    <h2 class="h2" data-reveal style="--d:80ms">${esc(`${yearsInPractice()} years`)}, <em>one rack at a time.</em></h2>
    <p class="lede" data-reveal style="--d:160ms">From small-business help desks to a 32-rack datacenter and a global SD-WAN. Everything below shipped, and most of it still runs.</p>
    ${renderRoles()}
  </section>

  <section class="sect wrap" id="background" style="padding-top:0">
    <p class="eyebrow" data-reveal>Background</p>
    <h2 class="h2" data-reveal style="--d:80ms">Computer science, <em>top of the class.</em></h2>
    <div class="edu">
      ${education
        .map(
          (e) => `<div class="edu__row" data-reveal>
        <p>${esc(e)}</p>
        <span>${/certif/i.test(e) ? "Certification" : "Education"}</span>
      </div>`
        )
        .join("\n      ")}
    </div>
  </section>

  <section class="wrap" id="contact" style="padding-bottom:clamp(60px,8vw,100px)">
    <div class="cta" data-reveal>
      <p class="eyebrow">The pitch, in one line</p>
      <h2 class="cta__t">${esc(pitch.closingLead)}<em>${esc(pitch.closingAccent)}</em></h2>
      <a class="cta__mail" href="mailto:${esc(contact.email)}">${ICON.mail}${esc(contact.email)}</a>
      <p class="cta__meta">
        <a href="tel:${esc(contact.phone.replace(/[^\d+]/g, ""))}">${esc(contact.phone)}</a>
        <span>${esc(contact.title)}</span>
      </p>
    </div>
  </section>

  <footer class="foot">
    <div class="wrap foot__in">
      <span>© ${new Date().getFullYear()} ${esc(contact.name)}</span>
      <span class="live"><b aria-hidden="true"></b>Served from a Cloudflare Worker</span>
      <a href="#top">Back to top</a>
    </div>
  </footer>
</div>

<script>
(function () {
  var topo = document.querySelector(".topo");
  if (topo && window.matchMedia("(max-width: 860px)").matches) {
    topo.setAttribute("viewBox", "118 58 484 434");
  }
  var items = document.querySelectorAll("[data-reveal]");
  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduced || !("IntersectionObserver" in window)) {
    for (var i = 0; i < items.length; i++) items[i].classList.add("is-in");
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    for (var i = 0; i < entries.length; i++) {
      if (entries[i].isIntersecting) {
        entries[i].target.classList.add("is-in");
        io.unobserve(entries[i].target);
      }
    }
  }, { rootMargin: "0px 0px -10% 0px", threshold: 0.1 });
  for (var j = 0; j < items.length; j++) io.observe(items[j]);
})();
</script>
</body>
</html>`;
}

export default {
  async fetch(): Promise<Response> {
    return new Response(renderPage(), {
      headers: {
        "Content-Type": "text/html; charset=utf-8",
        "Cache-Control": "public, max-age=300"
      }
    });
  }
} satisfies ExportedHandler;
