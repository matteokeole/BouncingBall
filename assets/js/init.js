import {meshes} from "./main.js";
import {Ball} from "./class/Ball.js";
import {Box} from "./class/Box.js";

export default () => {
	const ball1 = new Ball(
		33,
		0x374158,
	);
	ball1.position.set(0, 0);
	ball1.acceleration.set(-3, 0);



	const ball2 = new Ball(
		25,
		0x7f5056,
	);
	ball2.position.set(0, 50);
	ball2.acceleration.set(3, 6);



	const box1 = new Box(
		66, 66,
		0x7f5056,
	);



	meshes.push(ball1, ball2);
};