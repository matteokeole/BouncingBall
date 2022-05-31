import Ball from "./class/Ball.js";
import update from "./functions/update.js";
import {grab, release} from "./functions/grab.js";
import {update_gravity, update_friction} from "./functions/input.js";

C.width = 400;
C.height = 400;
C.width2 = C.width / 2;
C.height2 = C.height / 2;

export const
	ctx = C.getContext("2d"),
	cbr = C.getBoundingClientRect(),
	Physics = {
		gravity: .05,
		friction: .65,
	},
	ball = new Ball(
		0, 50,
		1, 1,
		25,
		"#8ea4ca",
	);

Physics.gravity_default = Physics.gravity;
Physics.friction_default = Physics.friction;

ctx.fillStyle = ball.color;

update();

// Clear inputs
GravityInput.value = "";
GravityInput.placeholder += ` (${Physics.gravity_default})`;
FrictionInput.value = "";
FrictionInput.placeholder += ` (${Physics.friction_default})`;

// Drag & drop events
C.addEventListener("mousedown", grab);
addEventListener("mouseup", release);

// Input events
GravityInput.addEventListener("change", update_gravity);
FrictionInput.addEventListener("change", update_friction);
