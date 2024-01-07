import React from 'react';
import FoodInputForm from '../FoodInputForm';
import FoodTable from '../FoodTable';

function Home() {
  return (
    <>
      <div className='home-page-container'>
        <FoodInputForm />
        <FoodTable />
      </div>
      
    </>
  );
}

export default Home;