<script setup>
import { Home } from "@/three/Home/Home.js";
import { useComponentStore } from "@/stores/useComponent";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";

const { i18nFontFamily } = storeToRefs(useComponentStore());
const router = useRouter();

router.afterEach(async (to, from) => {
	if (to.fullPath === "/portfolio") await initThree();
});

let home = null;

const initThree = async () => {
	if (home) {
		home.stop();
		home = null;
	}
	const container = document.querySelector("#home");
	if (container) {
		home = new Home(container);
		home.start();
		setTimeout(() => {
			home.init();
		}, 1000);
	}
};

onMounted(async () => {
	await initThree();
});
</script>

<template>
	<div class="home">
		<div id="home"></div>
	</div>
</template>

<style lang="scss" scoped>
.home,
#home {
	@apply w-full h-full cursor-move;
}
</style>
