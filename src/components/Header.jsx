import React from 'react';
import '../assets/styles/components/Header.scss';
import logo from '../assets/static/logo-platzi.png'
import userIcon from '../assets/static/user-icon.png'

//componentes presentacionales//solo empujan una seccion.
const Header = () => (
    <header>
        <img className="header__img" src={logo} alt=""/>
        <div className="header__menu">
            <div className="header__menu--profile">
                <img src={userIcon} alt="user"/>
                <p>Perfil</p>
            </div>
            <div>
                <ul>
                    <li><a href="/">Cuenta</a></li>
                    <li><a href="/">Cerrar Sesión</a></li>
                </ul>
            </div>
        </div>
    </header>
);

export default Header;