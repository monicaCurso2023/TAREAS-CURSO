
import { condicIdadeAcceso, condicEncendido, condicPuntuacion, condicAccesoclave, 
    condicEnvioGratis, resultadoEnvioGratis,condicDiadaSemana,condicPodesMercar,
    condicDisponibilidade, condicClientePremium, prezoFinal, condicNumero,

} from "./condic.js";
import { numero, prezoBase, produtoDisponible } from "./const.js";

//1.0 Limite de Idade
function DamosAcceso() {
    if (condicIdadeAcceso) {
        console.log("Podes pasar");
        
    }else{
        console.log("condicion .. ",condicIdadeAcceso)
    }
    
    
    
}

//2.0 Estado da Luz
function EncendidoLuz() {
    if (condicEncendido) {
        console.log("A estancia está iluminada");
        
        
    }else{
        console.log("Estancia Apagada", condicEncendido);
        
    }
    
}

//3.0 Actualización de Puntuación 

function NovaPuntuacion() {
    if (condicPuntuacion) { 
        console.log("Ahora su valor es de 100");
        
        
    }else{
        console.log(condicPuntuacion);
        
    }
    
}

//4.0 Contrasinal Secreto

function ClaveAcceso() {
    if (condicAccesoclave) {
        console.log("Acceso Concedido");
        
        
    }else{
        console.log("Acceso denegado", condicAccesoclave);
        
    }
    
}
//5.0 Compra Mínima

function CompraMinima() {
    if (condicEnvioGratis) {
        console.log("Faltan  "  + resultadoEnvioGratis + " para envio de balde" );
        
        
    }else{
        console.log("Envío de balde");
        
    }
    
}
//6.0 Día de Lecer

function DiadeLecer() {
    if (condicDiadaSemana){
        console.log( condicDiadaSemana + "," + "é fin de semana");
        
    }else
        console.log("Día de traballo");
        
    
}
//7.0 Podes Mercar

function CompraVerificada() {
    if (condicPodesMercar) {
        console.log("Podes mercar");
        
        
    }else
        console.log("Non podes mercar");
        
}
//8.0 Negación de Disponibilidade

function VerificarDisponibilidad() {
    if (condicDisponibilidade) {
        console.log("Producto esgotado");
        
        
    }else
        console.log("Produto dispoñible");
        
    
}

//9.0 Asignar desconto

function AsignacionDesconto() {
    if (condicClientePremium) { 
        console.log("Aplicado desconto, precio final:  " + prezoFinal + "€" );
        
        
    }else
        console.log("Gracias pola túa compra");
        
    
}
//10.0 ¿É Positivo?

function NumeroPositivo() {
    if (condicNumero) {
        console.log("O número "+ numero + " é positivo");
        
        
    }else
        console.log( "O número "+ numero + " é negativo");
        
    
}
   
    



export{
    DamosAcceso,
    EncendidoLuz,
    NovaPuntuacion,
    ClaveAcceso,
    CompraMinima,
    DiadeLecer,
    CompraVerificada,
    VerificarDisponibilidad,
    AsignacionDesconto,
    NumeroPositivo,
}