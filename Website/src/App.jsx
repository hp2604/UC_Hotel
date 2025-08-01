import About from './Pages/About'
import Book from './Pages/Book'
import Contact from './Pages/Contact'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Menu from './Pages/Menu'
import { BrowserRouter,Routes,Route,Router } from 'react-router-dom'

function App() {

  return (
    <>
     
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/menu" element={<Menu/>} />
        <Route path="/book" element={<Book/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    
    </BrowserRouter>
 


 
    </>
  )
}

export default App
