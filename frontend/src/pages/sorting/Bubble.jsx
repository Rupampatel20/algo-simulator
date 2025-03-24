import React from 'react'
import BUBBLE_SORT_IMG from "../../assets/bubble-sort-example.webp"


export const Bubble = () => {
  return (
    <div className='mt-24 px-24 flex flex-col gap-7'>

     {/* selection sort heading code... */}

     <h1 className="text-center text-7xl font-extrabold bg-gradient-to-r from-blue-500 via-teal-400 to-purple-600 bg-clip-text text-transparent relative inline-block transition-all duration-300 ease-in-out hover:scale-105 hover:drop-shadow-lg after:content-[''] after:absolute after:left-0 after:bottom-[-5px] after:w-full after:h-1 after:bg-gradient-to-r after:from-blue-500 after:via-teal-400 after:to-purple-600 after:rounded-full after:transition-all after:duration-300 after:ease-in-out">
      BUBBLE SORT
    </h1>


    <div className="text-xl text-gray-200 bg-gradient-to-r from-gray-800 via-gray-900 to-black p-6 rounded-lg shadow-lg border border-gray-700 leading-relaxed tracking-wide">
      <h2 className="text-yellow-400 font-semibold text-2xl mb-4">
        🔄 Bubble Sort Algorithm
      </h2>

      <p className="text-gray-300 mb-4">
        Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping 
        adjacent elements if they are in the wrong order. It continues until the entire 
        array is sorted.
      </p>
      </div>


{/* bubble sort image example */}

<div className="flex justify-center items-center p-6">
          <img 
            src={BUBBLE_SORT_IMG} 
            alt="Bubble Sort Visualization" 
            className="max-w-full h-auto rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105" />
          </div>

{/* Complexity Analysis of Bubble Sort section */}

<div className="text-xl text-gray-200 bg-gradient-to-r from-gray-800 via-gray-900 to-black p-6 rounded-lg shadow-lg border border-gray-700 leading-relaxed tracking-wide">
      <h2 className="text-yellow-400 font-semibold text-2xl mb-4">
        Complexity Analysis of Bubble Sort
      </h2>

      <p>
        <span className="text-yellow-400 font-semibold">Time Complexity:</span> 
        <span className="text-yellow-300"> O(n²)</span>, as there are two nested loops:
      </p>

      <ul className="list-disc list-inside mt-3">
        <li>One loop to iterate through the array = <span className="text-yellow-300">O(n)</span></li>
        <li>Another loop to compare adjacent elements and swap them = <span className="text-yellow-300">O(n)</span></li>
      </ul>

      <p className="mt-3">
        Therefore, overall complexity = O(n) * O(n) = <span className="text-yellow-300">O(n²)</span>
      </p>

      <p className="mt-4">
        <span className="text-yellow-400 font-semibold">Auxiliary Space:</span> 
        <span className="text-yellow-300"> O(1)</span>, as Bubble Sort is an in-place sorting algorithm.
      </p>
    </div>

    <div className="text-xl text-gray-200 bg-gradient-to-r from-gray-800 via-gray-900 to-black p-6 rounded-lg shadow-lg border border-gray-700 leading-relaxed tracking-wide">
      <h2 className="text-yellow-400 font-semibold text-2xl mb-4">
        Advantages & Disadvantages of Bubble Sort
      </h2>



{/* advantages and disadvantages section code  */}


      {/* Advantages Section */}
      <h3 className="text-green-400 font-semibold text-xl mt-4">Advantages:</h3>
      <ul className="list-disc list-inside mt-2 text-green-300">
        <li>Bubble sort is easy to understand and implement.</li>
        <li>It does not require any additional memory space.</li>
        <li>It is a stable sorting algorithm, meaning that elements with the same key value maintain their relative order in the sorted output.</li>
      </ul>

      {/* Disadvantages Section */}
      <h3 className="text-red-400 font-semibold text-xl mt-6">Disadvantages:</h3>
      <ul className="list-disc list-inside mt-2 text-red-300">
        <li>Bubble sort has a time complexity of <span className="text-yellow-300">O(n²)</span>, making it very slow for large data sets.</li>
        <li>Bubble sort has almost no or limited real-world applications. It is mostly used in academics to teach different sorting techniques.</li>
      </ul>
    </div>

    {/* gfg button link code */}

<div className="text-left my-6 p-4 border-l-4 border-blue-500 bg-gray-50 rounded-lg shadow-md">
  <p className="text-lg text-gray-800 leading-relaxed">
    Try it on 
    <a href="https://www.geeksforgeeks.org/bubble-sort/" target="_blank" rel="noopener noreferrer" 
       className="text-blue-600 font-semibold hover:underline">
       GfG Practice
    </a>
    <span className="inline-block ml-2">
      🔗
    </span>
  </p>
</div>

    </div>
  )
}
