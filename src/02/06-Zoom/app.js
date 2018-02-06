const h1 = document.getElementsByTagName('h1')[0];

const text = h1
	.innerText
	.split(' ')
	.map((s) => {
		return '<span>' + s + '</span>'
	})
	.join(' ');

h1.innerHTML = text;