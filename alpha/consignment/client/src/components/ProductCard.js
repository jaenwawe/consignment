import React, {useState} from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function ProductCard({product,nonCartProductClick}) 
{   

        function addChangeButton(e) 
        {
          
            nonCartProductClick(product)  
        
        }       
            
    return (
        <div className="card">
                <Card className="product" style={{ width: '18rem'}}>
                <Card.Img variant="top" src={product.photo} className="product-photo"/>
                <Card.Body>
                    <Card.Title>{product.category}</Card.Title>
        
                    <Button onClick={e => addChangeButton(e)} 
                            variant="primary">Add to Cart
                    </Button>
                </Card.Body>
                </Card>
            </div>
    )
}
export default ProductCard;