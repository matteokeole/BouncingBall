import {AABB, Vector2} from "../index.js";

export function Box({width, height, position, angle}, color) {
	this.C = position;
	this.size = new Vector2(width, height);
	this.angle = angle;
	this.color = color;
	this.visible = true;

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
		const {size, angle, positions, vertices} = this;

		for (let i in positions) {
			const v = size.multiply(positions[i]).divideScalar(2);

			vertices[i] = new Vector2(
				v.x * Math.cos(angle) - v.y * Math.sin(angle),
				v.x * Math.sin(angle) + v.y * Math.cos(angle),
			);
		}
	};

	this.intersect = mesh => {
		const
			{C, aabb}				= this,
			{C: C2, aabb: aabb2}	= mesh;

		let a = C.x - aabb.size.x / 2;
		let b = C.x + aabb.size.x / 2;
		let a2 = C2.x - aabb2.size.x / 2;
		let b2 = C2.x + aabb2.size.x / 2;

		// X meeting
		if (
			(
				(a2 >= a && a2 <= b) ||
				(b2 >= a && b2 <= b)
			) || (a2 < a && b2 > b)
		) {
			// Y meeting
			a = C.y - aabb.size.y / 2;
			b = C.y + aabb.size.y / 2;
			a2 = C2.y - aabb2.size.y / 2;
			b2 = C2.y + aabb2.size.y / 2;

			if (
				(
					(a2 >= a && a2 <= b) ||
					(b2 >= a && b2 <= b)
				) || (a2 < a && b2 > b)
			) return true;
		}

		return false;
	};
};