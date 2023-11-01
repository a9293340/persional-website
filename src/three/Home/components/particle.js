import {
	BufferGeometry,
	PointsMaterial,
	TextureLoader,
	Color,
	Float32BufferAttribute,
	Points,
} from "three";
const rand = (min, max) => min + Math.random() * (max - min);

const createParticle = (trigger) => {
	const loader = new TextureLoader();
	const map = loader.load("/image/particle.png");
	const geom = new BufferGeometry(10, 10, 10);
	const material = new PointsMaterial({
		color: 0xffffff,
		size: 10,
		alphaTest: 0.8,
		map,
	});

	let veticsFloat32Array = [];
	let veticsColors = [];
	for (let p = 0; p < 2000; p++) {
		veticsFloat32Array.push(
			rand(20, 150) * Math.cos(p),
			rand(20, 150) * Math.sin(p),
			rand(-1500, 0)
		);
		const randomColor = new Color(Math.random() * 0xffffff);
		veticsColors.push(randomColor.r, randomColor.g, randomColor.b);
	}

	const vertices = new Float32BufferAttribute(veticsFloat32Array, 3);
	const colors = new Float32BufferAttribute(veticsColors, 3);
	geom.attributes.position = vertices;
	geom.attributes.color = colors;
	const particleSystem = new Points(geom, material);

	particleSystem.tick = (delta) => {
		if (trigger)
			particleSystem.rotation.z -= (Math.PI / 5) * delta * Math.random();
		else particleSystem.rotation.z += (Math.PI / 5) * delta * Math.random();
	};

	return particleSystem;
};

export { createParticle };
