import React, { useState, useRef } from 'react';

export const BinaryVisualize = () => {
  const [array, setArray] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [target, setTarget] = useState('');
  const [currentIndices, setCurrentIndices] = useState({});
  const [foundIndex, setFoundIndex] = useState(null);
  const [description, setDescription] = useState('Enter a sorted array and target value to start.');
  const [isSearching, setIsSearching] = useState(false);

  const timeoutRef = useRef(null);

  const reset = () => {
    setCurrentIndices({});
    setFoundIndex(null);
    setDescription('Enter a sorted array and target value to start.');
    setIsSearching(false);
    clearTimeout(timeoutRef.current);
  };

  const handleStartSearch = async () => {
    const numTarget = parseInt(target, 10);
    if (isNaN(numTarget)) {
      setDescription('Please enter a valid target number.');
      return;
    }

    setIsSearching(true);
    await binarySearch(array, numTarget);
    setIsSearching(false);
  };

  const handleSetArray = () => {
    const values = inputValue
      .split(',')
      .map(v => parseInt(v.trim(), 10))
      .filter(v => !isNaN(v))
      .sort((a, b) => a - b);
    if (values.length > 0) {
      setArray(values);
      reset();
      setDescription('Array is set and sorted. Enter target and press "Start Search".');
    }
  };

  const binarySearch = async (arr, target) => {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
      const mid = Math.floor((low + high) / 2);
      setCurrentIndices({ low, mid, high });
      setDescription(`Searching... low: ${low}, mid: ${mid}, high: ${high}`);

      await new Promise(resolve => {
        timeoutRef.current = setTimeout(resolve, 1000);
      });

      if (arr[mid] === target) {
        setDescription(`Found ${target} at index ${mid}`);
        setFoundIndex(mid);
        return;
      } else if (arr[mid] < target) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }

    setDescription(`${target} not found in the array.`);
  };

  const getBarColor = (index) => {
    if (index === foundIndex) return 'bg-green-500';
    if (index === currentIndices.mid) return 'bg-yellow-400';
    if (index === currentIndices.low || index === currentIndices.high) return 'bg-pink-400';
    return 'bg-blue-400';
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-white to-indigo-100 p-8">
      <div className="max-w-6xl mx-auto flex flex-col gap-8">
        <h1 className="text-5xl font-bold text-center text-gray-800">Binary Search Visualizer</h1>

        {/* Controls */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
          <input
            type="text"
            placeholder="Enter sorted numbers (e.g. 1,2,3)"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            disabled={isSearching}
            className="w-full md:w-96 px-4 py-2 rounded-md shadow-md border border-gray-300"
          />
          <button
            onClick={handleSetArray}
            disabled={isSearching}
            className="px-6 py-2 font-semibold rounded-md shadow-md text-white bg-green-500 hover:bg-green-600"
          >
            Set Array
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
          <input
            type="number"
            placeholder="Target number"
            value={target}
            onChange={(e) => setTarget(e.target.value)}
            disabled={isSearching}
            className="w-full md:w-96 px-4 py-2 rounded-md shadow-md border border-gray-300"
          />
          <button
            onClick={handleStartSearch}
            disabled={isSearching || array.length === 0}
            className="px-6 py-3 font-bold rounded-md shadow-md text-white bg-indigo-600 hover:bg-indigo-700"
          >
            {isSearching ? 'Searching...' : 'Start Search'}
          </button>
        </div>

        {/* Description */}
        <div className="text-lg font-medium text-gray-700 bg-indigo-50 border border-indigo-300 rounded-md p-4 shadow-sm text-center">
          {description}
        </div>

        {/* Bar Graph */}
        <div className="flex justify-center items-end gap-2 h-[300px]">
          {array.map((val, idx) => (
            <div key={idx} className="flex flex-col items-center w-10 relative">
              <div className="text-sm text-gray-700 mb-1">{val}</div>
              <div
                className={`w-full h-[${val * 2}px] ${getBarColor(idx)} rounded-t-md transition-all duration-300`}
                style={{ height: `${val * 4}px` }}
              />
              <div className="text-xs text-gray-500 mt-1">i={idx}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BinaryVisualize;
