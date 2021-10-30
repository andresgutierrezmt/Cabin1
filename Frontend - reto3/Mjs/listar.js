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
        url: "https://gac366253d1c276-cabin.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message",
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
                    <th> id </th>
                    <th> mensaje </th>
                    <th colspan="2"> Opciones </th>
                </thead>`;
    for (var i=0; i < items.length; i++) {
        tabla +=`<tr>
                    <td>${items[i].id}</td>
                    <td>${items[i].messagetext}</td>
                    <td><button onclick="editarRegistro(${items[i].id})">Editar</button></td>
                    <td><button onclick="borrarRegistro(${items[i].id})">Borrar</button></
                    td>
                    </tr>`;
    }

    tabla +=`</table>`;
    $("#listado").html(tabla);
}

/**
 * Volver al estado inicial
 */
function estadoInicial(){
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