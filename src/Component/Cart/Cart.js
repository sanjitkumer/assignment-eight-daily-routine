import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {
    return (
        <div className='cart'>
         <div className='part-1'>
            <h3>Sanjit Kumer</h3>
            <p>Dhaka,Bangladesh</p> 
          </div> 
          <div className='part-2'>
              <div>
              <h2>75 <small>kg</small></h2>
              <h3>weight</h3>
              </div>

              <div>
              <h2>75 <small>kg</small></h2>
              <h3>weight</h3>
              </div>

              <div>
              <h2>75 <small>kg</small></h2>
              <h3>weight</h3>
              </div>
          </div>            
            
        </div>
    );
};

export default Cart;