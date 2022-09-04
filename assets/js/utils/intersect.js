import {Box} from "../class/Box.js";

export function intersect(v, mesh) {
	switch (true) {
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