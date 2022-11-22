Aplicacion backend gym system pro

Notas version 3.1.1

Se añadio la busqueda de personas por nombre completo o parcial mediante la URL http://localhost:3000/api/persons/by_name con el formato JSON

{
    "name":"david"
}

Se arreglo el bug que impedia la asignacion de un ejercicio a una lista de ejercicios, quedo habilitada mediante la URL http://localhost:3000/api/excercices_list/add con el sigiente formato JSON

{
    "id_test": "1",
    "id_exercise": "1"
}

Notas version 3.1

Se añadio la funcionalidad de añadir los datos de medidas corporales para un usuario mediante la URL   http://localhost:3000/api/body_data/add  y obtener todos los historicos mediante la url http://localhost:3000/api/body_data/, ademas de obtener el historico de una sola persona por id mediante la URL http://localhost:3000/api//body_data/id_body_data mediante el siguiente formato JSON

{
    "id_body_data": "1",
    "date_data": "2020-01-23",
    "porc_muscle_mass": "4.5",
    "porc_masa_grasa":"6.7",
    "porc_water": "10",
    "document": "105217310"
}



Notas verion 3.0

Se añadio la funcionalidad de crear ejercicios mediante la URL http://localhost:3000/api/excercises/add con el siguiente formato JSON

{
    "id_exercise": "1",
    "name_excersice": "pull ups",
    "description": "do a fckn pull up xd",
    "time":"00:00:10",
    "repetitions": "10",
    "weight": "100"
}

Se añadio la funcionalidad añadir test fisico mediante la URL http://localhost:3000/api/tests/add con el siguiente formato JSON

{
    "id_test": "1",
    "test_name": "test de rendimiento",
    "type": "duro xd"
}

Se añadio la funcionalidad de añadir un test al historial de tests del usuario mediante la URL http://localhost:3000/api/tests_history/add con el siguiente formato JSON

{
    "id_test_history": "1",
    "rm_result": "2 xd",
    "test_date": "2020-01-23",
    "id_test":"1",
    "document": "105217310",
    "time_result": "00:00:10",
    "repetitions_result": "2"
}

Notas version 2.3
-para consultar los datos para mostrar en el admi (document, name, date_end_register, date_end_plan, ir_record)
usar la ruta 
GET http://localhost:3000/api/admi
respondera con un vector de este tipo
[
    {
        "document": 12,
        "name": "test",
        "end_date_register": "2023-11-20",
        "end_date_plan": "2023-02-04",
        "id_record": 1
    },
    {
        "document": 13,
        "name": "test2",
        "end_date_register": "2023-11-07",
        "end_date_plan": "2023-02-04",
        "id_record": 2
    }
]

--para generar factura usar ruta (llega por parametro)
http://localhost:3000/api/admi/{document}

Notas version 2.2

-Se implemento la agregacion de planes del gimnasio, se podran consultar atraves de la URL: http://localhost:3000/api/plans  y agregar una mediante la url http://localhost:3000/api/plans/add , con el siguiente formato

Formato Json planes
{
    "id_plan": "1",
    "name_plan": "mensual_basico",
    "price": 10000,
    "duration_months":1
}

-Se agrego la funcionalidad de facturar los registros de personas, este proceso es automatico en respuesta a un proceso exitoso de registro. Como salida se enviara un correo de confirmacion al correo especificado por el usuario en el momento del registro

-Se agrego la opcion de añadir un plan a una persona mediante la URL: http://localhost:3000/api/plans_records/add  la cual recibe el id del plan y el id del registro de la persona en formato JSON 

Formato Json añadir plan_records

{
    "id_plan": "1",
    "id_record":12349
}




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