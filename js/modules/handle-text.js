export default function initHandleText() {
  const textP = document.querySelectorAll("p");
  const textDt = document.querySelectorAll("dt");
  const textDd = document.querySelectorAll("dd");
  const textLi = document.querySelectorAll("li");

  function handleText(event) {
    if (event.key === "t") {
      textP.forEach((text) => {
        text.classList.toggle("textomaior");
      });
      textDt.forEach((text) => {
        text.classList.toggle("textomaior");
      });
      textDd.forEach((text) => {
        text.classList.toggle("textomaior");
      });
      textLi.forEach((text) => {
        text.classList.toggle("textomaior");
      });
    }
  }

  window.addEventListener("keydown", handleText);
}
