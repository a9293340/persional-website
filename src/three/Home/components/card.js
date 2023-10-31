import {
	MathUtils,
	TextureLoader,
	Mesh,
	MeshStandardMaterial,
	BoxGeometry,
	Color,
} from "three";

const createCard = (envMap) => {
	const textureLoader = new TextureLoader();
	const texture = textureLoader.load("/image/Dark_Magician_Girl_29.webp");
	const textureBack = textureLoader.load(
		"/image/71874e05c6cce6d6effe02a1627829e3.png"
	);

	const createMaterial = (texture) =>
		new MeshStandardMaterial({
			map: texture,
			envMap,
			envMapIntensity: 0.9,
			// color: 0xf2f2f2,
			roughness: 0.1,
			metalness: 0.8,
		});

	const geometry = new BoxGeometry(0.1, 11, 7.5);
	const m1 = createMaterial(texture);
	const m2 = createMaterial(textureBack);

	const model = new Mesh(geometry, [
		m1,
		m2,
		new MeshStandardMaterial({ color: new Color(0, 0, 0) }),
		new MeshStandardMaterial({ color: new Color(0, 0, 0) }),
		new MeshStandardMaterial({ color: new Color(0, 0, 0) }),
		new MeshStandardMaterial({ color: new Color(0, 0, 0) }),
	]);
	model.position.set(0, 0, -15);
	model.scale.set(1, 1, 1);

	const radiansPerSecond = MathUtils.degToRad(30);
	model.tick = () => {
		model.rotation.y += radiansPerSecond * 0.02;
	};

	return model;
};

export { createCard };
