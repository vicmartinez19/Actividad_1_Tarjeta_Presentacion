import React from 'react';

function Tarjeta({ nombre, profesion, descripcion, avatar }) {
  return (
    <div style={{ border: '1px solid #334155', borderRadius: '12px', padding: '20px', maxWidth: '320px', margin: '20px auto', background: '#1e293b', textAlign: 'center' }}>
      <img
        src={avatar}
        alt={nombre}
        style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover', marginBottom: '12px', border: '2px solid #38bdf8' }}
      />
      <h3 style={{ color: '#38bdf8', marginBottom: '4px' }}>{nombre}</h3>
      <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '10px' }}>{profesion}</p>
      <p style={{ color: '#cbd5e1', fontSize: '0.85rem' }}>{descripcion}</p>
    </div>
  );
}

export default Tarjeta;
