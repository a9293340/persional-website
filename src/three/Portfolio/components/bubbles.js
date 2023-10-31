import {
	CanvasTexture,
	BufferGeometry,
	PointsMaterial,
	Vector3,
	Float32BufferAttribute,
	Points,
} from "three";

const createCanvasTexture = () => {
	const canvas = document.createElement("canvas");
	const ctx = canvas.getContext("2d");
	canvas.width = 300;
	canvas.height = 300;
	ctx.lineWidth = 10;
	ctx.beginPath();
	ctx.moveTo(170, 120);
	var grd = ctx.createLinearGradient(0, 0, 170, 0);
	grd.addColorStop("0", "black");
	grd.addColorStop("0.3", "magenta");
	grd.addColorStop("0.5", "blue");
	grd.addColorStop("0.6", "green");
	grd.addColorStop("0.8", "yellow");
	grd.addColorStop(1, "red");
	ctx.strokeStyle = grd;
	ctx.arc(120, 120, 50, 0, Math.PI * 2);
	ctx.stroke();
	const texture = new CanvasTexture(canvas);
	texture.needsUpdate = true;
	return texture;
};

const createBubbles = (size, transparent, opacity, sizeAttenuation, color) => {
	const geom = new BufferGeometry();
	const material = new PointsMaterial({
		size,
		transparent,
		opacity,
		map: createCanvasTexture(),
		sizeAttenuation,
		color,
		depthTest: true,
		depthWrite: false,
	});
	let veticsFloat32Array = [];
	const range = 500;
	for (let i = 0; i < 1000; i++) {
		const particle = new Vector3(
			Math.random() * range - range / 2,
			Math.random() * range - range / 2,
			Math.random() * range - range / 2
		);
		veticsFloat32Array.push(particle.x, particle.y, particle.z);
	}
	const vertices = new Float32BufferAttribute(veticsFloat32Array, 3);
	geom.attributes.position = vertices;
	const bubbles = new Points(geom, material);
	bubbles.tick = (delta) => {
		bubbles.rotation.x -= (Math.PI / 40) * delta;
		bubbles.rotation.y -= (Math.PI / 40) * delta;
	};
	return { bubbles };
};

export { createBubbles };
