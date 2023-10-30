<script setup></script>

<template>
	<div class="personal-website">
		<Header />
		<router-view></router-view>
		<SideBar />
	</div>
</template>

<style>
html,
body {
	@apply h-screen w-screen m-0 p-0;
}
#app {
	@apply h-full w-full;
}
@font-face {
	font-family: abduction;
	src: url(/fonts/abduction.ttf) format("truetype");
}
@font-face {
	font-family: cubic;
	src: url(/fonts/Cubic_11_1.010_R.ttf);
}

.zh {
	font-family: cubic;
}
.en {
	font-family: abduction;
}
</style>

<style lang="scss" scoped>
#app {
	.personal-website {
		@apply w-full h-full relative;
	}
}
</style>
