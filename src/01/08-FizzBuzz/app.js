let number = -1;

const updateMessage = (boolean) => {
	const el = document.getElementById('message');
	if (boolean) {
		el.innerHTML = ++number;
	} else {
		el.innerHTML = `Error. Score: ${number}.`;
		number = -1;
	}
};

// Initialize
updateMessage(true);

const fizz = document.getElementById('fizz');
fizz.addEventListener('click', () => {
	updateMessage((number % 3) === 0 && (number % 5) !== 0);
});

const fizzbuzz = document.getElementById('fizzbuzz');
fizzbuzz.addEventListener('click', () => {
	updateMessage((number % 3) === 0 && (number % 5) === 0);
});

const buzz = document.getElementById('buzz');
buzz.addEventListener('click', () => {
	updateMessage((number % 3) !== 0 && (number % 5) === 0);
});

setInterval(() => {
	updateMessage((number % 3) !== 0 && (number % 5) !== 0);
}, 3000);