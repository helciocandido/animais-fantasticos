export default class HandleText {
  constructor(textSelector, textClass) {
    this.text = document.querySelectorAll(textSelector);
    this.textClass = textClass;
  }

  //Verifica se a tecla "t" ou "T" foi pressionada e adiciona a classe ao texto
  handleText(event) {
    if (event.key === "t" || event.key === "T") {
      this.text.forEach((text) => {
        text.classList.toggle(this.textClass);
      });
    }
  }

  //Adiciona o evento ao objeto window
  addHandleTextEvent(event) {
    window.addEventListener("keydown", () => this.handleText(window.event));
  }

  //Inicia verificando se existe texto a ser selecionado;
  init() {
    if (this.text.length) {
      this.addHandleTextEvent();
    }
  }
}
