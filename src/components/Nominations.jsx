import React, { useState } from 'react';
import backgroundImage from '../images/nom_bg.jpg'; 
import { ReactComponent as ArrowIcon } from '../images/arrow.svg'; 

const Nominations = () => {
  const [expanded, setExpanded] = useState(null);

  const handleExpand = (id) => {
    setExpanded(expanded === id ? null : id);
  };

  return (
    <div className="nominations-section">
      <div className="nominations-content">
        <div className="nominations-list">
          <h2>Ознакомьтесь с номинациями</h2>
          <ul>
            <li onClick={() => handleExpand(1)} className={expanded === 1 ? 'expanded' : ''}>
              <div className="nomination-header">
                Предприниматель года
                <ArrowIcon className="nominations-arrow-icon" />
              </div>
              {expanded === 1 && (
                <div className="nominations-expanded-text">
                  <p>
                  Престижная награда за выдающиеся достижения в развитии собственного бизнеса и его успешное продвижение на рынке. Этот титул получает предприниматель, который показал исключительные результаты в создании и масштабировании компании, обеспечив ее устойчивый рост и конкурентоспособность.
                  </p>
                </div>
              )}
            </li>
            <li onClick={() => handleExpand(2)} className={expanded === 2 ? 'expanded' : ''}>
              <div className="nomination-header">
                Инновационный лидер
                <ArrowIcon className="nominations-arrow-icon" />
              </div>
              {expanded === 2 && (
                <div className="nominations-expanded-text">
                  <p>
                  Награда для тех, кто внедрил уникальные технологии и решения, которые изменили не только их компанию, но и всю отрасль. В этой номинации отмечаются компании и лидеры, чьи разработки трансформировали бизнес-процессы и создали новые возможности на глобальном уровне.
                  </p>
                </div>
              )}
            </li>
            <li onClick={() => handleExpand(3)} className={expanded === 3 ? 'expanded' : ''}>
              <div className="nomination-header">
                Лидер устойчивого развития
                <ArrowIcon className="nominations-arrow-icon" />
              </div>
              {expanded === 3 && (
                <div className="nominations-expanded-text">
                  <p>
                  Признание за вклад в развитие бизнеса с акцентом на экологическую и социальную ответственность. Эта номинация подчеркивает важность ведения бизнеса с учетом принципов устойчивого развития и ответственности перед обществом и окружающей средой.
                  </p>
                </div>
              )}
            </li>
            <li onClick={() => handleExpand(4)} className={expanded === 4 ? 'expanded' : ''}>
              <div className="nomination-header">
                Лидер международного бизнеса
                <ArrowIcon className="nominations-arrow-icon" />
              </div>
              {expanded === 4 && (
                <div className="nominations-expanded-text">
                  <p>
                  Награда для тех, кто успешно расширил свой бизнес за пределы своей страны, продемонстрировав высокий уровень конкурентоспособности на международных рынках и внес значительный вклад в экономику своей страны и мира.
                  </p>
                </div>
              )}
            </li>
            <li onClick={() => handleExpand(5)} className={expanded === 5 ? 'expanded' : ''}>
              <div className="nomination-header">
                Прорыв года
                <ArrowIcon className="nominations-arrow-icon" />
              </div>
              {expanded === 5 && (
                <div className="nominations-expanded-text">
                  <p>
                  Номинация для стартапов и компаний, которые за короткий период показали самый успешный старт или стремительный рост, завоевав рынок и привлекая внимание как клиентов, так и инвесторов.
                  </p>
                </div>
              )}
            </li>
          </ul>
        </div>
        <div className="nominations-image-section">
          <div className="nominations-gradient-overlay"></div>
          <img src={backgroundImage} alt="Nominations Background" />
        </div>
      </div>

    </div>
  );
};

export default Nominations;
