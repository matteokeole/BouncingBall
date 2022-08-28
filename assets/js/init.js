import {Ball} from "./class/Ball.js";
import {Box} from "./class/Box.js";
import {meshes} from "./main.js";

export default () => {
	const ball1 = new Ball(
		25,
		0x7f5056,
	);
	ball1.position.set(0, 50);
	ball1.acceleration.set(3, 6);



	const ball2 = new Ball(
		33,
		0x374158,
	);
	ball2.position.set(0, 0);
	ball2.acceleration.set(-3, 0);



	const box1 = new Box(
		66, 66,
		0x7f5056,
	);



	meshes.push(ball1, ball2);
};