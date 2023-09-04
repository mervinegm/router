export function init() {
  class Header extends HTMLElement {
    constructor() {
      super();
      this.render();
    }

    render() {
      var shadow = this.attachShadow({ mode: "open" });

      var headerDivEl = document.createElement("div");
      headerDivEl.classList.add("header");
      shadow.appendChild(headerDivEl);

      var style = document.createElement("style");
      style.textContent = `
                .header{
                  width: auto;
                  height: 60px;
                  background-color: pink;
                  margin: 0;
                  padding: 0;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                }
                `;
      shadow.appendChild(style);

      if (this.children[0]) {
        headerDivEl.appendChild(this.children[0]);
      }
    }
  }

  customElements.define("mi-header", Header);
}
