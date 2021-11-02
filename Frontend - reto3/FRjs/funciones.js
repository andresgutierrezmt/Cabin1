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