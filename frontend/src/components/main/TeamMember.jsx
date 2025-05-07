// import React from 'react';

// const members = [
//   {
//     name: 'Rupam Patel',
//     role: 'Frontend Developer',
//     contribution: 'Led the development of the entire project, including the React architecture, D3.js-based visualizations, and the overall design and implementation. Additionally, he completed the documentation for the project.',
//     image: '/rupam.jpg',
//     linkedin: 'https://www.linkedin.com/in/rupam-patel-702b75311/', // Replace with actual link
//   },
//   {
//     name: 'Kanika Carpenter',
//     role: 'Algorithm Developer',
//     contribution: 'Worked on implementing specific sorting/searching logic, assisted with testing, and contributed to refining algorithm performance.',
//     image: '/kanika.png',
//     linkedin: 'https://www.linkedin.com/in/kanika-carpenter-1973462b1/', // Replace with actual link
//   },
//   {
//     name: 'Apoorva Seth',
//     role: 'UI/UX Designer',
//     contribution: 'Collaborated on UI improvements, handling layout adjustments and user experience enhancements, and worked on step-by-step educational content.',
//     image: '/apoorva.png',
//     linkedin: 'https://www.linkedin.com/in/apoorva-seth-33047a207/', // Replace with actual link
//   },
// ];

// const guide = {
//   name: 'Ms. Tarjani Sevak',
//   role: 'Project Guide and Mentor',
//   note: 'An inspiring mentor who not only guided us through every stage of the project but also played a key role in shaping our success. Her insightful feedback and unwavering support truly impressed us, pushing us to achieve our best and ensuring the project’s excellence from start to finish.',
//   image: '/tarjani.png',
// };

// const TeamMember = () => {
//   return (
//     <section className="bg-gray-50 py-16 px-4 md:px-10">
//       <h2 className="text-4xl font-bold text-center mb-12 text-black transition-all duration-300 hover:scale-110 hover:text-yellow-700">
//         Meet Our Team
//       </h2>

//       {/* Team Members */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
//         {members.map((member) => (
//           <a
//             key={member.name}
//             href={member.linkedin}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="block transform transition-all duration-300 hover:scale-105 hover:shadow-none"
//           >
//             <div className="bg-white p-6 rounded-2xl shadow-md text-center max-w-xs mx-auto">
//               <img
//                 src={member.image}
//                 alt={member.name}
//                 onError={(e) => {
//                   e.target.onerror = null;
//                   e.target.src = '/default-avatar.png';
//                 }}
//                 className="w-32 h-32 mx-auto mb-4 rounded-full object-cover border-4 border-blue-500 shadow-sm"
//               />
//               <h3 className="text-xl font-bold text-blue-700">{member.name}</h3>
//               <p className="text-sm font-bold text-gray-700">{member.role}</p>
//               <p className="text-gray-700 text-sm font-semibold italic leading-relaxed mt-2">
//                 "{member.contribution}"
//               </p>
//             </div>
//           </a>
//         ))}
//       </div>

//       {/* Guide Section */}
//       <div className="mt-20 max-w-sm mx-auto text-center bg-white p-6 rounded-2xl shadow-md hover:shadow-none transform transition-all duration-300 hover:scale-105 hover:-translate-y-2">
//         <img
//           src={guide.image}
//           alt={guide.name}
//           onError={(e) => {
//             e.target.onerror = null;
//             e.target.src = '/default-avatar.png';
//           }}
//           className="w-32 h-32 mx-auto mb-4 rounded-full object-cover border-4 border-yellow-500 shadow-sm"
//         />
//         <h3 className="text-2xl font-bold text-gray-700 mb-1">{guide.name}</h3>
//         <p className="text-sm font-bold text-gray-700">{guide.role}</p>
//         <p className="italic text-gray-600 mt-2 font-semibold">"{guide.note}"</p>
//       </div>
//     </section>
//   );
// };

// export default TeamMember;


import React from 'react';

