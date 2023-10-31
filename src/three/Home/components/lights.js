import { DirectionalLight, AmbientLight } from 'three';

function createLights() {
  const ambientLight = new AmbientLight(0xffffff, 2);
  // 平行光
  const directionalLight = new DirectionalLight('#ffffff', 50);
  directionalLight.castShadow = true;
  directionalLight.shadow.camera.far = 50;
  directionalLight.shadow.mapSize.set(1024, 1024);
  directionalLight.shadow.normalBias = 0.05;
  directionalLight.position.set(5, 5, 5);

  return { ambientLight, directionalLight };
}

export { createLights };
