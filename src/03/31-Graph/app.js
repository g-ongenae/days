'use strict';

const canvas = document.getElementsByTagName('canvas')[0];
const $ = canvas.getContext('2d');

canvas.width = canvas.clientWidth;
canvas.height = canvas.clientHeight;

const MAX_MOVE_X = canvas.width / 10,
	MAX_MOVE_Y = canvas.height / 10,
	MAX_RADIUS = 12;

const point = (x, y) => {
	const radius = Math.ceil(Math.random() * MAX_RADIUS);
	const path = new Path2D();
	path.arc(x, y, radius, 0, Math.PI * 2);
	$.fill(path);
};

const line = (x, y) => {
	const path = new Path2D();
	path.moveTo(x, y);
	const moveX = Math.ceil(Math.random() * 2 * MAX_MOVE_X) - MAX_MOVE_X;
	const moveY = Math.ceil(Math.random() * 2 * MAX_MOVE_Y) - MAX_MOVE_Y;
	path.lineTo(x + moveX, y + moveY);
	$.stroke(path);
	return { x: (x + moveX), y: (y + moveY) };
};

const draw = () => {

	let X = canvas.width / 2,
		Y = canvas.height / 2;

	for (let i = 0; i < 25; i++) {
		point(X, Y);
		const next = line(X, Y);
		X = next.x;
		Y = next.y;
	}
	point(X, Y);
};

draw();

canvas.addEventListener('click', () => {
	$.clearRect(0, 0, canvas.width, canvas.height);

	draw();
});