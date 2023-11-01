import { Clock } from "three";

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
			for (let i = 0; i < this.scene.children.length; i++) {
				const child = this.scene.children[i];
				if (child.position.z <= -10) this.scene.remove(child);
			}
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
