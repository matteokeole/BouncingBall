import {Vector2} from "../class/Vector2.js";
import {Ball} from "../class/Ball.js";
import {Box} from "../class/Box.js";
import {meshes} from "../main.js";
import {intersect} from "./intersect.js";

let cbr,
	current,
	o,			// Origin
	d,			// Distance between the origin and the ball center
	a,			// Acceleration vector
	boost = 1;	// Acceleration multiplier (boost)

export const
	grab = e => {
		// Compute the canvas bounding box
		cbr = C.getBoundingClientRect();

		o = new Vector2(
			e.clientX - cbr.x - C.w2,
			-(e.clientY - cbr.y - C.h2),
		);

		for (const mesh of Array.from(meshes).reverse()) {
			// Get the distance to the mesh center
			d = o.substract(mesh.position);

			// Look for mesh~pointer intersections
			if (intersect(o, mesh)) {
				o = mesh.position.clone();

				mesh.acceleration.set();
				mesh.grabbed = true;

				current = mesh;
				addEventListener("mousemove", move);

				break;
			}
		}
	},
	move = e => {
		const p = new Vector2(
			e.clientX - cbr.x - C.w2,
			-(e.clientY - cbr.y - C.h2),
		);

		a = p.substract(o);

		current.position = p.substract(d);
		current.acceleration = a.multiplyScalar(boost);

		o = p;
	},
	release = e => {
		if (current) {
			// Clamp the position to the canvas borders
			current.position = current.position.clampScalar(
				-C.w2 + current.rad,
				C.w2 - current.rad,
			);

			current.grabbed = false;
			current = null;
		}

		removeEventListener("mousemove", move);
	};