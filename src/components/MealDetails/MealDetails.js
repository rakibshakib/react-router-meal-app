import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router'

const MealDetails = () => {
    const [foodDeatails, setFoodDetails] = useState({});
    const { idMeal } = useParams();
    let history = useHistory();
    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
        fetch(url)
            .then(res => res.json())
            .then(data => setFoodDetails(data.meals[0]))
    }, [idMeal])
    // console.log(idMeal);
    const {strMealThumb, strMeal, strCategory, strInstructions, strTags, strYoutube, strSource } = foodDeatails
    console.log(foodDeatails);
    const handleClick = () => {
        history.push("/home");
    }
    return (
        <div className='container mx-auto'>
            <div className='rounded-lg bg-red-100 shadow-xl flex md:flex-row flex-col items-center my-5'>
                <div className='md:w-2/5 mt-2 p-5 m-8'>
                    <img className='rounded border-2 border-gray-800' src={strMealThumb} alt="" />
                </div>
                <div className=' my-2 md:my-5 p-5 md:w-2/4'>
                    <h4 className='text-xl font-semibold'>Food Name: {strMeal}</h4>
                    <p className='text-md my-2 font-medium'>Category: {strCategory} <span>Tag: {strTags}</span></p>
                    <p className='text-md my-2 font-small'>Instruction: {strInstructions}</p>
                    <p className='text-md my-2 font-small'>Instruction: {strSource}</p>
                 
                    <a href={strYoutube} target="_blank" rel='noreferrer'>
                        <button className='px-5 py-2 border mt-5 bg-red-500 text-white rounded-lg outline-none border-none hover:bg-gray-800 hover:text-red-300'>See Recipie Video</button>
                    </a>
                    <button  onClick={handleClick} className='px-5 py-2 border mt-5 bg-gray-900 text-white rounded-lg outline-none border-none hover:bg-gray-800 hover:text-red-300 ml-5'>Back To FoodZone</button>
                </div>
            </div>
        </div>
    )
}

export default MealDetails
