function borrarRegistro(llaveRegistro) {
    $.ajax({
        url: "http://144.22.58.188:8080/api/Cabin/"+llaveRegistro,

        type: 'DELETE',
        contentType:"application/JSON",
        dataType: 'json',

        success: function (respuesta) {
            console.log(respuesta);
            alert("Cabaña eliminada");
            listar();
        },

        error: function (xhr, status) {
            alert("Error no se puede eliminar verifique si : 1- No esta asociado a algun elemento 2- Verifique si el servidor esta conectado" + status);
        }
    });
}