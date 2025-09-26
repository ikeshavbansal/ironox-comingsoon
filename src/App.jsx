import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import IronoxLanding from "./page/Landing"
import './globals.css'
function App() {
  return (
    <Router>
      <Routes>
        {/* Render same component on both "/" and "/shop" */}
        <Route path="/" element={<IronoxLanding />} />
        <Route path="/shop" element={<IronoxLanding />} />
      </Routes>
    </Router>
  )
}

export default App
