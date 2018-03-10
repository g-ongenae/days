let i = 10;

const bar = document.getElementById('message');
const id = setInterval(() => {
	if (i === 100) {
		bar.innerText = 'Progress Complete';
		clearInterval(id);
	} else {
		bar.innerText = i + ' %';
		bar.setAttribute('style', 'width:' + i + '%;');
		i += Math.floor(Math.random() * 3);
	}
}, 1000);