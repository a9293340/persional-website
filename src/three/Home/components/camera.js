import { PerspectiveCamera, Vector3 } from "three";

function createCamera() {
	const camera = new PerspectiveCamera(
		45,
		window.innerWidth / window.innerHeight,
		0.1,
		1000
	);
	// move the camera back so we can view the scene
	camera.position.z = 120;
	camera.lookAt(new Vector3(0, 0, 0));

	camera.tick = () => {
		// camera.position.z -= 0.05;
		// if (camera.position.z < 10) camera.position.z = 40;
	};
	return camera;
}

export { createCamera };
