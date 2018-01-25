const removeZeroAtFirst = (number) => {
    if (number[0] != 0) {
        return number;
    } else {
        return removeZeroAtFirst(number.slice(1));
    }
};

const generateBigInt = (size) => {
    let number = [];

    for (let i = 0; i < size; i++) {
        number.push(Math.floor(Math.random() * 10));
    }

    return removeZeroAtFirst(number.join(''));
};

const forms = document.forms[0];

document
    .getElementById('do')
    .addEventListener('click', () => {
        const number = parseInt(forms['number'].value);

        const message = isNaN(number) || number < 0 ? 
            'How did you do that?' :
            generateBigInt(number);

        document
            .getElementById('message')
            .innerText = message;
    });