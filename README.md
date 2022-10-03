Aplicacion backend gym system pro

Notas version 2.0

Api con funcionalidad de mostrar lista de personas registradas con la url:
http://localhost:3000/api/personas
Registrar personas, con la url:
http://localhost:3000/api/personas/register
registrar usuarios del sistema, con la url:
http://localhost:3000/api/usuarios/register
Lo anterior con los siguientes formatos JSON para registrar un usuario y una persona

Formato Persona:
{
    "documento": "123456789",
    "nombres": "Juan",
    "apellidos": "Vasquez",
    "fecha_nacimiento":"1-01-2012",
    "correo":"Juan@gmail.com",
    "telefono":"12345",
    "estado":"Activado",
    "tipo_documento":"CC"
}
Formato Usuario:
{
    "id_usuario":"123456789",
    "nombre_usuario":"juanvasquez",
    "password":"12345",
    "tipo_usuario":"Ad",
    "documento":"123456789"
}
Los datos de id, y documentos de ambos objetos deben coincidir, ademas de que debe existir una persona para que se pueda registrar el usuario correspondiente