
import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const whatsappMessage = `Hola Fabián, mi nombre es ${formData.name}.

📧 Email: ${formData.email}
📞 Teléfono: ${formData.phone}
🔧 Servicio de interés: ${formData.service}

Mensaje:
${formData.message}

¡Espero tu respuesta!`;
    
    const whatsappUrl = `https://wa.me/56912345678?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  const coverageAreas = [
    'Vilcún (Base de operaciones)',
    'Temuco',
    'Padre Las Casas',
    'Lautaro',
    'Perquenco',
    'Galvarino',
    'Cholchol',
    'Nueva Imperial',
    'Carahue',
    'Angol'
  ];

  const contactInfo = [
    {
      icon: '📱',
      title: 'WhatsApp',
      info: '+56 9 1234 5678',
      link: 'https://wa.me/56912345678'
    },
    {
      icon: '📧',
      title: 'Email',
      info: 'contacto@solucionesfarias.cl',
      link: 'mailto:contacto@solucionesfarias.cl'
    },
    {
      icon: '📍',
      title: 'Ubicación',
      info: 'Vilcún, Región de La Araucanía',
      link: '#'
    },
    {
      icon: '🕒',
      title: 'Horario',
      info: 'Lun - Sáb: 8:00 - 18:00',
      link: '#'
    }
  ];

  return (
    <section id="contacto" className="contact-section">
      <div className="contact-container">
        <div className="contact-header">
          <h2 className="contact-title">Contáctanos</h2>
          <p className="contact-subtitle">
            ¿Tienes un proyecto en mente? Contáctanos para una evaluación gratuita. 
            Responderemos todas tus consultas y te ayudaremos a encontrar la mejor solución.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-form-section">
            <div className="contact-form-card">
              <div className="form-header">
                <h3 className="form-title">Solicita tu Presupuesto</h3>
                <p className="form-subtitle">
                  Completa el formulario y te contactaremos a la brevedad
                </p>
              </div>
              
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">
                      Nombre completo *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Tu nombre"
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone" className="form-label">
                      Teléfono *
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+56 9 XXXX XXXX"
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="tu@email.com"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="service" className="form-label">
                    Servicio de interés *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleInputChange}
                    className="form-select"
                  >
                    <option value="">Selecciona un servicio</option>
                    <option value="instalacion">Instalación de estufa/cañón</option>
                    <option value="mantencion">Mantención y limpieza</option>
                    <option value="reparacion">Reparación</option>
                    <option value="asesoria">Asesoría técnica</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    Mensaje *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Cuéntanos sobre tu proyecto, tipo de calefactor, ubicación, etc."
                    rows={4}
                    className="form-textarea"
                  />
                </div>

                <button type="submit" className="form-submit-button">
                  📱 Enviar por WhatsApp
                </button>
              </form>
            </div>
          </div>

          <div className="contact-info-section">
            <div className="contact-info-card">
              <h3 className="info-title">Información de Contacto</h3>
              <div className="contact-info-list">
                {contactInfo.map((info, index) => (
                  <div key={index} className="contact-info-item">
                    <div className="info-icon">{info.icon}</div>
                    <div className="info-content">
                      <div className="info-label">{info.title}</div>
                      {info.link.startsWith('http') || info.link.startsWith('mailto') ? (
                        <a 
                          href={info.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="info-link"
                        >
                          {info.info}
                        </a>
                      ) : (
                        <div className="info-text">{info.info}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="coverage-card">
              <h3 className="coverage-title">Áreas de Cobertura</h3>
              <p className="coverage-subtitle">
                Atendemos en las siguientes comunas:
              </p>
              <div className="coverage-grid">
                {coverageAreas.map((area, index) => (
                  <div key={index} className="coverage-item">
                    <div className="coverage-bullet"></div>
                    <span className="coverage-text">{area}</span>
                  </div>
                ))}
              </div>
              <div className="coverage-note">
                <p>
                  <strong>¿Tu comuna no está en la lista?</strong> ¡Contáctanos igual! 
                  Evaluamos cada caso y podemos extender nuestro servicio según la distancia.
                </p>
              </div>
            </div>

            <div className="urgent-contact-card">
              <h3 className="urgent-title">¿Necesitas ayuda urgente?</h3>
              <p className="urgent-description">
                Para emergencias o consultas rápidas, contáctanos directamente por WhatsApp
              </p>
              <a 
                href="https://wa.me/56912345678?text=Hola%2C%20necesito%20ayuda%20urgente"
                target="_blank"
                rel="noopener noreferrer"
                className="urgent-button"
              >
                🚨 WhatsApp Urgente
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
