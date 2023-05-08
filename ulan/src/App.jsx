import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import NoPage from './pages/NoPage'

import './stylesheets/index.css';


function App() {
  return  (
    <Router>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NoPage />} />

      </Routes>
    </Router>
  )
}



export default App;
