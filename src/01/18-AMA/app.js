const answer = [
	{
		question: 'old',
		answer: 'Too old for this.'
	},
	{
		question: 'age',
		answer: 'I was born in 1994.',
	},
	{
		question: 'color',
		answer: 'Green is my favorite color.',
	},
	{
		question: 'name',
		answer: 'My name is Guillaume.',
	},
	{
		question: 'school',
		answer: 'I\'m a student in apprenticeship.',
	},
	{
		question: 'test',
		answer: 'What are you doing?',
	}
];


const getRandomChitChat = () => {
	const chitchat = [
		'Hello', 'Hi', 'Hey', 'Yo', 'Yep', 'Yes', 'Yeah',
		'Cool', 'Funny', 'LOL', 'LMAO', 'Outch',
		'Be kind a little', 'Thanks', 'You\'re welcome',
		'Please', 'Here we go', 'Of course', 'Sure',
		'Never', 'What?', 'How is this possible?', 'Pardon?',
		'You kidding me!', 'Stop it', 'Shush yourself',
		'Seriously', 'Well', 'GOTTA GO FAST', 'Calm down',
		'Hurry up', ':-?', '...',
	];

	const random = Math.floor(Math.random() * chitchat.length);

	return chitchat[random];
};

const getAnswerOn = (question) => {
	let haveAnswer = null;
	let i = 0;

	do {
		if (question.includes(answer[i].question)) {
			haveAnswer = answer[i].answer;
		}

		i++;
	} while (!haveAnswer && i < answer.length);

	if (!haveAnswer) {
		haveAnswer = getRandomChitChat();
	}

	return haveAnswer;
};

const button = document.getElementById('button');
button.addEventListener('click', () => {
	document
		.getElementById('message')
		.innerText = getAnswerOn(document.forms[0].text.value);
});