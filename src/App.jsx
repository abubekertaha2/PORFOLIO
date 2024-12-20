// import './App.css';
// import CV from './CV.jsx';
// import Port from './Port.jsx';

// function App() {
//   return (
//     <>
//       <Port />
//       <CV />
//       <div id="contact" className="p-10 px-10 ">
//         <h1 className='text-3xl font-bold text-center underline-custom'>Comment Box</h1>   
//         <form action="https://formspree.io/f/xnnqygke" method="POST">
//           <div className="flex space-x-4 mt-4">
//             <div className="flex-1">
//               <label>First Name</label>
//               <input
//                 name="firstName"
//                 type="text"
//                 placeholder='First Name ...'
//                 className="w-full p-2 border border-gray-300 rounded text-black"
//                 required
//               />
//             </div>
//             <div className="flex-1">
//               <label>Last Name</label>
//               <input
//                 name="lastName"
//                 type="text"
//                 placeholder='Last Name ...'
//                 className="w-full p-2 border border-gray-300 rounded text-black"
//                 required
//               />
//             </div>
//           </div>

//           <div className="flex space-x-4 mt-4">
//             <div className="flex-1">
//               <label>Phone Number</label>
//               <input
//                 name="phoneNumber"
//                 type="text"
//                 placeholder='Phone Number ...'
//                 className="w-full p-2 border border-gray-300 rounded text-black"
//                 required
//               />
//             </div>
//             <div className="flex-1">
//               <label>Email</label>
//               <input
//                 name="email"
//                 type="email"
//                 placeholder='Email ...'
//                 className="w-full p-2 border border-gray-300 rounded text-black"
//                 required
//               />
//             </div>
//           </div>

//           <div className="mt-4">
//             <label>Comment</label>
//             <textarea
//               name="comment"
//               placeholder='Enter your comment ...'
//               className="w-full p-2 border border-gray-300 rounded text-black"
//               required
//             ></textarea>
//           </div>

//           <button type="submit" className='mt-4 p-3 w-full font-semibold rounded-lg bg-blue-900 text-white'>
//             Send Message
//           </button>
//         </form>
//       </div>
//     </>
//   );
// }

// export default App;
import './App.css';
import CV from './CV.jsx';
import Port from './Port.jsx';

function App() {
  return (
    <>
      <Port />
      <CV />
      <div id="contact" className="p-6 md:p-10 lg:p-12">
        <h1 className="text-3xl font-bold text-center underline mb-6">Comment Box</h1>
        <form action="https://formspree.io/f/xnnqygke" method="POST" className="space-y-4">
          <div className="flex flex-col md:flex-row md:space-x-4">
            <div className="flex-1">
              <label className="block mb-1">First Name</label>
              <input
                name="firstName"
                type="text"
                placeholder="First Name ..."
                className="w-full p-2 border border-gray-300 rounded text-black"
                required
              />
            </div>
            <div className="flex-1">
              <label className="block mb-1">Last Name</label>
              <input
                name="lastName"
                type="text"
                placeholder="Last Name ..."
                className="w-full p-2 border border-gray-300 rounded text-black"
                required
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:space-x-4">
            <div className="flex-1">
              <label className="block mb-1">Phone Number</label>
              <input
                name="phoneNumber"
                type="text"
                placeholder="Phone Number ..."
                className="w-full p-2 border border-gray-300 rounded text-black"
                required
              />
            </div>
            <div className="flex-1">
              <label className="block mb-1">Email</label>
              <input
                name="email"
                type="email"
                placeholder="Email ..."
                className="w-full p-2 border border-gray-300 rounded text-black"
                required
              />
            </div>
          </div>

          <div>
            <label className="block mb-1">Comment</label>
            <textarea
              name="comment"
              placeholder="Enter your comment ..."
              className="w-full p-2 border border-gray-300 rounded text-black"
              required
            ></textarea>
          </div>

          <button type="submit" className="mt-4 p-3 w-full font-semibold rounded-lg bg-blue-900 text-white hover:bg-blue-800 transition duration-200">
            Send Message
          </button>
        </form>
      </div>
    </>
  );
}

export default App;