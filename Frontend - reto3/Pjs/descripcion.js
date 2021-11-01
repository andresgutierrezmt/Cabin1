function obtener(key){
    $.ajax({
        url: "http://144.22.58.188:8080/api/Cabin/" + key,
        Type: 'GET',
        dataType: 'JSON',

        success: function (respuesta) {
            console.log(respuesta.description)
            mostrar(respuesta.description);
        }
    
    })
}

function mostrar(descripcion){

$("#description").html(descripcion);


var botones = `<button class="btnperfil" onclick="estadoInicial();">atras</button>`;

$("#botones").html(botones);
$("#botones").show();
$("#descripcion").show(500);
}



function descripcion(key){ 
    $(".contenedor_principal").css("background","#0066ff00");
    $(".contenedor_principal").css("box-shadow"," 2px 3px 4px #0066ff00");
    $(".pie_pagina").hide(500);
    $("#Titulo_texto").hide(500);
    $("#Content").show(500);
    $("#nuevo").hide();
    $("#editar").hide();
    $("#listado").hide(500);
    $("#nuevoRegistro").hide()
    obtener(key);
}