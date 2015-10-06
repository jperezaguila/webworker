//wbworker en ie9 no funciona

var worker = new Worker("temporizador.js");

function lanzarWorker() {
    
}


worker.message=function(evt) {
    //aqui obtenemos los datos de segundos
    document.getElementById("segundos").innerHTML = evt.data;
    //si evet.data es igual a cero volvemos a ejeutar.
    if (evt.data == "0") {
        location.reload();
    }
}

function parar() {
    worker.terminate();
    worker = undefined;
}

function reiniciar() {
    if (worker == undefined)
        lanzarWorker();

    //(worker = new Worker("temporizado.js")
    else
        worker.postMessage("reiniciar");
}

document.getElementById("reiniciar").addEventListener("click", reiniciar);
document.getElementById("stop").addEventListener("click",parar);