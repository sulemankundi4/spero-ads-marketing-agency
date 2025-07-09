import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
// import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="text-center text-2xl font-bold">You will see progress here</div>

    // <Router>
    //   <Routes>
    //     <Route path="/" element={<HomePage />} />
    //   </Routes>
    // </Router>
  );
}

export default App;
