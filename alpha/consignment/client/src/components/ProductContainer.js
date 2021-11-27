import ProductCard from './ProductCard';

function ProductContainer({handleProductIDInCartArr, productArr, addToCart}) {
    let x = productArr.map(p => <ProductCard handleProductIDInCartArr={handleProductIDInCartArr} data={p}/>)
    
    return (
        
        <div id="product-collection">
        {x}

        </div>
             
            );
        }

export default ProductContainer;