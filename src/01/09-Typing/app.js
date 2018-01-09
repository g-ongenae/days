// Don't pronouce this next line with a french accent
const typer = (message) => {
    message = message
        .split('')
        .reverse();

    const el = document.getElementById('message');

    const id = setInterval(() => {
        let innerText = el.innerText;
        innerText = innerText.slice(0, -1);

        if (message.length == 0) {
            el.innerText = innerText;
            clearInterval(id);
        } else {
            el.innerText = [
                innerText,
                message.pop(),
                "|"
            ].join('');
        }
    }, Math.floor(Math.random() * 1500));
};

typer("Bonjour, comment allez-vous ?");