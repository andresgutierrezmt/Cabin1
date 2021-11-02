
/**
 * Validar si hay un campo vacio
 */
function validaesVacio(dato){
    return !dato.trim().length;
}

function validar(){
    let name = $("#name").val();
    let description = $("#description").val();
    let errores="";
    $("#mensajes").html("");

    if( validaesVacio(description)) {
        errores="descripcion vacio<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#description").focus();
        return false;
    }else if( validaesVacio(name)) {
        errores="name vacio<br>";
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

function validarEditar(){
    //obtiene valores
    let name = $("#nameEdit").val();
    let description = $("#descriptionEdit").val();
    let errores="";
    $("#mensajes").html("");

    //valida que los campos no sean vacios
    if( validaesVacio(description)) {
        errores="descripcion vacio<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#description").focus();
        return false;
    }else if( validaesVacio(name)) {
        errores="name vacio<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#nameEdit").focus();
        return false;
    }else{
        $("#mensajes").html("");
        $("#mensajes").hide(500);
        return true;
    }

    return true;
}