//Handle image slider
const imageSlider = (currentImg) => {
    document.querySelector('.starbucks').src = currentImg;
}

//Handle circle color
const changeCircleColor = (color) => {
    document.querySelector('.circle').style.background = color;
}

//Handle menu button
const toggleMenu = () => {
    const menuToggle = document.querySelector('.toggle');
    const navigation = document.querySelector('.navigation');

    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
}