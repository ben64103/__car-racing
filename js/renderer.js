import { WebGLRenderer } from "../3dlib.js";

function createRenderer() {
    const renderer = new WebGLRenderer;
    return renderer;
}

export {createRenderer}