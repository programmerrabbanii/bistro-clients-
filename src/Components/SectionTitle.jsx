import React from 'react';

const SectionTitle = ({subHeading,heading}) => {
    return (
        <div className='w-3/12 mx-auto text-center my-4'> 
            <p className='text-yellow-400'>---{subHeading}---</p>
            <h2 className='text-3xl uppercase border-y-2' >{heading}</h2>
            

            
        </div>
    );
};

export default SectionTitle;