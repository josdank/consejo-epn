import React, { useState, useEffect } from 'react';
import './Values.css';

function Values() {
  const [showIndex, setShowIndex] = useState(0);

  const valuesList = [
    {
      title: "Respeto",
      detail: "Fomentar el respeto mutuo entre todos los miembros de la comunidad politécnica.",
      image: "https://img.freepik.com/foto-gratis/primer-plano-dos-mujeres-negocios-abrocharse-manos_1262-12284.jpg?ga=GA1.1.1914228563.1738175751&semt=ais_hybrid"
    },
    {
      title: "Integridad",
      detail: "Actuar con honestidad y transparencia en todas las actividades académicas y administrativas.",
      image: "https://img.freepik.com/foto-gratis/concepto-exito-empresarial-vista-superior-mesa-madera-manos-protegiendo-figuras-madera-personas_176474-9273.jpg?ga=GA1.1.1914228563.1738175751&semt=ais_hybrid"
    },
    {
      title: "Inclusión",
      detail: "Promover la inclusión y la diversidad dentro de la comunidad educativa.",
      image: "https://img.freepik.com/foto-gratis/familia-discapacidad-persona-concepto-inclusion-papel-recortado_23-2148699766.jpg?ga=GA1.1.1914228563.1738175751&semt=ais_hybrid"
    },
    {
      title: "Responsabilidad",
      detail: "Asumir responsabilidad por las acciones y decisiones, velando por el bienestar de todos.",
      image: "https://www.randstad.es/wp-content/uploads/2016/08/toma-nota-diciembre-880-450.jpg"
    },
    {
      title: "Trabajo en Equipo",
      detail: "Fomentar el trabajo colaborativo y la participación activa de todos los miembros de la comunidad.",
      image: "https://www.epn.edu.ec/wp-content/uploads/2015/01/WP_20150108_001.jpg"
    },
    {
      title: "Innovación",
      detail: "Impulsar la innovación y la creatividad en el ámbito académico y administrativo.",
      image: "https://www.esic.edu/sites/default/files/2024-05/innovacion%20abierta.jpeg"
    }
  ];

  useEffect(() => {
    setShowIndex(0);
  }, []);

  return (
    <div className="values-container">
      <div className="sidebar">
        <h2 className="valor">Valores Delta EPN</h2>
        <div className="sidebar-items">
          {valuesList.map((value, index) => (
            <div 
              key={index}
              className={`sidebar-item ${showIndex === index ? 'active' : ''}`}
              onClick={() => setShowIndex(index)}
            >
              <h3>{value.title}</h3>
              {showIndex === index && (
                <span className="arrow">➔</span>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="main-content">
        <h3>{valuesList[showIndex].title}</h3>
        <p className="detail">{valuesList[showIndex].detail}</p>
        <div className="image-container">
          <img
            src={valuesList[showIndex].image}
            alt={valuesList[showIndex].title}
          />
        </div>
      </div>
    </div>
  );
}

export default Values;
