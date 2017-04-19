// Modal Image Gallery
function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
  var captionText = document.getElementById("caption");
  captionText.innerHTML = element.alt;
}

// Cambiar entre enseñar y esconder la sidebar al hacer click en el icono de menú
var mySidebar = document.getElementById("mySidebar");
    
function w3_open() {
    if (mySidebar.style.display === 'block') {
        mySidebar.style.display = 'none';
    } else {
        mySidebar.style.display = 'block';
    }
}
    
// Cerrar la sidebar con el icono de cerrar
function w3_close() {
    mySidebar.style.display = "none";
}

function cambio(){
    //Cosillas responsive
    var delta;
    var altura = document.getElementById('marx').offsetHeight;
    var theDi = document.getElementById('bigdi');
    var theImg = document.getElementById('divalt');
    var theCol = document.getElementById('col');
    theDi.height=altura+'px';
    theImg.style.position="relative";
    theImg.height=altura;
    theCol.style.height=altura+"px";
    theImg.width = 16*theImg.height/9;
    
    //Comprobamos si la columna es más ancha que la imagen o al revés.
    var wid = document.documentElement.clientWidth;
    if(theImg.width > 0.5*wid){
        theCol.maxWidth=0.5*wid;
        delta = theImg.width - 0.5*wid;
        theImg.style.left = -delta/2+"px";
        theImg.src="img/splash-short.png";
    } else {
        theImg.width = 0.5*wid;
        theImg.height = 9*theImg.width/16;
        delta = theImg.height - altura;
        theImg.style.top = -delta/2+"px";
        theImg.src="img/splash-long.png";
    }
}

//Cosas a ejecutar cuando se cargue la página.
window.onresize = cambio;
window.onload = cambio;