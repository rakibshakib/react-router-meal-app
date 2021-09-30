import React, { useEffect, useState } from 'react'
import Meal from '../Meal/Meal';

const FoodData = () => {
    const [foodData, setFoodData] = useState([]);
    const [searchText, setSearchText] = useState('');
    const onchangeHandeler = e => {
        const inputText = e.target.value;
        setSearchText(inputText)
    }
    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
        fetch(url).then(res => res.json()).then(data => setFoodData(data.meals))
    }, [searchText])
    return (
        <div>
            <div className="bg-gray-900 text-center py-2">
                <input onChange={onchangeHandeler} className='py-2 px-16 outline-none rounded-full focus:ring-2 focus:ring-red-400' type="text" placeholder='Search any meal' />
            </div>
            <div className="container mx-auto my-5 px-2">
                <h2>Total Food Search Result: {foodData.length}</h2>
                <hr />
                {foodData.length === 0 ? <button type="button" className="bg-red-300 rounded-lg text-center px-5" disabled>
                    <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                    </svg>
                    Processing...
                </button>
                    :
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 my-5 justify-items-center'>
                        {
                            foodData.map(meal => <Meal meal={meal} key={meal.idMeal} />)
                        }
                    </div>
                }
            </div>
        </div>
    )
}

export default FoodData
