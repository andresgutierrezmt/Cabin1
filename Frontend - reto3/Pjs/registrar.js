function traerCategorias(){
    $.ajax({
        url: "http://144.22.58.188:8080/api/Category/all",
        type: 'GET',
        dataType: 'json',

        success: function (respuesta) {
            console.log(respuesta);
            llenarSelector(respuesta);
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

function llenarSelector(items){

    var select = `<select class="entradasT" name="cabin" id="selector">
                <option value="0">Selecione una categoria</option>`;
    for (var i=0; i < items.length; i++) {
                    select += `<option value="${items[i].id}">${items[i].name}</option>`;
    }

    select += `</select>`;   
    $("#select").html(select);
    $("#select").show(500);             
    $("#nuevo").show(500);
}

function registrar() {

    let datos={
        name: $("#name").val(),
        brand: $("#brand").val(),
        rooms: $("#rooms").val(),
        category:{ id: $("#selector").val()},
        description: $("#descriptionN1").val()
    }
    let datosPeticion = JSON.stringify(datos);
    if (validar()){
        $.ajax({
            url:"http://144.22.58.188:8080/api/Cabin/save",

            data : datosPeticion,
            type: 'POST',
            contentType:"application/JSON",

            success: function (respuesta) {
                console.log(respuesta);
                alert("Cabaña agregada correctamente");
                listar();
                estadoInicial();
            },
    
            error: function (xhr, status) {
                alert("Error peticion POST..." + status );
            }
        });
    }
}

function activaNuevo(){
    $(".contenedor_principal").css("background","#0066ff00");
    $(".contenedor_principal").css("box-shadow"," 2px 3px 4px #0066ff00");
    $(".pie_pagina").hide(500);
    $("#Content").show(500);
    $("#nuevo").hide();
    $("#id").focus();
    $("#editar").hide();
    $("#descripcion").hide(500);
    $("#nuevoRegistro").hide(500);
    $("#listado").hide(500);
    $("#Titulo_texto").hide(500);
    traerCategorias();
}