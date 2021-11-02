function borrarRegistro(llaveRegistro) {
    $.ajax({
        url: "http://144.22.58.188:8080/api/Category/"+llaveRegistro,

        type: 'DELETE',
        contentType:"application/JSON",
        dataType: 'json',

        success: function (respuesta) {
            console.log(respuesta);
            listar();
            alert("Categoria borrada con exito!")
        },

        error: function (xhr, status) {
            alert("Error no se puede eliminar verifique si : 1- No esta asociado a algun elemento 2- Verifique si el servidor esta conectado" + status);
        }
    });
}