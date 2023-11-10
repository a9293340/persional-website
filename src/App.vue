<script setup></script>

<template>
	<div class="personal-website">
		<Header />
		<router-view></router-view>
		<SideBar />
		<Footer />
	</div>
</template>

<style>
* {
	padding: 0;
	margin: 0;
	box-sizing: border-box;
}
html,
body {
	height: 100%;
	overflow: hidden;
}
body {
	position: relative;
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

@font-face {
	font-family: ayumi-m;
	src: url(/fonts/Ayumi-Medium-Italic.ttf);
}

@font-face {
	font-family: ayumi;
	src: url(/fonts/Ayumi-Bold-Italic.ttf);
}

@font-face {
	font-family: ch-t;
	src: url(/fonts/NotoSansTC-ExtraBold.ttf);
}

@font-face {
	font-family: ch-c;
	src: url(/fonts/NotoSansTC-Medium.ttf);
}

.zh {
	font-family: cubic;
}
.zh-title {
	font-family: ch-t;
	@apply ml-4;
}
.zh-content {
	font-family: ch-c;
}

.en {
	font-family: abduction;
}
.en-title {
	font-family: ayumi;
}
.en-content {
	font-family: ayumi-m;
}
</style>

<style lang="scss" scoped>
#app {
	.personal-website {
		@apply w-full h-full relative;
	}
}
</style>
