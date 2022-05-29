import {cbcr, ball} from "../main.js";

export const
	grab = e => {
		let x = e.clientX - cbcr.left,
			y = e.clientY - cbcr.top;

		if (
			x > ball.cx - ball.rad &&
			x < ball.cx + ball.rad &&
			y > ball.cy - ball.rad &&
			y < ball.cy + ball.rad
		) {
			ball.dx = 0;
			ball.dy = 0;
			ball.grabbed = true;

			C.addEventListener("mousemove", move);
		}
	},
	move = e => {
		let x = e.clientX - cbcr.left - C.width / 2,
			y = -e.clientY + cbcr.top + C.height / 2;

		ball.x = x;
		ball.y = y;
		ball.dx = -(edx - x);
		ball.dy = edy - y;

		edx = x;
		edy = y;
	},
	release = e => {
		ball.grabbed = false;

		C.removeEventListener("mousemove", move);
	};

let edx = 0, edy = 0;