import {Physics, ball} from "../main.js";

export default function update() {
	// Calculate destination position
	let p = ball.p.clone();
	p.x += ball.a.x;
	p.y -= ball.a.y;

	if (!ball.grabbed) {
		ball.a.y += Physics.gravity;
	} else {
		if (ball.p.x - ball.rad < -C.w2) ball.p.x = -C.w2 + ball.rad;
		if (ball.p.x + ball.rad > C.w2) ball.p.x = C.w2 - ball.rad;

		if (ball.p.y - ball.rad < -C.h2) ball.p.y = -C.h2 + ball.rad;
		if (ball.p.y + ball.rad > C.h2) ball.p.y = C.h2 - ball.rad;
	}

	// Left & right
	if (
		p.x - ball.rad < -C.w2 ||
		p.x + ball.rad >= C.w2
	) ball.a.x *= -Physics.friction;

	// Top & bottom
	if (
		-p.y - ball.rad < -C.h2 ||
		-p.y + ball.rad >= C.h2
	) ball.a.y *= -Physics.friction;

	// Update position if not grabbed
	if (!ball.grabbed) {
		ball.p.x += ball.a.x;
		ball.p.y -= ball.a.y;
	}

	ball.ox = ball.p.x;
	ball.oy = ball.p.y;
};