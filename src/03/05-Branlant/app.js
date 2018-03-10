'use strict';

const canvas = document.getElementsByTagName('canvas')[0];
const $ = canvas.getContext('2d');

const random = (max) => {
	return Math.floor(Math.random() * max);
};

const newLine = (xPrevious, yPrevious) => {
	const x = xPrevious + random(canvas.width / 10);
	const y = random(canvas.height);

	$.beginPath();
	$.moveTo(xPrevious, yPrevious);
	$.lineTo(x, y);
	$.stroke();

	return { x, y };
};

const draw = () => {
	$.clearRect(0, 0, canvas.width, canvas.height);

	let x = 0;
	let y = canvas.height / 2;
	while (x < canvas.width) {
		const next = newLine(x, y);
		x = next.x;
		y = next.y;
	}
};

draw();
// setInterval(draw, 250);
canvas.addEventListener('click', draw);