import {Physics} from "../main.js";

export const
	update_gravity = e => {
		let gravity = e.target.value;

		gravity = !gravity.length || isNaN(+gravity) ?
			Physics.gravity_default :
			+gravity;

		Physics.gravity = gravity;
	},
	update_friction = e => {
		let friction = e.target.value;

		if (!friction.length || isNaN(+friction)) friction = Physics.friction_default;
		else {
			friction = +friction;

			friction < 0 || friction > 1 && (friction = Physics.friction_default);
		}

		Physics.friction = friction;
	};