'use strict';

const canvas = document.getElementsByTagName('canvas')[0];
const $ = canvas.getContext('2d');

const rectangles = [];
const NUMBER_RECTANGLES = 5;

for (let i = 0; i < NUMBER_RECTANGLES; i++) {
	rectangles.push({
		x: i !== 0 ? canvas.width * i / NUMBER_RECTANGLES : 0,
		y: canvas.height,
		w: canvas.width / NUMBER_RECTANGLES,
		h: Math.floor(Math.random() * canvas.height),
		color: '#' + (Math.random() * 0xFFFFFF<<0).toString(16),
	});
}

const random = (base) => {
	const op = Math.random() > 0.5 ? '+' : '-';
	const change = Math.floor(Math.random() * canvas.width) / 100;
	base += eval(op + change);
	base = base > canvas.height ? canvas.height : base;
	base = base < 0 ? 0 : base;
	return base;
};

const rect = (r) => {
	$.beginPath();
	$.fillStyle = r.color;
	$.rect(
		r.x,
		r.y - r.h,
		r.w,
		r.y
	);
	$.fill();
};

const allRect = () => {
	$.clearRect(0, 0, canvas.width, canvas.height);

	for (const el of rectangles) {
		// Render each rectangles
		rect(el);

		// Calculate next Height
		el.h = random(el.h);
	}

	requestAnimationFrame(allRect);
};

allRect();