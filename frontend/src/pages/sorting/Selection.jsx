import React from 'react'
import SELECTION_SORT_IMG from "../../assets/selectionsort.png"

export const Selection = () => {
  return (
    <div className='mt-24 px-24 flex flex-col gap-7'>

       {/* selection sort heading code... */}

    <h1 className="text-center text-7xl font-extrabold bg-gradient-to-r from-blue-500 via-teal-400 to-purple-600 bg-clip-text text-transparent relative inline-block transition-all duration-300 ease-in-out hover:scale-105 hover:drop-shadow-lg after:content-[''] after:absolute after:left-0 after:bottom-[-5px] after:w-full after:h-1 after:bg-gradient-to-r after:from-blue-500 after:via-teal-400 after:to-purple-600 after:rounded-full after:transition-all after:duration-300 after:ease-in-out">
      SELECTION SORT
    </h1>
     
    {/* selection sort paragraph code */}
    
    <div className="text-xl text-gray-200 bg-gradient-to-r from-gray-800 via-gray-900 to-black p-6 rounded-lg shadow-lg border border-gray-700 leading-relaxed tracking-wide">
      <p>
        <span className="text-yellow-400 font-semibold">Selection Sort</span> is a 
        comparison-based sorting algorithm. It sorts an array by repeatedly selecting 
        the <span className="text-yellow-300">smallest (or largest)</span> element from the unsorted portion and 
        swapping it with the first unsorted element. This process continues until the 
        entire array is sorted.
      </p>
    </div>


{/* steps or 2nd para code of selection code */}

    <div className="text-xl text-gray-200 bg-gradient-to-r from-gray-800 via-gray-900 to-black p-6 rounded-lg shadow-lg border border-gray-700 leading-relaxed tracking-wide">
      <p>
        <span className="text-yellow-400 font-semibold">Step 1:</span> Find the 
        <span className="text-yellow-300"> smallest element</span> in the array and swap it with the first element. 
        This ensures that the smallest element is in its correct position.
      </p>
      <br />
      <p>
        <span className="text-yellow-400 font-semibold">Step 2:</span> Find the 
        <span className="text-yellow-300"> second smallest element</span> among the remaining elements and 
        swap it with the second element.
      </p>
      <br />
      <p>
        <span className="text-yellow-400 font-semibold">Step 3:</span> Repeat this process until all elements 
        are placed in their correct positions.
      </p>
    </div>


{/* Complexity Analysis of Selection Sort section code */}

    <div className="text-xl text-gray-200 bg-gradient-to-r from-gray-800 via-gray-900 to-black p-6 rounded-lg shadow-lg border border-gray-700 leading-relaxed tracking-wide ">
      <h2 className="text-yellow-400 font-semibold text-2xl mb-4">
        Complexity Analysis of Selection Sort
      </h2>
      
      <p>
        <span className="text-yellow-400 font-semibold">Time Complexity:</span> 
        <span className="text-yellow-300"> O(n²)</span>, as there are two nested loops:
      </p>

      <ul className="list-disc list-inside mt-3">
        <li>One loop to select an element of the array one by one = <span className="text-yellow-300">O(n)</span></li>
        <li>Another loop to compare that element with every other element = <span className="text-yellow-300">O(n)</span></li>
      </ul>

      <p className="mt-3">
        Therefore, overall complexity = O(n) * O(n) = <span className="text-yellow-300">O(n²)</span>
      </p>

      <p className="mt-4">
        <span className="text-yellow-400 font-semibold">Auxiliary Space:</span> 
        <span className="text-yellow-300"> O(1)</span> as the only extra memory used is for temporary variables.
      </p>
    </div>


{/* advantages and disadvantages section code */}

    <div className="text-gray-200 bg-gradient-to-b from-gray-900 to-black p-8 rounded-lg shadow-lg border border-gray-700 leading-relaxed tracking-wide">
      <h2 className="text-yellow-400 font-semibold text-2xl mb-4">
        ✅ Advantages of Selection Sort
      </h2>
      <ul className="list-disc list-inside space-y-2">
        <li>Easy to understand and implement, making it ideal for teaching basic sorting concepts.</li>
        <li>Requires only a constant <span className="text-yellow-300">O(1)</span> extra memory space.</li>
        <li>Fewer swaps compared to many other sorting algorithms, making it efficient when memory writes are costly.</li>
      </ul>

      <h2 className="text-red-400 font-semibold text-2xl mt-6 mb-4">
        ❌ Disadvantages of Selection Sort
      </h2>
      <ul className="list-disc list-inside space-y-2">
        <li>Has a time complexity of <span className="text-yellow-300">O(n²)</span>, making it slower than Quick Sort or Merge Sort.</li>
        <li>Does not maintain the relative order of equal elements, meaning it is <span className="text-yellow-300">not stable</span>.</li>
      </ul>
    </div>

{/* application section  code */}

    <div className="text-gray-200 bg-gradient-to-b from-gray-900 to-black p-8 rounded-lg shadow-lg border border-gray-700 leading-relaxed tracking-wide">
      <h2 className="text-blue-400 font-semibold text-2xl mb-4">
        📌 Applications of Selection Sort
      </h2>
      <ul className="list-disc list-inside space-y-2">
        <li>
          Perfect for teaching fundamental sorting mechanisms and algorithm design.
        </li>
        <li>
          Suitable for small lists where the overhead of more complex algorithms isn’t justified, especially when memory writing is costly.
        </li>
        <li>
          <span className="text-yellow-300">Heap Sort</span> algorithm is based on Selection Sort.
        </li>
      </ul>
    </div>


    {/* image section  */}

    <div className="flex justify-center items-center p-6">
          <img 
            src={SELECTION_SORT_IMG} 
            alt="Selection Sort Visualization" 
            className="max-w-full h-auto rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105" />
          </div>

          <div>
            <p className='text-xl text-gray-200 bg-gradient-to-r from-gray-800 via-gray-900 to-black p-6 rounded-lg shadow-lg border border-gray-700 leading-relaxed tracking-wide'>
             These Figure shows the entire sorting process. On each pass, the largest remaining item is selected and then placed in its proper location. The first pass places 93, the second pass places 77, the third places 55, and so on.
            </p>
          </div>

    {/* gfg button link code */}

    <div className="text-left my-6 p-4 border-l-4 border-blue-500 bg-gray-50 rounded-lg shadow-md">
  <p className="text-lg text-gray-800 leading-relaxed">
    Try it on 
    <a href="https://www.geeksforgeeks.org/selection-sort/" target="_blank" rel="noopener noreferrer" 
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
