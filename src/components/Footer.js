import React from 'react';
import 'font-awesome/css/font-awesome.min.css'; // Importa los estilos de Font Awesome

function Footer() {
  return (
    <footer style={{ color: "white", padding: "0px", textAlign: "center", background: "none", border: "none", position: "relative", width: "100%" }}>
      <div className="social-links">
        <a href="https://www.facebook.com/profile.php?id=61571942466758" target="_blank" rel="noopener noreferrer" className="social-link">
          <i className="fa fa-facebook" style={{ fontSize: "30px", color: "white" }}></i>
        </a>
        <a href="https://www.tiktok.com/@delta_epn?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer" className="social-link">
          <i className="fab fa-tiktok" style={{ fontSize: "30px", color: "white" }}></i> {/* Clase correcta para TikTok */}
        </a>
        <a href="https://www.instagram.com/delta_25_epn/" target="_blank" rel="noopener noreferrer" className="social-link">
          <i className="fa fa-instagram" style={{ fontSize: "30px", color: "white" }}></i>
        </a>
      </div>
      <p>&copy; 2025 Consejo Estudiantil Politécnico | Delta EPN</p>
    </footer>
  );
}

export default Footer;
