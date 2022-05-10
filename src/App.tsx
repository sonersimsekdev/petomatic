import React from 'react';
import Navbar from './components/Navbar';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Fish from './pages/Fish';
import Cat from './pages/Cat';
import Dog from './pages/Dog';
import Bird from './pages/Bird';
import SıgnIn from './pages/SıgnIn';

function App() {
  return (
      <Routes>
        <Route path="/" element={<SıgnIn />}/>
          <Route element={<Navbar />} >
            <Route path="/fish" element={<Fish />} />
            <Route path="/cat" element={<Cat />} />
            <Route path="/dog" element={<Dog />} />
            <Route path="/bird" element={<Bird />} />
          </Route>
      </Routes>
  );
}

export default App;
