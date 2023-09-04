import { init as initHeaderEl } from "../../components/header/header";
import { init as initLargeEl } from "../../components/large/large";
import { init as initTituloEl } from "../../components/titulo/titulo";
import { init as initBodyEl } from "./../../components/body/body";
import { init as initSubtituloEl } from "../../components/subtitulo/subtitulo";
import { init as initBodyContainerEl } from "../../components/body-container/body-container";
import { init as initInputEl } from "../../components/input/input";
import { init as initButtonEl } from "../../components/button/button";
import { init as initoutlinedEl } from "../../components/outlined/outlined";
import { init as initFooterEl } from "../../components/footer/footer";
import { init as initSelectEl } from "../../components/select/select";

export function initThankYou(params) {
  initHeaderEl();
  initLargeEl();
  initTituloEl();
  initBodyEl();
  initSubtituloEl();
  initBodyContainerEl();
  initInputEl();
  initButtonEl();
  initoutlinedEl();
  initFooterEl();
  initSelectEl();

  const thankYouEl = document.createElement("div");

  thankYouEl.innerHTML = `
  <mi-header>
     <mi-large aria-label="Header"></mi-large>
  </mi-header>

  <mi-bodycontainer>
    <mi-titulo aria-label="Gracias"></mi-titulo>

    <mi-large aria-label="Toda la información que nos brindaste es muy importante"></mi-large>

    <mi-button class="button" aria-label="De nada"></mi-button>
  </mi-bodycontainer>

  <mi-footer>
    <mi-large aria-label="Footer"></mi-large>
  </mi-footer>
  `;

  const buttonEl: any = thankYouEl.querySelector(".button");

  console.log(buttonEl);

  buttonEl.addEventListener("click", function () {
    console.log("HOLA");
    /* params.goTo("/welcome"); */
  });

  return thankYouEl;
}
