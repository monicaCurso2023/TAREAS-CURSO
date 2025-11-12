//1. Mi nombre fijo 
   //const nombreUsuario = "Mónica"

   //nombreUsuario = "María"

   //console.log(nombreUsuario); // ERROR no se puede cambiar el valor de una constante una vez asignado
   
   
//2. Mi edad SI cambia

    let edadActual = 55

//ahora sumamos un año

    edadActual = edadActual + 1;
    console.log(edadActual);

//3. La Ciudad principal

    const capitalPais = "Madrid"

    console.log(capitalPais); //He usado "const" el valor es fijo siempre será Madrid

//4. Puntuación del jugador
    let puntuación = 50

//resto 10 puntos
    puntuación = puntuación - 10
    console.log("El resultado es", puntuación);

//5. La frase Completa

    const saludo = "Hola "
    const final ="Mundo"
    let fraseCompleta = saludo +""+ final;

console.log(fraseCompleta);

//6. !Error de inicialización

   //const precio =
   // console.log(precio);//ERROR SyntaxError: Missing initializer in const declaration

// 7. Reasignación de un let

    let colorFavorito = "Azul"
    colorFavorito = "Verde"

     console.log(colorFavorito);
 
//8. Costo Fijo de Envio

    const costoEnvio = 5
    console.log(costoEnvio); //si esta cantidad es fija  puedo usar const, en caso de que puediese tener variaciones usarìa let

// 9. Estado del interruptor

    let estado = 'off';
    estado = 'on';

    console.log(estado); //he usado let, el valor cambia no es constante


//10. El número mágico

    const NUMERO_MAGICO = 42
    let resultado = NUMERO_MAGICO * 2

    console.log(resultado);
 
 //----- Parte 2 ------

//1 Declaración de constante
   //const pi = 3.14159
   // pi = 3.14 El valor es una constante no se puede cambiar

    console.log(pi);
   
//2 Cálculo de Area

    let radio = 5;      
    const pi = 3.14;    

    let area = pi * (radio ** 2); //elevado al cuadrado **

    console.log("El área del círculo es:", area);


 //3. Reasignación de variable

    let contador = 0
    
    contador = contador + 1

    contador =contador + 1

    console.log(contador);

//4. Concatenación de Cadenas

    const nombre = "Juan"
    const apellido = "Pérez"
    let nombreCompleto =nombre +""+ apellido
    console.log(NombreCompleto);

//5. Tipos Mixtos y Suma.

    let edad = 30
    let mensaje = "Mi edad es:";
    let suma = mensaje + 30;
    console.log(suma);

//6. Creación y Acceso Básico

    let dias = ["lunes", "martes", "miércoles", "jueves", "viernes", "sábado", "domingo"];

    console.log(dias[2]);

//7. Modificación de Elementos    

    let colores = ["Rojo", "Verde", "Azul"];

    colores[1] = "Amarillo";

    console.log(colores);

//8. Longitud del Array

    let frutas=["pera", "limón", "sandía", "uva"]

    console.log(frutas.length);

//9. Array de Tipos Mixtos  

    let datosUsuario = ["Juan", 25, true];

    console.log(datosUsuario[0]);
    console.log(datosUsuario[1]); 
    console.log(datosUsuario[2]);

//10. Agregar Elemento
     
    let tareas = ["Comprar pan", "Estudiar JS"];
    tareas.push("dormir");
    
    console.log(tareas);


    
