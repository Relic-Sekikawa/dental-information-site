import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import SymptomGuide from './components/SymptomGuide';
import WhenToVisitDoctor from './components/WhenToVisitDoctor';
import DentistSearch from './components/DentistSearch';
import RecommendedDentists from './components/RecommendedDentists';
import './App.css'

function App() {
  return (
    <Router>
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/symptoms" element={<SymptomGuide />} />
          <Route path="/when-to-visit" element={<WhenToVisitDoctor />} />
          <Route path="/search" element={<DentistSearch />} />
          <Route path="/recommended" element={<RecommendedDentists />} />
        </Routes>
      </main>
    </Router>
  )
}

export default App
