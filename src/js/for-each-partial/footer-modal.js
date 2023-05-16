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
