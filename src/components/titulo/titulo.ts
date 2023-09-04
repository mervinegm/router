export function init() {
  class Titulo extends HTMLElement {
    constructor() {
      super();
      this.render();
    }

    render() {
      var shadow = this.attachShadow({ mode: "open" });

      const textoOriginal = this.getAttribute("aria-label");

      var tituloEl = document.createElement("h1");
      tituloEl.classList.add("titulo");
      tituloEl.textContent = textoOriginal;
      shadow.appendChild(tituloEl);

      var style = document.createElement("style");
      style.textContent = `
                    .titulo{
                        font-family: "Roboto";
                        font-size: 52px;
                        font-weight: 700;
                        color: #000000;
                        margin: 0;
                        padding: 10px;
                    }
                    `;
      shadow.appendChild(style);
    }
  }

  customElements.define("mi-titulo", Titulo);
}
