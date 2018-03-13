'use strict';

const canvas = document.getElementsByTagName('canvas')[0];
const $ = canvas.getContext('2d');

const w = canvas.width / 2;
const h = canvas.height / 2;

const drawSquare = (x) => {
	$.beginPath();
	$.moveTo(w, h + x);
	$.lineTo(w + x, h);
	$.lineTo(w, h - x);
	$.lineTo(w - x, h);
	$.lineTo(w, h + x);
	$.stroke();
};

let X = 0;
const draw = () => {
	$.clearRect(0, 0, w * 2, h * 2);
	drawSquare(X);
	X++;
	if (X === 50) X = -50;
	requestAnimationFrame(draw);
};

draw();