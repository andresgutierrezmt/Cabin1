function registrar() {

    let datos={
        id: $("#id").val(),
        messagetext: $("#mensaje").val(),
    }
    
    let datosPeticion = JSON.stringify(datos);

    if (validar()){
        $.ajax({
            url:"https://gac366253d1c276-cabin.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message",
            data : datosPeticion,
            type: 'POST',
            contentType:"application/JSON",

            success: function (respuesta) {
                console.log(respuesta);
                listar();
                estadoInicial();
                alert("mensaje creado con exito :)");
            },

            error: function (xhr, status) {
                alert("Error peticion POST..." + status );
            }
        });
    }
}

/**
 * ventana nuevo registro
 */
function activaNuevo(){
    $("#nuevo").show(500);
    $("#id").focus();
    $("#editar").hide();
    $("#nuevoRegistro").hide(500)
    $("#perfil").hide();
    $("#listado").show(500);
}