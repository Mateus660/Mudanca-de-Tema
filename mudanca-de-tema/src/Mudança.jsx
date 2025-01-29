import React, { useState } from 'react';

function Mudança() {
  const [corDeFundo, setCorDeFundo] = useState('white'); // Estado para armazenar a cor

  const handleChange = (event) => {
    const corSelecionada = event.target.value;

    if (corSelecionada === 'Preto') {
      setCorDeFundo('black'); // Muda a cor de fundo para preto
      alert('Preto selecionado!');
    } else {
      setCorDeFundo('white'); // Muda a cor de fundo para branco
      alert('Branco selecionado!');
    }
  };

  return (
    <div className="container" style={{ backgroundColor: corDeFundo, height: '100vh', padding: '20px' }}>
      <div id="titulo">
        <h1>Seletor de cor de fundo</h1>
      </div>

      <div id="cor">
        <select name="escolha" id="cor-de-fundo" onChange={handleChange}>
          <option value="Branco">Branco</option>
          <option value="Preto">Preto</option>
        </select>
      </div>
    </div>
  );
}

export default Mudança;
