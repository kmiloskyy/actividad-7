import { createRouter, createWebHistory } from 'vue-router'
import Inicio from  './components/Inicio.vue'
import Nosotros from  './components/Nosotros.vue'
import Servicios from  './components/Servicios.vue'
import Contacto from  './components/Contacto.vue'

const routes = [
    { path: '/', component: Inicio },
    { path: '/nosotros', component: Nosotros },
    { path: '/servicios', component: Servicios },
    { path: '/contacto', component: Contacto }
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})