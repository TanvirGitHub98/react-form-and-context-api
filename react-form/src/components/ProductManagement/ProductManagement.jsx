import React, { useState } from 'react';
import ProductsForm from './ProductsForm';
import ProductsTable from './ProductsTable';

const ProductManagement = (props) => {
    const [product,setProduct]=useState([])
    const handleNewProduct=(newProduct)=>{
        setProduct([...product,newProduct])
    }
    return (
        
        <div>
            <ProductsForm handleNewProduct={handleNewProduct}></ProductsForm>
            <ProductsTable product={product}></ProductsTable>

        </div>
    );
};

export default ProductManagement;