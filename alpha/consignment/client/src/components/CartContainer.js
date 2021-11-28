import { useState , useEffect} from "react";
 import { useHistory } from 'react-router-dom'

 import ProductCard from "./ProductCard";

function CartContainer({ 
    currentUser, order, 
    cartArr, removeFromCart,addToProductArr,
    addToCart, removeFromProductArr,isLoggedIn})
{
    let item = cartArr.map(p => 
        <ProductCard
        currentUser={currentUser} 
        order={order} 
        cartArr ={cartArr}
        removeFromCart={removeFromCart}  
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        isLoggedIn={isLoggedIn} 
        data={p}
        />)

    return (
        <div id="product-collection">
        {item}
        </div>
             
            )}

export default CartContainer;