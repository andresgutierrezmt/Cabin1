$(document).ready(function () {
    estadoInicial();
    listar();
});

function listar() {
    $.ajax({
        url: "http://144.22.58.188:8080/api/Reservation/all",
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
                    <th>Fecha de inicio</th>
                    <th>Fecha de finalizacion</th>
                    <th>Usuario</th>
                    <th>Cabaña</th>
                    <th>Estado</th>
                    <th colspan="2">Acciones</th>
                </thead>`;

    for (var i=0; i < items.length; i++) {
        tabla +=`<tr>
                    <td>${items[i].startDate}</td>
                    <td>${items[i].devolutionDate}</td>
                    <td>${items[i].client.name}</td>
                    <td>${items[i].cabin.name}</td>
                    <td>${items[i].status}</td>
                    <td><button onclick="borrarRegistro(${items[i].idReservation})">cancelar Reservacion</button></td>
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
    $("#reportes").hide();
    $("#editar").hide();
    $("#listado").show(500);
    $("#nuevoRegistro").show(500);
    $("#reporte").show(500);

    //limpia el contenido de los campos del formulario nuevo
    $("#id").val(""),
    $("#brand").val(""),
    $("#rooms").val(""),
    $("#category").val(""),
    $("#name").val("")
}