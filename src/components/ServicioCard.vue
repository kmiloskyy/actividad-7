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
  background-color: #1e293b; 
  border: 1px solid #334155; 
  padding: 24px;
  border-radius: 8px;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.tarjeta-servicio h3 {
  color: #f8fafc;
  margin-top: 0;
  margin-bottom: 15px;
}
.tarjeta-servicio p {
  color: #cbd5e1;
  font-size: 0.95rem;
  margin: 5px 0;
}
button {
  background-color: #0284c7;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 6px;
  font-weight: bold;
  margin-top: 15px;
  transition: 0.3s;
}
button:hover {
  background-color: #0369a1;
}
</style>

