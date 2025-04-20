// import React, { useState, useEffect, useRef } from 'react';

// export const QuickVisualize = () => {
//   const [array, setArray] = useState([]);
//   const [speed, setSpeed] = useState(300);
//   const [isSorting, setIsSorting] = useState(false);
//   const [isPaused, setIsPaused] = useState(false);
//   const [inputValue, setInputValue] = useState("");
//   const [activeIndices, setActiveIndices] = useState([]);
//   const [sortedIndices, setSortedIndices] = useState([]);

//   const speedRef = useRef(speed);
//   const isPausedRef = useRef(isPaused);

//   useEffect(() => {
//     generateNewArray();
//   }, []);

//   useEffect(() => {
//     speedRef.current = speed;
//   }, [speed]);

//   useEffect(() => {
//     isPausedRef.current = isPaused;
//   }, [isPaused]);

//   const generateNewArray = () => {
//     const newArr = Array.from({ length: 25 }, () => Math.floor(Math.random() * 100) + 5);
//     setArray(newArr);
//     setActiveIndices([]);
//     setSortedIndices([]);
//     setIsPaused(false);
//   };

//   const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

//   const checkPaused = async () => {
//     while (isPausedRef.current) {
//       await sleep(100);
//     }
//   };

//   const quickSort = async (arr, low, high) => {
//     if (low < high) {
//       const pi = await partition(arr, low, high);
//       await quickSort(arr, low, pi - 1);
//       await quickSort(arr, pi + 1, high);
//     } else if (low === high) {
//       setSortedIndices(prev => [...new Set([...prev, low])]);
//     }
//   };

//   const partition = async (arr, low, high) => {
//     let pivot = arr[high];
//     let i = low - 1;

//     for (let j = low; j < high; j++) {
//       await checkPaused();
//       setActiveIndices([j, high]);
//       if (arr[j] < pivot) {
//         i++;
//         [arr[i], arr[j]] = [arr[j], arr[i]];
//         setArray([...arr]);
//         await sleep(speedRef.current);
//       }
//     }

//     [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
//     setArray([...arr]);
//     setSortedIndices(prev => [...new Set([...prev, i + 1])]);
//     await sleep(speedRef.current);
//     return i + 1;
//   };

//   const startQuickSort = async () => {
//     setIsSorting(true);
//     setIsPaused(false);
//     let arrCopy = [...array];
//     await quickSort(arrCopy, 0, arrCopy.length - 1);
//     setSortedIndices([...Array(arrCopy.length).keys()]);
//     setActiveIndices([]);
//     setIsSorting(false);
//   };

//   const handleAddValue = () => {
//     if (inputValue.trim() === "") return;
//     const values = inputValue
//       .split(',')
//       .map(v => parseInt(v.trim(), 10))
//       .filter(v => !isNaN(v) && v > 0);
//     if (values.length > 0) {
//       setArray(values);
//       setInputValue("");
//       setSortedIndices([]);
//     }
//   };

//   const getBarColor = (idx) => {
//     if (activeIndices.includes(idx)) return "bg-yellow-400";
//     if (sortedIndices.includes(idx)) return "bg-green-500";
//     return "bg-blue-400";
//   };

//   return (
//     <div className="min-h-screen w-full bg-gradient-to-br from-white to-blue-100 p-8">
//       <div className="max-w-7xl mx-auto flex flex-col gap-8">

//         <h1 className="text-6xl font-bold text-center text-gray-800 mt-9 mb-4">
//           Quick Sort Visualizer
//         </h1>

//         {/* Controls */}
//         <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
//           <input
//             type="text"
//             placeholder="Enter comma-separated numbers"
//             value={inputValue}
//             onChange={(e) => setInputValue(e.target.value)}
//             disabled={isSorting}
//             className="w-full md:w-96 px-4 py-2 rounded-md shadow-md border border-gray-300"
//           />
//           <button
//             onClick={handleAddValue}
//             disabled={isSorting}
//             className={`px-6 py-2 font-semibold rounded-md shadow-md text-white ${isSorting ? 'bg-gray-500' : 'bg-green-500 hover:bg-green-600'}`}
//           >
//             Add Values
//           </button>
//         </div>

