<script setup>
import { useRoute, useRouter } from "vue-router";
import { useI18n } from "vue-i18n";
import { useComponentStore } from "@/stores/useComponent";
import { storeToRefs } from "pinia";

const { locale } = useI18n();
const { isSideBar, i18nFontFamily } = storeToRefs(useComponentStore());
const { setSideBar } = useComponentStore();

const route = useRoute();
const router = useRouter();
const path = ref("");

const goTo = (go) => {
	router.push(go);
	setSideBar();
};

watch(
	() => route.name,
	(newVal) => {
		path.value = newVal;
	}
);
</script>

<template>
	<div :class="['side-bar', { show: isSideBar }]">
		<div class="blur-img">
			<div
				:class="[
					'item',
					'font-art',
					i18nFontFamily,
					{
						pick: path === 'home',
					},
				]"
				@click="goTo('/')"
			>
				{{ $t("header.home") }}
			</div>
			<div
				:class="[
					'item',
					'font-art',
					i18nFontFamily,
					{
						pick: path === 'portfolio',
					},
				]"
				@click="goTo('/portfolio')"
			>
				{{ $t("header.portfolio") }}
			</div>
			<div
				:class="[
					'item',
					'font-art',
					i18nFontFamily,
					{
						pick: path === 'about',
					},
				]"
				@click="goTo('/about')"
			>
				{{ $t("header.about") }}
			</div>
			<div
				:class="[
					'item',
					'font-art',
					i18nFontFamily,
					{
						pick: path === 'contact',
					},
				]"
				@click="goTo('/contact')"
			>
				{{ $t("header.contact") }}
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.side-bar {
	@apply lg:hidden flex fixed h-screen w-full top-0 -left-full z-50 duration-700 ease-in-out;
	.blur-img {
		@apply w-full h-full flex flex-col justify-center items-center backdrop-blur-lg;
		.item {
			@apply text-5xl mb-8 text-emerald-400 font-extralight italic;
		}
		.pick {
			@apply text-white underline;
		}
	}
}
.show {
	@apply left-0;
}
</style>
