
let imageGallery = [["https://classes.codingbootcamp.cz/assets/classes/1428/london.jpg", "London"], ["https://classes.codingbootcamp.cz/assets/classes/1428/paris.jpg", "Paris"], ["https://classes.codingbootcamp.cz/assets/classes/1428/new-york.jpg", "New York"], ["https://classes.codingbootcamp.cz/assets/classes/1428/nova-scotia.jpg", "Nova Scotia"], ["https://classes.codingbootcamp.cz/assets/classes/1428/tokio.jpg", "Tokio"], ["https://classes.codingbootcamp.cz/assets/classes/1428/venice.jpg", "Venice"]]

// const gallery = document.querySelector('.gallery');

// arr.forEach((item) => {
//     gallery.createElement('div').innerHTML;
//     console.log(item)
// })

// let empty_element = document.querySelector(".gallery");
// imageGallery.forEach((element, index) => {
//     empty_element.innerHTML +=
//         '<div class="image"><img src="' +
//         element[0] +
//         '" alt="' +
//         element[1] +
//         '"><div class="image__description">' +
//         element[1] +
//         "</div>";
// });
let gallery = document.querySelector(".gallery");
imageGallery.forEach(image => {
    gallery.innerHTML += 
    `<div class="image">
        <img src="${image[0]}" alt="${image[1]}">
        <div class="image__description">${image[1]}</div>
    </div>`
})