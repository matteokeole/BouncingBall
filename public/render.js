import {Vector2} from "../src/index.js";
import {ctx, meshes} from "./main.js";

export default () => {
	ctx.clearRect(0, 0, C.width, C.height);

	for (const mesh of meshes) {
		const {C, vertices} = mesh;

		aabb(ctx, mesh);
		verts(ctx, mesh, vertices);
		center(ctx, C);
	}
};

function center(ctx, C) {
	ctx.fillStyle = ctx.strokeStyle = "#469cea";
	ctx.beginPath();
	ctx.arc(C.x, C.y, 1, 0, Math.PI * 2);
	ctx.stroke();
	point(ctx, C, "O");
}

function verts(ctx, mesh, verts) {
	const
		{C, color} = mesh,
		id = ["A", "B", "C", "D"];

	ctx.fillStyle = ctx.strokeStyle = color;

	ctx.beginPath();
	for (let i in verts) {
		let v = verts[i].add(C);

		ctx.lineTo(v.x, v.y);
		point(ctx, v, id[i]);
	}
	ctx.closePath();
	ctx.stroke();
}

function point(ctx, p, id) {
	const i = p.clone().floor();
	ctx.align("center");
	ctx.fillText([id, i.x, i.y].join(" "), p.x, p.y - 4);
}

function aabb(ctx, mesh) {
	const {C, aabb, aabbColor, aabbEventColor} = mesh;

	ctx.fillStyle = ctx.strokeStyle = aabbColor;

	let v2;

	ctx.beginPath();
	for (const v of aabb.vertices) {
		v2 = v.add(C);

		ctx.lineTo(v2.x, v2.y);
	}
	ctx.closePath();
	ctx.stroke();

	const aabbC = C.substract(aabb.size);

	ctx.align("left", "bottom");
	ctx.fillText(`AABB: ${aabb.size.x.toFixed()} ${aabb.size.y.toFixed()}`, aabbC.x, aabbC.y - 1);
}