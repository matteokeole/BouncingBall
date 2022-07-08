import {Vector2} from "./class/Vector2.js";
import {Ball} from "./class/Ball.js";
import {grab, release} from "./functions/grab.js";
import loop from "./functions/loop.js";

C.width = 600;
C.height = 600;
C.w2 = C.width / 2;
C.h2 = C.height / 2;

export const
	ctx = C.getContext("2d"),
	Physics = {
		gravity: -.15,
		friction: .7,
	},
	meshes = [
		new Ball(
			new Vector2(0, 50),
			new Vector2(3, 6),
			25,
			0x7f5056,
		),
		new Ball(
			new Vector2(0, 0),
			new Vector2(-3, 0),
			33,
			0x374158,
		),
	];

// Drag & drop events
C.addEventListener("mousedown", grab);
addEventListener("mouseup", release);

loop();