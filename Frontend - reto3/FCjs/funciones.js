function validaesVacio(dato){
    return !dato.trim().length;
}

/**
 * Al ingresar un nuevo registro:
 * 
 * Ejecuta validaciones campo a campo
 */
function validar(){
    let name = $("#name").val();
    let email = $("#email").val();
    let edad = $("#age").val();
    let password = $("#password").val();
    let errores="";
    $("#mensajes").html("");

    if( validaesVacio(password)) {
        errores="password vacio<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#password").focus();
        return false;
    }else if( validaesVacio(name)) {
        errores="name vacio<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#name").focus();
        return false;
    }else if( validaesVacio(email)) {
        errores="email vacio<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#email").focus();
        return false;
    }else if( validaesVacio(edad)) {  
        errores="edad vacio<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#age").focus();
        return false;
    }else{
        $("#mensajes").html("");
        $("#mensajes").hide(500);
        return true;
    }

    return true;
}
