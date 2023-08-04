import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import WebGL from "three/addons/capabilities/WebGL.js";

const Sphere = () => {
  const sphereRef = useRef();

  useEffect(() => {
    if (WebGL.isWebGLAvailable()) {
      const scene = new THREE.Scene();
      scene.background = new THREE.Color("#3ab740");
      const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );

      const renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      // document
      //   .getElementById("myThreeJsCanvas")
      //   .appendChild(renderer.domElement);
      sphereRef.current.appendChild(renderer.domElement);

      const geometry = new THREE.SphereGeometry(15, 32, 16);

      //initialization
      const loader = new THREE.TextureLoader();
      //loading texture
      const texture = loader.load("/sphere/Substance_Graph_BaseColor.jpg");
      //initializing material
      const material = new THREE.MeshPhongMaterial();
      //setting material property
      material.map = texture;

      // ORIGINAL CODE:
      // const material = new THREE.MeshBasicMaterial({
      //   color: 0x110f97,
      //   opacity: 0.5,
      // });
      const sphere = new THREE.Mesh(geometry, material.map);

      scene.add(sphere);

      camera.position.z = 50;

      function animate() {
        requestAnimationFrame(animate);
        sphere.rotation.x += 0.01;
        sphere.rotation.y += 0.01;
        renderer.render(scene, camera);
      }
      animate();
    } else {
      const warning = WebGL.getWebGLErrorMessage();
      // document.getElementById("myThreeJsCanvas").appendChild(warning);
      sphereRef.current.appendChild(warning);
    }
  }, []);

  return <div ref={sphereRef} />;
};

export default Sphere;
