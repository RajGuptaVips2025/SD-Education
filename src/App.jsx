import { Outlet, useLocation } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase.js";
import React, { useState, useEffect } from "react";

const App = () => {
  const [isAuth, setIsAuth] = useState(null);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuth(true);
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

  return (
    <>
      {shouldShowNavbar && <Navbar isAuth={isAuth}/>}
      <Outlet />
      {shouldShowFooter && <Footer />}
    </>
  );
};

export default App;
