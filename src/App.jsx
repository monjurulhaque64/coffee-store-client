
import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './compo/CoffeeCard';
import { useState } from 'react';

function App() {

 const loadedCoffees = useLoaderData();
 const [coffees, setCoffees] = useState(loadedCoffees);
  return (
    <div className='m-20'>
      
      <h1 className='text-6xl text-center text-purple-600'>Coffee: {coffees.length}</h1>
      <div className='grid gap-4 md:grid-cols-2 m-16'>
      {
        coffees.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee} coffees={coffees} setCoffees={setCoffees}></CoffeeCard>)
      }
      </div>
      
    </div>
  )
}

export default App