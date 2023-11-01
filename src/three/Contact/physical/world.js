import {
	World,
	SAPBroadphase,
	Material,
	ContactMaterial,
	Plane,
	Body,
	Vec3,
} from "cannon-es";

const createPhysicalWorld = () => {
	const world = new World();
	world.broadphase = new SAPBroadphase(world);
	world.allowSleep = true;
	world.gravity.set(0, -9.82, 0);

	// 默认材质
	const defaultMaterial = new Material("default");
	const defaultContactMaterial = new ContactMaterial(
		defaultMaterial,
		defaultMaterial,
		{
			friction: 0.1,
			restitution: 0.7,
		}
	);
	world.defaultContactMaterial = defaultContactMaterial;

	const floorShape = new Plane();
	const floorBody = new Body();
	floorBody.mass = 0;
	floorBody.addShape(floorShape);
	floorBody.quaternion.setFromAxisAngle(new Vec3(-1, 0, 0), Math.PI * 0.5);
	world.addBody(floorBody);
	world.tick = (delta) => world.step(1 / 60, delta, 3);
	return world;
};

export { createPhysicalWorld };
