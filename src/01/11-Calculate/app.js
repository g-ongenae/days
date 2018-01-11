const message = document.getElementById('message');

const randomValue = (n) => {
    return Math.floor(
        Math.random() * n
    );
};

let desiredResult;
const calculation = [];
const op = ['+', '-', '*', '/', '%'];

const promptNewCalculation = () => {
    const val1 = randomValue(100);
    const val2 = randomValue(100);
    const opUsed = op[randomValue(op.length)];
    message.innerText = val1 + ' ' + opUsed + ' ' + val2;
    desiredResult = eval(val1 + opUsed + val2);

    calculation.push({
        val1,
        val2,
        opUsed,
        calcul: val1 + opUsed + val2,
        desiredResult,
        userResult: null,
    });
};

promptNewCalculation();

const button = document.getElementById('button');
button.addEventListener('click', () => {
    const userResult = document.forms['calcul']['result'].value;
    calculation[calculation.length - 1].userResult = userResult;
    message.innerText = desiredResult === parseInt(userResult) ?
        'Bravo !' : 'Oups, the result was ' + desiredResult;
    
    setTimeout(promptNewCalculation, 2000);
});