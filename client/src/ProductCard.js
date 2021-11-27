import React, {useState} from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function ProductCard( {category = "deals",photo= "https://tinyurl.com/u4ffc999",review = "N/A",price}) {
 
    
    return (

    <Card className="product" style={{ width: '18rem'}}>
    <Card.Img variant="top" src={photo} />
    <Card.Body>
        <Card.Title>{category}</Card.Title>
        <Card.Text>
        {review}
        </Card.Text>
    </Card.Body>
    </Card>

  );
}


export default ProductCard;