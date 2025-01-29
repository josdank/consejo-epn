import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
        <img src="/logo.png" alt="Logo Delta EPN" style={{ height: '60px', marginRight: '10px' }} />
        <span>Consejo Estudiantil Delta EPN</span>
      </Link>
      <ul style={{ display: 'flex', listStyle: 'none' }}>
        <li><Link to="/plan-de-trabajo">Plan de Trabajo</Link></li>
        <li><Link to="/values">Valores</Link></li>
        <li><Link to="/contacto">Candidatos</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
