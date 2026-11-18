import { Link } from 'react-router-dom';

export function NotFoundPage() {
    return (
        <main className="not-found">
            <h1 className="not-found__title">404</h1>
            <p className="not-found__text">
                Lo sentimos, la página que buscas no existe.
            </p>

            <Link to="/" className="not-found__link">
                Volver al inicio
            </Link>
        </main>
    );
}
