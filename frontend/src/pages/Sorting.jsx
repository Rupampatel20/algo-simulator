import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import IMG from "../assets/logo.png";
export default function Sorting() {
    const navigate = useNavigate();
    const [flipped, setFlipped] = useState(Array(6).fill(true));
  
    const sorting = [
        { name: 'Heap Sort', img: IMG, description: 'Efficient binary heap-based sorting.', link: '/sorting/heap' },
        { name: 'Merge Sort', img: IMG, description: 'Divide and conquer sorting algorithm.', link: '/sorting/merge' },
        { name: 'Quick Sort', img: IMG, description: 'Fastest comparison-based sort.', link: '/sorting/quick' },
        { name: 'Insertion Sort', img: IMG, description: 'Simple, efficient for small data.', link: '/sorting/insertion' },
        { name: 'Bubble Sort', img: IMG, description: 'Basic sorting algorithm.', link: '/sorting/bubble' },
        { name: 'Selection Sort', img: IMG, description: 'In-place comparison sorting.', link: '/sorting/selection' },
    ];
  
    const handleMouseEnter = (index) => {
        setFlipped(prev => prev.map((flip, i) => (i === index ? false : flip)));
        console.log(flipped);
    };
  
    const handleMouseLeave = (index) => {
        setFlipped(prev => prev.map((flip, i) => (i === index ? true : flip)));
    };
  
  
    return (
        <main className="mt-20">
            <h1 className="text-4xl text-center py-7">
                Explore Sorting Algorithm 
            </h1>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 px-10 py-7'>
            {sorting.map((element, index) => (
                <div 
                    key={index} 
                    className='relative w-full h-56 perspective' 
                    onMouseEnter={() => handleMouseEnter(index)} 
                    onMouseLeave={() => handleMouseLeave(index)}
                >
                    <div className={`relative w-full h-full transform-style-preserve-3d transition-transform duration-500 ${flipped[index] ? 'rotate-y-180 scale-150' : ''}`}>
                        {/* Back Side */}
                        <div className='absolute w-full h-full backface-hidden shadow-lg rounded-lg overflow-hidden bg-white border border-gray-300 flex flex-col items-center justify-center p-4'>
                            <div className='bg-gray-100 p-4 rounded-full'>
                                <img src={element.img} alt={element.name} className='h-20 w-20 object-contain' />
                            </div>
                            <h3 className='text-xl font-semibold mt-4'>{element.name}</h3>
                            <p className='text-gray-600 text-sm text-center'>{element.description}</p>
                            <button onClick={() => navigate(element.link)} className='mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition'>Explore</button>
                        </div>
                        {/* Front Side */}
                        <div className='absolute w-full h-full backface-hidden rotate-y-180 flex items-center justify-center shadow-lg rounded-lg overflow-hidden card-gradient text-white text-4xl uppercase font-bold'>
                            {/* <img src={BACK_IMG} alt='Back' className='h-32 w-32 object-contain' /> */}
                            {element.name}
                        </div>
                    </div>
                </div>
            ))}
        </div>
        </main>
    )
}

