# Rick and Morty Frontend

![Autor](https://img.shields.io/badge/Autor-Iv%C3%A1n%20Mancilla-lightgrey)  ![Angular](https://img.shields.io/badge/Angular-18.2.21-DD0031?logo=angular&logoColor=white)  ![TypeScript](https://img.shields.io/badge/TypeScript-5.5+-3178C6?logo=typescript&logoColor=white)  ![Node.js](https://img.shields.io/badge/Node.js-18+-339933?logo=node.js&logoColor=white) 
![npm](https://img.shields.io/badge/npm-10+-CB3837?logo=npm&logoColor=white)  ![RxJS](https://img.shields.io/badge/RxJS-7.8+-B7178C?logo=reactivex&logoColor=white)  ![Licencia](https://img.shields.io/badge/Licencia-Unlicense-blue)

Aplicación web Angular que consume la API de Rick and Morty para visualizar episodios, personajes y locaciones de la serie.

---
## 📋 Descripción

Single Page Application (SPA) desarrollada en Angular 18 con arquitectura de standalone components. Permite explorar el universo de Rick and Morty a través de una interfaz moderna y responsiva.

## 🚀 Tecnologías

- **Angular**: 18.2.21
- **TypeScript**: 5.5+
- **RxJS**: 7.8+
- **Standalone Components**: Arquitectura moderna sin módulos
- **CSS puro**: Sin frameworks CSS
- **OpenAPI Generator**: Generación automática de servicios

## 📦 Prerrequisitos

- **Node.js**: 18.x o superior
- **npm**: 10.x o superior
- **Angular CLI**: 18.2.21
---
### Verifica las versiones:
```
node --version
npm --version
ng version
```
### Clonar el Repositorio
```
git clone https://github.com/IvanAlejandroMancilla/FrontendCarsales.git
cd FrontendCarsales
```
**Instala las dependencias:**
```
npm install
```
## ▶️ Ejecución
### Modo desarrollo
```
ng serve
```

> **Nota:** La aplicación estará disponible en: [**http://localhost:4200/**](http://localhost:4200/)

### Build de producción
```
ng build --configuration production
```
Los archivos compilados estarán en: `dist/`
## 📂 Estructura del Proyecto


src/
├── app/
│ ├── pages/
│ │ ├── home/ # Página principal
│ │ ├── episodes/ # Lista de episodios
│ │ ├── episode-detail/ # Detalle de episodio
│ │ ├── personajes/ # Personajes
│ │ └── lugares/ # Locaciones
│ ├── components/
│ │ └── navbar/ # Barra de navegación
│ ├── app.component.ts # Componente raíz
│ └── app.routes.ts # Configuración de rutas
├── api/ # Servicios generados con OpenAPI
└── assets/ # Recursos estáticos

---
## ✨ Características

✅ **Routing con child routes**: `/episodes/:id` para detalles  
✅ **Standalone components**: Arquitectura moderna de Angular  
✅ **Consumo de API REST**: Servicios HTTP con RxJS  
✅ **Navegación funcional**: Home, Episodes, Characters, Locations  
✅ **Diseño responsivo**: CSS Grid y Flexbox  
✅ **Sin frameworks CSS**: Estilos personalizados  
✅ **TypeScript estricto**: Tipado fuerte en todo el proyecto  

## 🌐 Rutas Disponibles

| Ruta | Descripción |
|------|-------------|
| `/home` | Página principal |
| `/episodes` | Lista de todos los episodios |
| `/episodes/:id` | Detalle de un episodio específico |
| `/characters` | Lista de personajes |
| `/locations` | Lista de locaciones |

## 🛠️ Scripts Disponibles

npm start # Inicia servidor de desarrollo
npm run build # Build de producción
npm test # Ejecuta pruebas unitarias
npm run lint # Verifica código con ESLint

----

## 🎨 Paleta de Colores

- **Primary**: `#2d7a4f` (Verde oscuro)
- **Secondary**: `#52c77a` (Verde medio)
- **Accent**: `#b0f2c2` (Verde claro)
- **Background**: `#8edba7` (Verde pastel)

## 👤 Autor

**Iván Alejandro Mancilla**  
GitHub: [@IvanAlejandroMancilla](https://github.com/IvanAlejandroMancilla)

## 📄 Licencia
Este proyecto es parte de una prueba técnica para Carsales.
---
⭐ Si este proyecto te resultó útil, no dudes en dar una estrella al repositorio.
