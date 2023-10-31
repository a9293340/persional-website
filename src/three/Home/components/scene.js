import { Scene, CubeTextureLoader, FogExp2, Color } from 'three';

function createScene() {
  const scene = new Scene();

  scene.background = new Color(0x1a1a1a);
  scene.fog = new FogExp2(0x000000, 0.005);

  return scene;
}

function createCubeTexture() {
  const loader = new CubeTextureLoader();
  loader.setPath('/textures/Brigde/');
  const textureCube = loader.load([
    'posx.jpg',
    'negx.jpg',
    'posy.jpg',
    'negy.jpg',
    'posz.jpg',
    'negz.jpg',
  ]);

  return textureCube;
}

export { createScene, createCubeTexture };
