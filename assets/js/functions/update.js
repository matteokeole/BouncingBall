import {GRAVITY as G, FRICTION as F, ball} from "../main.js";
import render from "./render.js";

export default function update() {
	// Calculate destination position
	let x = ball.x + ball.ax,
		y = ball.y - ball.ay;

	ball.ay += G;

	// Left & right
	if (
		x - ball.rad < -C.width / 2 ||
		x + ball.rad >= C.width / 2
	) ball.ax *= -F;

	// Top & bottom
	if (
		-y - ball.rad < -C.height / 2 ||
		-y + ball.rad >= C.height / 2
	) ball.ay *= -F;

	// Update position
	if (!ball.grabbed) {
		ball.x += ball.ax;
		ball.y -= ball.ay;
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