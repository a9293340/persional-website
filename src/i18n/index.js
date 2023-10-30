import { createI18n } from "vue-i18n";
import * as zh from "./zh-TW.json";
import * as en from "./en-US.json";

const i18n = createI18n({
	legacy: false,
	globalInjection: true,
	locale: "en-US",
	messages: {
		"zh-TW": zh,
		"en-US": en,
	},
	fallbackLocale: "en-US",
});

export default i18n;
