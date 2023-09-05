export function init() {
  class Large extends HTMLElement {
    constructor() {
      super();
      this.render();
    }

    render() {
      var shadow = this.attachShadow({ mode: "open" });

      const textoOriginal = this.getAttribute("aria-label");

      var largeTextpEl = document.createElement("div");
      largeTextpEl.classList.add("large");
      largeTextpEl.textContent = textoOriginal;
      shadow.appendChild(largeTextpEl);

      var style = document.createElement("style");
      style.textContent = `
                  .large{
                      font-family: "Roboto";
                      font-size: 22px;
                      font-weight: 500;
                      color: #000000;
                      margin: 0;
                      padding: 0;
                  }
                  `;
      shadow.appendChild(style);

      const clase = this.getAttribute("class");

      if (clase == "lt2") {
        largeTextpEl.style.margin = "50px 30px 50px 30px";
      }
    }
  }

  customElements.get("mi-large") || customElements.define("mi-large", Large);
}
