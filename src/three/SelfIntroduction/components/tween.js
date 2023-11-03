import TWEEN from "three/examples/jsm/libs/tween.module";

const createTween = (camera, fillLight) => {
	const move =
		window.innerWidth >= 1024 ? { x: 4, y: 3, z: 15 } : { x: 0, y: 3, z: 15 };
	const tween = new TWEEN.Tween(camera.position)
		.to(move, 4000)
		.easing(TWEEN.Easing.Quadratic.InOut);
	if (window.innerWidth > 1024) {
		const tween2 = new TWEEN.Tween(camera.rotation)
			.to({ y: Math.PI / 5 }, 2500)
			.easing(TWEEN.Easing.Quadratic.InOut);
		tween.chain(tween2);
	}
	tween.start();

	const lightTween = new TWEEN.Tween(fillLight.position)
		.to({ x: 0, y: 1.2, z: 4 }, 2000)
		.easing(TWEEN.Easing.Quadratic.InOut);

	const lightTween2 = new TWEEN.Tween(fillLight.position)
		.to({ x: 2, y: 1, z: 3 }, 2000)
		.easing(TWEEN.Easing.Quadratic.InOut);
	const lightTween3 = new TWEEN.Tween(fillLight.position)
		.to({ x: 0, y: -2, z: 2 }, 2000)
		.easing(TWEEN.Easing.Quadratic.InOut);
	const lightTween4 = new TWEEN.Tween(fillLight.position)
		.to({ x: -2, y: 1, z: 1.8 }, 2000)
		.easing(TWEEN.Easing.Quadratic.InOut);

	lightTween.chain(lightTween2);
	lightTween2.chain(lightTween3);
	lightTween3.chain(lightTween4);
	lightTween4.chain(lightTween);
	lightTween.start();

	return { tween };
};

const createCameraTween = (camera) => {
	const cameraTween = new TWEEN.Tween(camera.position)
		.to(
			window.innerWidth >= 1024 ? { x: 0, y: 3, z: 8 } : { x: 0, y: 1, z: 8 },
			4500
		)
		.easing(TWEEN.Easing.Quadratic.InOut);

	const cameraBackTween = new TWEEN.Tween(camera.position)
		.to(
			window.innerWidth >= 1024 ? { x: 4, y: 3, z: 15 } : { x: 0, y: 3, z: 15 },
			4500
		)
		.easing(TWEEN.Easing.Quadratic.InOut);
	return { cameraTween, cameraBackTween };
};

export { createTween, createCameraTween };
