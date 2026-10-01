export const styles = `
*,*::before,*::after{box-sizing:border-box}
:root{
  --ink:#04060D;--ink-1:#080C18;--ink-2:#0C1220;--ink-3:#111829;
  --line:#1A2236;--line-2:#26314C;
  --bone:#EDE9E0;--slate:#8B95AE;--slate-2:#5A6482;
  --signal:#FF5C1A;
  --f-display:'Instrument Serif',Georgia,'Times New Roman',serif;
  --f-body:'Archivo',system-ui,-apple-system,'Segoe UI',sans-serif;
  --f-mono:'JetBrains Mono',ui-monospace,'SFMono-Regular',Menlo,monospace;
  --ease:cubic-bezier(.22,1,.36,1);
  --gutter:clamp(20px,5vw,72px);
  --maxw:1260px;
}
html{-webkit-text-size-adjust:100%;scroll-behavior:smooth;scroll-padding-top:96px}
body{margin:0;background:var(--ink);color:var(--bone);font-family:var(--f-body);font-size:16px;line-height:1.65;font-weight:400;letter-spacing:.005em;overflow-x:hidden;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility}
a{color:inherit;text-decoration:none}
ul{margin:0;padding:0;list-style:none}
h1,h2,h3,h4,p{margin:0}
::selection{background:var(--signal);color:#0A0400}
:focus-visible{outline:2px solid var(--signal);outline-offset:3px;border-radius:2px}

.grid-bg{position:fixed;inset:0;z-index:0;pointer-events:none;
  background-image:linear-gradient(to right,rgba(237,233,224,.03) 1px,transparent 1px),linear-gradient(to bottom,rgba(237,233,224,.03) 1px,transparent 1px);
  background-size:72px 72px;background-position:center top;
  -webkit-mask-image:radial-gradient(ellipse 120% 80% at 50% 0%,#000 5%,rgba(0,0,0,.35) 45%,transparent 85%);
  mask-image:radial-gradient(ellipse 120% 80% at 50% 0%,#000 5%,rgba(0,0,0,.35) 45%,transparent 85%)}
.fluid{position:fixed;inset:-20% -10% auto;height:120vh;z-index:0;pointer-events:none;filter:blur(90px);opacity:.5;
  background:radial-gradient(38% 34% at 22% 34%,rgba(255,92,26,.20),transparent 70%),radial-gradient(34% 30% at 78% 22%,rgba(64,110,255,.16),transparent 70%),radial-gradient(40% 36% at 55% 62%,rgba(255,92,26,.09),transparent 72%);
  animation:drift 34s var(--ease) infinite alternate}
@keyframes drift{0%{transform:translate3d(0,0,0) scale(1)}50%{transform:translate3d(2.5%,-2%,0) scale(1.06)}100%{transform:translate3d(-2%,2.5%,0) scale(1.02)}}
.grain{position:fixed;inset:0;z-index:1;pointer-events:none;opacity:.35;mix-blend-mode:overlay;
  background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='3'/%3E%3C/filter%3E%3Crect width='160' height='160' filter='url(%23n)' opacity='.5'/%3E%3C/svg%3E")}
.shell{position:relative;z-index:2}
.wrap{width:100%;max-width:var(--maxw);margin-inline:auto;padding-inline:var(--gutter)}

.nav{position:sticky;top:0;z-index:40;background:rgba(4,6,13,.72);backdrop-filter:blur(14px) saturate(150%);-webkit-backdrop-filter:blur(14px) saturate(150%);border-bottom:1px solid var(--line)}
.nav__in{display:flex;align-items:center;gap:28px;height:64px}
.nav__mark{font-family:var(--f-mono);font-size:12px;letter-spacing:.2em;text-transform:uppercase;color:var(--bone)}
.nav__mark b{color:var(--signal);font-weight:500}
.nav__links{display:flex;gap:26px;margin-left:auto;font-family:var(--f-mono);font-size:11.5px;letter-spacing:.14em;text-transform:uppercase;color:var(--slate)}
.nav__links a{position:relative;padding:4px 0;transition:color .3s}
.nav__links a::after{content:"";position:absolute;left:0;bottom:0;width:100%;height:1px;background:var(--signal);transform:scaleX(0);transform-origin:right;transition:transform .4s var(--ease)}
.nav__links a:hover{color:var(--bone)}
.nav__links a:hover::after{transform:scaleX(1);transform-origin:left}
.nav__cta{font-family:var(--f-mono);font-size:11.5px;letter-spacing:.14em;text-transform:uppercase;color:var(--ink);background:var(--signal);padding:9px 16px;border-radius:2px;transition:transform .3s var(--ease),box-shadow .3s}
.nav__cta:hover{transform:translateY(-1px);box-shadow:0 8px 24px -8px rgba(255,92,26,.7)}

.sect{position:relative;padding-block:clamp(76px,9vw,132px)}
.eyebrow{display:flex;align-items:center;gap:12px;font-family:var(--f-mono);font-size:11px;letter-spacing:.24em;text-transform:uppercase;color:var(--slate)}
.eyebrow::before{content:"";width:26px;height:1px;background:var(--signal);flex:none}
.h2{font-family:var(--f-display);font-weight:400;font-size:clamp(32px,4.6vw,58px);line-height:1.04;letter-spacing:-.005em;margin-top:20px;max-width:20ch}
.h2 em{font-style:italic;color:var(--signal)}
.lede{max-width:60ch;color:var(--slate);font-size:clamp(16px,1.5vw,19px);margin-top:22px}

.hero{padding-top:clamp(56px,7vw,96px);padding-bottom:clamp(60px,8vw,110px)}
.hero__grid{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:clamp(32px,5vw,64px);align-items:center}
.hero__name{font-family:var(--f-display);font-weight:400;font-size:clamp(56px,10.5vw,128px);line-height:.88;letter-spacing:-.02em;margin-top:26px}
.hero__name span{display:block}
.hero__name span:nth-child(2){font-style:italic;color:var(--signal);padding-left:.08em}
.hero__role{font-family:var(--f-mono);font-size:clamp(12px,1.4vw,14px);letter-spacing:.28em;text-transform:uppercase;color:var(--slate);margin-top:24px;display:flex;flex-wrap:wrap;gap:8px 18px;align-items:center}
.hero__role span{white-space:nowrap}
.hero__role span+span{display:flex;align-items:center;gap:18px}
.hero__role span+span::before{content:"";width:6px;height:6px;background:var(--signal);flex:none;transform:rotate(45deg)}
.hero__pitch{max-width:44ch;color:var(--slate);font-size:clamp(16px,1.6vw,20px);margin-top:28px}
.hero__actions{display:flex;flex-wrap:wrap;gap:14px;margin-top:38px}
.btn{font-family:var(--f-mono);font-size:12px;letter-spacing:.16em;text-transform:uppercase;padding:15px 24px;border-radius:2px;transition:transform .3s var(--ease),box-shadow .3s,background .3s,color .3s,border-color .3s;display:inline-flex;align-items:center;gap:10px}
.btn--solid{background:var(--signal);color:#0A0400;font-weight:500}
.btn--solid:hover{transform:translateY(-2px);box-shadow:0 14px 34px -12px rgba(255,92,26,.75)}
.btn--ghost{border:1px solid var(--line-2);color:var(--bone)}
.btn--ghost:hover{border-color:var(--signal);color:var(--signal);transform:translateY(-2px)}
.btn svg{width:14px;height:14px;flex:none}

.topo{width:100%;height:auto;display:block;overflow:visible}
.topo__wire{fill:none;stroke:rgba(237,233,224,.2);stroke-width:1}
.topo__mesh{fill:none;stroke:rgba(237,233,224,.1);stroke-width:1;stroke-dasharray:3 7;animation:trickle 9s linear infinite}
@keyframes trickle{to{stroke-dashoffset:-100}}
.topo__draw{stroke-dasharray:600;stroke-dashoffset:600;animation:draw 1.5s var(--ease) forwards;animation-delay:calc(360ms + var(--i) * 150ms)}
@keyframes draw{to{stroke-dashoffset:0}}
.topo__pulse{fill:none;stroke:var(--signal);stroke-width:2;stroke-linecap:round;filter:drop-shadow(0 0 6px rgba(255,92,26,.9))}
.topo__hub-ring{fill:none;stroke:var(--signal);stroke-width:1;opacity:0;transform-box:fill-box;transform-origin:center;animation:ping 3.4s var(--ease) infinite}
@keyframes ping{0%{transform:scale(.6);opacity:.75}70%,100%{transform:scale(2.1);opacity:0}}
.topo__hub{fill:var(--ink-2);stroke:var(--signal);stroke-width:1.4;filter:drop-shadow(0 0 14px rgba(255,92,26,.45))}
.topo__dot{fill:var(--ink);stroke:var(--slate);stroke-width:1.4;transition:stroke .35s}
.topo g:hover .topo__dot{stroke:var(--signal)}
.topo__cap{font-family:var(--f-mono);font-size:12px;letter-spacing:.16em;text-transform:uppercase;fill:var(--bone)}
.topo__sub{font-family:var(--f-mono);font-size:11px;letter-spacing:.04em;fill:#6E7893}
.topo__hub-label{font-family:var(--f-mono);font-size:12px;letter-spacing:.2em;fill:var(--bone)}
.topo__hub-sub{font-family:var(--f-mono);font-size:10px;letter-spacing:.14em;fill:var(--slate)}
.topo__in{opacity:0;animation:fade .8s var(--ease) forwards;animation-delay:calc(900ms + var(--i) * 130ms)}
@keyframes fade{to{opacity:1}}

.proof{border-top:1px solid var(--line);border-bottom:1px solid var(--line);background:linear-gradient(to bottom,rgba(255,255,255,.018),transparent)}
.proof__grid{display:grid;grid-template-columns:repeat(4,1fr)}
.proof__cell{padding:clamp(26px,3.4vw,40px) clamp(18px,2.2vw,28px);border-left:1px solid var(--line)}
.proof__cell:first-child{border-left:0;padding-left:0}
.proof__v{font-family:var(--f-display);font-size:clamp(38px,5vw,58px);line-height:1;letter-spacing:-.01em}
.proof__l{font-family:var(--f-mono);font-size:11.5px;letter-spacing:.1em;text-transform:uppercase;color:var(--bone);margin-top:16px}
.proof__n{font-size:13px;color:var(--slate-2);margin-top:5px}
.proof__cell:hover .proof__v{color:var(--signal);transition:color .4s}

.pillars{display:grid;grid-template-columns:repeat(3,1fr);margin-top:clamp(40px,5vw,64px)}
.pillar{padding:6px clamp(20px,2.4vw,34px) 6px 0;position:relative}
.pillar+.pillar{padding-left:clamp(20px,2.4vw,34px);border-left:1px solid var(--line)}
.pillar__icon{width:26px;height:26px;color:var(--signal);margin-bottom:22px}
.pillar__icon svg{width:100%;height:100%;fill:none;stroke:currentColor;stroke-width:1.3;stroke-linecap:round;stroke-linejoin:round}
.pillar__t{font-family:var(--f-display);font-size:clamp(26px,2.6vw,34px);line-height:1.1}
.pillar__d{color:var(--slate);font-size:15.5px;margin-top:12px}

.stack{margin-top:clamp(36px,4.5vw,56px);display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:1px;background:var(--line);border:1px solid var(--line)}
.bank{background:var(--ink);padding:clamp(24px,2.8vw,34px)}
.bank__t{font-family:var(--f-mono);font-size:11px;letter-spacing:.22em;text-transform:uppercase;color:var(--slate);display:flex;align-items:center;gap:10px}
.bank__t::after{content:"";flex:1;height:1px;background:var(--line)}
.bank__t b{color:var(--signal);font-weight:400}
.bank__list{margin-top:20px;display:flex;flex-wrap:wrap;gap:8px}
.chip{font-size:14px;line-height:1;color:var(--bone);border:1px solid var(--line-2);border-radius:2px;padding:10px 13px;background:var(--ink-1);transition:border-color .3s,color .3s,transform .3s var(--ease)}
.chip:hover{border-color:var(--signal);color:var(--signal);transform:translateY(-2px)}

.tl{margin-top:clamp(44px,5vw,64px);position:relative}
.tl__rail{position:absolute;left:137px;top:10px;bottom:10px;width:1px;background:linear-gradient(to bottom,var(--signal),var(--line) 22%,var(--line) 78%,transparent)}
.role{position:relative;display:grid;grid-template-columns:137px minmax(0,1fr);gap:clamp(24px,3.4vw,48px);padding-block:clamp(26px,3vw,38px)}
.role+.role{border-top:1px solid var(--line)}
.role__when{font-family:var(--f-mono);font-size:12px;letter-spacing:.1em;color:var(--slate);padding-top:7px;padding-right:30px;text-align:right;white-space:nowrap}
.role__node{position:absolute;left:137px;top:clamp(34px,3.4vw,46px);width:7px;height:7px;margin-left:-3px;border-radius:50%;background:var(--ink);border:1px solid var(--signal);transition:background .3s,box-shadow .3s}
.role:hover .role__node{background:var(--signal);box-shadow:0 0 0 5px rgba(255,92,26,.16)}
.role__co{font-family:var(--f-display);font-size:clamp(24px,2.8vw,36px);line-height:1.1}
.role__ti{font-family:var(--f-mono);font-size:11.5px;letter-spacing:.18em;text-transform:uppercase;color:var(--signal);margin-top:8px}
.role__list{margin-top:20px;display:grid;gap:9px;max-width:78ch}
.role__list li{position:relative;padding-left:20px;color:var(--slate);font-size:15.5px}
.role__list li::before{content:"";position:absolute;left:0;top:.72em;width:9px;height:1px;background:var(--line-2);transition:background .3s}
.role:hover .role__list li::before{background:var(--signal)}

.edu{margin-top:clamp(36px,4.4vw,54px);border-top:1px solid var(--line)}
.edu__row{display:grid;grid-template-columns:1fr auto;gap:18px;align-items:baseline;padding:18px 0;border-bottom:1px solid var(--line)}
.edu__row p{color:var(--slate);font-size:15.5px;max-width:70ch}
.edu__row span{font-family:var(--f-mono);font-size:10.5px;letter-spacing:.18em;text-transform:uppercase;color:var(--slate-2);white-space:nowrap}

.cta{border:1px solid var(--line);background:linear-gradient(150deg,rgba(255,92,26,.10),transparent 46%),var(--ink-1);padding:clamp(34px,5.4vw,72px);position:relative;overflow:hidden}
.cta__t{font-family:var(--f-display);font-weight:400;font-size:clamp(30px,5.2vw,66px);line-height:1.02;letter-spacing:-.01em;max-width:22ch;position:relative}
.cta__t em{font-style:italic;color:var(--signal);display:block;margin-top:.12em;line-height:1.06}
.cta__mail{display:inline-flex;align-items:center;gap:12px;font-family:var(--f-mono);font-size:clamp(14px,2vw,20px);letter-spacing:.02em;margin-top:32px;padding-bottom:6px;border-bottom:1px solid var(--line-2);transition:color .3s,border-color .3s}
.cta__mail:hover{color:var(--signal);border-color:var(--signal)}
.cta__mail svg{width:16px;height:16px;flex:none}
.cta__meta{margin-top:26px;font-family:var(--f-mono);font-size:12px;letter-spacing:.1em;color:var(--slate-2);display:flex;flex-wrap:wrap;gap:8px 18px}

.foot{border-top:1px solid var(--line);margin-top:clamp(60px,7vw,100px);padding-block:30px 40px}
.foot__in{display:flex;flex-wrap:wrap;gap:10px 26px;justify-content:space-between;font-family:var(--f-mono);font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:var(--slate-2)}
.foot__in a:hover{color:var(--signal)}
.live{display:inline-flex;align-items:center;gap:8px}
.live b{width:6px;height:6px;border-radius:50%;background:var(--signal);box-shadow:0 0 0 0 rgba(255,92,26,.6);animation:beat 2.6s var(--ease) infinite}
@keyframes beat{0%{box-shadow:0 0 0 0 rgba(255,92,26,.55)}70%{box-shadow:0 0 0 7px rgba(255,92,26,0)}100%{box-shadow:0 0 0 0 rgba(255,92,26,0)}}

[data-reveal]{opacity:0;transform:translateY(20px);transition:opacity .8s var(--ease) var(--d,0ms),transform .8s var(--ease) var(--d,0ms)}
[data-reveal].is-in{opacity:1;transform:none}
.hero [data-reveal]{animation:rise 1s var(--ease) both;animation-delay:var(--d,0ms)}
@keyframes rise{from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:none}}

@media (max-width:1080px){
  .hero__grid{grid-template-columns:1fr;gap:44px}
  .hero__pitch{max-width:60ch}
  .tl__rail,.role__node{left:9px}
  .role{grid-template-columns:1fr;padding-left:38px;gap:12px}
  .role__when{text-align:left;padding-top:0}
}
@media (max-width:860px){
  .nav__links{display:none}
  .hero__actions{flex-direction:column;align-items:stretch}
  .btn{justify-content:center}
  .topo__cap,.topo__sub,.topo__hub-label,.topo__hub-sub{display:none}
  .proof__grid{grid-template-columns:repeat(2,1fr)}
  .proof__cell{border-left:0;border-top:1px solid var(--line);padding-inline:0}
  .proof__cell:nth-child(-n+2){border-top:0}
  .proof__cell:nth-child(odd){padding-right:16px}
  .proof__cell:nth-child(even){padding-left:16px;border-left:1px solid var(--line)}
  .pillars,.stack{grid-template-columns:1fr}
  .pillar{padding:26px 0}
  .pillar+.pillar{padding-left:0;border-left:0;border-top:1px solid var(--line)}
  .edu__row{grid-template-columns:1fr;gap:6px}
}
@media (prefers-reduced-motion:reduce){
  html{scroll-behavior:auto}
  *,*::before,*::after{animation-duration:.001ms!important;animation-iteration-count:1!important;transition-duration:.001ms!important}
  [data-reveal]{opacity:1;transform:none}
  .topo__draw{stroke-dashoffset:0}
  .topo__in,.hero [data-reveal]{opacity:1}
}
`;
