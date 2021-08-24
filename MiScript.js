$(document).ready(function(){
    //getdetails sera nuestra funcion para mandar solicitud AJAX
    var getdetails = function(id){
        return $.getJSON("personas.php",{"id":id})
    }
    //Al hacer click sobre cualquier elemento que tenga data user
    $('[data-user]').click(function(e){
    //Detenemos el comportamiento normal del evento click sobre el elemento cliqueado
    e.preventDefault();
    //Mostrar texto de que la solicitud esta en curso
    $("#response-container").html("<p>Buscando..</p>");
    //This hace referencia al elemento que ha lanzado el evento click
    //Con el metodo data('user') obtenemos el valor del atributo data-user de dicho elemento y 
    //lo pasamos a la funcion getdatails defiida anteriormente
    getdetails($(this).data('user'))
    .done(function(response){
    //Done() es ejecutado cuando se recibe la respuesta del servidor responde es el objeto JSON recibido
    if(response.success){
    var output ="<h1>"+ response.data.message +"</h1>";
    //Recorremos cada usuario
    $.each(response.data.users, function(key, value){
    output += "<h2>Detalles de Usuario" + value['ID'] +"</h2>";
    //Recorremos valores de cada usuario
    $.each(value, function(userkey, uservalue){
        output += '<ul>';
        output += '<li>'+userkey+':'+uservalue+"</li>";
        output += '</ul>';
    });
    });
    //Actualizamos el html del elemento con id = response-container
    $("#response-container").html(output);
    } else{
    // response.true no es verdadero
    $("#response-container").html('No ha habido suerte '+ response.data.message );
    }
    })
    .fail(function(jqXHR, textStatus, errorThrown){
        $("#response.container").html("Algo ha fallado" + textStatus);
    });
    });
});