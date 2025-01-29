import React, { useState } from 'react';

function PlanTrabajo() {
  const [activeRowIndices, setActiveRowIndices] = useState([]);

  const planItems = [
    {
      title: "Colaboración Equitativa entre Estudiantes",
      detail: "Mesas de Diálogo Conjuntas: Crear espacios regulares de diálogo, mediadas por el Consejo Estudiantil Politécnico, donde los estudiantes puedan exponer necesidades y propuestas para desarrollar soluciones de problemas puntuales."
    },
    {
      title: "Prevención y Manejo de Problemas Éticos",
      detail: "Canal de Denuncias Seguro y Anónimo: Implementar un sistema administrado por una comisión mixta de estudiantes y autoridades, con seguimiento claro y confidencial para reportar acoso, corrupción y otras irregularidades."
    },
    {
      title: "Transparencia",
      detail: "Informe Semestral de Gestión: Presentar públicamente por medio de todos los canales de comunicación, un informe que detalle acciones realizadas, recursos utilizados y problemas atendidos por el Consejo Estudiantil Politécnico."
    },
    {
      title: "Inclusión",
      detail: "Política de Tolerancia Cero: Proponer una política estricta de tolerancia cero al acoso, discriminación y corrupción, con sanciones claras y justas."
    },
    {
      title: "Beneficios para la Comunidad Politécnica",
      detail: "Optimización del Horario Académico: Trabajar con autoridades para crear horarios que consideren las limitaciones y necesidades de los estudiantes."
    },
    {
      title: "Fortalecimiento de la Participación Estudiantil",
      detail: "Observatorio Estudiantil del Consejo Politécnico: Crear un órgano que comunique resoluciones relevantes para la comunidad estudiantil."
    },
    {
      title: "Capacitación y Formación",
      detail: "Programa de Formación para Representantes: Diseñar un plan de liderazgo y normativa institucional con talleres semestrales para preparar a futuros representantes estudiantiles."
    },
    {
      title: "Fiscalización y Supervisión",
      detail: "Comité de Supervisión Estudiantil: Establecer un grupo que evalúe la ejecución del Plan Estratégico Institucional y participe en procesos de auditoría en coordinación con la Comisión de Evaluación Interna."
    },
    {
      title: "Reducción de Burocracia",
      detail: "Validación de Horas de Vinculación: Simplificar y digitalizar los procesos de validación para reducir tiempos de espera y carga administrativa."
    },
    {
      title: "Becas",
      detail: "Gestionar un aumento en el número de becas disponibles sin reducir el monto asignado a cada una, garantizando que sigan siendo suficientes para cubrir necesidades clave."
    },
    {
      title: "Postgrados",
      detail: "Impulsar acuerdos con universidades e instituciones internacionales para facilitar el acceso a becas y programas de postgrado."
    },
    {
      title: "Tercera Matrícula",
      detail: "Revisar las normativas sobre tercera matrícula para garantizar que sean inclusivas y equitativas, eliminando barreras económicas o administrativas excesivas."
    }
  ];

  const rows = [];
  const itemsPerRow = 3;

  for (let i = 0; i < planItems.length; i += itemsPerRow) {
    rows.push(planItems.slice(i, i + itemsPerRow));
  }

  const handleRowClick = (rowIndex) => {
    if (activeRowIndices.includes(rowIndex)) {
      setActiveRowIndices(activeRowIndices.filter(i => i !== rowIndex));
    } else {
      setActiveRowIndices([...activeRowIndices, rowIndex]);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ marginBottom: '40px', textAlign: 'center' }}>Conoce nuestras Propuestas</h2>
      <div>
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '20px' }}>
            {row.map((item, index) => (
              <div
                key={index}
                onClick={() => handleRowClick(rowIndex)}
                style={{
                  border: '1px solid #ECEBEA',
                  borderRadius: '10px',
                  padding: '20px',
                  backgroundColor: activeRowIndices.includes(rowIndex) ? '#f0f8ff' : 'white',
                  width: '300px',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s ease',
                  textAlign: 'center'
                }}
              >
                <h3 style={{ color: '#085979' }}>{item.title}</h3>
                {activeRowIndices.includes(rowIndex) && <p>{item.detail}</p>}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default PlanTrabajo;
