const main = document.getElementsByTagName('main')[0];

const randomDiv = () => {
	const divs = main.childNodes;

	for (let i = 0; i < divs.length; i++) {
		if (divs[i].nodeName === '#text') continue;

		divs[i].setAttribute('style', `
            background-color: #${(Math.random() * 0xFFFFFF<<0).toString(16)};
            height: ${Math.ceil(Math.random() * 350)}px;
        `);
	}
};

// Init
randomDiv();

setInterval(randomDiv, 1000);