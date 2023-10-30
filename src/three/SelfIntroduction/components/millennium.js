import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { MathUtils } from "three";

const createMillennium = async () => {
	const loader = new GLTFLoader();
	const ratio = window.innerWidth >= 1200 ? 0.03 : 0.02;
	const target = await loader.loadAsync("/models/millennium.glb");
	const model = target.scene.children[0];
	model.scale.set(ratio, ratio, ratio);
	model.rotation.z = -MathUtils.degToRad(30);

	const radiansPerSecond = MathUtils.degToRad(30);
	model.tick = (delta) => {
		model.rotation.z += radiansPerSecond * delta;
	};

	return model;
};

export { createMillennium };
