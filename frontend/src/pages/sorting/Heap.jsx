// import React from 'react'
// import HEAP_SORT_IMG from "../../assets/Heap-sort-algo.png"
// import HEAP_SORT_STEP1 from "../../assets/heap-sort-step1.webp"
// import HEAP_SORT_STEP2 from "../../assets/heap-sort-step2.webp"
// import HEAP_SORT_STEP3 from "../../assets/heap-sort-step3.webp"
// export const Heap = () => {
//   return (
//     <div className='mt-24 px-24 flex flex-col gap-7'>

// {/* heap sort heading code... */}

//     <h1 className="text-center text-7xl font-extrabold bg-gradient-to-r from-blue-500 via-teal-400 to-purple-600 bg-clip-text text-transparent relative inline-block transition-all duration-300 ease-in-out hover:scale-105 hover:drop-shadow-lg after:content-[''] after:absolute after:left-0 after:bottom-[-5px] after:w-full after:h-1 after:bg-gradient-to-r after:from-blue-500 after:via-teal-400 after:to-purple-600 after:rounded-full after:transition-all after:duration-300 after:ease-in-out">
//       HEAP SORT
//     </h1>
    
// {/* heap sort paragraph code */}

//     <div className="text-xl text-gray-200 bg-gradient-to-r from-gray-800 via-gray-900 to-black p-6 rounded-lg shadow-lg border border-gray-700 leading-relaxed tracking-wide">
//     Heap sort is a comparison-based sorting technique based on the Binary Heap Data Structure. 
//     It can be seen as an optimization over selection sort, where we first find the max (or min) element 
//     and swap it with the last (or first). We repeat the same process for the remaining elements. 
//     In Heap Sort, we use a Binary Heap so that we can quickly find and move the max element in 
//     <span className="text-yellow-400 font-semibold"> O(Log n) </span> instead of 
//     <span className="text-yellow-400 font-semibold"> O(n) </span> and hence achieve the 
//     <span className="text-yellow-400 font-semibold"> O(n Log n) </span> time complexity.
//     </div>

// {/* heap sort first img example  ka code */}

//       <div className="flex justify-center items-center p-6">
//       <img 
//         src={HEAP_SORT_IMG} 
//         alt="Heap Sort Visualization" 
//         className="max-w-full h-auto rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105" />
//       </div>

// {/* heap sort another heading */}

//       <div className="text-center my-6">
//         <h2 className="text-4xl font-extrabold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-[-5px] after:w-full after:h-1 after:bg-gradient-to-r after:from-indigo-500 after:via-purple-500 after:to-pink-500 after:rounded-full after:transition-all after:duration-300  after:ease-in-out hover:after:scale-x-105 hover:drop-shadow-lg">
//         Heap Sort Algorithm
//         </h2>
//       </div>

// {/*heap sort algorithm paragraph  ka code..  */}

// <div className="bg-gray-900 text-gray-200 p-6 rounded-lg shadow-lg border border-gray-800">
//   <p className="text-lg leading-relaxed mb-4">
//     First, convert the array into a <span className="text-yellow-400 font-semibold">Max Heap</span> using heapify. 
//     Please note that this happens <span className="text-green-400 font-semibold">in-place</span>. 
//     The array elements are re-arranged to follow heap properties. 
//     Then, one by one, delete the root node of the Max-heap, replace it with the last node, and heapify. 
//     Repeat this process while the heap size is greater than 1.
//   </p>

//   <ul className="list-disc pl-6 space-y-2">
//     <li className="text-lg">
//       <span className="text-purple-400 font-semibold">Rearrange</span> array elements so that they form a Max Heap.
//     </li>

