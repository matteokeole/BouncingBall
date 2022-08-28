import {grab, release} from "./utils/grab.js";
import init from "./init.js";
import loop from "./loop.js";

C.width = 600;
C.height = 600;
C.w2 = C.width / 2;
C.h2 = C.height / 2;

export const
	ctx = C.getContext("2d"),
	meshes = [],
	Physics = {
		gravity: -.15,
		friction: .7,
	};

C.addEventListener("mousedown", grab);
addEventListener("mouseup", release);

init(meshes);

loop();