import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import 'aos/dist/aos.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import Home from './components/HomeFolder/Home.jsx'
import {CssContent,HtmlContent,ExpressContent,JavascriptContent,MongodbContent,NextContent,NodeContent,ReactContent} from './components/Topics'
import Aos from 'aos';

Aos.init()
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Home/>
      },
      {
        path: 'html',
        element: <HtmlContent/>
      },
      {
        path: 'css',
        element: <CssContent/>
      },
      {
        path: 'javascript',
        element: <JavascriptContent/>
      },
      {
        path: 'react',
        element: <ReactContent/>
      },
      {
        path: 'nextjs',
        element: <NextContent/>
      },
      {
        path: 'mongodb',
        element: <MongodbContent/>
      },
      {
        path: 'express',
        element: <ExpressContent/>
      },
      {
        path: 'node',
        element: <NodeContent/>
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
