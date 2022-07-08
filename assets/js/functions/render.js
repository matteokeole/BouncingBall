import {Vector2} from "../class/Vector2.js";
import {ctx, ball} from "../main.js";

export default () => {
	// Clear the canvas
	ctx.clearRect(0, 0, C.width, C.height);

	const p = new Vector2(
		ball.p.x + C.w2,
		-ball.p.y - 1 + C.h2,
	);

	// Draw new ball
	ctx.fillStyle = `#${ball.color.toString(16)}`;
	ctx.beginPath();
	ctx.ellipse(
		p.x,
		p.y + 1,
		ball.rad,
		ball.rad,
		0,
		0,
		Math.PI * 2,
	);
	ctx.fill();
};