import React from 'react';

function CampoTexto({ rotulo, id, valor, onChange, obrigatorio }) {
  return (
    <div className="campo-formulario">
      <label htmlFor={id}>{rotulo}</label>
      <input
        type="text"
        id={id}
        value={valor}
        onChange={onChange}
        required={obrigatorio}
      />
    </div>
  );
}

export default CampoTexto;
