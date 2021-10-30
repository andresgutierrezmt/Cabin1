function editarRegistro(llaveRegistro) {
    let datos = {
        id: llaveRegistro
    }
    let datosPeticion = JSON.stringify(datos);

    $.ajax({
        url: "https://gac366253d1c276-cabin.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/cabin/cabin/" + llaveRegistro,

        type: 'GET',
        contentType: "application/JSON",
        dataType: 'json',

        success: function (respuesta) {
            console.log(respuesta);
            editarRespuesta(respuesta.items);
            activaEditar();
        },

        error: function (xhr, status) {
            alert("Error peticion PUT..." + status);
        }
    });
}

function editarRespuesta(items) {
    $("#idEdit").val(items[0].id);
    $("#brandEdit").val(items[0].brand);
    $("#roomsEdit").val(items[0].rooms);
    $("#categoryEdit").val(items[0].category_id);   
    $("#nameEdit").val(items[0].name); 
}

function actualizar() {
    let datos = {
        id: $("#idEdit").val(),
        brand: $("#brandEdit").val(),
        rooms: $("#roomsEdit").val(),
        category_id: $("#categoryEdit").val(),
        name: $("#nameEdit").val()
    }

    let datosPeticion = JSON.stringify(datos);

    if (validarEditar()) {
        $.ajax({
            url: "https://gac366253d1c276-cabin.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/cabin/cabin",

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
                alert("Error peticion Post..." + status);
                //$("#mensajes").hide(1000);
            }
        });
    }
}

/**
 * Configura el aspecto de la página para actualizar el registro
 */
function activaEditar() {
    $("#idEdit").hide();
    $("#Content").show(500);
    $("#nuevo").hide();
    $("#editar").show(500);
    $("#nuevoRegistro").hide(500);
    $("#listado").hide(500);
    $("#Titulo_texto").hide(500);
}