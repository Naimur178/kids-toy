import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ToyCard from './ToyCard';
// import ToyCard from './ToyCard';

const AllToys = () => {
  
  const toys = useLoaderData();
  
  
 
   
    
    
    console.log(toys)
    
    return (
        <div className='m-20'>
      <h1 className='text-6xl text-center my-20 text-purple-600'>Hot Hot Cold Coffee: </h1>
      <div className='grid md:grid-cols-2 gap-4'>
        {
          toys?.map(toy => <ToyCard
            key={toy._id}
            toy={toy}
            toys={toys}
            
          ></ToyCard>)
        }
      </div>
    </div>
    );
};

export default AllToys;