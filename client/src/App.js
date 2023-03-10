import logo from './logo.svg';
import './App.css';
import Nav from "./components/nav"
import Home from "./pages/Home"
import Products from "./pages/Products"
import OrderHistory from "./pages/OrderHistory"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import NotFound from "./pages/NotFound"
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
            <Route 
              path="/products" 
              element={<Products />} 
            />
            <Route 
              path="/Orderhistory" 
              element={<OrderHistory />} 
            />
            <Route 
              path="/Login" 
              element={<Login />} 
            />
            <Route 
              path="/Signup" 
              element={<Signup />} 
            />
            <Route 
              path="*" 
              element={<NotFound />} 
            />
          </Routes>

    </Router>
  );
}

export default App;
