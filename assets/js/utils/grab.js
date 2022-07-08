import {Vector2} from "../class/Vector2.js";
import {Ball} from "../class/Ball.js";
import {Box} from "../class/Box.js";
import {meshes} from "../main.js";
import {intersect} from "./intersect.js";

let cbr,
	current,
	o,			// Origin
	d,			// Distance between the origin and the ball center
	a,			// Ball acceleration
	boost = 2;	// Acceleration boost

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

			// Check if the pointer is intersecting with the mesh
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
		let p = new Vector2(
			e.clientX - cbr.x - C.w2,
			-(e.clientY - cbr.y - C.h2),
		);

		a = p.substract(o).clampScalar({min: 2, minReplace: 0});

		current.position = p.substract(d);
		current.acceleration = a.multiplyScalar(boost); // Acceleration punch

		o = p;
	},
	release = e => {
		if (current) {
			current.grabbed = false;
			current = null;
		}

		removeEventListener("mousemove", move);
	};