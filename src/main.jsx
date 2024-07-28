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
import {
  JsContent,
  HtmlContent,
  CssContent,
  ReactContect,
  NextjsContect,
  MongodbContent,
  ExpressContent,
  NodeContent
} from './components/ContentTopic';
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
        element: <JsContent/>
      },
      {
        path: 'react',
        element: <ReactContect/>
      },
      {
        path: 'nextjs',
        element: <NextjsContect/>
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
