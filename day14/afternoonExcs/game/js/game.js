

const hero = document.querySelector('.hero');
let x = 100;
let y = 500;
hero.style.top = y + 'px';
hero.style.left = x + 'px';

const ghost = document.querySelector('.ghost');
ghost.style.top = '200px';
ghost.style.left = '600px';

const treasure = document.querySelector('.treasure');
treasure.style.top = '0px';
treasure.style.left = '400px';

// function up() {
//     hero.style.top += '100px';
// }
// function down() {
//     hero.style.bottom += '100px';
// }
// function left() {
//     hero.style.left += '100px';
// }
// function right() {
//     hero.style.right += '100px';
// }





document.addEventListener('keydown', (e) => {
    console.log(e.code)
    if (e.code === 'ArrowUp' || e.code === 'KeyW') {
        y = y - 100;
        hero.style.top = y + 'px';
    } else if (e.code === 'ArrowDown' || e.code === 'KeyS') {
        y = y + 100;
        hero.style.top = y + 'px';
    } else if (e.code === 'ArrowLeft' || e.code === 'KeyA') {
        x = x - 100;
        hero.style.left = x + 'px';
    } else if (e.code === 'ArrowRight' || e.code === 'KeyD') {
        x = x + 100;
        hero.style.left = x + 'px';
    }
})