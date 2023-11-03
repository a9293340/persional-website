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
const cardList = ref(["a", "b", "c", "d", "e"]);

const initThree = async () => {
	portfolio = await init("#portfolio", portfolio, Portfolio);
};

onMounted(async () => {
	await initThree();
});
</script>

<template>
	<div class="portfolio">
		<carousel-portfolio
			:lens="cardList.length"
			:transXStart="-550"
			:rwdCheck="1024"
		>
			<template v-for="(item, i) in cardList" :key="i" v-slot:[`content${i}`]>
				<div class="slot-test">
					<p class="text-4xl text-white">test{{ item }}</p>
				</div>
			</template>
		</carousel-portfolio>
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
.slot-test {
	@apply w-full h-full flex justify-center items-center;
}
</style>
