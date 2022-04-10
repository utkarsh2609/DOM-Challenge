const starDisplay = document.getElementById('star-display');
const counter = document.getElementById('counter');

counter.innerText = 0;

class Star {
    constructor(count) {
        for(let i=0; i< count; i++) {
            let elem = document.createElement('i');
            elem.classList.add('fa');
            elem.classList.add('fa-star-o');
            elem.dataset.ratingVal = i;
            starDisplay.appendChild(elem);
        }
        starDisplay.addEventListener('click', this.Click);
    }

    Click(event) {
        console.log('clicked!', event.target.dataset);
        let rate = event.target.dataset;
        Fill(rate)
    }

    Fill(star) {
        console.log(star, starDisplay);
    }
}

new Star(5);

