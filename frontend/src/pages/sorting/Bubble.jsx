



// //new code
// import React, { useEffect, useState } from "react";
// import BUBBLE_SORT_1 from "../../assets/bubble-sort-1.webp";
// import BUBBLE_SORT_2 from "../../assets/bubble-sort-2.webp";
// import BUBBLE_SORT_3 from "../../assets/bubble-sort-3.webp";

// export const Bubble = () => {
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

//   const bubbleSort = async () => {
//     setIsSorting(true);
//     let arr = [...array];
//     let n = arr.length;

//     for (let i = 0; i < n - 1; i++) {
//       for (let j = 0; j < n - i - 1; j++) {
//         setActiveIndices([j, j + 1]);
//         if (arr[j] > arr[j + 1]) {
//           [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//           setArray([...arr]);
//         }
//         await sleep(speed);
//       }
//       setSortedBoundary(n - i - 1); // marks the last sorted element
//     }

//     setActiveIndices([]);
//     setSortedBoundary(0); // all sorted
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

//     // heading
//     <div className='mt-24 px-4 md:px-24 flex flex-col gap-10'>
//        <h1 className="text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent px-4 py-6 leading-tight tracking-tight transition-transform duration-300 ease-in-out transform hover:scale-105 hover:drop-shadow-[0_5px_25px_rgba(100,100,255,0.4)]">
//       Bubble Sort Algorithm
//     </h1>

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
//           onClick={bubbleSort}
//           disabled={isSorting}
//         >
//           Start Bubble Sort
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

//       <div className="flex items-end justify-center gap-1 h-64 border p-2 bg-gray-50 rounded">
//         {array.map((value, idx) => {
//           let barColor = "bg-blue-500"; // Default color
//           if (activeIndices.includes(idx)) barColor = "bg-red-500"; // Comparing
//           else if (sortedBoundary !== null && idx >= sortedBoundary) barColor = "bg-green-500"; // Sorted

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
//       {/* Bubble Sort Explanation */}
//       <div className="p-6 bg-white rounded-xl shadow-md max-w-4xl mx-auto mt-12">
//       <h2 className="text-2xl font-bold text-purple-700 mb-4">🔁 Bubble Sort Explanation</h2>

//       <p className="mb-4 text-gray-700">
//         <strong>Bubble Sort</strong> is the simplest sorting algorithm that works by repeatedly
//         <span className="text-blue-600 font-semibold"> swapping adjacent elements</span> if they are in the wrong order.
//       </p>

//       <p className="mb-4 text-gray-700">
//         This algorithm is <span className="text-red-600 font-semibold">not suitable for large data sets</span> 
//         as its average and worst-case time complexity are quite high.
//       </p>

//       <h3 className="text-xl font-semibold text-gray-800 mb-2">📌 How It Works:</h3>
//       <ul className="list-disc pl-6 text-gray-700 space-y-2">
//         <li>We sort the array using <strong>multiple passes</strong>.</li>
//         <li>After the <strong>first pass</strong>, the <span className="text-green-600">maximum element moves to the end</span> (its correct position).</li>
//         <li>After the <strong>second pass</strong>, the second largest moves to the second last position, and so on.</li>
//         <li>In every pass, we process only those elements that haven't already moved to their correct position.</li>
//         <li>After <code>k</code> passes, the <code>k</code> largest elements are at the last <code>k</code> positions.</li>
//         <li>In a pass, we compare adjacent elements and <span className="text-blue-500 font-semibold">swap if the left one is larger</span> than the right one.</li>
//       </ul>

//       <div className="mt-6 bg-gray-100 p-4 rounded-md text-sm text-gray-800">
//         <h4 className="font-semibold text-gray-900 mb-2">🔧 Time Complexity:</h4>
//         <ul className="list-disc pl-5 space-y-1">
//           <li><strong>Best Case:</strong> O(n) — when the array is already sorted</li>
//           <li><strong>Average Case:</strong> O(n²)</li>
//           <li><strong>Worst Case:</strong> O(n²)</li>
//           <li><strong>Space Complexity:</strong> O(1) — In-place algorithm</li>
//         </ul>
//       </div>
//     </div>

//             {/* image section */}
//            <div className="flex justify-center mt-8">
//             <img src={BUBBLE_SORT_1} alt="Merge Sort" className="max-w-full h-auto rounded-lg shadow-lg" />
//           </div>

//           <div className="flex justify-center mt-8">
//             <img src={BUBBLE_SORT_2} alt="Merge Sort" className="max-w-full h-auto rounded-lg shadow-lg" />
//           </div>

//           <div className="flex justify-center mt-8">
//             <img src={BUBBLE_SORT_3} alt="Merge Sort" className="max-w-full h-auto rounded-lg shadow-lg" />
//           </div>

//           {/* Advantages and Disadvantages of Bubble Sort</h2>*/}

//           <div className="p-6 bg-white rounded-lg shadow-md max-w-4xl mx-auto my-8">
//       <h2 className="text-2xl font-bold text-purple-700 mb-4">📈 Advantages and Disadvantages of Bubble Sort</h2>

//       <div className="mb-6">
//         <h3 className="text-xl font-semibold text-green-600 mb-2">✅ Advantages:</h3>
//         <ul className="list-disc list-inside text-gray-800 space-y-2">
//           <li>Bubble sort is <strong>easy to understand and implement</strong>.</li>
//           <li>It does <strong>not require any additional memory space</strong>.</li>
//           <li>It is a <strong>stable sorting algorithm</strong>, meaning elements with the same key maintain their relative order.</li>
//         </ul>
//       </div>

