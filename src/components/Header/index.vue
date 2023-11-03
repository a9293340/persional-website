<script setup>
import { useRoute, useRouter } from "vue-router";
import { useI18n } from "vue-i18n";
import { useComponentStore } from "@/stores/useComponent";
import { storeToRefs } from "pinia";

const { locale } = useI18n();
const { setSideBar } = useComponentStore();
const { isSideBar, i18nFontFamily } = storeToRefs(useComponentStore());

const route = useRoute();
const router = useRouter();
const path = ref("");

const goTo = (go) => {
	router.push(go);
};

const openSideBar = () => {
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
	<div class="header">
		<div class="header-xl">
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
			<I18nSetting />
		</div>
		<div class="header-mobile">
			<div class="icon" @click="openSideBar">
				<el-icon :size="40" color="rgb(52,211,153)">
					<i-iconamoon:menu-burger-horizontal-bold v-if="!isSideBar" />
					<i-iconamoon:close-bold v-else />
				</el-icon>
			</div>
			<I18nSetting />
		</div>
	</div>
</template>
<style lang="scss">
.setting-words {
	@apply ml-4;
}
</style>

<style lang="scss" scoped>
.header {
	@apply fixed w-10/12 h-16 left-1/2 lg:top-8 top-4 -translate-x-1/2  lg:z-50 z-100000;
	.header-mobile {
		@apply lg:hidden flex flex-row justify-between w-full h-full items-center;
	}
	.header-xl {
		@apply w-full h-full hidden lg:flex justify-center items-center;
		.item {
			@apply mr-16 text-3xl text-emerald-400 font-extralight italic cursor-pointer hover:scale-125 duration-300 origin-center;
		}
		.pick {
			@apply text-white underline;
		}
	}
}
</style>
