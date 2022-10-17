document.querySelector(".menu__btn").addEventListener("click", () => {
  document.querySelector(".menu").classList.toggle("show");
});



ScrollReveal().reveal('.section' , {delay:100});
ScrollReveal().reveal('.photos' , {delay:100});
ScrollReveal().reveal('.section-reserve' , {delay:300});
ScrollReveal().reveal('.footer' , {delay:300});


const typed = new Typed(".typed", {
  strings: [
    '<b class="party">Bienvenidos a la noche de Halloween "Disco Nocturna" mas info en el WhatsApp ...</b>',
  ],
  typeSpeed: 75, //Vetoctdad en mltsegundos para poner una letra,
  startDelay: 300, // Ttempo de retraso en iniciar la antmoc ton. Aplica tombien cuando termtna y vuelve a tntctar,
  backSpeed: 75, // Veloctdad en mtttsegundos para borrrar una letra,
  smartBackspace: true, // Eltmtnar solamente tas palabras que sean nuevas en uno codena de texto .
  shuffle: false, // Alterar el orden en el que escrtbe las palabras.
  backDelay: 1500, // Ttempo de espera despues de que termina de escrtbir una palabra.
  loop: true, // Repetir el array de strings
  loopCount: false, //Cont tdad de veces a repet tr el array. false tnfintte
  showCursor: true, //Hostrar cursor palpttanto
  cursorChar: "|", //caracter para et cursor
  contentType: "html", //html o. Inull paro texto stn formatos olomonte
});

  const IMAGENES = [
    'assets/img/party1.jpg',
    'assets/img/party2.jpg',
    'assets/img/party3.jpg' 
];
const TIEMPO_INTERVALO_MILESIMAS_SEG = 1000;
let posicionActual = 0;
let $botonRetroceder = document.querySelector('#retroceder');
let $botonAvanzar = document.querySelector('#avanzar');
let $imagen = document.querySelector('#imagen');
let $botonPlay = document.querySelector('#play');
let $botonStop = document.querySelector('#stop');
let intervalo;

// Funciones

/**
 * Funcion que cambia la foto en la siguiente posicion
 */
function pasarFoto() {
    if(posicionActual >= IMAGENES.length - 1) {
        posicionActual = 0;
    } else {
        posicionActual++;
    }
    renderizarImagen();
}

/**
 * Funcion que cambia la foto en la anterior posicion
 */
function retrocederFoto() {
    if(posicionActual <= 0) {
        posicionActual = IMAGENES.length - 1;
    } else {
        posicionActual--;
    }
    renderizarImagen();
}

/**
 * Funcion que actualiza la imagen de imagen dependiendo de posicionActual
 */
function renderizarImagen () {
    $imagen.style.backgroundImage = `url(${IMAGENES[posicionActual]})`;
}

/**
 * Activa el autoplay de la imagen
 */
function playIntervalo() {
    intervalo = setInterval(pasarFoto, TIEMPO_INTERVALO_MILESIMAS_SEG);
    // Desactivamos los botones de control
    $botonAvanzar.setAttribute('disabled', true);
    $botonRetroceder.setAttribute('disabled', true);
    $botonPlay.setAttribute('disabled', true);
    $botonStop.removeAttribute('disabled');

}

/**
 * Para el autoplay de la imagen
 */
function stopIntervalo() {
    clearInterval(intervalo);
    // Activamos los botones de control
    $botonAvanzar.removeAttribute('disabled');
    $botonRetroceder.removeAttribute('disabled');
    $botonPlay.removeAttribute('disabled');
    $botonStop.setAttribute('disabled', true);
}

// Eventos
$botonAvanzar.addEventListener('click', pasarFoto);
$botonRetroceder.addEventListener('click', retrocederFoto);
$botonPlay.addEventListener('click', playIntervalo);
$botonStop.addEventListener('click', stopIntervalo);
// Iniciar
renderizarImagen();