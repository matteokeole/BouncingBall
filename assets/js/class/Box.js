import {Vector2} from "../class/Vector2.js";

/**
 * @constructor
 * @param	{number}	width	Box width
 * @param	{number}	height	Box height
 * @param	{number}	color	Box color (hexadecimal)
 * @returns	{Box}
 */
export function Box(width, height, color) {
	Object.assign(this, {width, height, color});

	this.w2 = this.width / 2;
	this.h2 = this.height / 2;

	this.vertices = [
		new Vector2(-this.w2,  this.h2),
		new Vector2( this.w2,  this.h2),
		new Vector2( this.w2, -this.h2),
		new Vector2(-this.w2, -this.h2),
	];

	this.position = new Vector2();
	this.rotation = 0;
	this.acceleration = new Vector2();

	return this;
};