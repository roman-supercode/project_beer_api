import './App.css';
// Davor im Terminal npm install react-router-dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from './components/navigation/Navigation';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route path='/' element={<Home />}></Route>
        </Routes>
      </div>
    </Router>
  );

};

export default App;
