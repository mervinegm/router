export function init() {
  class Select extends HTMLElement {
    constructor() {
      super();
      this.render();
    }

    render() {
      var shadow = this.attachShadow({ mode: "open" });

      const label = this.getAttribute("aria-label");

      var fieldsetSelectEl = document.createElement("div");
      fieldsetSelectEl.classList.add("fieldsetSelect");
      shadow.appendChild(fieldsetSelectEl);

      var style = document.createElement("style");
      style.textContent = `
                          .fieldsetSelect{
                            display: flex;
                            flex-direction: column;
                            Width: calc(100% - 10px);
                            Height: 80px;
                            margin-top: 20px;
                          }
    
                          .label{
                            font-size: 18px;
                            font-family: "Roboto";
                            font-weight: 400;
                          }
    
                          .select{
                            width: 100%;
                            height: 55px;
                            padding: 13px 13px;
                            font-size: 18px;
                            font-family: "Roboto";
                            font-weight: 400;
                            margin-top: 4px;
                            border: solid 2px;
                            border-radius: 4px;
                          }
                          `;
      shadow.appendChild(style);

      fieldsetSelectEl.innerHTML = `
          <label class="label" for="Nombre">${label}</label>
          <select class="select" type="text">
            <option value="value1">Hombre</option>
            <option value="value2" selected>Mujer</option>
            <option value="value3">No binarie</option>
          </select>
          `;
    }
  }

  customElements.get("mi-select") || customElements.define("mi-select", Select);
}
