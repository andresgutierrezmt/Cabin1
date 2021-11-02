function validaesVacio(dato){
    return !dato.trim().length;
}

/**
 * Al ingresar un nuevo registro:
 * 
 * Ejecuta validaciones campo a campo
 */
function validar(){
    //obtiene valores
    let startDate = $("#start-date").val();
    let devolutionDate = $("#stop-date").val();
    $("#mensajes").html("");

    //valida que los campos no sean vacios
    if( validaesVacio(startDate)) {
        errores="startDate vacio<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#start-date").focus();
        return false;
    }else if( validaesVacio(devolutionDate)) {
        errores="devolutionDate vacio<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#devolutionDate").focus();
        return false;
    } else{
        $("#mensajes").html("");
        $("#mensajes").hide(500);
        return true;
    }

    return true;
}

function validarEditar(){
    let id = $("#idEdit").val();
    let brand = $("#brandEdit").val();
    let name = $("#nameEdit").val();
    let rooms = $("#roomsEdit").val();
    let category = $("#categoryEdit").val();
    let description= $("#descriptionN").val();
    let errores="";
    $("#mensajes").html("");

    //valida que los campos no sean vacios
    if( validaesVacio(id)) {
        errores="id vacio<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#idEdit").focus();
        return false;
    }else if( validaesVacio(name)) {
        errores="name vacio<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#nameEdit").focus();
        return false;
    }else if( validaesVacio(brand)) {
        errores="brand vacio<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#emailEdit").focus();
        retagealse;
    }else if( validaesVacio(rooms)) {  
        errores="rooms vacio<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#ageEdit").focus();
        return false;
    } else if( validaesVacio(category)) {  
        errores="category vacio<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#ageEdit").focus();
        return false;
    }else if( validaesVacio(description)) {
        errores="descripcion vacio<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#name").focus();
        return false;
    }else{
        $("#mensajes").html("");
        $("#mensajes").hide(500);
        return true;
    }

    return true;
}