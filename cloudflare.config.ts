import { defineConfig, triggers } from "cf/config";

export default defineConfig({
	accountId: "2342c30bd94a1fd213123e21aec3167d",
	worker: {
		name: "resume",
		compatibilityDate: "2024-01-01",
		compatibilityFlags: [
			"nodejs_compat",
		],
		entrypoint: "src/index.ts",
		triggers: [
			triggers.fetch({
				pattern: "resume.pbdz.xyz",
				zone: "pbdz.xyz",
			}),
			triggers.fetch({
				pattern: "resume.pobudz.net",
				zone: "pobudz.net",
			}),
		],
	},
});
