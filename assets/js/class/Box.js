import {Vector2} from "../class/Vector2.js";

/**
 * A box.
 * 
 * @constructor
 * @param	{number}	width	Box width
 * @param	{number}	height	Box height
 * @param	{number}	color	Box color (hexadecimal code)
 * @returns	{Box}
 */
export function Box(width, height, color) {
	const w2 = width / 2, h2 = height / 2;

	Object.assign(this, {
		width,
		height,
		color,
		w2,
		h2,
		vertices: [
			new Vector2(-w2,  h2),
			new Vector2( w2,  h2),
			new Vector2( w2, -h2),
			new Vector2(-w2, -h2),
		],
		position: new Vector2(),
		rotation: 0,
		acceleration: new Vector2(),
	});

	return this;
};