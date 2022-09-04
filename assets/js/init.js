import {meshes} from "./main.js";
import {Box} from "./class/Box.js";

export default () => {
	const box2 = new Box({
		p: 5,
		v: -0.01,
		m: 10,
		color: 0x7f5056,
	});

	const box1 = new Box({
		p: 2,
		v: 0,
		m: 1,
		color: 0x374158,
	});

	meshes.push(box1, box2);
};