import React from 'react'
import { Link } from 'react-router-dom'

const Meal = ({meal}) => {
    const {idMeal, strMeal, strCategory, strMealThumb} = meal
    return (
        <div className='text-center rounded-lg py-2 mx-2 bg-red-200  shadow-xl mt-5'>
            <figure className='w-3/4 mx-auto mt-2'>
                <img className='rounded-full border-2 border-gray-800' src={strMealThumb} alt="" />
            </figure>
            <div className='my-5'>
            <h4 className='text-xl font-semibold'>Food Title: {strMeal}</h4>
            <p className='text-md my-2 font-medium'>Category: {strCategory}</p>
            <Link to={`/mealdetails/${idMeal}`}>
                <button className='px-5 py-2 border mt-5 bg-gray-900 text-white rounded-lg outline-none border-none hover:bg-gray-800 hover:text-red-300'>See Details</button>
            </Link>
            </div>
        </div>
    )
}

export default Meal
