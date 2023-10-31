import { createCamera } from './components/camera.js';
import { createScene, createCubeTexture } from './components/scene.js';
import { createRenderer } from './systems/renderer.js';
import { Resizer } from './systems/Resizer.js';
import { Loop } from './systems/Loop';
import { createCard } from './components/card.js';
import { createLights } from './components/lights.js';
import { createTween } from './components/tween.js';
import { createEyeGroup } from './components/eyeGroup.js';

class Home {
  #camera;
  #scene;
  #renderer;
  #loop;
  #card;
  #texture;
  #eg;

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

  async change(type) {
    this.#scene.remove(this.#eg);
    this.#eg = null;
    this.#eg = await createEyeGroup(type);
    this.#loop.updatables.push(this.#eg);
    this.#scene.add(this.#eg);
  }

  async init() {
    this.#eg = await createEyeGroup(0);
    this.#card = createCard(this.#texture);
    this.#loop.updatables.push(this.#card, this.#eg);
    this.#scene.add(this.#card, this.#eg);
    createTween(this.#card);
  }
}

export { Home };
