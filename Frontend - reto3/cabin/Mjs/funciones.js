
/**
 * Validar si hay un campo vacio
 */
function validaesVacio(dato){
    return !dato.trim().length;
}

function validar(){
    let id = $("#id").val();
    let mensaje = $("#mensaje").val();
    let errores="";
    $("#mensajes").html("");

    if( validaesVacio(id)) {
        errores="idenntificacion vacio<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#id").focus();
        return false;
    }else if( validaesVacio(mensaje)) {
        errores="mensaje vacio<br>";
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
    let id = $("#idEdit").val();
    let messagetext = $("#mensajeEdit").val();
    let errores="";
    $("#mensajes").html("");

    //valida que los campos no sean vacios
    if( validaesVacio(id)) {
        errores="id vacio<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#idEdit").focus();
        return false;
    }else if( validaesVacio(messagetext)) {
        errores="mensaje vacio<br>";
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