import Rodape from './components/Rodape'
import Cabecalho from './components/Cabecalho'
import { Outlet } from 'react-router-dom';
import './App.css'

return(
  <>
    <Cabecalho/>
      <Outlet/>
    <Rodape/>
  </>
)

