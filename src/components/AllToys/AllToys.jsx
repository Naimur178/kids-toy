import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
// import ToyCard from './ToyCard';

const AllToys = () => {
    const loadedToys = useLoaderData();
    // console.log(loadedToys);
    useEffect(() =>{
      console.log(loadedToys)
    },[loadedToys])
    // useEffect(() => {
    //   fetch('http://localhost:5000/toys')
    //   .then(res => res.json())
    //   .then(data =>console.log(data))
    // },[])
    // console.log(loadedToys)
    // const [toys, setToys] =useState(loadedToys);
    // console.log(toys);
    return (
        <div className='m-20'>
      <h1 className='text-6xl text-center my-20 text-purple-600'>Hot Hot Cold Coffee: </h1>
      <div className='grid md:grid-cols-2 gap-4'>
        {/* {
          toys.map(toy => <ToyCard
            key={toy._id}
            toy={toy}
            toys={toys}
            setToys={setToys}
          ></ToyCard>)
        } */}
      </div>
    </div>
    );
};

export default AllToys;