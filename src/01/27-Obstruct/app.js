// Functions
const obstruct = (text) => {
    if (text == "") {
        return "Error: No text to obstruct.";
    }

    text = text
        .split('')
        .map((c) => {
            // TODO: Create a more complicated function to obstruct.
            return String.fromCharCode((c.charCodeAt(0) + 128) % 256);
        })
        .join('');

    return text;
};

const reveal = (text) => {
    if (text == "Error: No text to obstruct." || text == "Obstruct") {
        return "Error: No text to reveal.";
    }

    text = text
        .split('')
        .map((c) => {
            // TODO: Idem.
            return String.fromCharCode((c.charCodeAt(0) + 128) % 256);
        })
        .join('');

    return text;
};

// DOM Manipulation
const message = document.getElementById('message');
const form = document.forms[0];

document
    .getElementById('obstruct')
    .addEventListener('click', () => {
        message.innerText = obstruct(form.text.value);
    });

document
    .getElementById('reveal')
    .addEventListener('click', () => {
         message.innerText = reveal(message.innerText);
    });