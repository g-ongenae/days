const swearing = [
    'pute', 'putain', 'merde',
    'morbleu', 'crotte', 'caca',
    'saloperie', 'salaud', 'enculé',
    'connard', 'connasse', 'moustique',
    'sabord', 'branque', 'branquignolle',
];

const getInsult = () => {
    return swearing[
        Math.floor(Math.random() * (swearing.length - 1))
    ];
}

insults = getInsult();

// Insult longer than 5 words is disgraceful
numberOfWords = Math.floor(Math.random() * 5);
for (let i = 0; i < numberOfWords; i++) {
    insults += ' de ' + getInsult();
}

insults = 
    insults.substring(0,1).toUpperCase() +
    insults.substring(1) + '.';

document
    .getElementById('message')
    .innerText = insults;