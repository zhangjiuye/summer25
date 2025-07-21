import "./App.css";
import React from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const Home = React.lazy(() => import("./screens/Home"));
const About = React.lazy(() => import("./screens/About"));
const Contact = React.lazy(() => import("./screens/Contact"));

function App() {
  return (
    <Router>
      <div className="app-container">
        <NavBar />
        <React.Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </React.Suspense>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
