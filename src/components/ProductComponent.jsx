import React from "react";
import { useSelector } from "react-redux";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
    
  return (
    <div>
      {products.map((product) => {
        console.log(product)
        const {id, title, image, price, category} = product
        return (
          <div key={id}>
            <div>
              <div>
                <img src={image} alt={title} />
              </div>
              <div>
                <div>{title}</div>
                <div>${price}</div>
                <div>{category}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductComponent;
