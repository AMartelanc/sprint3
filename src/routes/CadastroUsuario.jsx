import React, { useState } from 'react';
import CampoTexto from '../components/CampoTexto';
import CampoSelecao from '../components/CampoSelecao';
import CampoCheckbox from '../components/CampoCheckbox';
import CampoTextoMultiLinha from '../components/CampoTextoMultiLinha';
import BotaoEnvio from '../components/BotaoEnvio';

function CadastroUsuario() {
  // Estados para os campos de entrada de dados
  const [nome, setNome] = useState('');
  const [rg, setRg] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [genero, setGenero] = useState('');
  const [estadoCivil, setEstadoCivil] = useState('');
  const [endereco, setEndereco] = useState('');
  const [cep, setCep] = useState('');
  const [termosAceitos, setTermosAceitos] = useState(false);

  // Função para lidar com o envio do formulário
  const handleSubmit = (event) => {
    event.preventDefault();
    // Implemente aqui a lógica de envio dos dados do usuário.
  };

  return (
    <div className="pagina-cadastro-usuario">
      <h1>Cadastro de Usuário</h1>
      <form onSubmit={handleSubmit}>
        {/* Campos de entrada de dados */}
        <CampoTexto
          rotulo="Nome Completo"
          id="nome"
          valor={nome}
          onChange={(e) => setNome(e.target.value)}
          obrigatorio
        />
        <CampoTexto
          rotulo="RG"
          id="rg"
          valor={rg}
          onChange={(e) => setRg(e.target.value)}
          obrigatorio
        />
        <CampoTexto
          rotulo="Data de Nascimento"
          id="dataNascimento"
          valor={dataNascimento}
          onChange={(e) => setDataNascimento(e.target.value)}
          obrigatorio
        />
        <CampoTexto
          rotulo="Telefone"
          id="telefone"
          valor={telefone}
          onChange={(e) => setTelefone(e.target.value)}
          obrigatorio
        />
        <CampoTexto
          rotulo="E-mail"
          id="email"
          valor={email}
          onChange={(e) => setEmail(e.target.value)}
          obrigatorio
        />
        <CampoTexto
          rotulo="Senha"
          id="senha"
          valor={senha}
          onChange={(e) => setSenha(e.target.value)}
          tipo="password"
          obrigatorio
        />
        <CampoSelecao
          rotulo="Gênero"
          id="genero"
          valor={genero}
          opcoes={['Masculino', 'Feminino', 'Outro']}
          onChange={(e) => setGenero(e.target.value)}
        />
        <CampoSelecao
          rotulo="Estado Civil"
          id="estadoCivil"
          valor={estadoCivil}
          opcoes={['Solteiro', 'Casado', 'Divorciado', 'Viúvo']}
          onChange={(e) => setEstadoCivil(e.target.value)}
        />
        <CampoTextoMultiLinha
          rotulo="Endereço Completo"
          id="endereco"
          valor={endereco}
          onChange={(e) => setEndereco(e.target.value)}
        />
        <CampoTexto
          rotulo="CEP"
          id="cep"
          valor={cep}
          onChange={(e) => setCep(e.target.value)}
        />
        <CampoCheckbox
          rotulo="Aceito os termos e condições"
          id="termosAceitos"
          valor={termosAceitos}
          onChange={(e) => setTermosAceitos(e.target.checked)}
        />

        {/* Botão de envio */}
        <BotaoEnvio texto="Enviar Cadastro" />
      </form>
    </div>
  );
}

export default CadastroUsuario;
