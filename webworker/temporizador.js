//creacion de worker
var segundos = 60;

function bajar() {
    segundos--;
    // escribe un mensaje, el codigo script padre .... donde este guardado este worker  ó postMessage(segundos); es lo mismo.
    postMessage(segundos);
    //settimeout se ejecuta la funcion de argumento cada tiempo determinado (1000)
    setTimeout("bajar()", 1000);
}

self.onmessage=function(evt) {
    if (evt.data == "reiniciar")
        segundos = 60;
}

bajar();
