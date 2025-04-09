// import React from 'react'
// import SELECTION_SORT_IMG from "../../assets/selectionsort.png"

// export const Selection = () => {
//   return (
//     <div className='mt-24 px-24 flex flex-col gap-7'>

//        {/* selection sort heading code... */}

//     <h1 className="text-center text-7xl font-extrabold bg-gradient-to-r from-blue-500 via-teal-400 to-purple-600 bg-clip-text text-transparent relative inline-block transition-all duration-300 ease-in-out hover:scale-105 hover:drop-shadow-lg after:content-[''] after:absolute after:left-0 after:bottom-[-5px] after:w-full after:h-1 after:bg-gradient-to-r after:from-blue-500 after:via-teal-400 after:to-purple-600 after:rounded-full after:transition-all after:duration-300 after:ease-in-out">
//       SELECTION SORT
//     </h1>
     
//     {/* selection sort paragraph code */}
    
//     <div className="text-xl text-gray-200 bg-gradient-to-r from-gray-800 via-gray-900 to-black p-6 rounded-lg shadow-lg border border-gray-700 leading-relaxed tracking-wide">
//       <p>
//         <span className="text-yellow-400 font-semibold">Selection Sort</span> is a 
//         comparison-based sorting algorithm. It sorts an array by repeatedly selecting 
//         the <span className="text-yellow-300">smallest (or largest)</span> element from the unsorted portion and 
//         swapping it with the first unsorted element. This process continues until the 
//         entire array is sorted.
//       </p>
//     </div>


// {/* steps or 2nd para code of selection code */}

//     <div className="text-xl text-gray-200 bg-gradient-to-r from-gray-800 via-gray-900 to-black p-6 rounded-lg shadow-lg border border-gray-700 leading-relaxed tracking-wide">
//       <p>
//         <span className="text-yellow-400 font-semibold">Step 1:</span> Find the 
//         <span className="text-yellow-300"> smallest element</span> in the array and swap it with the first element. 
//         This ensures that the smallest element is in its correct position.
//       </p>
//       <br />
//       <p>
//         <span className="text-yellow-400 font-semibold">Step 2:</span> Find the 
//         <span className="text-yellow-300"> second smallest element</span> among the remaining elements and 
//         swap it with the second element.
//       </p>
//       <br />
//       <p>
//         <span className="text-yellow-400 font-semibold">Step 3:</span> Repeat this process until all elements 
//         are placed in their correct positions.
//       </p>
//     </div>


// {/* Complexity Analysis of Selection Sort section code */}

//     <div className="text-xl text-gray-200 bg-gradient-to-r from-gray-800 via-gray-900 to-black p-6 rounded-lg shadow-lg border border-gray-700 leading-relaxed tracking-wide ">
//       <h2 className="text-yellow-400 font-semibold text-2xl mb-4">
//         Complexity Analysis of Selection Sort
//       </h2>
      
//       <p>
//         <span className="text-yellow-400 font-semibold">Time Complexity:</span> 
//         <span className="text-yellow-300"> O(n²)</span>, as there are two nested loops:
//       </p>

//       <ul className="list-disc list-inside mt-3">
//         <li>One loop to select an element of the array one by one = <span className="text-yellow-300">O(n)</span></li>
//         <li>Another loop to compare that element with every other element = <span className="text-yellow-300">O(n)</span></li>
//       </ul>

//       <p className="mt-3">
//         Therefore, overall complexity = O(n) * O(n) = <span className="text-yellow-300">O(n²)</span>
//       </p>

//       <p className="mt-4">
//         <span className="text-yellow-400 font-semibold">Auxiliary Space:</span> 
//         <span className="text-yellow-300"> O(1)</span> as the only extra memory used is for temporary variables.
//       </p>
//     </div>


// {/* advantages and disadvantages section code */}

//     <div className="text-gray-200 bg-gradient-to-b from-gray-900 to-black p-8 rounded-lg shadow-lg border border-gray-700 leading-relaxed tracking-wide">
//       <h2 className="text-yellow-400 font-semibold text-2xl mb-4">
//         ✅ Advantages of Selection Sort
//       </h2>
//       <ul className="list-disc list-inside space-y-2">
//         <li>Easy to understand and implement, making it ideal for teaching basic sorting concepts.</li>
//         <li>Requires only a constant <span className="text-yellow-300">O(1)</span> extra memory space.</li>
//         <li>Fewer swaps compared to many other sorting algorithms, making it efficient when memory writes are costly.</li>
//       </ul>

