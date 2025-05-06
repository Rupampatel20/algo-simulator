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
import { MergeVisualize } from "./pages/visualization/MergeVisualize";
import { HeapVisualize } from "./pages/visualization/HeapVisualize";
import { QuickVisualize } from "./pages/visualization/QuickVisualize";
import { BubbleVisualize } from "./pages/visualization/BubbleVisualize";
import { InsertionVisualize } from "./pages/visualization/InsertionVisualize";
import { SelectionVisualize } from "./pages/visualization/SelectionVisualize";
import { BinaryVisualize } from "./pages/visualization/BinaryVisualize";
import { LinearVisualize } from "./pages/visualization/LinearVisualize";
import { Card } from "./pages/visualizationcard/Card";


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
      element: <Binary/>
    },
    {
      path: "/searching/linear",
      element: <Linear/>
    },

    //visualization pages sorting

    {
      path: "/visualization/MergeVisualize",
      element: <MergeVisualize/>
    },

    {
      path: "/visualization/HeapVisualize",
      element: <HeapVisualize/>
    },

    {
      path: "/visualization/QuickVisualize",
      element: <QuickVisualize/>
    },

    {
      path: "/visualization/BubbleVisualize",
      element: <BubbleVisualize/>
    },

    {
      path: "/visualization/InsertionVisualize",
      element: <InsertionVisualize/>
    },

    {
      path: "/visualization/SelectionVisualize",
      element: <SelectionVisualize/>
    },

    //visualization pages searching

    {
      path: "/visualization/BinaryVisualize",
      element: <BinaryVisualize/>
    },
    
    {
      path: "/visualization/LinearVisualize",
      element: <LinearVisualize/>
    },

    //visualization card page
    {
      path: "/visualizationcard/Card",
      element: <Card/>
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



