import React from "react";

const Review = () => {
  return (
    <div className="">
      <h2 className="text-3xl font-bold text-center mt-5">Customer Review</h2>
      <div className="grid lg:grid-cols-2 gap-6 my-8">
        <div className="bg-base-300">
          <div>
            <div className="flex  flex-row items-center"> 
              <img
                src="https://img.freepik.com/free-photo/high-angle-japanese-dumplings-composition_23-2148809869.jpg?w=1060&t=st=1683220825~exp=1683221425~hmac=707e10381349bda3a43d83a12e077d08ea053560c051a4a9083af6098bd9a0f7"
                className="w-1/2 rounded-2xl mask mask-squircle "
              ></img>

              <div>
              <h2>Name</h2>
              <p>Rating</p>
              </div>
            </div>
          </div>
          <p>
            The customer service at this toy shop is exceptional. They went
            above and beyond to help me find the perfect toy.
          </p>
        </div>
        <div className="bg-base-300 p-5 rounded-xl">
          <div>
          <div className="flex  flex-row items-center"> 
              <img
                src="https://img.freepik.com/free-photo/high-angle-japanese-dumplings-composition_23-2148809869.jpg?w=1060&t=st=1683220825~exp=1683221425~hmac=707e10381349bda3a43d83a12e077d08ea053560c051a4a9083af6098bd9a0f7"
                className="w-1/2 rounded-2xl mask mask-squircle "
              ></img>

              <div>
              <h2>Name</h2>
              <p>Rating</p>
              </div>
            </div>
          </div>
          <p>
            The customer service at this toy shop is exceptional. They went
            above and beyond to help me find the perfect toy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Review;
