export function init() {
  class BodyContainer extends HTMLElement {
    constructor() {
      super();
      this.render();
    }

    render() {
      var shadow = this.attachShadow({ mode: "open" });

      var bodyContainerEl = document.createElement("div");
      bodyContainerEl.classList.add("bodyContainer");
      shadow.appendChild(bodyContainerEl);

      var style = document.createElement("style");
      style.textContent = `
                        .bodyContainer{
                            width: auto;
                            max-width: 600px;
                            margin: 0 20px;
                        }
                      
                        @media (min-width: 600px){
                          .bodyContainer{
                            margin: 0 auto;
                        }
                        }
                        `;
      shadow.appendChild(style);

      if (this.children) {
        for (var i of this.children) {
          bodyContainerEl.appendChild(i.cloneNode(true));
        }
      }
    }
  }

  customElements.get("mi-bodycontainer") ||
    customElements.define("mi-bodycontainer", BodyContainer);
}
