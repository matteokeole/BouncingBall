import {meshes, SCALE, FRICTION} from "./main.js";

let d1, d2, box1, box2;

export default () => {
	box1 = meshes[0];
	box2 = meshes[1];

	d1 = Math.floor((box1.p * SCALE + box1.size) * 100) / 100;
	d2 = Math.floor((box2.p * SCALE) * 100) / 100;

	if (d1 === d2) {
		box2.color = 0xff9800;
	
		box1.v = 0.5 * box1.m * (box1.v ** 2);
		box2.v = 0.5 * box2.m * (box2.v ** 2);
	}

	for (const mesh of meshes) {
		// Calculate destination position
		const p = mesh.p + mesh.v;

		// Side collision
		if (p < 0) mesh.v *= -FRICTION;

		mesh.p = mesh.p + mesh.v;
	}
};