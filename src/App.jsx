
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import OnlineEnglish from './Main/OnlineEnglish/OnlineEnglish'
import ChooseYouRownTutor from './Main/ChooseYouRownTutor/ChooseYouRownTutor'
import Carusel from './Main/Carusel/Carusel'
import { AppProvider, useGlobalContext } from './context'
import Login from './Components/Login/Login'
import Courses from './Main/Courses/Courses'
import Cambly from './Main/Cambly/Cambly'
import Index from './Main/Index'

function App() {
     
  const { scrolling, login } = useGlobalContext();

  return (
    <>
     <Navbar/>
     
    
    
     <Routes>
      <Route path='/login' element={ <Login/> }  />
      <Route path='/' element={ <Index />} />

     </Routes>

   
    </>
  )
}

export default App
