// import React from 'react'
// import INSERTION_SORT_IMG from "../../assets/Insertion-sorting.png"



// export const Insertion = () => {
//   return (
//     <div className='mt-24 px-24 flex flex-col gap-7'>

//        {/* insertion  sort heading code... */}

//     <h1 className="text-center text-7xl font-extrabold bg-gradient-to-r from-blue-500 via-teal-400 to-purple-600 bg-clip-text text-transparent relative inline-block transition-all duration-300 ease-in-out hover:scale-105 hover:drop-shadow-lg after:content-[''] after:absolute after:left-0 after:bottom-[-5px] after:w-full after:h-1 after:bg-gradient-to-r after:from-blue-500 after:via-teal-400 after:to-purple-600 after:rounded-full after:transition-all after:duration-300 after:ease-in-out">
//       INSERTION  SORT
//     </h1>

//       {/* insertion sort define section */}

//     <div className="text-xl text-gray-200 bg-gradient-to-r from-gray-800 via-gray-900 to-black p-6 rounded-lg shadow-lg border border-gray-700 leading-relaxed tracking-wide">
//   <p>
//     <span className="text-yellow-400 font-semibold">Insertion Sort</span> is a 
//     simple sorting algorithm that works by iteratively inserting each element of 
//     an unsorted list into its correct position in the sorted portion of the list. 
//     It is like sorting <span className="text-yellow-300">playing cards</span> in your hands. 
//     You split the cards into two groups: the sorted cards and the unsorted cards. 
//     Then, you pick a card from the unsorted group and put it in the right place 
//     in the sorted group.
//   </p>
// </div>

// {/* How Insertion Sort Works */}

// <div className="text-xl text-gray-200 bg-gradient-to-r from-gray-800 via-gray-900 to-black p-6 rounded-lg shadow-lg border border-gray-700 leading-relaxed tracking-wide">
//   <h2 className="text-yellow-400 font-semibold text-2xl mb-4">📌 How Insertion Sort Works:</h2>
//   <ul className="list-disc list-inside text-gray-300 space-y-2">
//     <li>We start with the <span className="text-yellow-300">second element</span> of the array, as the first element is assumed to be sorted.</li>
//     <li>Compare the second element with the first element. If it is smaller, <span className="text-yellow-300">swap them</span>.</li>
//     <li>Move to the <span className="text-yellow-300">third element</span> and compare it with the first two elements, inserting it into its correct position.</li>
//     <li>Repeat this process for each remaining element until the entire array is sorted.</li>
//   </ul>
// </div>

//  {/* image section  */}

//     <div className="flex justify-center items-center p-6">
//           <img 
//             src={INSERTION_SORT_IMG} 
//             alt="Insertion Sort Visualization" 
//             className="max-w-full h-auto rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105" />
//           </div>

// {/* Illustration of Insertion Sort section */}

//           <div className="text-xl text-gray-200 bg-gradient-to-r from-gray-800 via-gray-900 to-black p-6 rounded-lg shadow-lg border border-gray-700 leading-relaxed tracking-wide">
//   <h2 className="text-yellow-400 font-semibold text-2xl mb-4">📌 Illustration of Insertion Sort</h2>

//   <p className="text-gray-300"><span className="font-semibold text-yellow-300">Initial Array:</span> <code className="bg-gray-700 px-2 py-1 rounded">[23, 1, 10, 5, 2]</code></p>

//   <div className="mt-4 space-y-4">
//     {/* Initial Step */}
//     <div className="bg-gray-800 p-4 rounded border border-gray-600">
//       <p><span className="text-yellow-300 font-semibold">Current Element:</span> 23</p>
//       <p>The first element is assumed to be sorted.</p>
//       <p><span className="text-yellow-300 font-semibold">Sorted Part:</span> <code className="bg-gray-700 px-2 py-1 rounded">[23]</code></p>
//     </div>

