import React, {useState} from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function ProductCard( {category = "deals",photo= "https://tinyurl.com/u4ffc999",review = "N/A",price}) {
    //  const[product, setProduct]= useState("")
    //  debugger
    // setProduct(props); 
    
    return (
        // <div className="product">
        //     <h5 className="component-name">{category}</h5>
        //                  <img src={photo} alt={"change name to text"}/>
        //                  <p>{review}</p>


        //             <p>Price: {price}</p>
        //             <br/>
        // </div>


    <Card style={{ width: '18rem'}}>
        
        

    <Card.Img variant="top" src={photo} />
    <Card.Body>
        <Card.Title>{category}</Card.Title>
        <Card.Text>
        {review}
        </Card.Text>
        <Button variant="primary">Buy</Button>
    </Card.Body>
    </Card>



    );
}


export default ProductCard;