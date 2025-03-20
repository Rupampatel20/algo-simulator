import React from "react";
import sortingImage from "../../assets/sorting.gif";
import searchingImage from "../../assets/unnamed.gif";

const CardSection = () => {
  return (
    <section className="py-16 bg-white text-gray-900 flex flex-col items-center" id="card-section">
      {/* Title */}
      <h2 className="text-3xl font-bold mb-12 text-gray-800 transition-all duration-500 hover:scale-110 hover:text-yellow-500 hover:shadow-md">
  Unlock the Power of Sorting & Searching – A Step Towards Efficiency!
</h2>


      {/* Card Container */}
      <div className="relative flex flex-wrap gap-10 px-6">
        {/* Sorting Card + Button */}
        <div className="flex flex-col items-center">
          <a href="/sorting">
            <div className="group relative w-80 h-96 bg-gray-100 rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
              <img
                src={sortingImage}
                alt="Sorting"
                className="w-full h-2/3 object-cover transition-opacity duration-500 opacity-80 group-hover:opacity-100"
              />
              <div className="p-5 text-center">
                <h3 className="text-xl font-semibold text-gray-800 transition-all duration-300 group-hover:text-yellow-500">
                  Sorting Algorithms
                </h3>
                <p className="text-sm text-gray-500">Explore efficient sorting techniques.</p>
              </div>
            </div>
          </a>
          {/* Sorting Button - Positioned Directly Below */}
          <a href="/sorting">
            <button className="mt-4 px-6 py-3 bg-yellow-500 text-white font-semibold text-lg rounded-full shadow-lg transition-all duration-300 hover:bg-yellow-600 hover:scale-110 hover:shadow-xl">
              Explore Sorting
            </button>
          </a>
        </div>

        {/* Searching Card + Button */}
        <div className="flex flex-col items-center">
          <div className="group relative w-80 h-96 bg-gray-100 rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
            <img
              src={searchingImage}
              alt="Searching"
              className="w-full h-2/3 object-cover transition-opacity duration-500 opacity-80 group-hover:opacity-100"
            />
            <div className="p-5 text-center">
              <h3 className="text-xl font-semibold text-gray-800 transition-all duration-300 group-hover:text-yellow-500">
                Searching Algorithms
              </h3>
              <p className="text-sm text-gray-500">Explore efficient searching techniques.</p>
            </div>
          </div>
          {/* Searching Button - Positioned Directly Below */}
          <button className="mt-4 px-6 py-3 bg-yellow-500 text-white font-semibold text-lg rounded-full shadow-lg transition-all duration-300 hover:bg-yellow-600 hover:scale-110 hover:shadow-xl">
            Explore Searching
          </button>
        </div>
      </div>
    </section>
  );
};

export default CardSection;
