import './App.css';
import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Template from './Template';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Template/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
