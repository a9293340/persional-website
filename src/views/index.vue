<script setup>
import { Home } from "@/three/Home/Home.js";
import { useComponentStore } from "@/stores/useComponent";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
import { init } from "@/assets/utils/init";

const { i18nFontFamily } = storeToRefs(useComponentStore());
const router = useRouter();

router.afterEach(async (to, from) => {
	if (to.fullPath === "/") await initThree();
});

let home = null;

const initThree = async () => {
	home = await init("#home", home, Home);
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
	@apply w-full h-full;
}
</style>
