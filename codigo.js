//TIENDA VIRTUAL DE SANDWICHES DE MIGA

let cantidadPedido = 0;
let pedido = [];
let precio = 0;
let valorTotal;

//OBJETO LISTA DE PRECIOS
const listaDePrecios =  [ 
    { id: 1 , nombre:"Jamón y Queso", precio: 850},
    { id: 2 , nombre:"Jamón y Huevo", precio: 850},
    { id: 3 , nombre:"Jamón y Tomate", precio: 850},
    { id: 4 , nombre:"Jamón y Morron", precio: 850},
    { id: 5 , nombre:"Jamón y Choclo", precio: 850},
    { id: 6 , nombre:"Jamón Crudo y queso", precio: 1200},
    { id: 7 , nombre:"Jamón Crudo y Tomate", precio: 1200},
    { id: 8 , nombre:"Jamón y Atún ", precio: 1200},
    { id: 9 , nombre:"Jamón y Palmitos", precio: 1200},
    { id: 10 , nombre:"Jamón y Roquefort", precio: 1200},
];

//REALIZAR PEDIDO
for(let i=0;i<listaDePrecios.length;i++){
    let suma = Number(prompt(`Ingrese la cantidad de Sandwiches de ${listaDePrecios[i].nombre}`));
    if (suma>0){
        let pedidoCompleto = { 
            nombre:listaDePrecios[i].nombre,
            cantidad: suma, 
        };
        precio += suma*listaDePrecios[i].precio;
        pedido.push(pedidoCompleto); 
    }
}

//DESCUENTO PROMOCIONAL (funcion)
let descuentoPromo = (precio)=> {return precio-((precio * 10) / 100);};


//MOSTRAR PEDIDO
precio > 10000 ? console.log(`El precio de su pedido es : $${valorTotal = descuentoPromo (precio)} (con valor promocional aplicado "-10%")`) : console.log(`El precio de su pedido es : $${precio}`) ;
for(let i=0;i<pedido.length;i++){
    console.log(`${pedido[i].cantidad}x de ${pedido[i].nombre}`);
}

//BUSQUEDA DEL GUSTO MÁS PEDIDO
function gustoMaspedido(gusto){
    return gusto.nombre === "Jamón y Queso";
}
pedido.find(gustoMaspedido) === undefined ? console.log("Le recomendamos incluir el gusto más pedido del mes - Jamón y Queso"):console.log("Su pedido incluye el gusto más pedido del mes - Jamón y Queso");