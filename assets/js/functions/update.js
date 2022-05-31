import {Physics, ball} from "../main.js";
import render from "./render.js";

export default function update() {
	// Calculate destination position
	let x = ball.x + ball.ax,
		y = ball.y - ball.ay;

	ball.ay += Physics.gravity;

	// Left & right
	if (
		x - ball.rad < -C.width2 ||
		x + ball.rad >= C.width2
	) ball.ax *= -Physics.friction;

	// Top & bottom
	if (
		-y - ball.rad < -C.height2 ||
		-y + ball.rad >= C.height2
	) ball.ay *= -Physics.friction;

	// Update position
	if (!ball.grabbed) {
		ball.x += ball.ax;
		ball.y -= ball.ay;
	}

	if (frames-- <= 0) {
		frames = framerate;

		render();

		ball.ox = ball.x;
		ball.oy = ball.y;
	}

	requestAnimationFrame(update);
};

let fps = 60, // Define frames per second here
	framerate = 165 / fps,
	frames = 0;
