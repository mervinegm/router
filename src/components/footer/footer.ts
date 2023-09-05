export function init() {
  class Footer extends HTMLElement {
    constructor() {
      super();
      this.render();
    }

    render() {
      var shadow = this.attachShadow({ mode: "open" });

      var footerDivEl = document.createElement("div");
      footerDivEl.classList.add("footer");
      shadow.appendChild(footerDivEl);

      var style = document.createElement("style");
      style.textContent = `
                  .footer{
                    width: auto;
                    min-height: 233px;
                    max-height: 100vmax;
                    background-color: cadetblue;
                    margin: 0;
                    padding: 0;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin-top:50px
                  }
                  `;
      shadow.appendChild(style);

      if (this.children[0]) {
        footerDivEl.appendChild(this.children[0]);
      }
    }
  }

  customElements.get("mi-footer") || customElements.define("mi-footer", Footer);
}
