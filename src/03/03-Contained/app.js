'use strict';

const canvas = document.getElementsByTagName('canvas')[0];
const context = canvas.getContext('2d');

const randomColor = () => {
    return '#' + (Math.random() * 0xFFFFFF<<0).toString(16);
};

const random = (min, max) => {
    if (!max) {
        max = min;
        min = 0;
    }

    if (min > max) {
        const error = new Error('Min cannot be superior to Max');
        error.inputs = { min, max };
        throw error;
    }

    const rand = Math.floor(Math.random() * max);
    return (isNaN(rand) || rand < min) ? min : rand;
};

const rect = (x, y, width, height) => {
    context.beginPath();
    context.lineWidth = random(5);
    context.strokeStyle = randomColor();
    context.rect(x, y, width, height);
    context.stroke();
};

const last = [{
    x: 0,
    y: 0,
    a: 300,
    b: 150, 
}];

const nextRect = (i) => {
    last[i] = {};

    // Set and save origin
    last[i].x = random(last[i-1].x, last[i-1].a);
    last[i].y = random(last[i-1].y, last[i-1].b);

    // Set width and height
    const width = random(last[i-1].a - last[i].x);
    const height = random(last[i-1].b - last[i].y);

    // Save width and height as opposite point
    last[i].a = last[i].x + width;
    last[i].b = last[i].y + height;

    // Draw rectangle
    rect(
        last[i].x,
        last[i].y,
        width,
        height
    );
};

let I = 1;
nextRect(I);

const id = setInterval(() => {
    if (I < 10) {
        nextRect(++I);
    } else {
        clearInterval(id);
    }
}, 3000);