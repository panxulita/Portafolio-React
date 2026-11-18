# Inventario de migración – Evaluación 2 a Evaluación 4

## 1. Información general

**Proyecto original:** Portafolio Personal de Desarrollo de Frontend  
**Proyecto actual:** Portafolio Personal desarrollado con React y TypeScript.

El objetivo de la migración fue conservar la identidad visual y el contenido principal del portafolio original, reorganizando su implementación mediante componentes reutilizables y una estructura modular.

## 2. Inventario del proyecto original (Evaluación 2)

El proyecto original estaba desarrollado utilizando HTML5 y CSS3.

### Estructura original

```text
Portafolio/
│
├── index.html
├── css/
│   └── styles.css
│
└── img/
    └── perfil.jpg.jpeg
```

### Secciones y contenido

| Elemento | Descripción |
|---|---|
| Encabezado | Logo personal y navegación principal. |
| Inicio | Presentación personal, nombre, carrera y fotografía. |
| Sobre mí | Descripción personal y académica. |
| Habilidades | Tecnologías y herramientas conocidas. |
| Proyectos | Presentación de tres proyectos personales. |
| Contacto | Correo electrónico y enlace a GitHub. |
| Footer | Derechos de autor y tecnologías utilizadas. |

### Proyectos presentados originalmente

1. **Sistema de Gestión de Citas:** API REST para gestionar citas, profesionales y clientes.
2. **Calculadora de Límites:** herramienta académica relacionada con cálculo y programación.
3. **Café Aroma:** página web desarrollada utilizando HTML5 y CSS3.

### Habilidades presentadas

- Python.
- HTML5.
- CSS3.
- JavaScript.
- SQL.
- Git y GitHub.

## 3. Inventario de estilos originales

Los estilos estaban centralizados en `css/styles.css`.

### Paleta de colores

| Variable | Valor |
|---|---|
| `--primary` | `#3976bd` |
| `--primary-dark` | `#24558f` |
| `--background` | `#ffffff` |
| `--background-soft` | `#f3f7fc` |
| `--text` | `#243247` |
| `--text-light` | `#68788c` |
| `--border` | `#e1e9f2` |

### Características visuales conservadas

- Tipografía Arial, Helvetica y sans-serif.
- Encabezado blanco y navegación centrada.
- Presentación inicial con distribución flexible.
- Fotografía de perfil circular.
- Botones principales de color azul.
- Secciones con fondos blancos y azules suaves.
- Habilidades presentadas mediante etiquetas.
- Tarjetas para los proyectos.
- Pie de página oscuro.
- Diseño adaptable mediante media queries.

## 4. Migración de HTML a componentes React

| Elemento original | Implementación en React |
|---|---|
| Encabezado y navegación | `Navbar.tsx` |
| Presentación inicial | `HomePage.tsx` |
| Información personal | `HomePage.tsx` |
| Tarjetas de proyectos | `ProjectCard.tsx` |
| Página de proyectos | `ProjectsPage.tsx` |
| Página de contacto | `ContactPage.tsx` |
| Pie de página | `App.tsx` |
| Estilos generales | `index.css` y `App.css` |
| Estilos de navegación | `Navbar.css` |
| Estilos de tarjetas | `ProjectCard.css` |

La navegación se implementó utilizando React Router DOM, con rutas para Inicio, Proyectos y Contacto, además de una página para rutas inexistentes.

## 5. Organización de datos y tipos

Se separaron los datos y las definiciones de tipos para mejorar la organización del proyecto.

| Archivo | Responsabilidad |
|---|---|
| `src/data/portfolioData.ts` | Almacena la información de los proyectos personales. |
| `src/types/index.ts` | Define las interfaces utilizadas en el proyecto. |
| `src/services/githubService.ts` | Realiza las solicitudes a la API de GitHub. |
| `src/hooks/useGithub.ts` | Gestiona la consulta y los estados de la información obtenida. |

Se utiliza TypeScript para definir estructuras de datos y tipar las propiedades de los componentes.

## 6. Integración de API

Se incorporó GitHub REST API para consultar y mostrar repositorios públicos del usuario.

La integración permite presentar:

- Nombre del repositorio.
- Descripción.
- Lenguaje principal.
- Cantidad de estrellas.
- Enlace al repositorio.

La consulta utiliza `fetch` y `async/await`. Se contemplan los estados de carga y error, junto con la cancelación de solicitudes mediante `AbortController`.

## 7. Refactorizaciones y mejoras

Durante la migración se realizaron las siguientes mejoras:

- Se reemplazó la estructura basada en HTML por componentes React.
- Se separaron las páginas y los componentes reutilizables.
- Se centralizaron los datos de los proyectos.
- Se incorporaron interfaces de TypeScript.
- Se implementó navegación mediante React Router DOM.
- Se integró una API externa para obtener repositorios.
- Se organizaron los estilos por componentes.
- Se mantuvo la identidad visual del portafolio original.
- Se incorporó una página 404 para rutas no reconocidas.

## 8. Funcionalidades JavaScript del proyecto original

En los archivos entregados del proyecto de la Evaluación 2 se encontraron `index.html`, `css/styles.css` y la imagen de perfil. No se encontró ningún archivo JavaScript.

Por este motivo, no fue posible identificar funcionalidades JavaScript originales que debieran migrarse, como menú hamburguesa, cambio de tema, filtros de proyectos o validación de formularios.

La versión actual incorpora funcionalidades nuevas correspondientes a los requerimientos de la Evaluación 4, como la navegación entre páginas y la consulta de repositorios de GitHub.

## 9. Conclusión

La migración permitió transformar el portafolio original en una aplicación desarrollada con React y TypeScript, conservando sus principales elementos visuales y contenidos.

Además, se mejoró la organización del código mediante componentes reutilizables, separación de responsabilidades, tipado de datos e integración con una API REST.