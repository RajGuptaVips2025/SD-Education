import { Outlet, useLocation } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { Routes, Route, Navigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase.js";
import React, { useState, useEffect } from "react";
// import CodeCompiler from "./components/Compiler/CodeCompiler.jsx";
import Review from "./components/Reviews/Review.jsx";
import ReviewList from "./components/Reviews/ReviewList.jsx";
import Signup from "./components/Signup/Signup.jsx";
import Login from "./components/Login/Login.jsx";

const App = () => {
  const [isAuth, setIsAuth] = useState(null);
  const [userId, setUserId] = useState("");
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuth(true);
        setUserId(user.uid);
        console.log("User logged in:", user.uid);
      } else {
        setIsAuth(false);
        console.log("User logged out");
      }
    });

    // Cleanup the subscription on component unmount
    return () => unsubscribe();
  }, []);
  const location = useLocation();

  // List of routes that should not have a footer
  const noFooterRoutes = ["/login", "/signup", "/compiler", "/review"];
  const noNavbarRoutes = ['/signup']

  const shouldShowFooter = !noFooterRoutes.includes(location.pathname);
  const shouldShowNavbar = !noNavbarRoutes.includes(location.pathname)
  // Show loading state while determining authentication
  // if (isAuth === null) return <div>Loading...</div>;

  return (
    <>
      {shouldShowNavbar && <Navbar isAuth={isAuth}/>}
      <Outlet />
      {shouldShowFooter && <Footer />}
      {/* <Routes> */}
        {/* <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} /> */}
        {/* <Route
          path="/review"
          element={
            isAuth ? <Review userId={userId} /> : <Navigate to="/login" />
          }
        />
        <Route
          path="/review/user"
          element={
            isAuth ? <ReviewList userId={userId} /> : <Navigate to="/login" />
          }
        /> */}
        {/* <Route path="/compiler" element={<CodeCompiler />} /> */}
      {/* </Routes> */}
    </>
  );
};

export default App;
