const section = document.getElementsByTagName('section')[0];

const random = (n) => {
	return Math.floor(Math.random() * n);
};

for (let i = 0; i < 50; i++) {
	const div = document.createElement('div');
	div.setAttribute('style', `
		top: ${random(350)}px;
		left: ${random(500)}px;
	`);
	section.appendChild(div);
}