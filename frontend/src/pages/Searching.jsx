// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import IMG from "../assets/linear search example.gif";
// import BINARYSEARCH from "../assets/binary search example.gif";

// export const Searching = () => {
//   const navigate = useNavigate();
//   const [flipped, setFlipped] = useState(Array(2).fill(true));

//   const searching = [
//     { name: 'Linear Search', img: IMG, description: 'Simple sequential search algorithm.', link: '/searching/linear' },
    
//     { name: 'Binary Search', img:BINARYSEARCH , description: 'Efficient divide and conquer search.', link: '/searching/binary' },
//   ];

//   const handleMouseEnter = (index) => {
//     setFlipped(prev => prev.map((flip, i) => (i === index ? false : flip)));
//   };

//   const handleMouseLeave = (index) => {
//     setFlipped(prev => prev.map((flip, i) => (i === index ? true : flip)));
//   };

//   return (
//     <main className="mt-20">
//       <h1 className="text-4xl text-center py-7">
//         Explore Searching Algorithm
//       </h1>

//       <div className='grid grid-cols-1 sm:grid-cols-2 gap-7 px-10 py-7'>
//         {searching.map((element, index) => (
//           <div
//             key={index}
//             className='relative w-full h-96 perspective flex justify-center items-center'
//             onMouseEnter={() => handleMouseEnter(index)}
//             onMouseLeave={() => handleMouseLeave(index)}
//           >
//             <div className={`relative w-1/2 h-full transform-style-preserve-3d transition-transform duration-500 ${flipped[index] ? 'rotate-y-180 scale-150' : ''}`}>
//               {/* Front Side */}
//               <div className='absolute w-full h-full backface-hidden shadow-lg rounded-lg overflow-hidden bg-white border border-gray-300 flex flex-col items-center justify-center p-4'>
//                 <div className='bg-gray-100 p-4 rounded-full'>
//                   <img src={element.img} alt={element.name} className='h-20 w-20 object-contain' />
//                 </div>
//                 <h3 className='text-xl font-semibold mt-4'>{element.name}</h3>
//                 <p className='text-gray-600 text-sm text-center'>{element.description}</p>
//                 <button onClick={() => navigate(element.link)} className='mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition'>Explore</button>
//               </div>
//               {/* Back Side */}
//               <div className='absolute w-full h-full backface-hidden rotate-y-180 flex items-center justify-center shadow-lg rounded-lg overflow-hidden card-gradient text-white text-4xl uppercase font-bold'>
//                 {element.name}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </main>
//   );
// };


import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import IMG from "../assets/linear example.gif";
import BINARYSEARCH from "../assets/binary example.gif";

export const Searching = () => {
  const navigate = useNavigate();
  const [flipped, setFlipped] = useState(Array(2).fill(false));

  const searching = [
    { name: 'Linear Search', img: IMG, description: '"Linear Search is a simple algorithm that checks each element in a list sequentially until the target value is found or the list ends. It has a time complexity of O(n)".', link: '/searching/linear' },
    { name: 'Binary Search', img: BINARYSEARCH, description: '"Binary Search efficiently finds elements in a sorted array by repeatedly dividing the search range in half. O(log n) time complexity."', link: '/searching/binary' },
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
        Explore Searching Algorithms
      </h1>

      <div className='grid grid-cols-1 sm:grid-cols-2 gap-10 px-10 py-10'>
        {searching.map((element, index) => (
          <div
            key={index}
            className='relative w-full h-80 perspective hover:scale-105 transition-all duration-500'
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            <div className={`relative w-full h-full transform-style-preserve-3d transition-transform duration-500 ${flipped[index] ? 'rotate-y-180' : ''}`}>
              {/* Front Side */}
              <div className='absolute w-full h-full backface-hidden shadow-lg rounded-lg overflow-hidden bg-gradient-to-r from-green-500 to-purple-500 flex items-center justify-center text-white text-3xl font-bold uppercase'>
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
};

