import * as THREE from "three"
import { Euler } from "three";
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setClearColor(0x000000, 1)
document.getElementById("player").appendChild( renderer.domElement );
const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshPhongMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
cube.setRotationFromEuler(new Euler(0, 0, 0));
cube.scale.set(0.5,0.5,0.5)
cube.position.set(0,2,2)
scene.add( cube );
const light = new THREE.AmbientLight( 0xFFFFFF ); // soft white light
scene.add( light );
const light2 = new THREE.DirectionalLight( 0xFFFFFF );
const helper = new THREE.DirectionalLightHelper( light2, 5 );
scene.add( helper );
camera.position.y = 2;
camera.position.z = 5;
camera.position.x =0;
function animate() {
	requestAnimationFrame( animate );
    cube.rotation.z += 0.01
    cube.rotation.x += 0.01
	renderer.render( scene, camera );
}
animate();