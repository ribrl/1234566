$(document).ready(function() {

     $("form" ).validate( {
         errorClass: "is-invalid",
         validClass: "is-valid",
         rules: {
                 
                 email: {
                     required: true,
                 },
                 password:{
                     required: true,
                 }, 
          },
          messages:{
             email:{
                 required: "el correo es requerido",
                 email: "el formato no es el correcto"
             },
             password:{
                 required: "la contraseña es requerida" 
             }
          },
          submitHandler: function(form) {
              EnviarDatos();
          }
      });
      

 });
 
 function EnviarDatos(){
    dato1=$("#email").val();
    dato2=$("#password").val();
  
    url="http://localhost:3000";
         $.ajax({
             data: JSON.stringify({"email":dato1,"password":dato1}),
             contentType: "application/json",
             type: "POST",
             dataType: "json",
             url: url,
         })
         .done(function( data, textStatus, jqXHR ) {
            console.log(data);
         })
         .fail(function( jqXHR, textStatus, errorThrown ) {
             if ( console && console.log ) {
                 console.log( "La solicitud a fallado: " +  textStatus);
             }
         });
 }