<template>
	<div class="open" @click="move(props.idx)">
		<el-icon v-if="!props.screenOpenTrigger" :size="40" color="black">
			<i-fluent:open-12-filled />
		</el-icon>
		<el-icon v-else :size="40" color="black">
			<i-zondicons:close-solid />
		</el-icon>
	</div>
</template>

<script setup>
const emit = defineEmits(["move"]);
const props = defineProps({
	screenOpenTrigger: {
		type: Boolean,
		default: false,
	},
	idx: {
		type: Number,
		default: 0,
	},
});

const move = (i) => {
	emit("move", i, !props.screenOpenTrigger);
};
</script>

<style lang="scss" scoped>
.open {
	@apply absolute left-4 top-4 text-3xl cursor-pointer;
}
</style>
