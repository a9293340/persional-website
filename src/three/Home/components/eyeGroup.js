import { createCone } from './cone.js';
import { Group } from 'three';

const createEyeGroup = async type => {
  const group = new Group();
  const temp = await createCone(type);

  const range = 200;
  for (let i = 0; i < 100; i++) {
    const tar = temp.clone();
    tar.position.set(
      Math.random() * range - range / 2,
      Math.random() * range - range / 2,
      -Math.abs(Math.random() * range - range / 2),
    );
    tar.rotation.z = Math.PI / (Math.random() * 10);

    tar.tick = delta => {
      tar.rotation.z -= (Math.PI / 4) * delta;
    };
    group.add(tar);
  }

  group.name = 'eg';

  group.tick = delta => {
    group.rotation.z -= (Math.PI / 12) * delta;
  };

  return group;
};

export { createEyeGroup };
