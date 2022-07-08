import update from "./update.js";
import render from "./render.js";

export default function loop() {
	requestAnimationFrame(loop);

	let now = performance.now(),
		diff = now - then;

	if (CURRENT_FRAME === 0 || diff > interval) {
		// Adjust the interval
		then = now - diff % interval;

		ELAPSED = then - start;
		CURRENT_FRAME++;

		update();
		render();
	}
};
export let
	ELAPSED, // Elapsed time (ms) since the start of the loop
	CURRENT_FRAME = 0; // Number of the current frame

let fps = 165,
	interval = 1000 / fps,
	start = performance.now(),
	then = start;