//       <h2 className="text-red-400 font-semibold text-2xl mt-6 mb-4">
//         ❌ Disadvantages of Selection Sort
//       </h2>
//       <ul className="list-disc list-inside space-y-2">
//         <li>Has a time complexity of <span className="text-yellow-300">O(n²)</span>, making it slower than Quick Sort or Merge Sort.</li>
//         <li>Does not maintain the relative order of equal elements, meaning it is <span className="text-yellow-300">not stable</span>.</li>
//       </ul>
//     </div>

// {/* application section  code */}

//     <div className="text-gray-200 bg-gradient-to-b from-gray-900 to-black p-8 rounded-lg shadow-lg border border-gray-700 leading-relaxed tracking-wide">
//       <h2 className="text-blue-400 font-semibold text-2xl mb-4">
//         📌 Applications of Selection Sort
//       </h2>
//       <ul className="list-disc list-inside space-y-2">
//         <li>
//           Perfect for teaching fundamental sorting mechanisms and algorithm design.
//         </li>
//         <li>
//           Suitable for small lists where the overhead of more complex algorithms isn’t justified, especially when memory writing is costly.
//         </li>
//         <li>
//           <span className="text-yellow-300">Heap Sort</span> algorithm is based on Selection Sort.
//         </li>
//       </ul>
//     </div>


//     {/* image section  */}

//     <div className="flex justify-center items-center p-6">
//           <img 
//             src={SELECTION_SORT_IMG} 
//             alt="Selection Sort Visualization" 
//             className="max-w-full h-auto rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105" />
//           </div>

//           <div>
//             <p className='text-xl text-gray-200 bg-gradient-to-r from-gray-800 via-gray-900 to-black p-6 rounded-lg shadow-lg border border-gray-700 leading-relaxed tracking-wide'>
//              These Figure shows the entire sorting process. On each pass, the largest remaining item is selected and then placed in its proper location. The first pass places 93, the second pass places 77, the third places 55, and so on.
//             </p>
//           </div>

//     {/* gfg button link code */}

//     {/* <div className="text-left my-6 p-4 border-l-4 border-blue-500 bg-gray-50 rounded-lg shadow-md">
//   <p className="text-lg text-gray-800 leading-relaxed">
//     Try it on 
//     <a href="https://www.geeksforgeeks.org/selection-sort/" target="_blank" rel="noopener noreferrer" 
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



// import React, { useEffect, useState } from "react";
// import SELECTION_SORT_1 from "../../assets/Selection-Sort-Algorithm-1.webp";
// import SELECTION_SORT_2 from "../../assets/Selection-Sort-Algorithm-2.webp";
// import SELECTION_SORT_3 from "../../assets/Selection-Sort-Algorithm-3.webp";
// import SELECTION_SORT_4 from "../../assets/Selection-Sort-Algorithm-4.webp";
// import SELECTION_SORT_5 from "../../assets/Selection-Sort-Algorithm-5.webp";
// import SELECTION_SORT_6 from "../../assets/Selection-Sort-Algorithm-6.webp";



// export const Selection = () => {
//   const [array, setArray] = useState([]);
//   const [speed, setSpeed] = useState(300);
//   const [isSorting, setIsSorting] = useState(false);
//   const [inputValue, setInputValue] = useState("");
//   const [activeIndices, setActiveIndices] = useState([]);
//   const [sortedBoundary, setSortedBoundary] = useState(null);

//   useEffect(() => {
//     generateNewArray();
//   }, []);

//   const generateNewArray = () => {
//     const newArr = Array.from({ length: 25 }, () => Math.floor(Math.random() * 100) + 5);
//     setArray(newArr);
//     setActiveIndices([]);
//     setSortedBoundary(null);
//   };

//   const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

//   const selectionSort = async () => {
//     setIsSorting(true);
//     let arr = [...array];
//     let n = arr.length;

