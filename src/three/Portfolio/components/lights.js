import { AmbientLight, PointLight } from "three";

function createLights() {
	const light1 = new PointLight(0xffffff, 0.5);
	light1.position.x = -50;
	light1.position.y = -50;
	light1.position.z = 75;
	const light2 = new PointLight(0xffffff, 0.5);
	light2.position.x = 50;
	light2.position.y = 50;
	light2.position.z = 75;
	const light3 = new PointLight(0xffffff, 0.3);
	light3.position.x = 25;
	light3.position.y = 50;
	light3.position.z = 200;
	const light4 = new AmbientLight(0xffffff, 0.1);

	return { light1, light2, light3, light4 };
}

export { createLights };
