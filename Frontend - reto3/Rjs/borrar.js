function borrarRegistro(llaveRegistro) {
    $.ajax({
        url: "http://144.22.58.188:8080/api/Reservation/"+llaveRegistro,

        type: 'GET',
        contentType:"application/JSON",
        dataType: 'json',

        success: function (respuesta) {
            console.log(respuesta);
            borrar(respuesta);
        },

        error: function (xhr, status) {
            alert("Ocurrio un problema al ejecutar la petición..." + status);
        }
    });
}

function borrar(respuesta){
    let datos={
        startDate: respuesta.startDate,
        devolutionDate: respuesta.devolutionDate,
        client: {idClient: respuesta.client.idClient},
        cabin: {id : respuesta.cabin.id},
        status: "cancelled"
    }
    
    let datosPeticion = JSON.stringify(datos);

    $.ajax({
        
        url: "http://144.22.58.188:8080/api/Reservation/"+respuesta.idReservation,
        type: 'DELETE',
        contentType:"application/JSON",

        success: function (respuesta) {
            console.log(respuesta);
            cancelar(datosPeticion);
        },

        error: function (xhr, status) {
            alert("Ocurrio un problema al ejecutar la petición..." + status);
        }
    });
}

function cancelar(datosPeticion){

    $.ajax({
        url:"http://144.22.58.188:8080/api/Reservation/save",
        data : datosPeticion,
        type: 'POST',
        contentType:"application/JSON",

        success: function (respuesta) {
            console.log(respuesta);
            listar();
            alert("Cancelada la reservacion")
        },

        error: function (xhr, status) {
            alert("Error peticion POST..." + status );
        }
    });

}