<script setup>
import { onMounted, ref } from 'vue';

const idx = ref(5);
const cssRule = ref({
  index1: `rotateY(0)`,
  index2: `rotateY(60deg)`,
  index3: `rotateY(120deg)`,
  index4: `rotateY(180deg)`,
  index5: `rotateY(240deg)`,
  index6: `rotateY(300deg)`,
});
const xlOpenTrigger = ref(false);

const mobile_move = type => {
  const dom = document.querySelector('.card-box');
  const cards = document.querySelectorAll('.card');
  let jud = Math.abs(idx.value % 6) + 1;
  if (jud < 1) jud = 6;
  for (let i = 0; i < cards.length; i++) {
    cards[jud - 1].style.transform = cssRule.value[`index${jud}`] + 'translateZ(1200px)';
    jud += type;
    if (jud > 6) jud = 1;
    if (jud < 1) jud = 6;
  }
  dom.style.transform = `translateZ(-1200px) rotateY(-${60 * (idx.value + type)}deg) `;
  type >= 0 ? idx.value++ : idx.value--;
};

const move = (i, trigger) => {
  xlOpenTrigger.value = trigger;
  const cards = document.querySelectorAll('.card');

  for (let x = 0; x < cards.length; x++) {
    const card = cards[x];
    if (i === x) {
      if (xlOpenTrigger.value) {
        card.classList.remove(`card-${x + 1}`);
        card.classList.add('card-move');
      } else {
        card.classList.add(`card-${x + 1}`);
        card.classList.remove('card-move');
      }
      break;
    }
  }
};

onMounted(() => {
  if (window.innerWidth <= 1200) mobile_move(1);
});
</script>
<template>
  <div class="carousel-portfolio">
    <div class="left-arrow" @click="mobile_move(-1)">
      <el-icon :size="50" color="black">
        <i-icon-park:left />
      </el-icon>
    </div>
    <div class="card-box">
      <div class="card card-1">
        <Open v-model:xlOpenTrigger="xlOpenTrigger" :idx="0" @move="move" />
        <p class="text-4xl text-white">test1</p>
      </div>
      <div class="card card-2">
        <Open v-model:xlOpenTrigger="xlOpenTrigger" :idx="1" @move="move" />
        <p class="text-4xl text-white">test2</p>
      </div>
      <div class="card card-3">
        <Open v-model:xlOpenTrigger="xlOpenTrigger" :idx="2" @move="move" />
        <p class="text-4xl text-white">test3</p>
      </div>
      <div class="card card-4">
        <Open v-model:xlOpenTrigger="xlOpenTrigger" :idx="3" @move="move" />
        <p class="text-4xl text-white">test4</p>
      </div>
      <div class="card card-5">
        <Open v-model:xlOpenTrigger="xlOpenTrigger" :idx="4" @move="move" />
        <p class="text-4xl text-white">test5</p>
      </div>
      <div class="card card-6">
        <Open v-model:xlOpenTrigger="xlOpenTrigger" :idx="5" @move="move" />
        <p class="text-4xl text-white">test6</p>
      </div>
    </div>
    <div class="right-arrow" @click="mobile_move(1)">
      <el-icon :size="50" color="black">
        <i-icon-park:right />
      </el-icon>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.carousel-portfolio {
  @apply w-11/12 h-3/4 fixed left-1/2 -translate-x-1/2 mt-28 flex justify-center;
  perspective: 1000px;
  .left-arrow {
    @apply absolute xl:hidden top-1/2 -left-3 z-80000;
  }
  .right-arrow {
    @apply absolute xl:hidden top-1/2 -right-3 z-80000;
  }
  .card-box {
    @apply absolute w-full xl:w-full h-full duration-500;
    transform-style: preserve-3d;
    transform: rotateY(0) translateZ(-700px) translateX(25%);
    .card {
      @apply p-8 bg-slate-200 bg-opacity-80 xl:bg-opacity-40 backdrop-blur-sm duration-700 absolute left-0 right-0 top-0 bottom-0 w-full h-full flex justify-center items-center;
    }
    .card-1 {
      transform: rotateY(20deg) translateZ(-400px) translateX(-600px) translateY(80px);
    }
    .card-2 {
      transform: rotateY(20deg) translateZ(-400px) translateX(-300px) translateY(40px);
    }
    .card-3 {
      transform: rotateY(20deg) translateZ(-400px);
    }
    .card-4 {
      transform: rotateY(20deg) translateZ(-400px) translateX(300px) translateY(-40px);
    }
    .card-5 {
      transform: rotateY(20deg) translateZ(-400px) translateX(650px) translateY(-80px);
    }
    .card-6 {
      transform: rotateY(20deg) translateZ(-400px) translateX(1000px) translateY(-120px);
    }
    .card-move {
      @apply bg-opacity-80;
      transform: rotateY(0deg) translateZ(700px) translateX(-25%) translateY(0px);
    }
  }
}

@media (max-width: 1200px) {
  .card-box {
    transform: rotateY(0) translateZ(-1200px) translateX(0px);
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
