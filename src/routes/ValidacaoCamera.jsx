import React from 'react';

function MensagemValidacaoCamera() {
  return (
    <div className="pagina-mensagem-validacao-camera">
      <h1>Preparação para a Validação da Câmera</h1>
      <p>
        Você chegou à página de preparação para a validação da câmera. Por favor, siga as instruções abaixo para preparar sua câmera.
      </p>
      <ul>
        <li>Certifique-se de estar em um ambiente bem iluminado.</li>
        <li>Limpe a lente da câmera para obter imagens nítidas.</li>
        <li>Mantenha o dispositivo de captura (smartphone, tablet, etc.) estável.</li>
        <li>Clique no botão "Pronto" quando estiver pronto para começar a validação.</li>
      </ul>
      <div className="botoes-navegacao">
        <button onClick={() => {/* Redirecionar para a primeira etapa de validação */}}>
          Pronto
        </button>
      </div>
    </div>
  );
}

export default MensagemValidacaoCamera;
