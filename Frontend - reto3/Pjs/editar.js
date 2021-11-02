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
            activaEditar(respuesta);
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
    $("#descriptionN").val(items.description);
}

function traerCategoriasedit(cabaña){
    $.ajax({
        url: "http://144.22.58.188:8080/api/Category/all",
        type: 'GET',
        dataType: 'json',

        success: function (respuesta) {
            console.log(respuesta);
            llenarSelectoredit(respuesta, cabaña);
        },

        error: function (xhr, status) {
            alert("Ocurrio un problema al ejecutar la petición..." + status);
        },

        complete: function (xhr, status) {
            $("message").show(5000)
            $("message").html("Obteniendo listado de ...");
            $("message").hide(5000)
        }
    })
}

function llenarSelectoredit(items, cabaña){

    var selectEdit = `<select class="entradasT" name="cabin" id="selectorEdit">
                <option id ="editar" value="0">Selecione una categoria</option>`;
    for (var i=0; i < items.length; i++) {
                    selectEdit += `<option id = "editar" value="${items[i].id}">${items[i].name}</option>`;
    }

    selectEdit += `</select>`;   
    $("#selectEdit").html(selectEdit);
    $("#selectorEdit").val(cabaña.category.id);
    $("#selectEdit").show(500);             
    $("#editar").show(500);
}

function actualizar() {

    let datos = {
        id: $("#idEdit").val(),
        name: $("#nameEdit").val(),
        brand: $("#brandEdit").val(),
        rooms: $("#roomsEdit").val(),
        category: {id : $("#selectorEdit").val()},
        description: $("#descriptionN").val()
    }
    
    let datosPeticion = JSON.stringify(datos);

    if (validarEditar()) {
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
function activaEditar(cabaña) {
    $(".contenedor_principal").css("background","#0066ff00");
    $(".contenedor_principal").css("box-shadow"," 2px 3px 4px #0066ff00");
    $(".pie_pagina").hide(500);
    $("#idEdit").hide();
    $("#editar").hide();
    $("#Content").show(500);
    $("#nuevo").hide();
    $("#descripcion").hide(500);
    $("#nuevoRegistro").hide(500);
    $("#listado").hide(500);
    $("#Titulo_texto").hide(500);
    traerCategoriasedit(cabaña);
}