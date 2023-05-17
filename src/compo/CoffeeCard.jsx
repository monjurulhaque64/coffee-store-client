import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {

    const { _id, name, quantity, supplier, test, category, details, photo } = coffee;

    const handleDelete = _id => {
        console.log(_id)
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                console.log('delete confirm')

                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: 'delete'

                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Coffee has been deleted.',
                                'success'
                            )
                            const remainig = coffees.filter(cof => cof._id !== _id)
                            setCoffees(remainig);
                        }
                    })
            }
        })
    }

    return (

        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img className='w-64' src={photo} alt="Movie" /></figure>
            <div className="flex justify-between w-full pr-4">
                <div className='p-4'>
                    <h2 className="card-title">{name}</h2>
                    <p>{quantity}</p>
                    <p>{supplier}</p>
                    <p>{test}</p>
                </div>
                <div className="card-actions justify-end">
                    <div className="btn-group btn-group-vertical space-y-4">
                        <button className="btn btn-active">view</button>
                        <Link to={`updateCoffee/${_id}`}><button className="btn">edit</button></Link>
                        <button onClick={() => handleDelete(_id)} className="btn bg-red-600">delete</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default CoffeeCard;