import { faLocation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import './Cart.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cart = (props) => {

    const [count, setCount] = useState(0);

    useEffect(()=>{
        const time = localStorage.getItem('totaltime');
        setCount(time);
    },[count])

    const addedCount =(time) =>{
        localStorage.setItem('totaltime',JSON.stringify(time))
        setCount(time);
    }
   
    const { cart } = props;
    console.log(cart);
   
    let total = 0;
    for (const product of cart){
        total =total + product.time;
    }
    
        const alert = () => {
            console.log('click')
            toast("Wow so easy!")
        };

    return (
        <div className='cart'>
            <div className='part-1'>
                <h1>Sanjit Kumer</h1>
                <div className='location'>                
                 <p >  <FontAwesomeIcon icon = {faLocation} ></FontAwesomeIcon>Dhaka,Bangladesh</p> 
                </div>                
            </div> 

            <div className='part-2'>
                <div className='weight'>
                <h2>75 <small>kg</small></h2>
                <h3>weight</h3>
                </div>

                <div className='height'>
                <h2>6.5</h2>
                <h3>Height</h3>
                </div>

                <div className='age'>
                <h2>25 <small>yrs</small></h2>
                <h3>Age</h3>
                </div>
            </div> 

            <div className='part-3'>
                <h2> Add A Break</h2>                
            </div>
            <div className='part-4'>
                <button className='btn-cart-1' onClick={()=>addedCount(10)}>10 m</button>
                <button className='btn-cart-2' onClick={()=>addedCount(15)}>15 m</button>
                <button className='btn-cart-3' onClick={()=>addedCount(30)}>30 m</button>
                <button className='btn-cart-4' onClick={()=>addedCount(20)}>20 m</button>          
            </div>

            <div className='part-5'>
                <h2>Exercise Details :</h2>

                <div className='exercise-time'>
                    <h4>Exercise Time :{total} Min</h4>
                </div>
                <div className=''>
                    <h4>Break time :  {count} </h4>
                </div>
            </div>

           <div className=''>
             <button className='btn-activity' onClick={alert}>
                <h3>Activity Complete</h3>
             </button>
             <ToastContainer />
           </div>            
        </div>
    );
};

export default Cart;