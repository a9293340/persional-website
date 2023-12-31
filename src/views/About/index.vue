<script setup>
import { SelfIntro } from "@/three/SelfIntroduction/SelfIntro.js";
import { useComponentStore } from "@/stores/useComponent";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
import { init } from "@/assets/utils/init";

let selfIntro = null;
const page = ref(0);

const { i18nFontFamily } = storeToRefs(useComponentStore());
const router = useRouter();

router.afterEach(async (to, from) => {
	if (to.fullPath === "/about") await initThree();
});

const pick = ref("information");

const initThree = async () => {
	selfIntro = await init("#self-introduction", selfIntro, SelfIntro);
};

const pickInfo = (type) => {
	pick.value = type;
	switch (type) {
		case "information":
			selfIntro.reset();
			page.value = 0;
			break;
		case "interest":
			selfIntro.setLight();
			page.value = 1;
			break;
		case "experience":
			selfIntro.moveCamera();
			page.value = 2;
			break;
		case "technology":
			selfIntro.shakeMillennium();
			page.value = 3;
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
					{{ $t("about.information") }}
				</div>
				<div
					:class="[
						'header-words',
						i18nFontFamily,
						{ pick: pick === 'interest' },
					]"
					@click="pickInfo('interest')"
				>
					{{ $t("about.interest") }}
				</div>
				<div
					:class="[
						'header-words',
						i18nFontFamily,
						{ pick: pick === 'experience' },
					]"
					@click="pickInfo('experience')"
				>
					{{ $t("about.experience") }}
				</div>
				<div
					:class="[
						'header-words',
						i18nFontFamily,
						{ pick: pick === 'technology' },
					]"
					@click="pickInfo('technology')"
				>
					{{ $t("about.technology") }}
				</div>
			</div>
			<div class="content">
				<img src="/image/me/5813250-B20231106.jpg" alt="" />
				<AboutContent v-model:page="page" />
			</div>
		</div>
		<div class="introduction-mobile">
			<div class="list">
				<div
					:class="[
						'header-words',
						i18nFontFamily,
						{ pick: pick === 'information' },
					]"
					@click="pickInfo('information')"
				>
					{{ $t("about.information") }}
				</div>
				<div
					:class="[
						'header-words',
						i18nFontFamily,
						{ pick: pick === 'interest' },
					]"
					@click="pickInfo('interest')"
				>
					{{ $t("about.interest") }}
				</div>
				<div
					:class="[
						'header-words',
						i18nFontFamily,
						{ pick: pick === 'experience' },
					]"
					@click="pickInfo('experience')"
				>
					{{ $t("about.experience") }}
				</div>
				<div
					:class="[
						'header-words',
						i18nFontFamily,
						{ pick: pick === 'technology' },
					]"
					@click="pickInfo('technology')"
				>
					{{ $t("about.technology") }}
				</div>
			</div>
			<div class="content">
				<img src="/image/me/5813250-B20231106.jpg" alt="" />
				<AboutContent v-model:page="page" />
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
	.introduction-mobile {
		@apply lg:hidden flex flex-row-reverse w-full h-3/4 pl-0 bg-slate-200 bg-opacity-20 backdrop-blur-sm left-1/2 -translate-x-1/2 top-32 z-50 fixed;
		.list {
			@apply flex flex-col fixed left-4 top-2;
			.header-words {
				@apply text-orange-300 mb-2 cursor-pointer duration-150;
				&:nth-child(1) {
					@apply text-4xl;
				}
				&:nth-child(2) {
					@apply text-3xl;
					// font-size: 2rem;
				}
				&:nth-child(3) {
					@apply text-2xl;
					font-size: 1.75rem;
				}
				&:nth-child(4) {
					@apply text-xl;
					font-size: 1.5rem;
				}
			}
			.pick {
				@apply italic text-white;
			}
		}
		.content {
			@apply w-11/12 h-3/5 mt-10;
			img {
				@apply lg:w-60 w-40 mb-6 ml-28 lg:ml-20;
			}
		}
	}
	.introduction {
		@apply fixed h-2/3 z-50 m-10 lg:flex flex-row hidden;
		width: 54%;
		left: 6%;
		top: 25%;
		.top {
			@apply h-full flex flex-col justify-start items-start;
			.header-words {
				@apply text-orange-300 text-3xl mb-10 cursor-pointer duration-150;
			}
			.pick {
				@apply italic text-white scale-125;
			}
		}
		.content {
			@apply w-11/12 h-full p-8 pl-12;
			img {
				@apply lg:w-40 w-40 mb-8 ml-24 lg:ml-20;
			}
		}
	}
}
</style>
