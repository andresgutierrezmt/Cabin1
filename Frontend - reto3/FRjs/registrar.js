$(document).ready(function () {
    activaNuevo();
});

function traerUsuario(){
    $.ajax({
        url:"http://144.22.58.188:8080/api/Client/all",
        type: 'GET',
        contentType:"application/JSON",

        success: function (respuesta) {
            console.log(respuesta);
            validacion(respuesta);
        },

        error: function (xhr, status) {
            alert("Error peticion POST..." + status );
        }
    });
}

function validacion(items){
    var emailIngersado =  $("#email").val();
    var contraseñaIngresada = $("#password").val();
    var contador = 0;

    for (var i=0; i < items.length; i++) {
        if(emailIngersado == items[i].email && contraseñaIngresada == items[i].password){
            registrar(items[i].idClient);
            break;
        }
        else{
            contador += 1;
        }
    }

    if(contador == items.length){
        alert("correo o contraseña incorrectos / correo no registrado")
    }


}

function registrar(id) {

    let datos={
        startDate: $("#start-date").val(),
        devolutionDate: $("#stop-date").val(),
        client: {idClient: id},
        cabin: {id : $("#selector").val()},
        status: "completed"
    }
    
    let datosPeticion = JSON.stringify(datos);

    if (validar()){
        $.ajax({
            url:"http://144.22.58.188:8080/api/Reservation/save",
            data : datosPeticion,
            type: 'POST',
            contentType:"application/JSON",

            success: function (respuesta) {
                $("#start-date").val(""),
                $("#stop-date").val(""),
                console.log(respuesta);
                alert("Registro realizado con exito!")

                location.href="index.html";
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

    var select = `<select class="entradasT" name="cabin" id="selector">
                <option value="0">Selecione una cabaña</option>`;
    for (var i=0; i < items.length; i++) {
                    select += `<option value="${items[i].id}">${items[i].name}</option>`;
    }
    select += `</select>`;

    $("#select").html(select);
    $("#select").show(500);             
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
    traerCabañas();
}

