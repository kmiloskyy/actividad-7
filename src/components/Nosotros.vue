<script setup>
</script>

<template>
  <div class="nosotros-container">
    <h2 class="titulo-seccion">Sobre RodSal Solutions</h2>
    <p class="descripcion">
      Fundada con la visión de llevar la ingeniería informática al siguiente nivel, somos una consultora especializada en el desarrollo de software seguro y eficiente. Nos enfocamos en resolver problemas complejos mediante metodologías estructuradas.
    </p>

    <div class="valores-grid">
      <div class="valor-card">
        <h3>Desarrollo Robusto</h3>
        <p>Construimos arquitecturas backend sólidas y APIs escalables diseñadas para soportar alta demanda sin perder rendimiento.</p>
      </div>
      <div class="valor-card">
        <h3>Ciberseguridad</h3>
        <p>La protección de datos es nuestra prioridad. Auditamos y blindamos aplicaciones contra vulnerabilidades y amenazas modernas.</p>
      </div>
      <div class="valor-card">
        <h3>Análisis de Datos</h3>
        <p>Transformamos grandes volúmenes de información en decisiones estratégicas mediante algoritmos avanzados y modelos de clasificación.</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.nosotros-container {
  margin-top: 20px;
}
.titulo-seccion {
  color: #38bdf8;
  margin-bottom: 10px;
}
.descripcion {
  color: #cbd5e1;
  font-size: 1.1rem;
  margin-bottom: 30px;
  max-width: 800px;
}
.valores-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}
.valor-card {
  background-color: #1e293b;
  border: 1px solid #334155;
  padding: 25px; 
  border-radius: 8px;
  text-align: left; 
  line-height: 1.6;
}
.valor-card h3 {
  color: #7dd3fc;
  margin-top: 0;
}
.valor-card p {
  color: #94a3b8;
  font-size: 1rem;
}
</style>