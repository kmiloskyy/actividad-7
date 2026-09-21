<script setup>
import { useServiciosStore } from '../stores/useServiciosStore.js'
import ServicioCard from './ServicioCard.vue'

const { state } = useServiciosStore()
</script>

<template>
  <div>
    <h2>Catálogo de Servicios</h2>
    <p>Conoce las soluciones tecnológicas que ofrecemos:</p>
    
    <div class="grilla-servicios">
      <ServicioCard 
        v-for="servicio in state.servicios" 
        :key="servicio.id" 
        :item="servicio" 
      />
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