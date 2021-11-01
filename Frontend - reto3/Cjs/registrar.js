function registrar() {

    let datos={
        name: $("#name").val(),
        email: $("#email").val(),
        password: $("#password").val(),
        age: $("#age").val(),
    }
    let datosPeticion = JSON.stringify(datos);

    if (validar()){
        $.ajax({
            url:"http://144.22.58.188:8080/api/Client/save",
            data : datosPeticion,
            type: 'POST',
            contentType:"application/JSON",

            success: function (respuesta) {
                console.log(respuesta);
                listar();
                estadoInicial();
                alert("Registro realizado con exito!")
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
    $(".contenedor_principal").css("background","#0066ff00");
    $(".contenedor_principal").css("box-shadow"," 2px 3px 4px #0066ff00");
    $(".pie_pagina").hide(500);
    $("#Content").show(500);
    $("#nuevo").show(500);
    $("#id").focus();
    $("#editar").hide();
    $("#nuevoRegistro").hide(500)
    $("#perfil").hide();
    $("#listado").hide(500);
    $("#Titulo_texto").hide(500);
}