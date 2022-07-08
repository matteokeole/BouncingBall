import {Vector2} from "../class/Vector2.js";

/**
 * @constructor
 * @param	{number}	radius	Ball radius
 * @param	{number}	color	Ball color (hexadecimal)
 * @returns	{Ball}
 */
export function Ball(radius, color) {
	Object.assign(this, {radius, color});

	this.position = new Vector2();
	this.rotation = 0;
	this.acceleration = new Vector2();

	this.grabbed = false;

	return this;
};