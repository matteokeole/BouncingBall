import {meshes} from "./main.js";

let theta = 0;

export default () => {
	theta += 0.01;

	const [box1, box2] = meshes;

	box1.C.x = 380 - Math.sin(theta) * 154;
	box1.C.y = 400 - Math.cos(theta) * 127;
	box1.angle += 0.01;
	box1.update();

	box2.C.x = 200 - Math.sin(theta) * 109;
	box2.C.y = 300 - Math.cos(theta) * 93;
	box2.angle -= 0.005;
	box2.update();

	box1.aabbColor = box1.intersect(box2) ? box1.aabbEventColor : box1.aabbDefaultColor;
};