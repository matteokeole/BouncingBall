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
export function Box({position, velocity, mass, color}) {
	const size = mass * 20;

	Object.assign(this, {
		p: position,
		v: velocity,
		a: new Vector2(),
		mass,
		size,
		color,
		vertices: [
			new Vector2(-size,  size),
			new Vector2( size,  size),
			new Vector2( size, -size),
			new Vector2(-size, -size),
		],
	});

	return this;
};