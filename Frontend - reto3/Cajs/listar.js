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
        url: "http://144.22.58.188:8080/api/Category/all",
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
            $("message").show(5000)
            $("message").html("Obteniendo listado de ...");
            $("message").hide(5000)
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
                    <th> id </th>
                    <th> nombre </th>
                    <th> descripcion </th>
                    <th colspan="2"> Opciones </th>
                </thead>`;
    for (var i=0; i < items.length; i++) {
        tabla +=`<tr>
                    <td>${items[i].id}</td>
                    <td>${items[i].name}</td>
                    <td>${items[i].description}</td>
                    <td><button onclick="editarRegistro(${items[i].id})">Editar</button></td>
                    <td><button onclick="borrarRegistro(${items[i].id})">Borrar</button></td>
                </tr>`;
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
    $("#perfil").hide();
    $("#listado").show(500);
    $("#nuevoRegistro").show(500);
    $("#Titulo_texto").show(500);
//vaciar casillas
    $("#password").val("");
    $("#email").val("");
    $("#name").val("");
    $("#age").val("");
}