import React from 'react';

function ProductCard(props) {
    // props = { title: "My Title" }
    // props.title => "My Title"
    
    return (
        <div className="product">
                         <h1>Title: {props.title}</h1>
                         <img src={props.product.photo}  alt="product"
                         />
            <h2 className="component-name">Product Component</h2>
   
            <p>Price: {props.price}</p>
        </div>
    );
}

export default ProductCard;