//     <li className="text-lg">
//       <span className="text-purple-400 font-semibold">Repeat</span> the following steps until the heap contains only one element:
//       <ul className="list-decimal pl-6 mt-2 space-y-2 text-base">
//         <li>
//           <span className="text-blue-400 font-semibold">Swap</span> the root element of the heap 
//           (which is the largest element in the current heap) with the last element of the heap.
//         </li>
//         <li>
//           <span className="text-blue-400 font-semibold">Remove</span> the last element of the heap (which is now in the correct position). 
//           We mainly reduce heap size and do not remove the element from the actual array.
//         </li>
//         <li>
//           <span className="text-blue-400 font-semibold">Heapify</span> the remaining elements of the heap.
//         </li>
//       </ul>
//     </li>

//     <li className="text-lg">
//       <span className="text-green-400 font-semibold">Finally</span>, we get a sorted array.
//     </li>
//   </ul>
// </div>

// {/* heap sort step by step working code.. */}
// {/* heap sort first heading ka code */}

//   <div>
//       <div className="text-center my-6">
//         <h2 className="text-5xl font-extrabold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
//             bg-clip-text text-transparent relative inline-block pb-2 
//             after:content-[''] after:absolute after:left-0 after:bottom-[-6px] after:w-full after:h-1.5 
//             after:bg-gradient-to-r after:from-indigo-500 after:via-purple-500 after:to-pink-500 
//             after:rounded-full after:transition-all after:duration-300 after:ease-in-out 
//             hover:after:w-[102%] hover:after:h-2 hover:drop-shadow-lg">
//               Detailed Working of Heap Sort
//         </h2>
//   </div>

// {/* code of step1 heading  */}

//     <div className="text-left my-4 pl-6">
//         <h3 className="text-2xl font-semibold text-black">
//              Step 1: Treat the Array as a Complete Binary Tree
//         </h3>
//     </div>

//     <div className="text-left my-6 p-4 border-l-4 border-blue-500">
//         <p className="text-lg text-gray-800 leading-relaxed">
//           We first need to visualize the array as a complete binary tree. For an array of size <strong>n</strong>,  
//           the root is at index <strong>0</strong>, the left child of an element at index <strong>i</strong> is at <strong>2i + 1</strong>,  
//           and the right child is at <strong>2i + 2</strong>.
//         </p>
//     <div className="mt-4 flex justify-center">
//       <img src={HEAP_SORT_STEP1} alt="Heap Sort Step 1" className="w-full max-w-lg rounded-lg shadow-lg" />
//     </div>
//   </div>
// </div>

// {/* heap sort step 2 and 3 code.. */}

//       <div className="text-left my-4 pl-6">
//             <h3 className="text-2xl font-semibold text-black">
//                 Step 2: Build a Max Heap
//             </h3>
//       </div>

//       <div className="text-left my-6 p-4 border-l-4 border-blue-500">
//           <p className="text-lg text-gray-800 leading-relaxed">
//               In this step, we build a <strong>Max Heap</strong> from the given array. A Max Heap ensures that the largest 
//               element is at the root, maintaining the heap property.
//           </p>
//         <div className="mt-4 flex justify-center">
//           <img src={HEAP_SORT_STEP2} alt="Heap Sort Step 2" className="w-full max-w-lg rounded-lg shadow-lg" />
//          </div>
//       </div>

//       <div className="text-left my-4 pl-6">
//           <h3 className="text-2xl font-semibold text-black">
//               Step 3: Sort the Array by Placing the Largest Element at the End
//           </h3>
//       </div>

//         <div className="text-left my-6 p-4 border-l-4 border-blue-500">
//               <p className="text-lg text-gray-800 leading-relaxed">
//                Now, we repeatedly swap the root (largest element) with the last element in the unsorted section and 
//               heapify the reduced heap to maintain the max heap property.
//               </p>
//            <div className="mt-4 flex justify-center">
//               <img src={HEAP_SORT_STEP3} alt="Heap Sort Step 3" className="w-full max-w-lg rounded-lg shadow-lg" />
//             </div>
//         </div>


