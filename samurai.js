import * as THREE from "three";
import WebGL from "three/addons/capabilities/WebGL.js";

import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const loader = new GLTFLoader();

loader.load(
  "/scene.gltf",
  function (gltf) {
    gltf.scene.rotation.y = Math.PI / 8;
    gltf.scene.position.y = 3;
    gltf.scene.scale.set(100, 100, 100);
    scene.add(gltf.scene);
  },
  undefined,
  function (error) {
    console.error(error);
  }
);

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

animate();
