import React from 'react';

function CampoTextoMultiLinha({ rotulo, id, valor, onChange, obrigatorio }) {
  return (
    <div className="campo-formulario">
      <label htmlFor={id}>{rotulo}</label>
      <textarea
        id={id}
        value={valor}
        onChange={onChange}
        required={obrigatorio}
      />
    </div>
  );
}

export default CampoTextoMultiLinha;
