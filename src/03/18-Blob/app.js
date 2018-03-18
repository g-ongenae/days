'use strict';

const canvas = document.getElementsByTagName('canvas')[0];
const $ = canvas.getContext('2d');

canvas.width = canvas.clientWidth;
canvas.height = canvas.clientHeight;

const SPACE_BETWEEN_EYES = 25;
const WIDTH = window.innerWidth;
const HEIGTH = window.innerHeight;
let OPEN = 2;

const eye = (x, y) => {
	$.beginPath();
	$.arc(x, y, 10, 0, Math.PI * OPEN);
	$.fill();
};

eye((canvas.width / 2) - SPACE_BETWEEN_EYES, canvas.height / 2);
eye((canvas.width / 2) + SPACE_BETWEEN_EYES, canvas.height / 2);

document.onmousemove = function onmousemove (event) {
	$.clearRect(0, 0, canvas.width, canvas.height);

	OPEN++;
	if (OPEN > 2) OPEN = 1;

	eye(
		(event.clientX * canvas.width / WIDTH) - SPACE_BETWEEN_EYES,
		event.clientY * canvas.height / HEIGTH
	);
	eye(
		(event.clientX * canvas.width / WIDTH) + SPACE_BETWEEN_EYES,
		event.clientY * canvas.height / HEIGTH
	);
};