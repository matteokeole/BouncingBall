import {AABB, Vector2} from "../index.js";

export function Box({width, height, position, angle}, color) {
	this.C = position;
	this.angle = angle;
	this.color = color;
	this.visible = true;

	this.positions = [
		new Vector2(-.5, -.5),
		new Vector2( .5, -.5),
		new Vector2( .5,  .5),
		new Vector2(-.5,  .5),
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
			const v = new Vector2(width, height).multiply(positions[i]);

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

		let a = C.x - aabb.size.x;
		let b = C.x + aabb.size.x;
		let a2 = C2.x - aabb2.size.x;
		let b2 = C2.x + aabb2.size.x;

		// X meeting
		if (
			(
				(a2 >= a && a2 <= b) ||
				(b2 >= a && b2 <= b)
			) || (a2 < a && b2 > b)
		) {
			// Y meeting
			a = C.y - aabb.size.y;
			b = C.y + aabb.size.y;
			a2 = C2.y - aabb2.size.y;
			b2 = C2.y + aabb2.size.y;

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