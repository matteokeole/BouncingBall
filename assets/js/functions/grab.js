import {Vector2} from "../class/Vector2.js";
import {Ball} from "../class/Ball.js";
import {meshes} from "../main.js";

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
			if (mesh instanceof Ball) {
				// Get the distance from the pointer to the ball center
				d = o.substract(mesh.p);

				// Continue if this mesh is not clicked
				if (d.length() > mesh.rad + 1) continue;

				o = mesh.p.clone();

				mesh.a = new Vector2();
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

		current.p = p.substract(d);
		current.a = a.multiplyScalar(boost); // Acceleration punch

		o = p;
	},
	release = e => {
		if (current) {
			current.grabbed = false;
			current = null;
		}

		removeEventListener("mousemove", move);
	};