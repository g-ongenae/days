const vowel = ['A', 'E', 'I', 'O', 'U', 'Y'];
const consonant = [
    'B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M',
    'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Z',
];

const random = (nbMax) => {
    return Math.floor(Math.random() * nbMax); 
}

const getLettersIn = (array, max) => {
    let m = "";

    max = random(max)

    for (let i = 0; i < max; i++) {
        m += array[random(array.length)];
    }

    return m;
}

const titleCase = (word) => {
    return word[0].toUpperCase() + 
        word.substring(1).toLowerCase();
}

const getMessage = () => {
    const size = random(15);
    let message = "";
    let consOrVow = random(2);

    while (message.length < size) {
        message += consOrVow == 1 ?
            getLettersIn(consonant, 3):
            getLettersIn(vowel, 4);

        consOrVow = ++consOrVow % 2;
    }

    return titleCase(message);
};

const setMessage = () => {
    document
        .getElementById('message')
        .innerHTML = getMessage();
};

setInterval(setMessage, 1000);

/**
 * TODO: 
 * - Add weigh on char.
 * - Use syllables instead of char.
 * - Use a false random.
 */
