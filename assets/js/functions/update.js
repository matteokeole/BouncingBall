import {Vector2} from "../class/Vector2.js";
import {Physics, meshes} from "../main.js";

export default function update() {
	for (const mesh of meshes) {
		// Calculate destination position
		let p = mesh.p.add(mesh.a);

		if (!mesh.grabbed) mesh.a.y += Physics.gravity;
		else {
			if (mesh.p.x - mesh.rad < -C.w2) {
				mesh.a.x *= -1;
				mesh.p.x = -C.w2 + mesh.rad;
			}
			if (mesh.p.x + mesh.rad > C.w2) {
				mesh.a.x *= -1;
				mesh.p.x = C.w2 - mesh.rad;
			}

			if (mesh.p.y - mesh.rad < -C.h2) {
				mesh.a.y *= -1;
				mesh.p.y = -C.h2 + mesh.rad;
			}
			if (mesh.p.y + mesh.rad > C.h2) {
				mesh.a.y *= -1;
				mesh.p.y = C.h2 - mesh.rad;
			}
		}

		// Left & right
		if (
			p.x - mesh.rad < -C.w2 ||
			p.x + mesh.rad >= C.w2
		) mesh.a.x *= -Physics.friction;

		// Top & bottom
		if (
			p.y - mesh.rad < -C.h2 ||
			p.y + mesh.rad >= C.h2
		) mesh.a.y *= -Physics.friction;

		// Update position if not grabbed
		if (!mesh.grabbed) mesh.p = mesh.p.add(mesh.a);
	}
};