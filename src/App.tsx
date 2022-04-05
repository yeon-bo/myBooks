import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Add from "./pages/Add"
import Singin from "./pages/Singin"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Add />} />
        <Route path="/singin" element={<Singin />} />
      </Routes>
    </div>
  );
}
export default App;