//         <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
//           <button
//             onClick={startQuickSort}
//             disabled={isSorting}
//             className={`px-6 py-3 font-bold rounded-lg shadow-md text-white ${isSorting ? 'bg-gray-500' : 'bg-pink-600 hover:bg-pink-700'}`}
//           >
//             {isSorting ? 'Sorting...' : 'Start Quick Sort'}
//           </button>

//           <button
//             onClick={() => setIsPaused(prev => !prev)}
//             disabled={!isSorting}
//             className={`px-6 py-3 font-bold rounded-lg shadow-md text-white ${!isSorting ? 'bg-gray-500' : isPaused ? 'bg-yellow-500 hover:bg-yellow-600' : 'bg-purple-600 hover:bg-purple-700'}`}
//           >
//             {isPaused ? 'Resume' : 'Pause'}
//           </button>

//           <div className="flex flex-col items-center">
//             <label htmlFor="speedSlider" className="text-gray-700 font-medium">
//               Speed: {speed}ms
//             </label>
//             <input
//               type="range"
//               id="speedSlider"
//               min="50"
//               max="1000"
//               step="50"
//               value={speed}
//               onChange={(e) => setSpeed(Number(e.target.value))}
//               className="w-64"
//             />
//           </div>

//           <button
//             onClick={generateNewArray}
//             disabled={isSorting}
//             className={`px-6 py-3 font-bold rounded-lg shadow-md text-white ${isSorting ? 'bg-gray-500' : 'bg-blue-600 hover:bg-blue-700'}`}
//           >
//             New Array
//           </button>
//         </div>

//         {/* Legend */}
//         <div className="flex justify-center gap-6 text-sm text-gray-700 font-medium">
//           <div className="flex items-center gap-2"><div className="w-5 h-5 bg-blue-400 rounded-sm"></div> Unsorted</div>
//           <div className="flex items-center gap-2"><div className="w-5 h-5 bg-yellow-400 rounded-sm"></div> Pivot/Comparing</div>
//           <div className="flex items-center gap-2"><div className="w-5 h-5 bg-green-500 rounded-sm"></div> Sorted</div>
//         </div>

//         {/* Graph */}
//         <div className="relative overflow-x-auto border border-gray-300 rounded-lg bg-white shadow-md p-6">
//           <div className="absolute left-0 top-0 bottom-0 w-12 flex flex-col justify-end items-end pr-2 text-sm text-gray-500 font-medium">
//             {[...Array(11)].map((_, i) => {
//               const val = 10 * i;
//               return (
//                 <div key={i} style={{ height: '50px' }} className="flex items-center justify-end w-full relative">
//                   <span className="absolute -top-2">{100 - val}</span>
//                   <div className="absolute right-0 w-[calc(100vw-5rem)] border-t border-gray-200"></div>
//                 </div>
//               );
//             })}
//           </div>

//           <div className="absolute bottom-6 left-12 right-6 h-px bg-gray-400 z-10"></div>

//           <div className="ml-14 flex items-end h-[550px] gap-2 relative z-20">
//             {array.map((value, idx) => (
//               <div key={idx} className="flex flex-col items-center w-10 relative">
//                 <div className="absolute -top-6 text-gray-700 text-sm font-medium">
//                   {value}
//                 </div>
//                 <div
//                   style={{ height: `${value * 5}px` }}
//                   className={`w-full ${getBarColor(idx)} rounded-t-md transition-all duration-300 shadow-sm`}
//                 />
//               </div>
//             ))}
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default QuickVisualize;



import React, { useState, useEffect, useRef } from 'react';

