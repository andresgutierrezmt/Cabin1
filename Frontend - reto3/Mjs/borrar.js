function borrarRegistro(llaveRegistro) {
    $.ajax({
        url: "http://144.22.58.188:8080/api/Message/"+llaveRegistro,

        type: 'DELETE',
        contentType:"application/JSON",
        dataType: 'json',

        success: function (respuesta) {
            console.log(respuesta);
            alert("Borrado con exito :)")
            listar();
        },

        error: function (xhr, status) {
            $("#mensajes").html("Ocurrio un problema al ejecutar la petición..." + status);
            $("#mensajes").hide(1000);
        }
    });
}