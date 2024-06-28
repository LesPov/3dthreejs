// Importa todo el módulo 'three' y lo asigna a la variable 'THREE'
import * as THREE from 'three';

// Crea un nuevo renderer WebGL, que es responsable de dibujar la escena
const renderer = new THREE.WebGLRenderer();

// Establece el tamaño del área de dibujo del renderer
renderer.setSize(window.innerWidth, window.innerHeight);

// Añade el renderer al documento HTML, para que sea visible en la página
document.body.appendChild(renderer.domElement);

// Aquí puedes añadir más código para crear una escena, una cámara, objetos 3D, luces, etc.
// Ejemplo:
// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
// const geometry = new THREE.BoxGeometry();
// const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
// const cube = new THREE.Mesh(geometry, material);
// scene.add(cube);
// camera.position.z = 5;
// function animate() {
//     requestAnimationFrame(animate);
//     cube.rotation.x += 0.01;
//     cube.rotation.y += 0.01;
//     renderer.render(scene, camera);
// }
// animate();
