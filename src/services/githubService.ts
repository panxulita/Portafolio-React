import type { GitHubRepo } from '../types';

// Usuario de GitHub
const GITHUB_USERNAME = 'panxulita';

// Consultar los repositorios del usuario
export async function getGithubRepos(): Promise<GitHubRepo[]> {
    const response = await fetch(
        `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`
    );

    // Comprobar si la respuesta fue exitosa
    if (!response.ok) {
        throw new Error('No se pudieron cargar los repositorios de GitHub');
    }

    // Convertir la respuesta a JSON
    const repos: GitHubRepo[] = await response.json();

    return repos;
}
