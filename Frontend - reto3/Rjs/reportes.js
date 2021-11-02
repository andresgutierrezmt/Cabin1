function PrimerReporte() {
    $.ajax({
        url: "http://144.22.58.188:8080/api/Reservation/report-status",
        type: 'GET',
        contentType: "application/JSON",
        dataType: 'json',

        success: function (estados) {
            console.log(estados);
            SegundoReporte(estados);
        },

        error: function (xhr, status) {
            alert("Error peticion PUT..." + status);
        }
    });
}

function SegundoReporte(estados){
    $.ajax({
        url: "http://144.22.58.188:8080/api/Reservation/report-clients",
        type: 'GET',
        contentType: "application/JSON",
        dataType: 'json',

        success: function (clientes) {
            console.log(clientes);
            mostrarReportes(estados, clientes);
        },

        error: function (xhr, status) {
            alert("Error peticion PUT..." + status);
        }
    });
}

function mostrarReportes(estados, clientes){
var reservation = `<div class="prueba">
<h5>Completados: ${estados.completed}</h5>
<h5>Cancelados: ${estados.cancelled}</h5></div>`;

$("#reservaciones2").html(reservation);
$("#reservaciones2").show();

var clientes1 = `<div class="prueba">`
for(var i=0; i < clientes.length; i++){
    clientes1 +=`<h5 id="txtCl">El cliente ${clientes[i].client.name} tiene: ${clientes[i].total} reservas </h5>`
}
clientes1 += `</div>`;

$("#clientes2").html(clientes1);
$("#clientes2").show();

var botones = `<button class="btnperfil" onclick="estadoInicial();">atras</button>`;

$("#botones").html(botones);
$("#botones").show();
$("#reservaciones").hide();
$("#reportes").show(500);

}

function mostrarReportes2(){

    var Fecha1 = $("#start-dateE").val();
    var Fecha2 = $("#stop-dateE").val();

    $("#eleccion").hide();


    $.ajax({
        url: "http://144.22.58.188:8080/api/Reservation/report-dates/"+Fecha1+"/"+Fecha2,
        type: 'GET',
        contentType: "application/JSON",
        dataType: 'json',

        success: function (Dates) {
            /*alert(JSON.stringify(Dates));*/
            console.log(Dates);
            informarFecha(Dates);
        },

        error: function (xhr, status) {
            alert("Error peticion PUT..." + status);
        }
    });
}

function informarFecha(Dates){
    //alert(Dates.length);
    var reservaciones = `<h5>Reservaciones: ${Dates.length}</h5>`;
    $("#reservaciones").html(reservaciones);
    $("#reservaciones").show(1000);
}

function abrirReportes(){ 
    $(".contenedor_principal").css("background","#0066ff00");
    $(".contenedor_principal").css("box-shadow"," 2px 3px 4px #0066ff00");
    $(".pie_pagina").hide(500);
    $("#Titulo_texto").hide(500);
    $("#Content").show(500);+
    $("#reporte").hide();
    $("#nuevo").hide();
    $("#editar").hide();
    $("#listado").hide(500);
    $("#eleccion").show(500);
    $("#nuevoRegistro").hide();
    $("#perfil").hide();
    PrimerReporte();
}