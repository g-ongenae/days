const days = [
	{ // January
		'1': 'It\'s just another day!',
		'10': '<a href= "https://chloeluye.wordpress.com/2017/12/29/january-challenge-a-month-without-shopping/"> Stop your shopping </a>',
	},
	{ // February
		'1': '<a href="https://en.wikipedia.org/wiki/February_Album_Writing_Month"> Why don\'t you sing? </a>',
		'2': 'Joyeuse Chandeleur !',
		'14': 'Make Love and Share it',
		'29': 'Happy Leap Year!',
	},
	{ // March
		'1': 'Don\'t cut the crèpes',
		'2': '<a href="https://www.themarchcharge.com.au/"> Walk a little! </a>',
	},
	{ // April
		'1': 'It\'s not a prank, bro.', // It's a prank, bro.
		'2': '<a href="https://www.bustle.com/p/join-bustles-app-less-april-challenge-to-delete-your-dating-apps-for-a-month-47904"> Delete your apps </a>',
	},
	{ // May
		'1': 'Get some rest',
		'8': 'RIP',
		'21': 'Get some fresh air',
	},
	{ // June
		'1': '<a href="http://30daynoalcoholchallenge.com/"> Drink water </a>',
		'21': 'Go hear some good vibes',
	},
	{ // July
		'1': '<a href="http://www.sofobomo.com/"> Take some good pictures </a>',
		'14': 'One more revolution',
	},
	{ // August
		'1': 'Go get some panini',
		'12': 'Commit',
	},
	{ // September
		'1': 'It\'s the end of holiday. :p',
	},
	{ // October
		'1': '<a href="http://www.inktober.com/"> Draw something </a>',
		'8': '<a href="https://hacktoberfest.digitalocean.com/"> Contribute </a>',
		'30': '<a href="http://www.zerowastechallenge.org/"> Don\'t waste </a>',
	},
	{ // November
		'1': '<a href="https://nanowrimo.org/"> Write something </a>',
		'6': '<a href="https://www.reddit.com/r/NoFap/"> Go NoNut! </a>',
		'11': 'Make peace',
	},
	{ // December
		'3': 'Read a book',
	}
];

const getMessage = () => {
	const date = new Date();
	const message = days[date.getMonth()][date.getDate()];

	if (!message) {
		return 'Hello World';
	}

	return message;
};

document
	.getElementById('message')
	.innerHTML = getMessage();