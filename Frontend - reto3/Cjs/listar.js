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
        url: "https://gac366253d1c276-cabin.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client",
        type: 'GET',
        dataType: 'json',

        success: function (respuesta) {
            console.log(respuesta.items);
            listarRespuesta(respuesta.items);
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
                    <th colspan="3"> Opciones </th>
                </thead>`;
    for (var i=0; i < items.length; i++) {
        tabla +=`<tr>
                    <td>${items[i].id}</td>
                    <td>${items[i].name}</td>
                    <td><button onclick="editarRegistro(${items[i].id})">Editar</button></td>
                    <td><button onclick="borrarRegistro(${items[i].id})">Borrar</button></td>
                    <td><button onclick="Perfil(${items[i].id})">Perfil</button></td>
                </tr>`;
    }

    tabla +=`</table>`;
    $("#listado").html(tabla);
}

/**
 * Volver al estado inicial
 */

function estadoInicial(){
<<<<<<< HEAD
=======
    $(".contenedor_principal").css("background","rgb(255, 255, 255)");
    $(".contenedor_principal").css("box-shadow"," 2px 3px 4px rgb(51, 51, 51)");
    $(".pie_pagina").show(500);
>>>>>>> 99942785d8bddc5227634bcb9dccfc8b77f691d5
    $("#nuevo").hide();    
    $("#Content").hide();
    $("#editar").hide();
    $("#perfil").hide();
    $("#listado").show(500);
    $("#nuevoRegistro").show(500)
//vaciar casillas
    $("#id").val(""),
    $("#brand").val(""),
    $("#rooms").val(""),
    $("#category").val(""),
    $("#name").val("")
}