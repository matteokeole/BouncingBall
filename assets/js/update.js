import {Ball} from "./class/Ball.js";
import {Box} from "./class/Box.js";
import {Physics, meshes} from "./main.js";

export default () => {
	for (const mesh of meshes) {
		// Calculate destination position
		let p = mesh.position.add(mesh.acceleration);

		if (!mesh.grabbed) mesh.acceleration.y += Physics.gravity;

		switch (true) {
			case mesh instanceof Ball:
				if (mesh.grabbed) {
					if (mesh.position.x - mesh.radius < -C.w2) mesh.position.x = -C.w2 + mesh.radius;
					if (mesh.position.x + mesh.radius > C.w2) mesh.position.x = C.w2 - mesh.radius;

					if (mesh.position.y - mesh.radius < -C.h2) mesh.position.y = -C.h2 + mesh.radius;
					if (mesh.position.y + mesh.radius > C.h2) mesh.position.y = C.h2 - mesh.radius;
				}

				// Left & right
				if (
					p.x - mesh.radius < -C.w2 ||
					p.x + mesh.radius > C.w2
				) mesh.acceleration.x *= -Physics.friction;

				// Top & bottom
				if (
					p.y - mesh.radius < -C.h2 ||
					p.y + mesh.radius > C.h2
				) mesh.acceleration.y *= -Physics.friction;

				break;
			case mesh instanceof Box:
				if (mesh.grabbed) {
					if (mesh.position.x - mesh.w2 < -C.w2) mesh.position.x = -C.w2 + mesh.w2;
					if (mesh.position.x + mesh.w2 > C.w2) mesh.position.x = C.w2 - mesh.w2;

					if (mesh.position.y - mesh.h2 < -C.h2) mesh.position.y = -C.h2 + mesh.h2;
					if (mesh.position.y + mesh.h2 > C.h2) mesh.position.y = C.h2 - mesh.h2;
				}
				mesh.rotation -= .001;

				// Left & right
				if (
					p.x - mesh.w2 < -C.w2 ||
					p.x + mesh.w2 > C.w2
				) mesh.acceleration.x *= -Physics.friction;

				// Top & bottom
				if (
					p.y - mesh.h2 < -C.h2 ||
					p.y + mesh.h2 > C.h2
				) mesh.acceleration.y *= -Physics.friction;

				break;
		}

		// Update position if not grabbed
		if (!mesh.grabbed) mesh.position = mesh.position.add(mesh.acceleration);
	}
};