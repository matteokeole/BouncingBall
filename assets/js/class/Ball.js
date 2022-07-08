/**
 * Creates a new ball.
 * 
 * @constructor
 * @param	{Vector2}	position
 * @param	{Vector2}	acceleration
 * @param	{number}	radius
 * @param	{string}	color
 */
export function Ball(position, acceleration, radius, color) {
	this.p = position;
	this.a = acceleration;
	this.rad = radius;
	this.color = color;
	this.grabbed = false;
};