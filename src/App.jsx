import { Home, Login, SignUp } from "./pages"
import { Routes, Route } from 'react-router-dom'
import { Navbar } from './components'


function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/login' element={ <Login /> } />
        <Route path='/sign-up' element={ <SignUp /> } />
      </Routes>   
    </div>
  )
}

export default App
