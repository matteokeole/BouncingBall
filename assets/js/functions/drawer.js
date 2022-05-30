import {ctx, ball} from "../main.js";

export const
	convert = (x, y) => [
		x + C.width2,
		-y - 1 + C.height2,
	],
	clear = () => {
		let [x, y] = convert(ball.ox, ball.oy);

		// Erase old ball
		ctx.fillStyle = "#000";
		ctx.beginPath();
		ctx.ellipse(
			x,
			y,
			ball.rad + 1,
			ball.rad + 1,
			0,
			0,
			Math.PI * 2,
		);
		ctx.fill();
	},
	draw = () => {
		[ball.cx, ball.cy] = convert(ball.x, ball.y);

		// Draw new ball
		ctx.fillStyle = ball.color;
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