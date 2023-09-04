export function init() {
  class Button extends HTMLElement {
    constructor() {
      super();
      this.render();
    }

    render() {
      var shadow = this.attachShadow({ mode: "open" });

      const textoOriginal = this.getAttribute("aria-label");

      var buttonEL = document.createElement("button");
      buttonEL.classList.add("button");
      buttonEL.textContent = textoOriginal;
      shadow.appendChild(buttonEL);

      var style = document.createElement("style");
      style.textContent = `
                      .button{
                        Width: calc(100% - 10px);
                        Height: 55px;
                        background-color: turquoise;
                        margin-top: 20px;
                        border: none;
                        font-family: "Roboto";
                        font-size: 22px;
                        font-weight: 500;
                        color: #000000;
                      }
                      `;
      shadow.appendChild(style);

      if (this.children[0]) {
        buttonEL.appendChild(this.children[0]);
      }
    }
  }

  customElements.define("mi-button", Button);
}
