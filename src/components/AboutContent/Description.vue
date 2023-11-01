<script setup>
import { useComponentStore } from "@/stores/useComponent";
import { storeToRefs } from "pinia";

const { i18nFontFamily } = storeToRefs(useComponentStore());

const props = defineProps({
	title: {
		type: String,
		default: "",
	},
	content: {
		type: String,
		default: "",
	},
});
</script>

<template>
	<div class="list">
		<p :class="[`${i18nFontFamily}-title`]">{{ props.title }}</p>
		<p>:</p>
		<p :class="[`${i18nFontFamily}-content`, 'content']">{{ props.content }}</p>
	</div>
</template>

<style lang="scss" scoped>
.list {
	@apply flex flex-row items-center mb-4 w-full;
	p {
		@apply mr-3 text-blue-400;
	}
	p.content {
		@apply text-blue-600;
	}
}
</style>
