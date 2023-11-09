import { MathUtils, TextureLoader, Mesh, MeshStandardMaterial, BoxGeometry, Color } from 'three';

const createCard = envMap => {
  const textureLoader = new TextureLoader();
  const texture = textureLoader.load('/public/image/me/3260842-B20231106.jpg');
  const textureBack = textureLoader.load('/image/card-back.png');

  const createMaterial = texture =>
    new MeshStandardMaterial({
      map: texture,
      envMap,
      envMapIntensity: 0.9,
      // color: 0xf2f2f2,
      roughness: 0.1,
      metalness: 0.8,
    });

  const geometry = new BoxGeometry(0.1, 11, 7.5);
  const m1 = createMaterial(texture);
  const m2 = createMaterial(textureBack);
  const mb = new MeshStandardMaterial({ color: new Color(0, 0, 0) });

  const model = new Mesh(geometry, [m1, m2, mb, mb, mb, mb]);
  model.position.set(0, 0, -40);
  model.scale.set(0.1, 0.1, 0.1);

  const radiansPerSecond = MathUtils.degToRad(30);
  model.tick = delta => {
    model.rotation.y += radiansPerSecond * delta * 2;
  };

  return model;
};

export { createCard };
