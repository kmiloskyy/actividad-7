# Problemas detectados
1. Problema Detectado: Hoja de estilo invocada por el nombre incorrecto.
    Archivo: Main.js
    Posible causa: Style mal escrito. 

2. Problema Detectado: Error en proveedores
    Archivo: Proveedores.vue
    Posible causa: falta estructura base con <script setup>

3. Problema Dectectado: Palabra que no va con el codigo.
    Archivo: ItemsRecepcion.vue
    Posible causa: Palabra "BUG" en la linea 15 del archivo generando un error de complicacion.

4. Problema Dectectado: Las propiedades de la funcion "agregar" no estaban asignadas a un objeto.
    Archivo: ItemsRecepcion.vue
    Posible causa: al no asignar las propiedades a un objeto, esto genera un error de lectura.

# Estado compartido
1. Qué problema encontró:
Principalmente se encontro que la funcion `useRecepcionStore` no retornaba el objeto state porque este estaba comentado, tambien se encontro un error de escritura en `id_recepcion` y la cantidad estaba definida como texto. 

2. Cómo lo corrigió:
Se elimino lo comentado en return, se corrigio el error de escritura y se eliminaron las comillas de la cantidad. 

3. Por qué el estado debe ser compartido entre los componentes:
Debe ser compartido para mantener una unica fuente de la verdad, si el componente de items o Recepciones modifica un dato o agrega un nuevo registro, el resto de los componentes de la aplicación pueden acceder a esa misma informacion actualizada en tiempo real sin perder la sincronizacion.

# Gestión de Libros
1. Qué error tenia la validación:  La condicion utilizaba && para ver si el largo era menor a 10 y a 13, esto generaba que se permitieran ingresar isbn de 11, 12 o con más caracteres.  
2. Qué correcion realizó: Se cambio la condicion a `length !== 10 && length !== 13`. Esto hace que se rechaze cualquier isbn con otro largo de caracteres. 
3. Qué problema existía con el año del libro: Habia una inconsistencia en el nombrado de las propiedades, este usaba `anio_publicacion`. Se corrigio unificandolo a `anio`.

# Gestión de recepciones
1. Errores encontrados: La funcion encargada de guardar la informacion realizaba la validacion y emitia una alerta, pero no detenia la ejecución. Al faltar una sentencia de escape, el codigo continuaba y agregaba la recepcion invalida al listado.

2. Cómo lo corrigió: Se añadió `return` despues de la alerta, esto asegura que la funcion se detenga por completo si la validación falla.

# Detalle de recepción
1. Qué problema existía con el identificador de la recepción: Este buscaba la propiedad `id_reception` en vez de `id_recepcion` lo que generaba un error en la recepcion.
2. Cómo solucionó el filtrado: Se actualizó la condición dentro del método `.filter()` para que compare correctamente `it.id_recepcion === props.idRecepcion`.
3.  Cómo logró agregar correctamente un nuevo ítem: La funcion `agregar` construia el objeto `nuevoItem` pero no lo almacenaba en ningun lado. Se agrego `state.items.push(nuevoItem)` para insertarlo en el estado global.

# Cálculos de recepción
1. Cómo obtuvo el total: Se filtro el arreglo de items para obtener solo aquellos correspondientes al ID. Se utilizo el metodo `reduce()` para sumar la propiedad `cantidad` de cada uno de esos items, obteniendo asi el total exacto de libros ingresados.

2. Cómo determinó los elementos con problemas: Se filtraron los items de la recepciin evaluando si su `estado` era estrictamente igual a `'dañado'` o `'mixto'`. La cantidad resultante se dividio por el total de registros de esa recepcion y se multiplico por 100 para obtener el porcentaje.

3. Qué información utilizó para realizar el cálculo: Se usaron los datos compartidos del almacenamiento reactivo (`state.items`). Se cruzo el `id_recepcion` de los items con el `id` de las recepciones, y se opero matemáticamente sobre las propiedades `cantidad` y `estado` de esos objetos.

# Actividad 8
## Parte 1 – Reutilización del proyecto
* Elementos conservados: Se usara la estructura base, tambien conservamos el esqueleto estructural de `App.vue` para gestionar el enrutamiento.
* Elementos modificados y eliminados: Se eliminaron los componentes del proyecto anterior (`Libros.vue`, `Proveedores.vue`, `Recepciones.vue`, `ItemsRecepcion.vue`) ya que no van en el nuevo caso de una empresa de servicios de consultoria tecnologica.
* Por qué: Esta limpieza nos ayuda a reutilizar la arquitectura funcional de Vue adaptándola a los requisitos de un Single Page Application (SPA) informativo y comercial para la nueva empresa.

## Parte 2 – Navegación y vistas
* Vistas creadas: Se crearon los componentes `Inicio.vue`, `Nosotros.vue`, `Servicios.vue` y `Contacto.vue`.
* Cómo funciona la navegación: Se implemento `vue-router` para que la aplicación sea una Single Page Application, tambien usamos `router.js` para las rutas de los componentes. se reemplazo el uso de `v-if` por `router-link`.

