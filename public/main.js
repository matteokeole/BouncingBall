import {Box, Vector2} from "../src/index.js";
import loop from "./loop.js";

C.width = C.height = 600;

export const
	ctx		= C.getContext("2d"),
	meshes	= [
		new Box({
			width: 100,
			height: 190,
			position: new Vector2(180, 180),
			angle: 0,
		}, "#f69150"),
		new Box({
			width: 70,
			height: 240,
			position: new Vector2(380, 380),
			angle: Math.PI / 2,
		}, "#476384"),
	];

ctx.font = "14px Consolas";
ctx.align = (horizontal = "start", vertical = "alphabetic") => {
	ctx.textAlign = horizontal;
	ctx.textBaseline = vertical;
};

loop.start(60);