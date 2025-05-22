//Question 3
//randomly generate a number between 0 and 255 for red, green, and blue and return the rgb value
function getRandomRGB() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${ r }, ${ g }, ${ b })`;
}
console.log(getRandomRGB());
