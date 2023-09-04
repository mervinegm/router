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

export function initWelcome(params) {
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

  const welcomeEl = document.createElement("div");

  welcomeEl.innerHTML = `
  <mi-header>
  <mi-large aria-label="Header"></mi-large>
</mi-header>

<mi-bodycontainer>
  <mi-titulo aria-label="Te damos la bienvenida a esta página"></mi-titulo>

  <mi-body aria-label="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam consequuntur iure voluptas quia accusantium voluptatum aspernatur provident et repudiandae quam veritatis, libero porro sit beatae laboriosam a aut consequatur quidem?"></mi-body>

  <mi-large aria-label="Para continuar ingresá tu nombre"></mi-large>

  <mi-input aria-label="Nombre"></mi-input>

  <mi-button class="button" aria-label="Comenzar"></mi-button>
</mi-bodycontainer>

<mi-footer aria-label="Footer">
  <mi-large aria-label="Footer"></mi-large>
</mi-footer>
`;

  const buttonEl: any = welcomeEl.querySelector(".button");

  buttonEl.addEventListener("click", function () {
    console.log("HOLA");
    /* params.goTo("/step-1"); */
  });

  return welcomeEl;
}
