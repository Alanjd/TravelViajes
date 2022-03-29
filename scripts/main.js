/*Comienzo de carousel
const slider = document.querySelector('.gallery');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', e => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', _ => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mouseup', _ => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mousemove', e => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const SCROLL_SPEED = 3;
  const walk = (x - startX) * SCROLL_SPEED;
  slider.scrollLeft = scrollLeft - walk;
});

Fin de carousel */

const viajes = [
    { nombre: "Barcelona", precio: 250000, stock: 20, src: './img/barcelona.jpg'},
    { nombre: "Bali", precio: 315000, stock: 10, src: './img/baliIndonesia.jpg'}, 
    { nombre: "Bariloche", precio: 15000, stock: 60, src: './img/bariloche.jpg'},
    { nombre: "Brasil", precio: 120000, stock: 50, src: './img/brasil.jpg'},
    { nombre: "Maldivas", precio: 400000, stock: 30, src: './img/maldivas.jpg'},
    { nombre: "Mexico", precio: 170000, stock: 40, src: './img/mexico2.jpg'},
    { nombre: "Paris", precio: 260000, stock: 20, src: './img/paris.jpg'},
    { nombre: "Turquia", precio: 210000, stock: 15, src: './img/turquia.jpg'},
]

const viajesContainer = document.getElementById('viajesContainer');

console.log(viajesContainer);

for (const destino of viajes){

    const viajesCardContainer = document.createElement('div');

    viajesCardContainer.classList.add ('col-3','mt-3','d-flex','justify-content-center');

    viajesCardContainer.innerHTML = `<div class="card shadow" style="width: 25rem">
                                 <img src=${destino.src} class="card-img-top viajesImg" alt=${destino.nombre}>
                                    <div class="card-body">
                                      <h5 class="card-title">${destino.nombre}</h5>
                                      <p class="card-stock">Disponible: ${destino.stock}</p>
                                      <p class="card-text">Precio: $${destino.precio}</p>
                                      <a class="btn btn-primary viajeBtn" id=${viajes.nombre}>Comprar</a>
                                    </div>
                                </div>`;

  viajesContainer.appendChild(viajesCardContainer);                              
}




const viajesBtn = document.getElementsByClassName('viajeBtn');


for (const viajeBtn of viajesBtn) {
    viajeBtn.addEventListener('click', (e) => {
        
        //console.log ('click'); Prueba de funcionamiento del boton
        const viajesId = e.target.id;

        findAndAddCoin(viajesId);
    })
}

function findAndAddCoin (id){
    const destino = viajes.find (destino => destino.nombre === id);

    console.log(destino);

    card.push(destino);

    console.log(card);
}

/*const destinoBarcelona = new viaje ("Barcelona", 20 , 250000, 1 );
const destinoBali = new viaje ("Bali", 10 , 315000, 2 );
const destinoBariloche = new viaje ("Bariloche", 60 , 15000, 3 );
const destinoBrasil = new viaje ("Brasil", 50 , 120000, 4 );
const destinoMaldivas = new viaje ("Maldivas", 30 , 400000);
const destinoMexico = new viaje ("Mexico", 40 , 170000);
const destinoParis = new viaje ("Paris", 20 , 260000);
const destinoTurquia = new viaje ("Turquia", 15 , 210000); 

justify-content-center


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
}*/




let boton1 = document.querySelector('')

boton1.addEventListener('click', saludar)

function saludar(){
    Swal.fire({
        title: 'Bienvenido!',
        Text: 'Espero que te guste nuestra pagina',
        icon:'info',//se puede agregar una imagen al icon
        confirmButtonText: 'Ingresar',
        timer: 1500,
    })
}

let botonToastify = document.querySelector('.botonToastify')

botonToastify.addEventListener('click', carritoToatify)

function carritoToatify(){
    Toastify({
        text: "This is a toast",
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function(){} // Callback after click
      }).showToast();
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

/*let nombre=prompt("Ingrese su nombre: ");

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

console.log(carrito);*/



