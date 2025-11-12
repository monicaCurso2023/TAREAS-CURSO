// Funciones básicas para crear elementos
export function crearDiv(texto, clases = "") {
  const div = document.createElement("div");
  div.innerHTML = texto;
  div.className = clases;
  return div;
}

export function crearImagen(src, clases = "") {
  const img = document.createElement("img");
  img.src = src;
  img.className = clases;
  return img;
}
