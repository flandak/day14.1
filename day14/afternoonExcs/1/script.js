// find an element on the page
let mybtn = document.getElementById('btn');
let on = document.querySelector('.on')
let off = document.querySelector('.off')
console.log(on)
// add an event listener, waiting for the 'click' event
mybtn.addEventListener('click', () => {
   setTimeout(() => {
        off.style.display = 'none';
        on.style.display = 'block';

        setTimeout(() => {
            off.style.display = 'block';
            on.style.display = 'none';
        }, 5000);

    }, 5000);
    // so something when the element is clicked
});
