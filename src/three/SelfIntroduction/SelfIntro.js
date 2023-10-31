import { createCamera } from "./components/camera.js";
import { createScene } from "./components/scene.js";
import { createRenderer } from "./systems/renderer.js";
import { Resizer } from "./systems/Resizer.js";
import { createLights } from "./components/lights";
// import { createGridHelper } from "./systems/helper.js";
import { createMillennium } from "./components/millennium.js";
import { Loop } from "./systems/Loop";
import { createTween } from "./components/tween.js";
// import { createControls } from "./systems/control.js";

class SelfIntro {
	#camera;
	#scene;
	#renderer;
	#loop;
	#tween;
	#millennium;
	#lights;

	constructor(container) {
		this.#camera = createCamera();
		this.#camera.position.set(0, 9, 25);

		this.#scene = createScene();
		this.#renderer = createRenderer();
		this.#lights = createLights();
		this.#tween = createTween(this.#camera, this.#lights.fillLight);
		this.#loop = new Loop(this.#camera, this.#scene, this.#renderer);
		container.append(this.#renderer.domElement);
		this.#loop.updatables.push(this.#camera);

		this.#scene.add(
			this.#lights.dLight,
			this.#lights.fillLight,
			this.#lights.yellowLight
		);
		const resizer = new Resizer(container, this.#camera, this.#renderer);
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
		this.#millennium = await createMillennium();
		this.#loop.updatables.push(this.#millennium);
		this.#scene.add(this.#millennium);
	}

	setLight() {
		this.#scene.add(this.#lights.purpleLight);
	}

	moveCamera() {
		// this.reset();
		this.#camera.moveTo();
	}

	shakeMillennium() {
		this.#millennium.shake();
	}

	reset() {
		this.#scene.remove(this.#lights.purpleLight);
		this.#camera.moveBack();
		this.#millennium.stop();
	}
}

export { SelfIntro };