// <div className="text-left my-6 pl-6">
//   <h3 className="text-2xl font-semibold text-black">
//     Complexity Analysis of Heap Sort
//   </h3>
// </div>

// <div className="text-left my-6 p-4 border-l-4 border-purple-500 bg-gray-50 rounded-lg shadow-md">
//   <p className="text-lg text-gray-800 leading-relaxed">
//     The **time complexity** and **space complexity** of Heap Sort depend on how it is implemented.
//   </p>

//   <div className="mt-4 p-4 bg-white rounded-lg shadow-md">
//     <p className="text-lg font-semibold text-purple-600">⏳ Time Complexity:</p>
//     <p className="text-gray-800">O(<strong>n log n</strong>)</p>
//   </div>

//   <div className="mt-4 p-4 bg-white rounded-lg shadow-md">
//     <p className="text-lg font-semibold text-purple-600">💾 Auxiliary Space:</p>
//     <p className="text-gray-800">
//       O(<strong>log n</strong>), due to the recursive call stack. However, for an **iterative implementation**, 
//       auxiliary space can be **O(1)**.
//     </p>
//   </div>
// </div>

// <div className="text-left my-6 pl-6">
//   <h3 className="text-2xl font-semibold text-black">
//     Advantages of Heap Sort
//   </h3>
// </div>

// <div className="text-left my-6 p-4 border-l-4 border-green-500 bg-gray-50 rounded-lg shadow-md">
//   <ul className="list-disc pl-6 space-y-3 text-gray-800">
//     <li>
//       <span className="font-semibold text-green-700">Efficient Time Complexity:</span> Heap Sort has a time complexity of 
//       <strong> O(n log n) </strong> in all cases, making it suitable for large datasets. The <strong>log n</strong> factor 
//       comes from the height of the binary heap, ensuring efficient performance.
//     </li>
//     <li>
//       <span className="font-semibold text-green-700">Memory Usage:</span> Memory usage can be minimal when an 
//       <strong> iterative heapify() </strong> is used instead of a recursive one. It requires no additional memory beyond 
//       storing the input elements.
//     </li>
//     <li>
//       <span className="font-semibold text-green-700">Simplicity:</span> Heap Sort is easier to understand compared to 
//       other sorting algorithms since it does not rely on complex concepts like recursion.
//     </li>
//   </ul>
// </div>

// <div className="text-left my-6 pl-6">
//   <h3 className="text-2xl font-semibold text-black">
//     Disadvantages of Heap Sort
//   </h3>
// </div>

// <div className="text-left my-6 p-4 border-l-4 border-red-500 bg-gray-50 rounded-lg shadow-md">
//   <ul className="list-disc pl-6 space-y-3 text-gray-800">
//     <li>
//       <span className="font-semibold text-red-700">Costly:</span> Heap Sort has a higher constant factor compared to 
//       <strong>Merge Sort</strong>, even though both have <strong>O(n log n)</strong> time complexity.
//     </li>
//     <li>
//       <span className="font-semibold text-red-700">Unstable:</span> Heap Sort is an <strong>unstable</strong> sorting algorithm, 
//       meaning it may not maintain the relative order of equal elements.
//     </li>
//     <li>
//       <span className="font-semibold text-red-700">Inefficient:</span> Due to its higher constants, Heap Sort is not as 
//       efficient in practice compared to other <strong>n log n</strong> sorting algorithms like Quick Sort or Merge Sort.
//     </li>
//   </ul>
// </div>


// {/* gfg link  */}

// {/* <div className="text-left my-6 p-4 border-l-4 border-blue-500 bg-gray-50 rounded-lg shadow-md">
//   <p className="text-lg text-gray-800 leading-relaxed">
//     Try it on 
//     <a href="https://www.geeksforgeeks.org/heap-sort/" target="_blank" rel="noopener noreferrer" 
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



