<script setup>
const props = defineProps({
	page: {
		type: Number,
		default: 0,
	},
});
</script>

<template>
	<div class="about-content">
		<div
			:class="[
				'main-content',
				{
					'page-1': page === 1,
					'page-2': page === 2,
					'page-3': page === 3,
				},
			]"
		>
			<Description :title="$t('about.sex')" :content="$t('about.setContent')" />
			<Description
				:title="$t('about.birthday')"
				:content="$t('about.birthdayContent')"
			/>
			<Description
				:title="$t('about.abode')"
				:content="$t('about.abodeContent')"
			/>
			<Description
				:title="$t('about.military')"
				:content="$t('about.militaryContent')"
			/>
		</div>
		<div class="main-content">2</div>
		<div class="main-content">3</div>
		<div class="main-content">4</div>
	</div>
</template>

<style lang="scss" scoped>
.about-content {
	@apply w-full h-full whitespace-nowrap overflow-hidden;
	.main-content {
		@apply w-full h-full inline-block  duration-700 text-xl xl:text-3xl xl:pl-6;
	}
	.page-1 {
		margin-left: -100%;
	}
	.page-2 {
		margin-left: -200%;
	}
	.page-3 {
		margin-left: -300%;
	}
}
</style>
