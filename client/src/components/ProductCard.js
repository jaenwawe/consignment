import React, {useState} from 'react';

function ProductCard( {category = "deals",photo= "https://tinyurl.com/u4ffc999",review = "N/A",price}) {
    //  const[product, setProduct]= useState("")
    //  debugger
    // setProduct(props); 
    
    return (
        <div className="product">
            <h5 className="component-name">{category}</h5>
                         <img src={photo} alt={"change name to text"}/>
                         <p>{review}</p>


                    <p>Price: {price}</p>
                    <br/>
        </div>
    );
}


export default ProductCard;