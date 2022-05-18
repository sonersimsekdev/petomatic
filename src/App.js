import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './i18n/config';
import Fish from './Pages/Fish';
import Cat from './Pages/Cat';
import Dog from './Pages/Dog';
import Bird from './Pages/Bird';
import Navbar from './Components/Navbar';
import ProtectedRoutes from "./Components/ProtectedRoutes";
import Home from './Pages/Home';
import SignIn from './Pages/SignIn';
function App() {
  return (
    
    <BrowserRouter>
    
    <Navbar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/fish" element={<Fish />} />
          <Route path="/cat" element={<Cat />} />
          <Route path="/dog" element={<Dog />} />
          <Route path="/bird" element={<Bird />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
