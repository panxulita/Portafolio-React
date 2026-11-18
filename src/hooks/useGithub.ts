import { useEffect, useState } from 'react';
import { getGithubRepos } from '../services/githubService';
import type { GitHubRepo, FetchState } from '../types';

export function useGithub() {
    const [state, setState] = useState<FetchState<GitHubRepo[]>>({
        data: null,
        loading: true,
        error: null
    });

    useEffect(() => {
        const controller = new AbortController();

        async function loadRepos() {
            try {
                setState({
                    data: null,
                    loading: true,
                    error: null
                });

                const repos = await getGithubRepos(controller.signal);

                setState({
                    data: repos,
                    loading: false,
                    error: null
                });
            } catch (error) {
                if (error instanceof Error && error.name === 'AbortError') {
                    return;
                }

                setState({
                    data: null,
                    loading: false,
                    error: error instanceof Error
                        ? error.message
                        : 'Ocurrió un error inesperado'
                });
            }
        }

        loadRepos();

        return () => {
            controller.abort();
        };
    }, []);

    return {
        repos: state.data ?? [],
        loading: state.loading,
        error: state.error
    };
}