// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import IMG from "../assets/Heap_sort_example.gif";


// export default function Sorting() {
//     const navigate = useNavigate();
//     const [flipped, setFlipped] = useState(Array(6).fill(true));
  
//     const sorting = [
//         { name: 'Heap Sort', img: IMG, description: 'Heap Sort: Sorts using a binary heap, repeatedly extracting the max element.', link: '/sorting/heap' },

//         { name: 'Merge Sort', img: IMG, description: 'Efficient divide-and-conquer sorting with O(n log n) time.', link: '/sorting/merge' },

//         { name: 'Quick Sort', img: IMG, description: 'Fast in practice, uses partitioning to sort in O(n log n).', link: '/sorting/quick' },

//         { name: 'Insertion Sort', img: IMG, description: 'Efficient for small or nearly sorted data, O(n²) worst case.', link: '/sorting/insertion' },

//         { name: 'Bubble Sort', img: IMG, description: 'Simple but slow, repeatedly swaps adjacent elements.', link: '/sorting/bubble' },

//         { name: 'Selection Sort', img: IMG, description: 'Finds the minimum and swaps, O(n²) time complexity.', link: '/sorting/selection' },
//     ];
  
//     const handleMouseEnter = (index) => {
//         setFlipped(prev => prev.map((flip, i) => (i === index ? false : flip)));
//         console.log(flipped);
//     };
  
//     const handleMouseLeave = (index) => {
//         setFlipped(prev => prev.map((flip, i) => (i === index ? true : flip)));
//     };
  
  
//     return (
//         <main className="mt-20 bg-gradient-to-br from-[#f4f4f4] to-[#e8e8e8] py-12 px-6 rounded-lg shadow-xl border border-gray-300">
//             <h1 className="text-5xl font-bold text-center text-gray-800 tracking-wide 
//         transition-all duration-300 hover:text-[#0056b3] hover:scale-105">
//                 Explore Sorting Algorithm 
//             </h1>

//             <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 px-10 py-10'>
//             {sorting.map((element, index) => (
//                 <div 
//                     key={index} 
//                     className='relative w-full h-72 perspective' 
//                     onMouseEnter={() => handleMouseEnter(index)} 
//                     onMouseLeave={() => handleMouseLeave(index)}
//                 >
//                     <div className={`relative w-full h-full transform-style-preserve-3d transition-transform duration-500 ${flipped[index] ? 'rotate-y-180 scale-150' : ''}`}>
//                         {/* Back Side */}
//                         <div className='absolute w-full h-full backface-hidden shadow-lg rounded-lg overflow-hidden bg-white border border-gray-300 flex flex-col items-center justify-center p-4'>
//                             <div className='bg-gray-100 p-4 rounded-full'>
//                                 <img src={element.img} alt={element.name} className='h-20 w-20 object-contain' />
//                             </div>
//                             <h3 className='text-xl font-semibold mt-4'>{element.name}</h3>
//                             <p className='text-gray-600 text-sm text-center'>{element.description}</p>
//                             <button onClick={() => navigate(element.link)} className='mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition'>Explore</button>
//                         </div>
//                         {/* Front Side */}
//                         <div className='absolute w-full h-full backface-hidden rotate-y-180 flex items-center justify-center shadow-lg rounded-lg overflow-hidden card-gradient text-white text-4xl uppercase font-bold'>
//                             {/* <img src={BACK_IMG} alt='Back' className='h-32 w-32 object-contain' /> */}
//                             {element.name}
//                         </div>
//                     </div>
//                 </div>
//             ))}
//         </div>
//         </main>
//     )
// }


// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import IMG from "../assets/Heap_sort_example.gif";
// import MERGEIMAGE from "../assets/Merge sort example.gif";

// export default function Sorting() {
//     const navigate = useNavigate();
//     const [flipped, setFlipped] = useState(Array(6).fill(true));

//     const sorting = [
//         { name: 'Heap Sort', img: IMG, description: 'Uses a binary heap to sort by repeatedly extracting the max element. O(n log n) time.', link: '/sorting/heap' },

//         { name: 'Merge Sort', img: MERGEIMAGE, description: 'Divide-and-conquer sorting with O(n log n) time.', link: '/sorting/merge' },

//         { name: 'Quick Sort', img: IMG, description: 'Uses partitioning to sort efficiently in O(n log n).', link: '/sorting/quick' },

//         { name: 'Insertion Sort', img: IMG, description: 'Good for small or nearly sorted data, O(n²) worst case.', link: '/sorting/insertion' },

//         { name: 'Bubble Sort', img: IMG, description: 'Simple but slow, repeatedly swaps adjacent elements.', link: '/sorting/bubble' },

//         { name: 'Selection Sort', img: IMG, description: 'Finds the minimum and swaps, O(n²) time complexity.', link: '/sorting/selection' },
//     ];

