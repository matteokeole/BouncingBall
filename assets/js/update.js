import {Physics, meshes} from "./main.js";

export default () => {
	for (const mesh of meshes) {
		// Calculate destination position
		const p = mesh.p.add(mesh.v);

		// Side collision
		if (p.x < -C.w2 || p.x + mesh.size > C.w2) mesh.v.x *= -Physics.friction;

		for (const neighbor of meshes) {
			if (neighbor === mesh) continue;
		}

		mesh.p = mesh.p.add(mesh.v);
	}
};