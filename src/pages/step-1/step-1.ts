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

export function initStep1(params) {
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

  const step1El = document.createElement("div");

  step1El.innerHTML = `
  <mi-header>
    <mi-large aria-label="Header"></mi-large>
  </mi-header>

  <mi-bodycontainer>
    <mi-titulo aria-label="Necesitamos algunos datos más"></mi-titulo>

    <mi-input aria-label="Email"></mi-input>

    <mi-input aria-label="Comida favorita"></mi-input>

    <mi-select aria-label="Sexo"></mi-select>

    <mi-button class="button" aria-label="Continuar"></mi-button>

    <mi-outlined aria-label="Volver"></mi-outlined>
  </mi-bodycontainer>

  <mi-footer>
     <mi-large aria-label="Footer"></mi-large>
  </mi-footer>
  `;

  const buttonEl: any = step1El.querySelector(".button");

  buttonEl.addEventListener("click", function () {
    console.log("HOLA");
    /* params.goTo("/thankyou"); */
  });

  return step1El;
}
