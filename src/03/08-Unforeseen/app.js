'use strict';

const canvas = document.getElementsByTagName('canvas')[0];
const $ = canvas.getContext('2d');

const origin = canvas.width / 3;
const side = canvas.height / 3;
let shift = 0;

const drawRect = (points) => {
	const last = points.length - 1;

	$.clearRect(0, 0, canvas.width, canvas.height);

	$.beginPath();
	$.moveTo(points[last].x, points[last].y);
	for (const p of points) {
		$.lineTo(p.x, p.y);
	}
	$.fillStyle = '#' + (Math.random() * 0xFFFFFF<<0).toString(16);
	$.fill();
};

const generateRectPoints = (originPosition, sideLength, variation) => {
	const points = [];

	for (let i = 0; i < 4; i++) {
		const x = originPosition + (i > 0 && i <= 2 ? sideLength : 0);
		const y = originPosition + (i >= 2 ? sideLength : 0);

		points.push({
			x: i < 2 ? x + variation : x - variation,
			y: i < 2 ? y - variation : y + variation,
		});
	}

	return points;
};

const generateRect = () => {
	if (shift > side / 2) {
		shift -= side / 2;
		shift = -shift;
	}

	const points = generateRectPoints(origin, side, shift);
	drawRect(points);

	shift++;

	requestAnimationFrame(generateRect);
};

generateRect();