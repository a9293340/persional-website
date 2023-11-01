import { Mesh, PlaneGeometry, MeshStandardMaterial } from "three";

const createFloor = () => {
	const floor = new Mesh(
		new PlaneGeometry(20, 20),
		new MeshStandardMaterial({
			color: 0x50668a,
			metalness: 0.3,
			roughness: 0.2,
		})
	);
	floor.receiveShadow = true;
	floor.rotation.x = -Math.PI * 0.5;
	floor.rotation.z = -Math.PI * 0.25;
	return floor;
};

export { createFloor };
