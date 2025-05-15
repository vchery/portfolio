import { React } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Academic from './pages/Academic'

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/academic' element={<Academic />} />
      </Routes>
    </Router>
  );
}

export default App;