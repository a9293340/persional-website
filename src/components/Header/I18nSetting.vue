<script setup>
import { useI18n } from "vue-i18n";
const { locale } = useI18n();
</script>

<template>
	<div class="item setting">
		<el-dropdown
			trigger="click"
			:show-timeout="0"
			@command="
				(lang) => {
					locale = lang;
				}
			"
		>
			<div class="-xl-dropdown-font-style">
				<el-icon :size="40" color="rgb(52,211,153)">
					<i-mdi-language />
				</el-icon>
			</div>
			<template #dropdown>
				<el-dropdown-menu>
					<el-dropdown-item command="en-US" :disabled="locale === 'en-US'">
						<el-icon :size="36">
							<i-cif-us />
						</el-icon>
						<div class="setting-words">English</div>
					</el-dropdown-item>
					<el-dropdown-item command="zh-TW" :disabled="locale === 'zh-TW'">
						<el-icon :size="36">
							<i-cif-tw />
						</el-icon>
						<div class="setting-words">中文</div>
					</el-dropdown-item>
				</el-dropdown-menu>
			</template>
		</el-dropdown>
	</div>
</template>

<style lang="scss" scoped>
.setting {
	@apply mt-2 xl:mt-4;
}
.item {
	@apply mb-2 text-3xl text-emerald-400 font-extralight italic cursor-pointer hover:scale-125 duration-300 origin-center;
}
</style>
