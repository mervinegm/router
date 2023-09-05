export function init() {
  class Subtitulo extends HTMLElement {
    constructor() {
      super();
      this.render();
    }

    render() {
      var shadow = this.attachShadow({ mode: "open" });

      const textoOriginal = this.getAttribute("aria-label");

      var subtituloEl = document.createElement("h1");
      subtituloEl.classList.add("subtitulo");
      subtituloEl.textContent = textoOriginal;
      shadow.appendChild(subtituloEl);

      var style = document.createElement("style");
      style.textContent = `
                      .subtitulo{
                          font-family: "Roboto";
                          font-size: 38px;
                          font-weight: 700;
                          color: #000000;
                          margin: 10px;
                          padding: 0;
                          margin-top: 40px;
                      }
                      `;
      shadow.appendChild(style);
    }
  }

  customElements.get("mi-subtitulo") ||
    customElements.define("mi-subtitulo", Subtitulo);
}
