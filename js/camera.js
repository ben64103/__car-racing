import { PerspectiveCamera } from "../3dlib.js";

function createCamera() {
  const camera = new PerspectiveCamera();
  camera.position.set(0, 0, 10);

  return camera;
}
export { createCamera };