//     const handleMouseEnter = (index) => {
//         setFlipped(prev => prev.map((flip, i) => (i === index ? false : flip)));
//     };

//     const handleMouseLeave = (index) => {
//         setFlipped(prev => prev.map((flip, i) => (i === index ? true : flip)));
//     };

//     return (
//         <main className="mt-20 bg-gradient-to-br from-[#f4f4f4] to-[#e8e8e8] py-12 px-6 rounded-lg shadow-xl border border-gray-300">
//             <h1 className="text-5xl font-bold text-center text-gray-800 tracking-wide transition-all duration-300 hover:text-[#0056b3] hover:scale-105">
//                 Explore Sorting Algorithm
//             </h1>

//             <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 px-10 py-10'>
//                 {sorting.map((element, index) => (
//                     <div 
//                         key={index} 
//                         className='relative w-full h-96 perspective' 
//                         onMouseEnter={() => handleMouseEnter(index)} 
//                         onMouseLeave={() => handleMouseLeave(index)}
//                     >
//                         <div className={`relative w-full h-full transform-style-preserve-3d transition-transform duration-500 ${flipped[index] ? 'rotate-y-180 scale-150' : ''}`}>
                            
//                             {/* Back Side */}
//                             <div className='absolute w-full h-full backface-hidden shadow-lg rounded-lg overflow-hidden bg-white border border-gray-300 flex flex-col items-center justify-center p-6'>
//                                 <div>
//                                     <img src={element.img} alt={element.name} className='w-full h-full object-cover' />
//                                 </div>
//                                 <h3 className='text-xl font-semibold mt-5'>{element.name}</h3>
//                                 <p className='text-gray-600 text-center text-sm px-4'>{element.description}</p>
//                                 <button onClick={() => navigate(element.link)} className='mt-5 px-5 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-300'>
//                                     Explore
//                                 </button>
//                             </div>
//                             {/* Front Side */}
//                             <div className='absolute w-full h-full backface-hidden rotate-y-180 flex items-center justify-center shadow-lg rounded-lg overflow-hidden card-gradient text-white text-4xl uppercase font-bold'>
//                                 {element.name}
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </main>
//     )
// }



// these code 

// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import IMG from "../assets/Heap_sort_example.gif";
// import MERGEIMAGE from "../assets/merge-sort.png";

// export default function Sorting() {
//     const navigate = useNavigate();
//     const [flipped, setFlipped] = useState(Array(6).fill(true));

//     const sorting = [
//         { name: 'Heap Sort', img: IMG, description: 'Uses a binary heap to sort by repeatedly extracting the max element. O(n log n) time.', link: '/sorting/heap' },

//         { name: 'Merge Sort', img: MERGEIMAGE, description: 'Divide-and-conquer sorting with O(n log n) time.', link: '/sorting/merge' },

//         { name: 'Quick Sort', img: IMG, description: 'Uses partitioning to sort efficiently in O(n log n).', link: '/sorting/quick' },

//         { name: 'Insertion Sort', img: IMG, description: 'Good for small or nearly sorted data, O(n²) worst case.', link: '/sorting/insertion' },

//         { name: 'Bubble Sort', img: IMG, description: 'Simple but slow, repeatedly swaps adjacent elements.', link: '/sorting/bubble' },

//         { name: 'Selection Sort', img: IMG, description: 'Finds the minimum and swaps, O(n²) time complexity.', link: '/sorting/selection' },
//     ];

//     const handleMouseEnter = (index) => {
//         setFlipped(prev => prev.map((flip, i) => (i === index ? false : flip)));
//     };

//     const handleMouseLeave = (index) => {
//         setFlipped(prev => prev.map((flip, i) => (i === index ? true : flip)));
//     };

//     return (
//         <main className="mt-20 bg-gradient-to-br from-[#f4f4f4] to-[#e8e8e8] py-12 px-6 rounded-lg shadow-xl border border-gray-300">
//             <h1 className="text-5xl font-bold text-center text-gray-800 tracking-wide transition-all duration-300 hover:text-[#0056b3] hover:scale-105">
//                 Explore Sorting Algorithms
//             </h1>

//             <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 px-10 py-10'>
//                 {sorting.map((element, index) => (
//                     <div 
//                         key={index} 
//                         className='relative w-full h-96 perspective' 
//                         onMouseEnter={() => handleMouseEnter(index)} 
//                         onMouseLeave={() => handleMouseLeave(index)}
//                     >
//                         <div className={`relative w-full h-full transform-style-preserve-3d transition-transform duration-500 ${flipped[index] ? '' : 'rotate-y-180'}`}>
                            
