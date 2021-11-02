function borrarRegistro(llaveRegistro) {
    $.ajax({
        url: "http://144.22.58.188:8080/api/Client/"+llaveRegistro,

        type: 'DELETE',
        contentType:"application/JSON",
        dataType: 'json',

        success: function (respuesta) {
            console.log(respuesta);
            listar();
            alert("Borrado con exito :)")
        },

        error: function (xhr, status) {
            alert("Error no se puede eliminar el usuario verifique si : 1- No esta asociado a alguna reserva o algun elemento 2- Verifique si el servidor esta conectado" + status);
        }
    });
}