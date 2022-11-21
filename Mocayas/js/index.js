 /* Array con las imagenes y enlaces que se iran mostrando en la web */   
  let imagenes=new Array(
    ['img/slide1.jpg'],
    ['img/slide2.jpg'],
    ['img/slide3.jpg'],
    ['img/slide4.jpg']
);

let contador=0;
 //Funcion para cambiar la imagen y link
function rotarImagenes(){
    // cambiamos la imagen y la url
    contador++
    document.getElementById("imagen").src=imagenes[contador%imagenes.length][0]; 
}

 //Función que se ejecuta una vez cargada la página
onload=function(){
    // Cargamos una imagen aleatoria
    rotarImagenes();
    // Indicamos que cada 5 segundos cambie la imagen
    setInterval(rotarImagenes,1500);
}
