import {Ball} from "../class/Ball.js";
import {Box} from "../class/Box.js";

export function intersect(v, mesh) {
	switch (true) {
		case mesh instanceof Ball:
			return v.distanceTo(mesh.position) <= mesh.rad + 1;

		case mesh instanceof Box:
			return (
				v.x >= mesh.position.x - mesh.w2 &&
				v.x <= mesh.position.x + mesh.w2 &&
				v.y >= mesh.position.y - mesh.h2 &&
				v.y <= mesh.position.y + mesh.h2
			);
	}

	return false;
};