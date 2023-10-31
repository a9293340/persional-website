<script setup>
import { Portfolio } from "@/three/Portfolio/Portfolio.js";
import { useComponentStore } from "@/stores/useComponent";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";

const { i18nFontFamily } = storeToRefs(useComponentStore());
const router = useRouter();

router.afterEach(async (to, from) => {
	if (to.fullPath === "/portfolio") await initThree();
});

let portfolio = null;

const initThree = async () => {
	if (portfolio) {
		portfolio.stop();
		portfolio = null;
	}
	const container = document.querySelector("#portfolio");
	if (container) {
		portfolio = new Portfolio(container);
		portfolio.start();
	}
};

onMounted(async () => {
	await initThree();
});
</script>

<template>
	<div class="portfolio">
		<div id="portfolio"></div>
	</div>
</template>

<style lang="scss" scoped>
.portfolio,
#portfolio {
	@apply w-full h-full cursor-move;
}
</style>
