import type { GitHubRepo } from '../types';

const GITHUB_USERNAME = 'panxulita';

export async function getGithubRepos(
    signal?: AbortSignal
): Promise<GitHubRepo[]> {
    const response = await fetch(
        `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`,
        { signal }
    );

    if (!response.ok) {
        throw new Error('No se pudieron cargar los repositorios de GitHub');
    }

    const repos: GitHubRepo[] = await response.json();

    return repos;
}
