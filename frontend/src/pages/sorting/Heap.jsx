import React from 'react'
import HEAP_SORT_IMG from "../../assets/Heap-sort-algo.png"
import HEAP_SORT_STEP1 from "../../assets/heap-sort-step1.webp"
import HEAP_SORT_STEP2 from "../../assets/heap-sort-step2.webp"
import HEAP_SORT_STEP3 from "../../assets/heap-sort-step3.webp"
export const Heap = () => {
  return (
    <div className='mt-24 px-24 flex flex-col gap-7'>

      <h1 className='text-center text-7xl font-semibold'>Heap Sort</h1>

      <div className='border border-black'>
        Heap sort is a comparison-based sorting technique based on Binary Heap Data Structure. It can be seen as an optimization over selection sort where we first find the max (or min) element and swap it with the last (or first). We repeat the same process for the remaining elements. In Heap Sort, we use Binary Heap so that we can quickly find and move the max element in O(Log n) instead of O(n) and hence achieve the O(n Log n) time complexity.
      </div>

      <div className='border border-black grid place-items-center'>
        <img src={HEAP_SORT_IMG} alt="no img" height={700} width={700} />
      </div>

      <div>
        <h2 className='text-4xl font-semibold'>
          Heap Sort Algorithm
        </h2>

        <p>
          First convert the array into a max heap using heapify, Please note that this happens in-place. The array elements are re-arranged to follow heap properties. Then one by one delete the root node of the Max-heap and replace it with the last node and heapify. Repeat this process while size of heap is greater than 1.
        </p>

        <ul className='list-disc'>
          <li>
            Rearrange array elements so that they form a Max Heap.
          </li>
          <li>
            Repeat the following steps until the heap contains only one element:
            <ul className='list-decimal ml-7'>
              <li>
                Swap the root element of the heap (which is the largest element in current heap) with the last element of the heap.
              </li>

              <li>
                Remove the last element of the heap (which is now in the correct position). We mainly reduce heap size and do not remove element from the actual array.
              </li>
              <li>
                Heapify the remaining elements of the heap.
              </li>
            </ul>
          </li>

          <li>
            Finally we get sorted array.
          </li>
        </ul>

        <h2 className='text-4xl font-semibold'>
        Detailed Working of Heap Sort
        </h2>

        <h3 className='text-2xl font-semibold'>
        Step 1: Treat the Array as a Complete Binary Tree
        </h3>

        <p>We first need to visualize the array as a complete binary tree. For an array of size n, the root is at index 0, the left child of an element at index i is at 2i + 1, and the right child is at 2i + 2.</p>

        <img src={HEAP_SORT_STEP1} alt="" />

        <h3 className='text-2xl font-semibold'>
        Step 2: Build a Max Heap
        </h3>

        <img src={HEAP_SORT_STEP2} alt="" />

        <h3 className='text-2xl font-semibold'>
        Step 3: Sort the array by placing largest element at end of unsorted array.
        </h3>

        <img src={HEAP_SORT_STEP3} alt="" />
      </div>
    </div>
  )
}
