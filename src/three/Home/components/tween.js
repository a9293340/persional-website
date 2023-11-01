import TWEEN from "three/examples/jsm/libs/tween.module";

const createTween = (card) => {
	const tween = new TWEEN.Tween(card.position)
		.to({ x: 0, y: 2, z: 35 }, 8000)
		.easing(TWEEN.Easing.Quadratic.InOut);

	const tween2 = new TWEEN.Tween(card.scale)
		.to({ x: 3.5, y: 3.5, z: 3.5 }, 8000)
		.easing(TWEEN.Easing.Quadratic.InOut);

	const tween3 = new TWEEN.Tween(card.rotation)
		.to({ x: 0, y: Math.PI * 8, z: Math.PI / 16 }, 8000)
		.easing(TWEEN.Easing.Quadratic.InOut);

	if (window.innerWidth >= 1200) {
		const tween4 = new TWEEN.Tween(card.position)
			.to({ x: 30, y: 2, z: 35 }, 2000)
			.easing(TWEEN.Easing.Quadratic.InOut);

		tween.chain(tween4);
	}

	tween.start();
	tween2.start();
	tween3.start();
	return { tween, tween2 };
};

export { createTween };
