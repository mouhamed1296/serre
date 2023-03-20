import Connexion from "./components/connexion/Connexion";
import './App.css'
import CtrlSysteme from './components/CtrlSysteme/CtrlSysteme'
import Header from './components/Header/Header'
import Mesures from './components/Mesures/Mesures'
import Parametre from './components/Parametres/Parametre'
import Sidebar from './components/Sidebar/Sidebar'

function App() {
  return(
    <div className='h-screen bg-slate-100'>
      <Header/>
      <Sidebar/>
      <Mesures/>
      <CtrlSysteme/>
      <Connexion />
    </div>
    
  )

}

export default App

