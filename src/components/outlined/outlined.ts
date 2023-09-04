export function init() {
  class Outlined extends HTMLElement {
    constructor() {
      super();
      this.render();
    }

    render() {
      var shadow = this.attachShadow({ mode: "open" });

      const textoOriginal = this.getAttribute("aria-label");

      var outlinedEl = document.createElement("button");
      outlinedEl.classList.add("outlined");
      outlinedEl.textContent = textoOriginal;
      shadow.appendChild(outlinedEl);

      var style = document.createElement("style");
      style.textContent = `
                        .outlined{
                          Width: calc(100% - 10px);;
                          Height: 55px;
                          background-color: beige;
                          margin-top: 60px;
                          border: solid 2px black;
                          font-family: "Roboto";
                          font-size: 22px;
                          font-weight: 500;
                          color: #000000;
                        }
                        `;
      shadow.appendChild(style);

      if (this.children[0]) {
        outlinedEl.appendChild(this.children[0]);
      }
    }
  }

  customElements.define("mi-outlined", Outlined);
}
