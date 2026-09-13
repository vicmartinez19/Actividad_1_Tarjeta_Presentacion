import React from 'react';
import Tarjeta from './components/Tarjeta';

function App() {
  return (
    <div style={{ textAlign: 'center', padding: '40px' }}>
      <h1 style={{ color: '#38bdf8', marginBottom: '24px' }}>Perfiles Profesionales</h1>
      <Tarjeta
        nombre="Ada Lovelace"
        profesion="Pionera de la Computación"
        descripcion="Primera programadora de la historia con el motor analítico."
        avatar="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&auto=format&fit=crop&q=80"
      />
    </div>
  );
}

export default App;