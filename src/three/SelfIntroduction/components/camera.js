import { PerspectiveCamera } from "three";
import { createCameraTween } from "./tween";

function createCamera() {
	const camera = new PerspectiveCamera(
		70,
		window.innerWidth / window.innerHeight,
		0.1,
		1000
	);
	// move the camera back so we can view the scene
	camera.position.set(-30, 50, 120);

	camera.tick = () => {};

	camera.moveTo = () => {
		const { cameraTween } = createCameraTween(camera);
		cameraTween.start();
		cameraTween.update();
	};
	camera.moveBack = () => {
		const { cameraBackTween } = createCameraTween(camera);
		cameraBackTween.start();
		cameraBackTween.update();
	};
	return camera;
}

export { createCamera };
