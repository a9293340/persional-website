import { Scene, CubeTextureLoader, Fog } from "three";

function createScene(bg) {
	const scene = new Scene();

	scene.background = bg;
	scene.fog = new Fog(0x1a1a1a, 1, 1000);

	return scene;
}

function createCubeTexture() {
	const loader = new CubeTextureLoader();
	loader.setPath("/textures/Brigde/");
	const textureCube = loader.load([
		"posx.jpg",
		"negx.jpg",
		"posy.jpg",
		"negy.jpg",
		"posz.jpg",
		"negz.jpg",
	]);

	return textureCube;
}

export { createScene, createCubeTexture };
