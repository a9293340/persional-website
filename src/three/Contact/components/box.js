import { BoxGeometry, MeshStandardMaterial, Mesh, TextureLoader } from "three";
import { Box, Body, Vec3, Material } from "cannon-es";

const createBox = (width, height, depth, position) => {
	const loader = new TextureLoader();
	const ram = Math.random();
	const map =
		ram < 0.33
			? loader.load("/image/blue-eyes.png")
			: ram > 0.66
			? loader.load("/image/Dark_Magician.webp")
			: loader.load("/image/red-eyes.jpg");
	const boxGeometry = new BoxGeometry(1, 1, 1);
	const boxMaterial = new MeshStandardMaterial({
		metalness: 0.4,
		roughness: 0.4,
		map,
	});
	const mesh = new Mesh(boxGeometry, boxMaterial);
	mesh.scale.set(width, height, depth);
	mesh.castShadow = true;
	mesh.position.copy(position);
	//
	const shape = new Box(new Vec3(width * 0.5, height * 0.5, depth * 0.5));
	const body = new Body({
		mass: 1,
		position: new Vec3(0, 3, 0),
		shape: shape,
		material: new Material("default"),
	});
	body.position.copy(position);

	return { body, mesh };
};

export { createBox };
