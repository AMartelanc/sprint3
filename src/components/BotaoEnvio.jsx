import React from 'react';

function BotaoEnvio({ texto, onClick }) {
  return (
    <button className="botao-envio" onClick={onClick}>
      {texto}
    </button>
  );
}

export default BotaoEnvio;