//     {/* First Pass */}
//     <div className="bg-gray-800 p-4 rounded border border-gray-600">
//       <p><span className="text-yellow-300 font-semibold">First Pass:</span></p>
//       <p>Compare <span className="text-yellow-300">1</span> with <span className="text-yellow-300">23</span>.</p>
//       <p>Since <span className="text-yellow-300">1</span> is smaller, insert it before <span className="text-yellow-300">23</span>.</p>
//       <p><span className="text-yellow-300 font-semibold">Sorted Part:</span> <code className="bg-gray-700 px-2 py-1 rounded">[1, 23]</code></p>
//     </div>

//     {/* Second Pass */}
//     <div className="bg-gray-800 p-4 rounded border border-gray-600">
//       <p><span className="text-yellow-300 font-semibold">Second Pass:</span></p>
//       <p>Compare <span className="text-yellow-300">10</span> with <span className="text-yellow-300">1</span> and <span className="text-yellow-300">23</span>.</p>
//       <p>Insert <span className="text-yellow-300">10</span> between <span className="text-yellow-300">1</span> and <span className="text-yellow-300">23</span>.</p>
//       <p><span className="text-yellow-300 font-semibold">Sorted Part:</span> <code className="bg-gray-700 px-2 py-1 rounded">[1, 10, 23]</code></p>
//     </div>

//     {/* Third Pass */}
//     <div className="bg-gray-800 p-4 rounded border border-gray-600">
//       <p><span className="text-yellow-300 font-semibold">Third Pass:</span></p>
//       <p>Compare <span className="text-yellow-300">5</span> with <span className="text-yellow-300">1</span>, <span className="text-yellow-300">10</span>, and <span className="text-yellow-300">23</span>.</p>
//       <p>Insert <span className="text-yellow-300">5</span> between <span className="text-yellow-300">1</span> and <span className="text-yellow-300">10</span>.</p>
//       <p><span className="text-yellow-300 font-semibold">Sorted Part:</span> <code className="bg-gray-700 px-2 py-1 rounded">[1, 5, 10, 23]</code></p>
//     </div>

//     {/* Fourth Pass */}
//     <div className="bg-gray-800 p-4 rounded border border-gray-600">
//       <p><span className="text-yellow-300 font-semibold">Fourth Pass:</span></p>
//       <p>Compare <span className="text-yellow-300">2</span> with <span className="text-yellow-300">1</span>, <span className="text-yellow-300">5</span>, <span className="text-yellow-300">10</span>, and <span className="text-yellow-300">23</span>.</p>
//       <p>Insert <span className="text-yellow-300">2</span> between <span className="text-yellow-300">1</span> and <span className="text-yellow-300">5</span>.</p>
//       <p><span className="text-yellow-300 font-semibold">Sorted Part:</span> <code className="bg-gray-700 px-2 py-1 rounded">[1, 2, 5, 10, 23]</code></p>
//     </div>

//     {/* Final Sorted Array */}
//     <div className="bg-green-800 p-4 rounded border border-green-600">
//       <p><span className="text-green-300 font-semibold">✅ Final Sorted Array:</span> <code className="bg-green-700 px-2 py-1 rounded">[1, 2, 5, 10, 23]</code></p>
//     </div>
//   </div>
// </div>


// {/* Time and Space Complexity section */}

// <div className="text-xl text-gray-200 bg-gradient-to-r from-gray-800 via-gray-900 to-black p-6 rounded-lg shadow-lg border border-gray-700 leading-relaxed tracking-wide">
//   <h2 className="text-yellow-400 font-semibold text-2xl mb-4">📌 Time and Space Complexity of Insertion Sort</h2>

//   {/* Time Complexity Section */}
//   <div className="mb-6">
//     <h3 className="text-yellow-300 font-semibold text-xl mb-2">⏳ Time Complexity</h3>
//     <ul className="list-disc list-inside space-y-2">
//       <li>
//         <span className="text-green-400 font-semibold">Best Case (O(n)):</span> If the list is already sorted, Insertion Sort runs in linear time.
//       </li>
//       <li>
//         <span className="text-blue-400 font-semibold">Average Case (O(n²)):</span> If the list is randomly ordered, each element might need to be compared with every previous element.
//       </li>
//       <li>
//         <span className="text-red-400 font-semibold">Worst Case (O(n²)):</span> If the list is in reverse order, each element needs to be shifted to the correct position, resulting in quadratic time complexity.
//       </li>
//     </ul>
//   </div>

