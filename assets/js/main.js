import Ball from "./class/Ball.js";
import update from "./functions/update.js";
import {grab, release} from "./functions/grab.js";

C.width = 400;
C.height = 400;

export const
	ctx			= C.getContext("2d"),
	cbcr		= C.getBoundingClientRect(),
	GRAVITY		= .05,
	FRICTION	= .7,
	ball		= new Ball(
		0, 100,
		1, 1,
		20,
		"#8ea4ca",
	);

ctx.fillStyle = ball.color;

update();

C.addEventListener("mousedown", grab);
C.addEventListener("mouseup", release);