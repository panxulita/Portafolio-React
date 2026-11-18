import { NavLink } from 'react-router-dom';
import './Navbar.css';

export function Navbar() {
    return (
        <header className="navbar">
            <NavLink to="/" className="navbar__logo">
                FA.
            </NavLink>

            <nav className="navbar__menu" aria-label="Navegación principal">
                <ul className="navbar__list">
                    <li className="navbar__item">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive
                                    ? 'navbar__link navbar__link--active'
                                    : 'navbar__link'
                            }
                        >
                            Inicio
                        </NavLink>
                    </li>

                    <li className="navbar__item">
                        <NavLink
                            to="/proyectos"
                            className={({ isActive }) =>
                                isActive
                                    ? 'navbar__link navbar__link--active'
                                    : 'navbar__link'
                            }
                        >
                            Proyectos
                        </NavLink>
                    </li>

                    <li className="navbar__item">
                        <NavLink
                            to="/contacto"
                            className={({ isActive }) =>
                                isActive
                                    ? 'navbar__link navbar__link--active'
                                    : 'navbar__link'
                            }
                        >
                            Contacto
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
