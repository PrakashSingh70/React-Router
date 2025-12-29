import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import Layout from "./Layout.jsx";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Github, { githubInfoLoader } from "./components/Github/Github.jsx";
import User from "./components/User/Users.jsx";
import Login from "./components/Login/Login.jsx";
import GetStarted from "./components/Get-Started/GetStarted.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route loader={githubInfoLoader} path="github" element={<Github />} />
      <Route path="user/:userid?" element={<User />} />

       //add login route with layout 
      {/* <Route path="login" element={<Login />} />  */}
      <Route path="getStarted" element={<GetStarted />} />
    </Route>

      //use when remove login route from navbar and footer only show login
    <Route path="login" element={<Login />} />

    </>

    
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