//     for (let i = 0; i < n - 1; i++) {
//       let minIndex = i;
//       for (let j = i + 1; j < n; j++) {
//         setActiveIndices([minIndex, j]);
//         if (arr[j] < arr[minIndex]) {
//           minIndex = j;
//         }
//         await sleep(speed);
//       }

//       if (minIndex !== i) {
//         [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
//         setArray([...arr]);
//       }

//       setSortedBoundary(i + 1);
//     }

//     setActiveIndices([]);
//     setSortedBoundary(n);
//     setIsSorting(false);
//   };

//   const handleAddValue = () => {
//     if (inputValue.trim() === "") return;
//     const values = inputValue
//       .split(",")
//       .map((v) => parseInt(v.trim(), 10))
//       .filter((v) => !isNaN(v) && v > 0);
//     if (values.length > 0) {
//       setArray(values);
//       setInputValue("");
//       setSortedBoundary(null);
//     }
//   };

//   return (
//     <div className="mt-24 px-4 md:px-24 flex flex-col gap-10">
//       <h1 className="text-center text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-green-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent py-6 tracking-tight transition-transform hover:scale-105 hover:drop-shadow-[0_5px_25px_rgba(0,150,255,0.4)]">
//         Selection Sort Algorithm
//       </h1>

//       {/* Controls */}
//       <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
//         <button
//           className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
//           onClick={generateNewArray}
//           disabled={isSorting}
//         >
//           Generate New Array
//         </button>

//         <input
//           type="text"
//           className="border px-3 py-2 rounded"
//           placeholder="Enter numbers e.g. 10,20,30"
//           value={inputValue}
//           onChange={(e) => setInputValue(e.target.value)}
//           disabled={isSorting}
//         />

//         <button
//           className="px-4 py-2 bg-green-600 text-white rounded disabled:opacity-50"
//           onClick={handleAddValue}
//           disabled={isSorting}
//         >
//           Add Values
//         </button>

//         <button
//           className="px-4 py-2 bg-purple-700 text-white rounded disabled:opacity-50"
//           onClick={selectionSort}
//           disabled={isSorting}
//         >
//           Start Selection Sort
//         </button>

//         <div className="flex items-center gap-2">
//           <input
//             type="range"
//             min="50"
//             max="1000"
//             step="50"
//             value={speed}
//             onChange={(e) => setSpeed(Number(e.target.value))}
//             className="w-40"
//           />
//           <span>Speed: {speed}ms</span>
//         </div>
//       </div>

//       {/* Array Bars */}
//       <div className="flex items-end justify-center gap-1 h-64 border p-2 bg-gray-50 rounded">
//         {array.map((value, idx) => {
//           let barColor = "bg-blue-500";
//           if (activeIndices.includes(idx)) barColor = "bg-red-500";
//           else if (sortedBoundary !== null && idx < sortedBoundary) barColor = "bg-green-500";

//           return (
//             <div
//               key={idx}
//               className={`flex flex-col items-center justify-end ${barColor} rounded-md`}
//               style={{
//                 height: `${value * 2.5}px`,
//                 width: "24px",
//                 transition: "height 0.3s ease, background-color 0.3s ease",
//               }}
//               title={`Value: ${value}`}
//             >
//               <span className="text-xs text-white font-bold mb-1">{value}</span>
//             </div>
//           );
//         })}
//       </div>

//       {/* Explanation */}
//       <div className="p-6 bg-white rounded-xl shadow-md max-w-4xl mx-auto mt-12">
//         <h2 className="text-2xl font-bold text-indigo-700 mb-4">📋 Selection Sort Explanation</h2>

//         <p className="mb-4 text-gray-700">
//           <strong>Selection Sort</strong> is a simple comparison-based algorithm. It repeatedly selects the
//           <span className="text-green-600 font-semibold"> minimum element</span> from the unsorted part and places it at the beginning.
//         </p>

//         <p className="mb-4 text-gray-700">
//           This algorithm divides the input list into two parts: the sublist of items already sorted, and the remaining sublist of items to be sorted.
//         </p>

//         <h3 className="text-xl font-semibold text-gray-800 mb-2">🔍 How It Works:</h3>
//         <ul className="list-disc pl-6 text-gray-700 space-y-2">
//           <li>Start from the first element and search the smallest element in the remaining unsorted part.</li>
//           <li>Swap the smallest with the first unsorted element.</li>
//           <li>Move the boundary of the sorted section one element to the right.</li>
//         </ul>

