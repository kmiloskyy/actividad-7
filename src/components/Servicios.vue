<script setup>
import { ref, computed } from 'vue'
import { useServiciosStore } from '../stores/useServiciosStore.js'
import ServicioCard from './ServicioCard.vue'

const { state } = useServiciosStore()

const textoBusqueda = ref('')

const serviciosFiltrados = computed(() => {
  const lista = state?.servicios || []
  return lista.filter(servicio => {
    const nombre = servicio.nombre || ''
    const categoria = servicio.categoria || ''
    const busqueda = (textoBusqueda.value || '').toLowerCase()
    
    return nombre.toLowerCase().includes(busqueda) || categoria.toLowerCase().includes(busqueda)
  })
})
function manejarSeleccion(nombre) {
  state.servicioSeleccionado = nombre
  alert(`Seleccionaste: ${nombre}. Ve a la pestaña Contacto para solicitarlo.`)
}
</script>

<template>
  <div>
    <h2>Catálogo de Servicios</h2>

    <div style="margin-bottom: 20px;">
      <input 
        v-model="textoBusqueda" 
        type="text" 
        placeholder="Buscar por nombre o categoría..." 
        style="width: 100%; padding: 8px; border-radius: 4px; background-color: #333; color: white; border: 1px solid #555;"
      />
    </div>

    <div v-if="serviciosFiltrados.length > 0" class="grilla-servicios">
      <ServicioCard 
        v-for="servicio in serviciosFiltrados" 
        :key="servicio.id" 
        :item="servicio"
        @seleccionar="manejarSeleccion" 
      />
    </div>
    
    <div v-else style="color: #ff9999;">
      No se encontraron servicios que coincidan con "{{ textoBusqueda }}".
    </div>
  </div>
</template>

<style scoped>
.grilla-servicios {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 16px;
  margin-top: 20px;
}
</style>