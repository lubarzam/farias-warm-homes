
import React from 'react';
import './Profile.css';

const Profile = () => {
  const achievements = [
    {
      icon: '🏆',
      title: 'Más de 40 años',
      description: 'de experiencia en el rubro'
    },
    {
      icon: '🔥',
      title: '500+ instalaciones',
      description: 'exitosas realizadas'
    },
    {
      icon: '⭐',
      title: '100% satisfacción',
      description: 'de nuestros clientes'
    },
    {
      icon: '🛡️',
      title: 'Garantía total',
      description: 'en todos nuestros trabajos'
    }
  ];

  const skills = [
    'Instalación de estufas a leña',
    'Sistemas de cañones a pellets',
    'Mantención preventiva',
    'Reparaciones especializadas',
    'Certificaciones de seguridad',
    'Asesoría técnica personalizada'
  ];

  return (
    <section id="perfil" className="profile-section">
      <div className="profile-container">
        <div className="profile-content">
          <div className="profile-image-section">
            <div className="profile-image-placeholder">
              <div className="placeholder-content">
                <div className="placeholder-icon">👨‍🔧</div>
                <p className="placeholder-text">Foto de Fabián Farías</p>
                <p className="placeholder-subtext">(Próximamente)</p>
              </div>
            </div>
            
            <div className="achievements-grid">
              {achievements.map((achievement, index) => (
                <div key={index} className="achievement-card">
                  <div className="achievement-icon">{achievement.icon}</div>
                  <div className="achievement-title">{achievement.title}</div>
                  <div className="achievement-description">{achievement.description}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="profile-info-section">
            <h2 className="profile-title">
              Conoce a <span className="profile-name">Fabián Farías</span>
            </h2>
            
            <div className="profile-description">
              <p>
                Con más de <strong>40 años de experiencia</strong> en el rubro de la calefacción, 
                Fabián Farías se ha consolidado como uno de los técnicos más confiables y reconocidos 
                de la Región de La Araucanía.
              </p>
              
              <p>
                Su pasión por brindar <strong>soluciones de calefacción eficientes y seguras</strong> 
                lo ha llevado a especializarse en múltiples marcas y tecnologías, desde las tradicionales 
                estufas a leña hasta los modernos sistemas de pellets.
              </p>
              
              <p>
                Basado en <strong>Vilcún</strong>, Fabián atiende a clientes en toda la región, 
                ofreciendo un servicio personalizado que se adapta a las necesidades específicas de cada hogar.
              </p>
            </div>

            <div className="skills-section">
              <h3 className="skills-title">Especialidades</h3>
              <div className="skills-grid">
                {skills.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <div className="skill-bullet"></div>
                    <span className="skill-text">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="profile-quote">
              <blockquote className="quote-text">
                "Mi compromiso es brindar a cada familia el calor y la seguridad que merece en su hogar. 
                Cada instalación es única y la trato con el mismo cuidado que tendría en mi propia casa."
              </blockquote>
              <footer className="quote-author">— Fabián Farías</footer>
            </div>

            <div className="profile-cta">
              <a 
                href="https://wa.me/56912345678?text=Hola%20Fabi%C3%A1n%2C%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20tus%20servicios"
                target="_blank"
                rel="noopener noreferrer"
                className="profile-cta-button"
              >
                💬 Conversar con Fabián
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
