import { MathUtils, TextureLoader, Mesh, MeshStandardMaterial, SphereGeometry } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const createCone = async type => {
  const loader = new GLTFLoader();
  const path = `/models/${!type ? 'free_millenium_eye_print_ready_yugioh' : 'millennium_rod'}.glb`;
  const target = await loader.loadAsync(path);
  const model = target.scene.children[0];
  console.log(model);
  model.scale.set(0.1, 0.1, 0.1);
  return model;
};

export { createCone };
