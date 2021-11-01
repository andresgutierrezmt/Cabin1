function editarRegistro(llaveRegistro) {
    let datos = {
        id: llaveRegistro
    }
    let datosPeticion = JSON.stringify(datos);

    $.ajax({
        url: "http://144.22.58.188:8080/api/Cabin/" + llaveRegistro,

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
    $("#brandEdit").val(items.brand);
    $("#roomsEdit").val(items.rooms);
    $("#categoryEdit").val(items.category.id);   
    $("#nameEdit").val(items.name); 
}

function actualizar() {

    let datos = {
        id: $("#idEdit").val(),
        brand: $("#brandEdit").val(),
        rooms: $("#roomsEdit").val(),
        category: {id : $("#categoryEdit").val()},
        name: $("#nameEdit").val()
    }

    let datosPeticion = JSON.stringify(datos);

    if (validarEditar()) {
        alert(datosPeticion);
        $.ajax({
            url: "http://144.22.58.188:8080/api/Cabin/update",

            data: datosPeticion,
            type: 'PUT',
            contentType: "application/JSON",

            success: function (respuesta) {
                console.log(respuesta);
                alert(("Registro actualizado"))
                listar();
                estadoInicial();
            },

            error: function (xhr, status) {
                alert("Error peticion Post, categoria inexistente " + status);
                //$("#mensajes").hide(1000);
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
    $("#nuevo").hide();
    $("#editar").show(500);
    $("#nuevoRegistro").hide(500);
    $("#listado").hide(500);
    $("#Titulo_texto").hide(500);
}