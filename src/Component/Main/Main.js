import React from 'react';
import './Main.css'


const Main = (props) => {
    const {product,handleAddToCart} = props;
    const{name, img, details, age, time} = product;
    
    return (
        <div className='main'>
            <img src= {img} alt="" />
            <div className='main-info'>
                <p className='main-name'>{name}</p>
                <p>{details}</p>
                <p><small>Age : {age}</small></p>
                <p><small>Time : {time}</small></p>
            </div>
            <button onClick={() =>handleAddToCart(product)} className='btn-cart'>
                <p>Add to list</p>
            </button>
        </div>
    );
};

export default Main;