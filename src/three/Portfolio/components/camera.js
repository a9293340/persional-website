import { PerspectiveCamera, Vector3 } from "three";

function createCamera(winWidth) {
	const camera = new PerspectiveCamera(
		45,
		window.innerWidth / window.innerHeight,
		0.1,
		1000
	);
	// move the camera back so we can view the scene
	camera.position.z = 120;
	camera.lookAt(new Vector3(0, 0, 0));

	camera.tick = (delta) => {
		if (window.innerWidth < 1200) {
			camera.rotation.y += (Math.PI / 20) * delta;
			camera.rotation.x += (Math.PI / 20) * delta;
		}
	};
	return camera;
}

export { createCamera };
