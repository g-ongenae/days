const chooseForMe = (stringChoices) => {
	const choices = stringChoices.split(',');
	
	randomChoice = Math.floor(Math.random() * choices.length);
	
	return "Do '" + choices[randomChoice].toUpperCase().trim() + "', or try again.";
}

const button = document.getElementById('button');
button.addEventListener('click', () => {
    document
        .getElementById('message')
        .innerText = chooseForMe(
            document.forms[0]['text'].value
        );
});