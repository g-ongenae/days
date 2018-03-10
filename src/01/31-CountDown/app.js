let end = null;
let start = null;

const update = () => {
	const now = Date.now();

	let finish = false;
	let message = null;
	if (now - start >= end) {
		message = 'Time\'s up!';
		finish = true;
	} else {
		const minutes = parseInt((end - (now - start)) / 60000, 10);
		const seconds = Math.round((
			(
				(
					(end - (now - start)) / 60000) - minutes
			) * 6 / 10
		) * 100);

		message = (
			'Time remaining: ' +
            minutes + ' minutes ' +
            seconds + ' seconds.'
		);

		finish = false;
	}

	document
		.getElementById('message')
		.innerText = message;

	return finish;
};

document
	.getElementById('count')
	.addEventListener('click', () => {
		const form = document.forms[0].text.value;
		end = parseFloat(form);

		if (isNaN(end)) {
			document
				.getElementById('message')
				.innerText = 'Error: the time needs to be a number.';
			return;
		}
		start = Date.now();

		const endMinutes = parseInt(end, 10);
		end = (
			(endMinutes * 60) + // Convert 1m into 60s
            (((end - endMinutes) * 100) % 60) // Convert 0.1m into 1s
		) * 1000; // 1s into 1000ms

		const id = setInterval(() => {
			if (update()) {
				clearInterval(id);
			}
		}, 1000);
	});