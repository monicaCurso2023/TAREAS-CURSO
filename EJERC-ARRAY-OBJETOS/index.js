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
     console.log("Casa grande:", casa.donoCasa);
     

  }else {
    console.log("Casa pequena:", casa.donoCasa);
  }   
     
}
// 7. Añadir propiedad


     
    
