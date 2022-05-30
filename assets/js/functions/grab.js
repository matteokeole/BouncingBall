import {cbr, ball} from "../main.js";

let ax, ay, oax, oay;

export const
	grab = e => {
		let x = e.clientX - cbr.left,
			y = e.clientY - cbr.top;

		// Check if the cursor is on the ball
		if (
			x > ball.cx - ball.rad &&
			x < ball.cx + ball.rad &&
			y > ball.cy - ball.rad &&
			y < ball.cy + ball.rad
		) {
			ball.ax = 0;
			ball.ay = 0;
			ball.grabbed = true;

			C.addEventListener("mousemove", move);
		}
	},
	move = e => {
		let x = e.clientX - cbr.left - C.width2,
			y = -e.clientY + cbr.top + C.height2;

		ax = oax + x;
		Math.abs(ax) <= 2 && (ax = 0);
		ay = oay - y;
		Math.abs(ay) <= 2 && (ay = 0);

		ball.x = x;
		ball.y = y;
		ball.ax = ax;
		ball.ay = ay;

		oax = -x;
		oay = y;
	},
	release = e => {
		ball.grabbed = false;

		C.removeEventListener("mousemove", move);
	};