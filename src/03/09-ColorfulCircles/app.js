'use strict';

const canvas = document.getElementsByTagName('canvas')[0];
const $ = canvas.getContext('2d');

const THRESHOLD = (canvas.width < canvas.height ? canvas.width : canvas.height) / 2;

const drawAt = (x, y) => {
	// $.clearRect(0, 0, canvas.width, canvas.height);

	$.beginPath();
	$.arc(
		x * canvas.width / canvas.clientWidth,
		y * canvas.height / canvas.clientHeight,
		Math.floor(Math.random() * THRESHOLD),
		0,
		Math.PI * 2
	);
	$.fillStyle = '#' + (Math.random() * 0xFFFFFF<<0).toString(16);
	$.fill();
};

drawAt((canvas.clientWidth / 2), (canvas.clientHeight / 2));

canvas.onclick = (event) => {
	drawAt(event.layerX, event.layerY);
};