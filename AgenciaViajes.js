let solicitudes = []

function addSolicitudes(){
    
    let nombre = document.getElementById("nombre")
    let origen = document.getElementById("origen")
    let destino = document.getElementById("destino")
    let numero = document.getElementById("numero")
    let fecha = document.getElementById("fecha");

    let solicitud = {
        nombre_solicitud: nombre.value,
        origen_solicitud: origen.value,
        destino_solicitud: destino.value,
        numero_solicitud: numero.value,
        fecha_solicitud: fecha.value,
    };
    solicitudes.push(solicitud);
    console.log(solicitud)
}

function mostrarSolicitudes(){
    let tabla = document.getElementById("destino");
    let aside = document.querySelector("*.aside2");

    if(aside.classList.contains("aside")){
        aside.classList.remove("aside")
    };
    if(tabla.value == "Canarias"){
        console.log(tabla.value)
    }

}