import {Vector2} from "../index.js";

export function AABB() {
	this.size		= new Vector2();
	this.vertices	= Array(4);

	this.update = (vertices, positions) => {
		this.size.x = Math.max(...vertices.map(v => v.x)) * 2;
		this.size.y = Math.max(...vertices.map(v => v.y)) * 2;

		for (let i in vertices) {
			this.vertices[i] = this.size.multiply(positions[i]).divideScalar(2);
		}
	};
}