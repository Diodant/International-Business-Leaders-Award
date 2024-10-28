import React from 'react';
import { Link } from 'react-router-dom';
import EYLogo from '../images/logo_footer.svg'; 
import FacebookIcon from '../images/ic_facebook.svg'; 
import YouTubeIcon from '../images/ic_youtube.svg'; 

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-logo">
          <img src={EYLogo} alt="EY Logo" />
        </div>
        <nav className="footer-links">
          <ul>
          <li><Link to="/">Главная</Link></li>
            <li><Link to="/gallery">Фотогалерея</Link></li>
            <li><Link to="/judges">Судьи</Link></li>
            <li><Link to="/winners">Победители</Link></li>
            <li><Link to="/contacts">Контакты</Link></li>
          </ul>
        </nav>
      </div>
      <div className="footer-legal">
        <p>
        Добро пожаловать на официальный сайт <strong>Международной премии Лидеров бизнеса!</strong> Это одно из самых престижных международных событий в мире бизнеса, проводимого с 2019 года. Премия создана для того, чтобы отметить выдающихся предпринимателей и лидеров, которые внесли значительный вклад в развитие глобальной экономики, инновационных решений и устойчивого развития. 
        </p>

        <div className="footer-social">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img src={FacebookIcon} alt="Facebook" />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
            <img src={YouTubeIcon} alt="YouTube" />
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
