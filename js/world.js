import { createCamera } from "./camera.js";
import { createCube } from "./cube.js";
import { createRenderer } from "./renderer.js";
import { createScene } from "./scene.js";

const world = new World(container);

let camera;
let renderer;
let scene;

class World {
  constructor(container) {
    camera = createCamera();
    scene = createScene();
    renderer = createRenderer();
    container.append(renderer.domElement  )
  }
  render() {
    // console.log(world.camera)
    renderer.render(scene, camera)
  }
}
// world.renderO()
world.render();
export {World}