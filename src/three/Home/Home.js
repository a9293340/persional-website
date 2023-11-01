import { createCamera } from "./components/camera.js";
import { createScene, createCubeTexture } from "./components/scene.js";
import { createRenderer } from "./systems/renderer.js";
import { Resizer } from "./systems/Resizer.js";
import { Loop } from "./systems/Loop";
import { createCard } from "./components/card.js";
import { createLights } from "./components/lights.js";
import { createTween } from "./components/tween.js";
import { createParticle } from "./components/particle.js";

class Home {
	#camera;
	#scene;
	#renderer;
	#loop;
	#card;
	#texture;

	constructor(container) {
		this.#camera = createCamera();
		this.#texture = createCubeTexture();
		this.#scene = createScene();
		this.#renderer = createRenderer();
		const { directionalLight, ambientLight } = createLights();
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
		const p1 = createParticle(1);
		const p2 = createParticle(0);
		const p3 = createParticle(1);
		const p4 = createParticle(0);
		const p5 = createParticle(1);
		const p6 = createParticle(0);
		this.#card = createCard(this.#texture);
		this.#loop.updatables.push(this.#card, p1, p2, p3, p4, p5, p6);
		this.#scene.add(this.#card, p1, p2, p3, p4, p5, p6);
		createTween(this.#card);
	}
}

export { Home };
