import React from 'react';
import './FoodInputForm.css';

function FoodInputForm() {

    return (
        <>
            <div className='food-input-form-container'>
                <form action='/food' method='POST'>
                    <label for='food-name'>Food Name</label>
                    <input type='text' name='' />
                </form>
            </div>
        </>
    );
}

export default FoodInputForm;