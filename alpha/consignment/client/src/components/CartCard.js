import React, {useState} from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function CartCard({product,cartArr, cartClick}) 
{
        function addChangeButton(e) 
        {      
        cartClick(product)  
        console.log(cartArr)
        }
        
    return (
        <div>
                <Card  className="product" style={{ width: '18rem'}}>
                <Card.Img variant="top" src={product.photo} className="product-photo"/>
                <Card.Body>
                    <Card.Title>{product.category}</Card.Title>
        
                    <Button onClick={e => addChangeButton(e)} 
                            variant="primary">Remove from Cart
                    </Button>
                </Card.Body>
                </Card>
            </div>
    )
}
export default CartCard;