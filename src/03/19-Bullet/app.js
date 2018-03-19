'use strict';

const canvas = document.getElementsByTagName('canvas')[0];
const $ = canvas.getContext('2d');

canvas.width = canvas.clientWidth;
canvas.height = canvas.clientHeight;

const WIDTH = window.innerWidth;
const HEIGTH = window.innerHeight;

const bullet = (x, y, radius, color) => {
	radius = radius || 5;
	$.beginPath();
	$.arc(x, y, radius, 0, Math.PI * 2);
	$.fillStyle = color || 'black';
	$.fill();
};

document.onmousemove = (event) => {
	$.clearRect(0, 0, canvas.width, canvas.height);

	const bullets = [];
	for (let i = 0; i < 10; i++) {
		const x = Math.random() * canvas.width;
		const y = Math.random() * canvas.height;

		bullet(x, y);
		bullets.push({ x, y });
	}

	const x = event.clientX * canvas.width / WIDTH;
	const y = event.clientY * canvas.height / HEIGTH;
	const mainColor = bullets.includes({ x, y }) ? 'red' : 'black';
	bullet(x, y, 10, mainColor);
};