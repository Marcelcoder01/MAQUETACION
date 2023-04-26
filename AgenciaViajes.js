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
    console.log(solicitudes)
}

function mostrarSolicitudes(){
    let tabla = document.getElementById("tabla");
    let aside = document.querySelector("*.aside2");

    if(aside.classList.contains("aside")){
        aside.classList.remove("aside")
    };

    tabla.innerHTML = `<tr class="table__head">
                       <th>Nombre</th>
                       <th>Origen</th>
                       <th>Destino</th>
                       <th>Nº de Personas</th>
                       <th>Fecha</th>
                       </tr>`;
    
    for (let i = 0; i < solicitudes.length; i++) {
        if(solicitudes[i].destino_solicitud.toUpperCase() == "CANARIAS" || 
        solicitudes[i].destino_solicitud.toUpperCase() == "MALLORCA" ||
        solicitudes[i].destino_solicitud.toUpperCase() == "GALICIA")
        { 
            tabla.innerHTML += `<tr class="table__head">
            <th>${solicitudes[i].nombre_solicitud}</th>
            <th>${solicitudes[i].origen_solicitud}</th>
            <th>${solicitudes[i].destino_solicitud}</th>
            <th>${solicitudes[i].numero_solicitud}</th>
            <th>${solicitudes[i].fecha_solicitud}</th>
            </tr>`
        }
    }
}

