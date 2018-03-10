const timer = () => {
	const time = new Date();

	let minutes = time.getMinutes();
	minutes = minutes === 0 ? '' : minutes + ' min';

	let hours = time.getHours();
	if (hours === 0 || hours === 12) {
		hours = hours === 0 ? 'minuit' : 'midi';
		hours = minutes !== '' ? hours : hours + ' et ';
	} else {
		hours = minutes === '' ? hours + ' heures' : hours + ' h ';
	}

	document
		.getElementById('message')
		.innerText = 'Il est ' + hours + minutes + '.';
};

// Initialize timer.
timer();

setInterval(timer, 30000);