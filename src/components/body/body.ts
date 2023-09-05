export function init() {
  class Body extends HTMLElement {
    constructor() {
      super();
      this.render();
    }

    render() {
      var shadow = this.attachShadow({ mode: "open" });

      const textoOriginal = this.getAttribute("aria-label");

      var bodyEl = document.createElement("p");
      bodyEl.classList.add("body");
      bodyEl.textContent = textoOriginal;
      shadow.appendChild(bodyEl);

      var style = document.createElement("style");
      style.textContent = `
                      .body{
                          font-family: "Roboto";
                          font-size: 18px;
                          font-weight: 400;
                          color: #000000;
                          margin: 10px;
                          padding: 0;
                          margin-bottom: 30px;
                      }
                      `;
      shadow.appendChild(style);
    }
  }

  customElements.get("mi-body") || customElements.define("mi-body", Body);
}
