'use strict';

const canvas = document.getElementsByTagName('canvas')[0];
const $ = canvas.getContext('2d');

canvas.width = canvas.clientWidth;
canvas.height = canvas.clientHeight;

const SHIFT = 10;

const line = (points) => {
	$.beginPath();
	$.moveTo(points[0].x, points[0].y);
	for (let i = 1; i < points.length; i++) {
		$.lineTo(points[i].x, points[i].y);
	}
	$.strokeStyle = '#' + (Math.random() * 0xFFFFFF<<0).toString(16);
	$.stroke();
};

const lines = [
	[
		{
			x: 0,
			y: 0,
		},
		{
			x: canvas.width,
			y: canvas.height,
		}
	]
];

const draw = () => {
	$.clearRect(0, 0, canvas.width, canvas.height);
	for (const l of lines) {
		line(l);
	}
	requestAnimationFrame(draw);
};

const drawLines = () => {
	// That's horrible but I'm tired
	for (let j = 0; j < 50; j++) {
		const arr = [];
		for (const l of lines[lines.length-1]) {
			const obj = {};
			for (const prop in l) { // eslint-disable-line
				obj[prop] = l[prop] + SHIFT;
			}
			arr.push(obj);
		}
		lines.push(arr);
	}

	draw();
};

drawLines();