import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Fish from './Pages/Fish';
import Cat from './Pages/Cat';
import Dog from './Pages/Dog';
import Bird from './Pages/Bird';
import Navbar from './Components/Navbar';
function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Navbar />} >
            <Route path="fish" element={<Fish />} />
            <Route path="cat" element={<Cat />} />
            <Route path="dog" element={<Dog />} />
            <Route path="bird" element={<Bird />} />
          </Route>
      {/*<Route path="/login" element={<SıgnIn />} />*/}
      </Routes>
      </BrowserRouter>
  );
}

export default App;
