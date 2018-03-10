document.onmousemove = function onmousemove (event) {
	document
		.getElementById('message')
		.innerText = `(${event.clientX}, ${event.clientY})`;
};