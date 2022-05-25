import outsideClick from "./outsideclick.js";

export default function initDropDownMenu() {
  const dropdownMenus = document.querySelectorAll("[data-dropdown]");

  function handleClick(event) {
    event.preventDefault();
    menu.classList.add("active");
    outsideClick(menu, ["touchstart", "click"], () => {
      menu.classList.remove("active");
    });
  }

  dropdownMenus.forEach((menu) => {
    ["touchstart", "click"].forEach((userEvent) => {
      menu.addEventListener(userEvent, handleClick);
    });
  });
}
