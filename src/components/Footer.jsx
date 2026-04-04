import React from 'react';
import instagramIcon from '../assets/img/icon-instagram.png';
import whatsappIcon from '../assets/img/icon-whatsapp.png';
import './Footer.css';

export default function Footer() {
  return (
    <footer id="SITE_FOOTER" className="footer-container">
      <div className="footer-content">
        
        <a href="#SCROLL_TO_TOP" className="footer-logo">
          <h2 className="footer-name">Beatriz Pimentel</h2>
          <p className="footer-title">Psicóloga CRP 05/85932</p>
          <p className="footer-subtitle">Atendimento online</p>
        </a>

        <ul className="footer-socials" aria-label="Redes sociais">
          <li>
            <a 
              href="https://www.instagram.com/psi.beatrizspimentel" 
              target="_blank" 
              rel="noreferrer noopener" 
              aria-label="Instagram"
            >
              <img 
                src={instagramIcon} 
                alt="Instagram" 
                loading="lazy"
                decoding="async"
              />
            </a>
          </li>
          <li>
            <a 
              href="https://wa.me/5522997466590" 
              target="_blank" 
              rel="noreferrer noopener" 
              aria-label="Whatsapp"
            >
              <img 
                src={whatsappIcon} 
                alt="Whatsapp" 
                loading="lazy"
                decoding="async"
              />
            </a>
          </li>
        </ul>

      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Beatriz Pimentel. Todos os direitos reservados.
      </div>
    </footer>
  );
}
