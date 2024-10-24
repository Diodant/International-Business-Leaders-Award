import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setFormSubmitted(true);
    }
  };

  return (
    <div className="contact-section">
      <div className="contact-form-container">
        <h2>Свяжитесь с нами</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Имя"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="E-mail"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Сообщение..."
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>



          <button type="submit" className="submit-btn">
            Отправить
          </button>

          {formSubmitted && (
            <p className="success-message">Сообщение отправлено!</p>
          )}
        </form>
      </div>

      <div className="contact-info-container">
        <h2>Контактные данные организатора</h2>
        <p>Почтовый адрес: 109074, г. Москва, Славянская площадь, д.4, стр.1</p>
        <p>Телефон: 8 800 100 11 11</p>
        <p>
          Электронная почта:{' '}

          <strong><a href="mailto:info_@corpmsp.ru">info_@corpmsp.ru</a></strong>
        </p>
        <p>
          Сайт: <a href="https://corpmsp.ru/" target="_blank" rel="noopener noreferrer">https://corpmsp.ru/</a>
        </p>
      </div>
    </div>
  );
};

export default ContactForm;
