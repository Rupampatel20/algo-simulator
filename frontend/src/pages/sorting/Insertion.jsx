import React from 'react'
import INSERTION_SORT_IMG from "../../assets/Insertion-sorting.png"



export const Insertion = () => {
  return (
    <div className='mt-24 px-24 flex flex-col gap-7'>

       {/* insertion  sort heading code... */}

    <h1 className="text-center text-7xl font-extrabold bg-gradient-to-r from-blue-500 via-teal-400 to-purple-600 bg-clip-text text-transparent relative inline-block transition-all duration-300 ease-in-out hover:scale-105 hover:drop-shadow-lg after:content-[''] after:absolute after:left-0 after:bottom-[-5px] after:w-full after:h-1 after:bg-gradient-to-r after:from-blue-500 after:via-teal-400 after:to-purple-600 after:rounded-full after:transition-all after:duration-300 after:ease-in-out">
      INSERTION  SORT
    </h1>

      {/* insertion sort define section */}

    <div className="text-xl text-gray-200 bg-gradient-to-r from-gray-800 via-gray-900 to-black p-6 rounded-lg shadow-lg border border-gray-700 leading-relaxed tracking-wide">
  <p>
    <span className="text-yellow-400 font-semibold">Insertion Sort</span> is a 
    simple sorting algorithm that works by iteratively inserting each element of 
    an unsorted list into its correct position in the sorted portion of the list. 
    It is like sorting <span className="text-yellow-300">playing cards</span> in your hands. 
    You split the cards into two groups: the sorted cards and the unsorted cards. 
    Then, you pick a card from the unsorted group and put it in the right place 
    in the sorted group.
  </p>
</div>

{/* How Insertion Sort Works */}

<div className="text-xl text-gray-200 bg-gradient-to-r from-gray-800 via-gray-900 to-black p-6 rounded-lg shadow-lg border border-gray-700 leading-relaxed tracking-wide">
  <h2 className="text-yellow-400 font-semibold text-2xl mb-4">📌 How Insertion Sort Works:</h2>
  <ul className="list-disc list-inside text-gray-300 space-y-2">
    <li>We start with the <span className="text-yellow-300">second element</span> of the array, as the first element is assumed to be sorted.</li>
    <li>Compare the second element with the first element. If it is smaller, <span className="text-yellow-300">swap them</span>.</li>
    <li>Move to the <span className="text-yellow-300">third element</span> and compare it with the first two elements, inserting it into its correct position.</li>
    <li>Repeat this process for each remaining element until the entire array is sorted.</li>
  </ul>
</div>

 {/* image section  */}

    <div className="flex justify-center items-center p-6">
          <img 
            src={INSERTION_SORT_IMG} 
            alt="Insertion Sort Visualization" 
            className="max-w-full h-auto rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105" />
          </div>

{/* Illustration of Insertion Sort section */}

          <div className="text-xl text-gray-200 bg-gradient-to-r from-gray-800 via-gray-900 to-black p-6 rounded-lg shadow-lg border border-gray-700 leading-relaxed tracking-wide">
  <h2 className="text-yellow-400 font-semibold text-2xl mb-4">📌 Illustration of Insertion Sort</h2>

  <p className="text-gray-300"><span className="font-semibold text-yellow-300">Initial Array:</span> <code className="bg-gray-700 px-2 py-1 rounded">[23, 1, 10, 5, 2]</code></p>

  <div className="mt-4 space-y-4">
    {/* Initial Step */}
    <div className="bg-gray-800 p-4 rounded border border-gray-600">
      <p><span className="text-yellow-300 font-semibold">Current Element:</span> 23</p>
      <p>The first element is assumed to be sorted.</p>
      <p><span className="text-yellow-300 font-semibold">Sorted Part:</span> <code className="bg-gray-700 px-2 py-1 rounded">[23]</code></p>
    </div>

    {/* First Pass */}
    <div className="bg-gray-800 p-4 rounded border border-gray-600">
      <p><span className="text-yellow-300 font-semibold">First Pass:</span></p>
      <p>Compare <span className="text-yellow-300">1</span> with <span className="text-yellow-300">23</span>.</p>
      <p>Since <span className="text-yellow-300">1</span> is smaller, insert it before <span className="text-yellow-300">23</span>.</p>
      <p><span className="text-yellow-300 font-semibold">Sorted Part:</span> <code className="bg-gray-700 px-2 py-1 rounded">[1, 23]</code></p>
    </div>

    {/* Second Pass */}
    <div className="bg-gray-800 p-4 rounded border border-gray-600">
      <p><span className="text-yellow-300 font-semibold">Second Pass:</span></p>
      <p>Compare <span className="text-yellow-300">10</span> with <span className="text-yellow-300">1</span> and <span className="text-yellow-300">23</span>.</p>
      <p>Insert <span className="text-yellow-300">10</span> between <span className="text-yellow-300">1</span> and <span className="text-yellow-300">23</span>.</p>
      <p><span className="text-yellow-300 font-semibold">Sorted Part:</span> <code className="bg-gray-700 px-2 py-1 rounded">[1, 10, 23]</code></p>
    </div>

    {/* Third Pass */}
    <div className="bg-gray-800 p-4 rounded border border-gray-600">
      <p><span className="text-yellow-300 font-semibold">Third Pass:</span></p>
      <p>Compare <span className="text-yellow-300">5</span> with <span className="text-yellow-300">1</span>, <span className="text-yellow-300">10</span>, and <span className="text-yellow-300">23</span>.</p>
      <p>Insert <span className="text-yellow-300">5</span> between <span className="text-yellow-300">1</span> and <span className="text-yellow-300">10</span>.</p>
      <p><span className="text-yellow-300 font-semibold">Sorted Part:</span> <code className="bg-gray-700 px-2 py-1 rounded">[1, 5, 10, 23]</code></p>
    </div>

    {/* Fourth Pass */}
    <div className="bg-gray-800 p-4 rounded border border-gray-600">
      <p><span className="text-yellow-300 font-semibold">Fourth Pass:</span></p>
      <p>Compare <span className="text-yellow-300">2</span> with <span className="text-yellow-300">1</span>, <span className="text-yellow-300">5</span>, <span className="text-yellow-300">10</span>, and <span className="text-yellow-300">23</span>.</p>
      <p>Insert <span className="text-yellow-300">2</span> between <span className="text-yellow-300">1</span> and <span className="text-yellow-300">5</span>.</p>
      <p><span className="text-yellow-300 font-semibold">Sorted Part:</span> <code className="bg-gray-700 px-2 py-1 rounded">[1, 2, 5, 10, 23]</code></p>
    </div>

    {/* Final Sorted Array */}
    <div className="bg-green-800 p-4 rounded border border-green-600">
      <p><span className="text-green-300 font-semibold">✅ Final Sorted Array:</span> <code className="bg-green-700 px-2 py-1 rounded">[1, 2, 5, 10, 23]</code></p>
    </div>
  </div>
</div>


{/* Time and Space Complexity section */}

<div className="text-xl text-gray-200 bg-gradient-to-r from-gray-800 via-gray-900 to-black p-6 rounded-lg shadow-lg border border-gray-700 leading-relaxed tracking-wide">
  <h2 className="text-yellow-400 font-semibold text-2xl mb-4">📌 Time and Space Complexity of Insertion Sort</h2>

  {/* Time Complexity Section */}
  <div className="mb-6">
    <h3 className="text-yellow-300 font-semibold text-xl mb-2">⏳ Time Complexity</h3>
    <ul className="list-disc list-inside space-y-2">
      <li>
        <span className="text-green-400 font-semibold">Best Case (O(n)):</span> If the list is already sorted, Insertion Sort runs in linear time.
      </li>
      <li>
        <span className="text-blue-400 font-semibold">Average Case (O(n²)):</span> If the list is randomly ordered, each element might need to be compared with every previous element.
      </li>
      <li>
        <span className="text-red-400 font-semibold">Worst Case (O(n²)):</span> If the list is in reverse order, each element needs to be shifted to the correct position, resulting in quadratic time complexity.
      </li>
    </ul>
  </div>

  {/* Space Complexity Section */}
  <div>
    <h3 className="text-yellow-300 font-semibold text-xl mb-2">💾 Space Complexity</h3>
    <p>
      <span className="text-green-400 font-semibold">Auxiliary Space (O(1)):</span> Insertion Sort requires constant additional space, making it a space-efficient sorting algorithm.
    </p>
  </div>
</div>


{/* Advantages and Disadvantages section */}

<div className="text-xl text-gray-200 bg-gradient-to-r from-gray-800 via-gray-900 to-black p-6 rounded-lg shadow-lg border border-gray-700 leading-relaxed tracking-wide">
  <h2 className="text-yellow-400 font-semibold text-2xl mb-4">✅ Advantages & ❌ Disadvantages of Insertion Sort</h2>

  {/* Advantages Section */}
  <div className="mb-6">
    <h3 className="text-green-400 font-semibold text-xl mb-2">✅ Advantages</h3>
    <ul className="list-disc list-inside space-y-2">
      <li>🟢 <span className="font-semibold">Simple & Easy to Implement:</span> Insertion sort has a straightforward implementation.</li>
      <li>🟢 <span className="font-semibold">Stable Sorting Algorithm:</span> Maintains the relative order of equal elements.</li>
      <li>🟢 <span className="font-semibold">Efficient for Small/Nearly Sorted Lists:</span> Performs well on small data sets or when the array is almost sorted.</li>
      <li>🟢 <span className="font-semibold">Space-Efficient:</span> Works in-place, requiring O(1) extra space.</li>
      <li>🟢 <span className="font-semibold">Adaptive:</span> The number of swaps is proportional to the number of inversions. For a sorted array, it runs in O(n) time.</li>
    </ul>
  </div>

  {/* Disadvantages Section */}
  <div>
    <h3 className="text-red-400 font-semibold text-xl mb-2">❌ Disadvantages</h3>
    <ul className="list-disc list-inside space-y-2">
      <li>🔴 <span className="font-semibold">Inefficient for Large Lists:</span> Due to O(n²) complexity, it becomes slow for large datasets.</li>
      <li>🔴 <span className="font-semibold">Not as Efficient as Merge/Quick Sort:</span> Merge sort and quick sort outperform it in most cases.</li>
    </ul>
  </div>
</div>
 

{/* Applications of Insertion Sort section */}

<div className="text-xl text-gray-200 bg-gradient-to-r from-gray-800 via-gray-900 to-black p-6 rounded-lg shadow-lg border border-gray-700 leading-relaxed tracking-wide">
  <h2 className="text-yellow-400 font-semibold text-2xl mb-4">📌 Applications of Insertion Sort</h2>

  <ul className="list-disc list-inside space-y-3">
    <li>🔹 <span className="font-semibold">Small or Nearly Sorted Lists:</span> Performs efficiently when the list is small or almost sorted.</li>
    <li>🔹 <span className="font-semibold">Simplicity & Stability:</span> Preferred in applications where a simple and stable algorithm is required.</li>
    <li>🔹 <span className="font-semibold">Used in Bucket Sort:</span> Serves as a subroutine for sorting small buckets efficiently.</li>
    <li>🔹 <span className="font-semibold">Handling Nearly Sorted Arrays:</span> Ideal when the array has very few inversions.</li>
    <li>🔹 <span className="font-semibold">Hybrid Sorting Algorithms:</span> Used in efficient sorting algorithms like:
      <ul className="list-disc ml-6 space-y-1">
        <li>📌 <span className="text-blue-300 font-semibold">IntroSort:</span> A hybrid of QuickSort, HeapSort, and Insertion Sort.</li>
        <li>📌 <span className="text-blue-300 font-semibold">TimSort:</span> A hybrid sorting algorithm used in Python’s sort function.</li>
      </ul>
    </li>
  </ul>
</div>

{/* gfg button link code */}

<div className="text-left my-6 p-4 border-l-4 border-blue-500 bg-gray-50 rounded-lg shadow-md">
  <p className="text-lg text-gray-800 leading-relaxed">
    Try it on 
    <a href="https://www.geeksforgeeks.org/insertion-sort/" target="_blank" rel="noopener noreferrer" 
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
