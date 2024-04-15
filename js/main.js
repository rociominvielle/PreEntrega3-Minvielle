function DeseoUsuario(generoDeseado, ubicacionDeseada, duracionDeseada){
    this.genero = generoDeseado
    this.ubicacion = ubicacionDeseada
    this.duracion = duracionDeseada
}

const generoPrompt = prompt('¿Para qué estás?, Elige una opción: comedia, drama, musical o alternativo')
const ubicacionPrompt = prompt('¿Dónde estás?, Elige una opción: CABA NORTE, CABA SUR, GBA')
const duracionPrompt = prompt('¿Cuánto tiempo tenés?, Elige una opción: micro espectáculo, hasta 2hs, toma todo mi tiempo')

const deseoUsuarioFinal = new DeseoUsuario (generoPrompt, ubicacionPrompt, duracionPrompt)

class Evento {
    constructor(titulo, genero, ubicacion, duracion, precio) {
            this.titulo = titulo,
            this.genero = genero,
            this.ubicacion = ubicacion,
            this.duracion = duracion
            this.precio = 10000
    }
}

const listaDeEventos = [
    new Evento('El mago de Oz', 'comedia', 'CABA NORTE', 'micro espectáculo'),
    new Evento('Alicia en el espejo', 'comedia', 'CABA NORTE', 'hasta 2hs'),
    new Evento('Romeo y Julieta', 'comedia', 'CABA NORTE', 'toma todo mi tiempo'),
    new Evento('Hamlet', 'comedia', 'CABA SUR', 'micro espectáculo'),
    new Evento('La tempestad', 'comedia', 'CABA SUR', 'hasta 2hs'),
    new Evento('Macbeth', 'comedia', 'CABA SUR', 'toma todo mi tiempo'),
    new Evento('El sueño de una noche de verano', 'comedia', 'GBA', 'micro espectáculo'),
    new Evento('Otelo', 'comedia', 'GBA', 'hasta 2hs'),
    new Evento('El rey Lear', 'comedia', 'GBA', 'toma todo mi tiempo'),
    new Evento('Las aventuras de Tom Sawyer', 'drama', 'CABA NORTE', 'micro espectáculo'),
    new Evento('Moby Dick', 'drama', 'CABA NORTE', 'hasta 2hs'),
    new Evento('Don Quijote de la Mancha', 'drama', 'CABA NORTE', 'toma todo mi tiempo'),
    new Evento('La Odisea', 'drama', 'CABA SUR', 'micro espectáculo'),
    new Evento('La Ilíada', 'drama', 'CABA SUR', 'hasta 2hs'),
    new Evento('Cien años de soledad', 'drama', 'CABA SUR', 'toma todo mi tiempo'),
    new Evento('El Principito', 'drama', 'GBA', 'micro espectáculo'),
    new Evento('Crimen y castigo', 'drama', 'GBA', 'hasta 2hs'),
    new Evento('Los miserables', 'drama', 'GBA', 'toma todo mi tiempo'),
    new Evento('Cats', 'musical', 'CABA NORTE', 'micro espectáculo'),
    new Evento('El fantasma de la ópera', 'musical', 'CABA NORTE', 'hasta 2hs'),
    new Evento('Mamma Mia!', 'musical', 'CABA NORTE', 'toma todo mi tiempo'),
    new Evento('Los miserables', 'musical', 'CABA SUR', 'micro espectáculo'),
    new Evento('West Side Story', 'musical', 'CABA SUR', 'hasta 2hs'),
    new Evento('El rey león', 'musical', 'CABA SUR', 'toma todo mi tiempo'),
    new Evento('Chicago', 'musical', 'GBA', 'micro espectáculo'),
    new Evento('Grease', 'musical', 'GBA', 'hasta 2hs'),
    new Evento('Hamilton', 'musical', 'GBA', 'toma todo mi tiempo'),
    new Evento('Cirque du Soleil', 'alternativo', 'CABA NORTE', 'micro espectáculo'),
    new Evento('Blue Man Group', 'alternativo', 'CABA NORTE', 'hasta 2hs'),
    new Evento('Stomp', 'alternativo', 'CABA NORTE', 'toma todo mi tiempo'),
    new Evento('Fuerza Bruta', 'alternativo', 'CABA SUR', 'micro espectáculo'),
    new Evento('Sleep No More', 'alternativo', 'CABA SUR', 'hasta 2hs'),
    new Evento('The Illusionists', 'alternativo', 'CABA SUR', 'toma todo mi tiempo'),
    new Evento('Potted Potter', 'alternativo', 'GBA', 'micro espectáculo'),
    new Evento('La Clique', 'alternativo', 'GBA', 'hasta 2hs'),
    new Evento('The House of Dancing Water', 'alternativo', 'GBA', 'toma todo mi tiempo')
];




