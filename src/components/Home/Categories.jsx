import React, { useEffect, useState } from "react";
import Rating from "react-rating";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { FaRegStar, FaStar, FaStarAndCrescent } from "react-icons/fa";

const Categories = () => {
  const [marvelToys, setMarvelToys] = useState([]);
  const [dcToys, setDcToys] = useState([]);
  const [animeToys, setAnimeToys] = useState([]);
  useEffect(() => {
    fetch("https://assignment11-server-vert.vercel.app/toys")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const newMarvelToys = data.filter((toy) => toy.category == "Marvel");
        setMarvelToys(newMarvelToys);

        const newAnimeToys = data.filter((toy) => toy.category == "Anime");
        setAnimeToys(newAnimeToys);
        const dcToys = data.filter((toy) => toy.category == "dc");
        setDcToys(dcToys);
      });
  }, []);

  return (
    <div>
      <div className=" mx-auto mt-16 my-8">
        <div className="text-center my-8 w-3/4 mx-auto">
          <h2 className="pb-4 text-4xl font-semibold pt-8">Sort By Category</h2>
        </div>
      </div>
      <Tabs>
        <TabList>
          <Tab>Anime</Tab>
          <Tab>Marvel</Tab>
          <Tab>DC Comics</Tab>
        </TabList>

        <TabPanel>
          <div className="">
            <div className="  rounded-2xl  lg:grid grid-cols-2 gap-4">
              {animeToys?.map((animeToy) => {
                return (
                  <div
                    key={animeToy._id}
                    className="hero  bg-base-200 rounded-2xl hover:shadow-green-300 hover:shadow-2xl"
                  >
                    <div className="hero-content flex-col lg:flex-row">
                      <img
                        src={animeToy.photo}
                        className="w-1/2 rounded-xl"
                      ></img>
                      <div className="relative">
                        <h1 className="text-3xl font-bold">{animeToy.name}</h1>
                        <p className="">{animeToy.description}</p>
                        <p className="">
                          <span className="font-bold">Price:</span>
                          {animeToy.price}tk
                        </p>
                        <p className="mb-4">
                          <span className="font-bold">
                            Rating:
                            <Rating
                              emptySymbol={<FaRegStar></FaRegStar>}
                              fullSymbol={<FaStar color="orange"></FaStar>}
                              initialRating={animeToy.rating}
                              readonly
                            ></Rating>
                          </span>
                        </p>
                        <button className="btn btn-outline mx-auto w-full mt-auto ">
                          Details
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="">
            <div className="  rounded-2xl  grid lg:grid-cols-2 gap-4">
              {marvelToys?.map((marvelToy) => {
                return (
                  <div
                    key={marvelToy._id}
                    className="hero  bg-base-200 rounded-2xl hover:shadow-green-300 hover:shadow-2xl"
                  >
                    <div className="hero-content flex-col lg:flex-row">
                      <img
                        src={marvelToy.photo}
                        className="w-1/2 rounded-xl"
                      ></img>
                      <div className="relative">
                        <h1 className="text-3xl font-bold">{marvelToy.name}</h1>
                        <p className="">{marvelToy.description}</p>
                        <p className="">
                          <span className="font-bold">Price:</span>{" "}
                          {marvelToy.price}tk
                        </p>
                        <p className="mb-4">
                          <span className="font-bold">Rating:</span>{" "}
                          <Rating
                              emptySymbol={<FaRegStar></FaRegStar>}
                              fullSymbol={<FaStar color="orange"></FaStar>}
                              initialRating={marvelToy.rating}
                              readonly
                            ></Rating>
                        </p>
                        <button className="btn btn-outline mx-auto w-full mt-auto ">
                          Details
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="">
            <div className="  grid lg:grid-cols-2 gap-4">
              {dcToys?.map((dcToy) => {
                return (
                  <div
                    key={dcToy._id}
                    className="hero  bg-base-200 rounded-2xl hover:shadow-green-300 hover:shadow-2xl"
                  >
                    <div className="hero-content flex-col lg:flex-row">
                      <img src={dcToy.photo} className="w-1/2 rounded-xl"></img>
                      <div className="relative">
                        <h1 className="text-3xl font-bold">{dcToy.name}</h1>
                        <p className="">{dcToy.description}</p>
                        <p className="">Price: {dcToy.price}tk</p>
                        <p>Rating: <Rating
                              emptySymbol={<FaRegStar></FaRegStar>}
                              fullSymbol={<FaStar color="orange"></FaStar>}
                              initialRating={dcToy.rating}
                              readonly
                            ></Rating></p>
                        <button className="btn btn-outline mx-auto w-full mt-auto absolute -bottom-16">
                          Details
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};
export default Categories;
