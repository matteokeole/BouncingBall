import {Ball} from "./class/Ball.js";
import {Box} from "./class/Box.js";
import {Vector2} from "./class/Vector2.js";
import {meshes} from "./main.js";

export default () => {
	let ball1 = new Ball(
		25,
		0x7f5056,
	);
	ball1.position.set(0, 50);
	ball1.acceleration.set(3, 6);



	let ball2 = new Ball(
		33,
		0x374158,
	);
	ball2.position.set(0, 0);
	ball2.acceleration.set(-3, 0);



	let box1 = new Box(
		66, 66,
		0x7f5056,
	);



	meshes.push(box1);
};