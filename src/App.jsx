import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainMenu from './pages/MainMenu'
import ComGame from './pages/ComGame'
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainMenu />} />
          <Route path="/game" element={<ComGame />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
