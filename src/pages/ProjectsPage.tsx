import { projects } from '../data/portfolioData';
import { ProjectCard } from '../components/ProjectCard/ProjectCard';
import { useGithub } from '../hooks/useGithub';

export function ProjectsPage() {
    const { repos, loading, error } = useGithub();

    return (
        <main className="projects">
            <header className="projects__header">
                <p className="projects__label">Mi trabajo</p>
                <h1 className="projects__title">Mis proyectos</h1>

                <p className="projects__description">
                    Algunos trabajos y experiencias de aprendizaje.
                </p>
            </header>

            <section className="projects__grid">
                {projects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                    />
                ))}
            </section>

            <section className="github-projects">
                <h2>Mis repositorios de GitHub</h2>

                {loading && <p>Cargando repositorios...</p>}

                {error && <p>Error: {error}</p>}

                {!loading && !error && (
                    <div className="projects__grid">
                        {repos.map((repo) => (
                            <article
                                className="project-card"
                                key={repo.id}
                            >
                                <h3>{repo.name}</h3>

                                <p>
                                    {repo.description ??
                                        'Sin descripción disponible.'}
                                </p>

                                <p>
                                    Lenguaje: {repo.language ?? 'No especificado'}
                                </p>

                                <p>
                                    ⭐ {repo.stargazers_count}
                                </p>

                                <a
                                    href={repo.html_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Ver repositorio
                                </a>
                            </article>
                        ))}
                    </div>
                )}
            </section>
        </main>
    );
}
