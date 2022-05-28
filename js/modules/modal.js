export default class Modal {
  constructor(openBtn, closeBtn, containerModal, modalClass) {
    this.abrirBtn = document.querySelector(openBtn);
    this.fecharBtn = document.querySelector(closeBtn);
    this.containerModal = document.querySelector(containerModal);
    this.modalClass = modalClass;
    //bind this ao callback
    //para fazer referencia ao objeto
    //da classe
    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.fecharModal = this.fecharModal.bind(this);
  }

  //adiciona ou retira a classe do modal
  toggleModal() {
    this.containerModal.classList.toggle(this.modalClass);
  }

  //adiciona o evento de toggle ao modal
  eventToggleModal(event) {
    event.preventDefault();
    this.toggleModal();
  }

  //fecha o modal ao clicar no X ou fora
  fecharModal(event) {
    if (event.target === this.containerModal) this.toggleModal();
  }

  //adiciona os eventos aos elementos do modal
  addModalEvents() {
    this.abrirBtn.addEventListener("click", this.eventToggleModal);
    this.fecharBtn.addEventListener("click", this.eventToggleModal);
    this.containerModal.addEventListener("click", this.fecharModal);
  }

  init() {
    if (this.abrirBtn && this.fecharBtn && this.containerModal) {
      this.addModalEvents();
    }
    return this;
  }
}
