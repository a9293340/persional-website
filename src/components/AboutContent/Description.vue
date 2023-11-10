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
	mark: {
		type: Boolean,
		default: true,
	},
	small: {
		type: Boolean,
		default: false,
	},
	mb: {
		type: Boolean,
		default: false,
	},
	html: {
		type: Boolean,
		default: false,
	},
});
</script>

<template>
	<div :class="['list', { mb: props.small }]">
		<p :class="[`${i18nFontFamily}-title`, { small: props.small }]">
			{{ props.title }}
		</p>
		<p v-if="props.mark">:</p>
		<p
			:class="[`${i18nFontFamily}-content`, 'content', { small: props.small }]"
			v-if="!props.html"
		>
			{{ props.content }}
		</p>
		<p
			:class="[`${i18nFontFamily}-content`, 'content', { small: props.small }]"
			v-else
			v-html="props.content"
		></p>
	</div>
</template>

<style lang="scss" scoped>
.list {
	@apply flex flex-row items-center mb-4 w-full;
	p {
		@apply lg:mr-3 text-blue-400 text-xl lg:text-3xl;
	}
	p.content {
		@apply text-blue-600;
	}
	p.small {
		@apply text-sm lg:text-xl;
	}
}
.mb {
	@apply mb-2;
}
</style>
