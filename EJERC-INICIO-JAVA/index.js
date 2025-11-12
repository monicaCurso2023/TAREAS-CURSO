import { crearDiv, crearImagen } from "./funciones";
import {
  imagen1,
  imagen2,
  textoDiv1,
  textoDiv2,
  textoSpan,
} from "./constantes";

const mainContainer = document.createElement("main");
document.body.append(mainContainer);

// Crear el primer div con span
const div1 = crearDiv(
  `${textoDiv1} <span class="texto-resaltado">${textoSpan}</span>`,
  "padding-div"
);

// Crear el segundo div
const div2 = crearDiv(textoDiv2, "padding-div");

// Crear imágenes
const img1 = crearImagen(imagen1, "estilo-img padding-img margin-img");
const img2 = crearImagen(imagen2, "estilo-img padding-img margin-img");

mainContainer.append(div1, img1, img2, div2);
