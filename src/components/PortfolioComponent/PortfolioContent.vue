<script setup>
import { useComponentStore } from "@/stores/useComponent";
import { storeToRefs } from "pinia";

const { i18nFontFamily } = storeToRefs(useComponentStore());
const mobileTrigger = ref(false);
const props = defineProps({
	title: {
		type: String,
		default: "",
	},
	images: {
		type: Array,
		default: () => [],
	},
	summary: {
		type: String,
		default: "",
	},
	feature: {
		type: String,
		default: "",
	},
	link: {
		type: Array,
		default: () => [],
	},
	tech: {
		type: Array,
		default: () => [],
	},
});

const linkTo = () => {
	mobileTrigger.value = !mobileTrigger.value;
};
</script>

<template>
	<!-- <div class="mobile-image" v-if="mobileTrigger && props.images.length">
    <div class="carousel-rotation">
      <div class="icon">
        <el-icon :size="20" color="blue" @click="linkTo">
          <i-zondicons:close-solid />
        </el-icon>
      </div>
      <el-carousel width="100%" height="auto" :interval="5000">
        <el-carousel-item v-for="item in props.images" :key="item" style="height: auto">
          <img :src="item" alt="" />
        </el-carousel-item>
      </el-carousel>
    </div>
  </div> -->
	<div class="portfolio-content-mobile">
		<div :class="['title', i18nFontFamily, `title-${i18nFontFamily}`]">
			{{ props.title }}
		</div>
		<div class="h-2/5 mb-2" v-if="props.images.length">
			<el-carousel width="100%" height="auto" :interval="5000">
				<el-carousel-item
					v-for="item in props.images"
					:key="item"
					style="height: auto"
				>
					<img :src="item" alt="" />
				</el-carousel-item>
			</el-carousel>
		</div>
		<div :class="['content-zone']">
			<div class="content">
				<div :class="['slogan', i18nFontFamily]">
					{{ $t("portfolio.slogan4") }}
				</div>
				<div v-for="item in props.tech" :key="item">
					<div
						:class="['slogan-content', `${i18nFontFamily}-title`, 'ml-0']"
						v-if="item.type === 'title'"
					>
						{{ item.content }}
					</div>
					<div
						:class="['slogan-content', `${i18nFontFamily}-content`]"
						v-if="item.type === 'content'"
					>
						{{ item.content }}
					</div>
				</div>
			</div>
			<div class="content">
				<div :class="['slogan', i18nFontFamily]">
					{{ $t("portfolio.slogan3") }}
				</div>
				<div
					:class="['slogan-content', `${i18nFontFamily}-content`]"
					v-for="item in props.link"
					:key="item"
				>
					<a
						:href="item.link"
						class="cursor-pointer hover:text-blue-800 duration-150"
						target="_blank"
					>
						<p class="w-60">* {{ item.title }} (Click me)</p>
					</a>
				</div>
			</div>
			<div class="content">
				<div :class="['slogan', i18nFontFamily]">
					{{ $t("portfolio.slogan1") }}
				</div>
				<div :class="['slogan-content', `${i18nFontFamily}-content`]">
					{{ props.summary }}
				</div>
			</div>
			<div class="content">
				<div :class="['slogan', i18nFontFamily]">
					{{ $t("portfolio.slogan2") }}
				</div>
				<div :class="['slogan-content', `${i18nFontFamily}-content`]">
					{{ props.feature }}
				</div>
			</div>
		</div>
	</div>
	<div class="portfolio-content">
		<div class="title-content">
			<div :class="['title', i18nFontFamily, `title-${i18nFontFamily}`]">
				{{ props.title }}
			</div>
			<div class="content">
				<div :class="['slogan', i18nFontFamily]">
					{{ $t("portfolio.slogan4") }}
				</div>
				<div v-for="item in props.tech" :key="item">
					<div
						:class="['slogan-content', `${i18nFontFamily}-title`]"
						v-if="item.type === 'title'"
					>
						{{ item.content }}
					</div>
					<div
						:class="['slogan-content', `${i18nFontFamily}-content`]"
						v-if="item.type === 'content'"
					>
						{{ item.content }}
					</div>
				</div>
			</div>
			<div class="content">
				<div :class="['slogan', i18nFontFamily]">
					{{ $t("portfolio.slogan3") }}
				</div>
				<div
					:class="['slogan-content', `${i18nFontFamily}-content`]"
					v-for="item in props.link"
					:key="item"
				>
					<a
						:href="item.link"
						class="cursor-pointer hover:text-blue-800 duration-150"
						target="_blank"
					>
						<p class="w-full">* {{ item.title }} (Click me)</p>
					</a>
				</div>
			</div>
		</div>
		<div class="portfolio-detail-box">
			<div class="h-3/5 w-full" v-if="props.images.length">
				<el-carousel :interval="5000">
					<el-carousel-item v-for="item in props.images" :key="item">
						<img :src="item" alt="" />
					</el-carousel-item>
				</el-carousel>
			</div>
			<div class="detail-zone">
				<div class="content">
					<div :class="['slogan', i18nFontFamily]">
						{{ $t("portfolio.slogan1") }}
					</div>
					<div :class="['slogan-content', `${i18nFontFamily}-content`]">
						{{ props.summary }}
					</div>
				</div>
				<div class="content">
					<div :class="['slogan', i18nFontFamily]">
						{{ $t("portfolio.slogan2") }}
					</div>
					<div :class="['slogan-content', `${i18nFontFamily}-content`]">
						{{ props.feature }}
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss">
.el-carousel__container {
	/*height: 456px;*/
	height: 500px !important;
}
</style>