// import React from 'react'
// import HEAP_SORT_IMG from "../../assets/Heap-sort-algo.png"
// import HEAP_SORT_STEP1 from "../../assets/heap-sort-step1.webp"
// import HEAP_SORT_STEP2 from "../../assets/heap-sort-step2.webp"
// import HEAP_SORT_STEP3 from "../../assets/heap-sort-step3.webp"

// export const Heap = () => {
//   return (
//     <div className='mt-24 px-24 flex flex-col gap-7'>

//       {/* Heading */}
//       <h1 className="text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent px-4 py-6 leading-tight tracking-tight transition-transform duration-300 ease-in-out transform hover:scale-105 hover:drop-shadow-[0_5px_25px_rgba(100,100,255,0.4)]">
//   Heap Sort Algorithm
// </h1>
//       {/* Intro Paragraph */}
//       <div className="text-xl text-gray-200 bg-gradient-to-r from-gray-800 via-gray-900 to-black p-6 rounded-lg shadow-lg border border-gray-700 leading-relaxed tracking-wide">
//         Heap sort is a comparison-based sorting technique based on the Binary Heap Data Structure. 
//         It can be seen as an optimization over selection sort, where we first find the max (or min) element 
//         and swap it with the last (or first). We repeat the same process for the remaining elements. 
//         In Heap Sort, we use a Binary Heap so that we can quickly find and move the max element in 
//         <span className="text-yellow-400 font-semibold"> O(Log n) </span> instead of 
//         <span className="text-yellow-400 font-semibold"> O(n) </span> and hence achieve the 
//         <span className="text-yellow-400 font-semibold"> O(n Log n) </span> time complexity.
//       </div>

//       {/* Main Image */}
//       <div className="flex justify-center items-center p-6">
//         <img 
//           src={HEAP_SORT_IMG} 
//           alt="Heap Sort Visualization" 
//           className="max-w-full h-auto rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105" 
//         />
//       </div>

//       {/* Algorithm Title */}
//       <div className="text-center my-6">
//         <h2 className="text-4xl font-extrabold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-[-5px] after:w-full after:h-1 after:bg-gradient-to-r after:from-indigo-500 after:via-purple-500 after:to-pink-500 after:rounded-full after:transition-all after:duration-300  after:ease-in-out hover:after:scale-x-105 hover:drop-shadow-lg">
//           Heap Sort Algorithm
//         </h2>
//       </div>

