import { IDS, MENSAJES, PRECIOS } from "./const.js";
import {
  capturarClic,
  validarNombre,
  actualizarChecks,
  mostrarAccesoTotal,
} from "./funciones.js";

// EJERCICIO 1: Botón simple
const boton = document.getElementById("btn-boton");
const mensajeBoton = document.getElementById("mensaje-boton");

// Llamada a la función importada
capturarClic(boton, mensajeBoton, MENSAJES);

// --- EJERCICIO 2: Validación de nombre ---
const entradaNombre = document.getElementById(IDS.entradaNombre);
const mensajeNombre = document.getElementById(IDS.mensajeNombre);

if (entradaNombre && mensajeNombre) {
  entradaNombre.addEventListener("input", () => {
    validarNombre(entradaNombre.value, mensajeNombre, MENSAJES);
  });
}

// --- EJERCICIO 3: Actualización de título ---
const entradaTitulo = document.getElementById(IDS.entradaTitulo);
const tituloPrincipal = document.getElementById(IDS.tituloPrincipal);

if (entradaTitulo && tituloPrincipal) {
  entradaTitulo.addEventListener("input", () => {
    tituloPrincipal.innerHTML = entradaTitulo.value;
  });
} else {
  console.error("No se encontró el campo de entrada o el título principal");
}

// --- EJERCICIO 4: Selector de color ---
const selectorCor = document.getElementById(IDS.selectorCor);

if (selectorCor) {
  selectorCor.addEventListener("change", () => {
    const color = selectorCor.value;

    // Limpiar clases anteriores
    selectorCor.className = "";

    switch (color) {
      case "rojo":
        selectorCor.classList.add("rojo");
        break;
      case "verde":
        selectorCor.classList.add("verde");
        break;
      case "azul":
        selectorCor.classList.add("azul");
        break;
      default:
        selectorCor.className = "";
    }
  });
}

// --- EJERCICIO 5: Alternador de clase ---
const botonAlternar = document.getElementById(IDS.botonAlternar);
const caja = document.getElementById(IDS.caja);

if (botonAlternar && caja) {
  botonAlternar.addEventListener("click", () => {
    const estaActivo = caja.classList.toggle("activo");
    botonAlternar.textContent = estaActivo ? "Activado" : "Desactivado";
  });
}

// --- EJERCICIO 6: Descuento dinámico ---
const selectorProducto = document.getElementById(IDS.selectorProducto);
const mensajePrecio = document.getElementById(IDS.mensajePrecio);

if (selectorProducto && mensajePrecio) {
  selectorProducto.addEventListener("change", () => {
    const producto = selectorProducto.value;
    const precioFinal = PRECIOS["producto" + producto] || null;

    mensajePrecio.textContent =
      precioFinal !== null
        ? `El Producto ${producto} cuesta ${precioFinal}€`
        : "";
  });
}

// --- EJERCICIO 7: Acumulador de eventos ---
const botonContador = document.getElementById(IDS.botonContador);
const mostrarCont = document.getElementById(IDS.mostrarCont);

if (botonContador && mostrarCont) {
  let contador = 0;

  botonContador.addEventListener("click", () => {
    contador++;
    mostrarCont.innerHTML = contador;
  });
}

// --- EJERCICIO 8: Comprobación con for...of ---
const mensajeChecks = document.getElementById(IDS.mensajeChecks);

if (mensajeChecks) {
  const checkboxes = IDS.checkboxes; // tu array de IDs

  const actualizar = () => actualizarChecks(checkboxes, mensajeChecks);

  for (const id of checkboxes) {
    const checkbox = document.querySelector(id);
    if (checkbox) checkbox.addEventListener("change", actualizar);
  }

  actualizar(); // inicial
}

// --- EJERCICIO 9: Bloqueo por condición ---
const entradaClave = document.getElementById(IDS.entradaClave);
const botonBloqueado = document.getElementById(IDS.botonBloqueado);

if (entradaClave && botonBloqueado) {
  entradaClave.addEventListener("input", () => {
    if (entradaClave.value === "admin") {
      botonBloqueado.removeAttribute("disabled");
    } else {
      botonBloqueado.setAttribute("disabled", "");
    }
  });
}

// --- EJERCICIO 10: Menú de roles ---
const selectorRol = document.getElementById(IDS.selectorRol);
const mensajeRol = document.getElementById(IDS.mensajeRol);

if (selectorRol && mensajeRol) {
  selectorRol.addEventListener("change", () => {
    const rol = selectorRol.value;
    mensajeRol.classList.remove("acceso-total");
    mensajeRol.textContent = `Rol seleccionado: ${rol}`;

    if (rol === "Administrador") {
      mostrarAccesoTotal(mensajeRol);
    }
  });
}
