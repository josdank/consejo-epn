import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-container" style={{ padding: "20px", color: "#ECEBEA", textAlign: "center", backgroundColor: "rgba(52, 52, 52, 0.32)", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)", maxWidth: "1200px", margin: "0 auto" }}>
      <h2 style={{ fontSize: "2em", marginBottom: "20px", color: "#F3505A", fontWeight: "bold", letterSpacing: "1px" }}>Acerca de Nosotros</h2>
      <p style={{ fontSize: "1em", lineHeight: "1.6", marginBottom: "20px" }}>
        <strong>Bienvenidos</strong> al <strong>Consejo Estudiantil Delta EPN</strong>, una organización estudiantil comprometida con la <strong>representación</strong> y el <strong>bienestar</strong> de los estudiantes de la <strong>Escuela Politécnica Nacional</strong>. Nuestro propósito es ser la voz de los estudiantes, defendiendo sus intereses y contribuyendo al desarrollo académico y social de nuestra comunidad.
      </p>
      <p style={{ fontSize: "1em", lineHeight: "1.6", marginBottom: "20px" }}>
        Nuestra misión es clara: <strong>fomentar un entorno inclusivo, transparente y participativo</strong> donde cada estudiante tenga la oportunidad de expresarse y ser escuchado. Trabajamos incansablemente para asegurar que las decisiones que afectan a nuestra comunidad se tomen con la participación activa de todos.
      </p>
      <p style={{ fontSize: "1em", lineHeight: "1.6", marginBottom: "20px" }}>
        A través de <strong>iniciativas innovadoras</strong>, <strong>campañas de concienciación</strong> y <strong>programas de apoyo</strong>, nos esforzaremos por crear un espacio donde la diversidad sea celebrada y donde todos los estudiantes puedan alcanzar su máximo potencial. Únete a nosotros en esta misión de transformar nuestra universidad en un lugar mejor para todos.
      </p>
      <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginTop: "20px", flexWrap: "wrap" }}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/51/Escuela_Polit%C3%A9cnica_Nacional.png"
          alt="Logo EPN"
          style={{ width: "100%", maxWidth: "150px", height: "auto", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)" }}
        />
        <img
          src="logo.png"
          alt="Logo Delta CEP"
          style={{ width: "100%", maxWidth: "150px", height: "auto", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)" }}
        />
        <img
          src="https://scontent.fuio1-2.fna.fbcdn.net/v/t39.30808-6/348277767_1244002479568581_8524459062867581431_n.png?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHs-mPcz6HsRzQcgNgCzPGCi1CHEOfk84mLUIcQ5-TziTh3KQS9Q1qN4z04pujsWaakINMFZK58ZN0rjTQifB-U&_nc_ohc=Nnsop-kRzRYQ7kNvgFeRkyV&_nc_oc=AdhujqisShL2NbKWmvuqa6DSP4lpVUN5nZRiKPrMvI9yVqiYokESU5qQ7DwG3MtynIeFWTJKEp6OoK9U260wUOKP&_nc_zt=23&_nc_ht=scontent.fuio1-2.fna&_nc_gid=AWe9VxoqjOneDsUtQBuzkC6&oh=00_AYAM6MuY45xSCqEL-IK2QUSne4WhBLd2dG8h4fimFS20vQ&oe=67A0561A"
          alt="Tercer Logo"
          style={{ width: "100%", maxWidth: "150px", height: "auto", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)" }}
        />
      </div>
    </div>
  );
}

export default About;
