import ProductCard from './ProductCard';

function ProductContainer({setProductArr,productArr,setCartArr,cartArr}) {
    let x = productArr.map(p => 
                    <ProductCard  
                    cartArr ={cartArr}
                    productArr={productArr}
                    setProductArr={setProductArr}
                    data={p}/>)
    
    return (
        
        <div id="product-collection">
        {x}

        </div>
             
            );
        }

export default ProductContainer;