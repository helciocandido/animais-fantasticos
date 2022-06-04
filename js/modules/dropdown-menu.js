import outsideClick from "./outsideclick.js";

export default class DropdownMenu {
  constructor(dropdownMenus, activeClass, events) {
    this.dropdownMenus = document.querySelectorAll(dropdownMenus);
    this.activeClass = activeClass;

    //Define touchstart e click como eventos padrão
    //de events caso o usúário não defina os argumentos
    if (events === undefined) this.events = ["touchstart", "click"];
    else this.events = events;

    this.activeDropdownMenu = this.activeDropdownMenu.bind(this);
  }

  //Ativa o dropdown menu e adiciona
  //a função que observa o click fora dele
  activeDropdownMenu(event) {
    event.preventDefault();
    const element = event.currentTarget;
    element.classList.add(this.activeClass);
    outsideClick(element, this.events, () => {
      element.classList.remove(this.activeClass);
    });
  }

  //Adiciona os eventos ao dropdown menu
  addDropdownManusEvent() {
    this.dropdownMenus.forEach((menu) => {
      this.events.forEach((userEvent) => {
        menu.addEventListener(userEvent, this.activeDropdownMenu);
      });
    });
  }

  init() {
    if (this.dropdownMenus.length) {
      this.addDropdownManusEvent();
    }
    return this;
  }
}
