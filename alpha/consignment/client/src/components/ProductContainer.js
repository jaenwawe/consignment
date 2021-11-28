import ProductCard from './ProductCard';

function ProductContainer({isLoggedIn,productArr,addToCart,removeFromCart,cartArr,inCart,setInCart}) {
    let item = productArr.map(product => 
        <ProductCard
            inCart={inCart}
            setInCart={setInCart}
            cartArr ={cartArr}
            removeFromCart={removeFromCart}  
            addToCart={addToCart}
            removeFromCart={removeFromCart}
            isLoggedIn={isLoggedIn} 
            product={product}
        />)
    
    return (
        
        <div id="product-collection">
        {item}

        </div>
             
            );
        }

export default ProductContainer;