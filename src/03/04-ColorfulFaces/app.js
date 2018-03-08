'use strict';

const canvas = document.getElementsByTagName('canvas')[0];
const context = canvas.getContext('2d');

/*
 * Constantes
 */

const CENTER = {
    X: 150,
    Y: 75,
};

/*
 * Utils 
 */

const random = (min, max) => {
    if (!max) {
        max = min;
        min = 0;
    }

    if (isNaN(min) || isNaN(max)) {
        const error = new Error('Min & Max should be numbers.');
        error.inputs = { min, max };
        throw error;
    }

    if (min >= max) {
        const error = new Error('Min cannot be superior or equal to Max');
        error.inputs = { min, max };
        throw error;
    }

    return Math.floor(Math.random() * (max - min)) + min;
};

const randomColor = () => {
    return '#' + (Math.random() * 0xFFFFFF<<0).toString(16);
};

const arc = (x, y, radius, startAngle, endAngle) => {
    context.beginPath();
    context.fillStyle = randomColor();
    context.arc(x, y, radius, startAngle, endAngle);
    context.fill();
};

/*
 * Drawing
 */

const faces = (radius) => {
    arc(
        CENTER.X,
        CENTER.Y,
        radius,
        0,
        Math.PI * 2
    );
};

const innerArc = (x, faceRadius, radiusMin, radiusMax) => {
    // Calculate Range so mouth is in the faces
    const yRange = Math.sqrt(
        Math.pow(faceRadius, 2) - Math.pow(x - CENTER.X, 2)
    ) + CENTER.Y;

    const y = random(CENTER.Y, yRange);

    arc(
        x,
        y,
        random(radiusMin, radiusMax),
        Math.PI * Math.random(),
        Math.PI * Math.random()
    );
};

const mouth = (faceRadius) => {
    const x = random(CENTER.X - faceRadius, CENTER.X + faceRadius);
    innerArc(x, faceRadius, 5, 20);
};

const leftEye = (faceRadius) => {
    const x = random(CENTER.X - faceRadius, CENTER.X);
    innerArc(x, faceRadius, 1, 10);
};

const rightEye = (faceRadius) => {
    const x = random(CENTER.X, CENTER.X + faceRadius);
    innerArc(x, faceRadius, 1, 10);
};

/**
 * Init
 */

const draw = () => {
    // Clear Canvas
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Draw a random face
    const radius = random(25, 50);

    faces(radius);
    mouth(radius);
    leftEye(radius);
    rightEye(radius);
    // Missing a nose
};

draw();

canvas.addEventListener('click', draw);