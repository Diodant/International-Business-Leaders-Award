import React from 'react';
import { Link } from 'react-router-dom';
import image1 from '../images/image1.jpg';
import image2 from '../images/image2.jpg';
import MailIcon from '../images/ic_mail.svg';
import Nominations from './Nominations';
import BusinessAwardInfo from './BusinessAwardInfo';
import partner1 from '../images/partners/partner1.png';
import partner2 from '../images/partners/partner2.png';
import partner3 from '../images/partners/partner3.png';
import partner4 from '../images/partners/partner4.webp';
import partner5 from '../images/partners/partner5.jpg';
import partner6 from '../images/partners/partner6.png';
import partner7 from '../images/partners/partner7.jpg';
import partner8 from '../images/partners/partner8.png';
import partner9 from '../images/partners/partner9.png';
import partner10 from '../images/partners/partner10.png';

const MainPage = () => {


  return (
    <>
    <div className="main-container">
      <div className="overlay">
        <div className="text-content">
          <h3>Кто мы</h3>
          <h1>Мы те, кто совершенствует бизнес, чтобы улучшить мир</h1>
        </div>
      </div>
    </div>

    <div className="business-leaders-section">
        <div className="content-wrapper">
          <h2 className="section-title">О нас</h2>
          <div className='section-flex'>
          <p>
            Добро пожаловать на официальный сайт Международной премии Лидеров бизнеса!
            Это одно из самых престижных международных событий в мире бизнеса, проводимого с 2019 года. Премия создана
            для того, чтобы отметить выдающихся предпринимателей и лидеров, которые внесли значительный вклад в
            развитие глобальной экономики, инновационных решений и устойчивого развития. В рамках премии мы отмечаем
            бизнесменов, которые не только добились успеха в своей стране, но и сумели вывести свои достижения на
            международный уровень, тем самым меняя стандарты и подходы к бизнесу на глобальной арене.
          </p>
          <p>
            С момента своего основания премия объединила более 5000 участников из стран СНГ, таких как Азербайджан,
            Армения, Беларусь, Казахстан, Кыргызстан, Молдова, Россия, Таджикистан, Туркменистан, Узбекистан, Украина.
            Эта премия заслужила международное признание за строгие критерии отбора и высокие стандарты оценки
            участников, что подчеркивает ее исключительную значимость в мире бизнеса. Премия ежегодно привлекает
            внимание ведущих СМИ, бизнес-экспертов и общественных деятелей, укрепляя ее репутацию как одного из
            важнейших событий в деловом сообществе.
          </p>
          </div>
        </div>
      </div>

      <Nominations/>



      <div className="diversity-section">
       
        <div className="diversity-block">
          <img src={image1} alt="Boats on the lake" className="diversity-image" />
          <div className="text-diversity">
            <h3>Процесс отбора и участия</h3>
            <p>
            Прием заявок начинается 1 апреля и продлится до 15 мая ежегодно. В это время бизнесмены стран СНГ могут подать заявки, представив свои достижения и проекты, соответствующие одной из пяти престижных номинаций. Все заявки проходят тщательную экспертизу международного жюри, в состав которого входят признанные эксперты и лидеры отрасли. Жюри оценивает не только финансовые успехи участников, но и их вклад в развитие их сфер бизнеса, применение инновационных технологий, социальных инициатив и глобальное расширение бизнеса.
            </p>
          </div>
        </div>

        
        <div className="diversity-block reverse-layout">
        <img src={image2} alt="Human Rights" className="diversity-image" />
          <div className="text-diversity">
            <h3>Церемония награждения</h3>
            <p>
            Кульминацией премии становится ежегодная торжественная церемония награждения, которая проходит 1 июня. Это уникальная возможность для победителей и участников укрепить свои позиции на мировом рынке, наладить деловые контакты и получить признание среди ведущих представителей международного бизнес-сообщества.
            </p>
          </div>
        </div>
      </div>

    <BusinessAwardInfo/>

    <div className="quote-section">
        <div className="quote-overlay">
          <div className="quote-content">
            <div className='quote-title'>“</div>
            <p>Мы помогаем ведущим предпринимателям и бизнес-лидерам достигать успеха на глобальной арене — отмечаем тех, кто продвигает инновации, способствует развитию глобальной экономики и внедряет устойчивые решения. Мы гордимся тем, что объединили более 5000 участников из разных стран СНГ, создавая возможности для обмена опытом и поддержки бизнеса на международном уровне.</p>
            <p className="author white">Артур Григорян</p>
            <p className="author pb-20 yellow">
              Руководитель Международной премии Лидеров бизнеса
            </p>
          </div>
        </div>
      </div>
    
    <div className="partners-section">
        <h2>Наши Партнеры</h2>
        <div className="partners-grid">
          <img src={partner1} alt="Partner 1" />
          <img src={partner2} alt="Partner 2" />
          <img src={partner3} alt="Partner 3" />
          <img src={partner4} alt="Partner 4" />
          <img src={partner5} alt="Partner 5" />
        </div>
        <div className="partners-grid">
        <img src={partner6} alt="Partner 6" />
          <img src={partner7} alt="Partner 7" />
          <img src={partner8} alt="Partner 8" />
          <img src={partner9} alt="Partner 9" />
          <img src={partner10} alt="Partner 10" />
        </div>
      </div>

      <div className="contact-us-section">
      <h2>Свяжитесь с нами</h2>
      <p>Напишите нам, чтобы получить дополнительную информацию.</p>
      <div className='contact-mail-link-flex'>
      <Link to="/contacts" className="contact-mail-link">
        <img src={MailIcon} alt="Mail Icon" className="mail-icon" />
      </Link>
      </div>
    </div>


    </>
  );
};

export default MainPage;
