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
			<Description :title="$t('about.name')" :mark="false" />
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
			<Description
				:title="$t('about.work')"
				:content="$t('about.workContent')"
			/>
		</div>
		<div class="main-content">
			<Description :title="$t('about.hob1')" :mark="false" />
			<Description :title="$t('about.hob2')" :mark="false" />
			<Description :title="$t('about.hob3')" :mark="false" />
			<Description :title="$t('about.hob4')" :mark="false" />
			<Description :title="$t('about.hob5')" :mark="false" />
		</div>
		<div class="main-content">
			<Description :title="$t('about.exp7')" :mark="false" :small="true" />
			<Description :title="$t('about.exp6')" :mark="false" :small="true" />
			<Description :title="$t('about.exp5')" :mark="false" :small="true" />
			<Description :title="$t('about.exp4')" :mark="false" :small="true" />
			<Description :title="$t('about.exp3')" :mark="false" :small="true" />
			<Description :title="$t('about.exp2')" :mark="false" :small="true" />
			<Description :title="$t('about.exp1')" :mark="false" :small="true" />
		</div>
		<div class="main-content">
			<div class="inline-box">
				<Description :title="$t('about.techTitle1')" />
				<Description
					:content="$t('about.main1')"
					:mark="false"
					:small="true"
					:mb="true"
				/>
				<Description
					:content="$t('about.main2')"
					:mark="false"
					:small="true"
					:mb="true"
				/>
				<Description
					:content="$t('about.main3')"
					:mark="false"
					:small="true"
					:mb="true"
				/>
				<Description
					:content="$t('about.main4')"
					:mark="false"
					:small="true"
					:mb="true"
				/>
				<Description
					:content="$t('about.main5')"
					:mark="false"
					:small="true"
					:mb="true"
				/>
				<Description
					:content="$t('about.main6')"
					:mark="false"
					:small="true"
					:mb="true"
				/>
				<Description
					:content="$t('about.main7')"
					:mark="false"
					:small="true"
					:mb="true"
				/>
			</div>
			<div class="inline-box">
				<Description :title="$t('about.techTitle2')" />
				<Description
					:content="$t('about.improve1')"
					:mark="false"
					:small="true"
					:mb="true"
				/>
				<Description
					:content="$t('about.improve2')"
					:mark="false"
					:small="true"
					:mb="true"
				/>
				<Description
					:content="$t('about.improve3')"
					:mark="false"
					:small="true"
					:mb="true"
				/>
				<Description
					:content="$t('about.improve4')"
					:mark="false"
					:small="true"
					:mb="true"
				/>
				<Description
					:content="$t('about.improve5')"
					:mark="false"
					:small="true"
					:mb="true"
				/>
				<Description
					:content="$t('about.improve6')"
					:mark="false"
					:small="true"
					:mb="true"
				/>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.about-content {
	@apply w-full h-2/3 whitespace-nowrap overflow-hidden;
	.main-content {
		@apply inline-block align-top w-full h-full duration-500 overflow-auto scrollbar-thin scrollbar-track-rounded-xl scrollbar-thumb-rounded-xl scrollbar-thumb-blue-700 scrollbar-track-slate-200;
	}
	.inline-box {
		@apply inline-block align-top mr-4 lg:mr-12;
	}
	.page-1 {
		margin-left: -100%;
	}
	.page-2 {
		margin-left: -200%;
	}
	.page-3 {
		margin-left: -302%;
	}
}
</style>
