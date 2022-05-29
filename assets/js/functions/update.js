import {GRAVITY as G, FRICTION as F, ball} from "../main.js";
import render from "./render.js";

export default function update() {
	// Left & right
	if (
		ball.x - ball.rad < -C.height / 2 ||
		ball.x + ball.rad + 1 >= C.width / 2
	) ball.dx *= -F;

	// Top & bottom
	if (
		-ball.y - ball.rad < -C.height / 2 ||
		-ball.y + ball.rad - 1 >= C.height / 2
	) ball.dy *= -F;
	else ball.dy += G;

	// Update position
	if (!ball.grabbed) {
		ball.x += ball.dx;
		ball.y -= ball.dy;
	}

	if (frames-- <= 0) {
		frames = framerate;

		render();
	}

	requestAnimationFrame(update);
};

let fps			= 60, // Define frames per second value here
	framerate	= 165 / fps,
	frames		= 0;