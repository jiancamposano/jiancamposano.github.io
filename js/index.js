
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

const items = document.querySelectorAll('img');
const itemCount = items.length;
const nextItem = document.querySelector('.next');
const previousItem = document.querySelector('.previous');
let count = 0;

function showNextItem() {
  items[count].classList.remove('active');

  if(count < itemCount - 1) {
    count++;
  } else {
    count = 0;
  }

  items[count].classList.add('active');
  console.log(count);
}

function showPreviousItem() {
  items[count].classList.remove('active');

  if(count > 0) {
    count--;
  } else {
    count = itemCount - 1;
  }

  items[count].classList.add('active');
  console.log(count);
}

function keyPress(e) {
  e = e || window.event;
  
  if (e.keyCode == '37') {
    showPreviousItem();
  } else if (e.keyCode == '39') {
    showNextItem();
  }
}

nextItem.addEventListener('click', showNextItem);
previousItem.addEventListener('click', showPreviousItem);
document.addEventListener('keydown', keyPress);