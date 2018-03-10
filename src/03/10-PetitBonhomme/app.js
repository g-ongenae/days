'use strict';

const canvas = document.getElementsByTagName('canvas')[0];
const $ = canvas.getContext('2d');

const HEAD_SIZE = 7.5;
const BODY_SIZE = 20;
const ARM_LENGTH = 25;
const LEG_LENGTH = 35;
let ANGLE = 90;
let I = 120; // Wait 2sec

const calculateNextAngle = () => {
	// Ramdom between 30 and 120
	if (I === 0) {
		const nextVal = Math.floor(Math.random() * 120);
		if (nextVal >= 30) {
			ANGLE = nextVal;
			I = 4;
		} else {
			calculateNextAngle();
		}
	} else {
		I--;
	}
};

const START_X = canvas.width / 2;
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

const sides = (s, y, angle, size) => {
	const xEnd = s === 'right' ?
		START_X + (-size * Math.sin(angle)) :
		START_X - (-size * Math.sin(angle));

	line([
		{
			X: START_X,
			Y: y,
		},
		{
			X: xEnd,
			Y: y + (size * Math.cos(angle)),
		}
	]);
};

const arm = (s) => {
	const angleArm = Math.PI * ANGLE / 180;
	sides(s, START_Y + HEAD_SIZE, angleArm, ARM_LENGTH);
};

const leg = (s) => {
	const angleLeg = Math.PI * 30 / 180;
	sides(s, START_Y + HEAD_SIZE + BODY_SIZE, angleLeg, LEG_LENGTH);
};

const draw = () => {
	$.clearRect(0, 0, canvas.width, canvas.height);

	// HEAD
	$.beginPath();
	$.arc(START_X, START_Y, HEAD_SIZE, 0, Math.PI * 2);
	$.fill();

	// BODY
	line([
		{
			X: START_X,
			Y: START_Y + HEAD_SIZE,
		},
		{
			X: START_X,
			Y: START_Y + HEAD_SIZE + BODY_SIZE,
		}
	]);

	arm('left');
	arm('right');

	leg('left');
	leg('right');

	calculateNextAngle();

	requestAnimationFrame(draw);
};

// Init
draw();