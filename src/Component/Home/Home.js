import React, { useEffect, useState } from 'react';
import Main from '../Main/Main';
import './Home.css'


const Home = () => {
    const [products, setProducts]= useState([]);
    useEffect(() =>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))

    },[])

    const handleAddToCart = () =>{
        console.log('clicked');
    }

    return (
        <div className=''>
              <h2>Daily Routine</h2> 
              <p>Select today,s Activities</p> 
        <div className="home-container">
           <div className="main-container">
            {
                products.map(product => <Main 
                    key={product.id}
                    product ={product}
                    handleAddToCart = {handleAddToCart}
                    ></Main>)
            }
            

            </div>
            <div className="cart-container">
                <h3>Profile</h3>
                <p></p>
            </div>
        
        
        
        
        </div>                           
             
            
        </div>
    );
};

export default Home;