import {AABB, Vector2} from "../index.js";

export function Box({width, height, position, angle}, color) {
	this.C = position;
	this.angle = angle;
	this.color = color;

	this.positions = [
		new Vector2(-1, -1),
		new Vector2( 1, -1),
		new Vector2( 1,  1),
		new Vector2(-1,  1),
	];
	this.vertices = Array(4);

	this.aabb = new AABB();
	this.aabbColor = this.aabbDefaultColor = "#8d4d45";
	this.aabbEventColor = "#fff";

	this.update = () => {
		this.updateVertices();

		this.aabb.update(this.vertices, this.positions);
	};

	this.updateVertices = () => {
		const {angle, positions, vertices} = this;

		for (let i in positions) {
			const v = new Vector2(width, height).multiply(positions[i]).divideScalar(2);

			vertices[i] = new Vector2(
				v.x * Math.cos(angle) - v.y * Math.sin(angle),
				v.x * Math.sin(angle) + v.y * Math.cos(angle),
			);
		}
	};

	this.intersect = mesh => {
		const
			{C, aabb}				= this,
			{C: C2, aabb: aabb2}	= mesh,
			aabbSize				= aabb.size.add(C),
			aabb2Size				= aabb2.size.add(C2);

		return false;
	};
};