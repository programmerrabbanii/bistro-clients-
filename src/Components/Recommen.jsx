import React from "react";
import SectionTitle from "./SectionTitle";
import recoPhoot from "../assets/images/home/slide1.jpg";

const Recommen = () => {
  return (
    <div className="mt-16 px-4 md:px-8 lg:px-16">
      <SectionTitle
        subHeading={"Should Try"}
        heading={"CHEF RECOMMENDS"}
      ></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {[1, 2, 3].map((_, index) => (
          <div
            key={index}
            className="relative overflow-hidden bg-white border border-gray-200 shadow-md rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            {/* Image Section */}
            <figure className="relative h-64">
              <img
                src={recoPhoot}
                alt="Recommended Dish"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-yellow-500 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase shadow-lg">
                Popular
              </div>
            </figure>

            {/* Content Section */}
            <div className="p-6">
              <h2 className="text-lg font-bold text-gray-800 mb-2">
                Caeser Salad
              </h2>
              <p className="text-sm text-gray-600 mb-4">
                Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
              </p>
              <button className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-white py-2 rounded-full font-semibold text-sm shadow-md hover:shadow-lg hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300">
                ADD TO CART
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recommen;
