const arabic = [
    1000,
    500,
    100,
    50,
    10,
    5,
    1,
]

const roman = [
    'M', // 1000
    'D', // 500
    'C', // 100
    'L', // 50
    'X', // 10
    'V', // 5
    'I', // 1
];

const printMessage = (string) => {
    document
        .getElementById('message')
        .innerText = string;
};

const checkRoman = (input) => {
    input = input
        .split('')
        .map((r) => {
            return roman.includes(r);
        });

    if (input.includes(false)) {
        printMessage('Invalid roman number!');
        return false;
    }

    return true;
};

const convert = (input) => {
    input = input
        .split('')
        .map((r) => {
            return arabic[roman.indexOf(r)];
        });

    res = input[input.length - 1];
    for (let i = input.length - 2; i >= 0; i--) {
        if (input[i] < input[i+1]) {
            res -= input[i];
        } else {
            res += input[i];
        }
    }

    return res;
};

const forms = document.forms[0];

document
    .getElementById('convert')
    .addEventListener('click', () => {
        const input = forms['text'].value;
        if (!input) {
            printMessage('Please enter a roman number.');
        } else if (checkRoman(input)) {
            printMessage(convert(input));
        }
    });