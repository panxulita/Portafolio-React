/* Información de cada proyecto del portafolio */
export interface ProjectItem {
    id: number;
    titulo: string;
    descripcion: string;
    tecnologias: string[];
    urlRepo: string;
}

/* Información recibida desde GitHub API */
export interface GitHubRepo {
    id: number;
    name: string;
    description: string | null;
    html_url: string;
    language: string | null;
    stargazers_count: number;
    updated_at: string;
}

/* Estado de las peticiones a la API */
export interface FetchState<T> {
    data: T | null;
    loading: boolean;
    error: string | null;
}
