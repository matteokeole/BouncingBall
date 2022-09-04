import {ctx, meshes} from "./main.js";
import {Box} from "./class/Box.js";
import {Vector2} from "./class/Vector2.js";

export default () => {
	// Clear the canvas
	ctx.clearRect(0, 0, C.width, C.height);

	const O = new Vector2(C.width / 2, C.height);

	for (const mesh of meshes) {
		ctx.fillStyle = `#${String(mesh.color.toString(16)).padStart(6, 0)}`;

		if (mesh instanceof Box) {
			const p = mesh.p.add(O);

			ctx.fillRect(p.x, p.y, mesh.size, -mesh.size);
		}
	}
};