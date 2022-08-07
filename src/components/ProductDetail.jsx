import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { selectedProduct} from '../redux/actions/productActions'
const ProductDetail = () => {
    const product = useSelector((state) => state.product)
  const { productId } = useParams();
  const dispatch = useDispatch()
  console.log(productId);

  const fetchProductDetail = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((error) => {
        console.log("err", error);
      });
      dispatch(selectedProduct(response.data))
  };

  return (
    <div>
      <h1> Product Detail</h1>
    </div>
  );
};

export default ProductDetail;
