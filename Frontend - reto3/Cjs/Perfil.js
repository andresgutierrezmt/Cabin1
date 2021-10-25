function PerfilObtener(llaveRegistro) {
    let datos = {
        id: llaveRegistro
    }

    let datosPeticion = JSON.stringify(datos);

    $.ajax({
        url: "https://gac366253d1c276-cabin.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client/"+llaveRegistro,
        type: 'GET',
        contentType: "application/JSON",
        dataType: 'json',

        success: function (respuesta) {
            console.log(respuesta);
            mostrarPerfil(respuesta.items);
        },

        error: function (xhr, status) {
            alert("Error peticion PUT..." + status);
        }
    });
}

function mostrarPerfil(items){

$("#identificacion").html(items[0].id);
$("#nombre").html(items[0].name);
$("#correo").html(items[0].email);
$("#años").html(items[0].age);

var botones = `<h4><button onclick="editarRegistro(${items[0].id})">Actualizar</button></h4><h4><button onclick="estadoInicial();">cancelar</button></h4>`;

$("#botones").html(botones);
$("#botones").show();
$("#perfil").show()
}



function Perfil(llaveRegistro){
    $("#nuevo").hide();
    $("#editar").hide();
    $("#listado").show(500);
    $("#nuevoRegistro").show()
    $("#perfil").hide()
    PerfilObtener(llaveRegistro)
}