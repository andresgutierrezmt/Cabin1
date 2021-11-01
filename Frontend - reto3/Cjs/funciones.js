
/**
 * Validar si hay un campo vacio
 */
function validaesVacio(dato){
    return !dato.trim().length;
}

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

function validarEditar(){
    //obtiene valores
    let password = $("#passwordEdit").val();
    let name = $("#nameEdit").val();
    let email = $("#emailEdit").val();
    let age = $("#ageEdit").val();
    let errores="";
    $("#mensajes").html("");

    //valida que los campos no sean vacios
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
        $("#nameEdit").focus();
        return false;
    }else if( validaesVacio(email)) {
        errores="email vacio<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#brandEdit").focus();
        return false;
    }else if( validaesVacio(age)) {  
        errores="age vacio<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#roomEdit").focus();
        return false;
    }else{
        $("#mensajes").html("");
        $("#mensajes").hide(500);
        return true;
    }

    return true;
}