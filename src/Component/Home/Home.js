import { faBook } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Main from '../Main/Main';
import './Home.css'


const Home = () => {
    const [products, setProducts]= useState([]);
    const[cart, setCart] = useState([]);


    useEffect(() =>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))

    },[])

    const handleAddToCart = (product) =>{
        // console.log(product);
        const newCart =[...cart, product];
        setCart(newCart);
    }

    return (
        <div className='home-containers'>
            <div className='fa-icon'>             
              <h2 className='btn-text'> <FontAwesomeIcon icon= {faBook}></FontAwesomeIcon>Daily Routine</h2>
              <p>Select today,s Activities</p>               
            </div>
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
                <Cart cart={cart}></Cart>
                
          </div>
                                   
         </div> 

                                                    
        </div>
    );
};

export default Home;