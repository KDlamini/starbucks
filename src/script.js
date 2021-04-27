//Handle image slider
const imageSlider = (currentImg) => {
    document.querySelector('.starbucks').src = currentImg;
}

//Handle circle color
const changeCircleColor = (color) => {
    document.querySelector('.circle').style.background = color;
}