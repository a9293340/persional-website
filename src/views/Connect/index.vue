<script setup>
import { Contact } from "@/three/Contact/Contact.js";
import { useComponentStore } from "@/stores/useComponent";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
import { init } from "@/assets/utils/init";

let contact = null;
let timeItv = null;

const { i18nFontFamily } = storeToRefs(useComponentStore());
const router = useRouter();

router.afterEach(async (to, from) => {
	if (to.fullPath === "/contact") await initThree();
});

const initThree = async () => {
	if (contact) {
		clearInterval(timeItv);
	}

	contact = await init("#contact", contact, Contact);

	timeItv = setInterval(() => {
		const ram = Math.random() >= 0.5 ? 1 : 0;
		contact.create(ram);
	}, 500);
};

onMounted(async () => {
	await initThree();
});
</script>

<template>
	<div class="contact">
		<div id="contact"></div>
		<div class="main">
			<div class="box">
				<div class="list">
					<el-icon :size="32" color="rgb(52,211,153)">
						<i-mdi:cellphone />
					</el-icon>
					<span>{{ $t("connect.phone") }}</span>
					<span>(+886)921-442-663</span>
				</div>
				<div class="list">
					<el-icon :size="32" color="rgb(52,211,153)">
						<i-ic:round-email />
					</el-icon>
					<span>{{ $t("connect.email") }}</span>
					<span>f102041332@gmail.com</span>
				</div>
				<div class="list">
					<el-icon :size="32" color="rgb(52,211,153)">
						<i-entypo:address />
					</el-icon>
					<span>{{ $t("connect.address") }}</span>
					<span>{{ $t("connect.addressC") }}</span>
				</div>
				<div class="list">
					<el-icon :size="32" color="rgb(52,211,153)">
						<i-mingcute:line-app-fill />
					</el-icon>
					<span>Line :</span>
					<span>a9293340</span>
				</div>
				<div class="list">
					<a href="https://www.linkedin.com/in/eric-hong-cv/" target="_blank">
						<el-icon :size="60" color="#0072E3">
							<i-mingcute:linkedin-fill />
						</el-icon>
					</a>
					<a
						href="https://github.com/a9293340?tab=repositories"
						target="_blank"
					>
						<el-icon :size="60" color="#0072E3">
							<i-mdi:github />
						</el-icon>
					</a>
					<a href="https://a9293340.github.io/CV_templete/" target="_blank">
						<el-icon :size="60" color="#0072E3">
							<i-tabler:file-cv />
						</el-icon>
					</a>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.contact,
#contact {
	@apply w-full h-full;
}
.contact {
	@apply relative;
	.main {
		@apply absolute lg:left-10 lg:bottom-40 lg:z-50 lg:w-1/3  w-10/12 h-auto pt-3 left-1/2 -translate-x-1/2 lg:translate-x-0 bottom-20 bg-white bg-opacity-0 backdrop-blur-lg rounded-2xl p-0 lg:p-5 flex flex-col justify-center items-center;
		.list {
			@apply w-auto h-auto flex flex-row justify-start items-center mb-4;
			.el-icon {
				@apply mr-3;
			}
			span {
				@apply text-neutral-800 font-bold text-lg lg:text-2xl;
			}
		}
	}
}
</style>
