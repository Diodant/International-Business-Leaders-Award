import React from 'react';
import { Link } from 'react-router-dom'; 
import LogoImg from '../images/ey-2024-logo-black-stacked-footer-91x100px.svg';

const Menu = () => {
  return (
    <header className="menu-header">
      <div className="logo">
        <img src={LogoImg} alt="EY Logo" />
        {/* <span className="slogan">Совершенствуя бизнес, улучшаем мир</span> */}
      </div>
      <nav>
        <ul className="menu">
          <li><Link to="/">Главная</Link></li> 
          <li><Link to="/gallery">Фотогалерея</Link></li>
          <li><Link to="/judges">Судьи</Link></li>
          <li><Link to="/careers">Победители</Link></li>
          <li><Link to="/Contacts">Контакты</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Menu;