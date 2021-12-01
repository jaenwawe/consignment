import React, {useState} from "react";
// import Dropdown from 'react-bootstrap/Dropdown';

 import CartCard from "./CartCard"
// import OrderItem from "./OrderItem"
// import CartContainer from "./CartContainer"



function CheckoutCart({ removeFromCart,addOrderItems, cartClick, cartArr, setOrderItemsArr, order, product, currentUser,orderItemsArr,total, setTotal}) {
 // function CheckoutCart({ cartClick, cartArr, setOrderItemsArr, order,currentUser,orderItemsArr,total, setTotal}) {
        setTotal(cartArr.reduce((a, {price}) => a + price, 0))

    const [pay_method, setPayMethod]= useState(null)
    let display
    let order_id
    let customer_id  = currentUser.id
    let product_id


    const checkout =(total) =>{
      
        persistOrderItems(cartArr, order_id,customer_id)
        persistTotalPayMethod(customer_id== currentUser.id, pay_method, order_id, total) 
    }

    function persistOrderItems (cartArr, customer_id = currentUser.id, order_id=order.id) {
        cartArr.map(product => {
            product_id = product.id
            postOneOrderItem (product_id,customer_id = currentUser.id,order_id=order.id)
        })
    }

    function postOneOrderItem (product_id ,customer_id=currentUser.id,order_id=order.id){
        fetch("/sold", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
        body: JSON.stringify({
                order_id,
                product_id,
                customer_id
            })
        })
        .then(res => {
            if (!res.ok) 
            res.json().then(errors => {console.error(errors)})
            }
        )
    }

function persistTotalPayMethod(pay_method, order_id, total) 
{
    fetch(`/orders/${order_id}`, {
        method: 'PATCH',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({
        pay_method, 
        total
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

        <h5><br/> Total ${total}<br/><br/></h5> 
        <form  onSubmit={()=>checkout(total)}>      <div className="mb-3" >
 
                <label className="form-label">Pay Method
                    <input 
                    type="pay_method" 
                    name="pay_method" 
                    value={pay_method}
                     onChange={(e) => setPayMethod(e.target.value)}
                    ></input>
                </label>
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label  className="form-label"> Total for this order is $ &nbsp;  
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
        {/* <CartContainer
        cartArr={cartArr} 
        setOrderItemsArr={setOrderItemsArr}
        orderItemsArr={orderItemsArr}
        cartClick={cartClick}
        order={order}
        total={total}
        setTotal={setTotal}/> */}

                 
        <h5>Checkout select your payment methood and hit submit on the button</h5> 


            <div id="collection">
                {cartArr.map (product => 
                <>
                    <CartCard product={product} cartClick={cartClick}/>
                {/* <OrderItem setOrderItemsArr={setOrderItemsArr} order={order} product={product} currentUser={currentUser} orderItemsArr={orderItemsArr} total={total}/> */}
                </>

            )} 
            </div>
    </div>
        

    );
}

export default CheckoutCart;