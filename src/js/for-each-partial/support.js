const buttonSlider = document.getElementById('support-slider');
const buttonSliderUp = document.getElementById('support-slider-up');
const supList = document.getElementById('support-list-id');

const lastItemIndex = 8;
const firstItemIndex = 0;

function showNextFund() {
  const lastItem = supList.children[lastItemIndex];
  lastItem.scrollIntoView({ behavior: 'smooth' });
  buttonSlider.style.display = 'none';
  buttonSliderUp.style.display = 'flex';
}

function showFirstFund() {
  const firstItem = supList.children[firstItemIndex];
  firstItem.scrollIntoView({ behavior: 'smooth' });
  buttonSlider.style.display = 'flex';
  buttonSliderUp.style.display = 'none';
}

buttonSlider.addEventListener('click', showNextFund);

buttonSliderUp.addEventListener('click', showFirstFund);
