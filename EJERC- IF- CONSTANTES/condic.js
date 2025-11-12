import {minaIdade,idadeMinima,luzAcendida, puntuacion,CLAVE_SECRETA, intentoPersoa,
    montoCompra, ENVIO_DEBALDE,hoxe,saldo, prezoProduto,produtoDisponible, éClientePremium, 
    prezoBase,numero,
    
} from "./const.js";




let condicIdadeAcceso = minaIdade >= idadeMinima;
let condicEncendido = luzAcendida === true;       
let condicPuntuacion = puntuacion >= 75;   
let condicAccesoclave = CLAVE_SECRETA === intentoPersoa;    
let condicEnvioGratis = montoCompra <= ENVIO_DEBALDE;
let resultadoEnvioGratis = ENVIO_DEBALDE - montoCompra;
let condicDiadaSemana = hoxe === "sábado" || hoxe === "domingo";
let condicPodesMercar = saldo >= 100 && prezoProduto >= 100;
let condicClientePremium = éClientePremium === true;
let condicDisponibilidade = !produtoDisponible;
let prezoFinal = éClientePremium ? 80 : prezoBase;
let condicNumero = numero > 0;

    
    
export{
    condicIdadeAcceso, 
    condicEncendido,
    condicPuntuacion,
    condicAccesoclave,
    condicEnvioGratis,
    resultadoEnvioGratis,
    condicDiadaSemana,
    condicPodesMercar,
    condicDisponibilidade,
    condicClientePremium,
    prezoFinal,
    condicNumero,
}