import { resume } from "./data";

function renderResume(): string {
  const r = resume;
  
  const skillGroups = Object.values(r.skills).map(s => `
    <div class="talent">
      <h2>${s.title}</h2>
      <p>${s.description}</p>
    </div>
  `).join("");

  const technicalLists = r.technical.map(t => `
    <ul class="talent">
      ${t.items.map(i => `<li>${i}</li>`).join("\n")}
      <li class="last">${t.items[t.items.length - 1]}</li>
    </ul>
  `).join("");

  const jobs = r.experience.map((job, i) => `
    <div class="job${i === r.experience.length - 1 ? " last" : ""}">
      <h2>${job.company}</h2>
      <h3>${job.title}</h3>
      <h4>${job.dates}</h4>
      <p>${job.bullets.join("<br>")}</p>
    </div>
  `).join("");

  const educationList = r.education.map(e => `<h3>${e}</h3>`).join("\n");

  const moreSkillsLists = r.moreSkills.map(s => `
    <ul class="talent">
      ${s.items.slice(0, -1).map(i => `<li>${i}</li>`).join("\n")}
      <li class="last">${s.items[s.items.length - 1]}</li>
    </ul>
  `).join("");

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${r.contact.name} | ${r.contact.title}</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-50 text-gray-800 font-sans">
  <div class="max-w-4xl mx-auto py-12 px-4">
    <header class="border-b-2 border-gray-800 pb-6 mb-8">
      <div class="flex justify-between items-start">
        <div>
          <h1 class="text-4xl font-bold uppercase tracking-wider">${r.contact.name}</h1>
          <h2 class="text-xl text-gray-600 mt-1">${r.contact.title}</h2>
        </div>
        <div class="text-right">
          <a href="mailto:${r.contact.email}" class="text-red-800 hover:underline">${r.contact.email}</a>
          <p class="text-gray-600">${r.contact.phone}</p>
        </div>
      </div>
    </header>

    <section class="mb-8">
      <h3 class="text-lg font-bold border-b border-gray-300 pb-2 mb-4 uppercase">Profile</h3>
      <p class="text-lg">${r.profile}</p>
    </section>

    <section class="mb-8">
      <h3 class="text-lg font-bold border-b border-gray-300 pb-2 mb-4 uppercase">Skills</h3>
      <div class="grid grid-cols-3 gap-4">
        ${Object.values(r.skills).map(s => `
          <div class="bg-white p-4 rounded shadow-sm">
            <h4 class="font-bold">${s.title}</h4>
            <p class="text-sm text-gray-600">${s.description}</p>
          </div>
        `).join("")}
      </div>
    </section>

    <section class="mb-8">
      <h3 class="text-lg font-bold border-b border-gray-300 pb-2 mb-4 uppercase">Technical</h3>
      <div class="grid grid-cols-3 gap-4">
        ${r.technical.map(t => `
          <div>
            <h4 class="font-bold text-sm uppercase text-gray-500 mb-2">${t.title}</h4>
            <ul class="text-sm">
              ${t.items.map(i => `<li class="border-b border-gray-100 py-1">${i}</li>`).join("")}
            </ul>
          </div>
        `).join("")}
      </div>
    </section>

    <section class="mb-8">
      <h3 class="text-lg font-bold border-b border-gray-300 pb-2 mb-4 uppercase">Experience</h3>
      ${r.experience.map((job, i) => `
        <div class="mb-6 pb-6 ${i === r.experience.length - 1 ? "" : "border-b border-gray-200"}">
          <div class="flex justify-between items-baseline">
            <h4 class="font-bold text-lg">${job.company}</h4>
            <span class="text-gray-500">${job.dates}</span>
          </div>
          <p class="text-red-800 mb-2">${job.title}</p>
          <ul class="list-disc list-inside text-sm space-y-1">
            ${job.bullets.map(b => `<li>${b}</li>`).join("")}
          </ul>
        </div>
      `).join("")}
    </section>

    <section class="mb-8">
      <h3 class="text-lg font-bold border-b border-gray-300 pb-2 mb-4 uppercase">Education</h3>
      ${r.education.map(e => `<p class="mb-1">${e}</p>`).join("")}
    </section>

    <section class="mb-8">
      <h3 class="text-lg font-bold border-b border-gray-300 pb-2 mb-4 uppercase">More Skills</h3>
      <div class="grid grid-cols-3 gap-4">
        ${r.moreSkills.map(s => `
          <div>
            <h4 class="font-bold text-sm uppercase text-gray-500 mb-2">${s.title}</h4>
            <ul class="text-sm">
              ${s.items.map(i => `<li class="border-b border-gray-100 py-1">${i}</li>`).join("")}
            </ul>
          </div>
        `).join("")}
      </div>
    </section>

    <footer class="border-t border-gray-300 pt-4 text-center text-sm text-gray-500">
      <p>${r.contact.name} — <a href="mailto:${r.contact.email}">${r.contact.email}</a> — ${r.contact.phone}</p>
      <p class="mt-2 italic">This site is running on a Cloudflare Worker.</p>
    </footer>
  </div>
</body>
</html>`;
}

export default {
  async fetch(request: Request): Promise<Response> {
    return new Response(renderResume(), {
      headers: { "Content-Type": "text/html" }
    });
  }
} satisfies ExportedHandler;