//         <div className="mt-6 bg-gray-100 p-4 rounded-md text-sm text-gray-800">
//           <h4 className="font-semibold text-gray-900 mb-2">⏱️ Time Complexity:</h4>
//           <ul className="list-disc pl-5 space-y-1">
//             <li><strong>Best Case:</strong> O(n²)</li>
//             <li><strong>Average Case:</strong> O(n²)</li>
//             <li><strong>Worst Case:</strong> O(n²)</li>
//             <li><strong>Space Complexity:</strong> O(1) — In-place</li>
//           </ul>
//         </div>
//       </div>

//       {/* Images */}
//       {[SELECTION_SORT_1, SELECTION_SORT_2, SELECTION_SORT_3, SELECTION_SORT_4, SELECTION_SORT_5, SELECTION_SORT_6].map((src, i) => (
//         <div key={i} className="flex justify-center mt-8">
//           <img src={src} alt={`Selection Sort Step ${i + 1}`} className="max-w-full h-auto rounded-lg shadow-lg" />
//         </div>
//       ))}

//       {/* Pros and Cons */}
//       <div className="p-6 bg-white rounded-lg shadow-md max-w-4xl mx-auto my-8">
//         <h2 className="text-2xl font-bold text-indigo-700 mb-4">⚖️ Advantages and Disadvantages of Selection Sort</h2>

//         <div className="mb-6">
//           <h3 className="text-xl font-semibold text-green-600 mb-2">✅ Advantages:</h3>
//           <ul className="list-disc list-inside text-gray-800 space-y-2">
//             <li>Easy to implement and understand</li>
//             <li>Does not require additional memory (in-place)</li>
//             <li>Performs well on small data sets</li>
//           </ul>
//         </div>

//         <div>
//           <h3 className="text-xl font-semibold text-red-600 mb-2">❌ Disadvantages:</h3>
//           <ul className="list-disc list-inside text-gray-800 space-y-2">
//             <li>Not efficient for large data sets — O(n²) complexity</li>
//             <li>Unstable sort (relative order of equal items not preserved)</li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };



//new code


import React, { useEffect, useState } from "react";
import SELECTION_SORT_1 from "../../assets/Selection-Sort-Algorithm-1.webp";
import SELECTION_SORT_2 from "../../assets/Selection-Sort-Algorithm-2.webp";
import SELECTION_SORT_3 from "../../assets/Selection-Sort-Algorithm-3.webp";
import SELECTION_SORT_4 from "../../assets/Selection-Sort-Algorithm-4.webp";
import SELECTION_SORT_5 from "../../assets/Selection-Sort-Algorithm-5.webp";
import SELECTION_SORT_6 from "../../assets/Selection-Sort-Algorithm-6.webp";

export const Selection = () => {
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

  const selectionSort = async () => {
    setIsSorting(true);
    let arr = [...array];
    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < n; j++) {
        setActiveIndices([minIndex, j]);
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
        await sleep(speed);
      }

      if (minIndex !== i) {
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        setArray([...arr]);
      }

      setSortedBoundary(i + 1);
    }

    setActiveIndices([]);
    setSortedBoundary(n);
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
  Selection Sort Algorithm
