import React from 'react';
import './FoodInputForm.css';

function FoodInputForm() {

    return (
        <>
            <div className='food-input-form-container'>
                <form action='/food' method='POST'>
                    <div className='food-input-container'>
                        <div className='food-input-wrapper'>
                            <label for='food-name'>Food Name</label>
                            <input type='text' name='food-name' />
                        </div>
                        <div className='food-input-wrapper'>
                            <label for='food-name'>Total Calories</label>
                            <input type='text' name='' />
                        </div>
                        <div className='food-input-wrapper'>
                            <label for='food-name'>Serving Size</label>
                            <div className='serving-size-wrapper'>
                                <input type='text' name='' />
                                <select name='serving-type'>
                                    <option value="oz">oz</option>
                                    <option value="g">g</option>
                                    <option value="ml">mL</option>
                                </select>
                            </div> 
                        </div>
                        <div className='food-input-wrapper'>
                            <label for='pro'>Protein (g)</label>
                            <input type='text' name='pro' />
                        </div>
                        <div className='food-input-wrapper'>
                            <label for='carbs'>Carbs (g)</label>
                            <input type='text' name='carbs' />
                        </div>
                        <div className='food-input-wrapper'>
                            <label for='fat'>Fat (g)</label>
                            <input type='text' name='fat' />
                        </div>
                    </div>
                    
                </form>
            </div>
        </>
    );
}

export default FoodInputForm;