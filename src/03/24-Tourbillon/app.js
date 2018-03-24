'use strict';

const canvas = document.getElementsByTagName('canvas')[0];
const $ = canvas.getContext('2d');

canvas.width = canvas.clientWidth;
canvas.height = canvas.clientHeight;

const X = canvas.width / 2;
const Y = canvas.height / 2;

let ANGLE = 0;
let RADIUS = 100;

const bullet = () => {
	$.beginPath();
	$.arc(
		X + (Math.cos(ANGLE) * RADIUS),
		Y + (Math.sin(ANGLE) * RADIUS),
		5,
		0,
		Math.PI * 2
	);
	$.fill();
};

const draw = () => {
	$.clearRect(0, 0, canvas.width, canvas.height);

	bullet();

	ANGLE += 1 / 16;
	if (ANGLE >= 360) {
		ANGLE = 0;
	}

	RADIUS -= 1 / 16;
	if (RADIUS <= 0) {
		RADIUS = 100;
	}

	requestAnimationFrame(draw);
};

draw();