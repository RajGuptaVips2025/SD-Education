// index.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import App from "./App.jsx";
import Home from "./components/HomeFolder/Home.jsx";
import {
  CssContent,
  HtmlContent,
  ExpressContent,
  JavascriptContent,
  MongodbContent,
  NextContent,
  NodeContent,
  ReactContent,
} from "./components/Topics";
import Aos from "aos";
import Signup from "./components/Signup/Signup.jsx";
import Login from "./components/Login/Login.jsx";
import CodeCompiler from "./components/Compiler/CodeCompiler.jsx";
import Review from "./components/Reviews/Review.jsx";
import ReviewList from "./components/Reviews/ReviewList.jsx";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase.js";
import "./index.css";
import "aos/dist/aos.css";

Aos.init();

const PrivateRoute = ({ element, isAuth }) => {
  return isAuth ? element : <Navigate to="/login" />;
};

const Root = () => {
  const [isAuth, setIsAuth] = React.useState(null);
  const [userId, setUserId] = React.useState("");

  React.useEffect(() => {
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

  if (isAuth === null) return <div>Loading...</div>;

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "html",
          element: <HtmlContent />,
        },
        {
          path: "css",
          element: <CssContent />,
        },
        {
          path: "javascript",
          element: (
            <JavascriptContent />
          ),
        },
        {
          path: "react",
          element: <ReactContent />,
        },
        {
          path: "nextjs",
          element: <NextContent />,
        },
        {
          path: "mongodb",
          element: (
            <MongodbContent />
          ),
        },
        {
          path: "express",
          element: (
            <ExpressContent />
          ),
        },
        {
          path: "node",
          element: <NodeContent />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "signup",
          element: <Signup />,
        },
        {
          path: "compiler",
          element: <CodeCompiler />,
        },
        {
          path: "review",
          element: (
            <PrivateRoute
              element={<Review userId={userId} />}
              isAuth={isAuth}
            />
          ),
        },
        {
          path: "review/user",
          element: (
            <PrivateRoute
              element={<ReviewList userId={userId} />}
              isAuth={isAuth}
            />
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
