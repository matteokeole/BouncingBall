import {ctx, meshes, SCALE} from "./main.js";

export default () => {
	// Clear the canvas
	ctx.clearRect(0, 0, C.width, C.height);

	// Render the meshes
	{
		for (const mesh of meshes) {
			ctx.fillStyle = `#${mesh.color.toString(16).padStart(6, 0)}`;

			const {p, size} = mesh;

			ctx.fillRect(p * SCALE, C.height, size, -size);
		}
	}
};