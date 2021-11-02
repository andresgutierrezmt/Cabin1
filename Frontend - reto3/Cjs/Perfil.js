function PerfilObtener(llaveRegistro) {
    $.ajax({
        url: "http://144.22.58.188:8080/api/Client/"+llaveRegistro,
        type: 'GET',
        contentType: "application/JSON",
        dataType: 'json',

        success: function (respuesta) {
            alert(respuesta.reservations);
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

var reservation;

try {
    for(var i; i< items.reservation.length; i++){
            reservation += `<h4>Reservacion ${i}</h4>
                            <h5 class="txt">Inicio</h5>
                            <div class="txt" id=startDate>${items.reservation[i].startDate}</div>
                            <h5 class="txt">Fin</h5>
                            <div class="txt" id=stopDate>${items.reservation[i].devolutionDate}</div>
                            <h5 class="txt">Cabaña</h5>
                            <div class="txt" id=cabins>${items.reservation[i].cabin.name}</div>
                            <h5 class="txt">Estado</h5>
                            <div class="txt" id=status>${items.reservation[i].status}</div>`;
    }
}catch(ReferenceError){
    reservation = `<h4>Reservacion 1</h4>
                    <h5 class="txt">Inicio</h5>
                    <div class="txt" id=startDate>${items.reservation.startDate}</div>
                    <h5 class="txt">Fin</h5>
                    <div class="txt" id=stopDate>${items.reservation.devolutionDate}</div>
                    <h5 class="txt">Cabaña</h5>
                    <div class="txt" id=cabins>${items.reservation.cabin.name}</div>
                    <h5 class="txt">Estado</h5>
                    <div class="txt" id=status>${items.reservation.status}</div>`;
}

$("#reservaciones").html(reservation);

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