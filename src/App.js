import './App.css';
// import 'bootstrap-dark-5/dist/css/bootstrap-dark.min.css';

import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css'  //npm i bootstrap-dark-5 boostrap
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

import Home from './components/screens/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
// import { Login } from '@mui/icons-material';
// import Navbar from './components/Navbar';
// import Login from '.components/screens/Login';
import Login from "./components/screens/Login"
import Signup from './components/screens/Signup';
import { CartProvider } from './components/ContextReducer';
import MyOrder from './components/screens/MyOrder';


function App() {
  return (
    <CartProvider>
      <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            {/* <Route exact path="/login" element={<Login />} /> */}
            <Route exact path="/login" element = {<Login/>}/>
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/myorder" element={<MyOrder />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
