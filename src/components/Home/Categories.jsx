import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const Categories = () => {
  const [marvelToys, setMarvelToys] = useState([]);
  const [dcToys, setDcToys] = useState([]);
  const [animeToys, setAnimeToys] = useState([]);
  useEffect(()=>{
    fetch('http://localhost:5000/toys')
    .then(res => res.json())
    .then(data => {
      console.log(data)
      const newMarvelToys = data.filter(toy => toy.category == 'Marvel');
      setMarvelToys(newMarvelToys);
      
      const newAnimeToys = data.filter(toy => toy.category == 'Anime');
      setAnimeToys(newAnimeToys);
      
      
    })
  },[])
  
  return (
    <div>
      <div className=" mx-auto mt-16 my-8">
        <div className="text-center my-8 w-3/4 mx-auto">
          <h2 className="pb-4 text-4xl font-bold">Sort By Category</h2>
          
        </div>
      </div>
      <Tabs>
        <TabList>
          <Tab>Anime</Tab>
          <Tab>Marvel</Tab>
          <Tab>DC Comics</Tab>
        </TabList>

        <TabPanel>
          <div className="grid grid-cols-3 gap-4">
            <div className="hero  bg-base-200 rounded-2xl hover:shadow-green-300 hover:shadow-2xl">
              {
                animeToys?.map(animeToy =>{
                  return<div key={animeToy._id} className="hero  bg-base-200 rounded-2xl hover:shadow-green-300 hover:shadow-2xl">
              <div className="hero-content flex-col lg:flex-row">
                <img
                  src={animeToy.photo}
                  className="w-1/2 rounded-xl"
                ></img>
                <div>
                  <h1 className="text-5xl font-bold">Noodles</h1>
                  <p className="py-6">
                    Chinese noodles come in various shapes and sizes and can be
                    served <br /> in soups, stir-fries, and other dishes
                  </p>
                  <button className="btn btn-outline mx-auto">View All</button>
                </div>
              </div>
            </div>
                })
              }
            </div>
            
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-3 gap-4">
            <div className=" bg-base-200 rounded-2xl hover:shadow-green-300 hover:shadow-2xl">
            {
                marvelToys?.map(marvelToy =>{
                  return<div key={marvelToy._id} className="hero  bg-base-200 rounded-2xl hover:shadow-green-300 hover:shadow-2xl">
              <div className="hero-content flex-col lg:flex-row">
                <img
                  src={marvelToy.photo}
                  className="w-1/2 rounded-xl"
                ></img>
                <div>
                  <h1 className="text-5xl font-bold">Noodles</h1>
                  <p className="py-6">
                    Chinese noodles come in various shapes and sizes and can be
                    served <br /> in soups, stir-fries, and other dishes
                  </p>
                  <button className="btn btn-outline mx-auto">View All</button>
                </div>
              </div>
            </div>
                })
              }
            </div>
            
          </div>
        </TabPanel>
        <TabPanel>
        <div className="grid grid-cols-3 gap-4">
            <div className=" bg-base-200 rounded-2xl hover:shadow-green-300 hover:shadow-2xl">
            {
                dcToys?.map(dcToy =>{
                  return<div key={dcToy._id} className="hero  bg-base-200 rounded-2xl hover:shadow-green-300 hover:shadow-2xl">
              <div className="hero-content flex-col lg:flex-row">
                <img
                  src={dcToy.photo}
                  className="w-1/2 rounded-xl"
                ></img>
                <div>
                  <h1 className="text-5xl font-bold">Noodles</h1>
                  <p className="py-6">
                    Chinese noodles come in various shapes and sizes and can be
                    served <br /> in soups, stir-fries, and other dishes
                  </p>
                  <button className="btn btn-outline mx-auto">View All</button>
                </div>
              </div>
            </div>
                })
              }
            </div>
            
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};
export default Categories;
