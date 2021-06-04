export default function runPercent() {
    
    const markup = `
    <div id="loading-round">
    <div class="load-frame">
        <svg>
            <circle cx='70' cy='70' r='60'></circle>
        </svg>
        <span class="percent-title">0%</span>
    </div>

    <form class="currentValue">
        <input id='value' placeholder="Введите процент" type="text">
    </form>
    </div>
    `;

    // Разметка
    function renderMarkup() {
    return new Promise((resolve, reject) => {
        document.querySelector('body').innerHTML = markup;
        resolve();
    })
    };

    // radius = (width / 2) - (strokeWidth * 2) - Находим радиус

    // Изменение процента
    function setPercent () {
        return new Promise((resolve, reject) => {
            const elements = {
                test: document.querySelector('circle'),
                value: document.querySelector('#value'),
                percentTitle: document.querySelector('.percent-title')
            }

            const radius = elements.test.r.baseVal.value;
            const circumference = 2*Math.PI*radius;

            elements.test.style.strokeDasharray = `${circumference} ${circumference}`;
            elements.test.style.strokeDashoffset = circumference;

            elements.value.addEventListener('input', (item) => {
                // if (item.keyCode === 13) {
                //     item.preventDefault()
                //     console.log(item.target.value);
                //     console.log();

<<<<<<< HEAD
                //     setProgress(item.target.value);
                //     elements.percentTitle.innerText = `${item.target.value}%`;
                // }

                setProgress(item.target.value, circumference, elements.test);
                    elements.percentTitle.innerText = `${item.target.value}%`;

            })

            resolve(circumference);
        })
    }

    // Ф-я изменения процента
    function setProgress(percent, circumference, element) {
        const offset = circumference - percent / 100 * circumference;
        element.style.strokeDashoffset = offset;
    }

    async function render() {
        await renderMarkup();
        await setPercent();
    }
    render()
}
runPercent()
=======
elements.value.addEventListener('keydown', (item) => {
    if (item.keyCode === 13) {
        item.preventDefault()
        console.log(item.target.value);
        console.log();
    }
    setProgress(item.target.value);
    elements.percentTitle.innerText = `${item.target.value}%`
})
>>>>>>> eb3adfe9166864c3ef4ab1c767c549b91d6af216
