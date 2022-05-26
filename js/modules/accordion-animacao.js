export default class Accordion {
  constructor(list) {
    this.accordionList = document.querySelectorAll(list);
    this.activeClass = "ativo";
  }

  toggleAccordion(item) {
    item.classList.toggle("ativo");
    item.nextElementSibling.classList.toggle(this.activeClass);
  }

  //adiciona os eventos ao accordion
  addAccordioEvent() {
    this.accordionList.forEach((item) => {
      item.addEventListener("click", () => this.toggleAccordion(item));
    });
  }

  //Iniciar Função
  init() {
    if (this.accordionList.length) {
      //ativar primeiro item da lista accordion
      this.toggleAccordion(this.accordionList[0]);
      this.addAccordioEvent();
    }
  }
}
