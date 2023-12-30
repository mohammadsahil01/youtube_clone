
import { useEffect } from 'react'
import './App.css'
import { Button } from './components/ui/button'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage'

function App() {
 

  return (
    <div>
    <Router>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
    </Routes>
         
     </Router>
    </div>
     
      
  )
}

export default App
