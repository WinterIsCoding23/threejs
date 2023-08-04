import * as THREE from "three";
import WebGL from "three/addons/capabilities/WebGL.js";

export default Cube (){
 
if (WebGL.isWebGLAvailable()) {
  // Initiate function or other initializations here
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  // 1. attribute: field of view
  // 2. attribute: aspect ratio - recommended: width of the element divided by the height
  // 3. near clipping plane
  // 4. far clipping plane --> everything between near & far will be rendered

  // Size at which the app shall be rendered/what area shall be covered (in this case: the whole screen):
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  camera.position.z = 5;

  // Rendering the scene
  function animate() {
    requestAnimationFrame(animate);
    // Animating the cube
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
  }
  animate();
} else {
  const warning = WebGL.getWebGLErrorMessage();
  document.getElementById("container").appendChild(warning);
}

return (
  <div>
    <canvas id="myThreeJsCanvas" />
  </div>
);
}

