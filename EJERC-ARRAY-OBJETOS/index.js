import { datosCasas } from './constants.js';

const lista = document.getElementById('lista');

datosCasas.forEach(casa => {
  const li = document.createElement('li');
  li.textContent = `${casa.donoCasa} tiene ${casa.numPortas} puertas.`;
  lista.appendChild(li);
});


//1. Lista de donos

for (let casa of datosCasas) {
    console.log(casa.donoCasa);
}