<style lang="scss" scoped>
.mobile-image {
	@apply w-full h-full absolute bg-white z-50;
	.icon {
		@apply absolute -left-1 -top-5 cursor-pointer z-80000;
	}
	.carousel-rotation {
		@apply w-full h-full;
		transform: rotate(90deg) translateY(63%) scale(1.7);
	}
}
.portfolio-content {
	@apply w-full h-full lg:flex lg:flex-row hidden;
	.title-content {
		@apply w-5/12 h-1/2 lg:h-full lg:pt-16 overflow-auto scrollbar-thin scrollbar-track-rounded-xl scrollbar-thumb-rounded-xl scrollbar-thumb-blue-700 scrollbar-track-slate-200;
		.title {
			@apply lg:text-4xl text-gray-800 mb-14;
		}
		.content {
			@apply flex flex-col w-11/12 mb-5 ml-6;
			.slogan {
				@apply lg:text-3xl text-sky-900 mb-8;
			}
			.slogan-content {
				@apply text-lg mb-3 w-full flex flex-row;
			}
		}
		.title-zh {
			@apply lg:text-5xl;
		}
	}
	.portfolio-detail-box {
		@apply w-7/12 h-1/2  lg:h-full pl-3;
		.detail-zone {
			@apply w-full h-2/5 flex flex-row justify-between mt-16 overflow-auto scrollbar-thin scrollbar-track-rounded-xl scrollbar-thumb-rounded-xl scrollbar-thumb-blue-700 scrollbar-track-slate-200;
			.content {
				@apply flex flex-col w-[calc(50%-15px)];
				.slogan {
					@apply lg:text-3xl text-sky-900 mb-4;
				}
				.slogan-content {
					@apply text-lg mb-3 w-full flex flex-row;
				}
			}
		}
	}
}
.portfolio-content-mobile {
	@apply w-full h-full flex lg:hidden flex-col overflow-y-scroll overflow-x-hidden;
	-webkit-overflow-scrolling: touch;
	.title {
		@apply text-lg text-gray-800 mb-4 flex flex-row justify-center;
	}
	.title-zh {
		@apply lg:text-3xl;
	}
	.content-zone {
		@apply w-full h-auto;
		.content {
			@apply flex flex-col w-full mb-4;
			min-height: 30px;
			.slogan {
				@apply text-sm text-sky-900 mb-4;
			}
			.slogan-content {
				@apply text-xs mb-3 w-full flex flex-row;
			}
		}
	}
	.h-short {
		@apply h-[calc(80%)];
	}
}
</style>
