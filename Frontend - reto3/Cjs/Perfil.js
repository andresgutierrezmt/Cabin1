function PerfilObtener(llaveRegistro) {
    $.ajax({
        url: "http://144.22.58.188:8080/api/Client/"+llaveRegistro,
        type: 'GET',
        contentType: "application/JSON",
        dataType: 'json',

        success: function (respuesta) {
            console.log(respuesta);
            mostrarPerfil(respuesta);
        },

        error: function (xhr, status) {
            alert("Error peticion PUT..." + status);
        }
    });
}

function mostrarPerfil(items){
$("#identificacion").html(items.idClient);
$("#nombre").html(items.name);
$("#correo").html(items.email);
$("#años").html(items.age);
/*alert(JSON.stringify(items));*/

var reservation = `<div id="prueba">`;
for(var i = 0; i< items.reservations.length; i++){
            reservation += `<h4>reservacion ${i+1}</h4>
                            <h5 class="txt">Inicio</h5>
                            <div class="txt" id=startDate>${items.reservations[i].startDate}</div>
                            <h5 class="txt">Fin</h5>
                            <div class="txt" id=stopDate>${items.reservations[i].devolutionDate}</div>
                            <h5 class="txt">Cabaña</h5>
                            <div class="txt" id=cabins>${items.reservations[i].cabin.name}</div>
                            <h5 class="txt">Estado</h5>
                            <div class="txt" id=status>${items.reservations[i].status}</div>`;
}
reservation += `</div>`;
$("#reservaciones").html(reservation);
$("#reservaciones").show();


var botones = `<button class="btnperfil" onclick="editarRegistro(${items.idClient})">Actualizar</button><button class="btnperfil" onclick="estadoInicial();">atras</button>`;

$("#botones").html(botones);
$("#botones").show();
$("#perfil").show(500);
}



function Perfil(llaveRegistro){ 
    $(".contenedor_principal").css("background","#0066ff00");
    $(".contenedor_principal").css("box-shadow"," 2px 3px 4px #0066ff00");
    $(".pie_pagina").hide(500);
    $("#Titulo_texto").hide(500);
    $("#Content").show(500);
    $("#nuevo").hide();
    $("#editar").hide();
    $("#listado").hide(500);
    $("#nuevoRegistro").hide()
    $("#perfil").hide()
    PerfilObtener(llaveRegistro)
}