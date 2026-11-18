import type { ProjectItem } from '../../types';
import './ProjectCard.css';

interface ProjectCardProps {
    project: ProjectItem;
}

export function ProjectCard({ project }: ProjectCardProps) {
    return (
        <article className="project-card">
            <h2 className="project-card__title">
                {project.titulo}
            </h2>

            <p className="project-card__description">
                {project.descripcion}
            </p>

            <div className="project-card__tags">
                {project.tecnologias.map((technology) => (
                    <span key={technology}>
                        {technology}
                    </span>
                ))}
            </div>

            {project.urlRepo && (
                <a
                    href={project.urlRepo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-card__link"
                >
                    Ver repositorio
                </a>
            )}
        </article>
    );
}