//       <div>
//         <h3 className="text-xl font-semibold text-red-600 mb-2">❌ Disadvantages:</h3>
//         <ul className="list-disc list-inside text-gray-800 space-y-2">
//           <li>Bubble sort has a time complexity of <code>O(n²)</code> which makes it <strong>very slow for large data sets</strong>.</li>
//           <li>It has <strong>limited real-world applications</strong> and is mostly used for academic purposes.</li>
//         </ul>
//       </div>
//     </div>


//     </div>
//   );
// };




import React, { useEffect, useState } from "react";
import BUBBLE_SORT_1 from "../../assets/bubble-sort-1.webp";
import BUBBLE_SORT_2 from "../../assets/bubble-sort-2.webp";
import BUBBLE_SORT_3 from "../../assets/bubble-sort-3.webp";

export const Bubble = () => {
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

  const bubbleSort = async () => {
    setIsSorting(true);
    let arr = [...array];
    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        setActiveIndices([j, j + 1]);
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          setArray([...arr]);
        }
        await sleep(speed);
      }
      setSortedBoundary(n - i - 1);
    }

    setActiveIndices([]);
    setSortedBoundary(0);
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
      {/* Title */}
      <h1 className="text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent px-4 py-6 leading-tight tracking-tight transition-transform duration-300 ease-in-out transform hover:scale-105 hover:drop-shadow-[0_5px_25px_rgba(100,100,255,0.4)]">
  Bubble Sort Algorithm
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
          onClick={bubbleSort}
          disabled={isSorting}
        >
          Start Bubble Sort
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
<div className="flex justify-center gap-6 items-center mb-4 flex-wrap">
  <div className="flex items-center gap-2">
    <div className="w-6 h-6 bg-blue-500 rounded-sm"></div>
    <span className="text-sm text-gray-700">Unsorted Element</span>
  </div>
  <div className="flex items-center gap-2">
    <div className="w-6 h-6 bg-red-500 rounded-sm"></div>
    <span className="text-sm text-gray-700">Comparing Elements</span>
  </div>
  <div className="flex items-center gap-2">
    <div className="w-6 h-6 bg-green-500 rounded-sm"></div>
    <span className="text-sm text-gray-700">Sorted Element</span>
  </div>
</div>

      {/* Array Bars */}
      <div className="flex items-end justify-center gap-1 h-64 border p-2 bg-gray-50 rounded">
        {array.map((value, idx) => {
          let barColor = "bg-blue-500";
          if (activeIndices.includes(idx)) barColor = "bg-red-500";
          else if (sortedBoundary !== null && idx >= sortedBoundary) barColor = "bg-green-500";

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

      {/* Explanation */}
      <div className="p-6 bg-white rounded-xl shadow-md max-w-4xl mx-auto mt-12">
        <h2 className="text-2xl font-bold text-purple-700 mb-4">🔁 Bubble Sort Explanation</h2>

        <p className="mb-4 text-gray-700">
          <strong>Bubble Sort</strong> is a simple sorting algorithm that works by repeatedly
          <span className="text-blue-600 font-semibold"> swapping adjacent elements</span> if they are in the wrong order.
        </p>

        <p className="mb-4 text-gray-700">
          This algorithm is <span className="text-red-600 font-semibold">not suitable for large data sets</span> due to its high time complexity.
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mb-2">📌 How It Works:</h3>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Multiple passes are used to sort the array.</li>
          <li>After the <strong>first pass</strong>, the <span className="text-green-600">largest element moves to the end</span>.</li>
          <li>This continues, moving the next largest to its correct position in each pass.</li>
          <li>Each pass compares adjacent elements and swaps if needed.</li>
        </ul>

        <div className="mt-6 bg-gray-100 p-4 rounded-md text-sm text-gray-800">
          <h4 className="font-semibold text-gray-900 mb-2">🔧 Time Complexity:</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Best Case:</strong> O(n) — already sorted</li>
            <li><strong>Average Case:</strong> O(n²)</li>
            <li><strong>Worst Case:</strong> O(n²)</li>
            <li><strong>Space Complexity:</strong> O(1) — In-place</li>
          </ul>
        </div>
      </div>

      {/* Images */}
      {[BUBBLE_SORT_1, BUBBLE_SORT_2, BUBBLE_SORT_3].map((src, i) => (
        <div key={i} className="flex justify-center mt-8">
          <img src={src} alt={`Bubble Sort Step ${i + 1}`} className="max-w-full h-auto rounded-lg shadow-lg" />
        </div>
      ))}

      {/* Advantages & Disadvantages */}
      <div className="p-6 bg-white rounded-lg shadow-md max-w-4xl mx-auto my-8">
        <h2 className="text-2xl font-bold text-purple-700 mb-4">📈 Advantages and Disadvantages of Bubble Sort</h2>

        <div className="mb-6">
          <h3 className="text-xl font-semibold text-green-600 mb-2">✅ Advantages:</h3>
          <ul className="list-disc list-inside text-gray-800 space-y-2">
            <li>Easy to understand and implement</li>
            <li>Does not require additional memory (in-place)</li>
            <li>Stable sorting algorithm</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-red-600 mb-2">❌ Disadvantages:</h3>
          <ul className="list-disc list-inside text-gray-800 space-y-2">
            <li>Poor performance on large data sets — O(n²) complexity</li>
            <li>Rarely used in real-world scenarios</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
