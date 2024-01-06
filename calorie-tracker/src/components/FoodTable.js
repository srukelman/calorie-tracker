import React from "react";
import './FoodTable.css'

function FoodTableBody({list}){
    return (
        <>
            <tbody className='food-table-body'>
                {
                    list.map(item => {
                        return (
                            <tr className='food-table-row'>
                                {
                                    Object.values(item).map(value => {
                                        return (<td className="food-table-cell">{value}</td>)
                                    })
                                }   
                            </tr>
                        );
                    })
                }
            </tbody>
        </>
    );
}

function FoodTable() {
    const list = [
        {name: 'apple', cal: '50', pro: '1', carbs: '15', fat: '0'},
        {name: 'banana', cal: '80', pro: '1.5', carbs: '20', fat: '0.5'},
        {name: 'broccoli', cal: '30', pro: '3', carbs: '6', fat: '0.3'},
        {name: 'grape', cal: '70', pro: '0.8', carbs: '18', fat: '0.2'},
        {name: 'salmon', cal: '200', pro: '25', carbs: '0', fat: '12'},
        {name: 'quinoa', cal: '120', pro: '4', carbs: '21', fat: '2'},
        {name: 'spinach', cal: '10', pro: '1', carbs: '1', fat: '0.3'},
        {name: 'walnut', cal: '185', pro: '4', carbs: '4', fat: '18'},
        {name: 'carrot', cal: '30', pro: '0.6', carbs: '7', fat: '0.1'},
        {name: 'yogurt', cal: '150', pro: '10', carbs: '15', fat: '8'}
      ];
    return (
        <>
            <div className="food-table-container">
                <table className="food-table">
                    <thead>
                        <tr>
                            <th className="food-table-header">Food</th>
                            <th className="food-table-header">Calories</th>
                            <th className="food-table-header">Protein (g)</th>
                            <th className="food-table-header">Carbs (g)</th>
                            <th className="food-table-header">Fat (g)</th>
                        </tr>
                    </thead>
                    <FoodTableBody list={list}/>
                </table>
            </div>
        </>
    );
}

export default FoodTable;