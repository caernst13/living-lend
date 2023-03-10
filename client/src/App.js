import logo from './logo.svg';
import './App.css';
import Nav from "./components/nav"
import Home from "./pages/Home"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
          <Nav />
          <Routes>
            <Route 
              path="/" 
              element={<Home />} 
            />
          </Routes>

    </Router>
  );
}

export default App;
