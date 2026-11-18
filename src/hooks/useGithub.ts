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
        async function loadRepos() {
            try {
                setState({
                    data: null,
                    loading: true,
                    error: null
                });

                const repos = await getGithubRepos();

                setState({
                    data: repos,
                    loading: false,
                    error: null
                });

            } catch (error) {
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
    }, []);

    return {
        repos: state.data ?? [],
        loading: state.loading,
        error: state.error
    };
}
