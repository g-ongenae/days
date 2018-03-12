'use strict';

const canvas = document.getElementsByTagName('canvas')[0];
const $ = canvas.getContext('2d');

let ANGLE = 0;
const LENGTH = 25;

const x1 = () => {
	return (canvas.width / 2) + (LENGTH * Math.cos(Math.PI * ANGLE / 180));
};
const y1 = () => {
	return (canvas.height / 2) + (LENGTH * Math.sin(Math.PI * ANGLE / 180));
};
const x2 = () => {
	return (canvas.width / 2) + (-LENGTH * Math.cos(Math.PI * ANGLE / 180));
};
const y2 = () => {
	return (canvas.height / 2) + (-LENGTH * Math.sin(Math.PI * ANGLE / 180));
};

const line = () => {
	$.beginPath();
	$.moveTo(x1(), y1());
	$.lineTo(x1(), y2());
	$.lineTo(x2(), y2());
	$.lineTo(x2(), y1());
	$.lineTo(x1(), y1());
	$.stroke();
};

const next = () => {
	$.clearRect(0, 0, canvas.width, canvas.height);

	line();

	ANGLE++;
	if (ANGLE === 360) ANGLE = 0;

	requestAnimationFrame(next);
};

next();