//   {/* Space Complexity Section */}
//   <div>
//     <h3 className="text-yellow-300 font-semibold text-xl mb-2">💾 Space Complexity</h3>
//     <p>
//       <span className="text-green-400 font-semibold">Auxiliary Space (O(1)):</span> Insertion Sort requires constant additional space, making it a space-efficient sorting algorithm.
//     </p>
//   </div>
// </div>


// {/* Advantages and Disadvantages section */}

// <div className="text-xl text-gray-200 bg-gradient-to-r from-gray-800 via-gray-900 to-black p-6 rounded-lg shadow-lg border border-gray-700 leading-relaxed tracking-wide">
//   <h2 className="text-yellow-400 font-semibold text-2xl mb-4">✅ Advantages & ❌ Disadvantages of Insertion Sort</h2>

//   {/* Advantages Section */}
//   <div className="mb-6">
//     <h3 className="text-green-400 font-semibold text-xl mb-2">✅ Advantages</h3>
//     <ul className="list-disc list-inside space-y-2">
//       <li>🟢 <span className="font-semibold">Simple & Easy to Implement:</span> Insertion sort has a straightforward implementation.</li>
//       <li>🟢 <span className="font-semibold">Stable Sorting Algorithm:</span> Maintains the relative order of equal elements.</li>
//       <li>🟢 <span className="font-semibold">Efficient for Small/Nearly Sorted Lists:</span> Performs well on small data sets or when the array is almost sorted.</li>
//       <li>🟢 <span className="font-semibold">Space-Efficient:</span> Works in-place, requiring O(1) extra space.</li>
//       <li>🟢 <span className="font-semibold">Adaptive:</span> The number of swaps is proportional to the number of inversions. For a sorted array, it runs in O(n) time.</li>
//     </ul>
//   </div>

//   {/* Disadvantages Section */}
//   <div>
//     <h3 className="text-red-400 font-semibold text-xl mb-2">❌ Disadvantages</h3>
//     <ul className="list-disc list-inside space-y-2">
//       <li>🔴 <span className="font-semibold">Inefficient for Large Lists:</span> Due to O(n²) complexity, it becomes slow for large datasets.</li>
//       <li>🔴 <span className="font-semibold">Not as Efficient as Merge/Quick Sort:</span> Merge sort and quick sort outperform it in most cases.</li>
//     </ul>
//   </div>
// </div>
 

// {/* Applications of Insertion Sort section */}

// <div className="text-xl text-gray-200 bg-gradient-to-r from-gray-800 via-gray-900 to-black p-6 rounded-lg shadow-lg border border-gray-700 leading-relaxed tracking-wide">
//   <h2 className="text-yellow-400 font-semibold text-2xl mb-4">📌 Applications of Insertion Sort</h2>

//   <ul className="list-disc list-inside space-y-3">
//     <li>🔹 <span className="font-semibold">Small or Nearly Sorted Lists:</span> Performs efficiently when the list is small or almost sorted.</li>
//     <li>🔹 <span className="font-semibold">Simplicity & Stability:</span> Preferred in applications where a simple and stable algorithm is required.</li>
//     <li>🔹 <span className="font-semibold">Used in Bucket Sort:</span> Serves as a subroutine for sorting small buckets efficiently.</li>
//     <li>🔹 <span className="font-semibold">Handling Nearly Sorted Arrays:</span> Ideal when the array has very few inversions.</li>
//     <li>🔹 <span className="font-semibold">Hybrid Sorting Algorithms:</span> Used in efficient sorting algorithms like:
//       <ul className="list-disc ml-6 space-y-1">
//         <li>📌 <span className="text-blue-300 font-semibold">IntroSort:</span> A hybrid of QuickSort, HeapSort, and Insertion Sort.</li>
//         <li>📌 <span className="text-blue-300 font-semibold">TimSort:</span> A hybrid sorting algorithm used in Python’s sort function.</li>
//       </ul>
//     </li>
//   </ul>
// </div>

// {/* gfg button link code */}

