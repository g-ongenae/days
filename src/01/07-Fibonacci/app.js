const fibonacciValues = {
    "0": 1,
    "1": 1,
};

const fibonacci = (number) => {
    if (number > 1000) // Greater is too much for JS
        number = 1000;

    if (fibonacciValues[number]) {
        return fibonacciValues[number];
    } else {
        if (number < 0) {
            // Should never happen
            throw new Error('No Negative Number');
        } else {
            const fibN = fibonacci(number - 1) + fibonacci(number - 2);
            fibonacciValues[number] = fibN;
            return fibN;
        }
    }
};

const updateMessage = (number) => {
    const el = document.getElementById('message');
    if (number < 0) { 
        el.innerHTML = 'Error: No Negative Number.';
    } else {
        el.innerHTML = "Fib(" + number + ") = " + fibonacci(number);
    }
};

let number = 0;

// Initialize
updateMessage(number);

const previous = document.getElementById('previous');
previous.addEventListener('click', () => { 
    updateMessage(--number);
});

const next = document.getElementById('next');
next.addEventListener('click', () => {
    updateMessage(++number);
});