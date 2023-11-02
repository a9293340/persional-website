<script setup>
import { Portfolio } from "@/three/Portfolio/Portfolio.js";
import { useComponentStore } from "@/stores/useComponent";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
import { init } from "@/assets/utils/init";

const { i18nFontFamily } = storeToRefs(useComponentStore());
const router = useRouter();

router.afterEach(async (to, from) => {
	if (to.fullPath === "/portfolio") await initThree();
});

let portfolio = null;

const initThree = async () => {
	portfolio = await init("#portfolio", portfolio, Portfolio);
};

onMounted(async () => {
	await initThree();
});
</script>

<template>
	<div class="portfolio">
		<carousel-portfolio />
		<div id="portfolio"></div>
	</div>
</template>

<style lang="scss" scoped>
.portfolio,
#portfolio {
	@apply w-full h-full;
}
#portfolio {
	@apply cursor-move;
}
.portfolio {
	@apply relative;
}
</style>
