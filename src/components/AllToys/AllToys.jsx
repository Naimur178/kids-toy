import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ToyCard from './ToyCard';
// import ToyCard from './ToyCard';

const AllToys = () => {
  
  const toys = useLoaderData();
    console.log(toys)
    
    return (
        <div className=' '>
      <h1 className='text-4xl font-bold text-center py-20 bg-cyan-500 mb-5 text-white'>All Toys</h1>
      <div className='grid md:grid-cols-3 gap-5'>
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