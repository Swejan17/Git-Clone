import { Route, Routes } from "react-router-dom"
import Loginpage from "./pages/Loginpage"
import  Homepage from './pages/Homepage'
import Explorepage from "./pages/Explorepage"
import Likespage from "./pages/Likespage"
import Sidebar from "./components/Sidebar"
import Signuppage from "./pages/Signuppage"
function App() {


  return (
    <div className='flex'>
      <Sidebar/>
      <div className='max-w-5xl my-5 text-white mx-auto transition-all duration-300 flex-1'>
        <Routes>
          <Route path='/' element={<Homepage />}/>
          <Route path='/login' element={<Loginpage />}/>
          <Route path='/signup' element={<Signuppage/>}/>

          <Route path='/explore' element={<Explorepage />}/>
          <Route path='/likes' element={<Likespage />}/>
        </Routes>
        <fotter>Fotter</fotter>
      </div>
      
      
    </div>
  )
}

export default App
