import { datosCasas } from './constantes.js';

// 1. Lista de donos

for (const casa of datosCasas) {
    console.log(casa.donoCasa);
}

// 2. Suma de Puertas

let totalPortas = 0;

for (const casa of datosCasas){ 
   totalPortas += casa.numPortas; 
  
}
console.log("Suma total de portas:", totalPortas);

// 3. Filtro Condicional

for (let casa of datosCasas){
  if (casa.numPortas > 10)

  console.log(" Os donos de casas con más de 10 puertas son: ",casa.donoCasa);
}
  
// 4. Dueño de Casa Grande 

function dueñoConMasPuertas(casas) {
  let maxPuertas = 0;
  let dueñoMax = "";

  for (let casa of casas) {
    if (casa.numPortas > maxPuertas) {
      maxPuertas = casa.numPortas;
      dueñoMax = casa.donoCasa;
    }
  }

  return "El dueño de la casa con más puertas es: " + dueñoMax;
}

// Llamada
console.log(dueñoConMasPuertas(datosCasas));

// 6. Clasificación de tamaño

for (const casa of datosCasas){
  if (casa.numPortas > 20){
     console.log("Casa grande o dono da casa é: ", casa.donoCasa);
     

  }else {
    console.log("Casa pequena o dono da casa é: ", casa.donoCasa);
  }   
     
}
// 7. Añadir propiedad

for (const casa of datosCasas) {
    casa.antiguidade = 10; 
}

console.log("Casas con nova propiedade antiguidade:");
console.log(datosCasas);

     
 // 8. Comprobacion de existencia
 
 function existeDono(nome) {
  for (const casa of datosCasas) {
    if (casa.donoCasa === nome) {
      return true;   // atopouse o dono
    }
  }
  return false;      // non apareceu ningún
}
console.log(existeDono("Pepe"));     // true
console.log(existeDono("Anxo"));     // true
console.log(existeDono("Maria"));    // false

// 9. Contador de casas pequeñas

let contador = 0;

for (const casa of datosCasas) {
    if (casa.numPortas == 5) {
        contador++; //
    }
}

console.log("Número de casas con exactamente 5 puertas:", contador);
/*OTRA ALTERNATIVA TODAVIA MAS CORTA SERIA 
let contador = 0;
for (const casa of datosCasas) {
    if (casa.numPortas == 5) {
      
    }}
console.log("Número de casas con exactamente 5 portas:", ++contador);*/


// 10. Reasignación condicional

/*for (const casa of datosCasas) {
    if (casa.donoCasa === "Pepeto") {
        casa.numPortas = 100;
    }
}

console.log("Lista actualizada de casas:");
console.log(datosCasas);*/
// con funcion 
function Reasignación(datos) {
  for (const casa of datos){
    if (casa.donoCasa === "Pepeto") {
        casa.numPortas = 100;
    }
  }
  
}
Reasignación(datosCasas)
console.log(datosCasas);
