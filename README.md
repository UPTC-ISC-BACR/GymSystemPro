Aplicacion backend gym system pro

Notas version 2.1

-Se implemento la encriptacion de la contraseña en la base de datos

-Se realizo refactorizacion del codigo, dejando controladores y routeadores para cada modulo, tambien se reescribio el codigo para manejarse completamente en ingles

-Se agregó la funcionalidad de login de usuario mediante la URL: http://localhost:3000/api/users/login , esta recibe el nombre y la contraseña del usuario en formato JSON y devuelve el token de sesion si el proceso es exitoso. El token debe ser enviado en la cabecera de las peticiones en el servicio de personas con el parametro "user_token"


Notas version 2.0

Api con funcionalidad de mostrar lista de personas registradas con la url: http://localhost:3000/api/persons
Registrar personas, con la url: http://localhost:3000/api/persons/register
registrar usuarios del sistema, con la url: http://localhost:3000/api/users/register


Lo anterior con los siguientes formatos JSON

Formato Persona:

{
    "document": "123456789",
    "name": "Juan",
    "last_name": "Vasquez",
    "date_of_birth":"1-01-2012",
    "email":"Juan@gmail.com",
    "cell_phone":"12345",
    "type_document":"CC",
    "gender":"M"
}

Formato Usuario:

{
    "id_user":"123456789",
    "user_name":"juanvasquez",
    "password":"12345",
    "type_user":"Ad",
    "document":"123456789"
}

Los datos de id, y documentos de ambos objetos deben coincidir, ademas de que debe existir una persona para que se pueda registrar el usuario correspondiente