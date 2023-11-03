<script setup></script>

<template>
	<div class="footer">{{ $t("copyright.desc") }}</div>
</template>

<style lang="scss" scoped>
.footer {
	@apply fixed left-1/2 bottom-4 lg:bottom-11 -translate-x-1/2 text-sm lg:text-xl whitespace-nowrap text-white z-50;
}
</style>
