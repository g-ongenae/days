'use strict';

const canvas = document.getElementsByTagName('canvas')[0];
const $ = canvas.getContext('2d');

canvas.width = canvas.clientWidth;
canvas.height = canvas.clientHeight;

const getStairs = (n) => {
	const stepX = canvas.width / n;
	const stepY = canvas.height / n;
	let str = `M0 ${stepY}`;

	for (let i = 1; i < n; i++) {
		str = `${str} h ${stepX} v ${stepY}`;
	}

	return `${str} Z`;
};

const draw = () => {
	const r = Math.ceil(Math.random() * 15);
	const stairs = new Path2D(getStairs(r));
	$.fill(stairs);
};

draw();

canvas.addEventListener('click', () => {
	$.clearRect(0, 0, canvas.width, canvas.height);

	draw();
});