const calculateDaysOnEarth = (string) => {
	const pattern = new RegExp(/^[\d]{2}\/[\d]{2}\/[\d]{4}$/);
	if (!pattern.test(string)) {
		return 'Invalid Date Format.';
	}

	let message = '';

	const birth = new Date(
		string.substring(6),
		parseInt(string.substring(3, 5), 10) - 1,
		string.substring(0, 2)
	);
	const today = new Date();

	if (
		birth.getDate() === today.getDate() &&
        birth.getMonth() === today.getMonth()
	) {
		message = 'Happy Birthday !\n';
	}

	let nbDays = 0;
	nbDays += (today.getFullYear() - birth.getFullYear()) * 365;
	nbDays += (today.getMonth() - birth.getMonth()) * 30;
	nbDays += (today.getDate() - birth.getDate());

	return message + 'You passed approx. ' + nbDays + ' days on Earth.';
};

const button = document.getElementById('button');
button.addEventListener('click', () => {
	document
		.getElementById('message')
		.innerText = calculateDaysOnEarth(document.forms[0].text.value);
});