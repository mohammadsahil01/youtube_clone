
import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage'
import VideoPage from './pages/VideoPage';

import { Provider } from 'react-redux';
import store from './lib/store';

function App() {
 

  return (
    <Provider store={store}>
    <div>
    
    <Router>
    <Routes>
      
      <Route path='/' element={<HomePage/>}/>
      <Route path='/video/:id' element={<VideoPage/>}/>
    </Routes>
     </Router>
    </div>
    </Provider>
     
      
  )
}

export default App
