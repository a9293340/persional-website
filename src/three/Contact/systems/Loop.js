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
		let boxCount = 0;
		this.renderer.setAnimationLoop(() => {
			this.tick();
			boxCount = 0;
			for (let i = this.scene.children.length - 1; i >= 0; i--) {
				const child = this.scene.children[i];
				if (child.position.z <= -10) this.scene.remove(child);
				if (child.name === "box") {
					boxCount++;
					if (boxCount > 90) this.scene.remove(child);
				}
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
