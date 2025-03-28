import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import IMG from "../assets/linear search example.gif";
import BINARYSEARCH from "../assets/binary search example.gif";

export const Searching = () => {
  const navigate = useNavigate();
  const [flipped, setFlipped] = useState(Array(2).fill(true));

  const searching = [
    { name: 'Linear Search', img: IMG, description: 'Simple sequential search algorithm.', link: '/searching/linear' },
    
    { name: 'Binary Search', img:BINARYSEARCH , description: 'Efficient divide and conquer search.', link: '/searching/binary' },
  ];

  const handleMouseEnter = (index) => {
    setFlipped(prev => prev.map((flip, i) => (i === index ? false : flip)));
  };

  const handleMouseLeave = (index) => {
    setFlipped(prev => prev.map((flip, i) => (i === index ? true : flip)));
  };

  return (
    <main className="mt-20">
      <h1 className="text-4xl text-center py-7">
        Explore Searching Algorithm
      </h1>

      <div className='grid grid-cols-1 sm:grid-cols-2 gap-7 px-10 py-7'>
        {searching.map((element, index) => (
          <div
            key={index}
            className='relative w-full h-96 perspective flex justify-center items-center'
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            <div className={`relative w-1/2 h-full transform-style-preserve-3d transition-transform duration-500 ${flipped[index] ? 'rotate-y-180 scale-150' : ''}`}>
              {/* Front Side */}
              <div className='absolute w-full h-full backface-hidden shadow-lg rounded-lg overflow-hidden bg-white border border-gray-300 flex flex-col items-center justify-center p-4'>
                <div className='bg-gray-100 p-4 rounded-full'>
                  <img src={element.img} alt={element.name} className='h-20 w-20 object-contain' />
                </div>
                <h3 className='text-xl font-semibold mt-4'>{element.name}</h3>
                <p className='text-gray-600 text-sm text-center'>{element.description}</p>
                <button onClick={() => navigate(element.link)} className='mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition'>Explore</button>
              </div>
              {/* Back Side */}
              <div className='absolute w-full h-full backface-hidden rotate-y-180 flex items-center justify-center shadow-lg rounded-lg overflow-hidden card-gradient text-white text-4xl uppercase font-bold'>
                {element.name}
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};




