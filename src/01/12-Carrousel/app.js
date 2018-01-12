const messages = [
    "Hello World!",
    "Bonjour, le monde.",
    "Hola Mundo",
    "Hallo Welt",
    "Saluton mondo",
    "salve mundi",
];

let pos = -1;
const getMessage = () => {
    return messages[++pos % messages.length];
};

const setMessage = () => {
    document
        .getElementById('message')
        .innerHTML = getMessage();
};

// Initialize
setMessage();

setInterval(setMessage, 2000);
