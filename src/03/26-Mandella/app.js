'use strict';

const canvas = document.getElementsByTagName('canvas')[0];
const $ = canvas.getContext('2d');

canvas.width = canvas.clientWidth;
canvas.height = canvas.clientHeight;

const NEXT = 36,
	WIDTH = 50,
	X = canvas.width / 2,
	Y = canvas.height / 2;

let RADIUS = 100,
	SHIFT = Math.floor(Math.random() * 10);

const arc = (angle) => {
	$.beginPath();
	$.arc(
		X + (Math.cos(angle) * RADIUS),
		Y + (Math.sin(angle) * RADIUS),
		WIDTH,
		0,
		Math.PI * 2
	);
	$.stroke();
};

const draw = () => {

	for (let i = 0; i <= 360; i += NEXT) {
		arc(i + SHIFT);
	}

	SHIFT += 10;
	if (SHIFT >= 360) {
		SHIFT = 0;
	}

	RADIUS -= 10;
	if (RADIUS <= 0) {
		RADIUS = 100;
		return;
	}

	requestAnimationFrame(draw);
};

draw();

canvas.addEventListener('click', () => {
	$.clearRect(0, 0, canvas.width, canvas.height);

	draw();
});