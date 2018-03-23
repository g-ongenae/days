'use strict';

const canvas = document.getElementsByTagName('canvas')[0];
const $ = canvas.getContext('2d');

canvas.width = canvas.clientWidth;
canvas.height = canvas.clientHeight;

const
	N_WAVE = 10,
	P = canvas.width / N_WAVE,
	RADIUS = P / 2,
	X = 0,
	Y = canvas.height / 2;

let SHIFT = 0.5;

const draw = () => {
	$.beginPath();
	$.moveTo(X, Y);

	for (let i = -1; i < N_WAVE + 2; i++) {
		$.arc(
			P * (SHIFT + i),
			Y,
			RADIUS,
			0,
			Math.PI,
			i % 2
		);
	}

	$.lineWidth = 3 * P / 5;
	$.strokeStyle = 'blue';
	$.stroke();
};

const reDraw = () => {
	$.clearRect(0, 0, canvas.width, canvas.height);

	draw();

	SHIFT = SHIFT > 1 ? -1 : SHIFT + 0.1;

	requestAnimationFrame(reDraw);
};

reDraw();