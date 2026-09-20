<script setup>
import { ref, computed } from 'vue'
import { useRecepcionStore } from '../stores/useRecepcionStore.js'
import ItemsRecepcion from './ItemsRecepcion.vue'

const { state } = useRecepcionStore()

const form = ref({ fecha: '', nro_guia: '', id_proveedor: '' })
const seleccion = ref(null)

function guardar(){
  
  if(!form.value.id_proveedor){
    alert('Seleccione proveedor')
    return
  }
  state.recepciones.push({ id: Date.now(), ...form.value })
  seleccion.value = state.recepciones[state.recepciones.length-1]?.id || null
  form.value = { fecha: '', nro_guia: '', id_proveedor: '' }
}

function calcularTotal(idRecepcion){
  const itemsRecepcion = state.items.filter(it => it.id_recepcion === idRecepcion)
  return itemsRecepcion.reduce((suma, item) => suma + item.cantidad, 0)
}

function calcularPorcentaje(idRecepcion) {
    const itemsRecepcion = state.items.filter(it => it.id_recepcion === idRecepcion)
    if (itemsRecepcion.length === 0) return 0 
    const itemsProblema = itemsRecepcion.filter(it => it.estado === 'dañado' || it.estado === 'mixto')
    const porcentaje = (itemsProblema.length / itemsRecepcion.length) * 100
    return Math.round(porcentaje)
}

const lista = computed(() => state?.recepciones || [])

</script>

<template>
  <div>
    <h2>Recepciones</h2>

    <form @submit.prevent="guardar">
      <input type="date" v-model="form.fecha" />
      <input v-model="form.nro_guia" placeholder="N° Guía/Factura" />
      <select v-model="form.id_proveedor">
        <option value="">-- Proveedor --</option>
        <option v-for="p in state?.proveedores || []" :key="p.id" :value="p.id">{{ p.nombre }}</option>
      </select>
      <button type="submit">Agregar</button>
    </form>

    <table class="table">
      <thead>
        <tr>
          <th>#</th><th>Fecha</th><th>Proveedor</th><th>N° Guía</th><th>Total</th><th>% Def.</th><th>Detalle</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="r in lista" :key="r.id">
          <td>{{ r.id }}</td>
          <td>{{ r.fecha }}</td>
          <td>{{ (state?.proveedores || []).find(p => p.id === r.id_proveedor)?.nombre || '—' }}</td>
          <td>{{ r.nro_guia }}</td>
          <td>{{ calcularTotal(r.id) }}</td>
          <td>{{ calcularPorcentaje(r.id) }}%</td>         
          <td>
            <button @click="seleccion = r.id">Ver</button>
          </td>
        </tr>
      </tbody>
    </table>

    <ItemsRecepcion :id-recepcion="seleccion" /> 
  </div>
</template>
