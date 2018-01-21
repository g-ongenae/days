const memory = [];

const forms = document.forms[0];
const message = document.getElementById('message');

const save = document.getElementById('save');
save.addEventListener('click', () => {
    const text = forms['text'].value;
    memory.push(text);
    forms.reset();
    message.innerText = 'I\'ll remember!';
});

const find = (search) => {
    let i = 0;

    while (i < memory.length) {
        if (memory[i].includes(search)) {
            return i;
        }

        i++;
    }

    return -1;
};

const load = document.getElementById('load');
load.addEventListener('click', () => {
    const text = forms['text'].value;
    forms.reset();

    const id = find(text);
    message.innerText = id >= 0 ? 
        'I remember: ' + memory[id] :
        'I don\'t remember: ' + text;
});