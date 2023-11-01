import { PerspectiveCamera } from "three";

function createCamera() {
	const camera = new PerspectiveCamera(
		75,
		window.innerWidth / window.innerHeight,
		0.1,
		100
	);
	// move the camera back so we can view the scene
	camera.position.set(-1, 3, 4);
	camera.rotation.x = -Math.PI / 6;

	camera.tick = () => {
		// camera.position.z -= 0.05;
		// if (camera.position.z < 10) camera.position.z = 40;
	};
	return camera;
}

export { createCamera };
