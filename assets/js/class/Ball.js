export default function(x, y, ax, ay, rad, color) {
	// Position
	this.x			= x;
	this.y			= y;
	// Acceleration
	this.ax			= ax;
	this.ay			= ay;
	this.rad		= rad;
	this.color		= color;
	this.grabbed	= false;
}