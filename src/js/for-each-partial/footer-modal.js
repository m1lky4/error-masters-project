const modalFooter = document.getElementById('modal-footer');
const openModalFooterBtn = document.getElementById('open-modal-footer-btn');
const closeModalFooterBtn =
  document.getElementsByClassName('close-modal-footer')[0];

openModalFooterBtn.onclick = function () {
  modalFooter.style.display = 'block';
};

closeModalFooterBtn.onclick = function () {
  modalFooter.style.display = 'none';
};

window.onclick = function (event) {
  if (event.target == modalFooter) {
    modalFooter.style.display = 'none';
  }
};

window.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    modalFooter.style.display = 'none';
  }
});

function showFooterOnScroll() {
  const footer = document.querySelector('footer');
  const scrollThreshold = 3000; // Adjust the scroll threshold as needed

  window.addEventListener('scroll', function () {
    if (window.pageYOffset > scrollThreshold) {
      footer.classList.add('main-footer');
    } else {
      footer.classList.remove('main-footer');
    }
  });
}

window.addEventListener('DOMContentLoaded', showFooterOnScroll);