//       {/* Algorithm Steps */}
//       <div className="bg-gray-900 text-gray-200 p-6 rounded-lg shadow-lg border border-gray-800">
//         <p className="text-lg leading-relaxed mb-4">
//           First, convert the array into a <span className="text-yellow-400 font-semibold">Max Heap</span> using heapify. 
//           Then, one by one, delete the root node of the Max-heap, replace it with the last node, and heapify. 
//           Repeat this process while the heap size is greater than 1.
//         </p>
//         <ul className="list-disc pl-6 space-y-2">
//           <li className="text-lg">
//             <span className="text-purple-400 font-semibold">Rearrange</span> array elements so that they form a Max Heap.
//           </li>
//           <li className="text-lg">
//             <span className="text-purple-400 font-semibold">Repeat</span> the following steps until the heap contains only one element:
//             <ul className="list-decimal pl-6 mt-2 space-y-2 text-base">
//               <li><span className="text-blue-400 font-semibold">Swap</span> the root with the last element.</li>
//               <li><span className="text-blue-400 font-semibold">Remove</span> the last element from the heap.</li>
//               <li><span className="text-blue-400 font-semibold">Heapify</span> the remaining heap.</li>
//             </ul>
//           </li>
//           <li className="text-lg"><span className="text-green-400 font-semibold">Finally</span>, we get a sorted array.</li>
//         </ul>
//       </div>

      // {/* Detailed Working */}
      // <div className="text-center my-6">
      //   <h2 className="text-5xl font-extrabold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
      //       bg-clip-text text-transparent relative inline-block pb-2 
      //       after:content-[''] after:absolute after:left-0 after:bottom-[-6px] after:w-full after:h-1.5 
      //       after:bg-gradient-to-r after:from-indigo-500 after:via-purple-500 after:to-pink-500 
      //       after:rounded-full after:transition-all after:duration-300 after:ease-in-out 
      //       hover:after:w-[102%] hover:after:h-2 hover:drop-shadow-lg">
      //       Detailed Working of Heap Sort
      //   </h2>
      // </div>

      // {/* Step 1 */}
      // <div className="text-left my-4 pl-6">
      //   <h3 className="text-2xl font-semibold text-black">Step 1: Treat the Array as a Complete Binary Tree</h3>
      // </div>
      // <div className="text-left my-6 p-4 border-l-4 border-blue-500">
      //   <p className="text-lg text-gray-800 leading-relaxed">
      //     Visualize the array as a complete binary tree. For an array of size <strong>n</strong>:  
      //     root is at index <strong>0</strong>, left child at <strong>2i + 1</strong>, right child at <strong>2i + 2</strong>.
      //   </p>
      //   <div className="mt-4 flex justify-center">
      //     <img src={HEAP_SORT_STEP1} alt="Heap Sort Step 1" className="w-full max-w-lg rounded-lg shadow-lg" />
      //   </div>
      // </div>

      // {/* Step 2 */}
      // <div className="text-left my-4 pl-6">
      //   <h3 className="text-2xl font-semibold text-black">Step 2: Build a Max Heap</h3>
      // </div>
      // <div className="text-left my-6 p-4 border-l-4 border-blue-500">
      //   <p className="text-lg text-gray-800 leading-relaxed">
      //     Build a <strong>Max Heap</strong> so the largest element is at the root.
      //   </p>
      //   <div className="mt-4 flex justify-center">
      //     <img src={HEAP_SORT_STEP2} alt="Heap Sort Step 2" className="w-full max-w-lg rounded-lg shadow-lg" />
      //   </div>
      // </div>

      // {/* Step 3 */}
      // <div className="text-left my-4 pl-6">
      //   <h3 className="text-2xl font-semibold text-black">Step 3: Sort the Array</h3>
      // </div>
      // <div className="text-left my-6 p-4 border-l-4 border-blue-500">
      //   <p className="text-lg text-gray-800 leading-relaxed">
      //     Repeatedly swap the root with the last unsorted element and heapify the reduced heap.
      //   </p>
      //   <div className="mt-4 flex justify-center">
      //     <img src={HEAP_SORT_STEP3} alt="Heap Sort Step 3" className="w-full max-w-lg rounded-lg shadow-lg" />
      //   </div>
      // </div>

//       {/* Complexity Analysis */}
//       <div className="text-left my-6 pl-6">
//         <h3 className="text-2xl font-semibold text-black">Complexity Analysis of Heap Sort</h3>
//       </div>
//       <div className="text-left my-6 p-4 border-l-4 border-purple-500 bg-gray-50 rounded-lg shadow-md">
//         <p className="text-lg text-gray-800 leading-relaxed">
//           The <strong>time complexity</strong> and <strong>space complexity</strong> of Heap Sort depend on how it is implemented.
//         </p>
//         <div className="mt-4 p-4 bg-white rounded-lg shadow-md">
//           <p className="text-lg font-semibold text-purple-600">⏳ Time Complexity:</p>
//           <p className="text-gray-800">O(<strong>n log n</strong>)</p>
//         </div>
//         <div className="mt-4 p-4 bg-white rounded-lg shadow-md">
//           <p className="text-lg font-semibold text-purple-600">💾 Auxiliary Space:</p>
//           <p className="text-gray-800">
//             O(<strong>log n</strong>) due to recursion stack. For iterative implementation, it's O(<strong>1</strong>).
//           </p>
//         </div>
//       </div>

