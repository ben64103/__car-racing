import { Color, Scene } from "../3dlib.js";

function createScene(){
    const scene = new Scene()
    scene.background =  new Color('skyblue')
    return scene;
}
export {createScene}