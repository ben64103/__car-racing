const canvas = document.querySelector("#c");

let scene;
let camera;
let renderer;

// function main(){
//   const scene = new THREE.Scene()
//   const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 1000)
//   camera.position.set(scene.position)
//   scene.background = new THREE.Color('crimson')
//   const cubeGeometry = new THREE.BoxBufferGeometry(3, 3, 3)
//   console.log(cubeGeometry)
//   const cubeMaterial = new THREE.MeshBasicMaterial({color: 0xff0000})

//   const cube = new THREE.Mesh(cubeGeometry, cubeMaterial)
//   cube.position.set(100)
//   scene.add(cube)

//   const renderer = new THREE.WebGLRenderer({canvas})
//   renderer.setSize(
//     window.innerWidth,
//     window.innerHeight
//   )

//   // createCube()
//   document.body.appendChild(renderer.domElement)
//   renderer.render(scene, camera)
// }
// function createCube() {

// }
function init() {
  scene = new THREE.Scene();
  renderer = new THREE.WebGLRenderer({ canvas });
  renderer.setClearColor(0xffffff);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.shadowMap.enabled = true;

  createCube();
  createPlane();
  camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.set(15, 16, 13);
  camera.lookAt(scene.position);
  console.log(camera);

  document.body.appendChild(renderer.domElement);
  render();
}

function createCube() {
  const cubeGeometry = new THREE.CubeGeometry(6, 4, 6);
  const cubeMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });

  const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
  cube.castShadow = true;
  scene.add(cube);
  console.log(cube);
}
// createCube()

function createPlane() {
  const planeGeometry = new THREE.PlaneGeometry(20, 20);
  const planeMaterial = new THREE.MeshBasicMaterial({ color: 0xcccccc });

  const plane = new THREE.Mesh(planeGeometry, planeMaterial);
  plane.receiveShadow = true;
  plane.rotation.x = -0.5 * Math.PI; // rotate 90deg
  plane.position.y = -2;
  scene.add(plane);
}

function render() {
  renderer.render(scene, camera);
  requestAnimationFrame(render);
  // stats.update()
}
init();
