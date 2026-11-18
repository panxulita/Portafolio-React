import type { ProjectItem } from '../types';

export const projects: ProjectItem[] = [
    {
        id: 1,
        titulo: 'Sistema de Gestión de Citas',
        descripcion:
            'API REST para gestionar citas, profesionales y clientes, aplicando reglas de negocio y validaciones.',
        tecnologias: ['Python', 'FastAPI', 'SQLAlchemy'],
        urlRepo: ''
    },
    {
        id: 2,
        titulo: 'Calculadora de Límites',
        descripcion:
            'Herramienta académica para practicar y resolver ejercicios de límites matemáticos.',
        tecnologias: ['Python', 'Cálculo', 'Programación'],
        urlRepo: ''
    },
    {
        id: 3,
        titulo: 'Café Aroma',
        descripcion:
            'Diseño y desarrollo de una página web para una cafetería utilizando HTML y CSS.',
        tecnologias: ['HTML5', 'CSS3'],
        urlRepo: ''
    }
];
