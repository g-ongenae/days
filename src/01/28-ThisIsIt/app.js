const subject = [
    'This', 'That', 'It', 'Such',
];

const verb = [
    'does', 'is', 'has',
];

const comp = [
    'never', 'it', 'a no go', 'ok',
];

const name = [
    'Tim', 'Timmy', 'Toto', 'Bob', 'Lennon',
    'Léandre', 'Mark', 'Billy', 'Josh', 'You',
];

const random = (length) => {
    return Math.floor(Math.random() * length);
}; 

const randomSentence = () => {
    return (
        subject[random(subject.length)] + ' ' +
        verb[random(verb.length)] + ' ' +
        comp[random(comp.length)] + ', ' + 
        name[random(name.length)] + '.'
    )
};

const el = document.getElementById('message');

el.addEventListener('click', () => {
    el.innerText = randomSentence();
});