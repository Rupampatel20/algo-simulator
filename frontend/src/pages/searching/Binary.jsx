import React , {useState} from "react";
import BINARY_SEARCH_IMG from "../../assets/binnary-search-.webp";


export const Binary = () => {
  const [array] = useState([2, 5, 8, 12, 16, 23, 38, 56, 72, 91]); // Updated example array
  const [target, setTarget] = useState("");
  const [result, setResult] = useState(null);
  const [iterations, setIterations] = useState(0); // Count iterations

  // Binary Search Function
  const binarySearch = (arr, target) => {
    let left = 0,
      right = arr.length - 1,
      count = 0; // Count iterations

    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      count++; // Increment iteration count

      if (arr[mid] === target) {
        setIterations(count);
        return mid;
      }
      if (arr[mid] < target) left = mid + 1;
      else right = mid - 1;
    }

    setIterations(count);
    return -1;
  };

  // Handle search event
  const handleSearch = () => {
    const index = binarySearch(array, parseInt(target));
    setResult(
      index !== -1
        ? `✅ Element found at index ${index} in ${iterations} iterations`
        : "❌ Element not found"
    );
  };
  return (
    <div className='mt-24 px-24 flex flex-col gap-7'>

       {/* binarysearch heading code... */}

    <h1 className="text-center text-7xl font-extrabold bg-gradient-to-r from-blue-500 via-teal-400 to-purple-600 bg-clip-text text-transparent relative inline-block transition-all duration-300 ease-in-out hover:scale-105 hover:drop-shadow-lg after:content-[''] after:absolute after:left-0 after:bottom-[-5px] after:w-full after:h-1 after:bg-gradient-to-r after:from-blue-500 after:via-teal-400 after:to-purple-600 after:rounded-full after:transition-all after:duration-300 after:ease-in-out">
      BINARY SEARCH
    </h1>

    {/* Input & Search Button */}
<div className="lex flex-col items-center justify-center text-center mb-4">
            <p className="mb-2">🟢 Sorted Array: {JSON.stringify(array)}</p>
            <input
              type="number"
              value={target}
              onChange={(e) => setTarget(e.target.value)} 
              className="border p-2 rounded mr-2"
              placeholder="Enter number to search"
            />
            <button
              onClick={handleSearch}
              className="text-white bg-green-500 px-4 py-2 rounded-full hover:bg-blue-600 border-2 transition-all"
            >
              Search
            </button>
          </div>

          {/* Search Result */}
          {result && <p className="mt-3 text-lg font-semibold">{result}</p>}

    {/* binary search define section */}

    <div className="text-xl text-gray-200 bg-gradient-to-r from-gray-800 via-gray-900 to-black p-6 rounded-lg shadow-lg border border-gray-700 leading-relaxed tracking-wide">
  <p>
    <span className="text-yellow-400 font-semibold">Binary Search</span> is a 
    searching algorithm used in a <span className="text-yellow-300">sorted array</span> 
    by repeatedly dividing the search interval in half. The idea of Binary Search 
    is to use the information that the array is sorted and reduce the time 
    complexity to <span className="text-yellow-300">O(log N)</span>.
  </p>
</div>

{/* image section */}

<div className="flex justify-center items-center p-6">
          <img 
            src={BINARY_SEARCH_IMG} 
            alt="bINARY SEARCH Visualization" 
            className="max-w-full h-auto rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105" />
          </div>


      {/* binary search working section */}

          <div className="text-xl text-gray-200 bg-gradient-to-r from-gray-800 via-gray-900 to-black p-6 rounded-lg shadow-lg border border-gray-700 leading-relaxed tracking-wide">
  <p>
    <span className="text-yellow-400 font-semibold">What is Binary Search Algorithm?</span>
  </p>
  <p>
    <span className="text-yellow-400 font-semibold">Binary Search</span> is a 
    search algorithm used to find the position of a <span className="text-yellow-300">target value</span> 
    within a sorted array. It works by repeatedly dividing the search interval in half 
    until the target value is found or the interval is empty. The search interval is 
    halved by comparing the target element with the <span className="text-yellow-300">middle value</span> 
    of the search space.
  </p>
</div>


<div className="text-xl text-gray-200 bg-gradient-to-r from-gray-800 via-gray-900 to-black p-6 rounded-lg shadow-lg border border-gray-700 leading-relaxed tracking-wide">
  <p>
    <span className="text-yellow-400 font-semibold">Conditions to Apply Binary Search Algorithm in a Data Structure</span>
  </p>
  <ul className="list-disc list-inside mt-2">
    <li>
      The <span className="text-yellow-300">data structure must be sorted</span>.
    </li>
    <li>
      Access to any element of the data structure should take <span className="text-yellow-300">constant time</span>.
    </li>
  </ul>
</div>


<div className="text-xl text-gray-200 bg-gradient-to-r from-gray-800 via-gray-900 to-black p-6 rounded-lg shadow-lg border border-gray-700 leading-relaxed tracking-wide">
  <p>
    <span className="text-yellow-400 font-semibold">Binary Search Algorithm</span>
  </p>
  <p className="mt-2">Below is the step-by-step algorithm for Binary Search:</p>
  <ul className="list-decimal list-inside mt-2">
    <li>Divide the search space into two halves by finding the middle index <span className="text-yellow-300">“mid”</span>.</li>
    <li>Compare the middle element of the search space with the key.</li>
    <li>If the key is found at the middle element, the process is <span className="text-yellow-300">terminated</span>.</li>
    <li>If the key is not found at the middle element, choose which half will be used as the next search space.</li>
    <li>If the key is <span className="text-yellow-300">smaller</span> than the middle element, then the left side is used for the next search.</li>
    <li>If the key is <span className="text-yellow-300">larger</span> than the middle element, then the right side is used for the next search.</li>
    <li>This process continues until the key is found or the total search space is <span className="text-yellow-300">exhausted</span>.</li>
  </ul>
</div>


{/* time complexity section of the code */}

<div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      <h2 className="text-3xl font-bold text-yellow-400 mb-6 animate-pulse">
        Time Complexity of Binary Search
      </h2>

      <div className="bg-gray-800 p-8 rounded-xl shadow-xl border border-gray-700 transition-transform transform hover:scale-105">
        <ul className="list-disc space-y-3 text-lg leading-relaxed tracking-wide">
          <li>
            <span className="text-green-400 font-semibold">Best Case:</span>{" "}
            <span className="text-blue-300">O(1)</span>
          </li>
          <li>
            <span className="text-yellow-400 font-semibold">Average Case:</span>{" "}
            <span className="text-blue-300">O(log N)</span>
          </li>
          <li>
            <span className="text-red-400 font-semibold">Worst Case:</span>{" "}
            <span className="text-blue-300">O(log N)</span>
          </li>
          <li>
            <span className="text-purple-400 font-semibold">Auxiliary Space:</span>{" "}
            <span className="text-blue-300">O(1)</span>, If the recursive call
            stack is considered, then it will be{" "}
            <span className="text-blue-300">O(log N)</span>.
          </li>
        </ul>
      </div>
    </div>

{/* application section  */}

    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      <h2 className="text-3xl font-bold text-yellow-400 mb-6 animate-pulse">
        Applications of Binary Search
      </h2>

      <div className="bg-gray-800 p-8 rounded-xl shadow-xl border border-gray-700 transition-transform transform hover:scale-105">
        <ul className="list-disc space-y-4 text-lg leading-relaxed tracking-wide">
          <li>
            <span className="text-green-400 font-semibold">Machine Learning:</span> 
            Binary search can be used as a **building block** for more complex algorithms, such as **hyperparameter tuning** and **training neural networks**.
          </li>
          <li>
            <span className="text-blue-400 font-semibold">Computer Graphics:</span> 
            It is used in **ray tracing** and **texture mapping** algorithms for **efficient searching** and rendering.
          </li>
          <li>
            <span className="text-purple-400 font-semibold">Database Searching:</span> 
            Databases utilize binary search techniques for **indexing** and **query optimization** to **quickly retrieve data**.
          </li>
        </ul>
      </div>
    </div>


{/* advantages and disadvantages section */}

    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      <h2 className="text-3xl font-bold text-yellow-400 mb-6 animate-pulse">
        Advantages & Disadvantages of Binary Search
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
        {/* Advantages Section */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700 transition-transform transform hover:scale-105">
          <h3 className="text-xl font-bold text-green-400 mb-4">Advantages</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg leading-relaxed">
            <li>
              <span className="text-blue-400 font-semibold">Faster than Linear Search:</span> 
              Especially for **large datasets**.
            </li>
            <li>
              <span className="text-yellow-400 font-semibold">More Efficient:</span> 
              Compared to **interpolation search** or **exponential search**.
            </li>
            <li>
              <span className="text-purple-400 font-semibold">Works on Large Datasets:</span> 
              Suitable for **external memory storage** like **hard drives or cloud databases**.
            </li>
          </ul>
        </div>

        {/* Disadvantages Section */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700 transition-transform transform hover:scale-105">
          <h3 className="text-xl font-bold text-red-400 mb-4">Disadvantages</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg leading-relaxed">
            <li>
              <span className="text-yellow-300 font-semibold">Requires Sorting:</span> 
              The array **must be sorted** before searching.
            </li>
            <li>
              <span className="text-blue-300 font-semibold">Memory Constraints:</span> 
              Requires **contiguous memory storage**.
            </li>
            <li>
              <span className="text-purple-300 font-semibold">Only for Comparable Data:</span> 
              Elements must be **ordered and comparable**.
            </li>
          </ul>
        </div>
      </div>
    </div>


    {/* gfg button link code */}

{/* <div className="text-left my-6 p-4 border-l-4 border-blue-500 bg-gray-50 rounded-lg shadow-md">
  <p className="text-lg text-gray-800 leading-relaxed">
    Try it on 
    <a href="https://www.geeksforgeeks.org/binary-search/" target="_blank" rel="noopener noreferrer" 
       className="text-blue-600 font-semibold hover:underline">
       GfG Practice
    </a>
    <span className="inline-block ml-2">
      🔗
    </span>
  </p>
</div> */}

    </div>
  )
}
