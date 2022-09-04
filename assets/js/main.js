import init from "./init.js";
import loop from "./loop.js";

C.width = 600;
C.height = 200;

export const
	ctx = C.getContext("2d"),
	meshes = [],
	SCALE = 50,
	FRICTION = 1;

init(meshes);
loop();