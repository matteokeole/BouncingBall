export default function(x, y, ax, ay, rad, color) {
	// Position
	this.x = this.cx = this.ox = x;
	this.y = this.cx = this.oy = y;

	// Acceleration
	this.ax = ax;
	this.ay = ay;

	this.rad = rad;
	this.color = color;
	this.grabbed = false;
}