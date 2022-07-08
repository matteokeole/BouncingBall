/**
 * Creates a 2-dimensional vector.
 * 
 * @constructor
 * @param	{number}	x
 * @param	{number}	y
 * @returns	{Vector2}
 */
export const Vector2 = function(x, y) {
	return this.set(x, y);
};

/**
 * Adds another vector to this vector.
 * 
 * @param	{Vector2}	v
 * @returns	{Vector2}
 */
Vector2.prototype.add = function(v) {
	return new Vector2(
		this.x + v.x,
		this.y + v.y,
	);
};

/**
 * Adds a given scalar value to this vector's coordinates.
 * 
 * @param	{number}	n
 * @returns	{Vector2}
 */
Vector2.prototype.addScalar = function(n) {
	return new Vector2(
		this.x + n,
		this.y + n,
	);
};

/**
 * Adds the multiple of a given scalar value and a given vector to this vector.
 * 
 * @param	{Vector2}	v
 * @param	{number}	n
 * @returns	{Vector2}
 */
Vector2.prototype.addScaledVector = function(v, n) {
	return this.add(v.multiplyScalar(n));
};

/**
 * Rounds up the position of this vector to the nearest integer value.
 * 
 * @returns	{Vector2}
 */
Vector2.prototype.ceil = function() {
	return new Vector2(
		Math.ceil(this.x),
		Math.ceil(this.y),
	);
};

/**
 * Returns a copy of this vector.
 * 
 * @returns	{Vector2}
 */
Vector2.prototype.clone = function() {
	return new Vector2(this.x, this.y);
};

/**
 * Returns the distance between this vector and another vector.
 * 
 * @param	{Vector2}	v
 * @returns	{number}
 */
Vector2.prototype.distanceTo = function(v) {
	return Math.sqrt((v.x - this.x) ** 2 + (v.y - this.y) ** 2);
};

/**
 * Divides this vector by another vector.
 * 
 * @param	{Vector2}	v
 * @returns	{Vector2}
 */
Vector2.prototype.divide = function(v) {
	return new Vector2(
		this.x / v.x,
		this.y / v.y,
	);
};

/**
 * Divides this vector by a given scalar value.
 * 
 * @param	{number}	n
 * @returns	{Vector2}
 */
Vector2.prototype.divideScalar = function(n) {
	return this.multiplyScalar(1 / n);
};

/**
 * Calculates the dot product of this vector and another vector.
 * 
 * @param	{Vector2}	v
 * @returns	{number}
 */
Vector2.prototype.dot = function(v) {
	return this.x * v.x + this.y * v.y;
};

/**
 * Returns the boolean value of the comparison of this vector and another vector.
 * 
 * @param	{Vector2}	v
 * @returns	{boolean}
 */
Vector2.prototype.equals = function(v) {
	return this.x === v.x && this.y === v.y;
};

/**
 * Rounds down the position of this vector to the nearest integer value.
 * 
 * @returns	{Vector2}
 */
Vector2.prototype.floor = function() {
	return new Vector2(
		Math.floor(this.x),
		Math.floor(this.y),
	);
};

/**
 * Inverts the coordinate signs of this vector.
 * 
 * @returns	{Vector2}
 */
Vector2.prototype.invert = function() {
	return this.multiplyScalar(-1);
};

/**
 * Returns the length of the line going from the origin to the position of this vector.
 * 
 * @returns	{number}
 */
Vector2.prototype.length = function() {
	return Math.sqrt(this.lengthSquared());
};

/**
 * Returns the squared length of the line going from the origin to the position of this vector.
 * 
 * @returns	{number}
 */
Vector2.prototype.lengthSquared = function() {
	return this.x ** 2 + this.y ** 2;
};

/**
 * Multiplies this vector by another vector.
 * 
 * @param	{Vector2}	v
 * @returns	{Vector2}
 */
Vector2.prototype.multiply = function(v) {
	return new Vector2(
		this.x * v.x,
		this.y * v.y,
	);
};

/**
 * Multiplies this vector by a given scalar value.
 * 
 * @param	{number}	n
 * @returns	{Vector2}
 */
Vector2.prototype.multiplyScalar = function(n) {
	return new Vector2(
		this.x * n,
		this.y * n,
	);
};

/**
 * Normalizes this vector.
 * 
 * @returns {Vector2}
 */
Vector2.prototype.normalize = function() {
	const length = this.length();

	if (length > .00001) return new Vector2(
		this.x / length,
		this.y / length,
	);

	return new Vector2();
};

/**
 * Sets pseudo-random coordinates between 0 and 1 (excluded) to this vector.
 * 
 * @returns	{Vector2}
 */
Vector2.prototype.randomize = function() {
	return new Vector2(
		Math.random(),
		Math.random(),
	);
};

/**
 * Rounds the position of this vector to the nearest integer value.
 * 
 * @returns	{Vector2}
 */
Vector2.prototype.round = function() {
	return new Vector2(
		Math.round(this.x),
		Math.round(this.y),
	);
};

/**
 * Sets the coordinates of this vector.
 * 
 * @param	{number}	[x=0]
 * @param	{number}	[y=x]
 * @param	{number}	[z=x]
 * @returns	self
 */
Vector2.prototype.set = function(x = 0, y = x) {
	if (x instanceof Vector2) {
		this.x = x.x;
		this.y = x.y;

		return this;
	}

	this.x = x;
	this.y = y;

	return this;
};

/**
 * Sets the X coordinate of this vector.
 * 
 * @param	{number}	x
 * @returns	self
 */
Vector2.prototype.setX = function(x) {
	this.x = x;

	return this;
};

/**
 * Sets the Y coordinate of this vector.
 * 
 * @param	{number}	y
 * @returns	self
 */
Vector2.prototype.setY = function(y) {
	this.y = y;

	return this;
};

/**
 * Substracts this vector from another vector.
 * 
 * @param	{Vector2}	v
 * @returns	{Vector2}
 */
Vector2.prototype.substract = function(v) {
	return new Vector2(
		this.x - v.x,
		this.y - v.y,
	);
};

/**
 * Substracts this vector from a given scalar value.
 * 
 * @param	{number}	n
 * @returns	{Vector2}
 */
Vector2.prototype.substractScalar = function(n) {
	return this.addScalar(-n);
};

/**
 * Returns the coordinates of this vector in an array.
 * 
 * @returns	{array}
 */
Vector2.prototype.toArray = function() {
	return [this.x, this.y];
};

/**
 * Returns the coordinates of this vector in a string.
 * 
 * @param	{number}	n	Decimal rounding
 * @returns	{string}
 */
Vector2.prototype.toString = function(n = 2) {
	return `${this.x.toFixed(n)} ${this.y.toFixed(n)}`;
};