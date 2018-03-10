const reverseWordInString = (string) => {
	return string.split(' ')
		.map((word) => {
			// Reverse word
			word = word.split('')
				.reverse()
				.join('');
			// Put the word in title case
			return word.charAt(0).toUpperCase() +
                word.substring(1).toLowerCase();
		})
		.join(' ');
};

const message = document.getElementById('message');
const forms = document.forms[0];
const reverse = document.getElementById('reverse');
reverse.addEventListener('click', () => {
	message.innerText = reverseWordInString(forms.text.value);
});