//       {/* Advantages */}
//       <div className="text-left my-6 pl-6">
//         <h3 className="text-2xl font-semibold text-black">Advantages of Heap Sort</h3>
//       </div>
//       <div className="text-left my-6 p-4 border-l-4 border-green-500 bg-gray-50 rounded-lg shadow-md">
//         <ul className="list-disc pl-6 space-y-3 text-gray-800">
//           <li><span className="font-semibold text-green-700">Efficient Time Complexity:</span> O(n log n) for all cases.</li>
//           <li><span className="font-semibold text-green-700">Memory Usage:</span> Can be minimized with iterative heapify.</li>
//           <li><span className="font-semibold text-green-700">Simplicity:</span> Easier to understand than merge sort or quick sort.</li>
//         </ul>
//       </div>

//       {/* Disadvantages */}
//       <div className="text-left my-6 pl-6">
//         <h3 className="text-2xl font-semibold text-black">Disadvantages of Heap Sort</h3>
//       </div>
//       <div className="text-left my-6 p-4 border-l-4 border-red-500 bg-gray-50 rounded-lg shadow-md">
//         <ul className="list-disc pl-6 space-y-3 text-gray-800">
//           <li><span className="font-semibold text-red-700">Costly:</span> Higher constants than Merge Sort.</li>
//           <li><span className="font-semibold text-red-700">Unstable:</span> Does not maintain order of equal elements.</li>
//           <li><span className="font-semibold text-red-700">Inefficient:</span> Slower than Quick Sort in practice.</li>
//         </ul>
//       </div>

//     </div>
//   );
// };

//new code

import React, { useState, useEffect } from 'react';
import HEAP_SORT_IMG from "../../assets/Heap-sort-algo.png";
import HEAP_SORT_STEP1 from "../../assets/heap-sort-step1.webp";
import HEAP_SORT_STEP2 from "../../assets/heap-sort-step2.webp";
import HEAP_SORT_STEP3 from "../../assets/heap-sort-step3.webp";


