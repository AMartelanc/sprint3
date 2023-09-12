import React from 'react';

function CampoSelecao({ rotulo, id, valor, opcoes, onChange, obrigatorio }) {
  return (
    <div className="campo-formulario">
      <label htmlFor={id}>{rotulo}</label>
      <select
        id={id}
        value={valor}
        onChange={onChange}
        required={obrigatorio}
      >
        <option value="">Selecione uma opção</option>
        {opcoes.map((opcao) => (
          <option key={opcao} value={opcao}>
            {opcao}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CampoSelecao;
