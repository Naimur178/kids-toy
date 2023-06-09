import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const ToyCard = ({toy}) => {
    const { _id, name, quantity, supplier, price, photo, description, category } = toy;

    // const handleDelete = _id => {
    //     console.log(_id);
    //     Swal.fire({
    //         title: 'Are you sure?',
    //         text: "You won't be able to revert this!",
    //         icon: 'warning',
    //         showCancelButton: true,
    //         confirmButtonColor: '#3085d6',
    //         cancelButtonColor: '#d33',
    //         confirmButtonText: 'Yes, delete it!'
    //     }).then((result) => {
    //         if (result.isConfirmed) {


    //             fetch(`http://localhost:5000/toys/${_id}`, {
    //                 method: 'DELETE'
    //             })
    //                 .then(res => res.json())
    //                 .then(data => {
    //                     console.log(data);
    //                     if (data.deletedCount > 0) {
    //                         Swal.fire(
    //                             'Deleted!',
    //                             'Your Coffee has been deleted.',
    //                             'success'
    //                         )
    //                         const remaining = toys.filter(cof => cof._id !== _id);
    //                         setToys(remaining);
    //                     }
    //                 })

    //         }
    //     })
    // }
    return (
        // <div className="card card-side bg-base-100 shadow-xl">
        //     <figure><img src={photo} alt="Movie" /></figure>
        //     <div className="flex justify-between w-full pr-4">
        //         <div>
        //             <h2 className="card-title">Name: {name}</h2>
        //             <p>{quantity}</p>
        //             <p>{supplier}</p>
        //             <p>{price}</p>
        //         </div>
        //         <div className="card-actions justify-end">
        //             <div className="btn-group btn-group-vertical space-y-4">
        //                 <button className="btn">View</button>
        //                 <Link to={`updateCoffee/${_id}`}>
        //                 <button className="btn">Edit</button>
        //                 </Link>
        //                 <button
        //                     onClick={() => handleDelete(_id)}
        //                     className="btn bg-orange-500">X</button>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={photo} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{description}</p>
    <p>Seller: {supplier}</p>
    <p>Category: {category}</p>
    <p>Price: {price}</p>
    <p>Stock: {quantity}</p>
    <div className="card-actions justify-end">
      <Link to={`/toysDetails/${_id}`} className='btn btn-outline'>View Details</Link>
      
    </div>
  </div>
</div>
    );
    
};

export default ToyCard;