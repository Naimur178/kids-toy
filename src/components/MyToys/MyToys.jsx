import React, { useContext, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const myLoadedToys = useLoaderData();
  // console.log(myLoadedToys);
  const filteredToy = myLoadedToys?.filter((toy) => toy.userId == user.email);
  console.log(filteredToy);
  return (
    <div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Description</th>
              <th>Category</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {filteredToy.map((toy) => 
              <tr key={toy._id}>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={toy.photo}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{toy.name}</div>
                      <div className="text-sm opacity-50">United States</div>
                    </div>
                  </div>
                </td>
                <td className="w-4">
                  {toy.description}
                  <br />
                  
                </td>
                <td><p className="bg-pink-300 rounded-xl px-2">{toy.category}</p></td>
                <th>
                  <Link to={`/updateToy/${toy._id}`} className="btn btn-ghost btn-xs hover:bg-yellow-400">Update</Link>
                </th>
                <th>
                  <button className="btn btn-ghost btn-xs hover:bg-red-500 hover:text-white">Delete</button>
                </th>
              </tr>
            )}
            {/* row 2 */}
          </tbody>
          {/* foot */}
        </table>
      </div>

      <Link to="/addToy" className="btn btn-outline my-5 ">
        Add A toy
      </Link>
    </div>
  );
};

export default MyToys;
