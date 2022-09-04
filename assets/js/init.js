import {meshes} from "./main.js";
import {Box} from "./class/Box.js";
import {Vector2} from "./class/Vector2.js";

export default () => {
	const box1 = new Box({
		position: new Vector2(-150, 0),
		velocity: new Vector2(0, 0),
		mass: 3,
		color: 0x374158,
	});

	const box2 = new Box({
		position: new Vector2(100, 0),
		velocity: new Vector2(-0.5, 0),
		mass: 4,
		color: 0x7f5056,
	});

	meshes.push(box1, box2);
};