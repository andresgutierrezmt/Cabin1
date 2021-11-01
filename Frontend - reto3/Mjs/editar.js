function editarRegistro(llaveRegistro) {
    let datos = {
        id: llaveRegistro
    }

    let datosPeticion = JSON.stringify(datos);

    $.ajax({
        url: "https://gac366253d1c276-cabin.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message/"+llaveRegistro,
        type: 'GET',
        contentType: "application/JSON",
        dataType: 'json',

        success: function (respuesta) {
            console.log(respuesta);
            editarRespuesta(respuesta.items);
            activaEditar();
        },

        error: function (xhr, status) {
            alert("Error peticion PUT..." + status);
        }
    });
}

function editarRespuesta(items) {
    $("#idEdit").val(items[0].id);
    $("#nameEdit").val(items[0].messagetext); 
}

function actualizar() {
    let datos = {
        id: $("#idEdit").val(),
        messagetext: $("#mensajeEdit").val(),
    }

    let datosPeticion = JSON.stringify(datos);

    if (validarEditar()) {
        $.ajax({
            url: "https://gac366253d1c276-cabin.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message",
            data: datosPeticion,
            type: 'PUT',
            contentType: "application/JSON",

            success: function (respuesta) {
                console.log(respuesta);
                listar();
                estadoInicial();
                alert("Usuario actualizado con exito")
            },

            error: function (xhr, status) {
                alert("Error peticion Post..." + status);
            }
        });
    }
}

/**
 * Configura el aspecto de la página para actualizar el registro
 */
function activaEditar() {
    $(".contenedor_principal").css("background","#0066ff00");
    $(".contenedor_principal").css("box-shadow"," 2px 3px 4px #0066ff00");
    $("#nuevoRegistro").hide(500)
    $(".pie_pagina").hide(500);
    $("#editar").show(500);
    $("#Content").show(500);
    $("#nuevo").hide();
    $("#listado").hide(500);
    $("#Titulo_texto").hide(500);
}