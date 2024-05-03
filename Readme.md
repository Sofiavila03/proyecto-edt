Prueba de desarrollador back-end

Resumen

Esperamos recibir una aplicación sencilla que demuestre sus habilidades y conocimientos de programación. Consideramos que el tiempo promedio para implementar este proyecto es de unas 5 horas pero como entendemos que eres una persona ocupada tienes un máximo de 48 horas después de recibir el test para enviarnos tu respuesta.


Evaluaremos lo siguiente:

API REST con operaciones CRUD.

Enlace al repositorio (Github, Render, Bitbucket o Railway).



Instrucciones importantes

Asegúrese de que su solicitud cumpla con los siguientes requisitos:

Agregue un archivo LÉAME.

Complete su prueba utilizando la plataforma en la nube Heroku , Render, Railway y/o Dockerize su aplicación.



Descripción de la tarea

Estás trabajando para una startup llamada Melp, que tiene una idea revolucionaria: crear una aplicación que proporcionará información útil sobre restaurantes a los usuarios.

 

Se le proporcionó un CSV que contiene datos sin procesar sobre los restaurantes.


Tarea 1

La primera tarea consiste en importar los datos sin procesar a una base de datos relacional y exponer una API REST que implementa operaciones CRUD (Crear, Leer, Actualizar, Eliminar).

 

La tabla Restaurantes debe tener el siguiente esquema:

 

Restaurantes (

id TEXT PRIMARY KEY, -- Identificador único del restaurante

clasificación INTEGER, -- Número entre 0 y 4

nombre TEXTO, -- Nombre del restaurante

TEXTO del sitio, -- URL del restaurante

TEXTO de correo electrónico,

TEXTO DEL TELÉFONO,

texto de la calle,

TEXTO de la ciudad,

estado TEXTO,

lat FLOAT, -- Latitud

FLOTADOR DE GNL) -- Longitud

 

Puede encontrar el CSV con los datos sin procesar en el siguiente enlace (contiene datos ficticios): https://recruiting-datasets.s3.us-east-2.amazonaws.com/restaurantes.csv


Tarea 2

La segunda tarea consiste en implementar el siguiente punto final:

/restaurantes/estadísticas?latitude=x&longitude=y&radius=z


Recibe como parámetros una latitud y una longitud, que corresponden al centro de un círculo, y un tercer parámetro que corresponde a un radio en METROS.

* Sugerencia: una herramienta como PostGIS o equivalente puede ayudarlo con las consultas espaciales

 

Este punto final debe devolver un JSON con los siguientes datos:

{

         count: Recuento de restaurantes que caen dentro del círculo con centro [x,y] y radio z,

         avg: calificación promedio del restaurante dentro del círculo,

         std: desviación estándar de la calificación de los restaurantes dentro del círculo

}

 

Una vez implementado, envíenos lo siguiente:

Enlace a la aplicación heroku.

Una colección Postman ( https://www.getpostman.com/docs/collections ) para probar su API.

 

Puntos extra:

Buen uso de Git.

Documentación de la API.

Uso correcto de verbos HTTP.

Buenas prácticas de programación.