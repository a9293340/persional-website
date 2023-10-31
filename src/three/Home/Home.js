import { createCamera } from "./components/camera.js";
import { createScene, createCubeTexture } from "./components/scene.js";
import { createRenderer } from "./systems/renderer.js";
import { Resizer } from "./systems/Resizer.js";
import { createControls } from "./systems/control";
import { Loop } from "./systems/Loop";
import { createCard } from "./components/card.js";
import { createLights } from "./components/lights.js";
import { createTween } from "./components/tween.js";

class Home {
	#camera;
	#scene;
	#renderer;
	#loop;
	#controls;
	#card;
	#texture;

	constructor(container) {
		this.#camera = createCamera();
		this.#texture = createCubeTexture();
		this.#scene = createScene(this.#texture);
		this.#renderer = createRenderer();
		const { directionalLight, ambientLight } = createLights();
		if (window.innerWidth >= 1200) {
			this.#controls = createControls(this.#camera, this.#renderer.domElement);
		}
		this.#loop = new Loop(this.#camera, this.#scene, this.#renderer);

		container.append(this.#renderer.domElement);
		this.#loop.updatables.push(this.#camera);

		const resizer = new Resizer(container, this.#camera, this.#renderer);
		this.#scene.add(directionalLight, ambientLight);
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

	async init() {
		this.#card = createCard(this.#texture);
		this.#loop.updatables.push(this.#card);
		this.#scene.add(this.#card);
		createTween(this.#card);
	}
}

export { Home };
