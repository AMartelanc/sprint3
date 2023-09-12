import React, { useState } from 'react';
import BotaoEnvio from '../components/BotaoEnvio';
import Webcam from 'react-webcam';
import MediaRecorder from 'react-media-recorder';

function ValidacaoCameraVideo360() {
  const [isRecording, setIsRecording] = useState(false);

  const webcamRef = React.useRef(null);

  const startRecording = () => {
    setIsRecording(true);
  };

  const stopRecording = () => {
    setIsRecording(false);
  };

  const handleDataAvailable = (blob) => {
    // Faça algo com o blob do vídeo gravado, como validação
    // Exemplo: Envie o blob para o servidor ou processe localmente
  };

  return (
    <div className="pagina-validacao-camera">
      <h1>Validação da Câmera - Gravação de Vídeo 360</h1>
      <p>Posicione a câmera de forma que a bicicleta seja visível. Inicie a gravação de vídeo.</p>
      <div className="camera-container">
        <Webcam
          ref={webcamRef}
          mirrored={true} // Espelhar a visualização da câmera
          videoConstraints={{
            width: 1280, // Largura do vídeo
            height: 720, // Altura do vídeo
          }}
        />
        <div className="controls">
          {isRecording ? (
            <MediaRecorder
              video
              onRecordingStop={stopRecording}
              onDataAvailable={handleDataAvailable}
            >
              {({ start, stop, mediaBlob }) => (
                <div>
                  <button onClick={stop}>Parar Gravação</button>
                </div>
              )}
            </MediaRecorder>
          ) : (
            <button onClick={startRecording}>Iniciar Gravação</button>
          )}
        </div>
      </div>
      <BotaoEnvio texto="Próxima Etapa" />
    </div>
  );
}

export default ValidacaoCameraVideo360;
