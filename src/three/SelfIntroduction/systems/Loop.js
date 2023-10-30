import { Clock } from "three";
import TWEEN from "three/examples/jsm/libs/tween.module";

const clock = new Clock();

class Loop {
	constructor(camera, scene, renderer) {
		this.camera = camera;
		this.scene = scene;
		this.renderer = renderer;
		this.updatables = [];
	}

	start() {
		this.renderer.setAnimationLoop(() => {
			this.tick();
			TWEEN.update();
			// render a frame
			this.renderer.render(this.scene, this.camera);
		});
	}

	stop() {
		this.renderer.setAnimationLoop(null);
	}

	tick() {
		const delta = clock.getDelta();
		for (const object of this.updatables) {
			object.tick(delta);
		}
	}
}

export { Loop };
