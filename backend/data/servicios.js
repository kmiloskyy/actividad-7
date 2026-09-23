const servicios = [
    {
        id: 1,
        nombre: 'Auditoría de Seguridad Web',
        categoria: 'Ciberseguridad',
        descripcion: 'Evaluación de vulnerabilidades (XSS, SQLi, CSRF) en aplicaciones web.',
        precio: 499990,
        disponible: true
    },
    {
        id: 2,
        nombre: 'Desarrollo Backend a Medida',
        categoria: 'Desarrollo',
        descripcion: 'Creación de APIs robustas utilizando Node.js o Python con Flask.',
        precio: 849990,
        disponible: true
    },
    {
        id: 3,
        nombre: 'Análisis de Malware en Sandbox',
        categoria: 'Ciberseguridad',
        descripcion: 'Análisis de comportamiento de software malicioso y ransomware en entornos controlados.',
        precio: 349990,
        disponible: false
    },
    {
        id: 4,
        nombre: 'Diseño de Arquitectura Cloud',
        categoria: 'Infraestructura',
        descripcion: 'Configuración y despliegue de servidores en AWS con redes VPC y seguridad.',
        precio: 1199990,
        disponible: true
    },
    {
        id: 5,
        nombre: 'Optimización de Bases de Datos',
        categoria: 'Desarrollo',
        descripcion: 'Refactorización, diagramas Entidad-Relación y mejora de rendimiento en MySQL/MariaDB.',
        precio: 399990,
        disponible: true
    },
    {
        id: 6,
        nombre: 'Modelos de Clasificación de Datos',
        categoria: 'Análisis de Datos',
        descripcion: 'Implementación de algoritmos KNN y árboles de decisión para análisis estadístico.',
        precio: 449990,
        disponible: false
    },
    {
        id: 7,
        nombre: 'Desarrollo de Interfaces Web',
        categoria: 'Desarrollo',
        descripcion:'Creación de aplicaciones frontend interactivas y dinámicas utilizando frameworks como React, Angular o Vue.js.',
        precio: 549990,
        disponible: true
    },
    {
        id: 8,
        nombre: 'Test de Pentesting',
        categoria: 'Ciberseguridad',
        descripcion: 'Simulación de ataques controlados para identificar brechas de seguridad.',
        precio: 899990,
        disponible: true
    }
]

module.exports = servicios;