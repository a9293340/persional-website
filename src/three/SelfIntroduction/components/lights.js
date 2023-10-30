import { DirectionalLight, PointLight } from "three";

function createLights() {
	const dLight = new DirectionalLight(0xffffff, 0.8);
	dLight.position.set(-100, 0, -100);

	const fillLight = new PointLight(0x88ffee, 50, 4, 3);
	fillLight.position.set(-2, 1, 1.8);
	// fillLight.position.set(2, 1, 3);
	const yellowLight = new PointLight(0xffd700, 100, 4, 2);
	yellowLight.position.set(1, -1.5, 3);

	const purpleLight = new PointLight(0xf1438e, 150, 4, 0);
	purpleLight.position.set(0.8, 0, 4);

	return { dLight, fillLight, yellowLight, purpleLight };
}

export { createLights };
