import React, {useState} from "react";
import Dropdown from 'react-bootstrap/Dropdown';

import CartCard from "./CartCard"
import OrderItem from "./OrderItem"
import CartContainer from "./CartContainer"



function CheckoutCart({ removeFromCart,addOrderItems, cartClick, cartArr, setOrderItemsArr, order, product, currentUser,orderItemsArr,total, setTotal}) {
    setTotal(cartArr.reduce((a, {price}) => a + price, 0))

    const [pay_method, setPayMethod]= useState(order.pay_method)
    let display


    const checkout =(pay_method,cartArr) =>{
        persistOrderItems(cartArr)
        persistTotalPayMethod(order.id)
    }


    const persistOrderItems = (cartArr,order)=> {cartArr.map (product => {
        <div id="collection">
            <>
            <OrderItem setOrderItemsArr={setOrderItemsArr} order={order} product={product} currentUser={currentUser} orderItemsArr={orderItemsArr} total={total}/>
                addOrderItems(product_id=product.id,user_id=currentUser.id, order_id=order.id)
                removeFromCart(product)
            </>
         </div> })
    }

    function persistTotalPayMethod(pay_method, order, total) 
    {
        fetch(`/order_items/${order.id}`, {
            method: 'PATCH',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({
            pay_method
            })
        })
        .then(res => {
            if (res.ok) {
                res.json().then(order =>   endCheckout (total, pay_method, order))
            } else {
                res.json().then(errors => 
                console.error(errors)
            )
            }
        })
    }

    function endCheckout (total, pay_method, order){
        <p>For order{display} the pay_method{pay_method}  will be charged {total}</p>
    }



  return (
    <div className="container">

        <h5><br/>Total ${total}<br/><br/></h5> 
        <form  onSubmit={persistOrderItems}>
            <div className="mb-3" >
 
                <label className="form-label">Pay Method  &nbsp;
                    <input 
                    type="pay_method" 
                    name="pay_method" 
                    value={order.pay_method}
                    // onChange={(e) => setEmail(e.target.value)}
                    ></input>
                </label>
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label  className="form-label"> Total for this order &nbsp;  
                    <input 
                    type="total" 
                    name="total" 
                    value={total}
                    
                    ></input>
                </label>
            </div>
        
            <button type="submit" className="btn btn-primary">Submit</button>
            <br/><br/>
        </form>
        <CartContainer
        cartArr={cartArr} 
        setOrderItemsArr={setOrderItemsArr}
        orderItemsArr={orderItemsArr}
        cartClick={cartClick}
        order={order}
        total={total}
        setTotal={setTotal}/>

                 
        <h5>Checkout select your payment methood and hit submit on the button</h5> 


            
        
    </div>);
}

export default CheckoutCart;