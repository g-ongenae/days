document.onclick = function onclick (event) {
	document
		.getElementById('message')
		.innerText = `You clicked on (${event.clientX}, ${event.clientY})!`;
};