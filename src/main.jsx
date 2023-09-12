import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import CadastroUsuário from "./routes/CadastroUsuario";
import CapturaBicicleta from "./routes/CapturaBicicleta";
import CapturaNumeroSerie from "./routes/CapturaNumeroSerie";
import CapturaPneuDianteiro from "./routes/CapturaPneuDianteiro";
import CapturaPneuTraseiro from "./routes/CapturaPneuTraseiro";
import GravacaoVideo360 from "./routes/GravacaoVideo360";
import ValidacaoCamera from "./routes/ValidacaoCamera";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
