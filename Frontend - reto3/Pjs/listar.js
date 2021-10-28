$(document).ready(function () {
    estadoInicial();
    listar();
});

function listar() {
    $.ajax({
        url: "https://gac366253d1c276-cabin.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/cabin/cabin",
        type: 'GET',
        dataType: 'json',

        success: function (respuesta) {
            console.log(respuesta.items);
            listarRespuesta(respuesta.items);
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
                    <th>Marca</th>
                    <th>habitacion</th>
                    <th>Categoria</th>
                    <th>Nombre</th>
                    <th colspan="2">Acciones</th>
                </thead>`;

    for (var i=0; i < items.length; i++) {
        tabla +=`<tr>
                    <td>${items[i].brand}</td>
                    <td>${items[i].rooms}</td>
                    <td>${items[i].category_id}</td>
                    <td>${items[i].name}</td>
                    <td><button onclick="editarRegistro(${items[i].id})">Editar</button></td>
                    <td><button onclick="borrarRegistro(${items[i].id})">Borrar</button></td>
                </tr>`;
    }

    tabla +=`</table>`;
    $("#listado").html(tabla);
}


function estadoInicial(){
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