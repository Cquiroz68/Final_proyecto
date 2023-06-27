function mostrarFechaHora() {
    let fecha = new Date();

    let opcionesFecha = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let opcionesHora = { hour: 'numeric', minute: 'numeric', second: 'numeric' };

    let fechaActual = fecha.toLocaleDateString('es-ES', opcionesFecha);
    let horaActual = fecha.toLocaleTimeString('es-ES', opcionesHora);

    document.getElementById("fecha").innerHTML = "Fecha: " + fechaActual;
    document.getElementById("hora").innerHTML = "Hora: " + horaActual;
}

mostrarFechaHora();
setInterval(mostrarFechaHora, 1000); // Actualizar cada segundo
