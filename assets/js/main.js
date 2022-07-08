import {Vector2} from "./class/Vector2.js";
import {Ball} from "./class/Ball.js";
import {grab, release} from "./functions/grab.js";
import loop from "./functions/loop.js";

C.width = 400;
C.height = 400;
C.w2 = C.width / 2;
C.h2 = C.height / 2;

export const
	ctx = C.getContext("2d"),
	cbr = C.getBoundingClientRect(),
	Physics = {
		gravity: .15,
		friction: .7,
	},
	ball = new Ball(
		new Vector2(0, 50),
		new Vector2(5, 1),
		25,
		0x7f5056,
	);

// Drag & drop events
C.addEventListener("mousedown", grab);
addEventListener("mouseup", release);

loop();