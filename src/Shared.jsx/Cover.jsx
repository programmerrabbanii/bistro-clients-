import React from "react";

const Cover = ({img,title,subHeading}) => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            `url("${img}")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
            <p className="mb-5"> 
             {subHeading}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cover;
