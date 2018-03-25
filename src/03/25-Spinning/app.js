'use strict';

const canvas = document.getElementsByTagName('canvas')[0];
const $ = canvas.getContext('2d');

canvas.width = canvas.clientWidth;
canvas.height = canvas.clientHeight;

const X = canvas.width / 2;
const Y = canvas.height / 2;

let ANGLE = 0;
let RADIUS = 100;

const rect = () => {
	$.beginPath();
	$.moveTo(
		X + (Math.cos(ANGLE) * RADIUS),
		Y + (Math.sin(ANGLE) * RADIUS)
	);

	for (let i = 1; i < 5; i++) {
		$.lineTo(
			X + (Math.cos(ANGLE + (i * Math.PI / 2)) * RADIUS),
			Y + (Math.sin(ANGLE + (i * Math.PI / 2)) * RADIUS)
		);
	}

	$.lineWidth = 5;
	$.stroke();
};

const draw = () => {
	$.clearRect(0, 0, canvas.width, canvas.height);

	rect();

	ANGLE += 1 / 32;
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