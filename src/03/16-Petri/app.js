'use strict';

const canvas = document.getElementsByTagName('canvas')[0];
const $ = canvas.getContext('2d');

canvas.width = canvas.clientWidth;
canvas.height = canvas.clientHeight;

const LIFE_TIME = 2000;
const LIMIT = 100000;
let POS = 0;
const RADIUS = 3;
const SPACE = 25;

const listOfPoints = [{
	x: canvas.width / 2,
	y: canvas.height / 2,
}];

const drawPoint = (point) => {
	$.beginPath();
	$.arc(point.x, point.y, RADIUS, 0, Math.PI * 2);
	$.fill();
};

const randomAround = (number) => {
	const space = Math.random() * SPACE;
	const side = Math.random() > 0.5;
	return side ? number + space : number - space;
};

const createNewPointAround = (point) => {
	let x = randomAround(point.x);
	let y = randomAround(point.y);

	if (x < 0 || x > canvas.width) x = 0;
	if (y < 0 || y > canvas.height) y = 0;

	return { x, y };
};

let ID = null;
const next = () => {
	const l = listOfPoints.length;
	for (; POS < l; POS++) {
		drawPoint(listOfPoints[POS]);
	}

	if (l >= LIMIT) {
		clearInterval(ID);
	}

	for (let j = 0; j < l; j++) {
		listOfPoints.push(createNewPointAround(listOfPoints[j]));
	}
};

ID = setInterval(next, LIFE_TIME);