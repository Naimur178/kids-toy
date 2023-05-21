import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const ToyDetails = () => {
    const {user} = useContext(AuthContext)
  const toy = useLoaderData();
  console.log(toy);

  return (
    <div>
      <div className="card w-3/4 bg-base-100 shadow-xl mx-auto ">
        <figure>
          <img
            src={toy.photo}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {toy.name}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>{toy.details}</p>
          <p>{toy.description}</p>
          <p>Seller: {toy.supplier}</p>
          <p>Email: {user.email}</p>
          <p>In Stock: {toy.quantity}</p>
          <p>Price: {toy.price}tk</p>
          <p>Rating: {toy.rating}</p>


          <div className="card-actions justify-end">
            <div className="badge badge-outline">Action Figure</div>
            <div className="badge badge-outline">{toy.category}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
