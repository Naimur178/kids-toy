import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateToy = () => {
    const toy = useLoaderData();
    
    const {_id, price, quantity, details, description, name} =toy;
    console.log(_id)
    const updateToy = event =>{
        event.preventDefault();
        const form = event.target;
        const newPrice = form.price.value;
        const newQuantity = form.quantity.value;
        const newDescription = form.description.value;
        const newDetails = form.details.value;
        const updatedToy = {newPrice, newQuantity, newDescription, newDetails}
        console.log(updatedToy);
        console.log(_id)
        fetch(`http://localhost:5000/toys/${_id}`, {
            method: 'PUT',
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(updatedToy)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.modifiedCount > 0) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Toy Updated Successfully',
                    icon: 'success',
                    confirmButtonText: 'OK'
                })
            }
        })
        
    }
    return (
        <div className='mx-auto'>
         <div className="bg-[#F4F3F0] p-24">
            <h2 className="text-3xl font-extrabold text-center">Update: {name}</h2>
            <form onSubmit={updateToy}>
                
                <div className="md:flex mb-8">
                    
                    <div className="form-control md:w-full ">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="quantity" placeholder="Available Quantity" className="input input-bordered w-full" defaultValue={quantity} />
                        </label>
                    </div>
                </div>
                
                <div className="md:flex mb-8">
                   
                    <div className="form-control md:w-full ">
                        <label className="label">
                            <span className="label-text">price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="price" placeholder="Price" className="input input-bordered w-full" defaultValue={price} />
                        </label>
                    </div>
                </div>
                {/* form category and details row */}
                <div className="md:flex mb-8">
                   
                    <div className="form-control w-full  rounded-xl">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <label className="input-group">
                            <input type="text" defaultValue={description} name="description" placeholder="Description" className="input input-bordered w-full"  />
                        </label>
                    </div>
                
                </div>
                
                <div className="form-control md:w-full mb-8 ">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="details" placeholder="Details" className="input input-bordered w-full" defaultValue={details} />
                        </label>
                    </div>
                
                <input type="submit" value="Update Toy" className="btn btn-block" />

            </form>
        </div>
            
        </div>
    );
};

export default UpdateToy;