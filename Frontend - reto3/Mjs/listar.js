/**
 * Inicializador
 */
$(document).ready(function () {
    estadoInicial();
    listar();
});

/**
 * Funcion listar
 */
function listar() {
    /**
     * Inicio servicio Ajax
     */
    $.ajax({
        url: "http://144.22.58.188:8080/api/Client/all",
        type: 'GET',
        dataType: 'json',

        success: function (respuesta) {
            console.log(respuesta);
            listarRespuesta(respuesta);
        },

        error: function (xhr, status) {
            alert("Ocurrio un problema al ejecutar la petición..." + status);
        },

        complete: function (xhr, status) {
            $("#mensajes").html("cargando...");
            $("#mensajes").hide();
        }
    });
}

/**
 * Generar tabla con los items 
 */
function listarRespuesta(items) {
    $("#listado").html("");
    $("#listado").show();
    var tabla = `<table>
                <thead>
                    <th>Nombre</th>
                    <th> mensaje </th>
                    <th> Opcion </th>
                </thead>`;
    for (var i=0; i < items.length; i++) {
        for(var j=0; j< items[i].messages.length; j++){
            tabla +=`<tr>
                        <td>${items[i].name}</td>
                        <td>${items[i].messages[j].messageText}</td>
                        <td><button onclick="borrarRegistro(${items[i].messages[j].idMessage})">Borrar</button></
                        td>
                        </tr>`;
        }
    }

    tabla +=`</table>`;
    $("#listado").html(tabla);
}

/**
 * Volver al estado inicial
 */
function estadoInicial(){
    $(".contenedor_principal").css("background","rgb(255, 255, 255)");
    $(".contenedor_principal").css("box-shadow"," 2px 3px 4px rgb(51, 51, 51)");
    $(".pie_pagina").show(500);
    $("#nuevo").hide();  
    $("#Content").hide();
    $("#editar").hide();
    $("#listado").show(500);
    $("#nuevoRegistro").show()
//vaciar casillas
    $("#id").val(""),
    $("#brand").val(""),
    $("#rooms").val(""),
    $("#category").val(""),
    $("#name").val("")
}V