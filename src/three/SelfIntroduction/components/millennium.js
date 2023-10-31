import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import {
	MathUtils,
	AnimationClip,
	VectorKeyframeTrack,
	AnimationMixer,
} from "three";

const positionKF = new VectorKeyframeTrack(
	".position",
	[0, 0.67, 0.85, 1],
	[...[0, 0, 0], ...[-1, 0.3, -0.5], ...[1, -0.3, 0.5], ...[0, 0, 0]]
);

const createMillennium = async () => {
	const loader = new GLTFLoader();
	const ratio = window.innerWidth >= 1200 ? 0.03 : 0.02;
	const target = await loader.loadAsync("/models/millennium.glb");
	const model = target.scene.children[0];
	model.scale.set(ratio, ratio, ratio);
	model.rotation.z = -MathUtils.degToRad(30);

	const radiansPerSecond = MathUtils.degToRad(30);

	const moveBlinkClip = new AnimationClip("move-n-blink", -1, [positionKF]);
	const mixer = new AnimationMixer(model);
	const action = mixer.clipAction(moveBlinkClip);

	model.tick = (delta) => {
		model.rotation.z += radiansPerSecond * delta;
		mixer.update(delta);
	};

	model.shake = () => {
		action.play();
	};

	model.stop = () => {
		action.stop();
	};

	return model;
};

export { createMillennium };
