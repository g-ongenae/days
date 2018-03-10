'use strict';

const canvas = document.getElementsByTagName('canvas')[0];
const $ = canvas.getContext('2d');

const circle = () => {
	// Clear Canvas
	$.clearRect(0, 0, canvas.width, canvas.height);

	// Draw circle
	$.beginPath();
	$.arc(
		canvas.width / 2,
		canvas.height / 2,
		Math.floor(Math.random() * 75),
		0,
		Math.PI * 2
	);
	$.stroke();

	requestAnimationFrame(circle);
};

// Init
circle();