//                             {/* Front Side */}
//                             <div className='absolute w-full h-full backface-hidden shadow-lg rounded-lg overflow-hidden bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white text-3xl font-bold uppercase'>
//                                 {element.name}
//                             </div>

//                             {/* Back Side */}
//                             <div className='absolute w-full h-full backface-hidden rotate-y-180 shadow-lg rounded-lg overflow-hidden bg-white border border-gray-300 flex flex-col items-center justify-start p-4'>
//                                 <img src={element.img} alt={element.name} className='w-full h-40 object-cover rounded-lg' />
//                                 <h3 className='text-xl font-semibold mt-4'>{element.name}</h3>
//                                 <p className='text-gray-600 text-center text-sm px-2'>{element.description}</p>
//                                 <button onClick={() => navigate(element.link)} className='mt-3 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-300'>
//                                     Explore
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </main>
//     )
// }



// new code 


import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import IMG from "../assets/Heap_sort_example.gif";
import MERGEIMAGE from "../assets/Merge sort example.gif";
import QUICKIMAGE from "../assets/quick sort example.gif";
import INSERTIONIMAGE from "../assets/insertion sort example.gif";
import BUBBLEIMAGE from "../assets/BubbleSort example.gif";
import SELECTIONIMAGE from "../assets/SelectionSort example.gif";




export default function Sorting() {
    const navigate = useNavigate();
    const [flipped, setFlipped] = useState(Array(6).fill(false));

    const sorting = [
        { name: 'Heap Sort', img: IMG, description: '"Uses a binary heap to sort by repeatedly extracting the max element. O(n log n) time."', link: '/sorting/heap' },

        { name: 'Merge Sort', img: MERGEIMAGE, description: '"Merge Sort is a divide-and-conquer algorithm that recursively splits and merges arrays in sorted order, with O(n log n) time complexity."', link: '/sorting/merge' },

        { name: 'Quick Sort', img: QUICKIMAGE, description: '"Quick Sort is a divide-and-conquer algorithm that partitions the array and recursively sorts subarrays, achieving O(n log n) average time complexity."', link: '/sorting/quick' },

        { name: 'Insertion Sort', img: INSERTIONIMAGE, description: '"Efficient for small or nearly sorted data, inserting elements into their correct position. Worst-case time complexity is O(n²)."', link: '/sorting/insertion' },

        { name: 'Bubble Sort', img: BUBBLEIMAGE, description: '" A simple but slow algorithm that repeatedly swaps adjacent elements if they are in the wrong order until the list is sorted."', link: '/sorting/bubble' },

        { name: 'Selection Sort', img: SELECTIONIMAGE, description: '"Selects the smallest element in each pass and swaps it into place, leading to O(n²) time complexity. Suitable for small datasets."', link: '/sorting/selection' },
    ];

    const handleMouseEnter = (index) => {
        setFlipped(prev => prev.map((flip, i) => (i === index ? true : flip)));
    };

    const handleMouseLeave = (index) => {
        setFlipped(prev => prev.map((flip, i) => (i === index ? false : flip)));
    };

    return (
        <main className="mt-20 bg-gradient-to-br from-gray-100 to-gray-200 py-12 px-6 rounded-lg shadow-xl border border-gray-300">
            <h1 className="text-5xl font-bold text-center text-gray-800 tracking-wide transition-all duration-300 hover:text-blue-600 hover:scale-105">
                Explore Sorting Algorithms
            </h1>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 px-10 py-10'>
                {sorting.map((element, index) => (
                    <div 
                        key={index} 
                        className='relative w-full h-96 perspective hover:scale-105 transition-all duration-500'
                        onMouseEnter={() => handleMouseEnter(index)} 
                        onMouseLeave={() => handleMouseLeave(index)}
                    >
                        <div className={`relative w-full h-full transform-style-preserve-3d transition-transform duration-500 ${flipped[index] ? 'rotate-y-180' : ''}`}>
                            {/* Front Side */}
                            <div className='absolute w-full h-full backface-hidden shadow-lg rounded-lg overflow-hidden bg-gradient-to-r from-orange-500 to-blue-500  flex items-center justify-center text-white text-3xl font-bold uppercase'>
                                {element.name}
                            </div>

                            {/* Back Side */}
                            <div className='absolute w-full h-full backface-hidden rotate-y-180 shadow-lg rounded-lg overflow-hidden bg-white border border-gray-300 flex flex-col items-center justify-start p-4'>
                                <img src={element.img} alt={element.name} className='w-full h-40 object-contain rounded-lg' />
                                <h3 className='text-xl font-semibold mt-4 text-gray-800'>{element.name}</h3>
                                <p className='text-gray-600 text-center text-sm px-2'>{element.description}</p>
                                <button onClick={() => navigate(element.link)} className='mt-3 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-300'>
                                    Explore
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}