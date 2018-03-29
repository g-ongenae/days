'use strict';

const canvas = document.getElementsByTagName('canvas')[0];
const $ = canvas.getContext('2d');

canvas.width = canvas.clientWidth;
canvas.height = canvas.clientHeight;

const draw = () => {
	const startX = canvas.width / 2;
	const startY = canvas.height / 3;
	const middle = canvas.height / 2;

	for (let i = startY; i < canvas.height * 2 / 3; i++) {
		const max = Math.abs(middle - i);
		const str = `M${startX} ${i} h ${max} h -${2 * max} Z`;
		const path = new Path2D(str);
		$.strokeStyle = '#' + (Math.random() * 0xFFFFFF<<0).toString(16);
		$.stroke(path);
	}
};

draw();

canvas.addEventListener('click', () => {
	$.clearRect(0, 0, canvas.width, canvas.height);

	draw();
});