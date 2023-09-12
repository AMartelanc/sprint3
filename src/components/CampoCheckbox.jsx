import React from 'react';

function CampoCheckbox({ rotulo, id, marcado, onChange }) {
  return (
    <div className="campo-formulario">
      <label htmlFor={id}>
        <input
          type="checkbox"
          id={id}
          checked={marcado}
          onChange={onChange}
        />
        {rotulo}
      </label>
    </div>
  );
}

export default CampoCheckbox;
