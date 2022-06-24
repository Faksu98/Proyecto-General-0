const COMPRA_CARNE = "b1";
const COMPRA_FRUTAS = "b2";
const COMPRA_PANTALLA = "b3";

const PRECIO_CARNE = 500;
const PRECIO_FRUTA = 200;
const PRECIO_PANTALLA = 1500;

const OPCION_EFECTIVO = "O1";
const OPCION_CREDITO = "O2";

const OPCION_CUOTAS = 3;

var comprasElegidas = "por def";

var idCuotas = "por def";

let bolsaCarne = 0;
let bolsaFruta = 0;
let bolsaPantalla = 0;
let bolsaCompleta = 0;
let cantidadPagar = 0;


function mandarPedido(id){
    switch (id){
        case COMPRA_CARNE:
            cantidadPagar = cantidadPagar + PRECIO_CARNE
            bolsaCarne = bolsaCarne + 1
            document.querySelector("#resultado").innerHTML=`
            <h3>Usted a seleccionado el producto CARNE su valor es de ${PRECIO_CARNE}</h3>
            `;
            break;
        case COMPRA_FRUTAS:
            bolsaFruta = bolsaFruta + 1
            cantidadPagar = cantidadPagar + PRECIO_FRUTA
            document.querySelector("#resultado").innerHTML=`
            <h3>Usted a seleccionado el producto FRUTAS su valor es de ${PRECIO_FRUTA}</h3>
            `;
            break;
        case COMPRA_PANTALLA:
            bolsaPantalla = bolsaPantalla + 1
            cantidadPagar = cantidadPagar + PRECIO_PANTALLA
            document.querySelector("#resultado").innerHTML=`
            <h3>Usted a seleccionado el producto PANTALLAS su valor es de ${PRECIO_PANTALLA}</h3>
            `;
            break;
        default:
    }
    document.querySelector(`#carrito_compras`).innerHTML=`
    <h3> Cantidad de productos seleccionados: ${bolsaCompleta = bolsaCarne + bolsaFruta + bolsaPantalla} </h3>
    <h3> La cantidad que usted debe pagar es: ${cantidadPagar} </h3>            
    `;
}
    function metodoPago(id){
        switch (id){
            case OPCION_EFECTIVO:
                document.querySelector(`#respuesta_final`).innerHTML=`
                <h3> Su compra fue en efectivo </h3>
                <h3> Usted recibio un descuento del 20% </h3>
                <h3> El precio final es: ${precioFinal = cantidadPagar * (1 - 0.20)}</h3>
                `;
                break;
            case OPCION_CREDITO:
                document.querySelector(`#tabla_descuento`).innerHTML=`
                <h3> A continuacion seleccione la opcion para indicar la cantidad de cuotas en la que desea abonar </h3>
                <h3> Opcion 1 = 1 cuota</h3>
                <h3> Opcion 2 = 3 cuotas (para seleccionar esta opcion debe de tener mas de 3 productos)</h3>
                <h3> Opcion 3 = 6 cuotas (para seleccionar esta opcion debe de tener mas de 6 productos)</h3>
                <select onchange="tiposCuotas(this.id)" name="Opciones de cuotas" id="cuotas">
                 <option>Seleccione</option>
                `;
                for ( let i = 1 ; i <= OPCION_CUOTAS; i++){
                    document.querySelector(`#cuotas`).innerHTML+=`
                    <option id="C${i}" value="${i}"> Opcion ${i} </option>
                    `;
                    /* idCuotas = document.querySelector(#C${i}).value; */
                }
                break;
            default:
        }
    }
    function tiposCuotas(id){
        idCuotas = Number(document.querySelector(`#cuotas`).value);
        console.log (idCuotas, (idCuotas == 1))
        if (idCuotas == 1){
            document.querySelector(`#respuesta_final`).innerHTML=`
            <h3> Usted selecciono abonar en una cuota </h3>
            <h3> Entonces seria 1 cuota de ${cantidadPagar}
            `;
        }else if((idCuotas == 2) && (bolsaCompleta >= 3)){
            document.querySelector(`#respuesta_final`).innerHTML=`
            <h3> Usted selecciono abonar en tres cuotas </h3>
            <h3> Se le sumara un 5% de interes $${precioFinal = cantidadPagar * (1 + 0.05)}</h3>
            <h3> Entonces debera abonar 3 cuota de $${precioFinal / 3}
            `;
        }else if((idCuotas == 3) && (bolsaCompleta >= 6)){
            document.querySelector(`#respuesta_final`).innerHTML=`
            <h3> Usted selecciono abonar en seis cuotas </h3>
            <h3> Se le sumara un 15% de interes $${precioFinal = cantidadPagar * (1 + 0.15)}</h3>
            <h3> Entonces debra abonar 6 cuota de $${precioFinal / 6 }
            `;
        }else{
            document.querySelector(`#respuesta_final`).innerHTML=`
            <h3> Disculpe usted no posee los requisitos para esta opcion </h3>
            `;
        }
    }