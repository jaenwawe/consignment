import React, {useState} from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

//function ProductCard({order, setOrder, data, addToCart, cartArr,removeFromCart }) 
function ProductCard({order, setOrder, product, addToCart, cartArr,removeFromCart,inCart,setInCart }) 
{

   
    const [name, setName]= useState('Add to Cart')
   // const product = data
   // const[product_id, setProductID]=useState(product.id)

        function addChangeButton(e) 
        {
            setInCart(!inCart)
         
            {(inCart)
                ? inside ()
                : outside()
            }

            // function inside(){
            //     removeFromCart(product_id)
            //     setName(inCart ? 'Add to Cart' : 'Remove from Cart')
            //     console.log(cartArr)
            // }
            // function outside(){
            //     addToCart(product_id)
            //     setName(inCart ? 'Add to Cart' : 'Remove from Cart')
            //     console.log(cartArr)
            // }


            function inside(){
                removeFromCart(product)
                setName(inCart ? 'Add to Cart' : 'Remove from Cart')
                console.log(cartArr)
                
            }
            function outside(){
                addToCart(product)
                setName(inCart ? 'Add to Cart' : 'Remove from Cart')
                console.log(cartArr)
            }
            
        
        }
  
    
    return (
        <div className="card">
                <Card className="product" style={{ width: '18rem'}}>
                <Card.Img variant="top" src={product.photo} className="product-photo"/>
                <Card.Body>
                    <Card.Title>{product.category}</Card.Title>
        
                    <Button onClick={e => addChangeButton(e)} 
                            variant="primary">{name}
                    </Button>
                </Card.Body>
                </Card>
            </div>
    )
}
export default ProductCard;