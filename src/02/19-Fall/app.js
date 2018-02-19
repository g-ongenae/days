const h1 = document.getElementsByTagName('h1')[0];

const length = h1.innerHTML.length;

h1.innerHTML = h1
    .innerHTML
    .split('')
    .map((c) => {
        c = /\s/.test(c) ? '&nbsp;' : c;
        return `<span>` + c + `</span>`;
    })
    .join('');

const random = () => {
    return Math.ceil(Math.random() * 15);
};

const stylesheet = (() => {
	// Create the <style> tag
	const style = document.createElement('style');
    // WebKit hack :(
	style.appendChild(document.createTextNode(""));
	// Add the <style> element to the page
	document.head.appendChild(style);
	return style.sheet;
})();

// IE Compatibility
const insertRule = 'insertRule' in stylesheet ? 
    'insertRule' : 'addRule';

for (let i = 0; i < length; i++) {
    stylesheet[insertRule](
        `h1 > span:nth-child(` + i + `) {
            animation-delay: ` + random() + `s;
            animation-duration: ` + random() + `s;
        }`, stylesheet.cssRules.length
    );
}