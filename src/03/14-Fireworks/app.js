'use strict';

const canvas = document.getElementsByTagName('canvas')[0];
const $ = canvas.getContext('2d');

let ANGLE = 0;
let LENGTH = 25;
let COLOR = 'black';
let SPEED = 1;

const x = (l, a) => {
	return (canvas.width / 2) + (l * Math.cos(Math.PI * a / 180));
};
const y = (l, a) => {
	return (canvas.height / 2) + (l * Math.sin(Math.PI * a / 180));
};

const point = (diff, color) => {
	$.beginPath();
	$.arc(x(LENGTH, ANGLE + diff), y(LENGTH, ANGLE + diff), 1, 0, Math.PI * 2);
	$.strokeStyle = color;
	$.stroke();
};

const next = () => {
	$.clearRect(0, 0, canvas.width, canvas.height);

	for (let i = 0; i < 360; i += 45) {
		point(i, COLOR);
	}

	ANGLE += SPEED;
	if (ANGLE >= 360) ANGLE = 0;

	LENGTH += SPEED / 4;
	if (LENGTH >= 50) {
		LENGTH = 0;
		COLOR = '#' + (Math.random() * 0xFFFFFF<<0).toString(16);
		SPEED = Math.ceil(Math.random() * 5);
	}

	requestAnimationFrame(next);
};

next();