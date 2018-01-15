const replaceVowel = (string) => {
    return string.split('').map((c) => {
        if (
            [
                'A', 'E', 'I', 'O', 'U', 'Y',
                'a', 'e', 'i', 'o', 'u', 'y'
            ].includes(c)
        ) {
            return 'oodle';
        } else {
            return c;
        }
    }).join('');
};

const button = document.getElementById('button');
button.addEventListener('click', () => {
    document
        .getElementById('message')
        .innerText = replaceVowel(
            document.forms[0]['text'].value
        );
});