const members = [
  {
    name: 'Rupam Patel',
    role: 'Frontend Design + Merge Sort & Selection Sort',
    contribution: `• Designed the main layout of the website using React.js.
• Created the logic and animation for Merge Sort and Selection Sort.
• Tested the app and fixed bugs.
• Contributed equally to writing all documents – Report, PPT, and Synopsis.
• Worked on the layout and styling of the website together with Kanika and Apoorva.
• Worked on both sorting and searching algorithms together.`,
    image: '/rupam.jpg',
    linkedin: 'https://www.linkedin.com/in/rupam-patel-702b75311/',
  },
  {
    name: 'Kanika Carpenter',
    role: 'Frontend Design + Quick Sort & Bubble Sort',
    contribution: `• Worked on the layout and styling of the website together with Rupam and Apoorva.
• Developed the logic and animation for Quick Sort and Bubble Sort.
• Tested speed and performance.
• Contributed equally to writing all documents – Report, PPT, and Synopsis.
• Worked on the layout and styling of the website together with Rupam and Apoorva.
• Worked on both sorting and searching algorithms together.`,
    image: '/kanika.png',
    linkedin: 'https://www.linkedin.com/in/kanika-carpenter-1973462b1/',
  },
  {
    name: 'Apoorva Seth',
    role: 'Frontend Design + Heap Sort & Insertion Sort',
    contribution: `• Worked on the layout and styling of the website together with Kanika and Rupam.
• Developed the logic and animation for Heap Sort and Insertion Sort.
• Wrote step-by-step explanations for algorithms.
• Contributed equally to writing all documents – Report, PPT, and Synopsis.
• Worked on the layout and styling of the website together with Rupam and Kanika.
• Worked on both sorting and searching algorithms together.`,
    image: '/apoorva.png',
    linkedin: 'https://www.linkedin.com/in/apoorva-seth-33047a207/',
  },
];

const guide = {
  name: 'Ms. Tarjani Sevak',
  role: 'Project Guide and Mentor',
  note: 'An inspiring mentor who not only guided us through every stage of the project but also played a key role in shaping our success. Her insightful feedback and unwavering support truly impressed us, pushing us to achieve our best and ensuring the project’s excellence from start to finish..',
  image: '/tarjani.png',
};

const TeamMember = () => {
  return (
    <section className="bg-gray-50 py-16 px-4 md:px-10">
      <h2 className="text-4xl font-bold text-center mb-12 text-black transition-all duration-300 hover:scale-110 hover:text-yellow-700">
        Meet Our Team
      </h2>

      {/* Mentor Section */}
      <h3 className="text-2xl font-bold text-center text-gray-800 mb-4">Mentor of the Project</h3>
      <div className="mb-20 max-w-sm mx-auto text-center bg-white p-6 rounded-2xl shadow-md hover:shadow-none transform transition-all duration-300 hover:scale-105 hover:-translate-y-2">
        <img
          src={guide.image}
          alt={guide.name}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = '/default-avatar.png';
          }}
          className="w-32 h-32 mx-auto mb-4 rounded-full object-cover border-4 border-yellow-500 shadow-sm"
        />
        <h3 className="text-2xl font-bold text-gray-700 mb-1">{guide.name}</h3>
        <p className="text-sm font-bold text-gray-700">{guide.role}</p>
        <p className="italic text-gray-600 mt-2 font-semibold">"{guide.note}"</p>
      </div>

      {/* Team Members Section */}
      <h3 className="text-2xl font-bold text-center text-gray-800 mb-10">Team Members</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {members.map((member) => (
          <a
            key={member.name}
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="block transform transition-all duration-300 hover:scale-105 hover:shadow-none"
          >
            <div className="bg-white p-6 rounded-2xl shadow-md text-center max-w-xs mx-auto">
              <img
                src={member.image}
                alt={member.name}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/default-avatar.png';
                }}
                className="w-32 h-32 mx-auto mb-4 rounded-full object-cover border-4 border-blue-500 shadow-sm"
              />
              <h3 className="text-xl font-bold text-blue-700">{member.name}</h3>
              <p className="text-sm font-bold text-gray-700 mb-2">{member.role}</p>
              <p className="text-gray-700 text-sm font-semibold whitespace-pre-line text-left">
                {member.contribution}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default TeamMember;
