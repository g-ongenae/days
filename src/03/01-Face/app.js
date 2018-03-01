const canvas = document.getElementsByTagName('canvas')[0];

const ctx = canvas.getContext('2d');

// Face
ctx.beginPath();
ctx.arc(150, 75, 50, 0, 2 * Math.PI);
ctx.fill();

// Smile
ctx.beginPath();
ctx.arc(150, 75, 25, Math.PI / 3, - 4 * Math.PI / 3);
ctx.fillStyle = 'white';
ctx.fill();

// Left eye
ctx.beginPath();
ctx.arc(125, 75, 5, 0, 2 * Math.PI);
ctx.fillStyle = 'white';
ctx.fill();

// Right eye
ctx.beginPath();
ctx.arc(175, 75, 5, 0, 2 * Math.PI);
ctx.fillStyle = 'white';
ctx.fill();

// Left hear
ctx.beginPath();
ctx.arc(100, 70, 10, 0, 2 * Math.PI);
ctx.fillStyle = 'black';
ctx.fill();

// Right hear
ctx.beginPath();
ctx.arc(200, 70, 10, 0, 2 * Math.PI);
ctx.fillStyle = 'black';
ctx.fill();