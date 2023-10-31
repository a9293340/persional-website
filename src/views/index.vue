<script setup>
import { Home } from '@/three/Home/Home.js';
import { useComponentStore } from '@/stores/useComponent';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';

const { i18nFontFamily } = storeToRefs(useComponentStore());
const router = useRouter();
const clickTrigger = ref(false);
let typeChange = 0;

router.afterEach(async (to, from) => {
  if (to.fullPath === '/') await initThree();
});

let home = null;

const changeHome = () => {
  if (home) home.change(typeChange === 0 ? 1 : 0);
};

const initThree = async () => {
  if (home) {
    home.stop();
    home = null;
  }
  const container = document.querySelector('#home');
  if (container) {
    home = new Home(container);
    home.start();
    await home.init();
  }
};

onMounted(async () => {
  await initThree();
  setTimeout(() => {
    clickTrigger.value = true;
  }, 10000);
});
</script>

<template>
  <div class="home">
    <div id="home"></div>
    <div class="icon" v-if="clickTrigger" @click="changeHome">
      <el-icon :size="40" color="rgb(255,255,255)">
        <i-game-icons:click />
      </el-icon>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home,
#home {
  @apply w-full h-full;
}
.home {
  @apply relative;
  .icon {
    @apply fixed xl:right-1/4 right-1/2 top-1/4 cursor-pointer z-50;
  }
}
</style>
