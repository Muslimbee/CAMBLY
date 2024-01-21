
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import OnlineEnglish from './Main/OnlineEnglish/OnlineEnglish'
import ChooseYouRownTutor from './Main/ChooseYouRownTutor/ChooseYouRownTutor'
import Carusel from './Main/Carusel/Carusel'
import { AppProvider, useGlobalContext } from './context'
import Login from './Components/Login/Login'

function App() {
     
  const { scrolling, login } = useGlobalContext();

  return (
    <>
     <Navbar/>
     <OnlineEnglish/>
     <ChooseYouRownTutor/>
     <Carusel/>
    
    
     <Routes>
      <Route path='/login' element={ <Login/> }  />
      {/* <Route path='/' element={} />
      <Route path='/' element={ }/>
      <Route path='/' element={}/> */}
     </Routes>

     <h2>salom</h2>
   
    </>
  )
}

export default App
