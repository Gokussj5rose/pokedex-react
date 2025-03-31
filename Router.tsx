import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './src/components/Home/index.tsx'
import App from './src/styles/App.tsx'




const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/app" element={<App />} />
      </Routes>
    </Router>
  )
}

export default AppRouter