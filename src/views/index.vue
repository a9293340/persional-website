<script setup>
import { SelfIntro } from "@/three/SelfIntroduction/SelfIntro.js";
import { useComponentStore } from "@/stores/useComponent";
import { storeToRefs } from "pinia";

let selfIntro = null;

const { i18nFontFamily } = storeToRefs(useComponentStore());
const pick = ref("information");

const initThree = async () => {
	const container = document.querySelector("#self-introduction");
	selfIntro = new SelfIntro(container);

	selfIntro.start();
	await selfIntro.init();
};

const pickInfo = (type) => {
	pick.value = type;
	switch (type) {
		case "information":
			selfIntro.reset();
			break;

		case "interest":
			selfIntro.setLight();
			break;
	}
};

onMounted(async () => {
	await initThree();
});
</script>

<template>
	<div class="self-introduction">
		<div id="self-introduction"></div>
		<div class="introduction">
			<div class="top">
				<div
					:class="[
						'header-words',
						i18nFontFamily,
						{ pick: pick === 'information' },
					]"
					@click="pickInfo('information')"
				>
					{{ $t("home.information") }}
				</div>
				<div
					:class="[
						'header-words',
						i18nFontFamily,
						{ pick: pick === 'interest' },
					]"
					@click="pickInfo('interest')"
				>
					{{ $t("home.interest") }}
				</div>
				<div
					:class="[
						'header-words',
						i18nFontFamily,
						{ pick: pick === 'experience' },
					]"
					@click="pickInfo('experience')"
				>
					{{ $t("home.experience") }}
				</div>
				<div
					:class="[
						'header-words',
						i18nFontFamily,
						{ pick: pick === 'technology' },
					]"
					@click="pickInfo('technology')"
				>
					{{ $t("home.technology") }}
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.self-introduction,
#self-introduction {
	@apply w-full h-full;
}

.self-introduction {
	@apply relative;
	.introduction {
		@apply fixed h-2/3 z-50 m-10 xl:block hidden;
		width: 42%;
		left: 6%;
		top: 25%;
		.top {
			@apply w-full flex flex-row justify-start items-center;
			.header-words {
				@apply text-orange-300 text-2xl mr-12 cursor-pointer duration-150;
			}
			.pick {
				@apply italic text-white scale-125;
			}
		}
	}
}
</style>
