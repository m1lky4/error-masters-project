const modalFooter = document.getElementById('modal-footer');
const openModalFooterBtn = document.getElementById('open-modal-footer-btn');
const closeModalFooterBtn =
  document.getElementsByClassName('close-modal-footer')[0];

openModalFooterBtn.onclick = function () {
  modalFooter.style.display = 'block';
  document.body.classList.add('modal-open');
};

closeModalFooterBtn.onclick = function () {
  modalFooter.style.display = 'none';
  document.body.classList.remove('modal-open');
};

window.onclick = function (event) {
  if (event.target == modalFooter) {
    modalFooter.style.display = 'none';
    document.body.classList.remove('modal-open');
  }
};

window.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    modalFooter.style.display = 'none';
    document.body.classList.remove('modal-open');
  }
});

// function showFooterOnScroll() {
//   const footer = document.querySelector('footer');
//   const scrollThreshold = 200; // Adjust the scroll threshold as needed

//   window.addEventListener('scroll', function () {
//     if (window.pageYOffset > scrollThreshold) {
//       footer.classList.add('main-footer');
//     } else {
//       footer.classList.remove('main-footer');
//     }
//   });
// }

// window.addEventListener('DOMContentLoaded', showFooterOnScroll);
