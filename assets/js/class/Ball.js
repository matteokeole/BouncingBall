import {Vector2} from "../class/Vector2.js";

/**
 * A ball.
 * 
 * @constructor
 * @param	{number}	rad		Ball radius
 * @param	{number}	color	Ball color (hexadecimal)
 * @returns	{Ball}
 */
export function Ball(rad, color) {
	Object.assign(this, {
		rad,
		color,
		position: new Vector2(),
		rotation: 0,
		acceleration: new Vector2(),
		grabbed: false,
	});

	return this;
};