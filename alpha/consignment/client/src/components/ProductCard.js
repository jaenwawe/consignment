import React, {useState} from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function ProductCard({data, handleProductIDInCartArr }) {

    const product = data

    function handleClick(e) {
        console.log(e)
        handleProductIDInCartArr(product.id)
    }
    
    return (
            <div> 
 
                <Card className="product" style={{ width: '18rem'}}>
                <Card.Img variant="top" src={product.photo} />
                <Card.Body>
                    <Card.Title>{product.category}</Card.Title>
                    {/* <Card.Text>
                    {product.review}
                    </Card.Text> */}
                    <Button onClick={e => handleClick(e)} 
                            variant="primary">Buy
                    </Button>
                </Card.Body>
                </Card>
            </div>
    )
}


export default ProductCard;