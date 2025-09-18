
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Error from './routes/Error'
import Home from './routes/Home'
import Cliente from './routes/Cliente'
import Nav from './componets/Nav'
import Footer from './componets/Footer'

function App() {

  return (
    <>
      <BrowserRouter> 
      <Nav/>
        <Routes>
          <Route path="*" element={<Error/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path="/cliente" element={<Cliente/>}/>

        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
