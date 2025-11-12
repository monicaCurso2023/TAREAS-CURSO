// funciones.js

export const capturarClic = (botonElement, mensajeElement, MENSAJES) => {
  if (botonElement && mensajeElement) {
    botonElement.addEventListener("click", () => {
      console.log("Botón premiado!"); // debug click
      console.log("mensajeElement:", mensajeElement); // ver si existe
      console.log("MENSAJES.botonPremiado:", MENSAJES.botonPremiado); // ver si está
      mensajeElement.textContent =
        MENSAJES.botonPremiado || "Mensaje no encontrado";
      botonElement.classList.add("verde");
    });
  } else {
    console.error("No se encontró el botón o el área de mensaje", {
      botonElement,
      mensajeElement,
    });
  }
};

// --- Validar nombre ---
export const validarNombre = (valor, mensajeElement, MENSAJES) => {
  if (valor === "") {
    mensajeElement.textContent = "";
  } else if (!isNaN(valor)) {
    mensajeElement.textContent = "Valor no válido";
  } else if (valor.length > 3) {
    mensajeElement.textContent = MENSAJES.nombreValido;
  } else {
    mensajeElement.textContent = "";
  }
};

// --- Actualizar checkboxes ---
export const actualizarChecks = (checkboxes, mensajeElement) => {
  let checksMarcados = [];
  for (const id of checkboxes) {
    const checkbox = document.querySelector(id);
    if (checkbox && checkbox.checked) {
      checksMarcados.push(id.replace("#", ""));
    }
  }
  mensajeElement.textContent =
    checksMarcados.length > 0
      ? `Marcados: ${checksMarcados.join(", ")}`
      : "No hay checkboxes marcados";
};

// --- Mostrar acceso total ---
export const mostrarAccesoTotal = (mensajeElement) => {
  mensajeElement.textContent += " (¡Acceso total concedido!)";
  mensajeElement.classList.add("acceso-total");
  console.log("Acceso total concedido al Administrador.");
};
