import React, {useState} from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function ProductCard({data, addToCart, cartArr,removeFromCart }) 
{
    const [inCart,setInCart]=useState(false)
    const [name, setName]= useState('Add to Cart')
    const product = data
    const[product_id, setProductID]=useState(product.id)

        function addChangeButton()
        { 
            setInCart(!inCart)
            switchButtonTitle(inCart,product_id)
            addToCart(product_id)
        }

        function switchButtonTitle(inCart,product_id) 
        {
            (inCart 
                ? addChangeButton()
                : removeFromCart())  
        }

    function handleClick(e) {
        {(inCart)
        ? removeFromCart()
        : addChangeButton()
        }
        setName(inCart ? 'Add to Cart' : 'Remove from Cart')
        console.log(cartArr)
    }
    
    return (
        <div className="card">
                <Card className="product" style={{ width: '18rem'}}>
                <Card.Img variant="top" src={product.photo} className="product-photo"/>
                <Card.Body>
                    <Card.Title>{product.category}</Card.Title>
        
                    <Button onClick={e => handleClick(e)} 
                            variant="primary">{name}
                    </Button>
                </Card.Body>
                </Card>
            </div>
    )
}


export default ProductCard;