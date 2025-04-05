import React, {useState} from "react";
import LINEAR_SEARCH_IMG from "../../assets/Screenshot-2023-03-07-101704.png";

export const Linear = () => {
  const [array] = useState([10, 50, 30, 70, 80, 20, 90, 40]); // Updated Array
  const [target, setTarget] = useState(""); // User input for target value
  const [result, setResult] = useState(null); // Stores search result

  // Function to perform Linear Search
  const handleSearch = () => {
    let index = array.indexOf(parseInt(target));
    setResult(
      index !== -1
        ?` ✅ Element found at index ${index}`
        : "❌ Element not found"
    );
  };
  return (
    <div className='mt-24 px-24 flex flex-col gap-7'> 
      
      {/* linearsearch heading code... */}

    <h1 className="text-center text-7xl font-extrabold bg-gradient-to-r from-blue-500 via-teal-400 to-purple-600 bg-clip-text text-transparent relative inline-block transition-all duration-300 ease-in-out hover:scale-105 hover:drop-shadow-lg after:content-[''] after:absolute after:left-0 after:bottom-[-5px] after:w-full after:h-1 after:bg-gradient-to-r after:from-blue-500 after:via-teal-400 after:to-purple-600 after:rounded-full after:transition-all after:duration-300 after:ease-in-out">
      LINEAR SEARCH
    </h1>

{/* Input & Search Button */}
<div className="flex flex-col items-center justify-center text-center mb-4">
  <p className="mb-2">🟢 Array: {JSON.stringify(array)}</p>
  <div className="flex flex-col sm:flex-row items-center gap-2">
    <input
      type="number"
      value={target}
      onChange={(e) => setTarget(e.target.value)}
      className="border p-2 rounded text-center"
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
</div>

    {/* linearsearch description code... */}

    <div className="text-xl text-gray-200 bg-gradient-to-r from-gray-800 via-gray-900 to-black p-6 rounded-lg shadow-lg border border-gray-700 leading-relaxed tracking-wide">
  <p>
    <span className="text-yellow-400 font-semibold">Linear Search</span> is a 
    searching algorithm where the <span className="text-yellow-300">list or dataset</span> 
    is traversed from one end to find the <span className="text-yellow-300">desired value</span>.
  </p>
</div>

{/* image section */}

<div className="flex justify-center items-center p-6">
          <img 
            src={LINEAR_SEARCH_IMG} 
            alt="bINARY SEARCH Visualization" 
            className="max-w-full h-auto rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105" />
          </div>


          <div className="text-xl text-gray-200 bg-gradient-to-r from-gray-800 via-gray-900 to-black p-6 rounded-lg shadow-lg border border-gray-700 leading-relaxed tracking-wide">
  <p>
    <span className="text-yellow-400 font-semibold">Properties of Linear Search:</span>
  </p>
  <ul className="list-disc list-inside mt-2">
    <li>
      <span className="text-yellow-300 font-semibold">Time Complexity:</span> 
      The worst-case time complexity of linear search is <span className="text-blue-400">O(N)</span>, where 
      <span className="text-yellow-300"> N</span> is the size of the array.
    </li>
    <li>
      <span className="text-yellow-300 font-semibold">Space Complexity:</span> 
      Linear search requires a <span className="text-blue-400">constant amount of memory</span> to run.
    </li>
    <li>
      <span className="text-yellow-300 font-semibold">Efficiency:</span> 
      Linear search is <span className="text-blue-400">efficient for small datasets</span> but becomes 
      <span className="text-red-400"> inefficient for larger datasets</span>. 
      In practice, linear search is often used as a subroutine in more complex algorithms.
    </li>
    <li>
      <span className="text-yellow-300 font-semibold">Implementation:</span> 
      Linear search can be easily implemented using a <span className="text-blue-400">loop</span>, 
      with each iteration comparing the <span className="text-yellow-300">target value</span> 
      to the current element of the array.
    </li>
  </ul>
</div>

<div className="text-xl text-gray-200 bg-gradient-to-r from-gray-800 via-gray-900 to-black p-6 rounded-lg shadow-lg border border-gray-700 leading-relaxed tracking-wide">
  <p>
    <span className="text-yellow-400 font-semibold">Application of Linear Search:</span>
  </p>
  <p className="mt-2">
    Linear search has several practical applications in computer science and beyond. Here are some examples:
  </p>
  <ul className="list-disc list-inside mt-2">
    <li>
      <span className="text-yellow-300 font-semibold">Phonebook Search:</span> 
      Linear search can be used to search through a phonebook to find a person’s name, given their phone number.
    </li>
    <li>
      <span className="text-yellow-300 font-semibold">Spell Checkers:</span> 
      The algorithm compares each word in the document to a dictionary of correctly spelled words until a match is found.
    </li>
    <li>
      <span className="text-yellow-300 font-semibold">Finding Minimum and Maximum Values:</span> 
      Linear search can be used to find the minimum and maximum values in an array or list.
    </li>
    <li>
      <span className="text-yellow-300 font-semibold">Searching Through Unsorted Data:</span> 
      Linear search is useful for searching through <span className="text-blue-400">unsorted data</span>.
    </li>
  </ul>
</div>


<div className="text-xl text-gray-200 bg-gradient-to-r from-gray-800 via-gray-900 to-black p-6 rounded-lg shadow-lg border border-gray-700 leading-relaxed tracking-wide">
  <p>
    <span className="text-yellow-400 font-semibold">Advantages of Linear Search:</span>
  </p>
  <ul className="list-disc list-inside mt-2">
    <li>
      <span className="text-yellow-300 font-semibold">Simplicity:</span> 
      Linear search is a very simple algorithm to understand and implement.
    </li>
    <li>
      <span className="text-yellow-300 font-semibold">Works with Unsorted Data:</span> 
      Linear search works well with unsorted data. It does not require any pre-processing or sorting before performing the search.
    </li>
    <li>
      <span className="text-yellow-300 font-semibold">Low Memory Usage:</span> 
      Linear search only requires a small amount of memory to store the index of the current element being searched.
    </li>
    <li>
      <span className="text-yellow-300 font-semibold">Easy to Debug:</span> 
      Because linear search is a simple algorithm, it is easy to debug and troubleshoot any issues that may arise.
    </li>
  </ul>

  <p className="mt-4">
    <span className="text-red-400 font-semibold">Disadvantages of Linear Search:</span>
  </p>
  <ul className="list-disc list-inside mt-2">
    <li>
      <span className="text-yellow-300 font-semibold">Inefficient for Large Datasets:</span> 
      As the dataset size grows, the time taken by linear search increases proportionally.
    </li>
    <li>
      <span className="text-yellow-300 font-semibold">Limited Applicability:</span> 
      Linear search is only suitable for datasets that are not too large or complex.
    </li>
    <li>
      <span className="text-yellow-300 font-semibold">No Early Termination:</span> 
      Linear search does not have a mechanism to terminate early once the target element is found.
    </li>
    <li>
      <span className="text-yellow-300 font-semibold">Inefficient for Sorted Data:</span> 
      When the data is already sorted, linear search is inefficient as it checks each element one by one, even after passing the target element.
    </li>
  </ul>
</div>


{/* gfg button link code */}

{/* <div className="text-left my-6 p-4 border-l-4 border-blue-500 bg-gray-50 rounded-lg shadow-md">
  <p className="text-lg text-gray-800 leading-relaxed">
    Try it on 
    <a href="https://www.geeksforgeeks.org/linear-search/" target="_blank" rel="noopener noreferrer" 
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
