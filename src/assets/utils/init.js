const init = async (dom, target, ThreeObj) => {
	if (target) {
		target.stop();
		target = null;
	}
	const container = document.querySelector(dom);
	if (!container) return;
	if (container) {
		target = new ThreeObj(container);
		target.start();
		await target.init();
	}

	return target;
};

export { init };
