function registrar() {

    let datos={
        name: $("#name").val(),
        brand: $("#brand").val(),
        rooms: $("#rooms").val(),
        category:{ id: $("#category").val()},
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
    $("#nuevo").show(500);
    $("#id").focus();
    $("#editar").hide();
    $("#descripcion").hide(500);
    $("#nuevoRegistro").hide(500);
    $("#listado").hide(500);
    $("#Titulo_texto").hide(500);
}