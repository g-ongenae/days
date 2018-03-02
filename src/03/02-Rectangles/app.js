'use strict';

const canvas = document.getElementsByTagName('canvas')[0];
const ctx = canvas.getContext('2d');

const random = (max) => {
    return Math.floor(Math.random() * max);
};

const randomColor = () => {
    return '#' + (Math.random() * 0xFFFFFF<<0).toString(16);
};

const randomRect = (context, maxPos) => {
    context.beginPath();
    context.lineWidth = random(20);
    context.strokeStyle = randomColor();
    context.rect(
        random(maxPos.x),
        random(maxPos.y),
        random(maxPos.x),
        random(maxPos.y)
    );
    context.stroke();
};

randomRect(ctx, {x: 200, y: 100});

setInterval(() => {
    randomRect(ctx, {x: 200, y: 100});
}, 3000);