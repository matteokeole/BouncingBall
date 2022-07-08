import {Vector2} from "../class/Vector2.js";
import {cbr, ball} from "../main.js";

let o,			// Origin
	d,			// Distance between the origin and the ball center
	a,			// Ball acceleration
	boost = 2;	// Acceleration boost

export const
	grab = e => {
		o = new Vector2(
			e.clientX - cbr.left - C.w2,
			e.clientY - cbr.top - C.h2,
		).floor();

		o.y *= -1;

		// Get the distance from the pointer to the ball center
		d = o.substract(ball.p);

		// Check if the cursor is on the ball
		if (d.length() <= ball.rad + 1) {
			o = ball.p.clone();

			ball.a = new Vector2();
			ball.grabbed = true;

			addEventListener("mousemove", move);
		}
	},
	move = e => {
		let p = new Vector2(
			e.clientX - cbr.left - C.w2,
			e.clientY - cbr.top - C.h2,
		).floor();
		p.y *= -1;

		a = p.substract(o);

		// Clamping
		if (Math.abs(a.x) < 2) a.x = 0;
		if (Math.abs(a.y) < 2) a.y = 0;
		a.y *= -1;

		ball.p = p.substract(d);
		ball.a = a.multiplyScalar(boost); // Acceleration punch

		o = p.clone();
	},
	release = e => {
		ball.grabbed = false;

		removeEventListener("mousemove", move);
	};