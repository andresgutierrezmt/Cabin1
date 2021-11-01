function editarRegistro(llaveRegistro) {
    let datos = {
        id: llaveRegistro
    }

    let datosPeticion = JSON.stringify(datos);

    $.ajax({
        url: "http://144.22.58.188:8080/api/Client/"+llaveRegistro,
        type: 'GET',
        contentType: "application/JSON",
        dataType: 'json',

        success: function (respuesta) {
            console.log(respuesta);
            editarRespuesta(respuesta);
            activaEditar();
        },

        error: function (xhr, status) {
            alert("Error peticion PUT..." + status);
        }
    });
}

function editarRespuesta(items) {
    $("#idEdit").val(items.id);
    $("#nameEdit").val(items.name);
    $("#emailEdit").val(items.email);
    $("#ageEdit").val(items.age);   
    $("#passwordEdit").val();
}

function actualizar() {
    let datos = {
        id: $("#idEdit").val(),
        name: $("#nameEdit").val(),
        email: $("#emailEdit").val(),
        age: $("#ageEdit").val(),
        password: $("#passwordEdit").val()
    }

    let datosPeticion = JSON.stringify(datos);

    if (validarEditar()) {
        $.ajax({
            url: "http://144.22.58.188:8080/api/Client/update",
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
    $(".pie_pagina").hide(500);
    $("#idEdit").hide();
    $("#Content").show(500);
    $("#editar").show(500);
    $("#nuevo").hide();
    $("#nuevoRegistro").hide()
    $("#perfil").hide();
    $("#listado").hide(500);
}