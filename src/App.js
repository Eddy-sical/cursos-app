// src/App.js
import React from 'react';
import CursoForm from './CursoForm';
import Menu from './Menu';

const App = () => {
    return (
        <div>
            <Menu />
            <h1>Crear Curso</h1>
            <CursoForm />
        </div>
    );
};

export default App;
