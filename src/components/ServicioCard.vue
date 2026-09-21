<script setup>
defineProps({
  item: {
    type: Object,
    required: true
  }
})

defineEmits(['seleccionar'])
</script>

<template>
  <div class="tarjeta-servicio">
    <h3>{{ item.nombre }}</h3>
    <p><strong>Categoría:</strong> {{ item.categoria }}</p>
    <p><em>{{ item.descripcion }}</em></p>
    <p><strong>Valor referencial:</strong> {{ item.precio }}</p>
    <p><strong>Disponibilidad:</strong> 
      <span v-if="item.disponible" style="color: green;">Disponible</span>
      <span v-else style="color: red;">No disponible</span>
    </p>
    
    <button 
      v-if="item.disponible" 
      @click="$emit('seleccionar', item.nombre)"
      style="margin-top: 10px; cursor: pointer;"
    >
      Me interesa
    </button>
  </div>
</template>

<style scoped>
.tarjeta-servicio {
  border: 1px solid #444;
  padding: 16px;
  border-radius: 8px;
  margin-bottom: 16px;
  background-color: #2a2a2a;
}
</style>

