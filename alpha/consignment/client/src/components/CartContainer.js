import { useState , useEffect} from "react";
 import { useHistory } from 'react-router-dom'

 import CartCard from "./CartCard";

function CartContainer({cartArr, cartClick,setName,name})

{
    let item = cartArr.map(product => 
        <CartCard
        product={product}
        cartClick={cartClick}
        setName={setName}
        cartArr={cartArr}
        name={name}
        />)

    return (
        <div className="entire">
        {item}
        </div>
             
            )}

export default CartContainer;