for (let i = 0; i<listaDeEventos.length; i++){
    if(deseoUsuarioFinal.genero == listaDeEventos[i].genero 
        && deseoUsuarioFinal.ubicacion == listaDeEventos[i].ubicacion 
        && deseoUsuarioFinal.duracion == listaDeEventos[i].duracion ) {
        alert('Genial, tu evento deseado para el día de hoy es '+ listaDeEventos[i].titulo)
        eventoElegido = listaDeEventos[i]
    } 
}


//AÑADIR AL CARRITO LA OPCIÓN DESEADA. 

class Item {
    constructor(eventoElegido, cantidad) {
        this.evento = eventoElegido;
        this.cantidad = cantidad;
    }

    total(){
        return this.cantidad * this.evento.precio
    }
}


let carrito = [];

function printlistaDeEventos() {
    let cadena = "";
    listaDeEventos.forEach((el, id) => {
        cadena += `Id: ${id}\nNombre: ${el.titulo}\nPrecio: ${el.precio}\n`;
    });
    alert(cadena);
}

function printCarrito() { 
    if (carrito.length == 0) {
        alert('Tu carrito está vacío')
    } else {
        let cadena = "";
        carrito.forEach((el) => {
            cadena += `Nombre: ${el.evento.titulo}\nCantidad: ${el.cantidad}\nPrecio por entrada: ${el.evento.precio}\n ` ;
        })
        alert(cadena);
    }
}

 do {
     op = prompt('¿Qué hacemos? \n1 - Comprar Sugerencia \n2 - Comprar desde catálogo \n3 - Mostrar Carrito \n4 - Eliminar \n5 - Subtotal \n6 - Salir ');
    switch (op) {
        case '1':
                comprarSugerencia(eventoElegido, carrito);
                break;
        case '2':
                comprarCatalogo(listaDeEventos, carrito);
                break;
        case '3': 
                printCarrito()
                break;
        case '4':
                eliminar(carrito)
                break;
        case '5':
                subtotal(carrito)
                break;
    }
} while (op != 6)


// // construyo las funciones para cada op

function comprarSugerencia(eventoElegido, carrito) {
    let i;
    let cantidad;
    alert('Vas a comprar entradas para ' + eventoElegido.titulo);
    do {
        cantidad = parseInt(prompt('¿Qué cantidad de entradas querés?'))
     
    } while (isNaN(cantidad) || cantidad <= 0);
        
    existe = carrito.some((el) => {
        return el.evento.titulo == eventoElegido.titulo;
    });
    if (existe) {
        let indice = carrito.findIndex((el) => { 
            return el.evento.titulo == eventoElegido.titulo; 
        })
        carrito[indice].cantidad += cantidad;

    } else {
        carrito.push (new Item(eventoElegido, cantidad))
    }
}

function comprarCatalogo(listaDeEventos, carrito) {
    let i;
    let cantidad;
    do {
        printlistaDeEventos();
        i = parseInt(prompt('¿A qué número de evento en la lista vas a ir?'));
    } while (isNaN(i) || i < 0 || i >= listaDeEventos.length);
    do {
        cantidad = parseInt(prompt('¿Qué cantidad de entradas querés?'))
    } while (isNaN(cantidad) || cantidad <= 0);
    
    let existe = carrito.some((el) => {
        return el.evento.titulo == listaDeEventos[i].titulo;
    });
    if (existe) {
        let indice = carrito.findIndex((el) => { 
            return el.evento.titulo == listaDeEventos[i].titulo; 
        })
        carrito[indice].cantidad += cantidad;

    } else {
        carrito.push (new Item(listaDeEventos[i], cantidad))
    }
}

function eliminar(carrito) {
    let titulo
    let cantidad
    do {
        printCarrito();
        titulo = (prompt('¿Qué evento quieres eliminar?'));
    } while (!carrito.some((el) => {
        return titulo == el.evento.titulo
    }))

    const elementoABorrar = carrito.find((el) => { return titulo == el.evento.titulo })
    const indiceDeElemento = carrito.findIndex(el => el == elementoABorrar)
        
    do {
        cantidad = parseInt(prompt('¿Qué cantidad de entradas quieres eliminar?'))
    } while (isNaN(cantidad) || cantidad < 1 || cantidad > elementoABorrar.cantidad)

    elementoABorrar.cantidad -= cantidad
    if(elementoABorrar.cantidad == 0){
        carrito.splice(indiceDeElemento, 1)
    }
}
 
function subtotal(carrito) {
    let total = carrito.reduce ((acum, el) => {
        return acum + el.total()
    }, 0);

    alert(`El total de la compra es ${total}`);
}





