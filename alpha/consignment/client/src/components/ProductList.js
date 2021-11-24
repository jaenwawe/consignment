import ProductCard from './ProductCard';




function ProductList({handleProductIDInCartArr, productArr, addToCart}) {
    let x = productArr.map(p => <ProductCard handleProductIDInCartArr={handleProductIDInCartArr} data={p}/>)
    
    return (
        
        <div className="product-list">
        {x}

        </div>
             
            );
        }

export default ProductList;