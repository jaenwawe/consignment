import React, {useState} from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function ProductCard({data, addToCart}) {
    //  const[product, setProduct]= useState("")
    //  debugger
    // setProduct(props); 
    const product = data

    function handleClick(e) {
        addToCart(product.id)
    }
    
    return (
        // <div className="product">
        //     <h5 className="component-name">{category}</h5>
        //                  <img src={photo} alt={"change name to text"}/>
        //                  <p>{review}</p>


        //             <p>Price: {price}</p>
        //             <br/>
        // </div>


    <Card className="product" style={{ width: '18rem'}}>
    <Card.Img variant="top" src={product.photo} />
    <Card.Body>
        <Card.Title>{product.category}</Card.Title>
        <Card.Text>
        {product.review}
        </Card.Text>
        <Button onClick={e => handleClick(e)} 
                variant="primary">Buy
        </Button>
    </Card.Body>
    </Card>


//add logic for currentUser to click a BuyButton and 
//              !currentUser to get a login alert

//filter   songs.filter(song != selectedSong)   gets the products not clicked
    );
}


export default ProductCard;