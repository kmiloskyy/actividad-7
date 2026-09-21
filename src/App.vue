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

<style>
body {
  background-color: #24345b;
  color: #f1f5f9;
  margin: 0;
  min-height: 100vh;
}
</style>

<style scoped>
.contenedor {
  max-width: 1024px;
  margin: 24px auto;
  padding: 16px;
  font-family: 'Inter', system-ui, sans-serif;
  color: #e2e8f0;
}
h1 {
  color: #f8fafc;
  font-size: 2.2rem;
  margin-bottom: 5px;
}
.navbar {
  display: flex;
  gap: 12px;
  margin: 20px 0 30px 0;
  padding-bottom: 15px;
  border-bottom: 1px solid #334155;
}
.navbar a {
  color: #94a3b8;
  text-decoration: none;
  font-weight: 500;
  padding: 8px 12px;
  border-radius: 6px;
  transition: all 0.3s;
}
.navbar a:hover {
  background-color: #1e293b;
  color: #38bdf8;
}
.navbar a.router-link-active {
  background-color: #0284c7;
  color: white;
}
</style>
