import {meshes} from "./main.js";

export default () => {
	const [box1, box2] = meshes;

	box1.angle += 0.01;
	box1.update();

	box2.angle -= 0.005;
	box2.update();

	box1.aabbColor = box1.intersect(box2) ? box1.aabbEventColor : box1.aabbDefaultColor;
};