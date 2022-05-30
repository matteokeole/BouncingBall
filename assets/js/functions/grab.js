import {cbr, ball} from "../main.js";

let ax, ay;

export const
	grab = e => {
		let x = e.clientX - cbr.left,
			y = e.clientY - cbr.top;

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
		let x = e.clientX - cbr.left - C.width / 2,
			y = -e.clientY + cbr.top + C.height / 2;

		ball.x = x;
		ball.y = y;
		ball.ax = ax + x;
		ball.ay = ay - y;

		ax = -x;
		ay = y;
	},
	release = e => {
		ball.grabbed = false;

		C.removeEventListener("mousemove", move);
	};