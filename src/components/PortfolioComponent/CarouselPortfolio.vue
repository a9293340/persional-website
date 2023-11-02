<script setup>
import { onMounted } from "vue";

const idx = ref(6);
const cssRule = ref({
	index1: `rotateY(0)`,
	index2: `rotateY(60deg)`,
	index3: `rotateY(120deg)`,
	index4: `rotateY(180deg)`,
	index5: `rotateY(240deg)`,
	index6: `rotateY(300deg)`,
});

const cssPlus = ref([
	"",
	"translateX(200px)",
	"translateX(200px)",
	"",
	"translateX(-200px)",
	"translateX(-200px)",
]);

const changeRight = (type) => {
	const dom = document.querySelector(".card-box");
	const cards = document.querySelectorAll(".card");
	let jud = (idx.value % 6) + 1;
	const tranZ = window.innerWidth < 1200 ? -1200 : -700;
	for (let i = 0; i < cards.length; i++) {
		cards[jud - 1].style.transform =
			cssRule.value[`index${jud}`] + " " + cssPlus.value[i];
		if (window.innerWidth >= 1200) {
			cards[jud - 1].style.transform +=
				(idx.value % 6) + 1 ? `translateZ(750px)` : `translateZ(700px)`;
		} else {
			cards[jud - 1].style.transform += "translateZ(1200px)";
		}
		jud++;
		if (jud > 6) jud = 1;
		if (jud < 1) jud = 6;
	}
	dom.style.transform = `translateZ(${tranZ}px) rotateY(-${
		60 * idx.value
	}deg) `;
	idx.value++;
};

onMounted(() => {
	changeRight(-1);
});
</script>
<template>
	<div class="carousel-portfolio">
		<div class="card-box" @click="changeRight(1)">
			<div class="card">
				<p class="text-4xl text-white">test1</p>
			</div>
			<div class="card">
				<p class="text-4xl text-white">test2</p>
			</div>
			<div class="card">
				<p class="text-4xl text-white">test3</p>
			</div>
			<div class="card">
				<p class="text-4xl text-white">test4</p>
			</div>
			<div class="card">
				<p class="text-4xl text-white">test5</p>
			</div>
			<div class="card">
				<p class="text-4xl text-white">test6</p>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.carousel-portfolio {
	@apply w-11/12 h-3/4 fixed left-1/2 -translate-x-1/2 mt-28 flex justify-center;
	perspective: 1000px;
	.card-box {
		@apply absolute w-full xl:w-full h-full duration-500;
		transform-style: preserve-3d;
		transform: rotateY(0) translateZ(-700px);
		.card {
			@apply bg-slate-500 absolute left-0 right-0 top-0 bottom-0 w-full h-full flex justify-center items-center;
		}
		.card:nth-child(1) {
			transform: rotateY(0) translateZ(750px);
		}
		.card:nth-child(2) {
			transform: rotateY(60deg) translateZ(700px) translateX(200px);
		}
		.card:nth-child(3) {
			transform: rotateY(120deg) translateZ(700px) translateX(200px);
		}
		.card:nth-child(4) {
			transform: rotateY(180deg) translateZ(700px);
		}
		.card:nth-child(5) {
			transform: rotateY(240deg) translateZ(700px) translateX(-200px);
		}
		.card:nth-child(6) {
			transform: rotateY(300deg) translateZ(700px) translateX(-200px);
		}
	}
}

@media (max-width: 1200px) {
	.card-box {
		transform: rotateY(0) translateZ(-1200px);
		.card:nth-child(1) {
			transform: rotateY(0) translateZ(1200px);
		}
		.card:nth-child(2) {
			transform: rotateY(60deg) translateZ(1200px);
		}
		.card:nth-child(3) {
			transform: rotateY(120deg) translateZ(1200px);
		}
		.card:nth-child(4) {
			transform: rotateY(180deg) translateZ(1200px);
		}
		.card:nth-child(5) {
			transform: rotateY(240deg) translateZ(1200px);
		}
		.card:nth-child(6) {
			transform: rotateY(300deg) translateZ(1200px);
		}
	}
}
</style>
