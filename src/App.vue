<script setup>
</script>


<template>
  <div class="contenedor">
    <h1>RodSal Solutions</h1> <!-- O el nombre que hayas elegido -->
    
    <nav class="navbar">
      <router-link to="/">Inicio</router-link>
      <router-link to="/nosotros">Nosotros</router-link>
      <router-link to="/servicios">Servicios</router-link>
      <router-link to="/contacto">Contacto</router-link>
    </nav>

    <main>
      <router-view></router-view> 
    </main>
  </div>
</template>

<style scoped>
.contenedor {
  max-width: 1024px;
  margin: 24px auto;
  padding: 16px;
  font-family: system-ui;
}
.navbar {
  display: flex;
  gap: 16px;
  margin: 12px 0;
}
</style>
 
