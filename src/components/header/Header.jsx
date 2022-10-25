import React from 'react';
import { Link } from 'react-router-dom';
import { capitalize } from '../../utils/stringFuntions';
import './style.scss'

const Header = ({ handleCloseSession, userSession, showTitle, background }) => {

    return (
        <>
            <div className={`header ${background}`}>
                {showTitle && <h1>App de Giros</h1>}
                <div className="header__user">
                    <span>{capitalize(userSession.name)}</span>
                    <button onClick={handleCloseSession}>
                        Cerrar Sesión
                    </button>
                </div>
            </div>
            <div className="menu">
                <Link to="/home" className='menu__item'>
                Inicio</Link>
                <Link to="/new" className='menu__item'>
                Nuevo</Link>
            </div>
        </>
    )
}

export default Header