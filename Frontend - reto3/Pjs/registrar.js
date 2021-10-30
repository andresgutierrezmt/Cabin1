function registrar() {

    let datos={
        id: $("#id").val(),
        brand: $("#brand").val(),
        rooms: $("#rooms").val(),
        category_id: $("#category").val(),
        name: $("#name").val()
    }

    let datosPeticion = JSON.stringify(datos);

    if (validar()){
        $.ajax({
            url:"https://gac366253d1c276-cabin.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/cabin/cabin",

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
    $("#Content").show(500);
    $("#nuevo").show(500);
    $("#id").focus();
    $("#editar").hide();
    $("#nuevoRegistro").hide(500);
    $("#listado").hide(500);
    $("#Titulo_texto").hide(500);
}