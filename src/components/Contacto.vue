<script setup>
import { ref, onMounted } from 'vue'
import { useServiciosStore } from '../stores/useServiciosStore.js'

const { state } = useServiciosStore()

// Objeto reactivo para el formulario
const form = ref({
  nombre: '',
  correo: '',
  telefono: '',
  servicio: '',
  mensaje: ''
})

const error = ref('')
const solicitudEnviada = ref(false)

onMounted(() => {
  if (state.servicioSeleccionado) {
    form.value.servicio = state.servicioSeleccionado
  }
})

function procesarFormulario() {
  if (!form.value.nombre || !form.value.correo || !form.value.telefono || !form.value.servicio || !form.value.mensaje) {
    error.value = 'Por favor, complete todos los campos obligatorios.'
    return
  }
  error.value = ''
  solicitudEnviada.value = true
}
</script>

<template>
  <div>
    <h2>Contacto</h2>
    <p>Solicita información sobre nuestros servicios tecnológicos.</p>

    <form v-if="!solicitudEnviada" @submit.prevent="procesarFormulario" class="formulario">
      
      <div v-if="error" class="alerta-error">{{ error }}</div>

      <input type="text" v-model="form.nombre" placeholder="Nombre completo" />
      <input type="email" v-model="form.correo" placeholder="Correo electrónico" />
      <input type="tel" v-model="form.telefono" placeholder="Teléfono" />
      
      <select v-model="form.servicio">
        <option value="">-- Seleccione un servicio de interés --</option>
        <option v-for="s in state.servicios" :key="s.id" :value="s.nombre">
          {{ s.nombre }}
        </option>
      </select>
      
      <textarea v-model="form.mensaje" rows="4" placeholder="Escriba su mensaje aquí..."></textarea>

      <button type="submit" class="btn-enviar">Enviar Solicitud</button>
    </form>

    <div v-else class="resumen-exito">
      <h3>¡Solicitud enviada con éxito!</h3>
      <p>Gracias <strong>{{ form.nombre }}</strong>, hemos recibido su consulta.</p>
      <ul>
        <li><strong>Correo:</strong> {{ form.correo }}</li>
        <li><strong>Teléfono:</strong> {{ form.telefono }}</li>
        <li><strong>Servicio de interés:</strong> {{ form.servicio }}</li>
        <li><strong>Mensaje:</strong> {{ form.mensaje }}</li>
      </ul>
      <p>Nos pondremos en contacto a la brevedad.</p>
      <button @click="solicitudEnviada = false; form = {nombre:'', correo:'', telefono:'', servicio:'', mensaje:''}" class="btn-enviar">Nueva consulta</button>
    </div>

  </div>
</template>

<style scoped>
.formulario {
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 500px;
  margin-top: 20px;
}
.formulario input, .formulario select, .formulario textarea {
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #555;
  background-color: #333;
  color: white;
}
.alerta-error {
  color: #ff9999;
  background-color: #4a1919;
  padding: 10px;
  border-radius: 4px;
}
.resumen-exito {
  background-color: #1a4d2e;
  padding: 20px;
  border-radius: 8px;
  margin-top: 20px;
}
.btn-enviar {
  padding: 10px;
  background-color: #2563eb;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.btn-enviar:hover {
  background-color: #1d4ed8;
}
</style>