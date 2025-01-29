import React, { useState, useEffect } from 'react';

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
    <div style={{ padding: "5px", display: "flex" }}>
      <div style={{ width: "300px", marginRight: "20px" }}>
        <h2>Valores Delta EPN</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {valuesList.map((value, index) => (
            <div 
              key={index}
              style={{
                backgroundColor: "#f1f1f1",
                padding: "20px",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                cursor: "pointer",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
              }}
              onClick={() => setShowIndex(index)}
            >
              <h3 style={{ margin: 0 }}>{value.title}</h3>
              {showIndex === index && (
                <span style={{ marginLeft: "10px", color: "#085979", fontWeight: "bold" }}>➔</span>
              )}
            </div>
          ))}
        </div>
      </div>
      <div style={{
        flex: 1,
        backgroundColor: "#fff",
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}>
        <h3>{valuesList[showIndex].title}</h3>
        <p style={{ textAlign: 'center' }}>{valuesList[showIndex].detail}</p>
        <img
          src={valuesList[showIndex].image}
          alt={valuesList[showIndex].title}
          style={{
            maxWidth: "100%",
            maxHeight: "300px", // Ajuste de tamaño máximo
            height: "auto",
            borderRadius: "8px",
            marginTop: "20px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
          }}
        />
      </div>
    </div>
  );
}

export default Values;
