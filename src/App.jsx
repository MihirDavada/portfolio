import { BrowserRouter } from "react-router-dom";
import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LoadingSpinner from "./components/LoadingSpinner";

const About = React.lazy(() => {
  return import("./components/About");
});
const Experience = React.lazy(() => {
  return import("./components/Experience");
});
const Tech = React.lazy(() => {
  return import("./components/Tech");
});
const Works = React.lazy(() => {
  return import("./components/Works");
});
const Contact = React.lazy(() => {
  return import("./components/Contact");
});
const StarsCanvas = React.lazy(() => {
  return import("./components/canvas/Stars");
});

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
        </div>
        <Suspense fallback={<LoadingSpinner/>}>
          <Routes>
            <Route path="" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/tech" element={<Tech />} />
            <Route path="/works" element={<Works />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  );
};

export default App;
