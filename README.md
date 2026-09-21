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