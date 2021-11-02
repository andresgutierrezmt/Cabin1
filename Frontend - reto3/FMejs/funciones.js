function validaesVacio(dato){
    return !dato.trim().length;
}

/**
 * Al ingresar un nuevo registro:
 * 
 * Ejecuta validaciones campo a campo
 */
function validar(){
    let messageText = $("#message").val();
    let errores="";
    $("#mensajes").html("");

    if( validaesVacio(messageText)) {
        errores="message vacio<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#message").focus();
        return false;
    }else{
        $("#mensajes").html("");
        $("#mensajes").hide(500);
        return true;
    }

    return true;
}
