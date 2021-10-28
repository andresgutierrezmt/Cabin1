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

var botones = `<button class="btnperfil" onclick="editarRegistro(${items[0].id})">Actualizar</button><button class="btnperfil" onclick="estadoInicial();">atras</button>`;

$("#botones").html(botones);
$("#botones").show();
$("#perfil").show(500);
}



function Perfil(llaveRegistro){ 
    $("#Titulo_texto").hide(500);
    $("#Content").show(500);
    $("#nuevo").hide();
    $("#editar").hide();
    $("#listado").hide(500);
    $("#nuevoRegistro").hide()
    $("#perfil").hide()
    PerfilObtener(llaveRegistro)
}