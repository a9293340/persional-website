import { Scene, FogExp2, Color } from "three";

function createScene() {
	const scene = new Scene();

	scene.background = new Color(0x1a1a1a);
	scene.fog = new FogExp2(0x000000, 0.005);

	return scene;
}

export { createScene };
