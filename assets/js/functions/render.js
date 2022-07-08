import {Vector2} from "../class/Vector2.js";
import {Ball} from "../class/Ball.js";
import {ctx, meshes} from "../main.js";

export default () => {
	// Clear the canvas
	ctx.clearRect(0, 0, C.width, C.height);

	for (const mesh of meshes) {
		if (mesh instanceof Ball) {
			const p = new Vector2(
				mesh.p.x + C.w2,
				mesh.p.y - C.h2,
			);

			ctx.fillStyle = `#${String(mesh.color.toString(16)).padStart(6, "0")}`;
			ctx.beginPath();
			ctx.ellipse(
				p.x,
				-p.y,
				mesh.rad,
				mesh.rad,
				0,
				0,
				Math.PI * 2,
			);
			ctx.fill();
		}
	}
};