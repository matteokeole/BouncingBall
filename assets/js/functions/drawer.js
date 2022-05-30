import {ctx, ball} from "../main.js";

export const
	clear = () => ctx.clearRect(0, 0, C.width, C.height),
	draw = () => {
		ball.cx = ball.x + C.width / 2;
		ball.cy = -ball.y - 1 + C.height / 2;

		ctx.beginPath();
		ctx.ellipse(
			ball.cx,
			ball.cy,
			ball.rad,
			ball.rad,
			0,
			0,
			Math.PI * 2,
		);
		ctx.fill();
	};