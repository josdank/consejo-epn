import React, { useState } from 'react';

function Contact() {
  // Inicializa el estado con 0 para que el primer candidato esté activo por defecto
  const [activeIndex, setActiveIndex] = useState(0);

  const teamMembers = [
    {
      title: "1er Principal y su Alterno",
      principalImage: "/Principal1.jpg", // Ruta de la imagen del primer principal
      alternoImage: "/Alterno1.jpg" // Ruta de la imagen del primer alterno
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
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>Delta EPN</h2>
      <p>Con un absoluto sentido de responsabilidad, Delta EPN se presenta como una opción de representación estudiantil...</p>
      <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginTop: "20px" }}>
        {teamMembers.map((member, index) => (
          <div key={index} style={{ textAlign: "center" }}>
            <div
              onClick={() => handleCardClick(index)}
              style={{
                backgroundColor: "#085979",
                color: "#ECEBEA",
                padding: "10px 20px",
                borderRadius: "8px",
                cursor: "pointer",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)"
              }}
            >
              <h3>{member.title}</h3>
            </div>
          </div>
        ))}
      </div>
      {activeIndex !== null && (
        <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginTop: "20px" }}>
          <img
            src={teamMembers[activeIndex].principalImage}
            alt={`${teamMembers[activeIndex].title} - Principal`}
            style={{
              maxWidth: "400px",
              height: "auto",
              borderRadius: "8px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)"
            }}
          />
          <img
            src={teamMembers[activeIndex].alternoImage}
            alt={`${teamMembers[activeIndex].title} - Alterno`}
            style={{
              maxWidth: "400px",
              height: "auto",
              borderRadius: "8px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)"
            }}
          />
        </div>
      )}
    </div>
  );
}

export default Contact;