</h1>

      {/* Controls */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
          onClick={generateNewArray}
          disabled={isSorting}
        >
          Generate New Array
        </button>

        <input
          type="text"
          className="border px-3 py-2 rounded"
          placeholder="Enter numbers e.g. 10,20,30"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          disabled={isSorting}
        />

        <button
          className="px-4 py-2 bg-green-600 text-white rounded disabled:opacity-50"
          onClick={handleAddValue}
          disabled={isSorting}
        >
          Add Values
        </button>

        <button
          className="px-4 py-2 bg-purple-700 text-white rounded disabled:opacity-50"
          onClick={selectionSort}
          disabled={isSorting}
        >
          Start Selection Sort
        </button>

        <div className="flex items-center gap-2">
          <input
            type="range"
            min="50"
            max="1000"
            step="50"
            value={speed}
            onChange={(e) => setSpeed(Number(e.target.value))}
            className="w-40"
          />
          <span>Speed: {speed}ms</span>
        </div>
      </div>

      {/* Color Legend */}
<div className="flex justify-center gap-6 mb-4 text-sm font-medium">
  <div className="flex items-center gap-2">
    <div className="w-4 h-4 bg-red-500 rounded"></div>
    <span>Comparing</span>
  </div>
  <div className="flex items-center gap-2">
    <div className="w-4 h-4 bg-green-500 rounded"></div>
    <span> Sorted</span>
  </div>
  <div className="flex items-center gap-2">
    <div className="w-4 h-4 bg-blue-500 rounded"></div>
    <span> Unsorted</span>
  </div>
</div>

{/* Array Bars */}
<div className="flex items-end justify-center gap-1 h-64 border p-2 bg-gray-50 rounded">
  {array.map((value, idx) => {
    let barColor = "bg-blue-500"; // default: unsorted
    if (activeIndices.includes(idx)) barColor = "bg-red-500"; // comparing
    else if (sortedBoundary !== null && idx < sortedBoundary) barColor = "bg-green-500"; // sorted

    return (
      <div
        key={idx}
        className={`flex flex-col items-center justify-end ${barColor} rounded-md`}
        style={{
          height: `${value * 2.5}px`,
          width: "24px",
          transition: "height 0.3s ease, background-color 0.3s ease",
        }}
        title={`Value: ${value}`}
      >
        <span className="text-xs text-white font-bold mb-1">{value}</span>
      </div>
    );
  })}
</div>


      {/* Explanation Section */}
      <div className="p-6 bg-white rounded-xl shadow-md max-w-4xl mx-auto mt-12">
        <h2 className="text-2xl font-bold text-indigo-700 mb-4">📋 Selection Sort Explanation</h2>

        <p className="mb-4 text-gray-700">
          <strong>Selection Sort</strong> is a simple comparison-based algorithm. It repeatedly selects the
          <span className="text-green-600 font-semibold"> minimum element</span> from the unsorted part and places it at the beginning.
        </p>

        <p className="mb-4 text-gray-700">
          This algorithm divides the input list into two parts: the sublist of items already sorted, and the remaining sublist of items to be sorted.
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mb-2">🔍 How It Works:</h3>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Start from the first element and search the smallest element in the remaining unsorted part.</li>
          <li>Swap the smallest with the first unsorted element.</li>
          <li>Move the boundary of the sorted section one element to the right.</li>
        </ul>

        <div className="mt-6 bg-gray-100 p-4 rounded-md text-sm text-gray-800">
          <h4 className="font-semibold text-gray-900 mb-2">⏱️ Time Complexity:</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Best Case:</strong> O(n²)</li>
            <li><strong>Average Case:</strong> O(n²)</li>
            <li><strong>Worst Case:</strong> O(n²)</li>
            <li><strong>Space Complexity:</strong> O(1) — In-place</li>
          </ul>
        </div>
      </div>

      {/* Step-by-Step Images */}
      {[SELECTION_SORT_1, SELECTION_SORT_2, SELECTION_SORT_3, SELECTION_SORT_4, SELECTION_SORT_5, SELECTION_SORT_6].map((src, i) => (
        <div key={i} className="flex justify-center mt-8">
          <img src={src} alt={`Selection Sort Step ${i + 1}`} className="max-w-full h-auto rounded-lg shadow-lg" />
        </div>
      ))}

      {/* Pros and Cons */}
      <div className="p-6 bg-white rounded-lg shadow-md max-w-4xl mx-auto my-8">
        <h2 className="text-2xl font-bold text-indigo-700 mb-4">⚖️ Advantages and Disadvantages of Selection Sort</h2>

        <div className="mb-6">
          <h3 className="text-xl font-semibold text-green-600 mb-2">✅ Advantages:</h3>
          <ul className="list-disc list-inside text-gray-800 space-y-2">
            <li>Easy to implement and understand</li>
            <li>Does not require additional memory (in-place)</li>
            <li>Performs well on small data sets</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-red-600 mb-2">❌ Disadvantages:</h3>
          <ul className="list-disc list-inside text-gray-800 space-y-2">
            <li>Not efficient for large data sets — O(n²) complexity</li>
            <li>Unstable sort (relative order of equal items not preserved)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

