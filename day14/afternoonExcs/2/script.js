
// find an element on the page

// find an element on the page
let button = document.getElementById('button');

// add an event listener, waiting for the 'click' event
button.addEventListener('click', () => {
    let minutes = document.getElementById('min').value;
    let seconds = document.getElementById('sec').value;
    let time = Number(minutes * 60) + Number(seconds) + 1;
    let interval = setInterval(() => {
        if (time == 0) {
            clearInterval(interval)

        } else {

            time = time - 1;
            console.log(time)
        }
    }, 2000);

});