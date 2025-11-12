//1. Lista de Prezos	

const prezos = {mazá:1.5, banana:0.8, uva:3.2};

for (let froita in prezos){
    console.log("A "+ froita + " custa", prezos[froita]+"€");
    
}
//2. Suma de Array

const notas =[7, 5, 8, 9, 6];
let sumaTotal = 0;

for (const nota of notas){
    sumaTotal += nota;
    
}
    console.log("A suma total das notas é:",sumaTotal);
    
//3. Días de la semana

const dias = [ "Luns", "Martes", "Mércores", "Xoves", "Venres", "Sábado", "Domingo"];

for (const dia of dias){
    console.log(dia);
    
}

//4. Bùsqueda de Rol

const roles={admin:"Pepe", editor:"Xoana", convidado:"Xurxo"};

let usuarioActual="Xoana";

for (const rol in roles){
    if (roles[rol] == usuarioActual){
        console.log("O usuario actual é", rol);
    }
}

//5. Clasificar Notas

const notasclase =[7, 5, 3, 9, 2];
let aprobadas = 0;

 for (const nota of notasclase){
    if (nota >= 5){
        aprobadas++;
    }
 }
 console.log("Número de notas aprobadas son:", aprobadas);

 //6. Menú de comidas

 let opcion = "pizza";

 switch (opcion) {
  case "pizza":
    console.log("Escolleu comida italiana");
    break;
  case "sushi":
    console.log("Escolleu comida xaponesa");
    break;
  default:
    console.log("Opción non recoñecida");
}

//7. Niveis e Alerta 

const nivel=2;

switch (nivel) {
    case 1:
        console.log("Alerta baixa");
        break;
    case 2:
        console.log("Alerta Media");
        break;
    case 3:
        console.log("Alerta Alta");
        break;   
    default:
        console.log("Non hai alerta");
        
        break;    

    }    
        
//8. Cálculo de desconto
 const importes = [100, 250, 50, 300];
 
  for ( const importe of importes) {
    if (importe > 200){
        const desconto = importe * 0.10;
        const importeDescuento = importe - desconto;
 
        console.log("Su importe con descuento es de : ", importeDescuento);
        
    }
        

  }     

 //9. Busca Inversa de Valor
 
const cores = { fondo:"azul", texto:"negro", borde:"vermello"};

for ( const cor in cores){
    if (cores[cor] == "negro"){
        console.log("Esta a imprimir", (cor));
    } 
        
}

//10. Asignación multiple

let dia = "Sabado"

switch (dia) {
    case "Sabado":
    case "Domingo":

        console.log("Fin de semana");
        
        
        break;

    default:
        console.log("Día laboral");
        
        break;
}
