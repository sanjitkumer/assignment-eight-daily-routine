import { faLocation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Cart.css';

const Cart = ({props}) => {
   
    // const {cart} = props;
    // let total = 0;
    // for (const product of cart){
    //     total =total + product.time;
    // }
    return (
        <div className='cart'>
            <div className='part-1'>
                <h1>Sanjit Kumer</h1>
                <div className='location'>
                 <FontAwesomeIcon icon = {faLocation} ></FontAwesomeIcon>
                 <p >Dhaka,Bangladesh</p> 

                </div>
                
            </div> 

            <div className='part-2'>
                <div>
                <h2>75 <small>kg</small></h2>
                <h3>weight</h3>
                </div>

                <div>
                <h2>6.5</h2>
                <h3>Height</h3>
                </div>

                <div>
                <h2>25 <small>yrs</small></h2>
                <h3>Age</h3>
                </div>
            </div> 

            <div className='part-3'>
                <h2> Add A Break</h2>                
            </div>
            <div className='part-4'>
                <button>10 m</button>
                <button>15 m</button>
                <button>30 m</button>
                <button>20 m</button>          
            </div>

            <div className='part-5'>
                <h2>Exercise Details</h2>

                <div className='exercise-time'>
                    <h4>Exercise Time :</h4>
                </div>
                <div className=''>
                    <h4>Break time :  </h4>
                </div>
            </div>

            <button>
                <h3>Activity Complete</h3>
            </button>


            
        </div>
    );
};

export default Cart;