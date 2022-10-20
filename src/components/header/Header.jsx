import React from 'react';
import './style.scss'

const Header = ({ handleCloseSession }) => {
    return (
        <>
            <div className="header">
                <h1>App de Giros</h1>
                <button onClick={handleCloseSession}>
                    Cerrar Sesión
                </button>
            </div>
        </>
    )
}

export default Header