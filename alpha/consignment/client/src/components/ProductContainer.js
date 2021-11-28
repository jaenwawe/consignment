import ProductCard from './ProductCard';

function ProductContainer({productArr, removeFromCart, addToCart, cartArr}) {
    let x = productArr.map(p => 
        <ProductCard
            removeFromCart={removeFromCart}  
            addToCart={addToCart}
            cartArr ={cartArr}
            removeFromCart={removeFromCart} 
            data={p}
        />)
    
    return (
        
        <div id="product-collection">
        {x}

        </div>
             
            );
        }

export default ProductContainer;