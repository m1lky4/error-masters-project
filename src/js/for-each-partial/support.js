const buttonSlider = document.getElementById('support-slider');
const buttonSliderUp = document.getElementById('support-slider-up');
const supList = document.getElementById('support-list-id');

const liItemHeight = 59;
let scrollHeight = 0;

function showNextFund() {
    scrollHeight += liItemHeight
    supList.scrollTop = scrollHeight;
if (supList.scrollHeight - supList.clientHeight < scrollHeight) {
    buttonSlider.style.display = 'none';
    buttonSliderUp.style.display = 'flex';
    scrollHeight = 0;
}}

function showFirstFund() {
    supList.scrollTop = 0;
    buttonSlider.style.display = 'flex';
    buttonSliderUp.style.display = 'none';
}

buttonSlider.addEventListener('click', showNextFund);
buttonSliderUp.addEventListener('click', showFirstFund);