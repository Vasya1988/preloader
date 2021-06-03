const elements = {
    test: document.querySelector('circle'),
    value: document.querySelector('#value'),
    percentTitle: document.querySelector('.percent-title')
}

const radius = elements.test.r.baseVal.value;
const circumference = 2*Math.PI*radius;

console.log(circumference);

elements.test.style.strokeDasharray = `${circumference} ${circumference}`;
elements.test.style.strokeDashoffset = circumference;

// radius = (width / 2) - (strokeWidth * 2) - Находим радиус

function setProgress(percent) {
    const offset = circumference - percent / 100 * circumference;

    elements.test.style.strokeDashoffset = offset;
}

elements.value.addEventListener('keydown', (item) => {
    if (item.keyCode === 13) {
        item.preventDefault()
        console.log(item.target.value);
        console.log();

        setProgress(item.target.value);
        elements.percentTitle.innerText = `${item.target.value}%`

    }
})