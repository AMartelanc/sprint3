import React, { useState, useRef } from 'react';
import BotaoEnvio from '../components/BotaoEnvio';

function CapturaNumeroSerie() {
  const [numeroSerie, setNumeroSerie] = useState('');
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

  const handleSubmit = (event) => {
    event.preventDefault();
    // Implemente aqui a lógica para enviar o número de série e a imagem capturada.
  };

  return (
    <div className="pagina-captura-numero-serie">
      <h1>Captura do Número de Série da Bicicleta</h1>
      <p>
        Por favor, capture o número de série da sua bicicleta e tire uma foto dele:
      </p>
      <div className="camera-container">
        <video ref={videoRef} autoPlay />
        <button onClick={capturarImagem}>Capturar Foto</button>
        {imagemCapturada && (
          <img src={imagemCapturada} alt="Número de Série Capturado" />
        )}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Número de Série"
          value={numeroSerie}
          onChange={(e) => setNumeroSerie(e.target.value)}
          required
        />
        <BotaoEnvio texto="Enviar Número de Série" />
      </form>
    </div>
  );
}

export default CapturaNumeroSerie;
