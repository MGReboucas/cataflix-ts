import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import './App.css'

import Home from './pages/Home/Home'
import Form from './components/Form/Form'

export default function App() {
  return (
    <div className="app-root">
      <Header />
      <main className="app-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Form />} />
          <Route path="/form/:id" element={<Form />} />
        </Routes>
      </main>
    </div>
  )
}
