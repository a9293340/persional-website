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
		contact.create();
	}, 500);
};

onMounted(async () => {
	await initThree();
});
</script>

<template>
	<div class="contact"><div id="contact"></div></div>
</template>

<style lang="scss" scoped>
.contact,
#contact {
	@apply w-full h-full;
}
</style>