## Parte 3 – Catálogo de servicios y componentes
* Organización de los servicios: Los datos del catalogo se almacenan en el archivo `useServiciosStore.js` utilizando la reactividad de Vue. Esto permite que la lista de servicios esté separada de la vista y sea fácil de mantener o actualizar en el futuro.
* Componente reutilizable: El componente `ServicioCard.vue` sirve para representar visualmente cada servicio del catálogo de forma individual para no tener que repetirlos.
* Uso de Props: La vista padre `Servicios.vue` utiliza un `v-for` para iterar sobre el arreglo del store y le envia un objeto completo a cada componente hijo a través de la prop `:item`. El hijo `ServicioCard.vue` recibe esta informacion estructurada para renderizar el nombre, categoria, descripcion, precio y la disponibilidad.

## Parte 4 – Filtros, condicionales e interacción
* Filtro de búsqueda: Se agrego una barra de texto en la vista de servicios y la conecte con un `v-model` para atrapar lo que el visitante va escribiendo en tiempo real.
* Condición utilizada: Para que la lista se filtre automaticamente, use una función `computed`. Esta función revisa si el texto coincide con el nombre o la categoría de algun servicio, sin borrar los datos originales. También use un bloque `v-if` y `v-else` porque si escribes algo que no existe, la grilla se oculte y salga un mensaje diciendo que no se encontraron resultados.
* Comunicación con emit: El boton de "Me interesa" solo se muestra si el servicio esta disponible. Cuando haces clic en el boton, el componente hijo usa `$emit` para avisarle al padre el nombre del servicio que elegiste. Asi el padre lo recibe y muestra un aviso en pantalla confirmando tu seleccion.

## Parte 5 – Formulario de contacto
* Campos y validaciones: Se coloco un formulario con `v-model` que incluye nombre, correo, telefono, servicio de interes y mensaje. Este tambien tiene una funcion que verifica que ningun campo este vacio para que no falte informacion.
* Relación con el servicio seleccionado: Se creo una propiedad `servicioSeleccionado` que al hacer clic en "Me interesa" en el catalogo, el nombre del servicio se guarda globalmente, luego parte de `Contacto.vue` revisa si existe ese servicio y lo asigna automaticamente al formulario.

## Parte 6 – Diseño y revisión final
* Colores y estilo corporativo: Se cambiaron los colores en relacion a una empresa tecnologica. Para que el diseño sea coherente, tambien se cambio el color de las tarjetas de los servicios y las cajas de texto del formulario.
* Mejoras en el contenido: Se agrego informacion en las vista de `Inicio` e `Nosotros`, tambien se alinearon los textos para tener un mejor orden.
* Orden de los servicios: Se ajuste la manera en la que se muestran las tarjetas para que quede mas ordenado visualmente.

# Actividad 9
## Parte 1 y 2 - Preparacion del backend
* Se usaron los comandos `mkdir backend`, `npm init -y`y `npm install express`.
* el comando `npm init -y` creo el archivo `package.json` donde se registra la informacion y dependencias del backend. Ademas, se instalo express que es un framework para Node.js que facilita la creacion del servidor web, el manejo de rutas y la construcción de la API.

## Parte 3 y 4 - Primer servidor
* `app.get()`: Se usa para definir las rutas de la aplicacion, le dice al servidor como debe responder cuando el usuario intenta acceder a la URL especifica.
* `req`: Es la representacion de la solicitud que hace un cliente, Tiene la informacion que el usuarios nos pide o que envia hacia el servidor.
* `res`: Representa lo que nuestro servidor le va a devolver al cliente. Con esto podemos enviarle mensajes de texto, codigo HTML o datos en formato JSON.
* `app.listen()`: Es la funcion que enciende el servidor. Le indica a Express que se quede escuchando activamente en un puerto específico esperando a que lleguen peticiones, para que el programa no se cierre de inmediato.

## Parte 5 – Datos de servicios
Cada servicio de la lista contiene la siguiente información detallada: un `id` numerico unico, el `nombre` del servicio, su `categoria`, una `descripcion` tecnica de las herramientas o procesos utilizados, el `precio` referencial en formato de numero entero, y un valor booleano en `disponible` que indica si el servicio puede ser solicitado en este momento o si la agenda esta llena, se usa `module.exports` para exportar esta informacion y poder consumirla desde mi servidor principal.

## Parte 6 – API de servicios
* `res.send()`: Se utiliza en la ruta principal para enviar una respuesta generica y sencilla, que en este caso es solo un texto plano confirmando que el servidor está encendido.
* `res.json()`: se utiliza en la nueva ruta de la API para enviar el arreglo completo de los servicios de la empresa, pero formateado específicamente como JSON.

## Parte 7 - Consulta por ID
* `req.params`: Es una propiedad de Express que nos permite capturar los valores dinamicos que el usuario escribe directamente en la URL. En este caso, atrapa el número de ID que el cliente esta buscando.
* `Number()`: Todo lo que capturamos de la URL usando `req.params` llega automáticamente en formato de text entonces usamos la función `Number()` para convertir ese texto a un valor numérico real. Esto es indispensable porque dentro de nuestro archivo `servicios.js`, los IDs estan guardados como numeros, y si no hacemos la conversion, la búsqueda no encontraria coincidencias.
* Estado 404: Es un bloque condicional por si el usuario busca un ID que no tenemos. Si el servicio no existe, el servidor responde con un estado `404`.