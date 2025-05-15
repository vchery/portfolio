import { React } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Academic from './pages/Academic'
import Experience from './pages/Experience'
import Projects from './pages/Projects'

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route element={<Layout/>}>
            <Route path='/academic' element={<Academic />} />
            <Route path='/experience' element={<Experience />} />
            <Route path='/projects' element={<Projects />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;