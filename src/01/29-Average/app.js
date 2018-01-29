function Memory () {
    this.index = 0;
    this.numbers = [];
    this.average = 0;
    this.sum = 0;

    this.concat = (array) => {
        this.numbers = this.numbers.concat(array);
    };

    this.length = () => {
        return this.numbers.length;
    };

    this.calculate = (inputs) => {
        this.concat(inputs);

        while (this.index < this.length()) {
            this.sum = this.sum + this.numbers[this.index];
            this.index = this.index + 1;
        }

        this.average = this.sum / this.length();
    };
};

const memory = new Memory();

const createAlert = (text) => {
    const alertDiv = document.getElementById('alert');
    alertDiv.setAttribute('style', 'display:block;');
    alertDiv.innerText = text;
    setTimeout(() => {
        alertDiv.setAttribute('style', 'display:none;');
    }, 3000); 
};

const removeSpace = (n) => {
    return n.replace(/\s+/g, '');
};

document
    .getElementById('calculate')
    .addEventListener('click', () => {
        let inputs = document.forms[0].text.value;
        
        inputs = inputs
            .split(',')
            .map((n) => {
                const nParsed = parseFloat(removeSpace(n));
                if (isNaN(nParsed) || (nParsed + '') !== removeSpace(n)) {
                    createAlert('Error: ' + n + ' is not a number.');
                    return null;
                } else {
                    return nParsed;
                }
            });
        
        memory.calculate(inputs);
        document.forms[0].reset();

        const message = document.getElementById('message');
        message.innerText = 'The average is now: ' + memory.average + '.'
            
    });

const changePlaceHolder = () => {
    const random = (size) => {
        return Math.floor(Math.random() * size);
    }

    const lines = [
        'Add more numbers, here.',
        'Separate numbers with comma.',
        (memory.average + 1) + ': I\'m more than your average.'
    ];

    document.forms[0].text.placeholder = lines[random(lines.length)];
};

setInterval(() => {
    changePlaceHolder();
}, 5000);