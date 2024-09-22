// src/Menu.js
import React from 'react';
import './Menu.css'; // Importar el CSS

const Menu = () => {
    return (
        <nav>
            <ul>
                <li><a href="#/cursos">Cursos</a></li>
                <li><a href="#/otro">Otro Desarrollo</a></li>
            </ul>
        </nav>
    );
};

export default Menu;

