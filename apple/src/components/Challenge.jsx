import React from "react";
import img9 from "../images/img9.jpg";
import img8 from "../images/img8.png";
import img10 from "../images/img10.png";
import img11 from "../images/img11.jpg";

const Challenge = () => {
  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-2 my-5">
        {/* Division 1 */}
      <div className="relative ">
        <img className="bg-gray-500" src={img9} alt="" />
        <button
          className="bg-blue-600 py-1 rounded-full text-white px-3 absolute bottom-10 font-semibold"
          style={{ left: "35%" }}
        >
          Read the letter from Tim
        </button>
      </div>
      {/* Division 2 */}
      <div className="bg-gradient-to-b from-blue-300 via-blue-100 text-center">
        <h1 className="font-bold text-3xl mt-5 mb-1">MacBook Air</h1>
        <h2 className="text-xl">Now supercharged by M5</h2>
        <button className="bg-blue-500 px-3 text-white rounded-full font-semibold py-2 mt-5">
          Learn more
        </button>
        <button className="ml-10 border border-blue-600 px-5 py-1 rounded-full text-blue-500 hover:text-white hover:bg-blue-500 mb-4">
          Buy
        </button>
        <img className="w-max h-52  mx-auto" src={img8} alt="" />
      </div>
      {/* Division 3 */}
      <div className="bg-gradient-to-b from-cyan-300 via-blue-300 text-center">
        <h1 className="font-bold text-3xl mt-5 mb-1">iPad <span className="text-blue-600 "><i>air</i></span></h1>
        <h2 className="text-xl">Now supercharged by M5</h2>
        <button className="bg-blue-500 px-3 text-white rounded-full font-semibold py-2 mt-5">
          Learn more
        </button>
        <button className="ml-10 border border-blue-600 px-5 py-1 rounded-full text-blue-500 hover:text-white hover:bg-blue-500 mb-4">
          Buy
        </button>
        <img className="w-max h-52  mx-auto" src={img10} alt="" />
      </div>
      {/* Division 4 */}
       
      <div className="bg-black text-center">
        <h1 className="font-bold text-3xl mt-5 mb-1 text-white">Studio Display XDR</h1>
        <h2 className="text-xl text-white">Pixel sharpener</h2>
        <button className="bg-blue-500 px-3 text-white rounded-full font-semibold py-2 mt-5">
          Learn more
        </button>
        <button className="ml-10 border border-blue-600 px-5 py-1 rounded-full text-blue-500 hover:text-white hover:bg-blue-500 mb-4">
          Buy
        </button>
        <img className="w-max h-52  mx-auto mb-2" src={img11} alt="" />
      </div>
      
    </div>
  );
};

export default Challenge;
