import { resume } from "./data";

const CX = 360;
const CY = 276;
const RX = 252;
const RY = 198;

type Anchor = "start" | "middle" | "end";

const icon = {
  design: `<path d="M4 4h16v16H4z"/><path d="M12 4v16M4 12h16"/>`,
  build: `<rect x="7.5" y="7.5" width="9" height="9" rx="1"/><path d="M10.5 7.5V4M13.5 7.5V4M10.5 16.5V20M13.5 16.5V20M7.5 10.5H4M7.5 13.5H4M16.5 10.5H20M16.5 13.5H20"/>`,
  automation: `<path d="M20 12a8 8 0 1 1-2.5-5.8"/><path d="M20 3.5V8h-4.5"/>`
};

const glyphs: Record<string, string> = {
  design: icon.design,
  build: icon.build,
  automation: icon.automation
};

export function pillarGlyph(key: string): string {
  const d = glyphs[key] ?? icon.build;
  return `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">${d}</svg>`;
}

export function topology(): string {
  const groups = [...resume.technical, ...resume.moreSkills];
  const count = groups.length;
  const step = 360 / count;

  const nodes = groups.map((g, i) => {
    const rad = (-90 + step * i) * (Math.PI / 180);
    const cos = Math.cos(rad);
    const sin = Math.sin(rad);
    const x = +(CX + cos * RX).toFixed(1);
    const y = +(CY + sin * RY).toFixed(1);
    const anchor: Anchor = cos > 0.3 ? "start" : cos < -0.3 ? "end" : "middle";
    const dx = anchor === "start" ? 16 : anchor === "end" ? -16 : 0;
    const dy = sin < -0.6 ? -16 : sin > 0.6 ? 28 : 5;
    return { ...g, x, y, anchor, dx, dy, i };
  });

  const spokes = nodes
    .map(
      (n, i) =>
        `<path id="t${i}" class="topo__wire topo__draw" style="--i:${i}" d="M${CX} ${CY} L${n.x} ${n.y}"/>`
    )
    .join("");

  const pulses = nodes
    .map(
      (n, i) =>
        `<path class="topo__pulse" d="M0 0 L15 0"><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.14;.78;1" dur="${(4.4 + i * 0.55).toFixed(1)}s" repeatCount="indefinite" begin="${(i * 0.62).toFixed(2)}s"/><animateMotion dur="${(4.4 + i * 0.55).toFixed(1)}s" repeatCount="indefinite" begin="${(i * 0.62).toFixed(2)}s" rotate="auto" keyPoints="0;1" keyTimes="0;1" calcMode="linear"><mpath href="#t${i}"/></animateMotion></path>`
    )
    .join("");

  const mesh = nodes
    .map((n) => `${n.x} ${n.y}`)
    .join(" L ");

  const caps = nodes
    .map(
      (n) => `<g class="topo__in" style="--i:${n.i}">
      <circle class="topo__dot" cx="${n.x}" cy="${n.y}" r="6.5"/>
      <text class="topo__cap" x="${n.x + n.dx}" y="${n.y + n.dy}" text-anchor="${n.anchor}" dominant-baseline="${n.dy > 20 ? "hanging" : "middle"}">${escapeXml(n.title)}</text>
      <text class="topo__sub" x="${n.x + n.dx}" y="${n.y + n.dy + (n.dy > 20 ? 17 : 15)}" text-anchor="${n.anchor}">${escapeXml(n.items.slice(0, 2).join(" · "))}</text>
    </g>`
    )
    .join("");

  const hub = resume.experience.find((e) => e.dates.includes("Present") && e.title !== "Co-owner");
  const hubLabel = hub ? hub.company.split(",")[0] : "Core";

  return `<svg class="topo" viewBox="-46 40 812 496" role="img" aria-label="Network diagram: ${escapeXml(hubLabel)} at the centre, connected to ${nodes.map((n) => escapeXml(n.title)).join(", ")}">
    <path class="topo__mesh" d="M${mesh} Z"/>
    ${spokes}
    ${pulses}
    ${caps}
    <g class="topo__in" style="--i:0">
      <circle class="topo__hub-ring" cx="${CX}" cy="${CY}" r="34"/>
      <circle class="topo__hub" cx="${CX}" cy="${CY}" r="32"/>
      <path d="M${CX - 11} ${CY} l5 -9 l6 12 l5 -9" fill="none" stroke="#FF5C1A" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
      <text class="topo__hub-label" x="${CX}" y="${CY + 60}" text-anchor="middle">${escapeXml(hubLabel)}</text>
      <text class="topo__hub-sub" x="${CX}" y="${CY + 77}" text-anchor="middle">${escapeXml(hub?.title ?? "")}</text>
    </g>
  </svg>`;
}

function escapeXml(value: string): string {
  return value.replace(
    /[&<>"']/g,
    (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c] as string
  );
}
