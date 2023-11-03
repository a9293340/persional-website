import { createCamera } from "./components/camera.js";
import { createScene } from "./components/scene.js";
import { createRenderer } from "./systems/renderer.js";
import { Resizer } from "./systems/Resizer.js";
import { createControls } from "./systems/control";
import { Loop } from "./systems/Loop";
import { createLights } from "./components/lights.js";
import { createBubbles } from "./components/bubbles.js";

class Portfolio {
	#camera;
	#scene;
	#renderer;
	#loop;
	#controls;
	#sprite;

	constructor(container) {
		this.#camera = createCamera();
		// this.#camera.position.set(0, 9, 25);
		this.#scene = createScene();
		this.#renderer = createRenderer();
		this.#sprite = createBubbles(40, true, 1, true, 0xffffff).bubbles;
		const { light1, light2, light3, light4 } = createLights();
		if (window.innerWidth >= 1024) {
			this.#controls = createControls(this.#camera, this.#renderer.domElement);
		}
		this.#loop = new Loop(this.#camera, this.#scene, this.#renderer);

		container.append(this.#renderer.domElement);
		this.#loop.updatables.push(this.#camera, this.#sprite);

		const resizer = new Resizer(container, this.#camera, this.#renderer);
		this.#scene.add(this.#sprite, light1, light2, light3, light4);
	}

	render() {
		this.#renderer.render(this.#scene, this.#camera);
	}

	start() {
		this.#loop.start();
	}

	stop() {
		this.#loop.stop();
	}

	init() {}
}

export { Portfolio };
