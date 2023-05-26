import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ToyCard from './ToyCard';
// import ToyCard from './ToyCard';

const AllToys = () => {
  useEffect(() => {
    document.title = "All Toys"; 
  }, []);
  const [toys, setToys] = useState();
  
  const newToys = useLoaderData();
    useEffect(()=>{
    setToys(newToys)

    },[])

    const handleSearch = event =>{
      event.preventDefault();
      const form = event.target;
      const searchStr = form.search.value;
    }
    
    return (
        <div onSubmit={handleSearch}>
          <form action="" name='search' className='flex justify-center py-5 bg-cyan-400' >
            <input type="text" className='rounded-xl w-2/5 ps-4' placeholder='Search your Favourite Toys'/>
            <input type="submit" value="Search" className='btn ms-3' />
          </form>
      <h1 className='text-4xl font-bold text-center py-20 bg-cyan-400 mb-5 text-white'>All Toys</h1>
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