import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Categories = () => {
    return (
        <div>
          <div className=' mx-auto mt-16 my-8'>
      <div className='text-center my-8 w-3/4 mx-auto'>
        <h2 className='pb-4 text-4xl font-bold'>Sort By Category</h2>
        <p>Our Chinese chefs are true masters of their craft, with a passion for creating the most delicious and authentic Chinese cuisine. Their skill and expertise are evident in every dish they prepare, and their commitment to using only the freshest and highest quality ingredients is truly impressive.</p>
      </div>
      

    </div>
    <Tabs>
    <TabList>
      <Tab>Marvel</Tab>
      <Tab>DC Comics</Tab>
      <Tab>Anime</Tab>
    </TabList>

    <TabPanel>
    <div className='grid grid-cols-3 gap-4'>
    <div className="hero  bg-base-200 rounded-2xl hover:shadow-green-300 hover:shadow-2xl">
          <div className="hero-content flex-col lg:flex-row">
          <img src='https://img.freepik.com/free-photo/high-angle-japanese-dumplings-composition_23-2148809869.jpg?w=1060&t=st=1683220825~exp=1683221425~hmac=707e10381349bda3a43d83a12e077d08ea053560c051a4a9083af6098bd9a0f7' className='w-1/2 rounded-2xl mask mask-squircle '></img>
            <div>
              <h1 className="text-5xl font-bold">Dumplings</h1>
              <p className="py-6">Dumplings are a staple in Chinese cuisine and come in a variety of shapes</p>
              <button className="btn btn-outline mx-auto">View All</button>
            </div>
          </div>
        </div>
        <div className="hero  bg-base-200 rounded-2xl hover:shadow-green-300 hover:shadow-2xl">
          <div className="hero-content flex-col lg:flex-row">
          <img src='https://static-01.daraz.com.bd/p/ebf283b36e8fdedd6e4c6ce5d9167510.jpg' className='w-1/2 rounded-xl'></img>
            <div>
              <h1 className="text-5xl font-bold">Noodles</h1>
              <p className="py-6">Chinese noodles come in various shapes and sizes and can be served <br /> in soups, stir-fries, and other dishes</p>
              <button className="btn btn-outline mx-auto">View All</button>
            </div>
          </div>
        </div>
        <div className=" bg-base-200 rounded-2xl hover:shadow-green-300 hover:shadow-2xl">
          <div className="hero-content flex-col lg:flex-row">
          <img src='https://img.freepik.com/premium-photo/stir-fry-egg-noodles-with-chicken-sweet-paprika-mushrooms-chives-sesame-seeds-bowl-asian-cuisine-dish-white-table-background-top-view_630207-7790.jpg?w=1380' className='w-1/2 rounded-2xl mask mask-squircle'></img>
            <div>
              <h1 className="text-5xl font-bold">Rice dishes</h1>
              <p className="py-6">Rice is a staple in Chinese cuisine and is often served with meat.</p>
              <button className="btn btn-outline mx-auto">View All</button>
            </div>
          </div>
        </div>
    </div>
    </TabPanel>
    <TabPanel>
    <div className='grid grid-cols-3 gap-4'>
    <div className=" bg-base-200 rounded-2xl hover:shadow-green-300 hover:shadow-2xl">
          <div className="hero-content flex-col lg:flex-row">
          <img src='https://img.freepik.com/premium-photo/veg-chicken-manchurian-with-gravy-popular-food-india-served-bowl-with-chopstick_466689-34961.jpg?w=1060' className='w-1/2 rounded-2xl mask mask-squircle'></img>
            <div>
              <h1 className="text-5xl font-bold">Dim sum</h1>
              <p className="py-6">sum is a type of Cantonese cuisine that consists of bite-sized portions of food served in small steamer baskets or on small plates</p>
              <button className="btn btn-outline mx-auto">View All</button>
            </div>
          </div>
        </div>
        <div className=" bg-base-200 rounded-2xl hover:shadow-green-300 hover:shadow-2xl">
          <div className="hero-content flex-col lg:flex-row">
          <img src='https://img.freepik.com/premium-photo/chilli-paneer-dry-is-made-using-cottage-cheese-indo-chinese-food_466689-76969.jpg?w=1060' className='w-1/2 rounded-2xl mask mask-squircle'></img>
            <div>
              <h1 className="text-5xl font-bold">Barbecue</h1>
              <p className="py-6">Chinese barbecue, also known as char siu, is a popular street food that <br /> consists of marinated meat skewered and roasted over an open flame.</p>
              <button className="btn btn-outline mx-auto">View All</button>
            </div>
          </div>
        </div>
        <div className=" bg-base-200 rounded-2xl hover:shadow-green-300 hover:shadow-2xl">
          <div className="hero-content flex-col lg:flex-row">
          <img src='https://img.freepik.com/free-photo/flat-lay-noodles-with-vegetables-chicken-with-chopsticks_23-2148377427.jpg?w=1060&t=st=1683221111~exp=1683221711~hmac=e4b9bdca9fe30b1961ddded1021dc6a8cf91d0b68030b9c0c80e7f7d8365d79f' className='w-1/2 rounded-2xl mask mask-squircle'></img>
            <div>
              <h1 className="text-5xl font-bold">Seafood</h1>
              <p className="py-6">With a long coastline, China has a rich seafood culture, and dishes such as salt and pepper squid, steamed fish, and seafood fried rice are popula</p>
              <button className="btn btn-outline mx-auto">View All</button>
            </div>
          </div>
        </div>
    </div>
    </TabPanel>
    <TabPanel>
      hello from anime
    </TabPanel>
  </Tabs>

        </div>
    )
    };
export default Categories;