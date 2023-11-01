import {
	SphereGeometry,
	MeshStandardMaterial,
	Mesh,
	TextureLoader,
} from "three";
import { Sphere, Body, Vec3, Material } from "cannon-es";

const createBall = (radius, position) => {
	const loader = new TextureLoader();
	const ram = Math.random();
	const map =
		ram < 0.33
			? loader.load("/image/Aroma.png")
			: ram > 0.66
			? loader.load("/image/Apollousa.webp")
			: loader.load("/image/buy-in.webp");
	const sphereGeometry = new SphereGeometry(1, 24, 24);
	const sphereMaterial = new MeshStandardMaterial({
		metalness: 0.4,
		roughness: 0.4,
		map,
	});
	const mesh = new Mesh(sphereGeometry, sphereMaterial);
	mesh.castShadow = true;
	mesh.scale.set(radius, radius, radius);
	mesh.position.copy(position);
	//
	const shape = new Sphere(radius);
	const body = new Body({
		mass: 1,
		position: new Vec3(0, 3, 0),
		shape: shape,
		material: new Material("default"),
	});
	body.position.copy(position);

	return { body, mesh };
};

export { createBall };
