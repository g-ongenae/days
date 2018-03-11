'use strict';

const canvas = document.getElementsByTagName('canvas')[0];
const $ = canvas.getContext('2d');

const HEAD_SIZE = 7.5;
const LEG_LENGTH = canvas.width / 3;
let ANGLE = -10 * Math.PI / 180;
let I = 5;
let J = 60; // Wait 2 sec;

const calculateNextAngle = () => {
	if (J === 0) {
		I = I === 1 ? 5 : --I;
		ANGLE = -30 * (1/I) * Math.PI / 180;
		J = 4;
	} else {
		J--;
	}
};

const START_X = canvas.width / 3;
const START_Y = canvas.height / 2;

/**
 * Draw a line
 * @param {Array<Object>} ps Points
 * @return {null} Nothing
 */
const line = (ps) => {
	$.beginPath();
	$.moveTo(ps[0].X, ps[0].Y);
	$.lineTo(ps[1].X, ps[1].Y);
	$.stroke();
};

const arms = () => {
	line([
		{
			X: START_X + (LEG_LENGTH * Math.cos(ANGLE)),
			Y: START_Y + (LEG_LENGTH * Math.sin(ANGLE)),
		},
		{
			X: START_X + LEG_LENGTH,
			Y: START_Y,
		}
	]);
};

const legs = () => {
	line([
		{
			X: START_X,
			Y: START_Y,
		},
		{
			X: START_X + (LEG_LENGTH * Math.cos(ANGLE)),
			Y: START_Y + (LEG_LENGTH * Math.sin(ANGLE)),
		}
	]);
};

const draw = () => {
	$.clearRect(0, 0, canvas.width, canvas.height);

	// HEAD
	$.beginPath();
	$.arc(
		START_X + (LEG_LENGTH * Math.cos(ANGLE)) + HEAD_SIZE,
		START_Y + (LEG_LENGTH * Math.sin(ANGLE)),
		HEAD_SIZE,
		0,
		Math.PI * 2
	);
	$.fill();

	arms();

	legs();

	calculateNextAngle();

	requestAnimationFrame(draw);
};

// Init
draw();