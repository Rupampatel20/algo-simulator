import React from 'react'
import MERGE_SORT_IMG from "../../assets/Merge-Sort-Algorithm-(1).png"


export const Merge = () => {
  return (
    <div className='mt-24 px-24 flex flex-col gap-7'>

    {/* merge sort heading code... */}

    <h1 className="text-center text-7xl font-extrabold bg-gradient-to-r from-blue-500 via-teal-400 to-purple-600 bg-clip-text text-transparent relative inline-block transition-all duration-300 ease-in-out hover:scale-105 hover:drop-shadow-lg after:content-[''] after:absolute after:left-0 after:bottom-[-5px] after:w-full after:h-1 after:bg-gradient-to-r after:from-blue-500 after:via-teal-400 after:to-purple-600 after:rounded-full after:transition-all after:duration-300 after:ease-in-out">
      MERGE SORT
    </h1>

    {/* merge sort paragraph code */}

    <div className="text-xl text-gray-200 bg-gradient-to-r from-gray-800 via-gray-900 to-black p-6 rounded-lg shadow-lg border border-gray-700 leading-relaxed tracking-wide">
    Merge Sort is a sorting algorithm that follows the Divide and Conquer approach. 
    It works by recursively dividing the input array into smaller subarrays, sorting those subarrays, 
    and then merging them back together to obtain the sorted array.
    <br />
    In simple terms, the process of Merge Sort is to divide the array into two halves, 
    sort each half, and then merge the sorted halves back together. This process continues 
    until the entire array is sorted.
    <br />
    Merge Sort achieves a time complexity of 
    <span className="text-yellow-400 font-semibold"> O(n Log n) </span> 
    for both worst and average cases, making it an efficient sorting technique.
</div>

{/* merge sort first img example  ka code */}

      <div className="flex justify-center items-center p-6">
      <img 
        src={MERGE_SORT_IMG} 
        alt="Merge Sort Visualization" 
        className="max-w-full h-auto rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105" />
      </div>

{/* merge sort second paragraph code */}

      <div className="text-xl text-gray-200 bg-gradient-to-r from-gray-800 via-gray-900 to-black p-6 rounded-lg shadow-lg border border-gray-700 leading-relaxed tracking-wide">
    <span className="text-yellow-400 font-bold">How does Merge Sort work?</span>
    <br />
    Merge Sort is a popular sorting algorithm known for its efficiency and stability. 
    It follows the Divide and Conquer approach to sort a given array of elements.
    <br /><br />
    <span className="text-blue-400 font-semibold">Step-by-step process:</span>
    <br /><br />
    <span className="text-green-400 font-semibold">1. Divide:</span> 
    Recursively divide the list or array into two halves until it can no longer be divided.
    <br />
    <span className="text-green-400 font-semibold">2. Conquer:</span> 
    Each subarray is sorted individually using the Merge Sort algorithm.
    <br />
    <span className="text-green-400 font-semibold">3. Merge:</span> 
    The sorted subarrays are merged back together in sorted order. The process continues 
    until all elements from both subarrays have been merged.
    <br /><br />
    Merge Sort guarantees a time complexity of 
    <span className="text-yellow-400 font-semibold"> O(n Log n) </span> 
    in all cases, making it highly efficient for large datasets.
</div>




{/* complexity time and Auxiliary Space Section  */}
<div className="text-left my-6 pl-6">
      <h3 className="text-2xl font-semibold text-black">
        Complexity Analysis of Merge Sort
      </h3>

      <div className="text-left my-6 p-4 border-l-4 border-blue-500 bg-gray-50 rounded-lg shadow-md">
        <p className="text-lg text-gray-800 leading-relaxed">
          The <strong>time complexity</strong> and <strong>space complexity</strong> of Merge Sort depend on the structure of the input array.
        </p>

        {/* Time Complexity Section */}
        <div className="mt-4 p-4 bg-white rounded-lg shadow-md">
          <p className="text-lg font-semibold text-blue-600">⏳ Time Complexity:</p>
          <ul className="text-gray-800 list-disc pl-6">
            <li>
              <strong>Best Case:</strong> O(n log n) — When the array is already sorted or nearly sorted.
            </li>
            <li>
              <strong>Average Case:</strong> O(n log n) — When the array is randomly ordered.
            </li>
            <li>
              <strong>Worst Case:</strong> O(n log n) — When the array is sorted in reverse order.
            </li>
          </ul>
        </div>

        {/* Auxiliary Space Section */}
        <div className="mt-4 p-4 bg-white rounded-lg shadow-md">
          <p className="text-lg font-semibold text-blue-600">💾 Auxiliary Space:</p>
          <p className="text-gray-800">
            O(<strong>n</strong>) — Additional space is required for the temporary array used during merging.
          </p>
        </div>
      </div>
    </div>

{/* advsntsges and disadvantages  */}

    <div className="text-left my-6 p-6 bg-gray-50 rounded-lg shadow-lg border border-gray-300">
      <h3 className="text-2xl font-semibold text-gray-900 mb-4">
        Advantages and Disadvantages of Merge Sort
      </h3>

      {/* Advantages Section */}
      <div className="mb-6">
        <h4 className="text-xl font-semibold text-green-600">✅ Advantages:</h4>
        <ul className="list-disc pl-6 text-gray-800 mt-2 space-y-2">
          <li>
            <strong>Stability:</strong> Merge Sort maintains the relative order of equal elements, making it stable.
          </li>
          <li>
            <strong>Guaranteed Worst-Case Performance:</strong> It has a worst-case time complexity of <span className="font-semibold text-blue-600">O(N log N)</span>, making it efficient even for large datasets.
          </li>
          <li>
            <strong>Simple to Implement:</strong> The divide-and-conquer approach is straightforward and easy to understand.
          </li>
          <li>
            <strong>Naturally Parallel:</strong> The independent merging of subarrays makes it suitable for parallel processing.
          </li>
        </ul>
      </div>

      {/* Disadvantages Section */}
      <div>
        <h4 className="text-xl font-semibold text-red-600">❌ Disadvantages:</h4>
        <ul className="list-disc pl-6 text-gray-800 mt-2 space-y-2">
          <li>
            <strong>Space Complexity:</strong> Merge Sort requires additional memory for storing merged subarrays.
          </li>
          <li>
            <strong>Not In-Place:</strong> It needs extra space, which can be a disadvantage in memory-constrained environments.
          </li>
          <li>
            <strong>Slower than QuickSort:</strong> Merge Sort is generally slower than QuickSort as QuickSort is more cache-friendly since it works in-place.
          </li>
        </ul>
      </div>
    </div>


{/* gfg button link code */}

<div className="text-left my-6 p-4 border-l-4 border-blue-500 bg-gray-50 rounded-lg shadow-md">
  <p className="text-lg text-gray-800 leading-relaxed">
    Try it on 
    <a href="https://www.geeksforgeeks.org/merge-sort/" target="_blank" rel="noopener noreferrer" 
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