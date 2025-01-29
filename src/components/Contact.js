import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  // Inicializa el estado con 0 para que el primer candidato esté activo por defecto
  const [activeIndex, setActiveIndex] = useState(0);

  const teamMembers = [
    {
      title: "1er Principal y su Alterno",
      principalImage: "/Principal1.jpg", // Ruta de la imagen del primer principal
      alternoImage: "/Alterno1.png" // Ruta de la imagen del primer alterno
    },
    {
      title: "2do Principal y su Alterno",
      principalImage: "/Principal2.jpg", // Ruta de la imagen del segundo principal
      alternoImage: "/Alterno2.jpg" // Ruta de la imagen del segundo alterno
    },
    {
      title: "3er Principal y su Alterno",
      principalImage: "/Principal3.jpg", // Ruta de la imagen del tercer principal
      alternoImage: "/Alterno3.jpg" // Ruta de la imagen del tercer alterno
    }
  ];

  const handleCardClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="contact-container">
      <h2 className='delta'>Delta EPN</h2>
      <p className='cont'>Con un absoluto sentido de responsabilidad, Delta EPN se presenta como una opción de representación estudiantil...</p>
      <div className="cards-container">
        {teamMembers.map((member, index) => (
          <div key={index} className="card" onClick={() => handleCardClick(index)}>
            <h3>{member.title}</h3>
          </div>
        ))}
      </div>
      {activeIndex !== null && (
        <div className="images-container">
          <img
            src={teamMembers[activeIndex].principalImage}
            alt={`${teamMembers[activeIndex].title} - Principal`}
            className="team-image"
          />
          <img
            src={teamMembers[activeIndex].alternoImage}
            alt={`${teamMembers[activeIndex].title} - Alterno`}
            className="team-image"
          />
        </div>
      )}
    </div>
  );
}

export default Contact;
