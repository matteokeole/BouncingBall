import {SCALE} from "../main.js";

export function Box({p, v, m, color}) {
	const massRoot = Math.sqrt(m);
	const size = (1 + m / 20) * SCALE;

	Object.assign(this, {
		p,
		v,
		m,
		massRoot,
		size,
		color,
	});

	return this;
};