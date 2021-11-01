$(document).ready(function () {
    estadoInicial();
    listar();
});

function listar() {
    $.ajax({
        url: "http://144.22.58.188:8080/api/Cabin/all",
        type: 'GET',
        dataType: 'JSON', 

        success: function (respuesta) {
            console.log(respuesta);
            listarRespuesta(respuesta);
        },

        error: function (xhr, status) {
            alert("Error al obtener datos" + status);
        },

        complete: function (xhr, status) {
            $("#mensajes").show(5000);
            $("#mensajes").html("Obteniendo listado de ...");
            $("#mensajes").hide();
        }
    });
}

function listarRespuesta(items) {
    $("#listado").html("");
    $("#listado").show();

    var tabla = `<table>
                <thead>
                    <th>Nombre</th>
                    <th>Marca</th>
                    <th>habitaciones</th>
                    <th>category</th>
                    <th colspan="3">Acciones</th>
                </thead>`;

    for (var i=0; i < items.length; i++) {
        tabla +=`<tr>
                    <td>${items[i].name}</td>
                    <td>${items[i].brand}</td>
                    <td>${items[i].rooms}</td>
                    <td>${items[i].category.id}</td>
                    <td><button onclick="editarRegistro(${items[i].id})">Editar</button></td>
                    <td><button onclick="borrarRegistro(${items[i].id})">Borrar</button></td>
                    <td><button onclick="descripcion(${items[i].id})">Descripcion</button></td>
                </tr>`;
    }

    tabla +=`</table>`;
    $("#listado").html(tabla);
}


function estadoInicial(){
    $(".contenedor_principal").css("background","rgb(255, 255, 255)");
    $(".contenedor_principal").css("box-shadow"," 2px 3px 4px rgb(51, 51, 51)");
    $(".pie_pagina").show(500);
    $("#barra_lateral").hide();
    $("#nuevo").hide();    
    $("#Content").hide();
    $("#editar").hide();
    $("#listado").show(500);
    $("#nuevoRegistro").show(500);

    //limpia el contenido de los campos del formulario nuevo
    $("#id").val(""),
    $("#brand").val(""),
    $("#rooms").val(""),
    $("#category").val(""),
    $("#name").val("")
}