export const QuickVisualize = () => {
  const [array, setArray] = useState([]);
  const [speed, setSpeed] = useState(300);
  const [isSorting, setIsSorting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [activeIndices, setActiveIndices] = useState([]);
  const [sortedIndices, setSortedIndices] = useState([]);
  const [description, setDescription] = useState("Click 'Start Quick Sort' to begin visualization.");

  const speedRef = useRef(speed);
  const isPausedRef = useRef(isPaused);

  useEffect(() => {
    generateNewArray();
  }, []);

  useEffect(() => {
    speedRef.current = speed;
  }, [speed]);

  useEffect(() => {
    isPausedRef.current = isPaused;
  }, [isPaused]);

  const generateNewArray = () => {
    const newArr = Array.from({ length: 25 }, () => Math.floor(Math.random() * 100) + 5);
    setArray(newArr);
    setActiveIndices([]);
    setSortedIndices([]);
    setIsPaused(false);
    setDescription("Click 'Start Quick Sort' to begin visualization.");
  };

  const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  const checkPaused = async () => {
    while (isPausedRef.current) {
      await sleep(100);
    }
  };

  const partition = async (arr, low, high) => {
    let pivot = arr[high];
    setDescription(`Pivot selected: ${pivot} at index ${high}`);
    let i = low - 1;

    for (let j = low; j < high; j++) {
      setActiveIndices([j, high]);
      setDescription(`Comparing ${arr[j]} with pivot ${pivot}`);
      await sleep(speedRef.current);
      await checkPaused();

      if (arr[j] < pivot) {
        i++;
        [arr[i], arr[j]] = [arr[j], arr[i]];
        setArray([...arr]);
        setDescription(`Swapping ${arr[i]} and ${arr[j]}`);
        await sleep(speedRef.current);
      }
    }

    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    setArray([...arr]);
    setDescription(`Placing pivot in correct position by swapping ${arr[i + 1]} with ${arr[high]}`);
    await sleep(speedRef.current);
    setSortedIndices(prev => [...new Set([...prev, i + 1])]);

    return i + 1;
  };

  const quickSort = async (arr, low, high) => {
    if (low < high) {
      setDescription(`Sorting subarray from index ${low} to ${high}.`);
      const pi = await partition(arr, low, high);
      setDescription(`Pivot placed at index ${pi}. Now sorting left and right subarrays.`);
      await quickSort(arr, low, pi - 1);
      await quickSort(arr, pi + 1, high);
    } else if (low === high) {
      setSortedIndices(prev => [...new Set([...prev, low])]);
      setDescription(`Single element at index ${low} is already sorted.`);
    }
  };

  const startQuickSort = async () => {
    setIsSorting(true);
    setIsPaused(false);
    let arrCopy = [...array];
    await quickSort(arrCopy, 0, arrCopy.length - 1);
    setActiveIndices([]);
    setIsSorting(false);
    setDescription("Quick Sort is complete. Array is sorted.");
  };

  const handleAddValue = () => {
    if (inputValue.trim() === "") return;
    const values = inputValue
      .split(',')
      .map(v => parseInt(v.trim(), 10))
      .filter(v => !isNaN(v) && v > 0);
    if (values.length > 0) {
      setArray(values);
      setInputValue("");
      setSortedIndices([]);
      setDescription("New array added. Click 'Start Quick Sort' to visualize.");
    }
  };

  const getBarColor = (idx) => {
    if (activeIndices.includes(idx)) return "bg-yellow-400";
    if (sortedIndices.includes(idx)) return "bg-green-500";
    return "bg-blue-400";
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-white to-blue-100 p-8">
      <div className="max-w-7xl mx-auto flex flex-col gap-8">

        <h1 className="text-6xl font-bold text-center text-gray-800 mt-9 mb-4">
          Quick Sort Visualizer
        </h1>

        {/* Controls */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
          <input
            type="text"
            placeholder="Enter comma-separated numbers"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            disabled={isSorting}
            className="w-full md:w-96 px-4 py-2 rounded-md shadow-md border border-gray-300"
          />
          <button
            onClick={handleAddValue}
            disabled={isSorting}
            className={`px-6 py-2 font-semibold rounded-md shadow-md text-white ${isSorting ? 'bg-gray-500' : 'bg-green-500 hover:bg-green-600'}`}
          >
            Add Values
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
          <button
            onClick={startQuickSort}
            disabled={isSorting}
            className={`px-6 py-3 font-bold rounded-lg shadow-md text-white ${isSorting ? 'bg-gray-500' : 'bg-pink-600 hover:bg-pink-700'}`}
          >
            {isSorting ? 'Sorting...' : 'Start Quick Sort'}
          </button>

          <button
            onClick={() => setIsPaused(prev => !prev)}
            disabled={!isSorting}
            className={`px-6 py-3 font-bold rounded-lg shadow-md text-white ${!isSorting ? 'bg-gray-500' : isPaused ? 'bg-yellow-500 hover:bg-yellow-600' : 'bg-purple-600 hover:bg-purple-700'}`}
          >
            {isPaused ? 'Resume' : 'Pause'}
          </button>

          <div className="flex flex-col items-center">
            <label htmlFor="speedSlider" className="text-gray-700 font-medium">
              Speed: {speed}ms
            </label>
            <input
              type="range"
              id="speedSlider"
              min="50"
              max="1000"
              step="50"
              value={speed}
              onChange={(e) => setSpeed(Number(e.target.value))}
              className="w-64"
            />
          </div>

          <button
            onClick={generateNewArray}
            disabled={isSorting}
            className={`px-6 py-3 font-bold rounded-lg shadow-md text-white ${isSorting ? 'bg-gray-500' : 'bg-blue-600 hover:bg-blue-700'}`}
          >
            New Array
          </button>
        </div>

        {/* Description */}
        <div className="text-lg font-medium text-gray-700 bg-yellow-50 border border-yellow-300 rounded-md p-4 shadow-sm text-center">
          {description}
        </div>

        {/* Legend */}
        <div className="flex justify-center gap-6 text-sm text-gray-700 font-medium">
          <div className="flex items-center gap-2"><div className="w-5 h-5 bg-blue-400 rounded-sm"></div> Unsorted</div>
          <div className="flex items-center gap-2"><div className="w-5 h-5 bg-yellow-400 rounded-sm"></div> Comparing</div>
          <div className="flex items-center gap-2"><div className="w-5 h-5 bg-green-500 rounded-sm"></div> Sorted</div>
        </div>

        {/* Graph */}
        <div className="relative overflow-x-auto border border-gray-300 rounded-lg bg-white shadow-md p-6">
          <div className="absolute left-0 top-0 bottom-0 w-12 flex flex-col justify-end items-end pr-2 text-sm text-gray-500 font-medium">
            {[...Array(11)].map((_, i) => {
              const val = 10 * i;
              return (
                <div key={i} style={{ height: '50px' }} className="flex items-center justify-end w-full relative">
                  <span className="absolute -top-2">{100 - val}</span>
                  <div className="absolute right-0 w-[calc(100vw-5rem)] border-t border-gray-200"></div>
                </div>
              );
            })}
          </div>

          <div className="absolute bottom-6 left-12 right-6 h-px bg-gray-400 z-10"></div>

          <div className="ml-14 flex items-end h-[550px] gap-2 relative z-20">
            {array.map((value, idx) => (
              <div key={idx} className="flex flex-col items-center w-10 relative">
                <div className="absolute -top-6 text-gray-700 text-sm font-medium">
                  {value}
                </div>
                <div
                  style={{ height: `${value * 5}px` }}
                  className={`w-full ${getBarColor(idx)} rounded-t-md transition-all duration-300 shadow-sm`}
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default QuickVisualize;
