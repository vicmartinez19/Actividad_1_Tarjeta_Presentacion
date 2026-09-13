import React from 'react';

function Tarjeta() {
  return (
    <div style={{ border: '1px solid #334155', borderRadius: '12px', padding: '20px', maxWidth: '320px', margin: '20px auto', background: '#1e293b' }}>
      <h3 style={{ color: '#38bdf8', marginBottom: '8px' }}>Vicente García</h3>
      <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '12px' }}>Desarrollador Frontend</p>
      <p style={{ color: '#cbd5e1', fontSize: '0.85rem' }}>Especializado en React, Vite y arquitecturas de componentes modernos.</p>
    </div>
  );
}

export default Tarjeta;