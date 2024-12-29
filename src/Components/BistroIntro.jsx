import React from 'react';
import intro from '../assets/images/home/chef-service.jpg';

const BistroIntro = () => {
    return (
        <div
            className="bg-cover bg-center h-screen flex items-center justify-center my-20"
            style={{
                backgroundImage: `url(${intro})`, 
            }}
        >
            <div className="bg-white p-10 rounded shadow-lg w-[40%] text-center">
                <h1 className="text-5xl font-bold uppercase text-gray-800">Welcome to Bistro</h1>
                <p className="mt-4 text-lg text-gray-600">
                    Experience the finest dining with a touch of elegance.
                </p>
            </div>
        </div>
    );
};

export default BistroIntro;
