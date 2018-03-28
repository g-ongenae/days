'use strict';

const canvas = document.getElementsByTagName('canvas')[0];
const $ = canvas.getContext('2d');

canvas.width = canvas.clientWidth;
canvas.height = canvas.clientHeight;

const draw = (n) => {
	let startX = 0,
		startY = 0;

	const step = Math.min(canvas.height, canvas.width) / n;

	for (let i = 0; i < n; i++) {
		startX = (canvas.width / n) * i;
		for (let j = 0; j < n; j++) {
			startY = (canvas.height / n) * j;
			const s = Math.floor(((Math.random() * ((2 * step) + 1)) - step));
			const path = new Path2D(`M${startX} ${startY} h ${s} v ${s} Z`);
			$.fillStyle = '#' + (Math.random() * 0xFFFFFF<<0).toString(16);
			$.fillStyle += 'border: 1px solid black';
			$.fill(path);
		}
	}

};

draw(10);

canvas.addEventListener('click', () => {
	$.clearRect(0, 0, canvas.width, canvas.height);

	draw(Math.ceil(Math.random() * 20));
});