const checkPalindrome = (word) => {
	// Prepare String: Remove special char and lowercase it.
	word = word
		.toLowerCase()
		.split('')
		.filter((c) => {
			return c.charCodeAt(0) >= 97 && c.charCodeAt(0) <= 122;
		})
		.join('');

	for (let i = 0; i < word.length / 2; i++) {
		if (word.charAt(i) !== word.charAt(word.length - 1 - i)) {
			return false;
		}
	}

	return true;
};

const validateForm = () => { // eslint-disable-line
	const userInput = document.forms.pal.word.value;

	const res = checkPalindrome(userInput) ?
		'Palindrome!' :
		'Not a Palindrome';

	document.getElementById('message').innerText = res;
};