import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
// import EmailForm from './components/EmailForm';
import Home from "./components/Home";
// import About from "./components/About";
import './App.css'
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="Container-Nav">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/emailform" element={<EmailForm />} /> */}
      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
