export function ContactPage() {
    return (
        <main className="contact">
            <section className="contact__content">
                <p className="contact__label">Hablemos</p>
                <h1 className="contact__title">Contacto</h1>

                <p className="contact__description">
                    ¿Tienes alguna propuesta o quieres conocer más
                    sobre mis proyectos? Puedes contactarme.
                </p>

                <a
                    href="mailto:francisca.alvarado2026@alu.uct.cl"
                    className="contact__email"
                >
                    Enviarme un correo
                </a>

                <a
                    href="https://github.com/panxulita"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact__github"
                >
                    Visitar mi GitHub
                </a>
            </section>
        </main>
    );
}
