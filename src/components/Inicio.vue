<script setup>
</script>

<template>
  <div class="hero">
    <div class="hero-texto">
      <h2>Impulsando el futuro digital</h2>
      <p>En RodSal Solutions ofrecemos soluciones tecnológicas de vanguardia para escalar tu negocio de forma segura, estructurada y eficiente.</p>
      <router-link to="/servicios" class="btn-primario">Explorar Servicios</router-link>
    </div>
    
    <div class="hero-imagen">
      <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=600&q=80" alt="Tecnología Backend" />
    </div>
  </div>
</template>

<style scoped>
.hero {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  padding: 40px;
  background-color: #1e293b;
  border-radius: 12px;
  margin-top: 20px;
  border: 1px solid #334155;
}
.hero-texto {
  flex: 1;
  text-align: left;
}
.hero-texto h2 {
  color: #38bdf8;
  font-size: 2.5rem;
  margin-bottom: 15px;
  margin-top: 0;
}
.hero-texto p {
  color: #cbd5e1;
  font-size: 1.1rem;
  margin-bottom: 30px;
  line-height: 1.6;
}
.btn-primario {
  display: inline-block;
  padding: 12px 28px;
  background-color: #0284c7;
  color: white;
  text-decoration: none;
  border-radius: 6px;
  font-weight: bold;
  transition: 0.3s;
}
.btn-primario:hover {
  background-color: #0369a1;
}
.hero-imagen {
  flex: 1;
}
.hero-imagen img {
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.5);
}
</style>