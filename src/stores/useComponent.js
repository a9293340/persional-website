import { computed, ref } from "vue";
import i18n from "../i18n";
const { locale } = i18n.global;

export const useComponentStore = defineStore("componentStatus", () => {
	const isSideBar = ref(false);
	const setSideBar = () => (isSideBar.value = !isSideBar.value);

	const i18nFontFamily = computed(() =>
		locale.value === "en-US" ? "en" : "zh"
	);

	return {
		isSideBar,
		setSideBar,
		i18nFontFamily,
	};
});
