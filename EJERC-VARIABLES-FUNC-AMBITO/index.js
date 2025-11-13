//1.	Variable Local e Global

/*let nomeGlobal = "Marta";
function saudar() {
  let nomeLocal = "Pedro";
  console.log("Nome global:", nomeGlobal);
  console.log("Nome local:", nomeLocal);
}
saudar();
console.log(nomeLocal);
//error × ReferenceError nomeLocal is not defined,
//el nombre está definido dentro de la funcion solo tiene sentido dentro de ella. fuera no existe.

*/
//2. Redefinición local
 let contGlobal = 10;
  function incrementar() {
    let contador = 5;
    console.log("Contador", contador);
    
  }
  incrementar();
  console.log("Contador Globlal", contGlobal);

//3. Funcion pura

function multiplicar(a, b) {
    return a*b;
    
}
const resultado1 = multiplicar(5,8);
const resultado2 = multiplicar(7,6);

console.log(resultado1);
console.log(resultado2);

//4. Efecto Secundario

let saldoConta = 100;
function retirar(cantidad) {
    saldoConta= saldoConta - cantidad;
    
}
 retirar(25);
 console.log("El saldo en cuenta tras la retirada es de ", saldoConta);

//5. Valor de Retorno 

function calcularIva(precio) {
    return precio *1.21;
    
}
let prezoFinal = calcularIva(50)
console.log("El resultado con IVA es " + prezoFinal);

// 6. Parámetro por defecto

function saudarUsuario(nome = "Visitante") {
    return  "Hola " + nome ;   
    
}
let saludo1 = saudarUsuario();
let saludo2= saudarUsuario("Xulia");
console.log(saludo1);
console.log(saludo2);

// 7. Error de retorno Múltiple

function comprobar(numero) {
    if (numero >= 10){;
    return "Maior" ;
    
} 
    return "Menor o igual";
}
let resultado = comprobar(20);
console.log(resultado);
/*Se ejecuta return "Maior" y la función termina inmediatamente.

El segundo return "Menor ou igual" no se ejecuta nunca.*/

// 8. Acceso a constante global

const TASA_DESCONTO = 0.1;

function aplicarDesconto(importe) {
    
    const descuento = importe * TASA_DESCONTO;
    const importeFinal = importe - descuento;
    return importeFinal;
}

let precioOriginal = 300;
let precioConDescuento = aplicarDesconto(precioOriginal);
console.log("El precio con su descuento aplicado es de : "+ precioConDescuento);


// 9. Ámbito a bucles (for)

function iterar() {
    for (let i = 0; i < 3; i++) {
      console.log("Dentro del bucle (i):", i);  
    }
   /*console.log("Dentro de la función ", i);
    Aquí i ya no existe, 
      porque let solo crea i dentro del bloque {} del for.*/
    }
    iterar();
    /*console.log("Fuera de la funcion ", i);
    Igual que antes*/


 // 10. Combinación de ámbito

 let totalGlobal = 0.2; //decalaro e inicializo
 function engadir(valor) {
    let suma = valor + totalGlobal;
    totalGlobal = suma;
    return suma;
  // otra forma mas corta "return valor + totalGlobal"  
 }

totalGlobal = engadir(15);
console.log(totalGlobal);//console.log("o Valor de totalGlobal e ${totalGlobal}")
totalGlobal = engadir(5);
console.log(totalGlobal);
    