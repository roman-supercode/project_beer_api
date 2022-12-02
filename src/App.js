import './App.css';
// Davor im Terminal npm install react-router-dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Random from './pages/Random';
import Uebersicht from './pages/Uebersicht';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/uebersicht' element={<Uebersicht />}></Route>
          <Route path='/random' element={<Random />}></Route>
        </Routes>
      </div>
    </Router>
  );

};

export default App;
