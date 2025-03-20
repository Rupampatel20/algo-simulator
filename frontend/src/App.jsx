import React from "react";
import Navbar from "./components/Navbar";
//import HeroSection from "./components/main/Herosection";
//import CardSection from "./components/main/CardSection";
//import About from "./components/main/About";
//import Footer from "./components/main/Footer";
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Sorting from "./pages/Sorting";
import { Main } from "./pages/Main";
import { Searching } from "./pages/Searching";
import { Heap } from "./pages/sorting/Heap";
import { Merge } from "./pages/sorting/Merge";
import { Quick } from "./pages/sorting/Quick";
import { Bubble } from "./pages/sorting/Bubble";
import { Selection } from "./pages/sorting/Selection";
import { Insertion } from "./pages/sorting/Insertion";
import {Linear} from "./pages/searching/Linear";
import {Binary} from "./pages/searching/Binary";



const App = () => {
  const router = createBrowserRouter([

   //main sorting pages
    {
      path: "/",
      element: <Main />
    },
    {
      path: "/sorting",
      element: <Sorting />
    },
    {
      path: "/searching",
      element: <Searching />
    },

    //sorting specific pages
    
    {
      path: "/sorting/heap",
      element: <Heap />
    },
    {
      path: "/sorting/merge",
      element: <Merge />
    },
    {
      path: "/sorting/quick",
      element: <Quick />
    },
    {
      path: "/sorting/bubble",
      element: <Bubble />
    },
    {
      path: "/sorting/selection",
      element: <Selection />
    },
    {
      path: "/sorting/insertion",
      element: <Insertion />
    },
    
    //searching pages
    {
      path: "/searching/binary",
      element: <Binary Search/>
    },
    {
      path: "/searching/linear",
      element: <Linear Search/>
    },
    

    

  
    







  ])
  return (
    <div>
      <Navbar />
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
