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

    //visualization pages

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

    

    
    


  ])
  
  return (
    <div>
      <Navbar />
      <RouterProvider router={router} />
    </div>
  );
};

export default App;



// import React from "react";
// import Navbar from "./components/Navbar";
// import Sidebar from "./components/Sidebar";
// import Sorting from "./pages/Sorting";
// import { Main } from "./pages/Main";
// import { Searching } from "./pages/Searching";
// import { Heap } from "./pages/sorting/Heap";
// import { Merge } from "./pages/sorting/Merge";
// import { Quick } from "./pages/sorting/Quick";
// import { Bubble } from "./pages/sorting/Bubble";
// import { Selection } from "./pages/sorting/Selection";
// import { Insertion } from "./pages/sorting/Insertion";
// import { Linear } from "./pages/searching/Linear";
// import { Binary } from "./pages/searching/Binary";
// import { MergeVisualize } from "./pages/visualization/MergeVisualize";
// import { BubbleSortVisualizer } from "./pages/visualization/BubbleSortVisualizer";







// import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

// const Layout = () => (
//   <div className="flex">
//     <Sidebar />
//     <div className="ml-64 w-full">
//       <Navbar />
//       <Outlet />
//     </div>
//   </div>
// );

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />, // Wrap main layout with sidebar and navbar
//     children: [
//       { path: "/", element: <Main /> },
//       { path: "/sorting", element: <Sorting /> },
//       { path: "/searching", element: <Searching /> },

//       // Sorting algorithms
//       { path: "/sorting/heap", element: <Heap /> },
//       { path: "/sorting/merge", element: <Merge /> },
//       { path: "/sorting/quick", element: <Quick /> },
//       { path: "/sorting/bubble", element: <Bubble /> },
//       { path: "/sorting/selection", element: <Selection /> },
//       { path: "/sorting/insertion", element: <Insertion /> },

//       // Searching algorithms
//       { path: "/searching/binary", element: <Binary /> },
//       { path: "/searching/linear", element: <Linear /> },

//       // Visualization pages

//       { path: "/visualization/MergeVisualize", 
//         element: <MergeVisualize /> 
//       },

//       {path: "/visualization/BubbleSortVisualizer", 
//         element: <BubbleSortVisualizer/>
//       },



















//     ],
//   },
// ]);

// const App = () => {
//   return <RouterProvider router={router} />;
// };

// export default App;
