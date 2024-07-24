import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Card from "./components/Cards/Card";
import Footer from "./components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import React from "react";
import { AnimatedTooltipPreview } from "./components/AnimatedTooltipPreview";


const App = () => {
  
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Hero />
              <Card />
              <Footer />
              <AnimatedTooltipPreview />
            </>
          }
        />

        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
};

export default App;
