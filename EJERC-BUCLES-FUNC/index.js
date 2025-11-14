// 1. Lista de Prezos
const prezos = { 
    mazá: 1.5, 
    banana: 0.8, 
    uva: 3.2 
};

function listaPrezos(prezosObj) {
    for (let froita in prezosObj) {
        console.log("A " + froita + " custa", prezosObj[froita] + "€");
    }
}

listaPrezos(prezos);

// 2. Suma de Array
const notas1 = [7, 5, 8, 9, 6]; 
function sumaArray(notasArray) {
    let sumaTotal = 0;

    for (const nota of notasArray) {
        sumaTotal += nota;
    }

    console.log("A suma total das notas é:", sumaTotal);
}

sumaArray(notas1);


// 3. Días de la semana
const dias = ["Luns", "Martes", "Mércores", "Xoves", "Venres", "Sábado", "Domingo"];

function mostrarDias(diasArray) {
    for (const dia of diasArray) {
        console.log(dia);
    }
}

mostrarDias(dias);


// 4. Búsqueda de Rol
const roles = { 
    admin: "Pepe", 
    editor: "Xoana", 
    convidado: "Xurxo" 
};

const usuarioActual = "Xoana";

function buscarRol(rolesObj, usuario) {
    for (const rol in rolesObj) {
        if (rolesObj[rol] === usuario) {
            console.log("O usuario actual é", rol);
            return; // salir después de encontrar el rol
        }
    }
    console.log("Usuario non atopado.");
}

buscarRol(roles, usuarioActual);



// 5. Clasificar Notas

const notas = [7, 5, 3, 9, 2];

function contarAprobadas(notas) {
    let aprobadas = 0;

    for (const nota of notas) {
        if (nota >= 5) {
            aprobadas++;
        }
    }

    console.log("Número de notas aprobadas son:", aprobadas);
}

contarAprobadas(notas);


// 6. Menú de comidas
function menuComida(opcion) {
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
}
menuComida("pizza");

// 7. Niveis e Alerta
function alertaNivel(nivel) {
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
}  
//8. Cálculo desconto
const importes = [100, 250, 50, 300];

function calcularDescuento(importe) {
    const descuento = importe * 0.10;
    return importe - descuento;
}

for (const importe of importes) {
    if (importe > 200) {
        const importeConDescuento = calcularDescuento(importe);
        console.log("Su importe con descuento es de:", importeConDescuento);
    }
}

//9.  Busca Inversa de Valor

const cores = { fondo:"azul", texto:"negro", borde:"vermello" };

function imprimirPropiedadesPorColor(objeto, colorBuscado) {
    for (const propiedad in objeto) {
        if (objeto[propiedad] === colorBuscado) {
            console.log("Está a imprimir:", propiedad);
        }
    }
}

imprimirPropiedadesPorColor(cores, "negro");

//10. Asignación multiple

function verificarDia(dia) {
    switch (dia) {
        case "Sabado":
        case "Domingo":
            console.log("Fin de semana");
            break;
        default:
            console.log("Día laboral");
            break;
    }
}


verificarDia("Sabado"); 
verificarDia("Lunes");  
