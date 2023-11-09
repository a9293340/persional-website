<script setup>
import { Portfolio } from '@/three/Portfolio/Portfolio.js';
import { useRouter } from 'vue-router';
import { init } from '@/assets/utils/init';

const router = useRouter();

router.afterEach(async (to, from) => {
  if (to.fullPath === '/portfolio') await initThree();
});

let portfolio = null;
const cardList = ref([
  {
    imageList: [
      '/image/portfolio/card-time/backend-first.PNG',
      '/image/portfolio/card-time/backend-ArticleList.PNG',
      '/image/portfolio/card-time/database.PNG',
      '/image/portfolio/card-time/frontend-first.PNG',
      '/image/portfolio/card-time/frontend-ArticleList.PNG',
    ],
    link: [
      {
        title: 'YGO_Reptile_pro',
        link: 'https://github.com/a9293340/YGO_Reptile_pro',
      },
      {
        title: 'Yu-Gi-Oh-api-document',
        link: 'https://github.com/alex1234567639/Yu-Gi-Oh-api-document',
      },
      {
        title: 'Yu-Gi-Oh-admin',
        link: 'https://github.com/alex1234567639/Yu-Gi-Oh-admin',
      },
      {
        title: 'ygo_express',
        link: 'https://github.com/a9293340/ygo_express',
      },
      {
        title: 'ygo_frontend',
        link: 'https://github.com/a9293340/ygo_frontend',
      },
    ],
    tech: [
      {
        content: 'Frontend - Client :',
        type: 'title',
      },
      {
        content: '* Vite / Vue3',
        type: 'content',
      },
      {
        content: '* Typescript',
        type: 'content',
      },
      {
        content: '* Tailwind css',
        type: 'content',
      },
      {
        content: 'Frontend - Back Stage :',
        type: 'title',
      },
      {
        content: '* Vue2',
        type: 'content',
      },
      {
        content: '* Element Plus',
        type: 'content',
      },
      {
        content: 'Backend : ',
        type: 'title',
      },
      {
        content: '* Node.js Express',
        type: 'content',
      },
      {
        content: '* MongoDB',
        type: 'content',
      },
    ],
  },
  {
    imageList: [
      '/image/portfolio/house-view-log/login.PNG',
      '/image/portfolio/house-view-log/main1.PNG',
      '/image/portfolio/house-view-log/main2.PNG',
    ],
    link: [
      {
        title: 'house_view_log github',
        link: 'https://github.com/a9293340/house-view-log',
      },
      {
        title: 'house_view_log Web ',
        link: 'https://house-view-log.vercel.app/',
      },
    ],
    tech: [
      {
        content: '* Nuxt3 / Vue3',
        type: 'content',
      },
      {
        content: '* Nitro',
        type: 'content',
      },
      {
        content: '* Tailwind css',
        type: 'content',
      },
      {
        content: '* Google Map Api',
        type: 'content',
      },
      {
        content: '* MongoDB',
        type: 'content',
      },
      {
        content: '* TinyMCE(Rich Text)',
        type: 'content',
      },
    ],
  },
  {
    imageList: [
      '/image/portfolio/personal-web/home.PNG',
      '/image/portfolio/personal-web/portfolio.PNG',
      '/image/portfolio/personal-web/about.PNG',
    ],
    link: [
      {
        title: 'house_view_log github',
        link: 'https://github.com/a9293340/persional-website',
      },
      {
        title: 'house_view_log Web ',
        link: 'https://persional-website.vercel.app/',
      },
    ],
    tech: [
      {
        content: '* Vite / Vue3',
        type: 'content',
      },
      {
        content: '* Three.js & cannon',
        type: 'content',
      },
      {
        content: '* Tailwind css',
        type: 'content',
      },
    ],
  },
  {
    imageList: [
      '/image/portfolio/power-tool/first.PNG',
      '/image/portfolio/power-tool/pick.PNG',
      '/image/portfolio/power-tool/main.PNG',
      '/image/portfolio/power-tool/icode.PNG',
    ],
    link: [
      {
        title: 'Power tool (Download Path) ',
        link: 'https://www.cino.com.tw/assets/software/PowerTool/FUZZYSCAN POWERTOOL3.0-v1.0.7.zip',
      },
    ],
    tech: [
      {
        content: '* Vue3',
        type: 'content',
      },
      {
        content: '* Electron.js',
        type: 'content',
      },
      {
        content: '* Serialport.js',
        type: 'content',
      },
    ],
  },
  {
    imageList: [],
    link: [
      {
        title: 'Unable to provide.',
        link: '',
      },
    ],
    tech: [
      {
        content: '* Vite/Vue3',
        type: 'content',
      },
      {
        content: '* Tailwind css',
        type: 'content',
      },
      {
        content: '* Node.js Express',
        type: 'content',
      },
      {
        content: '* MongoDB',
        type: 'content',
      },
      {
        content: '* MySQL',
        type: 'content',
      },
      {
        content: '* Ngnix',
        type: 'content',
      },
    ],
  },
]);

const initThree = async () => {
  portfolio = await init('#portfolio', portfolio, Portfolio);
};

onMounted(async () => {
  await initThree();
});
</script>

<template>
  <div class="portfolio">
    <carousel-portfolio :lens="cardList.length" :transXStart="-550" :rwdCheck="1024">
      <template v-for="(item, i) in cardList" :key="i" v-slot:[`content${i}`]>
        <PortfolioContent
          :title="`${$t(`portfolio.title${i + 1}`)}`"
          :images="item.imageList"
          :summary="`${$t(`portfolio.summary${i + 1}`)}`"
          :feature="`${$t(`portfolio.feature${i + 1}`)}`"
          :link="item.link"
          :tech="item.tech"
        />
      </template>
      <template> 123 </template>
    </carousel-portfolio>
    <div id="portfolio"></div>
  </div>
</template>

<style lang="scss" scoped>
.portfolio,
#portfolio {
  @apply w-full h-full;
}
#portfolio {
  @apply cursor-move;
}
.portfolio {
  @apply relative;
}
.slot-test {
  @apply w-full h-full flex justify-center items-center;
}
</style>
