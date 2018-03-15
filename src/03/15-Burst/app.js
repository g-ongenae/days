'use strict';

const canvas = document.getElementsByTagName('canvas')[0];
const $ = canvas.getContext('2d');

let ANGLE = 0;
let LENGTH = 25;
let COLOR = 'black';
let SPEED = 1;
let NUMBER = 10;
let SIZE = 1;
let LEFT = true;

const x = (a) => {
	return (canvas.width / 2) + (LENGTH * Math.cos(Math.PI * a / 180));
};
const y = (a) => {
	return (canvas.height / 2) + (LENGTH * Math.sin(Math.PI * a / 180));
};

const point = (diff) => {
	$.beginPath();
	$.arc(x(ANGLE + diff), y(ANGLE + diff), SIZE, 0, Math.PI * 2);
	$.strokeStyle = COLOR;
	$.stroke();
};

const newDrawingConf = () => {
	COLOR = '#' + (Math.random() * 0xFFFFFF<<0).toString(16);
	SIZE = Math.ceil(Math.random() * 5);
	SPEED = Math.ceil(Math.random() * 10);
	NUMBER = Math.ceil(Math.random() * 10);
	LEFT = Math.random() >= 0.5;
	ANGLE = LEFT ? 0 : 360;
	$.clearRect(0, 0, canvas.width, canvas.height);
};

const next = () => {
	ANGLE = LEFT ? ANGLE + SPEED : ANGLE - SPEED;
	if (ANGLE >= 360) ANGLE = 0;
	if (ANGLE < 0) ANGLE = 360;

	LENGTH += SPEED / 4;
	if (LENGTH >= 50) {
		LENGTH = 0;
		newDrawingConf();
	}

	for (let i = 0; i < 360; i += 360 / NUMBER) {
		point(i);
	}

	requestAnimationFrame(next);
};

next();