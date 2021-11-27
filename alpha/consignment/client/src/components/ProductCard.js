import React, {useState} from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function ProductCard({data, setProductArr,productArr,setCartArr,cartArr }) 
{
    const product = data
    let product_id=product.id

    const [inCart,setInCart]=useState(false)
    
        function ButtonAddRemovePidFromCart(inCart,product_id, setProductArr,productArr,setCartArr,cartArr) 
        {
            (inCart ? 'Add to Cart' : 'Remove from Cart')
            (inCart 
                ? handleAddProductIDInCartArr(product_id, setProductArr,productArr,setCartArr,cartArr)
                : handleRemoveProductCarArr(product_id, setProductArr,productArr,setCartArr,cartArr))  
        }


    function handleAddProductIDInCartArr(product_id, setProductArr,productArr,setCartArr,cartArr) {
        setCartArr([product_id, ...cartArr ])
        setProductArr([productArr.filter(AllProductID => AllProductID !== product_id)])
        console.log(cartArr)
      }


    function handleRemoveProductCarArr(product_id, setProductArr,productArr,setCartArr,cartArr) {
        setProductArr([product_id, ...productArr])
        setCartArr([cartArr.filter(inCartProductID => inCartProductID !== product_id)])
        console.log(cartArr)
      }

    function handleAddProductidCart(inCart)
        { 
        setInCart(!inCart)
        ButtonAddRemovePidFromCart(inCart)
        setCartArr([product_id, ...cartArr ])
        }

    
    function handleClick(e) {
         console.log(e)
        {(inCart)
        ? handleRemoveProductCarArr(product.id)
        : handleAddProductIDInCartArr(product.id)
        }
    }
    
    return (
        <div className="card">
                <Card className="product" style={{ width: '18rem'}}>
                <Card.Img variant="top" src={product.photo} className="product-photo"/>
                <Card.Body>
                    <Card.Title>{product.category}</Card.Title>
                    {/* <Card.Text>
                    {product.review}
                    </Card.Text> */}
                    <Button onClick={e => handleClick(e)} 
                            variant="primary">{"Buy"}
                    </Button>
                </Card.Body>
                </Card>
            </div>
    )
}


export default ProductCard;