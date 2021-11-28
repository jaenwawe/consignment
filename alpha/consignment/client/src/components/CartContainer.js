import { useState , useEffect} from "react";
 import { useHistory } from 'react-router-dom'

 import ProductCard from "./ProductCard";

function CartContainer({ order, setOrder, cartArr, removeFromCart, addToCart})
{
    let item = cartArr.map(product => 
        <ProductCard
        cartArr={cartArr}
        removeFromCart={removeFromCart}  
        addToCart={addToCart}
        cartArr ={cartArr}
        product={product}
        />)

    return (
        <div className="entire">
        {item}
        </div>
             
            )}

export default CartContainer;