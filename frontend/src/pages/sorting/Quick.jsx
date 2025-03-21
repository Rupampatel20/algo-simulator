import React from 'react'
import QUICK_SORT_IMG from "../../assets/quick sort.webp"

export const Quick = () => {
  return (
    
    <div className='mt-24 px-24 flex flex-col gap-7'>

       {/* quick sort heading code... */}

    <h1 className="text-center text-7xl font-extrabold bg-gradient-to-r from-blue-500 via-teal-400 to-purple-600 bg-clip-text text-transparent relative inline-block transition-all duration-300 ease-in-out hover:scale-105 hover:drop-shadow-lg after:content-[''] after:absolute after:left-0 after:bottom-[-5px] after:w-full after:h-1 after:bg-gradient-to-r after:from-blue-500 after:via-teal-400 after:to-purple-600 after:rounded-full after:transition-all after:duration-300 after:ease-in-out">
      QUICK SORT
    </h1>

    {/* quick sort paragraph code */}

    <div className="text-xl text-gray-200 bg-gradient-to-r from-gray-800 via-gray-900 to-black p-6 rounded-lg shadow-lg border border-gray-700 leading-relaxed tracking-wide">
      Quick Sort is a sorting algorithm based on the <span className="text-yellow-400 font-semibold">Divide and Conquer</span> approach.
      It works by selecting a pivot element and partitioning the array around that pivot, placing it in its correct sorted position.
      <br />
      The process involves dividing the array into two subarrays: elements smaller than the pivot on one side and larger elements on the other side.
      Quick Sort then recursively sorts the subarrays until the entire array is sorted.
      <br />
      Quick Sort achieves an average and worst-case time complexity of
      <span className="text-yellow-400 font-semibold"> O(n log n) </span>,
      making it an efficient and widely used sorting technique.
    </div>



    <div className="text-lg text-gray-200 bg-gradient-to-r from-gray-800 via-gray-900 to-black p-6 rounded-lg shadow-lg border border-gray-700 leading-relaxed tracking-wide">
      <h2 className="text-2xl font-bold text-yellow-400 mb-4">QuickSort Algorithm</h2>
      
      <p className="mb-4">
        QuickSort is a sorting algorithm based on the <span className="font-semibold text-yellow-300">Divide and Conquer</span> principle, 
        breaking down the problem into smaller sub-problems.
      </p>

      <div className="bg-gray-700 p-4 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-purple-400">🛠️ Steps in QuickSort Algorithm:</h3>
        <ul className="list-disc list-inside text-gray-300 mt-2 space-y-2">
          <li>
            <span className="text-yellow-300 font-semibold">Choose a Pivot:</span> Select an element as the pivot 
            (first element, last element, random, or median).
          </li>
          <li>
            <span className="text-yellow-300 font-semibold">Partition the Array:</span> Rearrange elements so that values smaller 
            than the pivot are on the left and greater values are on the right.
          </li>
          <li>
            <span className="text-yellow-300 font-semibold">Recursively Call:</span> Apply QuickSort on the left and right sub-arrays.
          </li>
          <li>
            <span className="text-yellow-300 font-semibold">Base Case:</span> The recursion stops when there is only one element left in the sub-array, as a single element is already sorted.
          </li>
        </ul>
      </div>

      <p className="mt-4">
        QuickSort achieves an average and worst-case time complexity of 
        <span className="text-yellow-400 font-semibold"> O(n log n) </span>, making it one of the most efficient sorting techniques.
      </p>
    </div>

    <div className="flex justify-center items-center p-6">
          <img 
            src={QUICK_SORT_IMG} 
            alt="quick Sort Visualization" 
            className="max-w-full h-auto rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105" />
          </div>




          <div className="text-gray-200 bg-gradient-to-r from-gray-800 via-gray-900 to-black p-6 rounded-lg shadow-lg border border-gray-700 leading-relaxed tracking-wide">
      <h2 className="text-2xl font-bold text-yellow-400 mb-4">📌 Choice of Pivot in QuickSort</h2>

      <p className="mb-4">
        The choice of pivot in QuickSort significantly affects its performance.
      </p>

      <div className="bg-gray-700 p-4 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-purple-400">🔹 Common Pivot Choices:</h3>
        <ul className="list-disc list-inside text-gray-300 mt-2 space-y-2">
          <li>
            <span className="text-yellow-300 font-semibold">First or Last Element:</span> 
            Can cause worst-case performance when the array is already sorted.
          </li>
          <li>
            <span className="text-yellow-300 font-semibold">Random Element:</span> 
            Helps avoid worst-case scenarios by preventing predictable patterns.
          </li>
          <li>
            <span className="text-yellow-300 font-semibold">Median Element:</span> 
            Ensures even splits but requires extra computation to find the median.
          </li>
        </ul>
      </div>

      <h2 className="text-2xl font-bold text-yellow-400 mt-6 mb-4">🔄 Partition Algorithm</h2>
      <p>
        The **partition function** is crucial in QuickSort. It reorganizes elements around the pivot.
      </p>

      <div className="bg-gray-700 p-4 rounded-lg shadow-md mt-4">
        <h3 className="text-xl font-semibold text-purple-400">🔹 Common Partitioning Techniques:</h3>
        <ul className="list-disc list-inside text-gray-300 mt-2 space-y-2">
          <li>
            <span className="text-yellow-300 font-semibold">Naive Partition:</span> 
            Uses extra space by copying elements into a temporary array before sorting.
          </li>
          <li>
            <span className="text-yellow-300 font-semibold">Lomuto Partition:</span> 
            Simpler method that swaps elements to ensure correct pivot placement.
          </li>
          <li>
            <span className="text-yellow-300 font-semibold">Hoare’s Partition:</span> 
            Most efficient, swaps elements from both ends to optimize partitioning.
          </li>
        </ul>
      </div>

      <p className="mt-4">
        The partition function ensures that elements **smaller than the pivot** move to the left, 
        while **larger elements** shift to the right.
      </p>

    </div>

{/* gfg button link code */}

    <div className="text-left my-6 p-4 border-l-4 border-blue-500 bg-gray-50 rounded-lg shadow-md">
  <p className="text-lg text-gray-800 leading-relaxed">
    Try it on 
    <a href="https://www.geeksforgeeks.org/quick-sort/" target="_blank" rel="noopener noreferrer" 
       className="text-blue-600 font-semibold hover:underline">
       GfG Practice
    </a>
    <span className="inline-block ml-2">
      🔗
    </span>
  </p>
</div>

{/* Complexity Analysis of QuickSort section*/}

<div className="text-gray-200 bg-gradient-to-r from-gray-800 via-gray-900 to-black p-6 rounded-lg shadow-lg border border-gray-700 leading-relaxed tracking-wide">
      <h2 className="text-2xl font-bold text-yellow-400 mb-4">📌 Complexity Analysis of QuickSort</h2>

      <p className="mb-4">
        QuickSort is an efficient, divide-and-conquer sorting algorithm. However, its performance depends on how the pivot is chosen.
      </p>

      <div className="bg-gray-700 p-4 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-purple-400">🔹 Time Complexity:</h3>
        <ul className="list-disc list-inside text-gray-300 mt-2 space-y-2">
          <li>
            <span className="text-yellow-300 font-semibold">Best Case: </span> 
            <span className="text-green-400 font-semibold">Ω(n log n)</span> – Occurs when the pivot element divides the array into two equal halves.
          </li>
          <li>
            <span className="text-yellow-300 font-semibold">Average Case: </span> 
            <span className="text-blue-400 font-semibold">θ(n log n)</span> – On average, the pivot divides the array into two parts, but not necessarily equal.
          </li>
          <li>
            <span className="text-yellow-300 font-semibold">Worst Case: </span> 
            <span className="text-red-400 font-semibold">O(n²)</span> – Happens when the smallest or largest element is always chosen as the pivot (e.g., already sorted arrays).
          </li>
        </ul>
      </div>

      <h2 className="text-2xl font-bold text-yellow-400 mt-6 mb-4">🔄 Auxiliary Space Complexity</h2>
      <div className="bg-gray-700 p-4 rounded-lg shadow-md">
        <p className="text-gray-300">
          QuickSort requires additional space for recursive function calls.
        </p>
        <p className="text-yellow-300 font-semibold mt-2">
          Auxiliary Space: O(n) in the worst case (due to recursive call stack).
        </p>
      </div>

      <div className="mt-6 p-4 bg-gray-800 border-l-4 border-yellow-500 rounded-lg shadow-md">
        <p className="text-yellow-300 font-semibold">⚡ Optimization Tip:</p>
        <p className="text-gray-300">
          Using **randomized QuickSort** can help avoid worst-case scenarios by choosing a random pivot instead of the first or last element.
        </p>
      </div>
    </div>

    {/* advantages and disadvantages section */}

    <div className="text-gray-200 bg-gradient-to-b from-gray-900 to-black p-8 rounded-lg shadow-lg border border-gray-700 leading-relaxed tracking-wide">
      <h2 className="text-3xl font-bold text-yellow-400 mb-6 text-center">✨ QuickSort: Pros & Cons ✨</h2>

      {/* Advantages Section */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-green-400 mb-4">✅ Advantages of QuickSort</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          <li><span className="text-yellow-300 font-semibold">Efficient:</span> Works well for large datasets.</li>
          <li><span className="text-yellow-300 font-semibold">Divide & Conquer:</span> Simplifies problem-solving.</li>
          <li><span className="text-yellow-300 font-semibold">Low Overhead:</span> Uses minimal extra memory.</li>
          <li><span className="text-yellow-300 font-semibold">Cache Friendly:</span> Operates in-place, improving memory efficiency.</li>
          <li><span className="text-yellow-300 font-semibold">Fastest for Large Data:</span> When stability is not required.</li>
          <li><span className="text-yellow-300 font-semibold">Tail Recursive:</span> Allows for tail call optimization.</li>
        </ul>
      </div>

      {/* Disadvantages Section */}
      <div>
        <h3 className="text-2xl font-semibold text-red-400 mb-4">❌ Disadvantages of QuickSort</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          <li><span className="text-yellow-300 font-semibold">Worst-Case Complexity:</span> O(n²) when pivot selection is poor.</li>
          <li><span className="text-yellow-300 font-semibold">Not Ideal for Small Data:</span> Simpler algorithms work better for small arrays.</li>
          <li><span className="text-yellow-300 font-semibold">Unstable Sort:</span> Does not maintain the relative order of equal elements.</li>
        </ul>
      </div>
    </div>


    {/* application section code */}

    <div className="text-gray-200 bg-gradient-to-b from-gray-900 to-black p-8 rounded-lg shadow-lg border border-gray-700 leading-relaxed tracking-wide">
      <h2 className="text-3xl font-bold text-blue-400 mb-6 text-center">🔹 Applications of QuickSort 🔹</h2>

      <ul className="list-disc list-inside space-y-3 text-gray-300">
        <li>
          <span className="text-yellow-300 font-semibold">Efficient for Large Datasets:</span> 
          Performs well with an average-case time complexity of <span className="text-yellow-400">O(n log n)</span>.
        </li>
        <li>
          <span className="text-yellow-300 font-semibold">Partitioning Problems:</span> 
          Used in finding the <span className="text-yellow-400">kth smallest element</span> or dividing arrays by pivot.
        </li>
        <li>
          <span className="text-yellow-300 font-semibold">Randomized Algorithms:</span> 
          Enhances performance over deterministic approaches.
        </li>
        <li>
          <span className="text-yellow-300 font-semibold">Cryptography:</span> 
          Helps in generating <span className="text-yellow-400">random permutations</span> and secure encryption keys.
        </li>
        <li>
          <span className="text-yellow-300 font-semibold">Parallelization:</span> 
          The partitioning step can be parallelized for improved performance on <span className="text-yellow-400">multi-core or distributed systems</span>.
        </li>
        <li>
          <span className="text-yellow-300 font-semibold">Theoretical Computer Science:</span> 
          Used in analyzing <span className="text-yellow-400">average-case complexity</span> and developing new sorting techniques.
        </li>
      </ul>
    </div>






















    </div>
  )
}
