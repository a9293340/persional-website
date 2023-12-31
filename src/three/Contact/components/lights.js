import { DirectionalLight, AmbientLight } from "three";

function createLights() {
	const ambientLight = new AmbientLight(0xffffff, 1.3);
	const directionalLight = new DirectionalLight(0xffffff, 0.4);
	directionalLight.castShadow = true;
	directionalLight.shadow.mapSize.set(1024, 1024);
	directionalLight.shadow.camera.far = 15;
	directionalLight.shadow.camera.left = -7;
	directionalLight.shadow.camera.top = 7;
	directionalLight.shadow.camera.right = 7;
	directionalLight.shadow.camera.bottom = -7;
	directionalLight.position.set(5, 5, 5);

	return { ambientLight, directionalLight };
}

export { createLights };
