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