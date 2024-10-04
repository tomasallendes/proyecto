import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const ContactDetails = () => {
  return (
    <div className="contact-details-container">
      <h2>Detalles de Contacto</h2>
      
      {/* Información de contacto */}
      <div className="contact-info">
        <div className="info-item">
          <FaPhone className="icon" />
          <p>Teléfono: +123 456 7890</p>
        </div>
        <div className="info-item">
          <FaEnvelope className="icon" />
          <p>Correo: contacto@tusitio.com</p>
        </div>
        <div className="info-item">
          <FaMapMarkerAlt className="icon" />
          <p>Dirección: Calle Falsa 123, Ciudad, País</p>
        </div>
      </div>

      {/* Redes sociales */}
      <h3>Síguenos en redes sociales</h3>
      <div className="social-media">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="icon social-icon" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="icon social-icon" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="icon social-icon" />
        </a>
      </div>
    </div>
  );
};

export default ContactDetails;
