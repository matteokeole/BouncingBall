/**
 * @constructor
 * @param	{Vector2}	position		Default position
 * @param	{Vector2}	acceleration	Default acceleration
 * @param	{number}	radius			Ball radius
 * @param	{number}	color			Ball color (0x)
 * @returns	{Ball}
 */
export function Ball(position, acceleration, radius, color) {
	this.p = position;
	this.a = acceleration;

	this.rad = radius;
	this.color = color;

	this.grabbed = false;

	return this;
};