export const Heap = () => {
  const [array, setArray] = useState([]);
  const [speed, setSpeed] = useState(300);
  const [isSorting, setIsSorting] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [activeIndices, setActiveIndices] = useState([]);

  useEffect(() => {
    generateNewArray();
  }, []);

  const generateNewArray = () => {
    const newArr = Array.from({ length: 40 }, () => Math.floor(Math.random() * 300) + 50);
    setArray(newArr);
    setActiveIndices([]);
  };

  const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  const heapify = async (arr, n, i) => {
    let largest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;

    if (left < n && arr[left] > arr[largest]) largest = left;
    if (right < n && arr[right] > arr[largest]) largest = right;

    if (largest !== i) {
      [arr[i], arr[largest]] = [arr[largest], arr[i]];
      setActiveIndices([i, largest]);
      setArray([...arr]);
      await sleep(speed);
      await heapify(arr, n, largest);
    }
  };

  const heapSort = async () => {
    setIsSorting(true);
    let arr = [...array];
    let n = arr.length;

    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      await heapify(arr, n, i);
    }

    for (let i = n - 1; i > 0; i--) {
      [arr[0], arr[i]] = [arr[i], arr[0]];
      setActiveIndices([0, i]);
      setArray([...arr]);
      await sleep(speed);
      await heapify(arr, i, 0);
    }

    setActiveIndices([]);
    setIsSorting(false);
  };

  const handleAddValue = () => {
    if (inputValue.trim() === "") return;
    const values = inputValue.split(',').map(v => parseInt(v.trim(), 10)).filter(v => !isNaN(v) && v > 0);
    if (values.length > 0) {
      setArray(values);
      setInputValue("");
    }
  };

  return (
    // heading section
    <div className='mt-24 px-4 md:px-24 flex flex-col gap-10'>
      <h1 className="text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent px-4 py-6 leading-tight tracking-tight transition-transform duration-300 ease-in-out transform hover:scale-105 hover:drop-shadow-[0_5px_25px_rgba(100,100,255,0.4)]">
      Heap Sort Algorithm
    </h1>
      {/* intro section */}
      <div className="text-xl text-gray-200 bg-gradient-to-r from-gray-800 via-gray-900 to-black p-6 rounded-lg shadow-lg border border-gray-700">
      Heap sort is a comparison-based sorting technique based on Binary Heap Data Structure. It can be seen as an optimization over selection sort where we first find the max (or min) element and swap it with the last (or first). We repeat the same process for the remaining elements. In Heap Sort, we use Binary Heap so that we can quickly find and move the max element in O(Log n) instead of O(n) and hence achieve the O(n Log n) time complexity.
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-center">
        <input
          type="text"
          placeholder="Enter comma-separated numbers"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          disabled={isSorting}
          className="w-full md:w-96 px-4 py-2 rounded-md shadow-lg text-black"
        />
        <button
          onClick={handleAddValue}
          disabled={isSorting}
          className={`px-6 py-2 font-bold rounded-lg transition-all shadow-lg ${isSorting ? 'bg-gray-500 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700'} text-white`}
        >
          Add Values
        </button>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-6">
        <button
          onClick={heapSort}
          disabled={isSorting}
          className={`px-6 py-3 font-bold rounded-lg transition-all shadow-lg ${isSorting ? 'bg-gray-500 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'} text-white`}
        >
          {isSorting ? 'Sorting...' : 'Start Heap Sort'}
        </button>

        <div className="flex flex-col text-white">
          <label htmlFor="speedSlider" className="mb-1">Speed: {speed}ms</label>
          <input
            type="range"
            id="speedSlider"
            min="100"
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
          className={`px-6 py-3 font-bold rounded-lg transition-all shadow-lg ${isSorting ? 'bg-gray-500 cursor-not-allowed' : 'bg-purple-600 hover:bg-purple-700'} text-white`}
        >
          New Array
        </button>
      </div>

      <div className="flex items-end justify-start h-[420px] bg-black rounded-lg mt-7 p-4 gap-[4px] overflow-x-auto">
        {array.map((value, idx) => {
          let bgClass = "bg-gradient-to-t from-red-500 via-orange-400 to-yellow-300";
          if (activeIndices.includes(idx)) bgClass = "bg-yellow-400";

          return (
            <div key={idx} className="flex flex-col items-center w-8 relative">
              <div className="absolute -top-7 text-white text-sm font-medium">
                {value}
              </div>
              <div
                style={{ height: `${value}px` }}
                className={`w-full ${bgClass} rounded-t`}
              ></div>
            </div>
          );
        })}
      </div>

      {/*  How does Heap Sort Algorithm work? */}

      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white p-8 rounded-xl shadow-lg space-y-6">
        <h2 className="text-3xl font-bold text-center text-orange-300">
          How does Heap Sort Algorithm work?
        </h2>
        <ul className="list-decimal list-inside space-y-2 text-lg pl-4">
          <li><span className="text-yellow-300 font-medium">Build Heap:</span> Rearrange the array into a max-heap structure.</li>
          <li><span className="text-yellow-300 font-medium">Extract Max:</span> Repeatedly remove the root (largest value) and place it at the end of the array.</li>
          <li><span className="text-yellow-300 font-medium">Heapify:</span> Restore the heap property after each extraction.</li>
        </ul>
        <p className="text-lg text-gray-400 italic">
          Heap Sort ensures a time complexity of O(n log n) in all cases but is not stable.
        </p>
      </div>

        {/* image section */}

      <div className="flex justify-center mt-8">
        <img src={HEAP_SORT_IMG} alt="Heap Sort Diagram" className="max-w-full h-auto rounded-lg shadow-lg" />
      </div>

      {/* <div className="flex justify-center mt-8">
        <img src={HEAP_SORT_GIF} alt="Heap Sort Animation" className="max-w-full h-auto rounded-lg shadow-lg" />
      </div> */}


      {/* Detailed Working of Heap Sort */}

       <div className="text-center my-6">
        <h2 className="text-5xl font-extrabold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
            bg-clip-text text-transparent relative inline-block pb-2 
            after:content-[''] after:absolute after:left-0 after:bottom-[-6px] after:w-full after:h-1.5 
            after:bg-gradient-to-r after:from-indigo-500 after:via-purple-500 after:to-pink-500 
            after:rounded-full after:transition-all after:duration-300 after:ease-in-out 
            hover:after:w-[102%] hover:after:h-2 hover:drop-shadow-lg">
            Detailed Working of Heap Sort
        </h2>
      </div>

      {/* Step 1 */}
      <div className="text-left my-4 pl-6">
        <h3 className="text-2xl font-semibold text-black">Step 1: Treat the Array as a Complete Binary Tree</h3>
      </div>
      <div className="text-left my-6 p-4 border-l-4 border-blue-500">
        <p className="text-lg text-gray-800 leading-relaxed">
          Visualize the array as a complete binary tree. For an array of size <strong>n</strong>:  
          root is at index <strong>0</strong>, left child at <strong>2i + 1</strong>, right child at <strong>2i + 2</strong>.
        </p>
        <div className="mt-4 flex justify-center">
          <img src={HEAP_SORT_STEP1} alt="Heap Sort Step 1" className="w-full max-w-lg rounded-lg shadow-lg" />
        </div>
      </div>

      {/* Step 2 */}
      <div className="text-left my-4 pl-6">
        <h3 className="text-2xl font-semibold text-black">Step 2: Build a Max Heap</h3>
      </div>
      <div className="text-left my-6 p-4 border-l-4 border-blue-500">
        <p className="text-lg text-gray-800 leading-relaxed">
          Build a <strong>Max Heap</strong> so the largest element is at the root.
        </p>
        <div className="mt-4 flex justify-center">
          <img src={HEAP_SORT_STEP2} alt="Heap Sort Step 2" className="w-full max-w-lg rounded-lg shadow-lg" />
        </div>
      </div>

      {/* Step 3 */}
      <div className="text-left my-4 pl-6">
        <h3 className="text-2xl font-semibold text-black">Step 3: Sort the Array</h3>
      </div>
      <div className="text-left my-6 p-4 border-l-4 border-blue-500">
        <p className="text-lg text-gray-800 leading-relaxed">
          Repeatedly swap the root with the last unsorted element and heapify the reduced heap.
        </p>
        <div className="mt-4 flex justify-center">
          <img src={HEAP_SORT_STEP3} alt="Heap Sort Step 3" className="w-full max-w-lg rounded-lg shadow-lg" />
        </div>
      </div>

      {/* Complexity Analysis of Heap Sort */}

      <div className="bg-gradient-to-br from-black via-gray-900 to-slate-900 text-white p-8 rounded-xl shadow-lg mt-10 space-y-6">
        <h2 className="text-3xl font-bold text-center text-yellow-400">
          Complexity Analysis of Heap Sort
        </h2>
        <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
          <div className="bg-gray-800 p-5 rounded-lg border-l-4 border-blue-500">
            <h3 className="text-xl font-semibold text-blue-400 mb-1">🕒 Time Complexity:</h3>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li><span className="text-green-300 font-medium">Best Case:</span> O(n log n)</li>
              <li><span className="text-yellow-300 font-medium">Average Case:</span> O(n log n)</li>
              <li><span className="text-red-300 font-medium">Worst Case:</span> O(n log n)</li>
            </ul>
          </div>

          <div className="bg-gray-800 p-5 rounded-lg border-l-4 border-purple-500">
            <h3 className="text-xl font-semibold text-purple-400 mb-1">💾 Space Complexity:</h3>
            <p>Heap Sort is an in-place algorithm with space complexity of O(1), but it is not stable.</p>
          </div>
        </div>
      </div>
    </div>
  );
};


