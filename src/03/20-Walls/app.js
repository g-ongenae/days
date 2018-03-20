'use strict';

const canvas = document.getElementsByTagName('canvas')[0];
const $ = canvas.getContext('2d');

canvas.width = canvas.clientWidth;
canvas.height = canvas.clientHeight;

const MAX_SIZE = canvas.height * 90 / 100,
	RADIUS = 10;

let LEVEL_STATE = 0,
	NEW_OBSTACLE = 180,
	OBSTACLES = [],
	SLEEP = 3 * 60,
	SPEED = 1,
	USER_POS = canvas.height / 2;

document.onmousemove = (event) => {
	USER_POS = event.clientY * canvas.height / window.innerHeight;
};

const createObstacle = () => {
	const x = canvas.width;
	const yDown = canvas.height;
	const yUp = canvas.height - Math.ceil(Math.random() * MAX_SIZE);
	OBSTACLES.push({ x, yDown, yUp });
};

const clearObstacle = () => {
	OBSTACLES = OBSTACLES.filter((o) => o.x > 0);
};

const hitTheObstacle = () => {
	return !OBSTACLES.every((o) => {
		return !(o.x >= (canvas.width / 2) - RADIUS && o.x <= (canvas.width / 2) + RADIUS && o.yUp < USER_POS && o.yDown > USER_POS);
	});
};

const forwardObstacle = () => {
	OBSTACLES = OBSTACLES.map((o) => {
		o.x -= SPEED;
		return o;
	});
};

const accelerate = () => {
	if (LEVEL_STATE <= 0) {
		SPEED++;
		SLEEP--;
		LEVEL_STATE = 10 * 60;
	} else {
		LEVEL_STATE--;
	}
};

const drawObs = (obs) => {
	$.beginPath();
	$.moveTo(obs.x, obs.yDown);
	$.lineTo(obs.x, obs.yUp);
	$.lineWidth = 5;
	$.strokeStyle = 'black';
	$.stroke();
};

const drawUser = () => {
	$.beginPath();
	$.arc(canvas.width / 2, USER_POS, RADIUS, 0, Math.PI * 2);
	$.fillStyle = 'black';
	$.fill();
};

const lost = (message) => {
	$.beginPath();
	$.rect(0, 0, canvas.width, canvas.height);
	$.fillStyle = 'lightblue';
	$.fill();

	$.fillStyle = 'black';
	$.font = '25px monospace';
	$.fillText(message, canvas.width / 5, canvas.height / 2);
};

const draw = () => {
	$.clearRect(0, 0, canvas.width, canvas.height);

	if (SLEEP === 0) {
		return lost('WOW, Bravo!');
	}

	if (SLEEP - NEW_OBSTACLE === 0) {
		createObstacle();
		NEW_OBSTACLE = 0;
	} else {
		NEW_OBSTACLE++;
	}

	forwardObstacle();
	clearObstacle();
	OBSTACLES.forEach(drawObs);
	drawUser();
	accelerate();

	if (hitTheObstacle()) {
		return lost('You lost.');
	}

	return requestAnimationFrame(draw);
};

draw();