// {/* <div className="text-left my-6 p-4 border-l-4 border-blue-500 bg-gray-50 rounded-lg shadow-md">
//   <p className="text-lg text-gray-800 leading-relaxed">
//     Try it on 
//     <a href="https://www.geeksforgeeks.org/insertion-sort/" target="_blank" rel="noopener noreferrer" 
//        className="text-blue-600 font-semibold hover:underline">
//        GfG Practice
//     </a>
//     <span className="inline-block ml-2">
//       🔗
//     </span>
//   </p>
// </div> */}


//     </div>
//   )
// }





import React, { useEffect, useState } from "react";
import INSERTION_SORT_IMG from "../../assets/Insertion-sorting.png";

export const Insertion = () => {
  const [array, setArray] = useState([]);
  const [speed, setSpeed] = useState(300);
  const [isSorting, setIsSorting] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [activeIndices, setActiveIndices] = useState([]);
  const [sortedBoundary, setSortedBoundary] = useState(null);

  useEffect(() => {
    generateNewArray();
  }, []);

  const generateNewArray = () => {
    const newArr = Array.from({ length: 25 }, () => Math.floor(Math.random() * 100) + 5);
    setArray(newArr);
    setActiveIndices([]);
    setSortedBoundary(null);
  };

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const insertionSort = async () => {
    setIsSorting(true);
    let arr = [...array];

    for (let i = 1; i < arr.length; i++) {
      let key = arr[i];
      let j = i - 1;

      while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j--;
        setArray([...arr]);
        setActiveIndices([j + 1, i]);
        await sleep(speed);
      }
      arr[j + 1] = key;
      setArray([...arr]);
      setSortedBoundary(i);
      await sleep(speed);
    }

    setActiveIndices([]);
    setSortedBoundary(arr.length);
    setIsSorting(false);
  };

  const handleAddValue = () => {
    if (inputValue.trim() === "") return;
    const values = inputValue
      .split(",")
      .map((v) => parseInt(v.trim(), 10))
      .filter((v) => !isNaN(v) && v > 0);
    if (values.length > 0) {
      setArray(values);
      setInputValue("");
      setSortedBoundary(null);
    }
  };

  return (
    <div className="mt-24 px-4 md:px-24 flex flex-col gap-10">
      <h1 className="text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent px-4 py-6 leading-tight tracking-tight transition-transform duration-300 ease-in-out transform hover:scale-105 hover:drop-shadow-[0_5px_25px_rgba(100,100,255,0.4)]">
  Insertion Sort Algorithm
</h1>
      <div className="flex justify-center gap-4 items-center flex-wrap">
        <button
          onClick={generateNewArray}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50"
          disabled={isSorting}
        >
          Generate New Array
        </button>
        <button
          onClick={insertionSort}
          className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 disabled:opacity-50"
          disabled={isSorting}
        >
          Start Sorting
        </button>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter comma-separated values"
          className="px-4 py-2 rounded border border-gray-600 bg-gray-800 text-white w-72"
        />
        <button
          onClick={handleAddValue}
          className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700"
        >
          Set Custom Array
        </button>
        <div className="flex items-center gap-2">
          <label htmlFor="speed" className="text-white">Speed:</label>
          <input
            id="speed"
            type="range"
            min="50"
            max="1000"
            step="50"
            value={speed}
            onChange={(e) => setSpeed(Number(e.target.value))}
            className="cursor-pointer"
          />
        </div>
      </div>

      {/* Color Legend */}
      <div className="flex justify-center gap-6 items-center mt-2">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 bg-yellow-400 rounded-sm"></div>
          <span className="text-black">Comparing</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 bg-green-500 rounded-sm"></div>
          <span className="text-black">Sorted</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 bg-blue-500 rounded-sm"></div>
          <span className="text-black">Unsorted</span>
        </div>
      </div>

      <div className="flex justify-center items-end h-96 border border-gray-600 bg-black rounded-lg p-4 overflow-hidden">
        {array.map((value, index) => {
          const isActive = activeIndices.includes(index);
          const isSorted = index <= sortedBoundary;
          const barColor = isActive
            ? "bg-yellow-400"
            : isSorted
            ? "bg-green-500"
            : "bg-blue-500";

          return (
            <div
              key={index}
              className={`mx-0.5 w-3 md:w-4 transition-all duration-150 rounded-sm relative ${barColor}`}
              style={{ height: `${value * 3}px` }}
            >
              <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-white text-xs font-medium">
                {value}
              </span>
            </div>
          );
        })}
      </div>

      {/* Description Section */}
      <div className="text-xl text-gray-200 bg-gradient-to-r from-gray-800 via-gray-900 to-black p-6 rounded-lg shadow-lg border border-gray-700">
        <p>
          <span className="text-yellow-400 font-semibold">Insertion Sort</span> is a simple sorting algorithm that builds the final sorted array one item at a time. It is much less efficient on large lists than more advanced algorithms like Quick Sort.
        </p>
      </div>

      {/* Step-by-Step */}
      <div className="text-xl text-gray-200 bg-gradient-to-r from-gray-800 via-gray-900 to-black p-6 rounded-lg shadow-lg border border-gray-700">
        <p><span className="text-yellow-400 font-semibold">Step 1:</span> Start from the second element (index 1), compare it with the first.</p>
        <p><span className="text-yellow-400 font-semibold">Step 2:</span> If it's smaller, shift the first element to the right and insert the second at the beginning.</p>
        <p><span className="text-yellow-400 font-semibold">Step 3:</span> Continue comparing each element with the left sorted portion and insert it at the right position.</p>
      </div>

      {/* Complexity */}
      <div className="text-xl text-gray-200 bg-gradient-to-r from-gray-800 via-gray-900 to-black p-6 rounded-lg shadow-lg border border-gray-700">
        <h2 className="text-yellow-400 font-semibold text-2xl mb-4">Complexity Analysis of Insertion Sort</h2>
        <p><span className="text-yellow-400 font-semibold">Time Complexity:</span> <span className="text-yellow-300">O(n²)</span> in the worst case.</p>
        <ul className="list-disc list-inside mt-3">
          <li>Best case (already sorted): <span className="text-yellow-300">O(n)</span></li>
          <li>Average and worst case: <span className="text-yellow-300">O(n²)</span></li>
        </ul>
        <p className="mt-4"><span className="text-yellow-400 font-semibold">Auxiliary Space:</span> <span className="text-yellow-300">O(1)</span></p>
      </div>

      {/* Pros & Cons */}
      <div className="text-gray-200 bg-gradient-to-b from-gray-900 to-black p-8 rounded-lg shadow-lg border border-gray-700">
        <h2 className="text-yellow-400 font-semibold text-2xl mb-4">✅ Advantages of Insertion Sort</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Efficient for small data sets.</li>
          <li>Simple to implement.</li>
          <li>Stable sort (maintains the relative order of equal elements).</li>
        </ul>
        <h2 className="text-red-400 font-semibold text-2xl mt-6 mb-4">❌ Disadvantages of Insertion Sort</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Not suitable for large datasets.</li>
          <li>Poor performance with large unsorted arrays.</li>
        </ul>
      </div>

      {/* Applications */}
      <div className="text-gray-200 bg-gradient-to-b from-gray-900 to-black p-8 rounded-lg shadow-lg border border-gray-700">
        <h2 className="text-blue-400 font-semibold text-2xl mb-4">📌 Applications of Insertion Sort</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Sorting small arrays.</li>
          <li>Used in hybrid sorting algorithms like Timsort.</li>
          <li>Efficient for data sets that are already mostly sorted.</li>
        </ul>
      </div>

      {/* Image Section */}
      <div className="flex justify-center items-center p-6">
        <img
          src={INSERTION_SORT_IMG}
          alt="Insertion Sort Visualization"
          className="max-w-full h-auto rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105"
        />
      </div>

      {/* Footer */}
      <div>
        <p className="text-xl text-gray-200 bg-gradient-to-r from-gray-800 via-gray-900 to-black p-6 rounded-lg shadow-lg border border-gray-700">
          This figure demonstrates how each element is inserted in the correct position by comparing it with previous elements.
        </p>
      </div>
    </div>
  );
};

