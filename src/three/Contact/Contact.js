import { createCamera } from "./components/camera.js";
import { createScene } from "./components/scene.js";
import { createRenderer } from "./systems/renderer.js";
import { Resizer } from "./systems/Resizer.js";
import { Loop } from "./systems/Loop";
import { createLights } from "./components/lights.js";
import { createFloor } from "./components/floor.js";
import { createPhysicalWorld } from "./physical/world.js";
import { createBall } from "./components/ball.js";
import { createBox } from "./components/box.js";

class Contact {
	#camera;
	#scene;
	#renderer;
	#loop;
	#floor;
	#world;

	constructor(container) {
		this.#camera = createCamera();
		this.#scene = createScene();
		this.#renderer = createRenderer();
		this.#floor = createFloor();
		this.#world = createPhysicalWorld();
		const { ambientLight, directionalLight } = createLights();
		this.#loop = new Loop(this.#camera, this.#scene, this.#renderer);
		this.#loop.updatables.push(this.#world);
		container.append(this.#renderer.domElement);
		const resizer = new Resizer(container, this.#camera, this.#renderer);
		this.#scene.add(ambientLight, directionalLight, this.#floor);
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

	create(type) {
		let obj = type
			? createBall(Math.random() * 0.8, {
					x: (Math.random() - 0.5) * 3,
					y: 3,
					z: (Math.random() - 0.5) * 3,
			  })
			: createBox(Math.random(), Math.random(), Math.random(), {
					x: (Math.random() - 0.5) * 3,
					y: 3,
					z: (Math.random() - 0.5) * 3,
			  });
		obj.mesh.name = type ? "ball" : "box";
		obj.tick = () => {
			obj.mesh.position.copy(obj.body.position);
			obj.mesh.quaternion.copy(obj.body.quaternion);
		};

		this.#scene.add(obj.mesh);
		this.#world.addBody(obj.body);
		this.#loop.updatables.push(obj);
	}

	init() {}
}

export { Contact };
