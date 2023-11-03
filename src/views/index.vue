<script setup>
import { Home } from "@/three/Home/Home.js";
import { useComponentStore } from "@/stores/useComponent";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
import { init } from "@/assets/utils/init";

const { i18nFontFamily } = storeToRefs(useComponentStore());
const router = useRouter();
const sTrigger1 = ref(false);
const sTrigger2 = ref(false);
const sTrigger3 = ref(false);

router.afterEach(async (to, from) => {
	if (to.fullPath === "/") await initThree();
});

let home = null;

const initThree = async () => {
	home = await init("#home", home, Home);

	setTimeout(() => {
		sTrigger1.value = true;
	}, 10 * 1000);

	setTimeout(() => {
		sTrigger2.value = true;
	}, 11 * 1000);
	setTimeout(() => {
		sTrigger3.value = true;
	}, 12 * 1000);
};

onMounted(async () => {
	await initThree();
});
</script>

<template>
	<div class="home">
		<div id="home"></div>
		<div
			:class="[
				'slogan',
				i18nFontFamily,
				{
					'slogan-to': sTrigger1 && i18nFontFamily === 'en',
					'slogan-to-zh': sTrigger1 && i18nFontFamily === 'zh',
				},
			]"
		>
			{{ $t("home.slogan1") }}
		</div>
		<div
			:class="[
				'slogan slogan-move',
				i18nFontFamily,
				{
					'slogan-move-to': sTrigger2 && i18nFontFamily === 'en',
					'slogan-move-to-zh': sTrigger2 && i18nFontFamily === 'zh',
				},
			]"
		>
			{{ $t("home.slogan2") }}
		</div>
		<div
			:class="[
				'slogan source',
				i18nFontFamily,
				{
					'source-to': sTrigger3 && i18nFontFamily === 'en',
					'source-to-zh': sTrigger3 && i18nFontFamily === 'zh',
				},
			]"
		>
			{{ $t("home.source") }}
		</div>
		<div
			:class="[
				'slogan-mobile',
				i18nFontFamily,
				{
					'slogan-to-mobile': sTrigger1,
				},
			]"
		>
			{{ $t("home.slogan1") }}
		</div>
		<div
			:class="[
				'slogan-mobile slogan-move-mobile',
				i18nFontFamily,
				{
					'slogan-move-to-mobile': sTrigger2,
				},
			]"
		>
			{{ $t("home.slogan2") }}
		</div>
	</div>
</template>

<style lang="scss" scoped>
.home,
#home {
	@apply w-full h-full;
	.slogan {
		@apply lg:block hidden -left-2/3 top-1/3 text-5xl fixed text-lime-300 duration-1000;
	}
	.slogan-move {
		top: 44%;
	}
	.slogan-to {
		left: 8%;
	}
	.slogan-to-zh {
		left: 15%;
	}

	.slogan-move-to {
		left: 24%;
	}

	.slogan-move-to-zh {
		left: 25%;
	}

	.source {
		top: 56%;
	}

	.source-to {
		left: 14%;
	}

	.source-to-zh {
		left: 20%;
	}

	.slogan-mobile {
		@apply -left-3/4 lg:hidden duration-1000 top-32 fixed text-2xl text-lime-300;
	}

	.slogan-move-mobile {
		@apply top-44;
	}

	.slogan-to-mobile {
		left: 10%;
	}

	.slogan-move-to-mobile {
		left: 25%;
	}
}
</style>
