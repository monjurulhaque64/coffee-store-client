import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {
    const coffee = useLoaderData();
    const { _id, name, quantity, supplier, test, category, details, photo } = coffee;

    const handleUpdateCoffee = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const quantity =form.quantity.value;
        const supplier = form.supplier.value;
        const test = form.test.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const updateCoffee = {name, quantity, supplier, test, category, details, photo}
        console.log(updateCoffee)

        // send data
        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: 'put',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateCoffee)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount > 0){
                Swal.fire({
                    title: 'Success',
                    text: 'Coffee Updated Successfully',
                    icon: 'success',
                    confirmButtonText: 'Submit'
                  })
                  
            }
        })
    }
 
    return (
        <div className=' p-24'>
        <h1 className='text-3xl font-extrabold'>Update coffee: {name}</h1>
        <form onSubmit={handleUpdateCoffee}>
            <div className='md:flex gap-4'>
                <div className="form-control w-1/2">
                    <label className="label">
                        <span className="label-text">Coffee Name</span>
                    </label>
                    <label className="input-group">
                        
                        <input name='name' defaultValue={name} type="text" placeholder="Coffee Name" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control w-1/2">
                    <label className="label">
                        <span className="label-text">Quantity</span>
                    </label>
                    <label className="input-group">
                        
                        <input name='quantity' defaultValue={quantity} type="text" placeholder="Quantity" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            <div className='md:flex gap-4'>
                <div className="form-control w-1/2">
                    <label className="label">
                        <span className="label-text">Supplier</span>
                    </label>
                    <label className="input-group">
                        
                        <input name='supplier' type="text" defaultValue={supplier} placeholder="Supplier" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control w-1/2">
                    <label className="label">
                        <span className="label-text">Test</span>
                    </label>
                    <label className="input-group">
                        
                        <input name='test' defaultValue={test} type="text" placeholder="Test" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            <div className='md:flex gap-4'>
                <div className="form-control w-1/2">
                    <label className="label">
                        <span className="label-text">Category</span>
                    </label>
                    <label className="input-group">
                        
                        <input name='category' defaultValue={category} type="text" placeholder="Category" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control w-1/2">
                    <label className="label">
                        <span className="label-text">Details</span>
                    </label>
                    <label className="input-group">
                        
                        <input name='details' defaultValue={details} type="text" placeholder="Details" className="input input-bordered w-full" />
                    </label>
                </div>
                
            </div>
            <div className=' gap-4'>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Photo URl</span>
                    </label>
                    <label className="input-group">
                        
                        <input name='photo' defaultValue={photo} type="text" placeholder="Photo URl" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            <input className="btn btn-block mt-6" type="submit" value="Update Coffee" />
        </form>
    </div>
    );
};

export default UpdateCoffee;