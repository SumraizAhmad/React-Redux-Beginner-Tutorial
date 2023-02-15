import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";
import {setProducts} from "../Redux/Actions/productsAction"
import axios from "axios";

const ProductListing = () => {

    
    const products=useSelector((state)=>state);
    const dispatch=useDispatch();

const fetchProducts=async ()=>{
    const response=await axios.get("https://fakestoreapi.com/products").catch((err)=>{
        console.log("err", err);
    })
    // console.log(response.data);
    dispatch(setProducts(response.data) );
}
useEffect(()=>{
    fetchProducts();
},[])

    console.log("products", products);

  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  );
};

export default ProductListing;
