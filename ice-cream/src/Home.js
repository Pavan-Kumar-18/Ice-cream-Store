import React from 'react';
import Card from './Card';

const Home = (props) => {
  const addToCart = (item) => {
    console.log('Item added to cart:', item);
  };

  return (
    <div className='container'>
      <div className='card'>
        <Card addToCart={addToCart} info={props.data} />
      </div>
    </div>
  );
};

export default Home;
