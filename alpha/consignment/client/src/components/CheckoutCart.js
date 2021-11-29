import React from "react";
import CartCard from "./CartCard"
import OrderItem from "./OrderItem"

function CheckoutCart({ cartClick, cartArr, setOrderItemsArr, order, product, currentUser,orderItemsArr,total, setTotal}) {
    

  return (
    <div className="container">
      
    <div id="collection">{cartArr.map (product => 
    <><CartCard product={product} cartClick={cartClick} />
    <OrderItem setOrderItemsArr={setOrderItemsArr} order={order} product={product} currentUser={currentUser} orderItemsArr={orderItemsArr} total={total}/>
    </>

    )} </div>
    
    <p>Update User that order number and with cost has been recieved.  They will recieve their items shortly</p>
    </div>
  );
}

export default CheckoutCart;