const
	fps = 1,
	canvas = document.querySelector("#canvas"),
	ctx = canvas.getContext("2d"),
	Ball = function() {
		this.p = [canvas.width / 2, 300];
		this.rad = 10;
		this.hb = [[0, 0], [0, 0]];
		this.v = [0, 1];
		this.a = [0, 0];

		this.update_hitbox = () => {
			this.hb = [
				[this.p[0] - this.rad, this.p[0] + this.rad],
				[this.p[1] - this.rad, this.p[1] + this.rad],
			];
		};

		this.update = () => {
			frames++;

			// Erase at the old position
			this.erase();

			// Calculate hitbox
			this.update_hitbox();

			// Collision detection
			// Left & right
			if (
				this.hb[0] < 0 ||
				this.hb[0] > canvas.width
			) this.v[0] *= -1;

			// Top & bottom
			if (
				this.hb[1][0] < 0 ||
				this.hb[1][1] > canvas.width
			) this.v[1] *= -1;

			// Update position
			this.p[0] += this.v[0];
			this.p[1] += this.v[1];

			// Render at the new position
			// this.draw();

			if (1000 / frames > fps) {
				this.draw();

				frames = 0;
			}

			requestAnimationFrame(this.update);
		};

		this.draw = () => {
			ctx.fillStyle = "#8ea4ca";
			ctx.beginPath();
			ctx.arc(
				...this.p,
				this.rad * 2,
				0,
				2 * Math.PI,
				false,
			);
			ctx.fill();
		};

		this.erase = () => {
			ctx.clearRect(0, 0, canvas.width, canvas.height);
		}

		this.update();
	};
let frames = fps;

canvas.width = 400;
canvas.height = 400;

const ball = new Ball();