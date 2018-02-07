const h1 = document
	.getElementsByTagName('h1')[0];

// Split char in spans
h1.innerHTML = h1
	.innerText
	.split('')
	.map((c) => {
		return '<span>' + c + '</span>';
	})
	.join('');