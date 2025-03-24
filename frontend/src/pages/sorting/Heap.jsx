import React from 'react'
import HEAP_SORT_IMG from "../../assets/Heap-sort-algo.png"
import HEAP_SORT_STEP1 from "../../assets/heap-sort-step1.webp"
import HEAP_SORT_STEP2 from "../../assets/heap-sort-step2.webp"
import HEAP_SORT_STEP3 from "../../assets/heap-sort-step3.webp"
export const Heap = () => {
  return (
    <div className='mt-24 px-24 flex flex-col gap-7'>

{/* heap sort heading code... */}

    <h1 className="text-center text-7xl font-extrabold bg-gradient-to-r from-blue-500 via-teal-400 to-purple-600 bg-clip-text text-transparent relative inline-block transition-all duration-300 ease-in-out hover:scale-105 hover:drop-shadow-lg after:content-[''] after:absolute after:left-0 after:bottom-[-5px] after:w-full after:h-1 after:bg-gradient-to-r after:from-blue-500 after:via-teal-400 after:to-purple-600 after:rounded-full after:transition-all after:duration-300 after:ease-in-out">
      HEAP SORT
    </h1>
    
{/* heap sort paragraph code */}

    <div className="text-xl text-gray-200 bg-gradient-to-r from-gray-800 via-gray-900 to-black p-6 rounded-lg shadow-lg border border-gray-700 leading-relaxed tracking-wide">
    Heap sort is a comparison-based sorting technique based on the Binary Heap Data Structure. 
    It can be seen as an optimization over selection sort, where we first find the max (or min) element 
    and swap it with the last (or first). We repeat the same process for the remaining elements. 
    In Heap Sort, we use a Binary Heap so that we can quickly find and move the max element in 
    <span className="text-yellow-400 font-semibold"> O(Log n) </span> instead of 
    <span className="text-yellow-400 font-semibold"> O(n) </span> and hence achieve the 
    <span className="text-yellow-400 font-semibold"> O(n Log n) </span> time complexity.
    </div>

{/* heap sort first img example  ka code */}

      <div className="flex justify-center items-center p-6">
      <img 
        src={HEAP_SORT_IMG} 
        alt="Heap Sort Visualization" 
        className="max-w-full h-auto rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105" />
      </div>

{/* heap sort another heading */}

      <div className="text-center my-6">
        <h2 className="text-4xl font-extrabold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-[-5px] after:w-full after:h-1 after:bg-gradient-to-r after:from-indigo-500 after:via-purple-500 after:to-pink-500 after:rounded-full after:transition-all after:duration-300  after:ease-in-out hover:after:scale-x-105 hover:drop-shadow-lg">
        Heap Sort Algorithm
        </h2>
      </div>

{/*heap sort algorithm paragraph  ka code..  */}

<div className="bg-gray-900 text-gray-200 p-6 rounded-lg shadow-lg border border-gray-800">
  <p className="text-lg leading-relaxed mb-4">
    First, convert the array into a <span className="text-yellow-400 font-semibold">Max Heap</span> using heapify. 
    Please note that this happens <span className="text-green-400 font-semibold">in-place</span>. 
    The array elements are re-arranged to follow heap properties. 
    Then, one by one, delete the root node of the Max-heap, replace it with the last node, and heapify. 
    Repeat this process while the heap size is greater than 1.
  </p>

  <ul className="list-disc pl-6 space-y-2">
    <li className="text-lg">
      <span className="text-purple-400 font-semibold">Rearrange</span> array elements so that they form a Max Heap.
    </li>

    <li className="text-lg">
      <span className="text-purple-400 font-semibold">Repeat</span> the following steps until the heap contains only one element:
      <ul className="list-decimal pl-6 mt-2 space-y-2 text-base">
        <li>
          <span className="text-blue-400 font-semibold">Swap</span> the root element of the heap 
          (which is the largest element in the current heap) with the last element of the heap.
        </li>
        <li>
          <span className="text-blue-400 font-semibold">Remove</span> the last element of the heap (which is now in the correct position). 
          We mainly reduce heap size and do not remove the element from the actual array.
        </li>
        <li>
          <span className="text-blue-400 font-semibold">Heapify</span> the remaining elements of the heap.
        </li>
      </ul>
    </li>

    <li className="text-lg">
      <span className="text-green-400 font-semibold">Finally</span>, we get a sorted array.
    </li>
  </ul>
</div>

{/* heap sort step by step working code.. */}
{/* heap sort first heading ka code */}

  <div>
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

{/* code of step1 heading  */}

    <div className="text-left my-4 pl-6">
        <h3 className="text-2xl font-semibold text-black">
             Step 1: Treat the Array as a Complete Binary Tree
        </h3>
    </div>

    <div className="text-left my-6 p-4 border-l-4 border-blue-500">
        <p className="text-lg text-gray-800 leading-relaxed">
          We first need to visualize the array as a complete binary tree. For an array of size <strong>n</strong>,  
          the root is at index <strong>0</strong>, the left child of an element at index <strong>i</strong> is at <strong>2i + 1</strong>,  
          and the right child is at <strong>2i + 2</strong>.
        </p>
    <div className="mt-4 flex justify-center">
      <img src={HEAP_SORT_STEP1} alt="Heap Sort Step 1" className="w-full max-w-lg rounded-lg shadow-lg" />
    </div>
  </div>
</div>

{/* heap sort step 2 and 3 code.. */}

      <div className="text-left my-4 pl-6">
            <h3 className="text-2xl font-semibold text-black">
                Step 2: Build a Max Heap
            </h3>
      </div>

      <div className="text-left my-6 p-4 border-l-4 border-blue-500">
          <p className="text-lg text-gray-800 leading-relaxed">
              In this step, we build a <strong>Max Heap</strong> from the given array. A Max Heap ensures that the largest 
              element is at the root, maintaining the heap property.
          </p>
        <div className="mt-4 flex justify-center">
          <img src={HEAP_SORT_STEP2} alt="Heap Sort Step 2" className="w-full max-w-lg rounded-lg shadow-lg" />
         </div>
      </div>

      <div className="text-left my-4 pl-6">
          <h3 className="text-2xl font-semibold text-black">
              Step 3: Sort the Array by Placing the Largest Element at the End
          </h3>
      </div>

        <div className="text-left my-6 p-4 border-l-4 border-blue-500">
              <p className="text-lg text-gray-800 leading-relaxed">
               Now, we repeatedly swap the root (largest element) with the last element in the unsorted section and 
              heapify the reduced heap to maintain the max heap property.
              </p>
           <div className="mt-4 flex justify-center">
              <img src={HEAP_SORT_STEP3} alt="Heap Sort Step 3" className="w-full max-w-lg rounded-lg shadow-lg" />
            </div>
        </div>


<div className="text-left my-6 pl-6">
  <h3 className="text-2xl font-semibold text-black">
    Complexity Analysis of Heap Sort
  </h3>
</div>

<div className="text-left my-6 p-4 border-l-4 border-purple-500 bg-gray-50 rounded-lg shadow-md">
  <p className="text-lg text-gray-800 leading-relaxed">
    The **time complexity** and **space complexity** of Heap Sort depend on how it is implemented.
  </p>

  <div className="mt-4 p-4 bg-white rounded-lg shadow-md">
    <p className="text-lg font-semibold text-purple-600">⏳ Time Complexity:</p>
    <p className="text-gray-800">O(<strong>n log n</strong>)</p>
  </div>

  <div className="mt-4 p-4 bg-white rounded-lg shadow-md">
    <p className="text-lg font-semibold text-purple-600">💾 Auxiliary Space:</p>
    <p className="text-gray-800">
      O(<strong>log n</strong>), due to the recursive call stack. However, for an **iterative implementation**, 
      auxiliary space can be **O(1)**.
    </p>
  </div>
</div>

<div className="text-left my-6 pl-6">
  <h3 className="text-2xl font-semibold text-black">
    Advantages of Heap Sort
  </h3>
</div>

<div className="text-left my-6 p-4 border-l-4 border-green-500 bg-gray-50 rounded-lg shadow-md">
  <ul className="list-disc pl-6 space-y-3 text-gray-800">
    <li>
      <span className="font-semibold text-green-700">Efficient Time Complexity:</span> Heap Sort has a time complexity of 
      <strong> O(n log n) </strong> in all cases, making it suitable for large datasets. The <strong>log n</strong> factor 
      comes from the height of the binary heap, ensuring efficient performance.
    </li>
    <li>
      <span className="font-semibold text-green-700">Memory Usage:</span> Memory usage can be minimal when an 
      <strong> iterative heapify() </strong> is used instead of a recursive one. It requires no additional memory beyond 
      storing the input elements.
    </li>
    <li>
      <span className="font-semibold text-green-700">Simplicity:</span> Heap Sort is easier to understand compared to 
      other sorting algorithms since it does not rely on complex concepts like recursion.
    </li>
  </ul>
</div>

<div className="text-left my-6 pl-6">
  <h3 className="text-2xl font-semibold text-black">
    Disadvantages of Heap Sort
  </h3>
</div>

<div className="text-left my-6 p-4 border-l-4 border-red-500 bg-gray-50 rounded-lg shadow-md">
  <ul className="list-disc pl-6 space-y-3 text-gray-800">
    <li>
      <span className="font-semibold text-red-700">Costly:</span> Heap Sort has a higher constant factor compared to 
      <strong>Merge Sort</strong>, even though both have <strong>O(n log n)</strong> time complexity.
    </li>
    <li>
      <span className="font-semibold text-red-700">Unstable:</span> Heap Sort is an <strong>unstable</strong> sorting algorithm, 
      meaning it may not maintain the relative order of equal elements.
    </li>
    <li>
      <span className="font-semibold text-red-700">Inefficient:</span> Due to its higher constants, Heap Sort is not as 
      efficient in practice compared to other <strong>n log n</strong> sorting algorithms like Quick Sort or Merge Sort.
    </li>
  </ul>
</div>


{/* gfg link  */}

<div className="text-left my-6 p-4 border-l-4 border-blue-500 bg-gray-50 rounded-lg shadow-md">
  <p className="text-lg text-gray-800 leading-relaxed">
    Try it on 
    <a href="https://www.geeksforgeeks.org/heap-sort/" target="_blank" rel="noopener noreferrer" 
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
