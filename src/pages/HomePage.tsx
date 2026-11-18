import perfil from '../assets/perfil.jpg.jpeg';

export function HomePage() {
    return (
        <main className="home">
            <section className="home__hero">
                <div className="home__content">
                    <p className="home__greeting">¡Hola! Soy</p>

                    <h1 className="home__title">
                        Francisca <span>Alvarado</span>
                    </h1>

                    <h2 className="home__subtitle">
                        Estudiante de Ingeniería Civil Informática
                    </h2>

                    <p className="home__description">
                        Me interesa la tecnología, la programación y el
                        desarrollo de soluciones digitales. Actualmente
                        estoy construyendo mis conocimientos en el mundo
                        de la informática.
                    </p>
                </div>

                <div className="home__image">
                    <img
                        src={perfil}
                        alt="Fotografía de Francisca Alvarado"
                    />
                </div>

            </section>

            <section className="home__about">
                <p className="home__label">Conóceme</p>
                <h2 className="home__heading">Sobre mí</h2>

                <p className="home__text">
                    Soy estudiante de Ingeniería Civil Informática en la
                    Universidad Católica de Temuco. Me encuentro en
                    constante aprendizaje y disfruto explorar nuevas
                    tecnologías y desarrollar proyectos.
                </p>

                <div className="home__skills">
                    <span>Python</span>
                    <span>HTML5</span>
                    <span>CSS3</span>
                    <span>JavaScript</span>
                    <span>SQL</span>
                    <span>Git & GitHub</span>
                </div>
            </section>
        </main>
    );
}
