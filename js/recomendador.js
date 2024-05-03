class Evento {
  constructor(titulo, genero, ubicacion, duracion, precio) {
    (this.titulo = titulo),
      (this.genero = genero),
      (this.ubicacion = ubicacion),
      (this.duracion = duracion);
    this.precio = 10000;
  }
}


// <!-- Card Género  -->

const dramaButton = document.querySelector("#drama");
const comediaButton = document.querySelector("#comedia");
const musicalButton = document.querySelector("#musical");
const alternativaButton = document.querySelector("#alternativa");

let genero;

function selectGenero(_genero) {
  genero = _genero;
  document.querySelector("#card-genero").style.display = "none";
  document.querySelector("#card-zona").style.display = "block";
}

const enClickDrama = () => {
  selectGenero("drama");
};

dramaButton.addEventListener("click", enClickDrama);

const enClickComedia = () => {
  selectGenero("comedia");
};
comediaButton.addEventListener("click", enClickComedia);

const enClickMusical = () => {
  selectGenero("musical");
};
musicalButton.addEventListener("click", enClickMusical);

const enClickAlternativo = () => {
  selectGenero("alternativa");
};
alternativaButton.addEventListener("click", enClickAlternativo);

// <!-- Card Zona  -->

const norteButton = document.querySelector("#CABA-norte");
const surButton = document.querySelector("#CABA-sur");
const GBAButton = document.querySelector("#GBA");

let zona;
function selectZona(_zona) {
  zona = _zona;
  document.querySelector("#card-zona").style.display = "none";
  document.querySelector("#card-tiempo").style.display = "block";
}

const enClickNorte = () => {
  selectZona("CABA NORTE");
};
norteButton.addEventListener("click", enClickNorte);

const enClickSur = () => {
  selectZona("CABA SUR");
};
surButton.addEventListener("click", enClickSur);

const enClickGBA = () => {
  selectZona("GBA");
};
GBAButton.addEventListener("click", enClickGBA);

// <!-- Card Tiempo  -->

const microButton = document.querySelector("#micro");
const dosButton = document.querySelector("#dos");
const todoButton = document.querySelector("#todo");

let tiempo;
let evfinal;

function selectTiempo(_tiempo) {
    tiempo = _tiempo; 
    document.querySelector("#card-tiempo").style.display = "none";
    console.log(genero, zona, tiempo);
    evfinal = listaDeEventos.find((ev) => tiempo == ev.duracion 
    && genero == ev.genero 
    && zona == ev.ubicacion)
    
    if(evfinal != null){
        document.querySelector("#card-evento-elegido").style.display = "block";
        document.querySelector("#titulo-elegido").innerHTML = evfinal.titulo
    }
}

const enClickMicro = () => {
  selectTiempo("micro espectáculo");
};
microButton.addEventListener("click", enClickMicro);

const enClickDos = () => {
  selectTiempo("hasta 2hs");
};
dosButton.addEventListener("click", enClickDos);

const enClickTodo = () => {
  selectTiempo("toma todo mi tiempo");
};
todoButton.addEventListener("click", enClickTodo);


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

// <!-- Card Vas a ir a ver  -->

const cambioButton = document.getElementById("btncambio");
const comprarButton = document.querySelector("#btncomprar");
const wishButton = document.querySelector("#btnwish");

cambioButton.addEventListener("click", selectCambio)

function selectCambio() {
    document.querySelector("#card-genero").style.display = "block";
    document.querySelector("#card-evento-elegido").style.display = "none";
}

wishButton.addEventListener ("click", selectWish)
let wishlist = JSON.parse(localStorage.getItem("wishlist")) || []  

function selectWish () { 
    let evfinal = listaDeEventos.find((ev) => ev.titulo === document.querySelector("#titulo-elegido").innerHTML);
    if (!wishlist.find((item) => item.titulo === evfinal.titulo)) {
        wishlist.push(evfinal);
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
        console.log (wishlist);
        Toastify({
        text: 'Se agregó ' + evfinal.titulo + ' a tu wishlist',
        duration: 3000
    }).showToast();
} else {
    Toastify({
        text: evfinal.titulo + ' ya está en tu wishlist',
        duration: 3000
    }).showToast();
} 
}
