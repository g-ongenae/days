let nbHintsLeft = 5;
let nbAttemptLeft = 5;

let numberToFind = null;

const random = (max) => {
	return Math.floor(Math.random() * max);
};

const newTry = () => {
	nbAttemptLeft = 5;
	nbHintsLeft = 5;
	numberToFind = random(100);
};

const primeNumbers = [2, 3, 5, 7, 11, 13, 17];
const isPrime = (n) => {
	if (primeNumbers.indexOf(n) !== -1) {
		return true;
	}

	let i = n;

	do {
		i--;
		if (n % i === 0) {
			return false;
		}
	} while (i > 2);

	primeNumbers.push(n);
	return true;
};

const hintTypes = [
	{
		message: 'The number is even: ',
		math: (n) => { return n % 2 === 0; },
	},
	{
		message: 'The number is a multiple of 3: ',
		math: (n) => { return n % 3 === 0; },
	},
	{
		message: 'The number is greater than 5O: ',
		math: (n) => { return n > 50; },
	},
	{
		message: 'The number is prime: ',
		math: (n) => { return isPrime(n); },
	},
	{
		message: 'The length of his square is: ',
		math: (n) => { return Math.pow(n, 2).toString().length; }
	}
];

const message = document.getElementById('message');

const hints = document.getElementById('hints');
hints.addEventListener('click', () => {
	if (nbHintsLeft > 0) {
		nbHintsLeft--;
		const r = random(hintTypes.length);
		message.innerText = hintTypes[r].message + hintTypes[r].math(numberToFind);
	} else {
		message.innerText = 'No more hints left!';
	}
});

const forms = document.forms[0];
const solve = document.getElementById('solve');
solve.addEventListener('click', () => {
	if (nbAttemptLeft > 0) {
		nbAttemptLeft--;
		if (numberToFind === parseInt(forms.text.value, 10)) {
			message.innerText = 'Bravo, you find the number ' + numberToFind;
			newTry();
		} else {
			message.innerText = 'Not the right number, try again.';
		}
	} else {
		message.innerText = 'No more attemps left! The number was ' + numberToFind + '. New try !';
		newTry();
	}
});

newTry();