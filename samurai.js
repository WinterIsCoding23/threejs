import * as THREE from "three";

import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xdddddd);
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const hlight = new THREE.AmbientLight(0x404040, 100);
scene.add(hlight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 100);
directionalLight.position.set(0, 1, 0);
directionalLight.castShadow = true;
scene.add(directionalLight);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

let loadedModel;
const loader = new GLTFLoader();

loader.load(
  "/samurai/scene.gltf",
  function (gltf) {
    loadedModel = gltf;

    // gltf.scene.rotation.y = Math.PI / 8;
    // gltf.scene.rotation.x = Math.PI / 8;
    gltf.scene.position.y = -4;
    gltf.scene.scale.set(5, 5, 5);
    scene.add(gltf.scene);
  },
  undefined,
  function (error) {
    console.error(error);
  }
);

camera.position.z = 10;

function animate() {
  // if (loadedModel) {
  //   loadedModel.scene.rotation.x += 0.005;
  //   loadedModel.scene.rotation.y += 0.005;
  //   loadedModel.scene.rotation.z += 0.005;
  // }
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

animate();
