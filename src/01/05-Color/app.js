const newRandomColor = () => {
	return '#' + (Math.random() * 0xFFFFFF<<0).toString(16);
};

const el = document.getElementById('message');

el.addEventListener('click', () => {
	el.style['background-color'] = newRandomColor();
});