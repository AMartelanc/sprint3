import React, { useState, useRef } from 'react';
import BotaoEnvio from '../components/BotaoEnvio';

function ValidacaoCameraPneuTraseiro() {
  const [imagemCapturada, setImagemCapturada] = useState(null);
  const videoRef = useRef(null);

  const iniciarCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
    } catch (error) {
      console.error('Erro ao acessar a câmera:', error);
    }
  };

  const capturarImagem = () => {
    const canvas = document.createElement('canvas');
    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;
    const context = canvas.getContext('2d');
    context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
    const imagemBase64 = canvas.toDataURL('image/jpeg');
    setImagemCapturada(imagemBase64);
  };

  // Lógica para validar a imagem capturada e avançar para a próxima etapa

  return (
    <div className="pagina-validacao-camera">
      <h1>Validação da Câmera - Captura do Pneu Traseiro</h1>
      <p>
        Posicione a câmera de forma que o pneu traseiro da bicicleta seja visível. Em seguida, capture a imagem.
      </p>
      <div className="camera-container">
        <video ref={videoRef} autoPlay />
        <button onClick={capturarImagem}>Capturar Foto</button>
        {imagemCapturada && (
          <img src={imagemCapturada} alt="Imagem Capturada" />
        )}
      </div>
      <BotaoEnvio texto="Próxima Etapa" />
    </div>
  );
}

export default ValidacaoCameraPneuTraseiro;
