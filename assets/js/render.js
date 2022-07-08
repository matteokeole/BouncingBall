import {Vector2} from "./class/Vector2.js";
import {Ball} from "./class/Ball.js";
import {Box} from "./class/Box.js";
import {ctx, meshes} from "./main.js";

export default () => {
	// Clear the canvas
	ctx.clearRect(0, 0, C.width, C.height);

	for (const mesh of meshes) {
		ctx.fillStyle = `#${String(mesh.color.toString(16)).padStart(6, "0")}`;
		ctx.beginPath();

		if (mesh instanceof Ball) {
			const p = mesh.position.add(new Vector2(C.w2, -C.h2));

			ctx.ellipse(
				p.x,
				-p.y,
				mesh.radius,
				mesh.radius,
				0,
				0,
				Math.PI * 2,
			);
		}

		if (mesh instanceof Box) {
			for (const v of mesh.vertices) {
				let r = new Vector2(
					v.x * Math.cos(mesh.rotation) + v.y * Math.sin(mesh.rotation),
					v.x * Math.sin(mesh.rotation) - v.y * Math.cos(mesh.rotation),
				);
				let t = mesh.position.add(r).add(new Vector2(C.w2, -C.h2));

				ctx.lineTo(t.x, -t.y);
			}
		}

		ctx.fill();
	}
};