function registrar() {

    let datos={
        name: $("#name").val(),
        description: $("#description").val(),
    }

    let datosPeticion = JSON.stringify(datos);


    if (validar()){
        $.ajax({
            url:"http://144.22.58.188:8080/api/Category/save",
            data : datosPeticion,
            type: 'POST',
            contentType:"application/JSON",

            success: function (respuesta) {
                console.log(respuesta);
                listar();
                estadoInicial();
                alert("Categoria añadida")
            },

            error: function (xhr, status) {
                alert("Error peticion POST..." + status );
            }
        });
    }
}

function traerCabañas(){
    $.ajax({
        url: "http://144.22.58.188:8080/api/Cabin/all",
        type: 'GET',
        dataType: 'json',

        success: function (respuesta) {
            console.log(respuesta);
            activarCampos(respuesta);
        },

        error: function (xhr, status) {
            alert("Ocurrio un problema al ejecutar la petición..." + status);
        },
    });
}

function activarCampos(items){

    /*var select = `<select class="entradasT" name="cabin" id="selector">
                <option value="0">Selecione una cabaña</option>`;
    for (var i=0; i < items.length; i++) {
                    select += `<option value="${items[i].id}">${items[i].name}</option>`;
    }
    select += `</select>`;*/

    /*$("#select").html(select);
    $("#select").show(500);*/             
    $("#nuevo").show(500);
}

/**
 * ventana nuevo registro
 */
function activaNuevo(){
    $(".contenedor_principal").css("background","#0066ff00");
    $(".contenedor_principal").css("box-shadow"," 2px 3px 4px #0066ff00");
    $(".pie_pagina").hide(500);
    $("#Content").show(500);
    $("#editar").hide();
    $("#nuevoRegistro").hide(500)
    $("#perfil").hide();
    $("#listado").hide(500);
    $("#Titulo_texto").hide(500);
    traerCabañas();
}

