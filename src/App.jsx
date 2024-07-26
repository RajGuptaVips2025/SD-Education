
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Card from "./components/Cards/Card";
import Footer from "./components/Footer/Footer";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import SideBar from "./components/SideBar/SideBar";
import InfiniteMovingCardsDemo from "./components/InfiniteMovingCardsDemo/InfiniteMovingCardsDemo";
import Blog from "./components/Blogs/Blog";
import BlogList from "./components/Blogs/BlogList";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase.js";
import React, { useState, useEffect } from "react";
import Html from './components/HTMLContent/Html';
import CodeCompiler from "./components/Compiler/CodeCompiler.jsx";

const App = () => {
  const [isAuth, setIsAuth] = useState(null);
  const [userId, setUserId] = useState('')
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuth(true);
        setUserId(user.uid)
        console.log("User logged in:", user.uid);
      } else {
        setIsAuth(false);
        console.log("User logged out");
      }
    });

    // Cleanup the subscription on component unmount
    return () => unsubscribe();
  }, []);

  // Show loading state while determining authentication
  if (isAuth === null) return <div>Loading...</div>;



  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar isAuth={isAuth} setIsAuth={setIsAuth} />
              <Hero />
              {/* <Html/> */}
              {/* <Hero /> */}
              <Card />
              <InfiniteMovingCardsDemo />
              {/* <SideBar/> */}
              <Footer />
            </>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/blog"
          element={isAuth ? <Blog userId={userId} /> : <Navigate to="/login" />}
        />
        <Route
          path="/blog/user"
          element={
            isAuth ? <BlogList userId={userId} /> : <Navigate to="/login" />
          }
        />
        <Route path="/compiler" element={<CodeCompiler />} />
      </Routes>
    </>
  );
};

export default App;

