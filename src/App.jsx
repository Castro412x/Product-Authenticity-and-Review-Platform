import { Routes, Route } from 'react-router-dom'
import LeftPanel from './components/LeftPanel'
import RightPanel from './components/RightPanel'

function HomePage() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <LeftPanel />
      <RightPanel />
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<HomePage />} />
    </Routes>
  )
}
