import React, { useState } from "react";
// import Procedure from '../images/';
import Procedure from '../images/stats.jpg';
import image1 from '../images/2021stats-1.png'
import image2 from '../images/2021stats-2.png'
import image3 from '../images/2021stats-3.png'
import image4 from '../images/2021stats-4.png'
import image5 from '../images/2021stats-5.png'
import image6 from '../images/2021stats-6.png'
import image7 from '../images/2021stats-7.png'
import image8 from '../images/2021stats-8.png'
import imagee8 from '../images/2022stats-1.png'
import imagee7 from '../images/2022stats-2.png'
import imagee6 from '../images/2022stats-3.png'
import imagee5 from '../images/2022stats-4.png'
import imagee4 from '../images/2022stats-5.png'
import imagee3 from '../images/2022stats-6.png'
import imagee2 from '../images/2022stats-7.png'
import imagee1 from '../images/2022stats-8.png'

const Stats = () => {
  const [activeTab, setActiveTab] = useState("2023-24");

  const batch2021_22 = [
    image1, image2, image3, image4, 
    image5, image6, image7 , image8
  ];
  const batch2022_23 = [
    imagee1, imagee2, imagee3, imagee4, 
    imagee5, imagee6, imagee7 , imagee8
  ];



  return (
    <div className="flex w-full flex-col gap-10 py-5" id="stats">
      {/* <div className="px-10 2xl:px-40">
        <Heading2 text="Placement Statistics" color="after:w-1" />
      </div> */}
      
      <div className="px-10 2xl:px-40">
        <div className="flex w-full mb-8 border rounded-lg overflow-hidden">
          <button
            onClick={() => setActiveTab("2023-24")}
            className={`flex-1 py-3 px-4 text-center font-medium transition-colors
              ${activeTab === "2023-24" ? "bg-blue-500 text-white" : "bg-white text-gray-700 hover:bg-gray-50"}`}
          >
            2023-24
          </button>
          <button
            onClick={() => setActiveTab("2022-23")}
            className={`flex-1 py-3 px-4 text-center font-medium transition-colors
              ${activeTab === "2022-23" ? "bg-blue-500 text-white" : "bg-white text-gray-700 hover:bg-gray-50"}`}
          >
            2022-23
          </button>
          <button
            onClick={() => setActiveTab("2021-22")}
            className={`flex-1 py-3 px-4 text-center font-medium transition-colors
              ${activeTab === "2021-22" ? "bg-blue-500 text-white" : "bg-white text-gray-700 hover:bg-gray-50"}`}
          >
            2021-22
          </button>
        </div>
        
        <div className="w-full">
          {activeTab === "2023-24" && (
            <div className="flex flex-col xl:flex-row xl:items-center">
              <div className="flex justify-center">
                <img 
                  src={Procedure} 
                  alt="placement stats 2023-24" 
                  className="max-w w-full xl:w-auto rounded-lg shadow-md" 
                />
              </div>
            </div>
          )}
          
          {activeTab === "2022-23" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {batch2022_23.map((image, index) => (
                <div key={index} className="flex justify-center aspect-[4/3]">
                  <img 
                    src={image} 
                    alt={`placement stats 2022-23 ${index + 1}`} 
                    className="w-full object-contain rounded-lg shadow-md hover:shadow-lg transition-shadow"
                  />
                </div>
              ))}
            </div>
          )}
          
          {activeTab === "2021-22" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {batch2021_22.map((image, index) => (
                <div key={index} className="flex justify-center aspect-[4/3]">
                  <img 
                    src={image} 
                    alt={`placement stats 2021-22 ${index + 1}`} 
                    className="w-full object-contain rounded-lg shadow-md hover:shadow-lg transition-shadow"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Stats;