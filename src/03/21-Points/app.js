'use strict';

const canvas = document.getElementsByTagName('canvas')[0];
const $ = canvas.getContext('2d');

canvas.width = canvas.clientWidth;
canvas.height = canvas.clientHeight;

const MAX = 4,
	RADIUS = 10;

const point = (a, b) => {
	$.beginPath();
	$.arc(a, b, RADIUS, 0, Math.PI * 2);
	$.fill();
};

const draw = (char) => {
	$.clearRect(0, 0, canvas.width, canvas.height);

	char = char || 'a';
	const charCode = char.charCodeAt(0).toString(2);

	for (let i = 0; i < 2; i++) {
		for (let j = 0; j < MAX; j++) {
			if (charCode[(MAX * i) + j] === '1') {
				point(
					(canvas.width / 2) + (i * 50),
					(canvas.height / 3) + (j * 50)
				);
			}
		}
	}
};

draw();

document
	.getElementById('button')
	.addEventListener('click', () => {
		draw(document.forms[0].text.value);
	});