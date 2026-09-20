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