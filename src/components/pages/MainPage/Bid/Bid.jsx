import { useState } from 'react';
import './Bid.css';
import { useSlideIn } from '@hooks/useSlideIn';

export default function Bid() {
  const [checked, setChecked] = useState(false);
  const [formData, setFormData] = useState({
    surname: '',
    name: '',
    email: '',
    phone: '',
    comment: '',
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  
  const normalizePhone = (phone) => {
    const digits = phone.replace(/\D/g, '');
    if (digits.length === 11 && digits[0] === '8') {
      return '+7' + digits.slice(1);
    } else if (digits.length === 11 && digits[0] === '7') {
      return '+' + digits;
    } else if (digits.length === 10 && digits[0] === '7') {
      return '+7' + digits;
    }
    return null;
  };

  const isValidRussianPhone = (phone) => {
    const digits = phone.replace(/\D/g, '');
    return (
      (digits.length === 11 && ['7', '8'].includes(digits[0])) ||
      (digits.length === 10 && digits[0] === '7')
    );
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));

    if (errors[id]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[id];
        return newErrors;
      });
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.surname.trim()) newErrors.surname = 'Напишите фамилию';
    if (!formData.name.trim()) newErrors.name = 'Напишите имя';

    if (!formData.email.trim()) {
      newErrors.email = 'Напишите почту';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Неверный формат email';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Введите телефон';
    } else if (!isValidRussianPhone(formData.phone)) {
      newErrors.phone = 'Введите корректный номер, например: +79999999999';
    }

    if (!checked) {
      alert('Вы должны дать согласие на обработку персональных данных');
      return false;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = async () => {
  if (!validate()) return;

  setLoading(true);

  const normalizedPhone = normalizePhone(formData.phone);
  if (!normalizedPhone) {
    alert('Некорректный телефон');
    setLoading(false);
    return;
  }

  console.log('Отправляем:', {
    firstName: formData.name,
    lastName: formData.surname,
    email: formData.email,
    phone: normalizedPhone,
    comment: formData.comment,
    userAgreedToPrivacyPolicy: checked,
  });

  try {
    
    const response = await fetch('https://localhost:7224/api/bids', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName: formData.name.trim(),
        lastName: formData.surname.trim(),
        email: formData.email.trim(),
        phone: normalizedPhone,
        comment: formData.comment.trim(),
        userAgreedToPrivacyPolicy: checked,
      }),
    });

    console.log('Статус ответа:', response.status);
    const text = await response.text();
    console.log('Тело ответа:', text);

    if (response.ok) {
      setFormData({ surname: '', name: '', email: '', phone: '', comment: '' });
      setChecked(false);
      alert('Заявка отправлена! Мы свяжемся с вами.');
    } else {
      alert(`Ошибка: ${text}`);
    }
  } catch (error) {
    console.error('Ошибка сети:', error);
    alert('Не удалось отправить заявку. Проверьте интернет или попробуйте позже.');
  } finally {
    setLoading(false);
  }
};
  const [bidRef, isBidVisible] = useSlideIn();
  return (
    <section id='bid' className="bid">
      <div className="container">
        <div className="bid-inner">
          <div
          ref={bidRef}
          className={`bid-block ${isBidVisible ? 'visible' : ''}`}>
            <h1 className="bid-title">Оставить заявку</h1>
            <p className="bid-description">
              Оставьте контакт — и мы вышлем вам прайс с оптовыми ценами, условиями поставки и сертификатами.
            </p>
            <div className="bid-row">
              <div className="bid-row-item">
                <div className={`form-group ${errors.surname ? 'error' : ''}`}>
                  <input
                    type="text"
                    id="surname"
                    className="form-input bid-input"
                    placeholder=" "
                    value={formData.surname}
                    onChange={handleChange}
                  />
                  <label htmlFor="surname" className="form-label">
                    Фамилия *
                  </label>
                </div>
                {errors.surname && <span className="error-message">{errors.surname}</span>}
              </div>
              <div className="bid-row-item">
                <div className={`form-group ${errors.name ? 'error' : ''}`}>
                  <input
                    type="text"
                    id="name"
                    className="form-input bid-input"
                    placeholder=" "
                    value={formData.name}
                    onChange={handleChange}
                  />
                  <label htmlFor="name" className="form-label">
                    Имя *
                  </label>
                </div>
                {errors.name && <span className="error-message">{errors.name}</span>}
              </div>
            </div>
            <div className="bid-row">
              <div className="bid-row-item">
                <div className={`form-group ${errors.email ? 'error' : ''}`}>
                  <input
                    type="email"
                    id="email"
                    className="form-input bid-input"
                    placeholder=" "
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <label htmlFor="email" className="form-label">
                    E-mail *
                  </label>
                </div>
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>
              <div className="bid-row-item">
                <div className={`form-group ${errors.phone ? 'error' : ''}`}>
                  <input
                    type="tel"
                    id="phone"
                    className="form-input bid-input"
                    placeholder=" "
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  <label htmlFor="phone" className="form-label">
                    Номер телефона *
                  </label>
                </div>
                {errors.phone && <span className="error-message">{errors.phone}</span>}
              </div>
            </div>
            <div className="bid-row">
              <div className="bid-row-item">
                <div className="form-group">
                  <textarea
                    id="comment" 
                    className="form-textarea bid-textarea"
                    placeholder=" "
                    value={formData.comment}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        comment: e.target.value,
                      }))
                    }
                  />
                  <label htmlFor="comment" className="form-label">
                    Комментарий
                  </label>
                </div>
              </div>
            </div>
            <label className="custom-checkbox">
              <input
                type="checkbox"
                checked={checked}
                onChange={() => setChecked(!checked)}
                className="hidden-checkbox"
              />
              <span className={`checkbox-box ${checked ? 'checked' : ''}`}></span>
              <span className="checkbox-text">
                Я даю согласие на обработку моих персональных данных в целях связи и делового взаимодействия. С{' '}
                <a
                  className="bid-link"
                  href="/policy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Политикой конфиденциальности
                </a>{' '}
                ознакомлен.
              </span>
            </label>
            <button
              className="bid-button"
              type="button"
              onClick={handleSubmit}
              disabled={loading}
            >
              {loading ? 'Отправка...' : 'Оставить заявку'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}