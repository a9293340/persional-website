<script setup>
import { onMounted, ref } from 'vue';
const props = defineProps({
  lens: {
    type: Number,
    default: 6,
  },
  transXStart: {
    type: Number,
    default: -600,
  },
  transYStart: {
    type: Number,
    default: 80,
  },
  rwdCheck: {
    type: Number,
    default: 1024,
  },
});
const idx = ref(props.lens - 1);
const win_css = ref({});
const screenOpenTrigger = ref(false);

const init_mobile_css = () => {
  const cards = document.querySelectorAll('.card');
  for (let i = 0; i < cards.length; i++) {
    cards[i].style.transform = `rotateY(${(i * 360) / (idx.value + 1)}deg) translateZ(1200px)`;
    console.log(`rotateY(${(i * 360) / (idx.value + 1)}deg) translateZ(1200px)`);
  }
};

const mobile_move = type => {
  const dom = document.querySelector('.card-box');
  dom.style.transform = `translateZ(-1200px) rotateY(-${
    (360 / props.lens) * (idx.value + type)
  }deg) `;
  type >= 0 ? idx.value++ : idx.value--;
  // const index = idx.value % props.lens;
  // const cards = document.querySelectorAll('.card');
  // for (let i = 0; i < cards.length; i++) {
  //   if (i === index) cards[i].classList.add('card-bgc');
  //   else cards[i].classList.remove('card-bgc');
  // }
};

const init_win_css = () => {
  const cards = document.querySelectorAll('.card');
  for (let i = 0; i < cards.length; i++) {
    cards[i].style.transform = `rotateY(20deg) translateZ(-400px) translateX(${
      props.transXStart + i * 250
    }px) translateY(${props.transYStart - i * 40}px)`;
    win_css.value[`index${i}`] = cards[i].style.transform;
  }
};

const move = (i, trigger) => {
  screenOpenTrigger.value = trigger;
  const cards = document.querySelectorAll('.card');

  for (let x = 0; x < cards.length; x++) {
    const card = cards[x];
    if (i === x) {
      if (screenOpenTrigger.value) {
        card.style.transform = '';
        card.classList.add('card-move');
        card.classList.add('card-bgc');
      } else {
        card.style.transform = win_css.value[`index${x}`];
        card.classList.remove('card-move');
        card.classList.remove('card-bgc');
      }
      break;
    }
  }
};

onMounted(() => {
  if (window.innerWidth <= props.rwdCheck) {
    init_mobile_css();
    mobile_move(1);
  } else {
    init_win_css();
    setTimeout(() => {
      move(0, true);
    }, 500);
  }
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
      <div class="card" v-for="(item, i) in props.lens" :key="i">
        <Open v-model:screenOpenTrigger="screenOpenTrigger" :idx="i" @move="move" />
        <slot :name="`content${i}`">
          <div class="flex flex-col">
            <p>* Please add your component to the corresponding carousel page.</p>
            <p>* Use template , and add v-slot:content${index}.</p>
          </div>
        </slot>
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
    @apply absolute lg:hidden top-1/2 -left-3 z-80000;
  }
  .right-arrow {
    @apply absolute lg:hidden top-1/2 -right-3 z-80000;
  }
  .card-box {
    @apply absolute w-full lg:w-full h-full duration-500;
    transform-style: preserve-3d;
    transform: rotateY(0) translateZ(-700px) translateX(25%);
    .card {
      @apply lg:p-8 lg:pb-2 bg-slate-200 bg-opacity-80 lg:bg-opacity-40 backdrop-blur-sm duration-700 absolute left-0 right-0 top-0 bottom-0 w-full h-full flex justify-center items-center;
    }
    .card-move {
      @apply bg-opacity-80;
      transform: rotateY(0deg) translateZ(700px) translateX(-25%) translateY(0px);
    }
    .card-bgc {
      @apply bg-slate-400;
    }
  }
}

@media (max-width: 1024px) {
  .card-box {
    transform: rotateY(0) translateZ(-1200px) translateX(0px);
  }
}
</style>
