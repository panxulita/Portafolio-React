
import { Routes, Route } from 'react-router-dom';

import { Navbar } from './components/Navbar/Navbar';
import { HomePage } from './pages/HomePage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';

import './App.css';

function App() {
    return (
        <>
            <Navbar />

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/proyectos" element={<ProjectsPage />} />
                <Route path="/contacto" element={<ContactPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>

            <footer className="footer">
                <p>© 2026 Francisca Alvarado. Todos los derechos reservados.</p>
                <p>Desarrollado con React y TypeScript.</p>
            </footer>
        </>
    );
}

export default App;
