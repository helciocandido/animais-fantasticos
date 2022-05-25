export default function initModal() {
  const abrirBtn = document.querySelector('[data-modal="abrir"]');
  const fecharBtn = document.querySelector('[data-modal="fechar"]');
  const containerModal = document.querySelector('[data-modal="container"]');

  function toggleModal(event) {
    event.preventDefault();
    containerModal.classList.toggle("ativo");
  }

  function fecharModal(event) {
    if (event.target === this) containerModal.classList.toggle("ativo");
  }

  if (abrirBtn && fecharBtn && containerModal) {
    abrirBtn.addEventListener("click", toggleModal);
    fecharBtn.addEventListener("click", toggleModal);
    containerModal.addEventListener("click", fecharModal);
  }
}
