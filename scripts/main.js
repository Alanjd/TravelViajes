const destinoBarcelona = new viaje ("Barcelona", 20 , 250000, 1 );
const destinoBali = new viaje ("Bali", 10 , 315000, 2 );
const destinoBariloche = new viaje ("Bariloche", 60 , 15000, 3 );
const destinoBrasil = new viaje ("Brasil", 50 , 120000, 4 );
const destinoMaldivas = new viaje ("Maldivas", 30 , 400000);
const destinoMexico = new viaje ("Mexico", 40 , 170000);
const destinoParis = new viaje ("Paris", 20 , 260000);
const destinoTurquia = new viaje ("Turquia", 15 , 210000); 



const arrayDestinos = [{id: 1, nombre: "Barcelona", precio: 250000 },
                       {id: 2, nombre: "Bali", precio: 315000 },
                       {id: 3, nombre: "Bariloche", precio: 15000 },
                       {id: 4, nombre: "Brasil", precio: 120000}
];



const listaDestinos = [ destinoBarcelona, destinoBali, destinoBariloche, destinoBrasil]

for (const destino of listaDestinos){
 let contenedor = document.createElement("div");
                
        contenedor.innerHTML = `<h3> ID: ${destino.id}<h3>
                                <p> Destino: ${destino.nombre}<p>
                                <b> Precio:$ ${destino.precio}<b>`;
        catalogo.appendChild(contenedor);
}




let botonDestinos = document.querySelector('.botonDestinos')

botonDestinos.addEventListener('click', destinos)

let catalgo = document.querySelector('.catalogo')


function destinos(){
    
    for (const destino of listaDestinos){
    let contenedor = document.createElement("div");

    contenedor.innerHTML = `<h3> ID: ${destino.id}<h3>
                            <p> Destino: ${destino.nombre}<p>
                            <b> Precio:$ ${destino.precio}<b>`;
    catalogo.appendChild(contenedor);
    }
}



/*let categoriaDestino = prompt ()
for (const destino of destinos){
    let contenedor = document.createElement("div");

    contenedor.innerHTML = `<h3> ID: ${destino.id}<h3>
                            <p> Destino: ${destino.nombre}<p>
                            <b> Precio:$ ${destino.precio}<b>`;
    document.body.appendChild(contenedor);
}


function viaje (nombre, stock, precio){
    this.nombre = nombre;
    this.stock = stock;
    this.precio = precio;


    this.venta = function (cantidadComprada){
        this.stock -= cantidadComprada;
        console.log ("El stock disponibles de pasajes es de: " + this.stock + " " + this.nombre);
    };
}



const arrayDestinos = [destinoBarcelona, destinoBali, destinoBariloche, destinoBrasil, destinoMaldivas, destinoMexico, destinoParis, destinoTurquia];
const carrito = [];


/*function saludo(nombreUsuario){
    alert('Bienvenido a travel world '+ nombreUsuario);
}*/

let nombre=prompt("Ingrese su nombre: ");

saludo(nombre);


function listadoDestinos (){
    alert ('Ingrese su destino: \n-Barcelona \n-Bariloche \n-Bali \n-Brasil \n-Maldivas \n-Mexico \n-Paris \n-Turquia');
}


function stockInsuficiente(stock){
    alert ("No contamos con esa cantidad de pasajes, solo contamos con " + stock);
}


function stockDisponible(stock , nombre){
    stock -= cantidadComprada;
    console.log ("Quedan: " + stock + "pasajes a " + nombre );
}



function calcularPrecio(precio){
    carrito.push(cantidadComprada * precio);
    precioTotalVenta = carrito.reduce ((partialSum , a) => partialSum + a, 0);
}


function compra (viaje){
    cantidadComprada = parseInt(prompt("Cuantos pasajes nesesita: : "));
    if (cantidadComprada <= viaje.stock){
        viaje.venta(cantidadComprada);
        calcularPrecio (viaje.precio);
    } else {
        stockInsuficiente(viaje.stock);
    }
}



function variosDestinos(){
    let cantidadDestinoscomprados = parseInt (prompt("Ingrese la cantidad de destinos que quiere solicitar: "));


    for (let i = 0 ; i < cantidadDestinoscomprados ; i++ ){
        let nombreCompra = prompt ("Ingrese el nombre del destino: ");
        nombreCompra = nombreCompra.toLowerCase();

        let destinoBuscado = listaDestinos.find (x => x.nombre == nombreCompra);
        if (destinoBuscado){
            compra (destinoBuscado);
        } else {
            alert("No contamos con ese destino ");
        }
        alert ("El precio de su compra es de: $"+ precioTotal);
    }
}

listadoDestinos();
variosDestinos();

console.log(carrito);



