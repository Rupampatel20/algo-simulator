import React, { useState } from "react";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import logo from "../assets/logo.png"; // Ensure the path is correct
import { Dropdown } from "./nav/Dropdown"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  // const options = [
  //   "Heap Sort",
  //   "Quick Sort",
  //   "Merge Sort",
  //   "Bubble Sort",
  //   "Selection Sort",
  //   "Insertion Sort"
  // ]

  const sortingOptions = [
    {
      title:'Heap Sort',
      path:'/sorting/heap'
    },
    {
      title:'Merge Sort',
      path:'/sorting/merge'
    },
    
    {
      title:'Quick Sort',
      path:'/sorting/quick'
    },
    {
      title:'Bubble Sort',
      path:'/sorting/bubble'
    },
    {
      title:'Selection Sort',
      path:'/sorting/selection'
    },
    {
      title:'Insertion Sort',
      path:'/sorting/insertion'
    },
  ]
  //searching pages

  const searhingOptions = [
    {
      title:'Linear Search',
      path:'/searching/linear'
    },
    {
      title:'Binary Search',
      path:'/searching/binary'
    }
  ]

  return (
    <nav className="bg-gray-900 text-white fixed w-full top-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo & Title */}
        <a href="/" className="flex items-center space-x-4 cursor-pointer">
          <img
            src={logo}
            alt="Logo"
            className="h-12 w-12 rounded-lg transform transition-all duration-300 hover:scale-110 hover:rotate-6 shadow-lg"
          />
          <h1 className="text-2xl font-bold text-gray-300 font-serif italic transition-all duration-300 hover:text-yellow-400 hover:scale-105 hover:tracking-widest">
            SEARCHSORTPLAY
          </h1>
        </a>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navigation Menu 
        <ul
          className={`md:flex md:space-x-10 text-lg font-semibold absolute md:relative bg-gray-900 md:bg-transparent w-full md:w-auto left-0 top-16 md:top-auto transition-all duration-300 ${menuOpen ? "block" : "hidden"} md:flex`}
        >
          <a href="/" className='cursor-pointer hover:text-yellow-400'>Home</a>
          <a href="/#About" className='cursor-pointer hover:text-yellow-400'>About</a>
          <Dropdown title="Sorting" options={sortingOptions} />
          <Dropdown title="Searching" options={searhingOptions} />
        </ul>*/}

<ul
          className={`md:flex md:space-x-10 text-lg font-semibold absolute md:relative bg-gray-900 md:bg-transparent w-full md:w-auto left-0 top-16 md:top-auto transition-all duration-300 ${
            menuOpen ? "block" : "hidden"
          } md:flex`}
        >
          <li className="px-4 py-2">
            <a
              href="/"
              className="cursor-pointer hover:text-yellow-400 flex items-center"
            >
              Home
            </a>
          </li>
          <li className="px-4 py-2">
            <a
              href="/#About"
              className="cursor-pointer hover:text-yellow-400 flex items-center"
            >
              About
            </a>
          </li>
          <Dropdown title="Sorting" options={sortingOptions} />
          <Dropdown title="Searching" options={searhingOptions} />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
